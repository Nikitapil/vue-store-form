<template>
  <div
    :class="{
      [$style['products-sidebar']]: true,
      [$style.paid]: cartStore.isPaid
    }"
  >
    <div :class="$style.header">
      <h2 :class="$style.title">Order Summary</h2>
      <a href="#" :class="$style['edit-link']">edit order</a>
    </div>
    <div>
      <cart-product
        v-for="product in cartStore.cartProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div :class="$style.prices">
      <div :class="$style['price-item']">
        <p>Subtotal</p>
        <p>${{ cartStore.totalPrice }}</p>
      </div>
      <div :class="$style['price-item']">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div :class="$style['price-item']">
        <p>Taxes</p>
        <p>${{ cartStore.totalTax.toFixed(2) }}</p>
      </div>
    </div>
    <div :class="$style['price-total']">
      <p>Total</p>
      <p>${{ cartStore.totalPriceWithTax.toFixed(2) }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CartProduct from '@/components/CartProduct.vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();
</script>
<style module lang="scss">
.products-sidebar {
  min-height: 100%;
  background: #e6e9f0;
  width: 300px;
  padding: 20px 8px;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.title {
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #5a1094;
}

.edit-link {
  font-size: 12px;
  line-height: 14px;
  color: #565656;
}

.price-item,
.price-total {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 11px;
  color: #777879;
  margin-bottom: 12px;
}

.price-total {
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  color: #431c5d;
  padding-top: 12px;
}

.prices {
  margin-top: 12px;
  border-bottom: 1px solid #979797;
}

.paid {
  opacity: 0.6;
}
</style>
