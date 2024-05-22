import './App.css'
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Home from './components/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/about",
      element:<About/>,
    },
    {
      path: "/contact",
      element:<Contact/>,
    },
    {
      path: "/project",
      element:<Project/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
