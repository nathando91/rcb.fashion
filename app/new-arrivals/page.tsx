"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
export default function NewArrivalsPage() {
  const [timeFilter, setTimeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const timeFilters = [
    { id: "all", name: "All Time" },
    { id: "today", name: "Today" },
    { id: "week", name: "This Week" },
    { id: "month", name: "This Month" },
  ];

  const newItems = [
    {
      id: 1,
      name: "Silk Evening Gown",
      price: 2490000,
      originalPrice: 3290000,
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "clothing",
      addedDate: "2024-03-20",
      brand: "Elegance",
      isNew: true,
    },
    {
      id: 2,
      name: "Designer Leather Handbag",
      price: 1890000,
      originalPrice: 2490000,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "bags",
      addedDate: "2024-03-19",
      brand: "Luxe",
      isNew: true,
    },
    {
      id: 3,
      name: "Pearl Embellished Heels",
      price: 1690000,
      originalPrice: 2190000,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "shoes",
      addedDate: "2024-03-18",
      brand: "Chic",
      isNew: true,
    },
    {
      id: 4,
      name: "Diamond Pendant Necklace",
      price: 3490000,
      originalPrice: 4290000,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "jewelry",
      addedDate: "2024-03-17",
      brand: "Glamour",
      isNew: true,
    },
    {
      id: 5,
      name: "Cashmere Wrap Coat",
      price: 2990000,
      originalPrice: 3690000,
      image:
        "https://images.unsplash.com/photo-1548624313-0396c75f3f2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "clothing",
      addedDate: "2024-03-16",
      brand: "Elegance",
      isNew: true,
    },
    {
      id: 6,
      name: "Satin Blouse",
      price: 1290000,
      originalPrice: 1690000,
      image:
        "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "clothing",
      addedDate: "2024-03-15",
      brand: "Chic",
      isNew: true,
    },
    {
      id: 7,
      name: "Crystal Drop Earrings",
      price: 990000,
      originalPrice: 1290000,
      image:
        "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "jewelry",
      addedDate: "2024-03-14",
      brand: "Glamour",
      isNew: true,
    },
    {
      id: 8,
      name: "Pleated Midi Skirt",
      price: 1490000,
      originalPrice: 1890000,
      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "clothing",
      addedDate: "2024-03-13",
      brand: "Luxe",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="New Arrivals"
            className="w-full h-full object-cover object-center opacity-90"
           width={500} height={300} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-light mb-4 leading-tight">
              New <span className="font-medium">Arrivals</span>
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Discover our latest collection of elegant and sophisticated
              pieces.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg border border-neutral-200 p-6 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="text-neutral-800 font-medium flex items-center">
                <FiCalendar className="mr-2" /> Time Period:
              </span>
              <div className="flex flex-wrap gap-2">
                {timeFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setTimeFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      timeFilter === filter.id
                        ? "bg-primary text-white"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-neutral-800 font-medium flex items-center">
                <FiClock className="mr-2" /> Sort By:
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 rounded-full border border-neutral-200 text-neutral-700 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newItems.map((item) => (
            <div key={item.id} className="group">
              <Link href={`/product/${item.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
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
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-neutral-500">{item.brand}</span>
                <span className="text-xs text-neutral-500">
                  {item.addedDate}
                </span>
              </div>
              <h3 className="text-sm font-medium text-neutral-900">
                {item.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm font-medium text-primary">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}
                </p>
                <p className="text-xs text-neutral-500 line-through">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.originalPrice)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="p-2 rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors">
              <FiChevronLeft size={18} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors">
              3
            </button>
            <button className="p-2 rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors">
              <FiChevronRight size={18} />
            </button>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-secondary rounded-lg p-12 text-center">
          <h2 className="text-2xl font-medium mb-4">Be the First to Know</h2>
          <p className="text-neutral-700 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to discover our new
            arrivals, exclusive offers, and fashion inspiration.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-neutral-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
