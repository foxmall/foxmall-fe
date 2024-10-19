import axios from "axios";
import EnvConfigVariable from "../env/EnvConfigVariable";


const getToken = (code: string, codeVerifier: string) => {
  return axios.post(
      `${EnvConfigVariable.OAUTH2_SERVER_HOST}/oauth2/token`,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        client_id: EnvConfigVariable.OAUTH2_CLIENT_ID??'',
        code_verifier: codeVerifier,
        redirect_uri: EnvConfigVariable.OAUTH2_REDIRECT_URI??''
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: EnvConfigVariable.OAUTH2_CLIENT_ID??'',
          password: EnvConfigVariable.OAUTH2_CLIENT_SECRET??''
        }
      }
  );
}

export default getToken