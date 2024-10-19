import {Outlet} from "react-router-dom";
import './RootLayout.css'
import SimpleHeader from "./components/SimpleHeader/SimpleHeader";
import MainHeader from "./components/MainHeader/MainHeader";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import UserContextProvider from "../common/context/UserContext/UserContextProvider";

const RootLayout = () => {
  return (
      <UserContextProvider>
        <SimpleHeader/>
        <MainHeader />
        <Menu />
        <Banner />
        <Outlet />
      </UserContextProvider>
  )
}

export default RootLayout
