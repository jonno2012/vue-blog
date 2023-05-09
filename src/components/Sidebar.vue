<script setup>
import SideContent from "@/components/SideContent.vue";
import {categoryStore} from "@/stores/categoryStore";

let storedCategories = categoryStore();
</script>

<template>
<SideContent :items="storedCategories.categories"/>
</template>