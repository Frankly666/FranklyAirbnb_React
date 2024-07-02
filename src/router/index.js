import { Navigate } from "react-router-dom";
import Home from "@/views/home";
import Entire from "@/views/entire";
import Detail from "@/views/detail";

const routes = [
  {
    path: "",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/entire",
    element: <Entire/>
  },
  {
    path: "/detail",
    element: <Detail/>
  }
]

export default routes
