import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Componet/Home/Home";
import Navber from "../Componet/Navber/Navber";
import Footer from "../Componet/Footer/Footer";
import Banner from "../Componet/Banner/Banner";
import Card from "../Componet/Card/Card";
import Brend from "../Componet/brend/Brend";


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
          path: "Card",
          Component: Card,
        },
        {
            path: "Footer",
            Component: Footer,
        },
        {
          path: "Brend",
          Component: Brend,
        }
       
   
    ]
  },
]);