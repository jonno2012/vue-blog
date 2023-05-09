<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <nav class="m-0 p-0 flex items-center justify-between uppercase" style="height: 100%;">
      <RouterLink to="/" class="hover:text-yellow-400 transition duration-200">Home</RouterLink>
      <RouterLink to="/users" class="hover:text-yellow-400 transition duration-200">users</RouterLink>
      <RouterLink to="/posts" class="hover:text-yellow-400 transition duration-200">Posts</RouterLink>
      <RouterLink to="/comments" class="hover:text-yellow-400 transition duration-200">Comments</RouterLink>
    </nav>
</template>

<style scoped>

</style>