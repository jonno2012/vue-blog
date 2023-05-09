<script setup>
defineProps({
  show: Boolean
});
</script>
<template>
  <Transition>
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div>
          Loading...
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-from {
  scale: 125;
}
.v-leave-to {
  scale: 125;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .4);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: .8rem;
}

.modal-footer button {
  background: #ddd;
  padding: .25rem .5rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background: #c8c8c8;
}
</style>