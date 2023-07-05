"use client"
import ProductCard from '@/app/components/Product';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';


export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const productsFetch = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products`
      ); 
      const data = await response.json();
      setProducts(data)
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  useEffect(()=> {
    productsFetch();
  }, [])
  return (
    <div className="container mx-auto py-8">
    <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {products? 
      products.map((product) => (
        <Link href={`/pages/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />   
        </Link>
      )) : "Loading..."
    }
    </div>
  </div>
  )
}

export default Products