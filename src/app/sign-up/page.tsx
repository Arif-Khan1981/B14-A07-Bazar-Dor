
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8">
        {/* Logo */}
        <Link href="/" className="flex justify-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🛒</span>
            <span className="text-2xl font-black text-gray-900">
              বাজার দর
            </span>
          </div>
        </Link>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-black text-gray-900">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            বাজারদর সহজে দেখতে আপনার অ্যাকাউন্ট খুলুন।
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              আপনার নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="আপনার পূর্ণ নাম"
              autoComplete="name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              ইমেইল
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
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
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 px-4 py-3 font-bold text-white transition hover:bg-green-700"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">অথবা</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social login placeholders */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled
            className="rounded-xl border border-gray-200 px-3 py-3 text-sm font-semibold text-gray-500"
          >
            Google
          </button>

          <button
            type="button"
            disabled
            className="rounded-xl border border-gray-200 px-3 py-3 text-sm font-semibold text-gray-500"
          >
            GitHub
          </button>
        </div>

        <p className="mt-7 text-center text-sm text-gray-600">
          আগে থেকেই অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-in"
            className="font-bold text-green-700 hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>

        <p className="mt-5 text-center text-xs text-gray-400">
          অ্যাকাউন্ট তৈরি করে আপনি আমাদের ব্যবহারের শর্তাবলিতে সম্মত হচ্ছেন।
        </p>
      </div>
    </main>
  );
}