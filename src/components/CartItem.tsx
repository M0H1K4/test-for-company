import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  image,
  quantity,
}) => {
  const { updateQuantity, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img src={image} alt={title} className="w-20 h-20 object-contain" />
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(id, Math.max(0, quantity - 1))}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => updateQuantity(id, quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};