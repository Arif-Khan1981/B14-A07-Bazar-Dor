import { products } from "@/lib/products";
import { formatChange, formatPrice } from "@/lib/utils";

export default function PriceTicker() {
  const tickerProducts = [...products, ...products];

  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <div className="ticker-track flex w-max gap-8 py-2">
        {tickerProducts.map((product, index) => {
          const changeColor =
            product.changeType === "up"
              ? "text-red-400"
              : product.changeType === "down"
                ? "text-green-400"
                : "text-gray-400";

          return (
            <div
              key={`${product.id}-${index}`}
              className="flex items-center gap-2 whitespace-nowrap text-sm"
            >
              <span>{product.emoji}</span>

              <span className="font-medium">
                {product.name}
              </span>

              <span>{formatPrice(product.price)}</span>

              <span className={changeColor}>
                {formatChange(product.change)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}