declare module "@heroicons/react/outline";
declare module "styled-components";

interface ProductPrice {
  price: number;
  displayPrice: string;
  salePrice?: number;
  displaySalePrice?: string;
}

interface IProduct {
  id: string;
  upc: string;
  name: string;
  price: ProductPrice;
  isOnSale?: boolean;
  fullDescription?: string;
  shortDescription?: string;
  nutritionInformations?: string;
  category?: number;
  images?: string[];
  thumbnail?: string;
}

interface IStoreProduct {
  product: IProduct;
  price: ProductPrice;
  inventory: number;
}

interface IStore {
  id: number;
  storeCode: number;
  supportPickup: boolean;
  openTime: number;
  closeTime: number;
}

interface IProductCategory {
  id: string | number;
  name: string;
  properties: IProductCategoryProperty[];
}

interface IProductCategoryProperty {
  name: string;
  type: string;
  options?: string[];
}

interface IProductHomePageResponse {
  id: string;
  name: string;
  startPrice: number;
  imagePath: string;
  username: string;
}

declare interface String {
  truncate: (num: number) => string;
}

declare interface String {
  prettyMoney: () => string;
  prettyDate: () => string;
}

declare interface Array<T> {
  has: (item: T) => boolean;
}
