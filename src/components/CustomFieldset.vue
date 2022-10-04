<template>
  <fieldset :class="$style.fieldset">
    <legend :class="$style.legend">{{ legend }}</legend>
    <slot />
  </fieldset>
</template>

<script setup lang="ts">
defineProps<{ legend: string }>();
</script>
<style lang="scss" module>
.fieldset {
  border: none;
}
.legend {
  font-size: 16px;
  line-height: 18px;
  color: #5a1094;
  margin-bottom: 6px;
}
</style>
