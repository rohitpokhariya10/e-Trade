import React, { createContext, useEffect, useState } from "react";
import { getData } from "../api/ProductAPI";

//  Context create kiya taaki products ka data globally available ho
export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {

  //  productsData me hum API se aane wala products ka array store karenge
  const [productsData, setProductsData] = useState([]);

  //  useEffect isliye use kar rahe hain kyunki
  //    hume API call sirf component ke first render ke baad ek hi baar karni hai
  useEffect(() => {

    // ❗ API call async hoti hai aur Promise return karti hai
    // ❗ await sirf async function ke andar kaam karta hai
    //  isliye hum useEffect ke andar ek alag async function bana rahe hain
    const fetchData = async () => {
      
      //  getData() Promise return karta hai
      //  await se hum actual data (array) nikaal rahe hain
      const data = await getData();

      // ab Promise nahi balki actual array ko state me set kar rahe hain
      setProductsData(data);
    };

    //  async function ko manually call karna padta hai
    fetchData();

  }, []); //  empty dependency array ka matlab: sirf 1 baar run hoga

  return (
    //  Context Provider ke through productsData ko
    //    poore app me available kara rahe hain
    <ProductDataContext.Provider value={{ productsData }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
