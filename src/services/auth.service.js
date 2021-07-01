import instance from "./instance.service";

const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {
  username = null;
  password = null;

  executeBasicAuthenticationService(username, password) {
    return instance
      .get(`/auth`, {
        headers: {
          authorization: this._createBasicAuthToken(username, password)
        }
      })
      .then(res => res.data)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    this.username = username
    this.password = password
    this._setupAxiosInterceptors()
  }

  getLoggedInUser() {
    return instance
      .get('/getLoggedInUser')
      .then(res => res.data)
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  _createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  _isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    return user !== null;
  }

  //sets up the axios interceptor to add the authorization token to every request
  _setupAxiosInterceptors() {
    const token = this._createBasicAuthToken(this.username, this.password)
    instance.interceptors.request.use((config) => {
        if (this._isUserLoggedIn() && config.url !== '/auth') {
          config.headers.authorization = token
        }
        return config
      }
    )
  }
}

export default new AuthenticationService()

export const createContractorAPI = (data) => {
  return instance
    .post("/contractors", data)
}
