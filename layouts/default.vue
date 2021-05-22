<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from './parts/navbar'
export default {
  components: {
    Navbar,
  },
}
</script>
