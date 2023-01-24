export const API_BASE_URL = "http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN_API = getApiUrl("/login");
export const SIGNUP_API = getApiUrl("/signup");
export const SOCIAL_LOGIN = getApiUrl("/social_login");
export const FORGOT_PASSWORD = getApiUrl("/forgot_password")

export const AccessKey = '31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q'
