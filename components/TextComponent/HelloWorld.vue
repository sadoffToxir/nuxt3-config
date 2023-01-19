<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
interface Props {
  msg: string
}

defineProps<Props>()
</script>
