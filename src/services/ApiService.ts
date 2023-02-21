import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


export class ApiService {
  private readonly instance: AxiosInstance;

  constructor({ baseUrl, headers }: { baseUrl: string; headers?: any }, errorInterceptor : (error : AxiosError) => void) {    
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 60000,
      headers,
    });


    this.instance.interceptors.response.use((response) => response, errorInterceptor);
  }

  private readonly handleSuccess = (response: AxiosResponse) => response.data;

  private readonly handleError = (error: any) => {
    throw error;
  };

  get = <T>(
    url: string, 
    config?: AxiosRequestConfig
    ): Promise<T> =>
    this.instance
      .get(url, config)
      .then(this.handleSuccess)
      .catch(this.handleError);

  post = <T>(
    url: string,
    bodyRq: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    this.instance
      .post(url, bodyRq, config)
      .then(this.handleSuccess, this.handleError);
}
4