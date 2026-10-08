import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import {
  getTopFallers,
  getTopRisers,
  products,
} from "@/lib/products";

export default function HomePage() {
  const risers = getTopRisers();
  const fallers = getTopFallers();

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Today's risers */}
        <section className="mb-16">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              আজ দাম বেড়েছে{" "}
              <span className="text-green-600">▲</span>
            </h2>

            <p className="mt-2 text-gray-500">
              যেসব পণ্যের দাম আজ বেড়েছে।
            </p>
          </div>

          <ProductGrid products={risers} />
        </section>

        {/* Today's fallers */}
        <section className="mb-16">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              আজ দাম কমেছে{" "}
              <span className="text-red-600">▼</span>
            </h2>

            <p className="mt-2 text-gray-500">
              যেসব পণ্যের দাম আজ কমেছে।
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