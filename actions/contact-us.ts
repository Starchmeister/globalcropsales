// src/lib/contact.ts
"use server";

import * as z from "zod";
import { ContactUsSchema } from "@/schema";

// Function to send the contact details
export async function contact(values: z.infer<typeof ContactUsSchema>) {
  // Validate fields
  const validatedFields = ContactUsSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields, please retry!" };
  }

  // Send validated data to the API route
  try {
    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "https://globalcropsales.com";

    const response = await fetch(`${baseURL}/api/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedFields.data),
    });

    const result = await response.json();
    if (result.status === "success") {
      return { success: "Message Successfully Sent!" };
    } else {
      return { error: "Failed to send the message, please try again!" };
    }
  } catch (error) {
    console.error("Failed to send contact message:", error);
    return { error: "Network error, please try again!" };
  }
}
