<template>
  <div class="row banner">
    <template v-if="!reverse">
      <div class="col-3 bg-dark text-white lead d-flex align-items-center justify-content-center">
        <div class="mr-5">{{message}}</div>
      </div>
      <div class="col-9 p-0">
        <b-img class="h-100 w-100" :src="img" alt="Written Art"/>
      </div>
    </template>
    <template v-else>
      <div class="col-9 p-0">
        <b-img class="h-100 w-100" :src="img" alt="Written Art"/>
      </div>
      <div class="col-3 bg-dark text-white lead d-flex align-items-center justify-content-center">
        <div class="ml-4">{{message}}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['message', 'img', 'reverse']
}
</script>

<style lang="scss" scoped>
.banner {
  height: 30vh;
  background-color: black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
</style>
