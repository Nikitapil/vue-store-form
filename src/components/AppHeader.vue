<template>
  <header :class="$style['header-container']">
    <div class="container" :class="$style.header">
      <h1 :class="$style.title">Shopping app</h1>
      <router-link @click="reset" to="/shipping" :class="$style['cart-link']">
        <p>Cart</p>
        <div :class="$style['cart-icon']">
          <img :src="cartIcon" alt="cart" />
          <div
            v-if="cartStore.cartProducts.length && !cartStore.isPaid"
            :class="$style['cart-counter']"
            data-testid="cart-counter"
          >
            {{ cartStore.cartProducts.length }}
          </div>
        </div>
      </router-link>
    </div>
  </header>
</template>
<script setup lang="ts">
import cartIcon from '../assets/icons/cartIcon.svg';
import { useCartStore } from '@/stores/cartStore';
import { useShippingFormStore } from '@/stores/ShippingFormStore';
const cartStore = useCartStore();
const shippingFormStore = useShippingFormStore();
const reset = () => {
  cartStore.$reset();
  shippingFormStore.$reset();
};
</script>
<style lang="scss" module>
.header-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  box-shadow: 2px 0 5px #bb0cb2;
  background: #ffffff;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.cart-link {
  text-decoration: none;
  display: flex;
  gap: 10px;
  font-weight: 300;
  font-size: 15px;
  line-height: 13px;
  color: #c90ea5;
}

.title {
  color: #5a1094;
  font-size: 22px;
}

.cart-icon {
  position: relative;
}

.cart-counter {
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #ff1876;
  font-size: 11px;
  position: absolute;
  border-radius: 50%;
  top: -30%;
  right: -30%;
}
</style>
