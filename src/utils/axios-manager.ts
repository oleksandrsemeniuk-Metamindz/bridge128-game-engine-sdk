import axios, { AxiosInstance } from 'axios';

import { GAME_ENGINE_API_URL } from '~src/config';

export class AxiosManager {
  private static instance: AxiosInstance | null = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: GAME_ENGINE_API_URL,
      });
    }

    return this.instance;
  }

  static setAccessToken(accessToken: string) {
    this.getInstance().defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
}
