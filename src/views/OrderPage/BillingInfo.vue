<template>
  <form
    @submit.prevent="onSubmit"
    :class="$style['form-container']"
    @input="inputHandler"
  >
    <div :class="[$style.title, $style['title-container']]">
      <h2>Billing Information</h2>
      <button
        type="button"
        :class="$style['copy-button']"
        @click="copyFromShipping"
      >
        Same as shipping
      </button>
    </div>
    <div :class="$style['form-item']">
      <custom-fieldset legend="Billing Contact">
        <div :class="$style['form-item']">
          <form-input
            name="name"
            v-model="billingInfo.name"
            placeholder="Full Name"
            rules="required"
            @on-error="errorHandler"
          />
        </div>
        <div :class="$style['form-item']">
          <form-input
            name="email"
            type="email"
            v-model="billingInfo.email"
            placeholder="Email Address"
            rules="required|email"
            @on-error="errorHandler"
          />
        </div>
      </custom-fieldset>
    </div>
    <custom-fieldset legend="Billing Address">
      <div :class="$style['form-item']">
        <form-input
          name="street"
          v-model="billingInfo.street"
          placeholder="Street Address"
          rules="required"
          @on-error="errorHandler"
        />
      </div>
      <div :class="$style['form-item']">
        <form-input
          name="city"
          v-model="billingInfo.city"
          placeholder="City"
          rules="required"
          @on-error="errorHandler"
        />
      </div>
      <div :class="$style['country-item']">
        <country-input v-model="billingInfo.country" @on-error="errorHandler" />
        <form-input
          name="zip"
          v-model="billingInfo.zip"
          placeholder="ZIP"
          rules="required|numeric"
          @on-error="errorHandler"
        />
      </div>
    </custom-fieldset>
    <button type="submit" :class="$style['submit-btn']">Continue</button>
  </form>
</template>
<script setup lang="ts">
import CustomFieldset from '@/components/CustomFieldset.vue';
import FormInput from '@/components/FormInput.vue';
import CountryInput from '@/components/CountryInput.vue';
import { onBeforeMount, ref } from 'vue';
import type { TBillingInfo } from '@/types/shippingForm';
import { useShippingFormStore } from '@/stores/ShippingFormStore';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';

const shippingStore = useShippingFormStore();
const { validate } = useForm();
const router = useRouter();
const billingInfo = ref({
  name: '',
  email: '',
  street: '',
  city: '',
  country: '',
  zip: ''
});

const copyFromShipping = () => {
  billingInfo.value.name = shippingStore.shippingInfo.name;
  billingInfo.value.street = shippingStore.shippingInfo.street;
  billingInfo.value.city = shippingStore.shippingInfo.city;
  billingInfo.value.country = shippingStore.shippingInfo.country;
  billingInfo.value.zip = shippingStore.shippingInfo.zip;
};

const errorHandler = (name: keyof TBillingInfo, errorMessage: string) => {
  shippingStore.setBillingInfoError(name, errorMessage);
};

const onSubmit = async () => {
  const isValid = await validate();
  shippingStore.setIsBillingInfoValidated(isValid.valid);
  if (isValid.valid) {
    shippingStore.setBillingInfo({ ...billingInfo.value });
    await router.push({ name: 'payment-info' });
  }
};

onBeforeMount(() => {
  billingInfo.value = { ...shippingStore.billingInfo };
});

const inputHandler = () => {
  shippingStore.setIsBillingInfoValidated(false);
};
</script>
<style module lang="scss">
@import '../../assets/styles/shippingForm.module.scss';
</style>
