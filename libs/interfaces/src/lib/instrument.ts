export interface IInstrument {
  id: number;
  brand: string;
  model: string;
  price: number;
  boreSize: number;
  isForSale: boolean;
  isCaseIncluded: boolean;
  isShippingAvailable: boolean;
  isSold: boolean;
  key: string;
  finish: Finish;
  description: string;
  dateCreated: Date;
  dateUpdated: Date;
}

export type Finish = 'raw' | 'lacquer' | 'silver';
