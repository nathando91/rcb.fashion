"use client";

import { useState } from "react";
import Link from "next/link";
import { FiHeart, FiShoppingBag, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
export default function BrandsPage() {
  const [selectedBrand, setSelectedBrand] = useState("all");

  const brands = [
    {
      id: "elegance",
      name: "Elegance",
      logo: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      itemCount: 234,
      description: "Timeless sophistication for the modern woman",
    },
    {
      id: "luxe",
      name: "Luxe",
      logo: "https://images.unsplash.com/photo-1583744946564-b52d01a7f418?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      itemCount: 189,
      description: "Premium quality with exquisite craftsmanship",
    },
    {
      id: "chic",
      name: "Chic",
      logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      itemCount: 156,
      description: "Contemporary fashion with a feminine touch",
    },
    {
      id: "glamour",
      name: "Glamour",
      logo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      itemCount: 143,
      description: "Statement pieces for special occasions",
    },
    {
      id: "ethereal",
      name: "Ethereal",
      logo: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      itemCount: 98,
      description: "Delicate designs with romantic aesthetics",
    },
    {
      id: "velvet",
      name: "Velvet",
      logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      itemCount: 76,
      description: "Luxurious textures and rich color palettes",
    },
  ];

  const featuredItems = [
    {
      id: 1,
      name: "Silk Evening Gown",
      price: 2490000,
      originalPrice: 3290000,
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      brand: "Elegance",
    },
    {
      id: 2,
      name: "Designer Leather Handbag",
      price: 1890000,
      originalPrice: 2490000,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      brand: "Luxe",
    },
    {
      id: 3,
      name: "Pearl Embellished Heels",
      price: 1690000,
      originalPrice: 2190000,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      brand: "Chic",
    },
    {
      id: 4,
      name: "Diamond Pendant Necklace",
      price: 3490000,
      originalPrice: 4290000,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      brand: "Glamour",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Luxury Brands"
            className="w-full h-full object-cover object-center opacity-90"
           width={500} height={300} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-light mb-4 leading-tight">
              Luxury <span className="font-medium">Brands</span>
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Discover curated collections from the world&apos;s most
              prestigious fashion houses.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand.id)}
              className={`bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-md transition-all hover-lift ${
                selectedBrand === brand.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="p-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-neutral-100">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-medium text-center mb-3">
                  {brand.name}
                </h2>
                <p className="text-neutral-600 text-center text-sm mb-6">
                  {brand.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    {brand.itemCount} items
                  </span>
                  <span className="text-primary font-medium flex items-center text-sm">
                    View Collection <FiArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Featured Items */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium">Featured Collections</h2>
            <Link
              href="/shop"
              className="text-primary hover:text-primary-dark font-medium flex items-center"
            >
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="group">
                <Link href={`/product/${item.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
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
        </div>

        {/* Brand Spotlight */}
        <div className="bg-secondary rounded-lg p-10 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-medium mb-4">
                Brand Spotlight: Elegance
              </h2>
              <p className="text-neutral-700 mb-6">
                Discover the latest collection from Elegance, featuring timeless
                designs crafted with exceptional attention to detail. Each piece
                embodies sophistication and grace, perfect for the modern woman.
              </p>
              <Link
                href="/brands/elegance"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Explore Collection <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Elegance Collection"
                className="rounded-lg shadow-lg"
               width={500} height={300} />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-lg border border-neutral-200 p-12 text-center">
          <h2 className="text-2xl font-medium mb-4">
            Stay Updated with Your Favorite Brands
          </h2>
          <p className="text-neutral-700 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            collections, exclusive events, and special offers from your
            preferred luxury brands.
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
