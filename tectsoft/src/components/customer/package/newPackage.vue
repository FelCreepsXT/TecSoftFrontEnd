<template>
  <v-card width="800" height="300" class="ma-10">
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
            :items="typeOfPriority"
            label="Standard"
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
            v-model="packageRequest.observation"
            class="background-text"
            placeholder="Alguna observacion para el paquete"
            solo
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "newPackage",
  data(){
    return{
      packageRequest:{
        name: '',
        description: '',
        observation: '',
        priority: 0,
        weight: '',
        discount: 0,
        customerId: 0,
        terminalOriginId: 0,
        terminalDestinyId: 0
      },
      typeOfPriority: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  }
}
</script>

<style scoped>

</style>
