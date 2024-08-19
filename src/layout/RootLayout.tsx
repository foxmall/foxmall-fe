import {Outlet} from "react-router-dom";
import './RootLayout.css'
import SimpleHeader from "./components/SimpleHeader/SimpleHeader";
import MainHeader from "./components/MainHeader/MainHeader";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";

const RootLayout = () => {
  return (
      <>
        <SimpleHeader/>
        <MainHeader />
        <Menu />
        <Banner />
        <Outlet />
      </>
  )
}

export default RootLayout
