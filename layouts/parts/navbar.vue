<template>
  <div>
    <v-app-bar id="navbar" app flat :color="appBg ? '#fff' : 'transparent'">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>

      <NuxtLink :to="{ name: 'index' }">
        <v-toolbar-title class="mainColor--text">Mix Store</v-toolbar-title>
      </NuxtLink>
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="{ name: link.route }"
        class="d-none d-sm-flex pt-1"
      >
        <span text class="caption mainLinks">{{ link.text }}</span>
      </NuxtLink>

      <v-spacer></v-spacer>
      <NuxtLink
        v-for="link in iconLinks"
        :key="link.icon"
        :to="{ name: link.route }"
        :class="link.class"
      >
        <v-btn icon>
          <v-badge v-if="link.badge" color="mainColor" overlap content="6">
            <v-icon class="iconLinks">{{ link.icon }}</v-icon>
          </v-badge>
          <v-icon v-else class="iconLinks">{{ link.icon }}</v-icon>
        </v-btn>
      </NuxtLink>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute class="d-flex d-sm-none">
      <v-list-item-group>
        <v-list-item-group nav dense>
          <NuxtLink
            v-for="link in links"
            :key="link.icon"
            :to="{ name: link.route }"
            :class="link.class"
          >
            <v-list-item>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
      </v-list-item-group>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      appBg: true,
    }
  },
  computed: {
    links() {
      return [
        {
          text: 'Home',
          route: 'index',
        },
        {
          text: 'Shop',
          route: 'products',
        },
        {
          text: 'About',
          route: 'about',
          type: '',
        },
        {
          text: 'Contact us',
          route: 'contact-us',
        },
        {
          text: '',
          route: '',
          type: '',
        },
      ]
    },
    iconLinks() {
      return [
        // {
        //   icon: 'mdi-magnify',
        //   route: '#',
        //   class:"search"
        // },
        {
          icon: 'mdi-heart-outline',
          route: 'products-saved',
          badge: true,
        },
        {
          icon: 'mdi-cart-variant',
          route: 'cart',
          badge: true,
          class: 'last-link',
        },
      ]
    },
    //   navbarBackground() {
    //    return this.$route.name == 'index' ? true : false
    //   }
  },
  methods: {
    navbarBackground() {
      if (this.$route.name === 'index') {
        return (this.appBg = false)
      } else {
        return (this.appBg = true)
      }
      // return this.$route.name == 'index' ? true : false
    },
    changeColor() {
      if (
        (document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20) &&
        this.$route.name === 'index'
      ) {
        this.appBg = true
      } else if (this.$route.name !== 'index') {
        this.appBg = true
      } else {
        this.appBg = false
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    window.onscroll = () => {
      this.changeColor()
    }
    this.navbarBackground()
  },
  watch: {
    $route() {
      this.navbarBackground() // changr navbar background
    },
  },
}
</script>
