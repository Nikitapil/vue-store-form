import { defineStore } from 'pinia';
import type {
  ICartStoreActions,
  TCartGetters,
  TCartStoreState
} from '@/types/cartStoreTypes';
import { createCartProducts } from '@/mock/cartMock';

export const useCartStore = defineStore<
  'cart-store',
  TCartStoreState,
  TCartGetters,
  ICartStoreActions
>({
  id: 'cart-store',
  state: () => {
    return {
      cartProducts: createCartProducts(),
      isPaid: false
    };
  },
  getters: {
    totalPrice(state) {
      return state.cartProducts.reduce((acc, product) => acc + product.cost, 0);
    },
    totalTax() {
      return this.totalPrice * 0.035;
    },
    totalPriceWithTax() {
      return this.totalTax + this.totalPrice;
    }
  },
  actions: {
    setIsPaid(isPaid) {
      this.isPaid = isPaid;
    }
  }
});
