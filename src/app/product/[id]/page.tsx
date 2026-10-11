import Link from "next/link";
import { notFound } from "next/navigation";

import { getProduct } from "@/lib/api-products";
import {
  formatChange,
  formatPrice,
  formatUnit,
} from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const minPrice = Math.min(
    ...product.markets.map((market) => market.min)
  );

  const maxPrice = Math.max(
    ...product.markets.map((market) => market.max)
  );

  const averagePrice =
    product.markets.reduce(
      (sum, market) =>
        sum + (market.min + market.max) / 2,
      0
    ) / product.markets.length;

  const changeClass =
    product.change.dir === "up"
      ? "bg-red-100 text-red-700"
      : product.change.dir === "down"
        ? "bg-green-100 text-green-700"
        : "bg-gray-100 text-gray-600";

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800"
        >
          ← সব পণ্যে ফিরে যান
        </Link>

        {/* Product Header */}
        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-2">

            {/* Product Image */}
            <div className="flex min-h-80 items-center justify-center rounded-2xl bg-green-50">
              <span className="text-9xl">
                {product.image}
              </span>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                <span>{product.categoryIcon}</span>
                <span>{product.categoryNameBn}</span>
              </div>

              <h1 className="text-3xl font-black text-gray-900 md:text-4xl">
                {product.nameBn}
              </h1>

              <p className="mt-2 text-gray-500">
                {formatUnit(product.unit)}
              </p>

              {/* Today's Price */}
              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  আজকের দাম
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <p className="text-4xl font-black text-gray-900">
                    {formatPrice(product.today)}
                  </p>

                  <span
                    className={`rounded-full px-3 py-1.5 text-sm font-bold ${changeClass}`}
                  >
                    {formatChange(
                      product.change.dir,
                      product.change.pct
                    )}
                  </span>
                </div>
              </div>

              {/* Historical Prices */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">
                    গতকাল
                  </p>
                  <p className="mt-1 font-bold">
                    {formatPrice(product.yesterday)}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">
                    গত সপ্তাহ
                  </p>
                  <p className="mt-1 font-bold">
                    {formatPrice(product.lastWeek)}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">
                    গত মাস
                  </p>
                  <p className="mt-1 font-bold">
                    {formatPrice(product.lastMonth)}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Price Summary */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            বাজারদরের সারসংক্ষেপ
          </h2>

          <p className="mt-2 text-gray-500">
            বিভিন্ন বাজারে পণ্যের সর্বনিম্ন ও সর্বোচ্চ
            দামের ভিত্তিতে এই হিসাব দেখানো হয়েছে।
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                সর্বনিম্ন দাম
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {formatPrice(minPrice)}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                সর্বোচ্চ দাম
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {formatPrice(maxPrice)}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                গড় বাজারদর
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {formatPrice(Math.round(averagePrice))}
              </p>
            </div>

          </div>
        </section>

        {/* Market Prices */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            বাজারভিত্তিক দাম
          </h2>

          <p className="mt-2 text-gray-500">
            বিভিন্ন বাজারে আজকের সম্ভাব্য দাম।
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-150 text-left">

                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold">
                      বাজার
                    </th>

                    <th className="px-5 py-4 text-sm font-semibold">
                      বিভাগ
                    </th>

                    <th className="px-5 py-4 text-sm font-semibold">
                      সর্বনিম্ন
                    </th>

                    <th className="px-5 py-4 text-sm font-semibold">
                      সর্বোচ্চ
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {product.markets.map((market) => (
                    <tr
                      key={`${market.market}-${market.division}`}
                      className="border-t border-gray-100"
                    >
                      <td className="px-5 py-4 font-medium text-gray-900">
                        {market.market}
                      </td>

                      <td className="px-5 py-4 text-gray-500">
                        {market.division}
                      </td>

                      <td className="px-5 py-4 font-semibold">
                        {formatPrice(market.min)}
                      </td>

                      <td className="px-5 py-4 font-semibold">
                        {formatPrice(market.max)}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}