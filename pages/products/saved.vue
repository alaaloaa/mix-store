<template>
  <v-container fluid id="job-view" class="">
    <Loader :loader="loader" />
    <v-row v-show="!loader">
      <v-col id="slider" class="col-xl-8 col-md-7 col-12">
        <v-row no-gutters>
          <v-col class="col-2">
            <div class="small-slider">
              <VueSlickCarousel
                ref="c2"
                :asNavFor="c1"
                :slidesToShow="1"
                :focusOnSelect="true"
                :arrows="false"
                :verticalSwiping="true"
              >
                <div class="mainBg" v-for="image in 1" :key="image">
                  <div
                    class="bg"
                    :style="backgroundImage(itemDetails.image)"
                  ></div>
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
                <div
                  class="bg"
                  :style="backgroundImage(itemDetails.image)"
                ></div>
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
          <h4>{{ itemDetails.name }}</h4>
          <p>${{ itemDetails.price }}</p>
          <p>
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
            Mauris consequat ornare feugiat. Nulla eget sem vitae eros pharetra
            viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
            Nulla eget sem vitae eros pharetra viverra. Nam
          </p>
        </div>
        <v-form class="">
          <v-row>
            <v-col class="col-sm-6 col-12">
              <v-select
                :items="sizes"
                :menu-props="{ offsetY: true }"
                placeholder="siza"
                outlined
                dense
              ></v-select>
            </v-col>
            <v-col class="col-sm-6 col-12">
              <v-select
                :items="colors"
                :menu-props="{ offsetY: true }"
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
                    :disabled="itemDetails.quantity === 1 ? true : false"
                    @click="itemDetails.quantity--"
                    small
                    text
                  >
                    -
                  </v-btn>
                  <v-btn class="py-5 px-0" small>
                    {{ itemDetails.quantity }}
                  </v-btn>
                  <v-btn
                    class="py-5 px-0"
                    @click="itemDetails.quantity++"
                    small
                    text
                  >
                    +
                  </v-btn>
                </v-btn-toggle>
              </div>
              <v-btn @click="addToCart" rounded outlined color="mainColor"
                >ADD TO CART</v-btn
              >
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
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      c1: undefined,
      c2: undefined,
      loader: true,
      images: [
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192790/02/sv01/fnd/EEA/fmt/png/Flyer-Runner-Engineered-Knit-Men's-Running-Shoes",
        'https://www.thenextsole.com/storage/images/192790-02.png',
        'https://img1.theiconic.com.au/wmiNvTtR0Tx6olLvEaLfGsHtI-w=/fit-in/1000x0/filters:fill(ffffff):quality(85)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpuma-1616-1875211-2.jpg',
        // 'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp',
        // 'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp',
      ],
      // item: {
      //   productName: 'T-shirt',
      //   productImg:
      //     'https://preview.colorlib.com/theme/cozastore/images/xbg-01.jpg.pagespeed.ic.2e1HWxQapm.webp',
      //   price: 150,
      //   quantity: 1,
      //   total: 900,
      // // },
      colors: ['Red', 'Black', 'Blue', 'Yellow'],
      sizes: ['x-Large', 'Large', 'Medium', 'Small'],
      itemDetails: { ...this.item, quantity: 1 },
    }
  },
  computed: {
    // itemDetails() {
    //   return { ...this.item, quantity: 1, total: 900 }
    // },
  },
  methods: {
    backgroundImage(image) {
      return {
        backgroundImage: `url("${image}")`,
      }
    },
    addToCart() {
      var items = []
      // Parse the serialized data back into an aray of objects
      items = JSON.parse(localStorage.getItem('items')) || []
      // Push the new data (whether it be an object or anything else) onto the array
      items.push({
        ...this.itemDetails,
        total: this.itemDetails.price * this.itemDetails.quantity,
      })
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('items', JSON.stringify(items))

      this.$store.commit('addToCart')
      this.$emit('addToCart')
    },
  },
  mounted() {
    this.loader = false
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
  },
  watch: {
    item(val) {
      this.itemDetails = { ...val, quantity: 1 }
    },
  },
}
</script>
