import './MainHeader.css'
import logo from '../../../assets/img/foxmall-logo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons'
import SearchBar from "./components/SearchBar";

const MainHeader = () => {
  return (
      <div className={"main-header"}>
        <div className={"main-header__logo"}>
          <a href="#">
            <img src={logo} alt=""/>
          </a>
        </div>
        <div className={"main-header__left"}>
          <div className={"main-header__left-item"}>
            <SearchBar />
          </div>
          <div className={"main-header__left-group"}>
            <div className={"main-header__left-item"}>
              <FontAwesomeIcon icon={faUser} size={"lg"}
                               style={{marginRight: "10px", color: "FF8870"}}/>
              Đăng ký/Đăng nhập
            </div>
            <div className={"main-header__left-item"}>
              <FontAwesomeIcon icon={faCartShopping} size={"lg"}
                               style={{marginRight: "10px", color: "FF8870"}}/>
              Giỏ hàng
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainHeader
