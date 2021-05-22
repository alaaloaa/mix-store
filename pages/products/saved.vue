<template>
  <v-container fluid id="job-view" class="">
    <v-row>
      <v-col id="slider" class="col-xl-8 col-md-7 col-12">
        <v-row no-gutters>
          <v-col class="col-2">
            <div class="small-slider">
              <VueSlickCarousel
                ref="c2"
                :asNavFor="c1"
                :slidesToShow="5"
                :focusOnSelect="true"
                :arrows="false"
                :verticalSwiping="true"
              >
                <div class="mainBg" v-for="image in images" :key="image">
                  <div class="bg" :style="backgroundImage(image)"></div>
                </div>
              </VueSlickCarousel></div
          ></v-col>
          <v-col class="col-10">
            <VueSlickCarousel
              ref="c1"
              :asNavFor="c2"
              :focusOnSelect="true"
              class="parent-slider"
              fade
            >
              <div v-for="image in images" :key="image">
                <div class="bg" :style="backgroundImage(image)"></div>
              </div>
            </VueSlickCarousel>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        id="job-view"
        class="right col-xl-4 col-md-5 col-12 text-md-left text-center"
      >
        <div class="text">
          <h4>Lightweight Jacket</h4>
          <p>$58.79</p>
          <p>
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
            ligula. Mauris consequat ornare feugiat. Nulla eget sem vitae eros
            pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare
            feugiat. Nulla eget sem vitae eros pharetra viverra. Nam
          </p>
        </div>
        <v-form class="">
          <v-row>
            <v-col class="col-sm-6 col-12">
              <v-select
                v-model="item.quantity"
                placeholder="siza"
                outlined
                dense
              ></v-select>
            </v-col>
            <v-col class="col-sm-6 col-12">
              <v-select
                v-model="item.quantity"
                placeholder="Color"
                outlined
                dense
              ></v-select>
            </v-col>
            <v-col class="col-sm-6 col-12 mt-n6">
              <div class="quantity-buttons">
                <v-btn-toggle class="mb-6">
                  <v-btn
                    class="py-5 px-0"
                    :disabled="item.quantity === 0 ? true : false"
                    @click="item.quantity--"
                    small
                    text
                  >
                    -
                  </v-btn>
                  <v-btn class="py-5 px-0" small> 5 </v-btn>
                  <v-btn
                    class="py-5 px-0"
                    @click="item.quantity++"
                    small
                    text
                  >
                    +
                  </v-btn>
                </v-btn-toggle>
              </div>
              <v-btn rounded outlined color="mainColor">ADD TO CART</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      c1: undefined,
      c2: undefined,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
      },
      images: [
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192790/02/sv01/fnd/EEA/fmt/png/Flyer-Runner-Engineered-Knit-Men's-Running-Shoes",
        'https://www.thenextsole.com/storage/images/192790-02.png',
        'https://img1.theiconic.com.au/wmiNvTtR0Tx6olLvEaLfGsHtI-w=/fit-in/1000x0/filters:fill(ffffff):quality(85)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpuma-1616-1875211-2.jpg',
        // 'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp',
        // 'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp',
      ],
      item: {
        productName: 'T-shirt',
        productImg:
          'https://preview.colorlib.com/theme/cozastore/images/xbg-01.jpg.pagespeed.ic.2e1HWxQapm.webp',
        price: 150,
        quantity: 88,
        total: 900,
      },      
    }
  },
  methods: {
    backgroundImage(image) {
      return {
        backgroundImage: `url("${image}")`,
      }
    }
  },
  mounted() {
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
  },
}
</script>
