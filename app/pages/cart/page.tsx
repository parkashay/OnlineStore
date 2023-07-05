"use client"

const Cart = () => {
  const product = {
    title : 'Product' ,
    price : 999,
    image : ''
  }
 
  return (
    <div className='mt-20'>
       <div className="max-w-2xl mx-auto min-h-6000">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600 dark:hover:bg-gray-700">
        <img
          className="rounded-t-lg p-8 object-contain h-60 w-full"
          src={product.image}
          alt="product image"
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
    </div>
  )
}

export default Cart