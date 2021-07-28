import instance from "./instance.service";

import history from "@app/history";
import {ROUTER_CONFIG} from "@app/utils/config";
import {constants} from "@app/constants";
import {User} from "@app/types";

class AuthenticationService {
  sessionUsername = 'authenticatedUser'
  sessionTokenName = 'token'

  checkValidToken(token: string) {
    return instance
      .get<{message: string}>(`/auth`, {
        headers: {
          authorization: token
        }
      })
      .then(res => res.data)
  }

  executeBasicAuthenticationService(username: string, password: string) {
    return instance
      .get<{message: string}>(`/auth`, {
        headers: {
          authorization: this._createBasicAuthToken(username, password)
        }
      })
      .then(res => res.data)
  }

  registerSuccessfulLogin(username: string, password: string) {
    sessionStorage.setItem(this.sessionUsername, username)
    sessionStorage.setItem(this.sessionTokenName, this._createBasicAuthToken(username, password))

    this._setupAxiosInterceptors(this._createBasicAuthToken(username, password))
  }

  getLoggedInUser() {
    return instance
      .get<User>('/getLoggedInUser')
      .then(res => res.data)
  }

  logout() {
    sessionStorage.removeItem(this.sessionUsername);
    sessionStorage.removeItem(this.sessionTokenName);
  }

  _createBasicAuthToken(username: string, password: string) {
    return `Basic ${window.btoa(username + ":" + password)}`
  }

  _isUserLoggedIn() {
    let user = sessionStorage.getItem(this.sessionUsername)
    return user !== null;
  }

  //sets up the axios interceptor to add the authorization token to every request
  _setupAxiosInterceptors(token: string) {
    instance.interceptors.request.use(
      (config) => {
        if (this._isUserLoggedIn() && config.url !== '/auth') {
          config.headers.authorization = token
        }
        return config
      },
      (error) => {
        const response = error.response

        const redirectToErrorPage = (type = constants.ERROR_TYPE.UNEXPECTED) => {
          window.onbeforeunload = null;
          history.push(`${ROUTER_CONFIG.ERROR}?type=${type}`);
        }

        if (response && response.status) {
          switch (response.status) {
            case 401: {
              redirectToErrorPage(constants.ERROR_TYPE.UNAUTHORIZED);
              break;
            }
            case 403: {
              redirectToErrorPage(constants.ERROR_TYPE.ACCESS_FORBIDDEN);
              break;
            }
            case 404: {
              redirectToErrorPage(constants.ERROR_TYPE.NOT_FOUND);
              break;
            }
            default: {
              redirectToErrorPage(constants.ERROR_TYPE.UNEXPECTED);
              break;
            }
          }
        }

        return Promise.reject(error)
      }
    )
  }
}

export const authService = new AuthenticationService()

export const createUserAPI = (userData: User) => {
  return instance
    .post<User>("/contractors", userData)
}
