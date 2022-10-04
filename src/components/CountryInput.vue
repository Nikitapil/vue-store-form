<template>
  <div>
    <form-input
      name="country"
      v-model="country"
      rules="required"
      placeholder="Country"
      @on-error="errorHandler"
      @on-blur="hideDropDown"
    />
    <div :class="$style['country-dropdown']" v-if="isShowDropDown">
      <ul>
        <li
          v-for="val in sortedCountryList"
          :key="val"
          @click="setCountry(val)"
        >
          {{ val }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from '@/components/FormInput.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { CountryService } from '@/services/CountryService';
const props = defineProps<{ modelValue: string }>();
const emit = defineEmits(['update:modelValue', 'onError']);
const country = ref('');
const fullCountryList = ref<string[]>([]);
const isShowDropDown = ref(false);

const sortedCountryList = computed(() => {
  return fullCountryList.value.filter((item) =>
    item.toLowerCase().includes(country.value.toLowerCase())
  );
});

const showDropDown = () => {
  if (country.value.length && sortedCountryList.value.length) {
    isShowDropDown.value = true;
  } else {
    isShowDropDown.value = false;
  }
};

const hideDropDown = () => {
  setTimeout(() => {
    isShowDropDown.value = false;
  }, 100);
};

watch(country, () => {
  showDropDown();
  emit('update:modelValue', country.value);
});

watch(props, () => {
  country.value = props.modelValue;
});

const errorHandler = (name: string, message: string) => {
  emit('onError', name, message);
};

const setCountry = (value: string) => {
  country.value = value;
  hideDropDown();
};

onMounted(async () => {
  country.value = props.modelValue;
  fullCountryList.value = await CountryService.getCountries();
});
</script>
<style module lang="scss">
@import '../assets/styles/shippingForm.module.scss';
</style>
