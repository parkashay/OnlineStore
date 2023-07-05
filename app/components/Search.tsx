"use client"
import React, { useEffect, useState } from 'react';
import Products from '../sections/Products';
import Link from 'next/link';
const Search: React.FC = () => {
    const [products, setProducts] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleFocus = () => {
    setExpanded(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setExpanded(false);
    },300);
  };

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  }

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
  useEffect(() => {
    productsFetch()
  }, [searchValue]);

  return (
    <div className={`${expanded ? 'w-screen absolute bg-gray-800 left-0 top-0 p-5 min-h-screen' : 'inline-block'}`}>
      <input
        type="search"
        className={`text-black border border-gray-300 rounded px-4 py-2 focus:outline-none ${expanded ? 'w-full' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSearch}
        value={searchValue}
        placeholder="Search..."
      />
      {expanded && searchValue !== "" ? 
        <div>
           {products.filter(filteredProduct => {
            return filteredProduct.title.toLowerCase().includes(searchValue.toLowerCase())
           }).map(product => {
            return <Link href={`/pages/products/${product.id}`} key={product.id}
            className='bg-red-500'><div className='flex rounded items-center mt-2 mb-2 border-solid border-2 border-white  gap-2'>
              <img src={product.image} alt="" className='h-20 w-20' />
              {product.title}</div></Link>
           })}
        </div>
       : ""}
    </div>
  );
};

export default Search;
