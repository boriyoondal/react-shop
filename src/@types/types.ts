export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export interface APIGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: any;
}
