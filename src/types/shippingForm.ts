export type TShippingInfo = {
  name: string;
  phone: string;
  street: string;
  city: string;
  country: string;
  zip: string;
};

export type TBillingInfo = {
  name: string;
  email: string;
  street: string;
  city: string;
  country: string;
  zip: string;
};

export type TPaymentInfo = {
  name: string;
  cardNumber: string;
  expireDate: string;
  securityCode: string;
};

export type TShippingFormState = {
  shippingInfoErrors: TShippingInfo;
  shippingInfo: TShippingInfo;
  isShippingInfoValidated: boolean;
  billingInfoErrors: TBillingInfo;
  billingInfo: TBillingInfo;
  isBillingInfoValidated: boolean;
  paymentsInfoErrors: TPaymentInfo;
  paymentsInfo: TPaymentInfo;
};

export type TShippingErrorsGetters = {
  isShippingInfoValid: (state: TShippingFormState) => boolean;
  isBillingInfoValid: (state: TShippingFormState) => boolean;
  isPaymentInfoValid: (state: TShippingFormState) => boolean;
};

export interface IShippingErrorActions {
  setShippingInfoError: (name: keyof TShippingInfo, error: string) => void;
  setBillingInfoError: (name: keyof TBillingInfo, error: string) => void;
  setPaymentInfoError: (name: keyof TPaymentInfo, error: string) => void;
  setIsShippingInfoValidated: (value: boolean) => void;
  setIsBillingInfoValidated: (value: boolean) => void;
  setShippingInfo: (value: TShippingInfo) => void;
  setBillingInfo: (value: TBillingInfo) => void;
  setPaymentInfo: (value: TPaymentInfo) => void;
}
