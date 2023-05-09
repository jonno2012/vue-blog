<script setup>
defineProps({
  items: Array
})
</script>


<template>
<div
    v-if="items.length"
    class="uppercase mb-4"
>
  <h3 class="font-semibold w3-metro-green p-2 rounded-t-lg">Categories</h3>
  <div class="blockContent p-4 w3-metro-white">
    <a
        class="grid justify-center md:block hover:text-blue-500 transition duration-200"
        v-for="item in items"
        :key="item.id"
        href="#">{{ item.name }}
    </a>
  </div>

</div>
</template>