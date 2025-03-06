"use client";

import Link from "next/link";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  itemCount: number;
}

export default function CategoriesPage() {
  const categories: Category[] = [
    {
      id: "dresses",
      name: "Dresses",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Elegant dresses for every occasion, from casual day wear to formal evening gowns.",
      itemCount: 156,
    },
    {
      id: "tops",
      name: "Tops",
      image:
        "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Stylish blouses, shirts, and tops to elevate your everyday wardrobe.",
      itemCount: 203,
    },
    {
      id: "bottoms",
      name: "Bottoms",
      image:
        "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Sophisticated skirts, pants, and shorts for a polished look.",
      itemCount: 142,
    },
    {
      id: "outerwear",
      name: "Outerwear",
      image:
        "https://images.unsplash.com/photo-1548624313-0396c75f3f2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Elegant coats, jackets, and blazers to complete your ensemble.",
      itemCount: 98,
    },
    {
      id: "accessories",
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Exquisite jewelry, scarves, and accessories to add the perfect finishing touch.",
      itemCount: 187,
    },
    {
      id: "shoes",
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Luxurious footwear from elegant heels to comfortable flats.",
      itemCount: 124,
    },
    {
      id: "bags",
      name: "Bags",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Designer handbags, clutches, and totes for every occasion.",
      itemCount: 109,
    },
    {
      id: "lingerie",
      name: "Lingerie",
      image:
        "https://images.unsplash.com/photo-1616244013966-46490a58e0cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Delicate and feminine lingerie pieces crafted with the finest materials.",
      itemCount: 76,
    },
  ];

  const subcategories = {
    dresses: [
      "Evening Gowns",
      "Cocktail Dresses",
      "Casual Dresses",
      "Maxi Dresses",
      "Mini Dresses",
    ],
    tops: ["Blouses", "T-Shirts", "Sweaters", "Cardigans", "Bodysuits"],
    bottoms: ["Skirts", "Pants", "Jeans", "Shorts", "Leggings"],
    outerwear: ["Coats", "Jackets", "Blazers", "Vests", "Capes"],
    accessories: ["Jewelry", "Scarves", "Belts", "Hats", "Gloves"],
    shoes: ["Heels", "Flats", "Boots", "Sandals", "Sneakers"],
    bags: ["Handbags", "Clutches", "Totes", "Backpacks", "Crossbody Bags"],
    lingerie: ["Bras", "Panties", "Sleepwear", "Bodysuits", "Shapewear"],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Categories"
            className="w-full h-full object-cover object-center opacity-90"
           width={500} height={300} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-light mb-4 leading-tight">
              Shop by <span className="font-medium">Category</span>
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Explore our curated collections organized by category.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8 text-center">
            Browse Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group relative overflow-hidden rounded-lg hover-lift"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center text-white text-sm font-medium">
                    Shop Now{" "}
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Categories */}
        <div className="bg-neutral-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-medium mb-8">All Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-md transition-all hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500">
                      {category.itemCount} items
                    </span>
                    <Link
                      href={`/categories/${category.id}`}
                      className="text-primary hover:text-primary-dark font-medium flex items-center text-sm"
                    >
                      View <FiChevronRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Subcategories */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Popular Subcategories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(subcategories)
              .slice(0, 3)
              .map(([categoryId, subItems]) => (
                <div
                  key={categoryId}
                  className="bg-white rounded-lg border border-neutral-200 p-6"
                >
                  <h3 className="text-lg font-medium mb-4">
                    {categories.find((c) => c.id === categoryId)?.name}
                  </h3>
                  <ul className="space-y-3">
                    {subItems.map((subItem, index) => (
                      <li key={index}>
                        <Link
                          href={`/categories/${categoryId}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center justify-between text-neutral-700 hover:text-primary transition-colors py-1"
                        >
                          <span>{subItem}</span>
                          <FiChevronRight size={16} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/categories/${categoryId}`}
                    className="mt-4 inline-block text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    View all{" "}
                    {categories
                      .find((c) => c.id === categoryId)
                      ?.name.toLowerCase()}
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Category Spotlight */}
        <div className="bg-secondary rounded-lg p-10 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-medium mb-4">
                Category Spotlight: Dresses
              </h2>
              <p className="text-neutral-700 mb-6">
                Discover our exquisite collection of dresses for every occasion.
                From elegant evening gowns to casual day dresses, find the
                perfect piece to enhance your wardrobe.
              </p>
              <Link
                href="/categories/dresses"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Explore Collection <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Dress Collection"
                className="rounded-lg shadow-lg"
               width={500} height={300} />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-lg border border-neutral-200 p-12 text-center">
          <h2 className="text-2xl font-medium mb-4">
            Stay Updated with New Arrivals
          </h2>
          <p className="text-neutral-700 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            collections, exclusive events, and special offers in your favorite
            categories.
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
