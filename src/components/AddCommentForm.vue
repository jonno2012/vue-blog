<script setup>

</script>
<template>
  <slot name="heading" />
  <form @submit.prevent>
    <input type="text">
  </form>
</template>