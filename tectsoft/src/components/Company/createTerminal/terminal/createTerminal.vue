<template>
  <v-card width="600" class="mx-auto ma-10" align="center">
    <h2 class="style-card-without-dispatcher">Coloque el Id del dispatcher</h2>
    <v-row>
      <v-col md="5" align="right">
        <v-icon class="pa-2 pb-5" size="50">mdi-account-search</v-icon>
      </v-col>
      <v-col md="4">
        <v-text-field
            label="Name" type="text" v-model="terminalRequest.name">
        </v-text-field>
      </v-col>
      <v-col md="5" align="right">
        <v-icon class="pa-2 pb-5" size="50">mdi-account-search</v-icon>
      </v-col>
      <v-col md="4">
        <v-text-field
            label="Address" type="text" v-model="terminalRequest.address">
        </v-text-field>
      </v-col>
      <v-col md="5" align="right">
        <v-icon class="pa-2 pb-5" size="50">mdi-account-search</v-icon>
      </v-col>
      <v-col md="4">
        <v-select
            v-model="terminalRequest.cityId"
            :items="typeOfPriority"
            label="Ciudad"
        ></v-select>
      </v-col>
      <v-col md="12">
        <v-btn class="mb-6" @click="click1">Crear</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "createTerminal",
  data(){
    return{
      valid: false,
      existId: '',
      terminalRequest: {
        name: '',
        address: '',
        cityId: 0,
        companyId: 0
      },
      typeOfPriority: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  },
  methods:{
    click1(){
      TerminalsService.create(this.terminalRequest)
          .then(() => {
            console.log("Terminal creado");
            this.navigateToMyTerminal();
          })
          .catch(e => {
            console.log(e);
          })
  }
}


}
</script>

<style scoped>

</style>
