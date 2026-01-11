import axios from "axios";

// Is file ko alag isliye banaya gaya hai taaki
// API call ka pura logic UI components se alag rahe
// Isse code clean, readable aur maintainable rehta hai

// getData ek async function hai kyunki
// HTTP request time leti hai aur Promise return karti hai
export const getData = async () => {
  try {
    // axios.get se hum external API ko call kar rahe hain
    // ye line server se data fetch karti hai
    const response = await axios.get("https://fakestoreapi.com/products");

    // response.data me actual products ka array hota hai
    // isi data ko hum return kar rahe hain taaki
    // context ya component use kar sake
    return response.data;

  } catch (error) {
    // agar API call fail ho jaaye
    // to error yahin handle ho jaata hai
    // UI crash hone se bach jaati hai
    console.log("Error fetching products", error);
  }
};
