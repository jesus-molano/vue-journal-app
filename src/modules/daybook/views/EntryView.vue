<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    FloatingActionBtn: defineAsyncComponent(() => import('@/modules/daybook/components/FloatingActionBtn'))
  }
}
</script>

<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3 ">July</span>
      <span class="mx-2 fs-4 fw-light">2022, Monday</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary mx-2">
        Upload Image
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What happened today?"></textarea>
  </div>
  <FloatingActionBtn icon="fa-save"/>
  <img
    src="https://images.pexels.com/photos/227517/pexels-photo-227517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="entry picture"
    class="img-thumbnail"
  >
</template>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  resize: none;
  &:focus {
    outline: none
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgb($color: #333, $alpha: 0.2)
}
</style>
