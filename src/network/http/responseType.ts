export interface responseType<T = any> {
  status: number;
  msg: string;
  data: T;
}
