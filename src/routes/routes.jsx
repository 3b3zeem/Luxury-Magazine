import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layouts/Layout.jsx";
import { lazy, Suspense } from "react";
import NotFound from "../components/NotFound/NotFound.jsx";
// import Leaders from "../pages/101 leaders/Leaders.jsx";

const Loader = lazy(() => import("../layouts/Loader.jsx"));
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));
const Contact = lazy(() => import("../pages/Contact/Contact.jsx"));


const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      // {
      //   path: "leaders",
      //   element: (
      //     <Suspense fallback={<Loader />}>
      //       <Leaders />
      //     </Suspense>
      //   ),
      // },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


export default routes;
