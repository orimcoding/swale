"use client";

import { createClient } from "@/lib/supabase/client";
import type { Session, User } from "@supabase/supabase-js";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session)).finally(() => setLoading(false));

    // Listen for changes on auth state (logged in, signed out, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const signOut = useCallback(async () => {
    setIsSigningOut(true);

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      await supabase.auth.signOut();
      setSession(null);
    } finally {
      setIsSigningOut(false);
    }
  }, [supabase]);

  return {
    session,
    user: session?.user ?? null,
    loading,
    isAuthenticated: Boolean(session?.user),
    isSigningOut,
    signOut,
  } satisfies {
    session: Session | null;
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;
    isSigningOut: boolean;
    signOut: () => Promise<void>;
  };
}
