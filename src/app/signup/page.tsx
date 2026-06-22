"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthShell } from "@/components/auth/auth-shell";

export default function SignupPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = (await response.json()) as {
        error?: string;
      };

      if (!response.ok) {
        setError(result.error ?? "Unable to create account");
        return;
      }

      setSuccess(
        "Account created. You can now sign in with your email and password."
      );

      setTimeout(() => {
        router.push("/login");
        router.refresh();
      }, 1200);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthShell
      title="Create your account."
      subtitle="Start building your football workspace with live scores, player intelligence, and competition context in one place."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-blue-700 hover:text-blue-800">
            Sign in
          </Link>
        </>
      }
    >
      <AuthForm
        mode="signup"
        submitLabel={isSubmitting ? "Creating account..." : "Create account"}
        helperText="Create your account to unlock live matchday views, player dossiers, and competition tracking across club and international football."
        isSubmitting={isSubmitting}
        error={error}
        success={success}
        onSubmit={handleSubmit}
      />
    </AuthShell>
  );
}
