<script setup>
import {categoryStore} from "@/stores/categoryStore";
import Modal from "./Modal.vue";
import {ref} from "vue";
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { reactive, computed } from "vue";

let storedCategories = categoryStore()
let newPost = reactive({title: '', content: '', postCategory: null, email: '', password: { password: '', confirm: ''}})
let emit = defineEmits(['submitPost'])

const rules = computed(() => {
  return {title: { required }, email: { required }}
})

const v$ = useVuelidate(rules, newPost)

defineProps({
  users: Object
})

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    showModal.value = true
    setTimeout(() => {
      newPost.value.id = Math.floor(Math.random() * 500);
      emit('submitPost', newPost.value)
      showModal.value = false
      newPost.value = {title: '', content: '', postCategory: null, email: '', password: { password: '', confirm: ''}}
    }, 1500)
  } else {
    console.log('errors', v$.value.error)
  }
}

let showModal = ref(false)
</script>

<template>
  <div class="w3-metro-white uppercase mb-4 rounded-t-lg">
    <slot name="heading">
      <h3 class="w3-metro-yellow p-2 rounded-t-lg">Add Post</h3>
    </slot>

    <form @submit.prevent>
      <div class="blockContent p-4">
        <div class="formGroup mb-2 inline-block w-full mb-4">
          <input class="w-full block bg-gray-100 border-gray-200 p-2 rounded-lg focus:border-gray-500 focus:outline-0"
                 v-model="newPost.title" type="text"
                 placeholder="Title"
          >

          <div v-if="v$.title.$errors" class="mt-1">
            <span
              v-for="error in v$.title.$errors" :key="error.$uid" class="text-red-500 font-semibold text-sm">{{ error.$message }}</span>
          </div>
        </div>
        <div class="formGroup mb-2 inline-block w-full mb-4">
          <input class="w-full block bg-gray-100 border-gray-200 p-2 rounded-lg focus:border-gray-500 focus:outline-0"
                 v-model="newPost.email" type="email"
                 placeholder="Email..."
          >
          <div v-if="v$.email.$errors" class="mt-1">
            <span
                v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-500 font-semibold text-sm">{{ error.$message }}</span>
          </div>
        </div>
        <div class="formGroup mb-2 inline-block w-full mb-4">
          <input class="w-full block bg-gray-100 border-gray-200 p-2 rounded-lg focus:border-gray-500 focus:outline-0"
                 v-model="newPost.password.password" type="password"
                 placeholder="Password..."
          >
        </div>
        <div class="formGroup mb-2 inline-block w-full mb-4">
          <input class="w-full block bg-gray-100 border-gray-200 p-2 rounded-lg focus:border-gray-500 focus:outline-0"
                 v-model="newPost.password.confirm" type="password"
                 placeholder="Confirm Password..."
          >
        </div>
        <div class="formGroup mb-2 inline-block w-full mb-4">
          <textarea
              class="w-full block bg-gray-100 border-gray-200 p-2 rounded-lg focus:border-gray-500 focus:outline-0"
              v-model="newPost.content"
              placeholder="content"
          ></textarea>
        </div>
        <div class="formGroup mb-2 inline-block w-full mb-4">
          <select
              class="w-full rounded-lg p-2"
              v-model="newPost.postCategory"
              name="category"
          >

            <option value="" selected>Select</option>
            <option
                v-for="category in storedCategories.categories"
                :key="category.id"
                :value="category.id"
            >{{ category.name }}
            </option>
          </select>
        </div>
        <div class="formGroup mb-2 inline-block w-full mb-4">
          <select
              class="w-full rounded-lg p-2"
              v-model="newPost.user"
              name="user"
          >

            <option value="" selected>Select</option>
            <option
                v-for="user in users"
                :key="user.id"
                :value="user.id"
            >{{ user.name }}
            </option>
          </select>
        </div>

      </div>
<!--      <div-->
<!--          v-if="v$.$errors"-->
<!--          class="formGroup">-->
<!--        <p v-for="error in v$.$errors" :key="error.$uid">{{ error.$property}} - {{ error.$message}}</p>-->

<!--      </div>-->
      <div class="formGroup">
        <button
            class="block w3-metro-red w-full rounded-b-lg p-2 hover:opacity-75 active:opacity-100 uppercase"
            @click="submitForm">Submit
        </button>
      </div>
    </form>

  </div>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <p>Submitting form</p>

        <form class="mt-6">
          <div class="flex gap-2">
            Submitting...
          </div>
        </form>
      </template>
      <!--    <template #footer>Override footer</template>-->
    </Modal>
  </Teleport>
</template>