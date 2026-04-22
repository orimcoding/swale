import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { LoginPageUI } from '@/components/auth/LoginPageUI';

export default async function Home() {
  const supabase = await createServerSupabaseClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // If user is logged in, redirect to dashboard
    if (user) {
      redirect('/dashboard');
    }
  } catch {
    // If error getting user, fall through to show login
  }

  // Show login page if not authenticated
  return <LoginPageUI />;
}

