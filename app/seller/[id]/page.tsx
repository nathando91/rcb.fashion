"use client";

import { useState } from "react";
import { FiStar, FiShoppingBag, FiCheck, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useParams } from "next/navigation";
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

interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
  productId: number;
  productName: string;
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
      reviewCount: 112,
      verified: true,
    },
  },
];

const mockReviews: Review[] = [
  {
    id: 1,
    user: {
      name: "Nguyễn Văn A",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    rating: 5,
    date: "2023-12-15",
    comment:
      "Sản phẩm chất lượng cao, đúng như mô tả. Giao hàng nhanh và đóng gói cẩn thận. Rất hài lòng!",
    productId: 1,
    productName: "Elegant Silk Blouse",
  },
  {
    id: 2,
    user: {
      name: "Trần Thị B",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    rating: 4,
    date: "2023-12-10",
    comment:
      "Chất liệu tốt, thiết kế đẹp. Tuy nhiên size hơi nhỏ so với mô tả.",
    productId: 2,
    productName: "Floral Summer Dress",
  },
  {
    id: 3,
    user: {
      name: "Lê Văn C",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    rating: 5,
    date: "2023-12-05",
    comment:
      "Người bán rất nhiệt tình, sản phẩm đúng như hình. Sẽ ủng hộ shop lần sau!",
    productId: 3,
    productName: "High-Waisted Trousers",
  },
  {
    id: 4,
    user: {
      name: "Phạm Thị D",
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    rating: 4,
    date: "2023-11-28",
    comment:
      "Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm đẹp nhưng màu sắc hơi khác so với hình.",
    productId: 4,
    productName: "Designer Handbag",
  },
  {
    id: 5,
    user: {
      name: "Hoàng Văn E",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    rating: 5,
    date: "2023-11-20",
    comment: "Chất lượng tuyệt vời, giá cả hợp lý. Sẽ giới thiệu cho bạn bè!",
    productId: 5,
    productName: "Casual Linen Blouse",
  },
];

export default function SellerProfilePage() {
  const params = useParams();
  const sellerId = Number(params.id);

  const [activeTab, setActiveTab] = useState<"products" | "reviews">(
    "products",
  );
  const [sortBy, setSortBy] = useState<string>("newest");

  // Find seller from the first product that matches the seller ID
  const sellerProduct = mockProducts.find(
    (product) => product.seller.id === sellerId,
  );
  const seller = sellerProduct?.seller;

  // Filter products by this seller
  const sellerProducts = mockProducts.filter(
    (product) => product.seller.id === sellerId,
  );

  // Filter reviews for this seller's products
  const sellerProductIds = sellerProducts.map((product) => product.id);
  const sellerReviews = mockReviews.filter((review) =>
    sellerProductIds.includes(review.productId),
  );

  if (!seller) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">
          Seller Not Found
        </h1>
        <p className="text-neutral-600 mb-8">
          The seller you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Seller Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
            <Image
              src={seller.avatar}
              alt={seller.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-neutral-900">
                {seller.name}
              </h1>
              {seller.verified && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
                  <FiCheck className="mr-1" size={12} />
                  Verified Seller
                </span>
              )}
            </div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(seller.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-neutral-600">
                {seller.rating} ({seller.reviewCount} reviews)
              </span>
            </div>
            <p className="text-neutral-600 mb-4">
              Specialized in high-quality fashion items with a focus on
              sustainable materials and ethical production.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <div className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-700">
                <span className="font-medium">{sellerProducts.length}</span>{" "}
                Products
              </div>
              <div className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-700">
                Since 2020
              </div>
              <div className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-700">
                Fast Shipping
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors">
              Follow Shop
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-neutral-200 mb-8">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("products")}
            className={`pb-4 text-sm font-medium ${
              activeTab === "products"
                ? "border-b-2 border-primary text-primary"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Products ({sellerProducts.length})
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-4 text-sm font-medium ${
              activeTab === "reviews"
                ? "border-b-2 border-primary text-primary"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Reviews ({sellerReviews.length})
          </button>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex justify-end mb-6">
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none pl-4 pr-10 py-2 border border-neutral-200 rounded-lg bg-white text-neutral-800 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
        </div>
      </div>

      {/* Products Tab Content */}
      {activeTab === "products" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {sellerProducts.map((product) => (
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
      )}

      {/* Reviews Tab Content */}
      {activeTab === "reviews" && (
        <div className="space-y-6">
          {sellerReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={review.user.avatar}
                    alt={review.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-neutral-900">
                      {review.user.name}
                    </h4>
                    <span className="text-xs text-neutral-500">
                      {new Date(review.date).toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600 mb-3">
                    {review.comment}
                  </p>
                  <div className="text-xs text-neutral-500">
                    Product:{" "}
                    <Link
                      href={`/product/${review.productId}`}
                      className="text-primary hover:underline"
                    >
                      {review.productName}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
            Previous
          </button>
          <button className="px-3 py-2 rounded-md bg-primary text-white">
            1
          </button>
          <button className="px-3 py-2 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
            2
          </button>
          <button className="px-3 py-2 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
            3
          </button>
          <span className="px-3 py-2 text-neutral-600">...</span>
          <button className="px-3 py-2 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
