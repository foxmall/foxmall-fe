import './MainHeader.css'
import logo from '../../../assets/img/foxmall-logo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import SearchBar from "./components/SearchBar";
import EnvConfigVariable from "../../../common/env/EnvConfigVariable";
import Oauth2Util from "../../../common/util/Oauth2Util";
import pkceChallenge from "pkce-challenge";
import {UserContextType} from "../../../common/context/UserContext/UserContextProvider";
import UserContext from "../../../common/context/UserContext/UserContext";
import {useContext, useEffect, useState} from "react";


const MainHeader = () => {
  const userCtx = useContext<UserContextType | null>(UserContext);

  const [username, setUsername] = useState<string|null>( null);

  useEffect(() => {
    if(!userCtx){
      return;
    }
    setUsername(userCtx.username);
  }, []);

  const handleLoginClick: () => void = () => {
    pkceChallenge().then(result => {
      const {code_verifier: codeVerifier, code_challenge: codeChallenge} = result;
      localStorage.removeItem("code_verifier");
      localStorage.setItem("code_verifier", codeVerifier);
      window.location.href = Oauth2Util.buildAuthUri(
          EnvConfigVariable.OAUTH2_SERVER_HOST ?? '',
          EnvConfigVariable.OAUTH2_REDIRECT_URI ?? '',
          codeChallenge,
          EnvConfigVariable.OAUTH2_CLIENT_ID ?? ''
      );
    })
  }

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
              {
                username ? username : <a href="#" onClick={handleLoginClick}>Đăng ký/Đăng nhập</a>
              }
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
