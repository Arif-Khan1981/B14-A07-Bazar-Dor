import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

import { getAllProducts } from "@/lib/api-products";

export default async function HomePage() {
  const products = await getAllProducts();

  const risers = [...products]
    .filter(
      (product) => product.change.dir === "up"
    )
    .sort(
      (a, b) =>
        b.change.pct - a.change.pct
    )
    .slice(0, 6);

  const fallers = [...products]
    .filter(
      (product) => product.change.dir === "down"
    )
    .sort(
      (a, b) =>
        a.change.pct - b.change.pct
    )
    .slice(0, 6);

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Price increased */}
        <section className="mb-16">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              আজ দাম বেড়েছে{" "}
              <span className="text-red-600">
                ▲
              </span>
            </h2>

            <p className="mt-2 text-gray-500">
              আজ যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে।
            </p>
          </div>

          <ProductGrid products={risers} />
        </section>

        {/* Price decreased */}
        <section className="mb-16">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              আজ দাম কমেছে{" "}
              <span className="text-green-600">
                ▼
              </span>
            </h2>

            <p className="mt-2 text-gray-500">
              আজ যেসব পণ্যের দাম সবচেয়ে বেশি কমেছে।
            </p>
          </div>

          <ProductGrid products={fallers} />
        </section>

        {/* All products */}
        <section id="সব-পণ্য">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              সব পণ্য
            </h2>

            <p className="mt-2 text-gray-500">
              প্রয়োজনীয় সব পণ্যের আজকের বাজারদর এক নজরে দেখুন।
            </p>
          </div>

          <ProductGrid products={products} />
        </section>
      </div>
    </>
  );
}