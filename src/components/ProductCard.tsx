import Link from "next/link";
import { Product } from "@/types/product";
import { formatChange, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const changeClass =
    product.changeType === "up"
      ? "bg-green-100 text-green-700"
      : product.changeType === "down"
        ? "bg-red-100 text-red-700"
        : "bg-gray-100 text-gray-600";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Product image / emoji */}
      <div className="mb-5 flex h-36 items-center justify-center rounded-xl bg-gray-50 text-7xl transition group-hover:bg-green-50">
        {product.emoji}
      </div>

      {/* Product name */}
      <h3 className="text-lg font-bold text-gray-900 transition group-hover:text-green-700">
        {product.name}
      </h3>

      {/* Unit */}
      <p className="mt-1 text-sm text-gray-500">
        {product.unit}
      </p>

      {/* Price */}
      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs text-gray-500">
            আজকের দাম
          </p>

          <p className="mt-1 text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Change */}
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${changeClass}`}
        >
          {formatChange(product.change)}
        </span>
      </div>
    </Link>
  );
}