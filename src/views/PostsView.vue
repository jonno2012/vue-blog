<script setup>
import Layout from "@/components/Layout.vue";
import AddPostForm from "@/components/AddPostForm.vue";
import {categoryStore} from "@/stores/categoryStore";
import {userStore} from "@/stores/userStore";
import {getStorage, storeItem, removeItem} from "@/composables/localStorage";
import {ref, watch} from "vue";

let storedCategories = categoryStore();
let storedUsers = userStore()

let posts = ref([])

posts.value = getStorage('posts')
let newPost = ref({})

watch(newPost, (changed) => {
  posts.value = storeItem('posts', newPost.value)
})

function deletePost(postId) {
  // console.log('postId', postId)
  posts.value = removeItem('posts', postId)
}
</script>

<template>

    <Layout>
      <template #sidebarFooter>

          <AddPostForm
              :users="storedUsers.users"
              @submitPost="submitted => newPost = submitted"/>

      </template>
      <template #heading><h2>Posts</h2></template>

      <template #content>

          <div v-motion-fade v-if="posts.length" class="cardHolder grid block post cards md:px-[2vw] mb-10">
            <div
                v-for="post in posts" :key="post.id"
                class="postCard w3-metro-white rounded-lg"
            >
              <a href="#">
              <h4
                  :class="storedCategories.getThemeClass(post.postCategory)"
                  class="rounded-t-lg px-4 py-2 uppercase"
              >{{ post.title }}</h4>
              <div class="blockContent px-6 py-4 relative">
                <p class="h-[75px]">{{ post.content.substring(0, 60) + '...' }}</p>
                <div class="cardFooter grid-rows-2 grid content-end h-[48px] mt-[3vw]">
                  <span class="user text-sm font-semibold">{{ storedUsers.getUserName(post.user) }}</span>
                  <span class="category text-sm font-semibold">{{ storedCategories.getCategoryName(post.postCategory) }}</span>
                </div>
                <button
                    @click="deletePost(post.id)"
                    class="absolute
                    right-2.5 bottom-2.5 w3-metro-red hover:bg-white hover:text-red-700
                    transition duration-200 rounded-lg px-2 py-1">Delete</button>
              </div>
              </a>
            </div>
          </div>
            <div v-else class="cardHolder grid block post cards md:px-[2vw] mb-10">
              <div class="postCard w3-metro-white rounded-lg blockContent px-6 py-4">
                <p>No posts to display</p>
              </div>
            </div>

      </template>

    </Layout>


</template>
