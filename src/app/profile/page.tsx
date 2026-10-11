
import Link from "next/link";

export default function ProfilePage() {
  // Temporary demo data — Better Auth will provide real user data later.
  const user = {
    name: "Ariful Islam",
    email: "ariful@example.com",
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Page heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-green-700">
            BAZARDOR ACCOUNT
          </p>

          <h1 className="mt-2 text-3xl font-black text-gray-900">
            আমার প্রোফাইল
          </h1>

          <p className="mt-2 text-gray-500">
            আপনার ব্যক্তিগত তথ্য ও অ্যাকাউন্ট পরিচালনা করুন।
          </p>
        </div>

        {/* Profile card */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
              {user.name.charAt(0)}
            </div>

            {/* User information */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">
                {user.name}
              </h2>

              <p className="mt-1 text-gray-500">{user.email}</p>

              <span className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                সাধারণ সদস্য
              </span>
            </div>

            <Link
              href="/profile/edit"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              প্রোফাইল সম্পাদনা
            </Link>
          </div>

          <div className="my-8 border-t border-gray-100" />

          {/* Account details */}
          <h3 className="mb-4 text-lg font-bold text-gray-900">
            অ্যাকাউন্টের তথ্য
          </h3>

          <div className="space-y-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">নাম</p>
              <p className="mt-1 font-semibold text-gray-900">
                {user.name}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">ইমেইল ঠিকানা</p>
              <p className="mt-1 break-all font-semibold text-gray-900">
                {user.email}
              </p>
            </div>
          </div>

          {/* Sign out — functionality will be added later */}
          <div className="mt-8 border-t border-gray-100 pt-6">
            <button
              type="button"
              disabled
              className="rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-600 opacity-60"
              title="Sign out will work after Better Auth integration"
            >
              সাইন আউট
            </button>

            <p className="mt-2 text-xs text-gray-400">
              সাইন আউটের কার্যকারিতা পরে যুক্ত করা হবে।
            </p>
          </div>
        </section>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}