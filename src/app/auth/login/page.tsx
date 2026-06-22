import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthShell } from "@/components/auth/auth-shell";

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back."
      subtitle="Sign in to open your football workspace, follow live matchdays, and pick up where you left off."
      footer={
        <>
          New to Swale? {" "}
          <Link href="/auth/signup" className="font-medium text-blue-700 hover:text-blue-800">
            Create an account
          </Link>
        </>
      }
    >
      <AuthForm
        mode="login"
        submitLabel="Sign in"
        helperText="Use your email and password to access your live dashboard, saved context, and player tracking workspace."
      />
    </AuthShell>
  );
}
