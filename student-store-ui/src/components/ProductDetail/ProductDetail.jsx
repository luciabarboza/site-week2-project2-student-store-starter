// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Link} from "react-router-dom"
// import axios from "axios";
// import ProductGrid from "../ProductGrid/ProductGrid";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import ProductDetail from "../ProductDetail/ProductDetail"
// import Hero from "../Hero/Hero"
// import Home from "../Home/Home"
// import About from "../About/About"
// import Contact from "../Contact/Contact"
// import Sidebar from "../Sidebar/Sidebar"


// export default function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://codepath-store-api.herokuapp.com/store")
//       .then((response) => {
//         setProducts(response.data.products);
//       })
//       .catch((error) => {
//         console.error("Unable to fetch data...", error);
//       });
//   }, []);

//   return (
//     <div className="app">
      
//         <main>
//           <Navbar />
//           <Routes>
//             <Route
//               path="/"
//               element={<ProductGrid products={products} />}
//             />
//             <Route
//               path="/products/:id/*"
//               element={<ProductDetail />}
//             />
//           </Routes>
          
//         </main>
//       <Footer />
//     </div>
//   );
// }

const ProductDetail =() => {
  return(
    <div>

    </div>
  )
    
}
export default ProductDetail



