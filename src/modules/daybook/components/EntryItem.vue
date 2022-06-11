<script>
export default {
}
</script>

<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 1}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">July</span>
      <span class="mx-2 fw-light">2022, Monday</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur autem doloribus dolorum eligendi facilis ipsa laudantium, neque reprehenderit veniam. Accusantium architecto atque eligendi illum, incidunt ipsum optio unde voluptates.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color:grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description{
    font-size: 12px;
  }
}
</style>
