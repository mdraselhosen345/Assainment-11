import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Componet/Home/Home";
import Navber from "../Componet/Navber/Navber";
import Footer from "../Componet/Footer/Footer";
import Banner from "../Componet/Banner/Banner";
import Brend from "../Componet/brend/Brend";
import Categories from "../Componet/Categories/Categories";
import Audio from "../Componet/Audio-C/Audio";
import Profile from "../Componet/Profile/Profile";
import Card from "../Componet/Card/Card"
import Login from "../Componet/Login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true, 
            Component: Home,
        }, 
        {
            path: "Navber",
            Component: Navber,
        },
        {
          path: "Banner",
          Component: Banner,
        },
        {
            path: "Footer",
            Component: Footer,
        },
        {
          path: "Brend",
          Component: Brend,
        },
        {
          path: "Categories",
          Component: Categories,
        },
        {
          path: "Audio",
          Component: Audio,
        },
        {
            path: "Card",
            Component: Card,
        },
        {
          path: "Profile",
          Component: Profile,
        },
        {
          path: "Login",
          Component: Login,
        }
       
   
    ]
  },
]);