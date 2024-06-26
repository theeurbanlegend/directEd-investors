import axios from "axios";

export const baseURL = 'https://directed-investors.onrender.com'

const API = axios.create({
	baseURL,timeout:5000
});
//can also intercept to navigate to an error page
export const SetupInterceptors = () =>
  API.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error?.response?.status === 500) {
        throw new Error(error?.response);
      }

      return Promise.reject(error);
    }
  );
export default API;
