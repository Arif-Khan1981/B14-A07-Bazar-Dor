
import Link from "next/link";
import { notFound } from "next/navigation";

import CategoryProducts from "@/components/CategoryProducts";
import {
  getCategories,
  getProductsByCategory,
} from "@/lib/api-products";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const categories = await getCategories();

  const currentCategory = categories.find(
    (item) => item.slug === category
  );

  // Only an unknown category should return 404.
  if (!currentCategory) {
    notFound();
  }

  const products = await getProductsByCategory(category);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Link
          href="/"
          className="mb-8 inline-flex text-sm font-semibold text-green-700 hover:text-green-800"
        >
          ← সব পণ্যে ফিরে যান
        </Link>

        <section className="mb-10">
          <div className="flex items-center gap-3">
            <span className="text-4xl">
              {currentCategory.icon}
            </span>

            <div>
              <h1 className="text-3xl font-black text-gray-900 md:text-4xl">
                {currentCategory.nameBn}
              </h1>

              <p className="mt-2 text-gray-500">
                {currentCategory.nameBn} বিভাগের আজকের বাজারদর।
              </p>
            </div>
          </div>
        </section>

        {products.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-500">
              মোট {products.length}টি পণ্য
            </div>

            <CategoryProducts products={products} />
          </>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center">
            <div className="text-5xl">
              {currentCategory.icon}
            </div>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              এই বিভাগে এখনো কোনো পণ্য নেই
            </h2>

            <p className="mt-2 text-gray-500">
              অন্য বিভাগের পণ্যগুলো দেখতে পারেন।
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
            >
              সব পণ্য দেখুন
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}