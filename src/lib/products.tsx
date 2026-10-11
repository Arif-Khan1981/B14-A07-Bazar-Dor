
import { Product } from "@/types/product";
import { Category } from "@/types/category";


export function getCategoriesFromProducts(
  products: Product[]
): Category[] {
  const categories = new Map<string, Category>();

  products.forEach((product) => {
    if (!categories.has(product.category)) {
      categories.set(product.category, {
        id: product.category,
        slug: product.category,
        nameBn: product.categoryNameBn,
        icon: product.categoryIcon,
      });
    }
  });

  return Array.from(categories.values());
}

export function getTopRisers(products: Product[]): Product[] {
  return [...products]
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
}

export function getTopFallers(products: Product[]): Product[] {
  return [...products]
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);
}