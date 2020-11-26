<template>
  <v-card width="600" class="mx-auto ma-10" align="center">
    <h2 class="style-card-without-dispatcher">Coloque el Id del dispatcher</h2>
    <v-row>
      <v-col md="5" align="right">
        <v-icon class="pa-2 pb-5" size="50">mdi-account-search</v-icon>
      </v-col>
      <v-col md="4">
        <v-text-field
            label="Id" type="number" v-model="existId">
        </v-text-field>
      </v-col>
      <v-col md="12">
        <v-btn class="mb-6" @click="click2">Buscar</v-btn>
      </v-col>
      <v-col v-if="search === true" md="12">
        <v-card class="mx-auto mb-6" width="550">
          <v-row>
            <v-col md="5" class="text-end">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">Id: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">Nombre: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">DNI: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">Numero: </v-card-subtitle>
            </v-col>
            <v-col md="7" class="text-left">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">DispatcherId</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">DispatcherName</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">DispatcherDNI</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">DispatcherNumber(No hay)</v-card-subtitle>
            </v-col>
            <v-col md="12">
              <v-btn class="mb-6" @click="click2">Agregar</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col v-else-if="search === false" md="12">
        <v-card-subtitle class="text-md-h5 pb-10 pl-0 red--text text-center font-weight-bold">No existe Dispatcher con Id: { ID }</v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "createDispatcher",
  data(){
    return{
      existId: '',
      search: ''
    }
  },
  methods: {
    click1(){
      this.valid = true;
    },
    click2(){

    }
  }
}
</script>

<style scoped>

</style>
