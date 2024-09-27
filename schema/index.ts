import * as z from "zod";

export const ContactUsSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Valid email is required",
  }),
  reason: z.string().min(1, {
    message: "Reason for contacting us is required",
  }),
});
