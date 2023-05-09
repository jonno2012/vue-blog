<script setup>
import Layout from "@/components/Layout.vue";
import AddUserForm from "@/components/AddUserForm.vue";
</script>

<template>
  <Layout>
    <template #heading><h2>Users</h2></template>
    <template #sidebarFooter>
      <AddUserForm/>
    </template>
  </Layout>
</template>
