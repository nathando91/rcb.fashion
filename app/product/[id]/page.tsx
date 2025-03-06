"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    id: id,
    name: "Designer Dress",
    price: 49.99,
    originalPrice: 199.99,
    description:
      "A beautiful designer dress in excellent condition. Made from high-quality materials and perfect for special occasions.",
    brand: "Zara",
    category: "clothing",
    sizes: ["XS", "S", "M", "L", "XL"],
    condition: "Like New",
    images: [
      "/images/product1.jpg",
      "/images/product1-2.jpg",
      "/images/product1-3.jpg",
    ],
    seller: {
      id: 101,
      name: "Thời Trang Minh Hà",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 4.8,
      reviewCount: 156,
      verified: true,
      joinDate: "2020-05-15",
      location: "Hà Nội, Việt Nam",
      responseRate: 98,
      responseTime: "Trong vòng 1 giờ",
      description:
        "Chuyên cung cấp các sản phẩm thời trang cao cấp, hàng chính hãng với giá tốt nhất thị trường. Cam kết chất lượng và dịch vụ khách hàng tuyệt vời.",
      followers: 1250,
      productsCount: 87,
      reviews: [
        {
          id: 1,
          user: "Nguyễn Thị Hương",
          avatar: "https://randomuser.me/api/portraits/women/10.jpg",
          rating: 5,
          date: "2023-10-15",
          comment:
            "Sản phẩm chất lượng tuyệt vời, đóng gói cẩn thận và giao hàng nhanh chóng. Rất hài lòng!",
        },
        {
          id: 2,
          user: "Trần Văn Nam",
          avatar: "https://randomuser.me/api/portraits/men/15.jpg",
          rating: 4,
          date: "2023-09-28",
          comment:
            "Hàng đẹp như mô tả, shop tư vấn nhiệt tình. Sẽ ủng hộ lần sau.",
        },
        {
          id: 3,
          user: "Lê Thị Hà",
          avatar: "https://randomuser.me/api/portraits/women/22.jpg",
          rating: 5,
          date: "2023-09-10",
          comment:
            "Chất vải rất tốt, đường may tỉ mỉ. Giao hàng nhanh và đóng gói cẩn thận.",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <Link href="/shop" className="text-gray-500 hover:text-green-600">
                Shop
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1">
              <div className="w-full h-[500px] bg-gray-200 rounded-lg"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                  <div className="w-full h-32 bg-gray-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-green-600 font-bold text-2xl">
                  ${product.price}
                </span>
                <span className="text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(127 reviews)</span>
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">
                Condition: {product.condition}
              </span>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Size</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border ${selectedSize === size
                      ? "border-green-600 bg-green-50 text-green-600"
                      : "border-gray-300 text-gray-600 hover:border-green-600"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Quantity</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition">
                Add to Cart
              </button>
              <button className="w-full border-2 border-green-600 text-green-600 py-3 rounded-md hover:bg-green-50 transition">
                Add to Wishlist
              </button>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold mb-4">
                Thông tin người bán
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium text-lg">{product.seller.name}</p>
                    {product.seller.verified && (
                      <span className="inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <svg
                          className="mr-1 h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Đã xác thực
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${star <= Math.round(product.seller.rating)
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
                    <span className="ml-1 text-sm text-gray-600">
                      {product.seller.rating} ({product.seller.reviewCount} đánh
                      giá)
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Vị trí:</span>{" "}
                      {product.seller.location}
                    </div>
                    <div>
                      <span className="font-medium">Tham gia:</span>{" "}
                      {new Date(product.seller.joinDate).toLocaleDateString(
                        "vi-VN",
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Sản phẩm</div>
                  <div className="font-semibold">
                    {product.seller.productsCount}
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Người theo dõi</div>
                  <div className="font-semibold">
                    {product.seller.followers}
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Tỷ lệ phản hồi</div>
                  <div className="font-semibold">
                    {product.seller.responseRate}%
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">
                    Thời gian phản hồi
                  </div>
                  <div className="font-semibold">
                    {product.seller.responseTime}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <Link href={`/seller/${product.seller.id}`} className="flex-1">
                  <button className="w-full bg-white border border-green-600 text-green-600 py-2 rounded-md hover:bg-green-50 transition">
                    Xem gian hàng
                  </button>
                </Link>
                <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition">
                  Theo dõi
                </button>
                <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition">
                  Nhắn tin
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "description"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
              >
                Mô tả sản phẩm
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "reviews"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
              >
                Đánh giá ({product.seller.reviews.length})
              </button>
              <button
                onClick={() => setActiveTab("seller")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "seller"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
              >
                Thông tin người bán
              </button>
            </nav>
          </div>

          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p>{product.description}</p>
                <h3 className="text-lg font-medium mt-4">Chi tiết sản phẩm</h3>
                <ul>
                  <li>Thương hiệu: {product.brand}</li>
                  <li>Danh mục: {product.category}</li>
                  <li>Tình trạng: {product.condition}</li>
                  <li>Kích thước: {product.sizes.join(", ")}</li>
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="mb-8 flex items-center">
                  <div className="mr-4">
                    <div className="text-5xl font-bold text-gray-900">
                      {product.seller.rating}
                    </div>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-5 h-5 ${star <= Math.round(product.seller.rating)
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
                    <div className="text-sm text-gray-500 mt-1">
                      {product.seller.reviewCount} đánh giá
                    </div>
                  </div>
                  <div className="flex-1 max-w-md">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = product.seller.reviews.filter(
                        (r) => Math.round(r.rating) === rating,
                      ).length;
                      const percentage =
                        (count / product.seller.reviews.length) * 100;

                      return (
                        <div key={rating} className="flex items-center mt-1">
                          <div className="w-10 text-right mr-2 text-sm text-gray-600">
                            {rating} sao
                          </div>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="w-10 text-left ml-2 text-sm text-gray-600">
                            {percentage.toFixed(0)}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-6">
                  {product.seller.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src={review.avatar}
                              alt={review.user}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{review.user}</h4>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`w-4 h-4 ${star <= review.rating
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
                            <span className="ml-2 text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString(
                                "vi-VN",
                              )}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "seller" && (
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Giới thiệu về gian hàng
                </h3>
                <p className="text-gray-700 mb-6">
                  {product.seller.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Thông tin liên hệ</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {product.seller.location}
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Liên hệ qua tin nhắn
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Thống kê gian hàng</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center justify-between">
                        <span>Tỷ lệ phản hồi chat:</span>
                        <span className="font-medium">
                          {product.seller.responseRate}%
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Thời gian phản hồi:</span>
                        <span className="font-medium">
                          {product.seller.responseTime}
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Tham gia:</span>
                        <span className="font-medium">
                          {new Date(product.seller.joinDate).toLocaleDateString(
                            "vi-VN",
                          )}
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Người theo dõi:</span>
                        <span className="font-medium">
                          {product.seller.followers}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Link href={`/product/${item}`} key={item}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                  <div className="aspect-w-1 aspect-h-1">
                    <div className="w-full h-64 bg-gray-200"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">
                      Related Product {item}
                    </h3>
                    <p className="text-green-600 font-bold">$49.99</p>
                    <p className="text-sm text-gray-500">
                      Original Price: $199.99
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
