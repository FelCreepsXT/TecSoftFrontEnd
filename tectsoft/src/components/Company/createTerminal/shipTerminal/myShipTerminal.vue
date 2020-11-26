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
    <v-card v-if="existList === false" width="800" class="mx-auto mt-xl-16 pa-4 mb-16">
      <h2 class="text-center">No tiene ninguna Terminal Relacionado</h2>
      <v-card-actions class="pa-4 mt-4 justify-center">
        <v-btn class="pa-5" @click="navigateToMyTerminal">Relacionar Terminales</v-btn>
      </v-card-actions>
    </v-card>
    <list-ship-terminal v-if="existList === true"></list-ship-terminal>
  </v-card>
</template>

<script>
import ListShipTerminal from "@/components/Company/createTerminal/shipTerminal/listShipTerminal";
export default {
  name: "MyShipTerminal",
  components: {ListShipTerminal},
  data(){
    return{
      existList: true
    }
  },
  methods: {
    navigateToMyTerminal(){
      this.$router.push({name: 'MyTerminal'});
    }
  }
}
</script>

<style scoped>

</style>
