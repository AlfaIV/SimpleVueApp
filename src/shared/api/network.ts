import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
import { baseURL } from './apiConstants'; 

class Network {
  public api: AxiosInstance;
  public readonly baseURL = baseURL;
  public readonly timeout = 5000;
  public controller = new AbortController();

  constructor(){
    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  public async get<T>(url: string): Promise<AxiosResponse<T>> {
    try {
      return await this.api.get<T>(url, {
        signal: this.controller.signal,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Ошибка Axios:', error.message);
      } else {
        console.error('Ошибка получения данных:', error);
      }
      throw error;
    }
  }

  public cancelRequests(): void {
    this.controller.abort();
    this.controller = new AbortController();
  }
}

export const network = new Network;