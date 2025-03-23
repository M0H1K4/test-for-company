import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export const Navbar = () => {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
            <Store className="w-6 h-6" />
            <span>Product Catalog</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};