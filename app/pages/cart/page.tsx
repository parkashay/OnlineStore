"use client"

import Image from "next/image"
import {useSelector} from 'react-redux'
import { RootState } from '@/app/store/store';
import { useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/app/slices/cartSlice";

const Cart = () => {
 
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart)
  return (
   <div className="mt-24">
    {cartState.cartItems.map(item => {
      return <div key={Math.random()} className="flex flex-row gap-2 border border-solid border-white mb-2 items-center">
        <div>
          <Image src={item.image} height={100} width={100} alt="product img" className="h-auto w-auto" />
        </div>
        <div className="flex flex-col">
        <div>{item.title}</div>
        <div>{item.price}</div>
        <div>
          <button
          onClick={() => {
            dispatch(removeFromCart(item))
          }}
          className="mt-2 text-white bg-red-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove</button>
        </div>
        </div>
      </div>
    })}
    

    {cartState.cartItems.length > 0 && <div className="text-center">
       <button
       onClick={() => {
        dispatch(clearCart());
        alert("Order Placed");
       }}
          className="mt-2 text-white bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Checkout
          </button>
    </div>}
   </div>
  )
}

export default Cart