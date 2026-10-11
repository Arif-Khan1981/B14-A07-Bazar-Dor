import Link from "next/link";

import { getCategories } from "@/lib/api-products";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* Main Navbar */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex min-h-20 items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl">
                🛒
              </span>

              <div>
                <div className="text-xl font-black text-gray-900">
                  বাজার দর
                </div>

                <p className="text-xs text-gray-500">
                  ৯ অক্টোবর ২০২৬
                </p>
              </div>
            </div>
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/sign-in"
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              সাইন ইন
            </Link>

            <Link
              href="/sign-up"
              className="rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              সাইন আপ
            </Link>
          </div>

        </div>

        {/* Categories */}
        <nav className="overflow-x-auto border-t border-gray-100">
          <div className="flex min-w-max items-center gap-1 py-2">

            {/* All */}
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
            >
              সব
            </Link>

            {/* API Categories */}
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                <span>{category.icon}</span>

                <span>{category.nameBn}</span>
              </Link>
            ))}

          </div>
        </nav>

      </div>

    </header>
  );
}