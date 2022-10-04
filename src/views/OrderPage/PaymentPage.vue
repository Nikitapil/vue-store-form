<template>
  <form @submit.prevent="onSubmit" :class="$style['form-container']">
    <h2 :class="$style.title">Payment</h2>
    <p :class="$style['additional-text']">
      This is a secure 128-bit SSL encrypted payment
    </p>
    <custom-fieldset legend="Cardholder Name">
      <div :class="$style['form-item']">
        <form-input
          name="name"
          v-model="paymentInfo.name"
          placeholder="Name as it appears on your card"
          rules="required|fullName"
          :validate-on-value-update="false"
          :maska="cardNameMask"
          @on-error="errorHandler"
        />
      </div>
    </custom-fieldset>
    <custom-fieldset legend="Card Number">
      <div :class="$style['form-item']">
        <form-input
          name="cardNumber"
          v-model="paymentInfo.cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          :validate-on-value-update="false"
          :maska="cardMask"
          rules="required|minLength:19"
          @on-error="errorHandler"
        />
      </div>
    </custom-fieldset>
    <div :class="$style['card-attrs']">
      <custom-fieldset legend="Expire Date">
        <div :class="$style['form-item']">
          <form-input
            name="expireDate"
            v-model="paymentInfo.expireDate"
            placeholder="MM / YY"
            :validate-on-value-update="false"
            :maska="cardMonthMask"
            rules="required|cardDate"
            @on-error="errorHandler"
          />
        </div>
      </custom-fieldset>
      <custom-fieldset legend="Security Code">
        <div :class="$style['form-item']">
          <form-input
            name="securityCode"
            v-model="paymentInfo.securityCode"
            :validate-on-value-update="false"
            :maska="cardCodeMask"
            rules="required|minLength:3"
            @on-error="errorHandler"
          />
        </div>
      </custom-fieldset>
    </div>
    <button type="submit" :class="$style['submit-btn']">Pay Securely</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CustomFieldset from '@/components/CustomFieldset.vue';
import FormInput from '@/components/FormInput.vue';
import {
  cardNameMask,
  cardMask,
  cardMonthMask,
  cardCodeMask
} from '@/constants/inputMasks';
import type { TPaymentInfo } from '@/types/shippingForm';
import { useShippingFormStore } from '@/stores/ShippingFormStore';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';

const { validate } = useForm();
const shippingStore = useShippingFormStore();
const cartStore = useCartStore();
const router = useRouter();

const paymentInfo = ref({
  name: '',
  cardNumber: '',
  expireDate: '',
  securityCode: ''
});

const errorHandler = (name: keyof TPaymentInfo, errorMessage: string) => {
  shippingStore.setPaymentInfoError(name, errorMessage);
};

const onSubmit = async () => {
  const isValid = await validate();
  if (isValid.valid) {
    shippingStore.setPaymentInfo({ ...paymentInfo.value });
    cartStore.setIsPaid(true);
    await router.push({ name: 'order-success' });
  }
};
</script>
<style module lang="scss">
@import '../../assets/styles/shippingForm.module.scss';
</style>
