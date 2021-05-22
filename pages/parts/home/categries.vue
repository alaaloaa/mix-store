<template>
  <v-container class="mb-6 categries">
    <v-row>
      <v-col
        v-for="(image, index) in images"
        :key="index"
        class="col-12 col-sm-4 pa-4"
      >
        <v-hover>
          <template #default="{ hover }">
            <div :class="['main', hover ? 'hover' : '']">
              <v-img contain :src="image" :aspect-ratio="16 / 9"></v-img>
              <div class="top">
                <h2>Men</h2>
                <p class="">Perfect Goods</p>
              </div>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="mainColor">
                  <NuxtLink :to="{ name: 'products' }">Shop Now</NuxtLink>
                </v-overlay>
              </v-fade-transition>
            </div>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://preview.colorlib.com/theme/cozastore/images/banner-04.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-05.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-07.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-08.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-04.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-05.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-07.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-08.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-04.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-05.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-07.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-08.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-04.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-05.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-07.jpg',
        'https://preview.colorlib.com/theme/cozastore/images/banner-08.jpg',
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
}
</script>

<style lang="scss">
.categries {
  .main {
    position: relative;
    overflow: hidden;
    border: 1px solid #e6e6e6;
    .v-image {
      left: 8%;
    }
    .top {
      position: absolute;
      top: 10px;
      left: 5%;
      z-index: 6;
      p {
        font-family: 'Poppins-Regular';
        font-size: 14px;
        line-height: 1.7;
      }
    }
  }

  .hover .top {
    color: #fff;
  }

  .v-overlay__content {
    position: absolute;
    top: 75%;
    left: 5%;
    color: #fff !important;
  }

  .v-overlay__content a {
    color: #fff !important;
  }

  .v-overlay__content a::after {
    content: '';
    width: 100%;
    height: 1px;
    background: transparent;
    display: block;
    transition: width 2s ease !important, background-color 2s ease !important;
  }

  .hover .v-overlay__content a::after {
    background: #fff;
  }
}
</style>
