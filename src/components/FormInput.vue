<template>
  <div>
    <input
      :class="{
        [$style['form-input']]: true,
        [$style['input-error']]: errorMessage
      }"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      v-model="value"
      v-maska="maska"
      @blur="onBlur"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span :class="$style['error-message']">{{ errorMessage }}</span>
  </div>
</template>
<script setup lang="ts">
import { useField } from 'vee-validate';
import { watch } from 'vue';
const props = withDefaults(
  defineProps<{
    name: string;
    modelValue: string;
    rules?: any;
    maska?: string;
    placeholder?: string;
    type?: string;
    validateOnValueUpdate?: boolean;
  }>(),
  {
    validateOnValueUpdate: true,
    type: 'text'
  }
);
const emit = defineEmits(['update:modelValue', 'onError', 'onBlur']);
const { value, errorMessage, validate } = useField(props.name, props.rules, {
  initialValue: props.modelValue,
  validateOnValueUpdate: props.validateOnValueUpdate
});

watch(errorMessage, () => {
  emit('onError', props.name, errorMessage.value);
});

const onBlur = () => {
  validate();
  emit('onBlur');
};
</script>

<style module lang="scss">
@import '../assets/styles/shippingForm.module.scss';
</style>
