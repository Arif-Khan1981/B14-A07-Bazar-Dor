
import { API_BASE_URL } from "./api";
import { Product } from "@/types/product";
import { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(
    `${API_BASE_URL}/categories`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function getProduct(
  id: string
): Promise<Product | null> {
  const response = await fetch(
    `${API_BASE_URL}/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const response = await fetch(
    `${API_BASE_URL}/products?category=${encodeURIComponent(category)}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category products");
  }

  return response.json();
}

export async function getAllProducts(): Promise<Product[]> {
  const response = await fetch(
    `${API_BASE_URL}/products`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getCategory(
  category: string
): Promise<Category | null> {
  const response = await fetch(
    `${API_BASE_URL}/categories/${encodeURIComponent(category)}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}