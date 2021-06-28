<template>
  <div>
    <Loader :loader="loader" />
    <v-dialog v-model="productDetailsModal" width="80%">
      <v-card>
        <ProductDetails @addToCart="productDetailsModal = false" :item="item" />
      </v-card>
    </v-dialog>
    <v-container v-show="!loader" id="products">
      <h1 class="text-center mb-4">{{ categoryName }}</h1>
      <v-row>
        <v-col
          v-for="(product, index) in products"
          :key="index"
          class="col-12 col-md-3 col-sm-4 product"
        >
          <v-card class="my-2 product-card" flat>
            <v-img
              @click="productDetails(product, index)"
              :lazy-src="product.image"
              :src="product.image"
              contain
            >
              <v-btn class="view-btn pa-4 caption" x-small rounded
                >Quick View</v-btn
              >
            </v-img>
            <div class="text pa-2">
              <h6>{{ product.name }}</h6>
              <p class="mb-0 overline">${{ product.price }}</p>
              <v-icon class="float-right">mdi-heart-outline</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { products } from './../../data/products'
import ProductDetails from './saved.vue'

export default {
  components: {
    ProductDetails,
  },
  data() {
    return {
      products: products,
      loader: true,
      productDetailsModal: false,
      item: {},
    }
  },
  computed: {
    categoryName() {
      return this.$route.query.category
        ? this.$route.query.category.toUpperCase()
        : 'All'
    },
  },
  methods: {
    productDetails(item, index) {
      this.item = { ...item, index: Math.random().toString(36) }
      this.productDetailsModal = true
    },
  },
  mounted() {
    this.loader = false
  },
}
</script>
