<template>
  <v-card>
    <h1>Terminales de {{ company.name }}</h1>
      <v-card class="mx-auto mb-15"
              max-width="600"
              outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              <div>
                <v-card class="d-flex justify-space-around">
                  <v-card>{{ shipTerminal.terminalOrigin.name }}</v-card>
                  <v-card>{{ shipTerminal.terminalDestiny.name }}</v-card>
                </v-card>
              </div>
            </v-list-item-title>
            <v-divider class="mb-6"></v-divider>
            <v-list-item-title class="headline mb-5">
              <div>
                <v-card class="d-flex justify-space-around">
                  <v-card class="text-sm-h6 white--text pa-2" color="error">{{ shipTerminal.terminalOrigin.city.name }}</v-card>
                  <v-card class="text-sm-h6 white--text pa-2" color="primary">{{ shipTerminal.terminalDestiny.city.name }}</v-card>
                </v-card>
              </div>
            </v-list-item-title>
            <v-list-item-title class="headline mb-5">
              <div>
                <v-card class="d-flex justify-space-around">
                  <v-card>{{ shipTerminal.terminalOrigin.adress }}</v-card>
                  <v-card>{{ shipTerminal.terminalDestiny.adress }}</v-card>
                </v-card>
              </div>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">
              <div class="d-flex justify-space-around mb-6">
                <v-card class="text-sm-h6 white--text pa-2" color="deep-yellow lighten-2">S/{{ shipTerminal.price }}</v-card>
              </div>
              <v-btn
                  color="light-blue accent-2">
                Solicitar Terminal
              </v-btn>
              <v-btn class="mb-6" @click="click1">Mis Terminales</v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
  </v-card>
</template>

<script>

import ShipTerminalService from '@/services/shipterminal-service'

import myShipTerminal from "@/components/Company/createTerminal/shipTerminal/myShipTerminal";

export default {
  name: "ShipTerminal",
  data() {
    return {
      search: '',
      shipTerminals: [],
    }
  },
  methods: {
    retrieveShipTerminal(id) {
      ShipTerminalService.getAllShipTerminalByCompanyId(id)
          .then(response => {
            this.shipTerminals = response.data;
          })
          .catch(e => {
            console.log(e);
          })
    },
    created() {
      this.retrieveShipTerminal(this.$route.params.id);
    }

  }
}

</script>

<style scoped>

</style>
