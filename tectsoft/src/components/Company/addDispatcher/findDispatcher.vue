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
    <h1 class="text-center pt-8 pb-8">Hola Bienvenido a AddDispatcher</h1>
    <without-dispatcher v-if="existList === false"></without-dispatcher>
    <list-dispatcher v-else-if="existList === true"></list-dispatcher>
  </v-card>
</template>

<script>
import WithoutDispatcher from "@/components/Company/addDispatcher/withoutDispatcher";
import ListDispatcher from "@/components/Company/addDispatcher/listDispatcher";

export default {
  name: "FindDispatcher",
  components: {ListDispatcher, WithoutDispatcher},
  data(){
    return{
      existList: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
