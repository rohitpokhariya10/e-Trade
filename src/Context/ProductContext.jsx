import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

// Context create kara 
export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {
  //Basically hum is file se sirf API ke data ko globally available bna rhe hai
  //taki koi bhi component us ekar paye easily without prop drilling

  const [productsData, setProductsData] = useState([]);
  

  const getData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
     // console.log(response.data)
     //ui me set krdo data ko
     setProductsData(response.data)
      
    } catch (error) {
      console.log("Error fetching products", error);
   
    }
  };
  //sirf 1 render me chalega
  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductDataContext.Provider value={{ productsData}}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
