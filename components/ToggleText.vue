<template>
  <div>
    <h2 :style="!showText && 'visibility: hidden'" data-test="togglingText">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsam?
    </h2>
    <v-btn @click="toggleText" data-test="toggle-btn">toggle text</v-btn>
  </div>
</template>

<script setup>
const showText = ref(false);
const toggleText = () => {
  showText.value = !showText.value;
};
</script>
