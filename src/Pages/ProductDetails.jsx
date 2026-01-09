import React, { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import Loader from "../Components.jsx/Loader";

const ProductDetails = () => {
  const { productsData } = useContext(ProductDataContext);
  const { productId } = useParams();

  // 🔹 Read more state
  const [showFullDesc, setShowFullDesc] = useState(false);

  // 🔹 Scroll to top on page load (UX FIX)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 🔹 Loader safety
  if (!productsData || productsData.length === 0) {
    return <Loader />;
  }

  // 🔹 Selected product
  const selectedProduct = productsData.find(
    (product) => product.id === Number(productId)
  );

  if (!selectedProduct) {
    return <div className="p-20">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#faf7f2] pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* ================= LEFT : IMAGE ================= */}
        <div className="bg-white rounded-3xl p-10 flex justify-center shadow">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="h-[350px] object-contain"
          />
        </div>

        {/* ================= RIGHT : DETAILS ================= */}
        <div>
          <span className="text-sm text-orange-500 font-medium">
            🔥 Best Seller
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            {selectedProduct.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            ⭐ ⭐ ⭐ ⭐ ☆
            <span className="text-gray-400 text-sm">(120 Reviews)</span>
          </div>

          {/* ================= DESCRIPTION (READ MORE) ================= */}
          <div className="mt-6">
            <p
              className={`text-gray-600 leading-relaxed transition-all ${
                showFullDesc ? "" : "line-clamp-4"
              }`}
            >
              {selectedProduct.description}
            </p>

            {selectedProduct.description.length > 150 && (
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="mt-2 text-sm text-blue-600 font-medium hover:underline"
              >
                {showFullDesc ? "Read less" : "Read more"}
              </button>
            )}
          </div>

          {/* ================= PRICE ================= */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ₹ {Math.round(selectedProduct.price * 80)}
            </span>
            <span className="text-gray-400 line-through">
              ₹ {Math.round(selectedProduct.price * 95)}
            </span>
          </div>

          {/* ================= ACTION BUTTONS ================= */}
          <div className="mt-10 flex gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition active:scale-95">
              Add to Cart
            </button>

            <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-100 transition active:scale-95">
              Buy Now
            </button>
          </div>

          {/* ================= EXTRA INFO ================= */}
          <div className="mt-10 text-sm text-gray-500 space-y-2">
            <p>✔ Free delivery within 3–5 days</p>
            <p>✔ Easy 7-day return policy</p>
            <p>✔ Secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
