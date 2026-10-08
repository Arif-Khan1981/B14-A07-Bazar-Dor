"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, UserPlus } from "lucide-react";
import PriceTicker from "./PriceTicker";


const categories = [
  {
    name: "সব",
    href: "/",
  },
  {
    name: "চাল",
    href: "/category/chal",
  },
  {
    name: "সবজি",
    href: "/category/sobji",
  },
  {
    name: "মাছ-মাংস",
    href: "/category/mach-mangsho",
  },
  {
    name: "মসলা",
    href: "/category/moshla",
  },
];

const date= new Date().toLocaleDateString("bn-BD", {dateStyle: "full"});

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top row */}
        <div className="flex min-h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="text-xl font-bold text-green-700">
              🛒 বাজার দর
            </div>

            <div className="mt-1 text-xs text-gray-500">
              {date}
            </div>
          </Link>

          {/* Authentication buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/signin"
              className="flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <LogIn size={16} />
              <span>সাইন ইন</span>
            </Link>

            <Link
              href="/signup"
              className="flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
            >
              <UserPlus size={16} />
              <span>সাইন আপ</span>
            </Link>
          </div>
        </div>

        {/* Category navigation */}
        <nav className="flex gap-2 overflow-x-auto border-t py-3">
          {categories.map((category) => {
            const isActive =
              category.href === "/"
                ? pathname === "/"
                : pathname.startsWith(category.href);

            return (
              <Link
                key={category.href}
                href={category.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Price ticker */}
      <PriceTicker />
    </header>
  );
}