import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createServerSupabaseClient();

  try {
    await supabase.auth.signOut();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to sign out" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const supabase = await createServerSupabaseClient();

  try {
    await supabase.auth.signOut();
    // Redirect to home page after logout
    return NextResponse.redirect(new URL("/", request.url), {
      status: 302,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to sign out" },
      { status: 500 }
    );
  }
}
