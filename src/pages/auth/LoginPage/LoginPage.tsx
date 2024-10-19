import {useNavigate, useSearchParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import getToken from "../../../common/api/authService";
import axios from "axios";

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = useNavigate();

  useEffect(() => {
    let code: string | null = searchParams.get("code");
    const codeVerifier: string | null = localStorage.getItem("code_verifier");
    if(!codeVerifier || !code){
      return;
    }
    getToken(code, codeVerifier)
    .then(res => {
      localStorage.removeItem("code_verifier");
      localStorage.setItem("access_token", res.data.access_token);
      nav("/")
    })
    .catch(err => {
      console.log(err)
      localStorage.removeItem("code_verifier")
    })
    console.log(code)
  }, [])

  return (
      <>
        <h2>Login page</h2>
      </>
  )
}

export default LoginPage
