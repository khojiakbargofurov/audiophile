//react router dom 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//loader 
import {loader as HeadphonesLoader} from "./pages/Headphones"
import {loader as EarphonesLoader} from "./pages/Earphones"
import {loader as SpeakersLoader} from "./pages/Speakers"
import {loader as DetailsLoader} from "./pages/SingleProduct"

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
} from "./pages";
import Trash from "./pages/Trash";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path:"/earphones",
          element: <Earphones />,
          loader: EarphonesLoader,
        },
        {
          path:"/headphones",
          element: <Headphones />,
          loader:HeadphonesLoader,
          
        },
        {
          path:"/speakers",
          element: <Speakers />,
          loader: SpeakersLoader,
        },
        {
          path:"/products/:slug", 
          element: <Singleproduct />,
          loader: DetailsLoader,
        },
        {
          path:"/checkout", 
          element: <Checkout />,
        },
        {
          path: "/trash",
          element: <Trash />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <register />,
      errorElement: <Error />,
    },
  ])
  return <RouterProvider router={routes}/>
}

export default App
