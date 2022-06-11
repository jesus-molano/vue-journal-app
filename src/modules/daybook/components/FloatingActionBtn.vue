<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  }
}
</script>

<template>
  <button class="btn btn-primary d-flex align-items-center justify-content-center">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<style lang="scss" scoped>
  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>
