import { defineStore } from "pinia"
import { network } from "shared/api/network";
import { getNewsListApiURL } from "../api/getNewsListApi";
import type { TNews } from "entities/news/newsType";


export const NewsListStore = defineStore('newsList', {
  state: () => ({
    newsList: [] as TNews[],
    newsIdList: [] as number[],
    isLoading: false,
    isError: false,
  }),
  actions: {
    async fetchLatestNews() {
      this.isLoading = true;
      try {
        const response = (await network.get<number[]>(getNewsListApiURL)).data;
        this.newsIdList = response;
      } catch {
        this.isError = true;
        console.error('Ошибка в получении списка новостей!');
      } finally {
        this.isLoading = false;
      }
    },
  },
})