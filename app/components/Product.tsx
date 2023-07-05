import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-2xl mx-auto min-h-6000">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600 dark:hover:bg-gray-700">
        <Image
          className="rounded-t-lg p-8 object-contain h-60 w-full"
          src={product.image}
          alt="product image"
          height={100}
          width={100}
        />

        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
