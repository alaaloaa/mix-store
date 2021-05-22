<template>
  <v-container class="cart">
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
                <img :src="item.productImg" />
                <span>{{ item.productName }}</span>
              </div>
            </template>
            <template #item.price="{ item }"> $ {{ item.price }} </template>
            <template #item.quantity="{ item }">
              <div class="quantity-buttons">
                <v-btn-toggle>
                  <v-btn
                    :disabled="item.quantity === 0 ? true : false"
                    @click="item.quantity--"
                    x-small
                    text
                  >
                    -
                  </v-btn>
                  <v-btn x-small>
                    {{ item.quantity }}
                  </v-btn>
                  <v-btn @click="item.quantity++" x-small text> + </v-btn>
                </v-btn-toggle>
              </div>
            </template>
            <template #item.total="{ item }">
              <div class="total">
                $ {{ (item.total = item.price * item.quantity) }}
              </div>
            </template>
            <template #footer></template>
          </v-data-table>
          <v-card-actions class="footer d-block">
            <div class="ma-4 total d-block">
              <span class="float-left">TOTAL</span>
              <span class="d-block float-right" flat color="mainColor"
                >$ {{ total }}</span>
            </div>
            <div class="mt-16 d-block text-center">
              <v-btn class="mr-6 mb-3" rounded outlined color="mainColor">Continue Shopping</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="shipping col-sm-4 col-12">
         <v-card class="pa-4" flat>
          <v-row class="d-block mb-4 text-center pa-9">
            <p class="font-weight-bold">Shipping</p>
            <span class="text">
              There are no shipping methods available. Please double check your address, or contact us if you need any help.
            </span>
            <v-form class="ma-4 text-center mx-auto">
              <v-select  v-model="search" placeholder="country"  outlined dense></v-select>
              <v-text-field v-model="search" placeholder="state"  outlined dense></v-text-field>
              <v-text-field v-model="search" placeholder="zip code"  outlined dense></v-text-field>
              <v-btn color="mainColor" text rounded>UPDATE TOTALS</v-btn>
            </v-form>
            <span>$ 0</span>
          </v-row>
          <v-card-actions class="border d-block text-center pa-4">
            <span class="font-weight-bold">TOTAL</span>
            <span class="ml-2" color="mainColor" outlined
                >$ {{ total }}</span>
            <v-btn class="mt-6 white--text px-4" rounded color="mainColor">
                Continue to Checkout
              </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
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
      data: [
        {
          productName: 'T-shirt',
          productImg:
            'https://preview.colorlib.com/theme/cozastore/images/xbg-01.jpg.pagespeed.ic.2e1HWxQapm.webp',
          price: 150,
          quantity: 88,
          total: 900,
        },
        {
          productName: 'T-shirt',
          productImg:
            'https://preview.colorlib.com/theme/cozastore/images/xbg-01.jpg.pagespeed.ic.2e1HWxQapm.webp',
          price: 150,
          quantity: 6,
          total: 900,
        },
      ],
    }
  },
  computed: {
    total() {
      let initialValue = 0
      let sum = this.data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.total,
        initialValue
      )
      return sum
    },
  },
}
</script>

<style>
.cart .v-card {
  border: 1px solid #ccc;
}
.cart .table .rows .product {
  width: 120px;
  height: 60px;
  margin: 20px 0px;
}

.cart .table .rows .product span {
  margin-left: 10px;
  position: relative;
  top: -43%;
}

.cart .table .rows .product img {
  width: 50%;
  height: 100%;
  object-fit: cover;
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
    background: white !important

}

.shipping .text {
  font-family: Poppins;
  font-size: 13px;
  line-height: 1.6923;
}

.border {
  border-top: 1px dashed #ccc
}
</style>
