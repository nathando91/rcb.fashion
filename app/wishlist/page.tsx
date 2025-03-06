"use client";

import { useState } from "react";
import Link from "next/link";
import { FiShoppingBag, FiTrash2, FiHeart } from "react-icons/fi";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Designer Dress",
      price: 49.99,
      originalPrice: 199.99,
      image: "/images/product1.jpg",
      discount: "75% OFF",
    },
    {
      id: 2,
      name: "Vintage Handbag",
      price: 79.99,
      originalPrice: 299.99,
      image: "/images/product2.jpg",
      discount: "73% OFF",
    },
    {
      id: 3,
      name: "Leather Boots",
      price: 129.99,
      originalPrice: 249.99,
      image: "/images/product3.jpg",
      discount: "48% OFF",
    },
  ]);

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const moveToCart = (id: number) => {
    // In a real application, this would add the item to the cart
    // and then remove it from the wishlist
    removeItem(id);
    // Here you would typically call a function to add to cart
    alert(`Item added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-center mb-4">
              <FiHeart size={48} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Add items you love to your wishlist. Review them anytime and
              easily move them to your cart.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Discover Products
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2">Product</th>
                    <th className="text-left py-4 px-2">Price</th>
                    <th className="text-left py-4 px-2">Discount</th>
                    <th className="text-center py-4 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => (
                    <tr key={item.id} className="border-b last:border-b-0">
                      <td className="py-4 px-2">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0"></div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div>
                          <p className="font-semibold text-green-600">
                            ${item.price}
                          </p>
                          <p className="text-sm text-gray-500 line-through">
                            ${item.originalPrice}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                          {item.discount}
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center justify-center space-x-3">
                          <button
                            onClick={() => moveToCart(item.id)}
                            className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition"
                            title="Add to Cart"
                          >
                            <FiShoppingBag size={18} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition"
                            title="Remove from Wishlist"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
              <Link
                href="/shop"
                className="w-full sm:w-auto mb-4 sm:mb-0 bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-50 transition text-center"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => {
                  // In a real app, this would add all items to cart
                  setWishlistItems([]);
                  alert("All items added to cart!");
                }}
                className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition text-center"
              >
                Add All to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
