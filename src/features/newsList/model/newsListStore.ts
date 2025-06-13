import { defineStore } from "pinia"
import { network } from "shared/api/network";
import { itemPerPage } from "shared/constants/commonConstants";
import { getNewsItem, getNewsListApiURL } from "shared/api/apiConstants";
import { options } from "shared/configs/dataTimeConfig";
import type { TNews } from "entities/news/newsType";
import { type TNewsRequest } from "../api/getNewsListApi";


export const NewsListStore = defineStore('newsList', {
  state: () => ({
    newsList: [] as TNews[],
    newsIdList: [] as number[],
    isLoading: false,
    isError: false,
    page: 1,
  }),
  actions: {
    async fetchLatestNews() {
      this.isLoading = true;
      try {
        const response = (await network.get<number[]>(getNewsListApiURL)).data;
        this.newsIdList = response.slice(0, 100);
        this.newsList = [];
      } catch {
        this.isError = true;
        console.error('Ошибка в получении списка новостей!');
      } finally {
        this.isLoading = false;
      }
    },

    async fetchNewsItem(index: number){
      this.isLoading = true;
      try {
        const response = (await network.get<TNewsRequest>(`${getNewsItem}/${index}.json`)).data;
        this.newsList.push({
            header: response.title ?? '',
            url: response.url ?? '',
            author: response.by ?? '',
            date: new Date((response.time ?? 0)*1000).toLocaleString('ru-RU', options),
            numberComments: response.kids?.length ?? 0,
            comments: response.kids ?? [],
            rating: response.score ?? 0,
            id: response.id,
        });
      } catch {
        this.isError = true;
        console.error(`Ошибка в получении новости с ИД ${index}!`);
      } finally {
        this.isLoading = false;
      }
    },

    async getNewsList(){
      this.fetchLatestNews();
      for (let index = 0; index < this.page * itemPerPage; index++) {
        await this.fetchNewsItem(index);
      }
      console.log(this.newsList);
    },
  },
})