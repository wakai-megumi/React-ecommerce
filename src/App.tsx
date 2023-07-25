import logo from "./logo.svg"
import ProductList from "./features/products-list/ProductList"
import "./App.css"
import Home from "../src/pages/Home"
import LoginPage from "../src/pages/LoginPage.jsx"
import SignupPage from "../src/pages/SignupPage.jsx"

// routing done here
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
])
// here specify all the router in the page -- can also specify the errorpage router that help to hanlde it efficienntl

function App() {
  return <RouterProvider router={router} />
}

export default App
