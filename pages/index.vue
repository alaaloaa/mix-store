<template>
  <div id="slider">
    <div id="home">
      <VueSlickCarousel
        ref="c1"
        :asNavFor="c2"
        :focusOnSelect="true"
        class="parent-slider"
        fade
      >
        <div v-for="image in images" :key="image">
          <div class="bg" :style="backgroundImage(image)"></div>
          <div class="text">
            <span>Men Collections</span>
            <h1 class="mt-2">Jackets & Coats</h1>

            <nuxtLink :to="{ name: 'products' }">
              <v-btn
                class="mt-4 v-animate-css v-animate-css-slideInUp"
                outlined
                small
                rounded
                color="mainColor"
              >
                Shop Now
              </v-btn>
            </nuxtLink>
          </div>
        </div>
      </VueSlickCarousel>
      <div class="small-slider">
        <center>
          <VueSlickCarousel
            ref="c2"
            :asNavFor="c1"
            :slidesToShow="3"
            :focusOnSelect="true"
            :arrows="false"
          >
            <div v-for="image in images" :key="image">
              <div class="bg" :style="backgroundImage(image)"></div>
            </div>
          </VueSlickCarousel>
        </center>
      </div>
    </div>
    <Categries />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Categries from './parts/home/categries'

export default {
  name: 'MyComponent',
  components: {
    VueSlickCarousel,
    Categries,
  },
  data() {
    return {
      c1: undefined,
      c2: undefined,
      images: [
        'https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp',
        'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp',
        'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp',
      ],
    }
  },
  methods: {
    backgroundImage(image) {
      return {
        backgroundImage: `url("${image}")`,
      }
    },
  },
  mounted() {
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
  },
}
</script>
