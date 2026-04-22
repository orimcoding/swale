'use client';

import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-black">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gradient-to-br from-black via-black to-zinc-900">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-white mb-4">
            Swale
          </h1>
          <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
            Football intelligence for every competition, every player, every matchday.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              What you get
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-zinc-300">Live scores & match timelines</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-zinc-300">Player form & advanced stats</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-zinc-300">World Cup hub & history back to 1930</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-zinc-300">AI-powered insights & previews</span>
              </li>
            </ul>
          </div>

          <p className="text-xs text-zinc-500">
            Open source • Built with Next.js, Supabase & OpenAI
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-12 bg-black">
        <div className="w-full max-w-sm mx-auto lg:mx-0">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-zinc-400">Sign in to your Swale account</p>
          </div>

          <LoginForm />

          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm">
            <p className="text-zinc-400">
              Don&apos;t have an account?{' '}
              <Link
                href="/auth/signup"
                className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
