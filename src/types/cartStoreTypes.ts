import type { TProduct } from '@/types/product';

export type TCartStoreState = {
  cartProducts: TProduct[];
  isPaid: boolean;
};

export type TCartGetters = {
  totalPrice: (state: TCartStoreState) => number;
  totalTax: (state: TCartStoreState) => number;
  totalPriceWithTax: (state: TCartStoreState) => number;
};

export interface ICartStoreActions {
  setIsPaid: (isPaid: boolean) => void;
}
