"use client";
import Image from "next/image";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: { rate: string; count: number };
}

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
   
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (productId) {
      fetchProductData();
    }
  }, [productId]);

 
  return (
    <div className="mt-20">
      {product ? (
        <div className="mt-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:px-40 md:max-w-full  dark:border-gray-700 dark:bg-gray-800 ">
          <Image
            className="object-contain w-full rounded-t-lg h-96 "
            src={product.image}
            alt="product image"
            height={200}
            width={200}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <h2 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
              Category : {product.category}
            </h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>

            <p className="text-xl mb-4">Ratings: {product.rating.rate}/5 (Rated By {product.rating.count} people)</p>
            <p className="font-bold text-3xl">Price : ${product.price}</p>
          </div>

          <button
           className="mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
