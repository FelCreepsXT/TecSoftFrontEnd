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
    <div class="mx-auto style-size-div">
      <div class="mt-11">
      <v-row>
        <v-col md="5">
          <v-select
              :items="items"
              label="Standard"
          ></v-select>
        </v-col>
        <v-spacer></v-spacer>
        <v-col md="5">
          <v-select
              :items="items"
              label="Standard"
          ></v-select>
        </v-col>
      </v-row>
      </div>
    <v-card width="800" class="mx-auto my-11 mt-0">
      <v-card-title class="justify-center text-h4">Antezana</v-card-title>
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
              <v-chip class="ma-2" color="primary">TerminalOrigin</v-chip>
              <v-chip class="ma-2" color="primary">TerminalOrigin</v-chip>
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
      <v-card-actions class="pb-8">
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#1DBF00">Mas informacion</v-btn>
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#00D2E9">Solicitar S/20.00</v-btn>
      </v-card-actions>
    </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "findCompany",
  data(){
    return{
      terminalServices: [],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  },
  methods: {
    retrieveTerminals(){

    }
  }
}
</script>

<style scoped>
.style-size-div{
  width: 800px;
}
</style>
