import React from "react";
import './App.css'
import routes from "./routes/routes";
import Up_top from './components/Up-to-top/Up-to-top';
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <React.Fragment>
      <Up_top />
      <Toaster position="top-right" />
      <RouterProvider router={routes} />
    </React.Fragment>
  )
}

export default App
