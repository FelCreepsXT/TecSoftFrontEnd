<template>
  <div class="mx-auto style-size-div">
    <v-card width="800" class="mx-auto my-11 mt-0">
      <v-row>
        <v-col md="6" align="center">
          <v-col md="12">
            <h2>Origen</h2>
          </v-col>
          <v-col md="12">
            <v-row justify="space-around"
                   align="center">
              <v-chip class="ma-2" color="primary">TerminalOrigin</v-chip>
              <v-chip class="ma-2" color="primary">TerminalOrigin</v-chip>
            </v-row>
          </v-col>
          <v-col>
            <v-card class="mx-auto"
                    max-width="90%"
            >
              <h3 class="pa-1">Colocar Address Origin</h3>
            </v-card>
          </v-col>
        </v-col>
        <v-col md="6" align="center">
          <v-col md="12">
            <h2>Destiny</h2>
          </v-col>
          <v-col md="12">
            <v-row justify="space-around"
                   align="center">
              <v-chip class="ma-2" color="primary">TerminalDestiny</v-chip>
              <v-chip class="ma-2" color="primary">TerminalDestiny</v-chip>
            </v-row>
          </v-col>
          <v-col>
            <v-card class="mx-auto"
                    max-width="90%"
            >
              <h3 class="pa-1">Colocar Address Destiny</h3>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
      <v-card-actions class="pb-5">
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#1DBF00">Costo</v-btn>
      </v-card-actions>
      <v-card-actions class="pb-5">
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="error">Eliminar</v-btn>
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#50ACF3">Actualizar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "listShipTerminal",
  data(){
    return{
      paintOrigin: false,
      paintDestiny: false,
      shipTerminalRequest: [],
      typeOfPriority: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  }
}
</script>

<style scoped>
.style-size-div{
  width: 800px;
  margin-top: 50px;
}
</style>
