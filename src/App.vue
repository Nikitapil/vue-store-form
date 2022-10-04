<template>
  <app-header />
  <main class="container main-container">
    <router-view />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: { AppHeader }
};
</script>
