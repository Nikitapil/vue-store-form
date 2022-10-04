<template>
  <form
    @submit.prevent="onSubmit"
    :class="$style['form-container']"
    @input="inputHandler"
  >
    <h2 :class="$style.title">Shipping Info</h2>
    <div :class="$style['form-item']">
      <custom-fieldset legend="Recipient">
        <div :class="$style['form-item']">
          <form-input
            name="name"
            v-model="shippingInfo.name"
            placeholder="Full Name"
            rules="required"
            @on-error="errorHandler"
          />
        </div>
        <div :class="$style['phone-input']">
          <form-input
            name="phone"
            v-model="shippingInfo.phone"
            placeholder="Daytime Phone"
            rules="required|minLength:18"
            :maska="phoneMask"
            @on-error="errorHandler"
          />
          <p>For delivery questions only</p>
        </div>
      </custom-fieldset>
    </div>
    <custom-fieldset legend="Address">
      <div :class="$style['form-item']">
        <form-input
          name="street"
          v-model="shippingInfo.street"
          placeholder="Street Address"
          rules="required"
          @on-error="errorHandler"
        />
      </div>
      <div :class="$style['form-item']">
        <form-input
          name="city"
          v-model="shippingInfo.city"
          placeholder="City"
          rules="required"
          @on-error="errorHandler"
        />
      </div>
      <div :class="$style['country-item']">
        <country-input
          v-model="shippingInfo.country"
          @on-error="errorHandler"
        />
        <form-input
          name="zip"
          v-model="shippingInfo.zip"
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
import { phoneMask } from '@/constants/inputMasks';
import { onBeforeMount, ref } from 'vue';
import FormInput from '@/components/FormInput.vue';
import { useShippingFormStore } from '@/stores/ShippingFormStore';
import type { TShippingInfo } from '@/types/shippingForm';
import CountryInput from '@/components/CountryInput.vue';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';

const shippingInfo = ref({
  name: '',
  phone: '',
  street: '',
  city: '',
  country: '',
  zip: ''
});
const shippingStore = useShippingFormStore();
const { validate } = useForm();
const router = useRouter();

const errorHandler = (name: keyof TShippingInfo, errorMessage: string) => {
  shippingStore.setShippingInfoError(name, errorMessage);
};

const onSubmit = async () => {
  const isValid = await validate();
  shippingStore.setIsShippingInfoValidated(isValid.valid);
  if (isValid.valid) {
    shippingStore.setShippingInfo({ ...shippingInfo.value });
    await router.push({ name: 'billing-info' });
  }
};

const inputHandler = () => {
  shippingStore.setIsShippingInfoValidated(false);
};
onBeforeMount(() => {
  shippingInfo.value = { ...shippingStore.shippingInfo };
});
</script>
<style module lang="scss">
@import '../../assets/styles/shippingForm.module.scss';
</style>
