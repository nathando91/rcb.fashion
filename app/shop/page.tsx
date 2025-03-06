"use client";

import { useState } from "react";
import {
  FiHeart,
  FiShoppingBag,
  FiFilter,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  seller: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
  };
}

// Mock data - replace with your actual data fetching
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Elegant Silk Blouse",
    price: 1290000,
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Tops",
    isNew: true,
    seller: {
      id: 101,
      name: "Thời Trang Minh Hà",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 4.8,
      reviewCount: 156,
      verified: true,
    },
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 1690000,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Dresses",
    isFeatured: true,
    seller: {
      id: 102,
      name: "Boutique Hương Giang",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4.9,
      reviewCount: 243,
      verified: true,
    },
  },
  {
    id: 3,
    name: "High-Waisted Trousers",
    price: 1490000,
    image:
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Pants",
    seller: {
      id: 103,
      name: "Thời Trang Nam Việt",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4.6,
      reviewCount: 98,
      verified: true,
    },
  },
  {
    id: 4,
    name: "Designer Handbag",
    price: 2490000,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
    isNew: true,
    seller: {
      id: 104,
      name: "Túi Xách Cao Cấp",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4.7,
      reviewCount: 187,
      verified: true,
    },
  },
  {
    id: 5,
    name: "Casual Linen Blouse",
    price: 890000,
    image:
      "https://images.unsplash.com/photo-1551163943-3f7e29e5ed20?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Tops",
    seller: {
      id: 105,
      name: "Thời Trang Phương Linh",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 4.5,
      reviewCount: 76,
      verified: false,
    },
  },
  {
    id: 6,
    name: "Elegant Evening Gown",
    price: 3290000,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Dresses",
    isFeatured: true,
    seller: {
      id: 106,
      name: "Váy Cưới Thanh Hằng",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 4.9,
      reviewCount: 312,
      verified: true,
    },
  },
  {
    id: 7,
    name: "Pearl Earrings",
    price: 790000,
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
    seller: {
      id: 107,
      name: "Trang Sức Kim Cương",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 4.8,
      reviewCount: 143,
      verified: true,
    },
  },
  {
    id: 8,
    name: "Slim Fit Jeans",
    price: 1190000,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Pants",
    seller: {
      id: 108,
      name: "Quần Áo Nam Tuấn",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 4.4,
      reviewCount: 87,
      verified: false,
    },
  },
];

const categories = ["All", "Dresses", "Tops", "Pants", "Accessories"];
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? mockProducts
      : mockProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-center mb-2">
            Our <span className="font-medium">Collection</span>
          </h1>
          <p className="text-neutral-600 text-center">
            Discover our latest fashion trends
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="w-full flex items-center justify-center space-x-2 py-3 border border-neutral-200 rounded-lg bg-white text-neutral-800"
          >
            <FiFilter size={18} />
            <span>Filter & Sort</span>
          </button>
        </div>

        {/* Mobile Filter Sidebar */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <FiX size={24} />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Sort By</h4>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                        sortBy === option.value
                          ? "bg-primary text-white"
                          : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-primary text-white py-3 rounded-lg mt-4"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg border border-neutral-200 p-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-neutral-200 p-6">
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="100000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-sm text-neutral-600 mt-2">
                    <span>0₫</span>
                    <span>
                      {new Intl.NumberFormat("vi-VN").format(priceRange[1])}₫
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Desktop Filters */}
            <div className="hidden md:flex justify-between items-center mb-8">
              <p className="text-neutral-600">
                Showing{" "}
                <span className="font-medium text-neutral-900">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 border border-neutral-200 rounded-lg bg-white text-neutral-800 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                      {product.isFeatured && (
                        <span className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white rounded-full p-2 shadow-sm hover:bg-primary hover:text-white transition-colors">
                          <FiHeart size={18} />
                        </button>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <button className="w-full flex items-center justify-center space-x-2 text-sm font-medium">
                          <FiShoppingBag size={16} />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                  <h3 className="text-sm font-medium text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price)}
                  </p>
                  <div className="mt-2 flex items-center">
                    <Link
                      href={`/seller/${product.seller.id}`}
                      className="flex items-center group"
                    >
                      <div className="w-5 h-5 rounded-full overflow-hidden mr-2">
                        <Image
                          src={product.seller.avatar}
                          alt={product.seller.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-neutral-600 group-hover:text-primary transition-colors">
                        {product.seller.name}
                        {product.seller.verified && (
                          <span className="inline-block ml-1 text-primary">
                            ✓
                          </span>
                        )}
                      </span>
                    </Link>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-3 h-3 ${
                            star <= Math.round(product.seller.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-neutral-500">
                      ({product.seller.reviewCount})
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16 bg-neutral-50 rounded-lg">
                <h3 className="text-lg font-medium text-neutral-900 mb-2">
                  No products found
                </h3>
                <p className="text-neutral-600 mb-6">
                  Try changing your filters or check back later for new arrivals
                </p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
