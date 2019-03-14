<template>
  <div class="container-fluid p-0">
    <div id="banner--1">
      <b-img class="h-100 w-100" src="../assets/splash-stock.jpg" alt="CalSite"/>
      <div id="splashText">
        <h1>CalSite</h1>
        <p class="lead mt-3">A place to share what it means to be me,<br>
        and the things that come out of that
        </p>
      </div>
      <div v-if="!isMobileDevice()" @click="$emit('arrow-click')" style="position: absolute; bottom: 1rem; left: 50%"><fa-icon icon="angle-down" size="3x"/></div>
    </div>
    <div v-for="banner in banners" :key="banner.id" :id="'banner-' + banner.id">
      <banner @arrow-click="onScroll" :message="banner.message" :img="banner.img" :reverse="banner.reverse" :down="banner.down"></banner>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import $ from 'jquery'

export default {
  name: 'home',

  // Life-cycle hooks
  created: function () {
    window.scrollTo(0, 0)

    if (!this.isMobileDevice()) {
      $('body').css('overflow', 'hidden')
    } else {
      this.banners.forEach(banner => {
        banner.down = false
      })
    }

    this.$on('arrow-click', this.onScroll)
    $('body').on('mousewheel', this.onScroll)
    // $('body').on('touchmove', this.test)
    $('body').keydown(this.onScroll)
  },
  destroyed: function () {
    $('body').css('overflow', 'visible')
    $('body').off('mousewheel')
    // $('body').off('touchmove')
    $('body').off('keydown')
  },

  components: {
    Banner
  },
  data: function () {
    return {
      prevYTouch: undefined,
      bannerLocation: -1,
      banners: [
        {
          id: 0,
          message: 'Writing',
          img: require('../assets/writing-stock.jpeg'),
          reverse: false,
          down: true
        },
        {
          id: 1,
          message: 'Drawing',
          img: require('../assets/drawing-stock.jpeg'),
          reverse: true,
          down: true
        },
        {
          id: 2,
          message: 'Music',
          img: require('../assets/music-stock.jpg'),
          reverse: false,
          down: false
        }
      ]
    }
  },
  methods: {
    onScroll: function (e) {
      // console.log(e)

      let elem
      if (e && (e.originalEvent.wheelDelta > 0 || e.key === 'ArrowUp')) {
        if (this.bannerLocation >= 0) {
          this.bannerLocation--
        }
        elem = $(`#banner-${this.bannerLocation}`)
        window.scroll({
          top: elem.offset().top - 56,
          behavior: 'smooth'
        })
      } else if (!e || e.originalEvent.wheelDelta < 0 || e.key === 'ArrowDown' || e.key === ' ') {
        if (this.bannerLocation < this.banners.length - 1) {
          this.bannerLocation++
        }
        elem = $(`#banner-${this.bannerLocation}`)
        window.scroll({
          top: elem.offset().top - 56,
          behavior: 'smooth'
        })
      }
      // console.log(this.bannerLocation)
    },
    isMobileDevice () {
      return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)
    },
    test: function (e) {
      console.log('touchmoved at ' + e.originalEvent.touches[0].clientY)
    }
  }
}
</script>

<style lang="scss" scoped>
#banner--1 {
  height: calc(100vh - 56px);
  position: relative;
}
#splashText {
  position: absolute;
  top: 10%;
  left: 55%;
  max-width: 100%;
  height: 100%;
}

// .card-img {
//   border-radius: 0%;
// }
</style>
