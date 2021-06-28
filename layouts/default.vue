<template>
  <v-app>
    <Navbar />
    <v-main>
      <!-- <transition name="slide-fade" mode="out-in"> -->
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
      <!-- </transition> -->
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './parts/navbar'
import Footer from './parts/footer'
export default {
  components: {
    Navbar,
    Footer,
  },
  created() {
    this.$store.commit('addToCart')
  },
}
</script>



