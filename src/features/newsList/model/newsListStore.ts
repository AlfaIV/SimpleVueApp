import { defineStore } from "pinia"
import { network } from "shared/api/network";
import { itemPerPage } from "shared/constants/commonConstants";
import { getNewsListApiURL } from "shared/api/apiConstants";
import type { TNews } from "entities/news/newsType";
import { fetchNewsItem } from "shared/api/fetchNewsItem";


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

    async fetchNewsItem(index: number):Promise<TNews | undefined>{
      this.isLoading = true;
      try {
        const response = await fetchNewsItem(index);
        return({
            header: response.title ?? '',
            url: response.url ?? '',
            author: response.by ?? '',
            date: new Date((response.time ?? 0)*1000).toLocaleString('ru-RU', {dateStyle: "medium"}),
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

    async getNewsList(): Promise<void>{
      this.fetchLatestNews();
      for (let index = 0; index < this.page * itemPerPage; index++) {
        const news = await this.fetchNewsItem(index);
        !!news && this.newsList.push(news);
      }
    },
  },
})
