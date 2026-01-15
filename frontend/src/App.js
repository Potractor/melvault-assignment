import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { RouterProvider } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Shipping from "./Pages/Shipping";
import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import ProtectedRoute from "./Pages/ProtectedRoute";
import RegisterUser from "./Pages/RegisterUser";
import { AuthContext } from "./Context/AuthContext";
import { useContext, useEffect } from "react";
import AddItem from "./Pages/AddItem";
import { getAllProducts } from "./apis/product";
import UserFavourites from "./Pages/UserFavourites";
function App() {
    const { authenticated,setAuthenticated } = useContext(AuthContext);
    useEffect(()=> { 
      if(localStorage.getItem('token')){
        setAuthenticated(true)
      }
    },[setAuthenticated])
  const provider = createBrowserRouter([

  {path: "/", element: <ProtectedRoute authenticated={authenticated}/>, children:[
      {path: "/", element : <Shop/>}, 
  {path: "/mens", element: <ShopCategory category ="MEN"/>},
  {path: "/women", element: <ShopCategory category="WOMEN"/>},
  {path: "/kids", element: <ShopCategory category="KIDS"/>},
    {path: "/product", element: <Product/>},
  {path: "/product/:productId", element: <Product/>},
  {path: "/cart", element: <Cart/>},
  {path: "/shipping", element: <Shipping/>},
  {path:"/add-items", element: <AddItem/>},
  {path: "/favourites", element: <UserFavourites/>}
  ]},
{path: "/login", element: <LoginSignup/>},
{path: "/register", element: <RegisterUser/>},
  {path: "/forgot-password", element: <ForgotPassword/>}

])
  return (
    <RouterProvider router = {provider}></RouterProvider>);
}

export default App;
