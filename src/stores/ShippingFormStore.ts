import { defineStore } from 'pinia';
import type {
  IShippingErrorActions,
  TBillingInfo,
  TPaymentInfo,
  TShippingErrorsGetters,
  TShippingFormState,
  TShippingInfo
} from '@/types/shippingForm';

export const useShippingFormStore = defineStore<
  'shipping-errors',
  TShippingFormState,
  TShippingErrorsGetters,
  IShippingErrorActions
>({
  id: 'shipping-errors',
  state: () => {
    return {
      shippingInfoErrors: {
        name: '',
        phone: '',
        street: '',
        city: '',
        country: '',
        zip: ''
      },
      isShippingInfoValidated: false,
      shippingInfo: {
        name: '',
        phone: '',
        street: '',
        city: '',
        country: '',
        zip: ''
      },
      billingInfoErrors: {
        name: '',
        email: '',
        street: '',
        city: '',
        country: '',
        zip: ''
      },
      billingInfo: {
        name: '',
        email: '',
        street: '',
        city: '',
        country: '',
        zip: ''
      },
      isBillingInfoValidated: false,
      paymentsInfoErrors: {
        name: '',
        cardNumber: '',
        expireDate: '',
        securityCode: ''
      },
      paymentsInfo: {
        name: '',
        cardNumber: '',
        expireDate: '',
        securityCode: ''
      }
    };
  },
  getters: {
    isShippingInfoValid(state) {
      return !Object.keys(state.shippingInfoErrors).some(
        (key) => !!state.shippingInfoErrors[key as keyof TShippingInfo]
      );
    },
    isBillingInfoValid(state) {
      return !Object.keys(state.billingInfoErrors).some(
        (key) => !!state.billingInfoErrors[key as keyof TBillingInfo]
      );
    },
    isPaymentInfoValid(state) {
      return !Object.keys(state.paymentsInfoErrors).some(
        (key) => !!state.paymentsInfoErrors[key as keyof TPaymentInfo]
      );
    }
  },
  actions: {
    setShippingInfoError(name: keyof TShippingInfo, error: string) {
      this.shippingInfoErrors[name] = error;
    },
    setBillingInfoError(name: keyof TBillingInfo, error: string) {
      this.billingInfoErrors[name] = error;
    },
    setPaymentInfoError(name: keyof TPaymentInfo, error: string) {
      this.paymentsInfoErrors[name] = error;
    },
    setIsShippingInfoValidated(value) {
      this.isShippingInfoValidated = value;
    },
    setIsBillingInfoValidated(value) {
      this.isBillingInfoValidated = value;
    },
    setShippingInfo(value) {
      this.shippingInfo = value;
    },
    setBillingInfo(value) {
      this.billingInfo = value;
    },
    setPaymentInfo(value) {
      this.paymentsInfo = value;
    }
  }
});
