<template>
  <div :class="$style['ordered-container']">
    <h2 :class="$style['ordered-title']">Thank you for your order!</h2>
    <p :class="$style['ordered-number']">Order number is: {{ orderNumber }}</p>
    <p :class="$style['ordered-text']">
      Your will receive an email confirmation shortly to
      <span :class="$style['ordered-email']">{{
        shippingFormStore.billingInfo.email
      }}</span>
    </p>
    <p :class="$style['ordered-text']">
      Estimated delivery Day is
      <span :class="$style['ordered-date']">{{ estimatedDate }}</span>
    </p>
    <button :class="$style['ordered-print']" @click="print">
      Print Recipe
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useShippingFormStore } from '@/stores/ShippingFormStore';

const shippingFormStore = useShippingFormStore();

const orderNumber = computed(() => {
  return Math.floor(Math.random() * 100000000 + 1);
});

const estimatedDate = computed(() => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 2);
  return currentDate.toLocaleDateString('ru-RU');
});

const print = () => {
  window.print();
};
</script>
<style module lang="scss">
.ordered-container {
  padding: 60px 40px;
}

.ordered-title {
  font-size: 26px;
  line-height: 31px;
  color: #5a1094;
  margin-bottom: 24px;
}

.ordered-number {
  font-size: 16px;
  line-height: 19px;
  color: #2b2525;
  font-weight: 700;
  margin-bottom: 10px;
}

.ordered-text {
  font-size: 16px;
  line-height: 18px;
  color: #2b2525;
  margin-bottom: 25px;
}

.ordered-email {
  color: #5a1094;
}

.ordered-date {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #2b2525;
}

.ordered-print {
  background: none;
  border: none;
  font-size: 13px;
  line-height: 13px;
  font-weight: 700;
  color: #5a1094;
  text-decoration: underline;
}
</style>
