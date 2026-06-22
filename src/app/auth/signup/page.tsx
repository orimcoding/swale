import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthShell } from "@/components/auth/auth-shell";

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account."
      subtitle="Start building your football workspace with live scores, player intelligence, and competition context in one place."
      footer={
        <>
          Already have an account? {" "}
          <Link href="/auth/login" className="font-medium text-blue-700 hover:text-blue-800">
            Sign in
          </Link>
        </>
      }
    >
      <AuthForm
        mode="signup"
        submitLabel="Create account"
        helperText="Create your account to unlock live matchday views, player dossiers, and competition tracking across club and international football."
      />
    </AuthShell>
  );
}
