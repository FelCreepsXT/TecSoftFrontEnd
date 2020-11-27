<template>
  <v-card  class=" mx-auto" >
    <h1>Nuevo Paquete</h1>
    <v-row class="pa-4">
      <v-col cols="12"
             sm="4"
             class="ma-0">
        <v-text-field
            v-model="packageRequest.name"
            class="background-text"
            placeholder="Nombre del paquete"
            solo
        >
        </v-text-field>
      </v-col>
      <v-col cols="12"
             sm="0"
             md="4"
             class="ma-0">
        <v-select
            v-model="packageRequest.priority"
            :items="typeOfPriority"
            label="Prioridad"
            item-text="state"
            item-value="abbr"
        ></v-select>
      </v-col>
      <v-col cols="12"
             sm="4"
             class="ma-0">
        <v-text-field
            v-model="packageRequest.weight"
            class="background-text"
            placeholder="Peso del paquete"
            solo
        >
        </v-text-field>
      </v-col>
      <v-col md="12" class="ma-0">
        <v-text-field
            v-model="packageRequest.description"
            class="background-text"
            placeholder="Descripcion sobre el paquete que enviara"
            solo
        >
        </v-text-field>
      </v-col>
      <v-col md="12" class="ma-0">
        <v-text-field
            v-model="packageRequest.observations"
            class="background-text"
            placeholder="Alguna observacion para el paquete"
            solo
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="12" sm="3" class="ma-0">
        <h2>Origen</h2>
          <h3>Terminal:</h3>
          <h2>
            {{this.$route.params.originName}}
          </h2>

          <h3>Ciudad:</h3>
          <h2>
            {{getCityOriginName(this.$route.params.cityOriginId)}}
          </h2>
      </v-col>
      <v-col cols="12" sm="3" class="ma-0">
        <h2>Destino</h2>
          <h3>Terminal:</h3>
          <h2>
            {{this.$route.params.destinyName}}
          </h2>

          <h3>Ciudad:</h3>
          <h2 > {{getCityDestinyName(this.$route.params.cityDestinyId)}}
          </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="navigateToFindCompany()">
          Cancelar
        </v-btn>
      </v-col>
      <vcol>
        <v-btn @click="save()">
          Aceptar
        </v-btn>
      </vcol>
    </v-row>
  </v-card>
</template>

<script>
import PackageService from '@/services/customer/package.service'
import CityService from "@/services/customer/city.service"
export default {
  name: "newPackage",
  data(){
    return{
      packageRequest:{
        name: '',
        description: '',
        observations: '',
        priority: 0,
        weight: '',
        discount: 0,
        customerId: 1,
        terminalOriginId: this.$route.params.originId,
        terminalDestinyId: this.$route.params.destinyId
      },
      typeOfPriority: [{state:'Baja', abbr:1}, {state:'Media',abbr:2}, {state:'Alta',abbr:3}],
      cityname1:'',
      cityname2:'',

    }
  },
  methods:{
    navigateToFindCompany(){
      this.$router.push({name:"FindCompany"});
    },
    save(){
      PackageService.savePackage(this.packageRequest).then(this.$router.push({name:"HomeCustomer"}));
    },
    getCityOriginName(id){
      CityService.getById(id).then(response=>{this.cityname1=response.data.name})
      return this.cityname1
    },
    getCityDestinyName(id){
      CityService.getById(id).then(response=>{this.cityname2=response.data.name})
      return this.cityname2
    }
  }
}
</script>

<style scoped>

</style>
