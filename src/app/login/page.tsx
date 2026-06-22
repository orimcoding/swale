"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthShell } from "@/components/auth/auth-shell";

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(result.error ?? "Unable to sign in");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthShell
      title="Welcome back."
      subtitle="Sign in to open your football workspace, follow live matchdays, and pick up where you left off."
      footer={
        <>
          New to Swale?{" "}
          <Link href="/signup" className="font-medium text-blue-700 hover:text-blue-800">
            Create an account
          </Link>
        </>
      }
    >
      <AuthForm
        mode="login"
        submitLabel={isSubmitting ? "Signing in..." : "Sign in"}
        helperText="Use your email and password to access your live dashboard, saved context, and player tracking workspace."
        isSubmitting={isSubmitting}
        error={error}
        onSubmit={handleSubmit}
      />
    </AuthShell>
  );
}
