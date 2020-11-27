<template>
  <v-app>
    <v-app-bar app class="blue">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>VirtualExpress</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed class="blue lighten-5">
          <router-link to="/customer/home">Principal</router-link>
        </v-btn>
        <v-btn depressed class="blue lighten-5">
          <router-link to="/customer/findCompany">Nuevo Envio</router-link>
        </v-btn>
        <v-btn depressed class="blue lighten-5">
          <router-link to="/customer/myPackages">Mis paquetes</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>
  <v-footer color="primary lighten-1" padless>
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>TecSoft</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
export default {
name: "appCustomer",
  data(){
  return{
    logo: require('@/img/avatar.png'),
    links: [
      'Principal',
      'Landing Page',
      'Contactanos'
    ]
  }
  }
}
</script>

<style scoped>

</style>