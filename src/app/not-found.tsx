import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
      <div className="text-center">

        <div className="text-7xl font-black text-green-600">
          404
        </div>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-3 max-w-md text-gray-500">
          দুঃখিত, আপনি যে পেজ বা পণ্যটি খুঁজছেন
          সেটি পাওয়া যায়নি।
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          ← হোমে ফিরে যান
        </Link>

      </div>
    </main>
  );
}