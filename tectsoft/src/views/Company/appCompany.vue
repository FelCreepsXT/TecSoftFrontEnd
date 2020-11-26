<template>
  <v-app>
    <v-app-bar app color="#00C2FF">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h1 style="color: white">Virtual Express</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="navigateToHome">
          Data's
        </v-btn>
        <v-btn @click="navigateToShipTerminalByCompanyId">
          Terminals
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AppCompany",
  methods: {
    navigateToHome(){
      this.$router.push({name: 'HomeCompany', params: {companyId: this.$route.params.companyId}}).catch(() => {});
    },
    navigateToShipTerminalByCompanyId(id){
      this.$router.push({name: 'ShipTerminal',params:{companyId: this.$route.params.companyId}}).catch(() => {});
    }
  }
}
</script>

<style scoped>

</style>
