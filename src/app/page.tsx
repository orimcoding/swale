'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { LoginPageUI } from '@/components/auth/LoginPageUI';

export default function Home() {
  const router = useRouter();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (!loading && session) {
      router.push('/dashboard');
    }
  }, [session, loading, router]);

  // Show loading or login based on auth state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-zinc-400">Loading...</div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!session) {
    return <LoginPageUI />;
  }

  // If we have a session but haven't redirected yet, show loading
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-zinc-400">Redirecting...</div>
    </div>
  );
}

