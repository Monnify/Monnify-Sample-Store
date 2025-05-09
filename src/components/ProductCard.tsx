"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

// Assuming Product type is defined elsewhere, but adding a simple type here
export interface Product {
  image: string;
  name: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="relative bg-gray-100 rounded-3xl p-2 h-[320px] transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <div className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-white p-2">
          <FaHeart
            className={`text-xl ${liked ? "text-red-500" : "text-gray-200"}`}
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
          />
        </div>

        <img src={product.image} alt="Product" className="w-full rounded-md" />
      </div>

      <div className="mt-7">
        <span className="text-left text-sm font-normal text-black">{product.name}</span>
        <p className="text-left mt-0.5 text-base font-bold">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
