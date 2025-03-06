"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiShoppingBag,
  FiUser,
  FiSearch,
  FiHeart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Sale", href: "/sale" },
    { name: "Brands", href: "/brands" },
    { name: "Categories", href: "/categories" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "shadow-sm bg-white/95 backdrop-blur-sm" : "bg-white"
      }`}
    >
      {/* Top bar with announcement or promo */}
      <div className="bg-gradient-to-r from-primary to-accent text-white text-center text-xs py-2 px-4 font-medium">
        Free shipping on orders over $100 | Use code WELCOME10 for 10% off your
        first order
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center group hover-lift">
            <span className="text-2xl font-bold tracking-tight text-black">
              CRB
            </span>
            <span className="text-2xl font-light tracking-tight text-primary ml-1">
              Fashion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  pathname === item.href ? "text-primary" : "text-neutral-700"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="py-1 pl-8 pr-4 rounded-full text-sm border border-neutral-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all w-36 focus:w-48"
              />
              <FiSearch
                size={16}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500"
              />
            </div>
            <button className="text-neutral-700 hover:text-primary transition-colors md:hidden">
              <FiSearch size={20} />
            </button>
            <Link
              href="/wishlist"
              className="text-neutral-700 hover:text-primary transition-colors relative hover-lift"
            >
              <FiHeart size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              href="/profile"
              className="text-neutral-700 hover:text-primary transition-colors hover-lift"
            >
              <FiUser size={20} />
            </Link>
            <Link
              href="/cart"
              className="text-neutral-700 hover:text-primary transition-colors relative hover-lift"
            >
              <FiShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 py-4 px-4 animate-fadeIn">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 rounded-full text-sm border border-neutral-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all w-full"
            />
            <FiSearch
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-neutral-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
