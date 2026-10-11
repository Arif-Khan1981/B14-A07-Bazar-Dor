import { getAllProducts } from "@/lib/api-products";
import {
  formatChange,
  formatPrice,
  formatUnit,
} from "@/lib/utils";

export default async function PriceTicker() {
  const products = await getAllProducts();

  const tickerProducts = [
    ...products,
    ...products,
  ];

  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <div className="ticker-track flex w-max gap-8 py-2">
        {tickerProducts.map((product, index) => {
          const changeColor =
            product.change.dir === "up"
              ? "text-red-400"
              : product.change.dir === "down"
                ? "text-green-400"
                : "text-gray-400";

          return (
            <div
              key={`${product.id}-${index}`}
              className="flex items-center gap-2 whitespace-nowrap text-sm"
            >
              <span>{product.image}</span>

              <span className="font-medium">
                {product.nameBn}
              </span>

              <span>
                {formatPrice(product.today)}
              </span>

              <span className="text-gray-400">
                {formatUnit(product.unit)}
              </span>

              <span className={changeColor}>
                {formatChange(
                  product.change.dir,
                  product.change.pct
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}