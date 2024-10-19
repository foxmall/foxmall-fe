const buildAuthUri: (authServerHost: string, redirectUri: string, codeChallenge: string, clientId: string) => string = (
    authServerHost, redirectUri, codeChallenge, clientId) => {
  return `${authServerHost}/oauth2/authorize?response_type=code&client_id=${clientId}&scope=openid&redirect_uri=${redirectUri}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
}

const Oauth2Util = {
  buildAuthUri
}

export default Oauth2Util