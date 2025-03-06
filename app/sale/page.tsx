"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import Image from "next/image";
export default function SalePage() {
  const [discountFilter, setDiscountFilter] = useState("all");
  const [sortBy, setSortBy] = useState("discount");
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 24,
    minutes: 60,
    seconds: 60,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const discountFilters = [
    { id: "all", name: "All Discounts" },
    { id: "50plus", name: "50%+ Off" },
    { id: "30plus", name: "30%+ Off" },
    { id: "20plus", name: "20%+ Off" },
  ];

  const saleItems = [
    {
      id: 1,
      name: "Silk Evening Gown",
      price: 1690000,
      originalPrice: 3290000,
      discount: 48,
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "clothing",
      brand: "Elegance",
      endDate: "2024-04-15",
    },
    {
      id: 2,
      name: "Designer Leather Handbag",
      price: 1290000,
      originalPrice: 2490000,
      discount: 48,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "bags",
      brand: "Luxe",
      endDate: "2024-04-10",
    },
    {
      id: 3,
      name: "Pearl Embellished Heels",
      price: 990000,
      originalPrice: 2190000,
      discount: 55,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "shoes",
      brand: "Chic",
      endDate: "2024-04-20",
    },
    {
      id: 4,
      name: "Diamond Pendant Necklace",
      price: 1990000,
      originalPrice: 4290000,
      discount: 54,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "jewelry",
      brand: "Glamour",
      endDate: "2024-04-05",
    },
    {
      id: 5,
      name: "Cashmere Wrap Coat",
      price: 1890000,
      originalPrice: 3690000,
      discount: 49,
      image:
        "https://images.unsplash.com/photo-1548624313-0396c75f3f2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "clothing",
      brand: "Elegance",
      endDate: "2024-04-18",
    },
    {
      id: 6,
      name: "Satin Blouse",
      price: 790000,
      originalPrice: 1690000,
      discount: 53,
      image:
        "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "clothing",
      brand: "Chic",
      endDate: "2024-04-12",
    },
    {
      id: 7,
      name: "Crystal Drop Earrings",
      price: 590000,
      originalPrice: 1290000,
      discount: 54,
      image:
        "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "jewelry",
      brand: "Glamour",
      endDate: "2024-04-25",
    },
    {
      id: 8,
      name: "Pleated Midi Skirt",
      price: 890000,
      originalPrice: 1890000,
      discount: 53,
      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "clothing",
      brand: "Luxe",
      endDate: "2024-04-22",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Sale Banner"
            className="w-full h-full object-cover object-center opacity-90"
           width={500} height={300} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-light mb-4 leading-tight">
              Seasonal <span className="font-medium">Sale</span>
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Discover exclusive discounts on our premium collection.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Sale Banner */}
        <div className="bg-gradient-to-r from-primary/90 to-accent/90 text-white rounded-lg p-10 mb-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6">Exclusive Flash Sale</h2>
            <p className="text-lg mb-8">
              Up to 55% off on selected luxury items. Limited time offer.
            </p>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-medium">{timeLeft.days}</span>
                </div>
                <div className="text-sm font-light">Days</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-medium">{timeLeft.hours}</span>
                </div>
                <div className="text-sm font-light">Hours</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-medium">
                    {timeLeft.minutes}
                  </span>
                </div>
                <div className="text-sm font-light">Minutes</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl font-medium">
                    {timeLeft.seconds}
                  </span>
                </div>
                <div className="text-sm font-light">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-neutral-200 p-6 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="text-neutral-800 font-medium flex items-center">
                <FiFilter className="mr-2" /> Discount Range:
              </span>
              <div className="flex flex-wrap gap-2">
                {discountFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setDiscountFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      discountFilter === filter.id
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
                  <option value="discount">Highest Discount</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {saleItems.map((item) => (
            <div key={item.id} className="group">
              <Link href={`/product/${item.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.discount}% OFF
                  </div>
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
                <span className="text-xs text-primary">
                  Until {item.endDate}
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
          <h2 className="text-2xl font-medium mb-4">
            Get Early Access to Sales
          </h2>
          <p className="text-neutral-700 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming
            sales, exclusive offers, and VIP discounts.
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
