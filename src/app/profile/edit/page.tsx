
"use client";

import Link from "next/link";
import { useState } from "react";

export default function EditProfilePage() {
  // Temporary demo data; Better Auth will provide real user data later.
  const [name, setName] = useState("Ariful Islam");
  const [email, setEmail] = useState("ariful@example.com");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // UI demonstration only — nothing is saved to a database yet.
    setMessage("ডেমো সফল! Better Auth যুক্ত হলে তথ্য সংরক্ষণ হবে।");
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/profile"
          className="text-sm font-semibold text-green-700 hover:text-green-800"
        >
          ← প্রোফাইলে ফিরে যান
        </Link>

        <div className="mb-8 mt-6">
          <p className="text-sm font-semibold text-green-700">
            ACCOUNT SETTINGS
          </p>

          <h1 className="mt-2 text-3xl font-black text-gray-900">
            প্রোফাইল সম্পাদনা
          </h1>

          <p className="mt-2 text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য পরিবর্তন করুন।
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Name field */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              আপনার নাম
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="আপনার নাম লিখুন"
              required
              minLength={2}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Email field */}
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

            <p className="mt-2 text-xs text-gray-400">
              বাস্তবে ইমেইল পরিবর্তনের নিয়ম Better Auth-এর সেটআপ অনুযায়ী
              নির্ধারণ করতে হবে।
            </p>
          </div>

          {/* Demo message */}
          {message && (
            <div
              role="status"
              className="rounded-xl bg-green-50 p-4 text-sm text-green-800"
            >
              {message}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              পরিবর্তন সংরক্ষণ করুন
            </button>

            <Link
              href="/profile"
              className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              বাতিল
            </Link>
          </div>

          <p className="text-xs text-gray-400">
            বর্তমানে এটি শুধু UI ডেমো। কোনো তথ্য ডেটাবেসে সংরক্ষণ হচ্ছে না।
          </p>
        </form>
      </div>
    </main>
  );
}