import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Footer from "./Footer"



const Layout = () => {
  return (
    <>
    <SideBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout