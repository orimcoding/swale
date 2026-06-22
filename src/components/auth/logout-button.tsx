"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useAuth } from "@/lib/hooks/useAuth";

export function LogoutButton() {
  const router = useRouter();
  const { signOut, isSigningOut } = useAuth();

  async function handleLogout() {
    await signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isSigningOut}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
    >
      <LogOut className="h-4 w-4" />
      {isSigningOut ? "Signing out..." : "Sign out"}
    </button>
  );
}
