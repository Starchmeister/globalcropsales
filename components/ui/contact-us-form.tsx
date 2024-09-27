"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { ContactUsSchema } from "@/schema";
import { contact } from "@/actions/contact-us";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { Button } from "./button";

export function ContactUsForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      reason: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactUsSchema>) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      contact(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div className="rounded-[10px] z-20 bg-gcs_lightgreen p-8 ">
      <h3 className="text-[24px] pb-4 md:text-left tracking-[-2px] font-medium">
        For any enquiries or feedback, please fill out the form below.
      </h3>
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="tracking-[-1px]">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your name"
                      type="name"
                      className="rounded-sm h-9"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="tracking-[-1px]">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your email"
                      type="email"
                      className="rounded-sm h-9"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="tracking-[-1px]">Reason</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isPending}
                      placeholder="Please enter a reason for your reaching out to us"
                      className="rounded-sm h-9"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full rounded-sm"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
}
