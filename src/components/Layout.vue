<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <div class="w3-metro-light-blue">
    <div class="grid content container mx-auto p-8">
      <div id="sidebar" class="order-1 md:order-none">
        <Sidebar/>
        <slot name="sidebarFooter"></slot>
      </div>
      <main>
        <slot name="content"></slot>
      </main>
    </div>
  </div>

</template>