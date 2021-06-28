<template>
  <div>
    <Loader v-if="loader" :loader="loader" />
    <v-container v-else class="cart">
      <v-row row wrap>
        <v-col class="table col-sm-8 col-12">
          <v-card flat>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              class="rows"
              :headers="headers"
              :items="data"
              :search="search"
              hide-default-footer
              align="center"
            >
              <template #item.product="{ item }">
                <div class="product">
                  <img :src="item.image" />
                  <span>{{ item.name }}</span>
                </div>
              </template>
              <template #item.price="{ item }"> ${{ item.price }} </template>
              <template #item.quantity="{ item }">
                <div class="quantity-buttons">
                  <v-btn-toggle>
                    <v-btn
                      :disabled="item.quantity === 1 ? true : false"
                      @click="
                        $store.commit('editItemQuantity', {
                          index: item.index,
                          status: 'decrease',
                        })
                      "
                      x-small
                      text
                    >
                      -
                    </v-btn>
                    <v-btn x-small>
                      {{ item.quantity }}
                    </v-btn>
                    <v-btn
                      @click="
                        $store.commit('editItemQuantity', {
                          index: item.index,
                          status: 'increase',
                        })
                      "
                      x-small
                      text
                    >
                      +
                    </v-btn>
                  </v-btn-toggle>
                </div>
              </template>
              <template #item.total="{ item }">
                <div class="total">
                  ${{ parseFloat(item.total).toFixed(2) }}
                </div>
              </template>
              <template #footer></template>
            </v-data-table>
            <v-card-actions class="footer d-block">
              <div class="ma-4 total d-block">
                <span class="float-left">TOTAL</span>
                <span class="d-block float-right" flat color="mainColor"
                  >${{ total }}</span
                >
              </div>
              <div class="mt-16 d-block text-center">
                <v-btn
                  class="mr-6 mb-3"
                  router
                  to="/products"
                  rounded
                  outlined
                  color="mainColor"
                  >Continue Shopping</v-btn
                >
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col class="shipping col-sm-4 col-12">
          <v-card class="pa-4" flat>
            <v-row class="d-block mb-4 text-center pa-9">
              <p class="font-weight-bold">Shipping</p>
              <span class="text">
                There are no shipping methods available. Please double check
                your address, or contact us if you need any help.
              </span>
              <v-form
                @submit.prevent
                class="ma-4 text-center mx-auto"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="shipping.country"
                  placeholder="country"
                  :rules="rules.country"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="shipping.address"
                  placeholder="Address"
                  :rules="rules.address"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="shipping.phone"
                  placeholder="Phone Number"
                  :rules="rules.phone"
                  outlined
                  dense
                ></v-text-field>
                <span class="overlap">Shipping Cost: $10</span>
                <!-- <v-btn
                @click="shipping.cost = 10"
                :disabled="!shipping.country"
                class="d-block mx-auto"
                color="mainColor"
                text
                rounded
                >UPDATE TOTALS</v-btn
              > -->
              </v-form>
            </v-row>
            <v-card-actions class="border d-block text-center pa-4">
              <span class="font-weight-bold">TOTAL</span>
              <span class="ml-2" color="mainColor" outlined
                >${{ +total + 10 }}</span
              >
              <v-btn
                class="mt-6 px-4 white--text d-block mx-auto"
                rounded
                color="mainColor"
                @click="checkOut"
              >
                Checkout
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      valid: true,
      loader: true,
      shipping: {
        country: '',
        address: '',
        phone: '',
        cost: 0,
      },
      headers: [
        {
          text: 'PRODUCT',
          sortable: false,
          value: 'product',
          align: 'center',
        },
        { text: 'PRICE', value: 'price', sortable: false, align: 'center' },
        {
          text: 'QUANTITY',
          value: 'quantity',
          sortable: false,
          align: 'center',
        },
        { text: 'TOTAL', value: 'total', sortable: false, align: 'center' },
      ],
      data: this.$store.state.cart,
      rules: {
        country: [(v) => !!v || 'Country is required'],
        address: [(v) => !!v || 'Adderss is required'],
        phone: [(v) => !!v || 'Phone Number is required'],
      },
    }
  },
  computed: {
    total() {
      let initialValue = 0
      let sum = this.data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.total,
        initialValue
      )
      return parseFloat(sum).toFixed(2)
    },
  },
  methods: {
    checkOut() {
      this.$refs.form.validate()
      if (this.$refs.form.validate()) {
        this.$fire({
          title: 'Successful Process',
          text: 'We have received your order and will contact you shortly to confirm the order',
          type: 'success',
        })
      }
    },
  },
  mounted() {
    this.loader = false
  },
}
</script>

<style>
.cart .v-card {
  border: 1px solid #ccc;
}
.cart .table .rows .product {
  margin: 20px 0px;
  text-align: center;
}

.cart .table .rows .product span {
  display: table;
  margin: 10px auto;
  text-align: center;
}

.cart .table .rows .product img {
  width: 60px;
  margin: auto;
  height: 60px;
  object-fit: cover;
  display: block;
}

.cart .table .footer {
  border-top: 1px solid #ccc;
  /* position: relative; */
}

.cart .table .footer .total {
  text-align: center;
  font-weight: bold;
}

.v-btn--active {
  background: white !important;
}

.shipping .text {
  font-family: Poppins;
  font-size: 13px;
  line-height: 1.6923;
}

.border {
  border-top: 1px dashed #ccc;
}
</style>
