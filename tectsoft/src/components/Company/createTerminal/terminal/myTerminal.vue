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
    <h1 class="text-center pt-8 pb-8">Hola, listo para crear tu terminal</h1>
    <without-terminal v-if="existList === false"></without-terminal>
    <list-terminal v-if="existList === true"></list-terminal>
  </v-card>
</template>

<script>
import WithoutTerminal from "@/components/Company/createTerminal/terminal/withoutTerminal";
import ListTerminal from "@/components/Company/createTerminal/terminal/listTerminal";

export default {
  name: "MyTerminal",
  components: {ListTerminal, WithoutTerminal},
  data(){
    return{
      existList: true
    }
  }

}
</script>

<style scoped>

</style>
