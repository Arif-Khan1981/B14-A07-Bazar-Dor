import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getProductBySlug,
} from "@/lib/products";

import {
  formatChange,
  formatPrice,
} from "@/lib/utils";

interface ProductDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  // Product doesn't exist
  if (!product) {
    notFound();
  }

  const changeClass =
    product.changeType === "up"
      ? "bg-red-100 text-green-700"
      : product.changeType === "down"
        ? "bg-green-100 text-red-700"
        : "bg-gray-100 text-gray-600";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      {/* Back button */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800"
      >
        ← হোমে ফিরে যান
      </Link>

      {/* Main product section */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product visual */}
        <div className="flex min-h-100 items-center justify-center rounded-3xl bg-green-50">
          <span className="text-[140px]">
            {product.emoji}
          </span>
        </div>

        {/* Product information */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <span className="mb-4 w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            {product.category}
          </span>

          {/* Product name */}
          <h1 className="text-4xl font-black text-gray-900 md:text-5xl">
            {product.name}
          </h1>

          {/* Unit */}
          <p className="mt-3 text-gray-500">
            {product.unit}
          </p>

          {/* Description */}
          <p className="mt-6 leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Today's price */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              আজকের দাম
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <p className="text-3xl font-black text-gray-900">
                {formatPrice(product.price)}
              </p>

              <span
                className={`rounded-full px-3 py-1 text-sm font-bold ${changeClass}`}
              >
                {formatChange(product.change)}
              </span>
            </div>
          </div>

          {/* Price range */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                সর্বনিম্ন
              </p>

              <p className="mt-1 font-bold text-gray-900">
                {formatPrice(product.minPrice)}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                গড়
              </p>

              <p className="mt-1 font-bold text-gray-900">
                {formatPrice(product.averagePrice)}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                সর্বোচ্চ
              </p>

              <p className="mt-1 font-bold text-gray-900">
                {formatPrice(product.maxPrice)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market prices */}
      <section className="mt-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <p className="mt-2 text-gray-500">
            বিভিন্ন বাজারে এই পণ্যের সম্ভাব্য বর্তমান দাম।
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {product.markets.map((market, index) => {
            const marketChangeClass =
              market.change > 0
                ? "text-green-600"
                : market.change < 0
                  ? "text-red-600"
                  : "text-gray-500";

            return (
              <div
                key={market.bazar}
                className={`flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between ${
                  index !== product.markets.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                {/* Market name */}
                <div>
                  <p className="font-semibold text-gray-900">
                    {market.bazar}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    আজকের বাজারদর
                  </p>
                </div>

                {/* Market price */}
                <div className="flex items-center gap-4">
                  <p className="font-bold text-gray-900">
                    {formatPrice(market.price)}
                  </p>

                  <span
                    className={`text-sm font-bold ${marketChangeClass}`}
                  >
                    {formatChange(market.change)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}