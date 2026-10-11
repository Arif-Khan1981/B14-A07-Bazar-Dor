"use client";

import { useState } from "react";

import ProductGrid from "@/components/CategoryProducts";
import { Product } from "@/types/product";

interface CategoryProductsProps {
  products: Product[];
}

export default function CategoryProducts({
  products,
}: CategoryProductsProps) {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort(
    (a, b) => {
      if (sort === "low") {
        return a.today - b.today;
      }

      if (sort === "high") {
        return b.today - a.today;
      }

      return 0;
    }
  );

  return (
    <section>
  <div className="mb-6 flex items-center justify-between">
    <span className="text-sm text-gray-500">
      মোট {products.length}টি পণ্য
    </span>
  </div>

  <CategoryProducts products={products} />
</section>
  );
}