<template>
  <app-header />
  <main class="container main-container">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>

<style scoped></style>
