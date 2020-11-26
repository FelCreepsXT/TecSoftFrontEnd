<template>
  <div>
  <v-card v-if="valid === false" width="600" class="mx-auto ma-10" align="center">
    <h2 class="style-card-without-dispatcher">Usted no posee ningun dispatcher</h2>
    <div>
      <v-icon class="pa-2 pb-5" size="50">mdi-alert-circle-outline</v-icon>
    </div>
    <v-btn class="mb-6" @click="click1">Agregar Despachador</v-btn>
  </v-card>
  </div>
</template>

<script>
export default {
name: "withoutDispatcher",
  data(){
    return{
      valid: false,
      existId: '',
      search: ''
    }
  },
  methods: {
    click1(){
      this.$router.push({name: 'AddDispatcher'});
    },
  }
}
</script>

<style scoped>

</style>
