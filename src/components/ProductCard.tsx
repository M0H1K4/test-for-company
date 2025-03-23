import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types/product';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative pb-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-1 h-12 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};