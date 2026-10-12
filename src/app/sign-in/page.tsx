
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: signInError } =
        await authClient.signIn.email({
          email,
          password,
        });

      if (signInError) {
        setError(
          signInError.message || "সাইন ইন করা যায়নি।"
        );
        return;
      }

      router.push("/profile");
      router.refresh();
    } catch {
      setError("সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-2xl font-black text-green-700"
          >
            🛒 বাজার দর
          </Link>

          <h1 className="mt-6 text-3xl font-black text-gray-900">
            আবার স্বাগতম!
          </h1>

          <p className="mt-2 text-gray-500">
            আপনার অ্যাকাউন্টে সাইন ইন করুন।
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              ইমেইল ঠিকানা
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="name@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন করুন"}
          </button>

          <p className="text-center text-sm text-gray-500">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-green-700 hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
