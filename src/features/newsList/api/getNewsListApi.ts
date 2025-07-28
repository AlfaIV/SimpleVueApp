export enum NewsTypes {
  job = 'job',
  story = 'story',
  comment = 'comment',
  poll = 'poll',
  pollopt = 'pollopt',
};

export type TNewsRequest = {
  id: number,
  deleted?: boolean,
  type: NewsTypes,
  by?: string,
  time?: number,
  text?: string,
  dead?: boolean,
  parent?: number,
  poll?: number,
  kids?: number[],
  score?: number,
  url?: string,
  title?: string,
  parts?: number[],
  descendants?: number,
};
