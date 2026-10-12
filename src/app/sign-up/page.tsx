
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState("");
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
      const { error: signUpError } =
        await authClient.signUp.email({
          name,
          email,
          password,
        });

      if (signUpError) {
        setError(
          signUpError.message || "অ্যাকাউন্ট তৈরি করা যায়নি।"
        );
        return;
      }

      router.push("/profile");
      router.refresh();
    } catch {
      setError("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-black text-green-700">
            🛒 বাজার দর
          </Link>

          <h1 className="mt-6 text-3xl font-black text-gray-900">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-gray-500">
            বাজারদর সহজে দেখতে আপনার অ্যাকাউন্ট খুলুন।
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">
              আপনার নাম
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              placeholder="আপনার নাম লিখুন"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              ইমেইল
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold">
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              placeholder="কমপক্ষে ৮ অক্ষর"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "সাইন আপ করুন"}
          </button>

          <p className="text-center text-sm text-gray-500">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <Link href="/sign-in" className="font-semibold text-green-700 hover:underline">
              সাইন ইন করুন
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
