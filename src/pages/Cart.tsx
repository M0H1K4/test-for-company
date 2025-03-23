import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { CartItem } from '../components/CartItem';

export const Cart = () => {
  const { items, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <ShoppingBag className="w-16 h-16 text-gray-400" />
        <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mb-6">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;