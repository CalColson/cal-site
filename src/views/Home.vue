<template>
  <div class="container-fluid">
    <div v-for="banner in banners" :key="banner.id">
      <div class="row"><div class="col spacer"></div></div>
      <banner :message="banner.message" :img="banner.img" :reverse="banner.reverse"></banner>
    </div>
    <div class="row"><div class="col spacer"></div></div>
  </div>
</template>

<script>
import Banner from '../components/Banner'

export default {
  name: 'home',
  components: {
    Banner
  },
  data: function () {
    return {
      banners: [
        {
          id: 0,
          message: 'Writing',
          img: require('../assets/writing-stock-edit.jpeg'),
          reverse: false
        },
        {
          id: 1,
          message: 'Drawing',
          img: require('../assets/drawing-stock-edit.jpeg'),
          reverse: true
        }
        // {
        //   id: 2,
        //   message: 'Writing',
        //   img: require('../assets/writing-stock-edit.jpeg'),
        //   reverse: false
        // },
        // {
        //   id: 3,
        //   message: 'Drawing',
        //   img: require('../assets/drawing-stock-edit.jpeg'),
        //   reverse: true
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.spacer {
  height: 7vh;
}
</style>
