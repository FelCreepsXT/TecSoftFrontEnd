<template>
  <div class="div-size mx-auto">
    <v-row>
      <v-col md="12">
        <v-card-actions>
          <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#BABABA" @click="navigateToAddDispatcher">Agregar nuevo Dispatcher</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-card class="mb-15 pa-3">
      <v-row>
        <v-col md="2">
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Id: </v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Nombre: </v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">DNI: </v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Numero: </v-card-subtitle>
        </v-col>
        <v-col md="6">
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">DispatcherId</v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">DispatcherName</v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">DispatcherDNI</v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">DispatcherNumber</v-card-subtitle>
        </v-col>
        <v-col md="3">
          <v-icon size="180" align="left">
            mdi-account-circle
          </v-icon>
        </v-col>
        <v-col md="12">
          <v-card-actions>
            <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#BABABA">Eliminar</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ListDispatcher",
  data(){
    return{
      dispatchers: []
    }
  },
  methods:{
    navigateToAddDispatcher(){
      this.$router.push({name: 'AddNewDispatcher'});
    }
  }
}
</script>

<style scoped>
.div-size{
  width: 750px;
}
</style>
