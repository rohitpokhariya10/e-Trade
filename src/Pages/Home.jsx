import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductDataContext } from "../Context/ProductContext";
import Loader from "../Components.jsx/Loader";


const Home = () => {
  const { productsData } = useContext(ProductDataContext);

  // 🛑 SAFETY CHECK (MANDATORY)
  //API late aaye ya fail hojaye tuh app crash nahi honi chahiye
  if (!productsData || productsData.length === 0) {
    return <Loader />;
  }

  // Hero product (real ecommerce trick)
  //First product ko hi hero product bna lia No extra filter
  const heroProduct = productsData[0];


  // 🔥 Category → representative product map
  //Is object me main category ke hisaab se product store karrahe hai
  // 🔹 Step 1: Ek empty object bana rahe hain
  // Is object ka kaam hai:
  //  har category ka sirf EK representative product store karna
  // Example final result:
  // {
  //   men: { product object },
  //   women: { product object },
  //   electronics: { product object }
  // }
  const categoryMap = {};

  // 🔹 Step 2: Sare products par ek-ek karke loop lagate hain
  productsData.forEach((product) => {
    //console.log(product);//har ek product milega obj ki form me

    // 🔹 Step 3: Check kar rahe hain ki
    // kya is product ki category pehle se categoryMap me exist karti hai ya nahi
    // product.category = "men", "women", etc.
    // categoryMap[product.category] → undefined means pehli baar aa rahi hai
    if (!categoryMap[product.category]) {

      // 🔹 Step 4: Agar category pehli baar aa rahi hai
      // toh us category ke naam se is product ko store kar do
      // ye ensure karta hai ki har category ka sirf ek product ho
      categoryMap[product.category] = product;
    }

    // 🔹 Agar category pehle se exist karti hai
    // toh kuch nahi karte (duplicate category ignore)
  });
  console.log(categoryMap);



  return (
    <div className="bg-red text-gray-900 ">

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="text-sm text-orange-500 font-medium">
            🔥 Best Deal This Week
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            {heroProduct.title}
          </h1>

          <p className="text-gray-600 mt-6 max-w-md line-clamp-3">
            {heroProduct.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              to={`/products/${heroProduct.id}`}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>

            <span className="text-gray-500 text-sm">
              ⭐⭐⭐⭐☆ (120 Reviews)
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <img
            src={heroProduct.image}
            alt={heroProduct.title}
            className="w-[300px] md:w-[360px] object-contain drop-shadow-2xl"
          />

          <div className="absolute top-10 right-10 bg-white px-4 py-2 rounded-xl shadow text-sm font-semibold">
            {/* API me prize dollar me hai tuh ($to indian rupee conversion) */}
            From ₹{Math.round(heroProduct.price * 80)}
          </div>
        </div>
      </section>


      {/* ================= CATEGORY SECTION (REAL DATA) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold mb-8">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {Object.keys(categoryMap).map((cat, i) => {
            console.log(cat);//current product ki key jo ki --> category hai
            console.log(i);//index

            //object me dynamically  runtime me category-->cat key ko access kar rhehai
            const product = categoryMap[cat]; // 🔥 actual product
            console.log(product);

            return (
              <div
              //  map vali key hai ye jo deni jaruri hoti hai taki react ko pata chale ki ye kya hai 
                key={i}
                className="bg-white rounded-2xl p-5 hover:shadow-xl transition group flex flex-col"
              >
                {/* Product image */}
                <div className="h-28 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Category name */}
                <p className="text-sm font-semibold text-gray-800 capitalize text-center mb-4">
                  {/* category ka name */}
                  {cat}
                </p>

                {/* 👉 VIEW DETAILS (opens THAT product only) */}
                <Link
                  //Dynamic Route
                  to={`/products/${product.id}`}
                  className="mt-auto text-center bg-black text-white text-xs py-2 rounded-full hover:bg-gray-800 transition"
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      </section>



      {/* ================= FEATURED SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white rounded-t-[40px]">
        <div className=" grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block text-xs tracking-wide uppercase text-blue-600 font-semibold">
              New Arrival
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-snug">
              {/* optional chaining --->agr productsData[1] exist karta hai tabhi title access karo */}
              {/* agar productsData[1].title  nhi hoga tuh crash nhi hoga kuch nhi dikhega simple*/}
              {/* ?.optional chaining */}
              {productsData[1]?.title}
            </h2>

            <p className="text-gray-600 mt-5 max-w-lg leading-relaxed">
              {productsData[1]?.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to={`/products/${productsData[1]?.id}`}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-medium
                     hover:bg-blue-700 transition active:scale-95"
              >
                View Product
              </Link>

              <span className="text-sm text-gray-500">
                Limited stock available
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-3xl p-10 shadow-sm">
              <img
                src={productsData[1]?.image}
                alt={productsData[1]?.title}
                className="w-[260px] md:w-[320px] object-contain"
              />
            </div>
          </div>

        </div>
      </section>


    </div>
  );
};

export default Home;
