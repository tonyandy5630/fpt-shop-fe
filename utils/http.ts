import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from "axios";
import { getTokenFromLS } from "./localStorage";

class Http {
  instance: AxiosInstance;
  private accessToken: string | null;
  constructor() {
    this.accessToken = getTokenFromLS();
    this.instance = axios.create({
      baseURL: "",
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken !== "" && config.headers) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
        }
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;
export default http;
