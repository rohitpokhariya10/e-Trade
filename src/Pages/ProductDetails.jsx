import React, { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import Loader from "../Components.jsx/Loader";

const ProductDetails = () => {
  // 🔹 Context se saara products ka data le rahe hain
  const { productsData } = useContext(ProductDataContext);

  // 🔹 URL se productId nikal rahe hain ( /products/:productId )
  const { productId } = useParams();

  // 🔹 Description ke liye "Read more / Read less" ka state
  const [showFullDesc, setShowFullDesc] = useState(false);

  // 🔹 Page open hote hi user ko top se content dikhna chahiye
  // (kyunki navbar fixed hai)
  //Humne useEffect ke andar isliye likha taakiye code sirf component ke pehle mount hone ke baad  ek hi baar chale, har re-render pe nahi.
  useEffect(() => {
  //  {} js me tab use krte hai jab key value pair denaho
  //scrollTo()--> browser ka function hai
  //window ---> means browser ka gloabal object-->poore browser window ko refer krta hai
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 🔹 Safety check:ye jaroori hai
  // Jab tak API se data load nahi hota,
  // tab tak Loader dikhao (page crash hone se bachega)
  if (!productsData || productsData.length === 0) {
    return <Loader />;
  }

  // 🔹 Jis product pe click hua tha, usko productsData ke array me find kar rahe hain
  //useParams()--> se hume string value milti hai kyunki url me sari chije string format me hota tabhi humne Number me convert kara
  const selectedProduct = productsData.find(
    (product) => product.id === Number(productId)
  );
console.log("URL productId:", productId);
console.log("Selected product:", selectedProduct);
console.log("Selected product ID:", selectedProduct.id);

  // 🔹 Agar galat ID ho ya product na mile
  if (!selectedProduct) {
    return <div className="p-20">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#faf7f2] pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* ================= LEFT SIDE : PRODUCT IMAGE ================= */}
        <div className="bg-white rounded-3xl p-10 flex justify-center shadow">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="h-[350px] object-contain"
          />
        </div>

        {/* ================= RIGHT SIDE : PRODUCT DETAILS ================= */}
        <div>
          {/* Product tag */}
          <span className="text-sm text-orange-500 font-medium">
            🔥 Best Seller
          </span>

          {/* Product Title */}
          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            {selectedProduct.title}
          </h1>

          {/* Fake rating (UI purpose ke liye) */}
          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            ⭐ ⭐ ⭐ ⭐ ☆
            <span className="text-gray-400 text-sm">(120 Reviews)</span>
          </div>

          {/* ================= DESCRIPTION (READ MORE LOGIC) ================= */}
          <div className="mt-6">
            {/* 
              showFullDesc false → limited lines (line-clamp)
              showFullDesc true  → full description
            */}
            <p
            // {} JSX ke andar JavaScript expression likhne ke liye use hota hai

           // `` (template literal) use karte hain taaki string ke saath JS logic / condition easily likh sake
              className={`text-gray-600 leading-relaxed transition-all ${
                // line-clamp-4-->text ko sirf 4 lines tak limit kar deta hai baaki text ... me chhupa deta hai
                showFullDesc ? "" : "line-clamp-4"
              }`}
            >
              {selectedProduct.description}
            </p>

            {/* 
              Read more button tabhi dikhega
              jab description thodi lambi ho
            */}

            {selectedProduct.description.length > 150 && (
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="mt-2 text-sm text-blue-600 font-medium hover:underline"
              >
                {showFullDesc ? "Read less" : "Read more"}
              </button>
            )}
          </div>

          {/* ================= PRICE SECTION ================= */}
          <div className="mt-6 flex items-center gap-4">
            {/* Actual price */}
            <span className="text-3xl font-bold text-gray-900">
              ₹ {Math.round(selectedProduct.price * 80)}
            </span>

            {/* Fake MRP (cut price for ecommerce feel) */}
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
