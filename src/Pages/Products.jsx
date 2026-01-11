import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductDataContext } from "../Context/ProductContext";
import Loader from "../Components.jsx/Loader";

/* ===== DROPDOWN ITEM ===== */
// ye component hai reusable component bnalia
function DropdownItem({ children, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`px-5 py-3 text-sm cursor-pointer transition
        ${active ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-100"}
      `}
    >
      {children}
    </div>
  );
}




const Products = () => {
  
  //Context se productsData nikal rahe hainIska fayda: agar kisi aur component ne
  //products fetch karke Context me dala hua hai, yahan seedha mil jayega.
  const { productsData } = useContext(ProductDataContext);

  //sortType — user ne kaunsa sort select kiya (default/lowToHigh/highToLow).
  const [sortType, setSortType] = useState("default");
  //open — dropdown menu open/close karna.
  const [open, setOpen] = useState(false);
  //original productsData me directly change nhi karna chahate islie
  //isliye alag se state variable bnaya hai isme voi product ayenge jo user ne sort option chhose kara hoga

  const [sortedProducts, setSortedProducts] = useState([]);

  // SORT LOGIC
  //sortType ke response me product ko sort karrha hai useEffect isliye use hua kyunki sorting ek reaction hai,
  //useEffect isliye use hua kyunki sorting ek reaction hai,
  //jo data ya option change hone par chalni chahiye,har render par nahi.
  useEffect(() => {
    if (!productsData) return;
    //productsData ki copy bnaye temp array--> sort perform krenge
    //originas productsArray safe rhega
    let temp = [...productsData];

    if (sortType === "lowToHigh") {
      //a ka prize chota hai b se tuh phele a ayega
      temp.sort((a, b) => a.price - b.price);
    }

    if (sortType === "highToLow") {
      temp.sort((a, b) => b.price - a.price);
    }
    //upar sorting logic ke basis me ui me products render karo
    setSortedProducts(temp);
    
  }, [productsData, sortType]);//useEffect kab chalana hai--> productsData change ho ya fir jab bhi user sort krega product ko tab


//Safety check
//prodyctsData nhi aya ya fir [] empty array aye ho productsData me tab <Loader/> dikhao
if (!productsData || productsData.length === 0) {
  return <Loader />;
}
   

//sortType ke according label/text ayega
  const getLabel = () => {
    if (sortType === "lowToHigh") return "Price: Low to High";
    if (sortType === "highToLow") return "Price: High to Low";
    return "Recommended";
  };

  return (
    <div className="bg-[#faf7f2] min-h-screen">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-14">
        <h1 className="text-3xl font-bold text-gray-900">
          Explore Our Products
        </h1>
        <p className="text-gray-500 mt-2">
          Hand-picked products curated just for you
        </p>
      </div>

      {/* SORT BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-white rounded-xl border border-gray-200 px-5 py-4
                        flex items-center justify-between shadow-sm">

          <p className="text-sm text-gray-600">
            Showing <span className="font-bold">{sortedProducts.length}</span> results
          </p>

          {/* CUSTOM DROPDOWN */}
          <div className="relative">
            <button

            //toggle effect in drowpdown menu
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between gap-3
                         bg-white border border-black rounded-lg
                         px-5 py-2 text-sm font-medium text-gray-800
                         hover:bg-gray-50 transition min-w-[200px]"
            >
              {/* getlable function call */}
              {getLabel()}
              <span
                className={`transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* DROPDOWN MENU */}
            {open && (
              // yhi hai dropdownmenu ka div
              <div
                className="hiii absolute  z-20 mt-2 w-full bg-white rounded-lg
                           shadow-lg border border-gray-200  overflow-hidden"
              > 
              {/* <DropdownItem> YE hai parent  */}
              {/* Children hai --> recommended , price high to low, low to high */}
                <DropdownItem
                  active={sortType === "default"}
                  onClick={() => {
                    setSortType("default");
                    //Dropdown menu hide krdo sortType select hone ke baad
                    setOpen(false);
                  }}
                >
                  Recommended
                </DropdownItem>

                <DropdownItem
                  active={sortType === "lowToHigh"}
                  onClick={() => {
                    setSortType("lowToHigh");
                    setOpen(false);
                  }}
                >
                  Price: Low to High
                </DropdownItem>

                <DropdownItem
                  active={sortType === "highToLow"}
                  onClick={() => {
                    setSortType("highToLow");
                    setOpen(false);
                  }}
                >
                  Price: High to Low
                </DropdownItem>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-20 mt-10
                      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-2xl p-5 transition
                       hover:-translate-y-[2px] hover:shadow-lg"
          >
            <div className="h-44 flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>

            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
              {product.title}
            </h3>

            <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
              ⭐ ⭐ ⭐ ⭐ <span className="text-gray-400">(120)</span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">
                ₹ {Math.round(product.price * 80)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ₹ {Math.round(product.price * 95)}
              </span>
            </div>

            <button
              className="mt-4 w-full bg-black text-white py-2 rounded-full
                         text-sm hover:bg-gray-800 transition"
            >
              View Product
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
