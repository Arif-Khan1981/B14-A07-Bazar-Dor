export type PriceChange = "up" | "down" | "flat";

export interface MarketPrice {
  bazar: string;
  price: number;
  change: number;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  emoji: string;
  category: string;
  categorySlug: string;
  description: string;
  unit: string;
  price: number;
  minPrice: number;
  maxPrice: number;
  averagePrice: number;
  change: number;
  changeType: PriceChange;
  markets: MarketPrice[];
}