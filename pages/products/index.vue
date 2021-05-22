<template>
  <div>
    <v-dialog v-model="productDetailsModal" width="80%">
      <v-card>
        <ProductDetails />
      </v-card>
    </v-dialog>
    <v-container id="products">
      <h1 class="text-center mb-4">Categry Name</h1>
      <v-row>
        <v-col
          v-for="(product, index) in products"
          :key="index"
          class="col-12 col-md-3 col-sm-4 product"
        >
          <v-card class="my-2" flat>
            <v-img :src="product.image" contain>
              <!-- <NuxtLink :to="{ name: 'index' }"> -->
              <v-btn
                class="view-btn pa-4 caption"
                @click="productDetails"
                x-small
                rounded
                >Quick View</v-btn
              >
              <!-- </NuxtLink> -->
            </v-img>
            <div class="text pa-2">
              <h6>{{ product.name }}</h6>
              <p class="mb-0 overline">{{ product.price }}</p>
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
      productDetailsModal: false,
    }
  },
  methods: {
    productDetails() {
      this.productDetailsModal = true
    },
  },
}
</script>
