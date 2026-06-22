import Link from "next/link";
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
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Login</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Sign in to continue.
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Your login form will live here in the next commit.
        </p>
      </div>
    </AuthShell>
  );
}
