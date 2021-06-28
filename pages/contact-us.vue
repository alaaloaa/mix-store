<template>
  <div class="contact-us">
    <v-card class="main-card" flat height="200px">
      <h1 class="text-center">Contact us</h1>
    </v-card>
    <v-container>
      <v-row>
        <v-col class="col-12 col-sm-6 left">
          <h4 class="text-center my-4">Send us A Message</h4>
          <form @submit.prevent="submit">
            <v-text-field
              outlined
              placeholder="Write Your Email"
              prepend-inner-icon="mdi-email-outline"
            ></v-text-field>
            <v-textarea
              counter
              outlined
              placeholder="Write Your Message"
            ></v-textarea>
            <v-btn class="white--text" color="black" rounded>Send</v-btn>
          </form>
        </v-col>
        <v-col class="col-12 col-sm-6 right pl-10">
          <v-row
            v-for="(contact, index) in contactData"
            :key="index"
            class="main  text-sm-left  text-center"
          >
            <v-col class="col-1">
              <v-icon class="mr-">{{ contact.icon }}</v-icon>
            </v-col>
            <v-col class="col-11 text">
              <p>{{ contact.title }}</p>
              <span>
                {{ contact.text }}
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactData: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: 'Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US',
        },
        {
          icon: 'mdi-phone-outline',
          title: 'Lets Talk',
          text: '+20111413482',
        },
        {
          icon: 'mdi-email-outline',
          title: 'Sale Support',
          text: 'contact@example.com',
        },
      ],
    }
  },
}
</script>

<style scoped>
.contact-us .left h4 {
  font-family: 'Poppins';
  font-size: 24px;
  line-height: 1.5;
  font-weight: lighter;
}

.contact-us .right {
  padding-top: 70px;
  font-family: Poppins;
}

.contact-us .right .text p {
  font-size: 18px;
  display: inline-block;
  width: 50%;
  line-height: 1.666667;
}

.contact-us .right .text span {
  font-size: 12px;
  display: inline-block;
  width: 50%;
  line-height: 1.666667;
}
</style>
