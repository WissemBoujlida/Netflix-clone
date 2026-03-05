import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid Email"),
  password: z.string().min(1, "Please enter your password"),
});

export const registerSchema = z.object({
  name: z.string().min(1, "Username is required"),
  email: z.email("Invalid Email"),
  password: z
    .string()
    .min(8, "The password must contain at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
