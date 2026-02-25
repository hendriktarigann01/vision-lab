export interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
  permalink: string;
  thumbnail_url?: string;
  like_count?: number;
  comments_count?: number;
}

export async function getInstagramPosts(
  limit: number = 10
): Promise<InstagramPost[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const igUserId = process.env.IG_USER_ID;

  if (!accessToken || !igUserId) {
    console.error("Instagram credentials not configured");
    return [];
  }

  try {
    const url = `https://graph.facebook.com/v24.0/${igUserId}/media?fields=id,caption,media_url,media_type,timestamp,permalink,thumbnail_url,like_count,comments_count&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: {
        revalidate: 0, // 8 hours
        
        tags: ["instagram-posts"],
      },
      // Timeout prevent hanging
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error("Instagram API Error:", {
        status: response.status,
        error: errorData,
        timestamp: new Date().toISOString(),
      });

      // Check token if expired
      if (errorData.error?.code === 190) {
        console.error("TOKEN EXPIRED! Run refresh-token script");

        // TODO: Send alert email/notification to mjsolutionsoftware1@gmail.com
      }

      return [];
    }

    const data = await response.json();
    const validPosts = (data.data || []).filter(
      (post: InstagramPost) => post.media_url || post.thumbnail_url
    );

    return validPosts;
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return [];
  }
}
