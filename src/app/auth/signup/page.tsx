import Link from "next/link";
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
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Sign up</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Create your access.
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Your signup form will live here in the next commit.
        </p>
      </div>
    </AuthShell>
  );
}
