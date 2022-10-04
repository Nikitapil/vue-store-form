<template>
  <div>
    <router-link
      to="/shipping"
      :class="$style.link"
      :active-class="$style.active"
      exact
      >Shipping</router-link
    >
    <router-link
      to="/billing"
      :class="{ [$style.link]: true, [$style.disabled]: isBillingDisabled }"
      :active-class="$style.active"
      exact
      @click.prevent
      >Billing</router-link
    >
    <router-link
      to="/payment"
      :class="{ [$style.link]: true, [$style.disabled]: isPaymentDisabled }"
      :active-class="$style.active"
      exact
      >Payment</router-link
    >
  </div>
</template>
<script setup lang="ts">
import { useShippingFormStore } from '@/stores/ShippingFormStore';
import { computed } from 'vue';
const shippingFormStore = useShippingFormStore();
const isBillingDisabled = computed(() => {
  return !(
    shippingFormStore.isShippingInfoValidated &&
    shippingFormStore.isShippingInfoValid
  );
});

const isPaymentDisabled = computed(() => {
  return (
    isBillingDisabled.value ||
    !(
      shippingFormStore.isBillingInfoValid &&
      shippingFormStore.isBillingInfoValidated
    )
  );
});
</script>
<style lang="scss" module>
.link {
  position: relative;
  font-size: 12px;
  line-height: 14px;
  color: #979797;
  text-decoration: none;

  &:not(:last-child) {
    padding-right: 30px;
    margin-right: 15px;

    &:before {
      content: '';
      position: absolute;
      top: 2px;
      right: 0;
      width: 14px;
      height: 1px;
      background: #979797;
      transform: rotate(45deg);
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      right: 0;
      width: 14px;
      height: 1px;
      background: #979797;
      transform: rotate(-45deg);
    }
  }
}

.active {
  color: #5a1094;
}

.disabled {
  pointer-events: none;
}
</style>
