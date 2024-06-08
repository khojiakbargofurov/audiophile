import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//loader
import { loader as HeadphonesLoader } from "./pages/Headphones";
import { loader as EarphonesLoader } from "./pages/Earphones";
import { loader as SpeakersLoader } from "./pages/Speakers";
import { loader as DetailsLoader } from "./pages/SingleProduct";

//pages
import {
  HomeLayout,
  Earphones,
  Error,
  Headphones,
  Checkout,
  Landing,
  Login,
  Register,
  Singleproduct,
  Speakers,
  Trash,
} from "./pages";

//components 
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
          loader: EarphonesLoader,
        },
        {
          path: "/headphones",
          element: <Headphones />,
          loader: HeadphonesLoader,
        },
        {
          path: "/speakers",
          element: <Speakers />,
          loader: SpeakersLoader,
        },
        {
          path: "/products/:slug",
          element: <Singleproduct />,
          loader: DetailsLoader,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/trash",
          element: <Trash />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return (
    <KindeProvider
      clientId="da1a6d99502f4bf4b1ef2264138679bf"
      domain="https://audiophile.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <RouterProvider router={routes} />
    </KindeProvider>
  );
}

export default App;
