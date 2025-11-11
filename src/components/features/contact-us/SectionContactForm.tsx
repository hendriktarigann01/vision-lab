"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { User, Mail, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const SectionContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbytyZwI4mbgnow1cRUAy-EWoLKIDjpq12l-l1TatB_PhqTVqny5kB9jaY9Qe9KrctpM/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            message: data.message,
          }),
        }
      );

      // Reset form setelah berhasil
      form.reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-8 md:px-6 bg-[#FAFAFA] flex items-center justify-center">
      <div className="w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 items-stretch h-full md:p-20">
          {/* Right Side - Form - Order 1 on mobile, 2 on desktop */}
          <Card className="p-5 md:px-12 rounded-none border-none shadow-none md:py-10 flex flex-col justify-center order-1 md:order-2">
            <div className="mb-6">
              <h2 className="text-xl md:text-3xl text-gray-900 mb-2 md:mb-4">
                Let&apos;s Get In Touch
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Feel free to drop us a line below
              </p>
            </div>

            <Form {...form}>
              <div className="space-y-5">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  rules={{ required: "Full name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF6B35] w-4 h-4 z-10" />
                          <Input
                            placeholder="Ex: David Casie"
                            {...field}
                            className="pl-10 h-12 border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                            disabled={isSubmitting}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Address */}
                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF6B35] w-4 h-4 z-10" />
                          <Input
                            type="email"
                            placeholder="Ex: contact@gmail.com"
                            {...field}
                            className="pl-10 h-12 border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                            disabled={isSubmitting}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phone"
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF6B35] w-4 h-4 z-10" />
                          <Input
                            type="tel"
                            placeholder="Ex: 08976785"
                            {...field}
                            className="pl-10 h-12 border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
                            disabled={isSubmitting}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what we can help you"
                          {...field}
                          className="min-h-[120px] border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35] resize-none"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  onClick={form.handleSubmit(onSubmit)}
                  type="button"
                  disabled={isSubmitting}
                  className="w-full h-12 cursor-pointer bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner variant="circle" size={16} className="mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </Form>
          </Card>

          {/* Left Side - Image - Order 2 on mobile, 1 on desktop */}
          <div className="relative flex items-center justify-center bg-white overflow-hidden order-2 md:order-1">
            <Image
              src="/humans/vl-human-girl-contact.webp"
              alt="Vision Lab Contact"
              width={400}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContactForm;
