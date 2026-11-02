export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  category_id: string;
  price: number;
  image_url: string;
  availability: boolean;
  offer: boolean;
  offer_price?: number;
}

export interface CategorizedProducts {
  category: string;
  products: Product[];
}

export const groupProductsByCategory = (
  products: Product[],
): CategorizedProducts[] => {
  const groups = products.reduce<Record<string, Product[]>>((acc, product) => {
    const category = product.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);

    return acc;
  }, {});

  return Object.entries(groups).map(([category, products]) => ({
    category,
    products,
  }));
};
