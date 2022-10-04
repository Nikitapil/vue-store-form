<template>
  <div :class="$style['order-page']">
    <section :class="$style['order-content-page']">
      <form-breadcrumbs v-if="!cartStore.isPaid" />
      <router-view />
    </section>
    <products-sidebar />
  </div>
</template>
<script setup lang="ts">
import ProductsSidebar from '@/components/ProductsSidebar.vue';
import FormBreadcrumbs from '@/components/FormBreadcrumbs.vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const router = useRouter();
const cartStore = useCartStore();

onMounted(() => {
  cartStore.setIsPaid(false);
  router.push({ name: 'shipping-info' });
});
</script>
<style module lang="scss">
.order-content-page {
  flex: 1 1 auto;
  padding: 20px 30px;
}

.order-page {
  display: flex;
}
</style>
