import { Outlet } from "react-router"
import { Header } from "../components/Header"
import Footer from "../components/Footer"
import HashScroll from "../components/HashScroll"

export default function MarketingLayout() {
  return (
    <>
      <HashScroll />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
