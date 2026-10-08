import productsData from "@/data/products.json";
import { Product } from "@/types/product";

export const products = productsData as Product[];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter(
    (product) => product.categorySlug === categorySlug
  );
}

export function getCategories() {
  const categories = products.map((product) => ({
    name: product.category,
    slug: product.categorySlug,
  }));

  return Array.from(
    new Map(
      categories.map((category) => [
        category.slug,
        category,
      ])
    ).values()
  );
}

export function getTopRisers() {
  return [...products]
    .filter((product) => product.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, 6);
}

export function getTopFallers() {
  return [...products]
    .filter((product) => product.change < 0)
    .sort((a, b) => a.change - b.change)
    .slice(0, 6);
}