"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { RegisterFormData, registerSchema } from "@/lib/schemas/auth";

export function RegisterForm() {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  function onSubmit(formData: RegisterFormData) {
    console.log("Form Data: ", formData);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id={field.name}
                placeholder="Username"
                aria-invalid={fieldState.invalid}
                disabled={isSubmitting}
                className="bg-neutral-600 h-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="Email"
                aria-invalid={fieldState.invalid}
                disabled={isSubmitting}
                className="bg-neutral-600 h-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="Password"
                aria-invalid={fieldState.invalid}
                disabled={isSubmitting}
                className="bg-neutral-600 h-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-500 hover:bg-red-600 hover:cursor-pointer text-lg mt-8 h-12"
      >
        Login
      </Button>
    </form>
  );
}
