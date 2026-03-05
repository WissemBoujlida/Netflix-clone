"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { authClient } from "@/lib/auth-client";

export function AuthCard() {
  const [authView, setAuthView] = useState<"login" | "register">("login");

  async function socialSignIn(provider: "google" | "github") {
    await authClient.signIn.social({
      provider,
    });
  }

  return (
    <Card className="bg-black/85 border-none rounded-sm w-full md:w-md md:px-8 md:py-16">
      <CardHeader>
        <CardTitle className="text-white text-3xl font-bold tracking-tight">
          {authView === "login" ? "Sign in" : "Register"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {authView === "login" ? <LoginForm /> : <RegisterForm />}
        <div className="flex items-center justify-center gap-x-4 mt-8">
          <Button
            variant="outline"
            className="size-10 bg-white rounded-full hover:cursor-pointer hover:bg"
            onClick={() => socialSignIn("google")}
          >
            <FcGoogle className="size-8" />
          </Button>
          <Button
            variant="outline"
            className="size-10 bg-white rounded-full hover:cursor-pointer"
            onClick={() => socialSignIn("github")}
          >
            <FaGithub className="size-8" color="black" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex justify-center items-center whitespace-nowrap">
        <span className="text-muted-foreground">
          {authView === "login"
            ? "First time using Netflix?"
            : "Already have an account?"}
          &nbsp;
        </span>

        {authView === "login" ? (
          <span
            className="text-white font-bold hover:cursor-pointer"
            onClick={() => setAuthView("register")}
          >
            Create an account
          </span>
        ) : (
          <span
            className="text-white font-bold hover:cursor-pointer"
            onClick={() => setAuthView("login")}
          >
            Sign in
          </span>
        )}
      </CardFooter>
    </Card>
  );
}
