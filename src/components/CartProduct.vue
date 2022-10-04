<template>
  <div :class="$style['cart-product']">
    <div>
      <img :src="product.picture" :alt="product.name" />
    </div>
    <div :class="$style['description-container']">
      <h3 :class="$style.title">{{ product.name }}</h3>
      <p :class="$style.description">{{ product.attributes }}</p>
      <p :class="$style.description">Quantity: {{ product.quantity }}</p>
    </div>
    <p :class="$style.cost">${{ product.cost }}</p>
  </div>
</template>
<script setup lang="ts">
import type { TProduct } from '@/types/product';
defineProps<{ product: TProduct }>();
</script>
<style lang="scss" module>
.cart-product {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #979797;
}
.title {
  font-size: 12px;
  line-height: 11px;
  color: #777879;
  margin-bottom: 8px;
}

.description {
  font-size: 10px;
  line-height: 12px;
  color: #2b2525;
}

.description-container {
  flex: 1 1 auto;
}

.cost {
  font-size: 12px;
  line-height: 11px;
  text-align: right;
  color: #777879;
}
</style>
