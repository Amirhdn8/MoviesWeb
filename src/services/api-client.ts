import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6812128337844011898f7472d7100ac1",
  },
});

class APIClient<T> {
  endpont: string;

  constructor(endpont: string) {
    this.endpont = endpont;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpont, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpont + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
