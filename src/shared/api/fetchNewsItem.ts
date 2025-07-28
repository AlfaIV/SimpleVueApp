import type { TNewsRequest } from "features/newsList/api/getNewsListApi";
import { network } from "./network";
import { getNewsItem } from "./apiConstants";

export const fetchNewsItem = async (index: number) => {
  return (await network.get<TNewsRequest>(`${getNewsItem}/${index}.json`)).data;
};