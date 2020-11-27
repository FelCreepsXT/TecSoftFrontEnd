<template>
  <v-card
      width="1000"
      class="mx-auto"
  >
    <v-app-bar
        dark
        color="blue"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Chat Customer y Company</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-card class="mx-auto ma-8" width="800">
      <v-row>
        <v-col md="9">
          <v-card-title  class="text-md-h4 mb-12">CompanyName</v-card-title>
          <v-row>
            <v-col md="4">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Correo: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Ruc: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Number: </v-card-subtitle>
            </v-col>
            <v-col md="8">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">CompanyEmail@hotmail.com</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">Ruc</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">Number</v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pt-md-16 mt-16" md="3">
          <v-icon size="150">
            mdi-account-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-card-actions>
            <v-btn class="mx-auto">Comunicate con nosotros</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
name: "moreInfo"
}
</script>

<style scoped>

</style>
