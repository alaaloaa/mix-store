<template>
  <div id="home">
    <Loader :loader="loader" />
    <div v-show="!loader" class="mainContainer">
      <div id="slider" class="pa-0">
        <VueSlickCarousel
          ref="c1"
          :asNavFor="c2"
          :focusOnSelect="true"
          class="parent-slider"
          :arrows="false"
          fade
        >
          <div v-for="(slide, index) in slides" :key="index">
            <div class="bg" :style="backgroundImage(slide.image)"></div>
            <div class="text">
              <span>{{ slide.text.prag }}</span>
              <h1 class="mt-2">{{ slide.text.head }}</h1>

              <!-- <nuxtLink :to="{ route: '/products', query: {category: slide.route} }"> -->
              <v-btn
                class="mt-4 v-animate-css v-animate-css-slideInUp"
                outlined
                small
                rounded
                @click="changeRoute(slide.route)"
                color="mainColor"
              >
                {{ slide.route }}
              </v-btn>
              <!-- </nuxtLink> -->
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
              <div v-for="(slide, index) in slides" :key="index">
                <div class="bg" :style="backgroundImage(slide.image)"></div>
              </div>
            </VueSlickCarousel>
          </center>
        </div>
      </div>
      <Categries />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Categries from './parts/home/categories'
import Loader from '~/components/loader'

export default {
  name: 'MyComponent',
  components: {
    VueSlickCarousel,
    Categries,
    Loader,
  },
  data() {
    return {
      c1: this.$refs.c1,
      c2: this.$refs.c2,
      loader: true,
      slides: [
        {
          image:
            'https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp',
          route: 'men',
          text: {
            head: 'Jackets & Coats',
            prag: 'Men Collections 2021',
          },
        },
        {
          image:
            'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp',
          route: 'women',
          text: {
            head: 'New Season',
            prag: 'Women Collection 2021',
          },
        },
        {
          image:
            'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp',
          route: 'new',
          text: {
            head: 'New arrivals',
            prag: 'Men New Season',
          },
        },
      ],
    }
  },
  methods: {
    backgroundImage(image) {
      return {
        backgroundImage: `url("${image}")`,
      }
    },
    changeRoute(route) {
      this.$router.push({ path: '/products', query: { category: route } })
      console.log(route)
    },
  },
  mounted() {
    this.loader = false
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
  },
  watchQuery: ['category'],
}
</script>
