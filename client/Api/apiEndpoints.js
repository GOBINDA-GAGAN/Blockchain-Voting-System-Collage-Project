// apiEndpoints.js
const API = {
  AUTH: {
    SIGNUP: "/auth/signup",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
    REFRESH_TOKEN: "/auth/refresh-token",
  },
  USERS: {
    GET_ALL: "/auth/users",
    GET_BY_ID: (id) => `/users/${id}`,
    UPDATE: (id) => `/users/${id}`,
    DELETE: (id) => `/users/${id}`,
  },
};

export default API;
