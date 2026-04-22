import { createServerSupabaseClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Welcome, {user?.email}!</h2>
        <p className="text-zinc-400">This is your dashboard. We&apos;re building the live data here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800">
          <h3 className="text-lg font-semibold text-white mb-2">Live Matches</h3>
          <p className="text-zinc-400">Coming soon...</p>
        </div>

        <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800">
          <h3 className="text-lg font-semibold text-white mb-2">World Cup Hub</h3>
          <p className="text-zinc-400">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
