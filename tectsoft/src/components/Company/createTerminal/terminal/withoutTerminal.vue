<template>
  <div>
    <v-card v-if="valid === false" width="600" class="mx-auto ma-10 pt-5 pb-5" align="center">
      <h2 class="style-card-without-dispatcher">Usted no posee ningun terminal</h2>
      <div>
        <v-icon class="pa-2 pb-5" size="50">mdi-alert-circle-outline</v-icon>
      </div>
      <v-btn class="mb-6" @click="click1">Agregar tu primer terminal</v-btn>
  </div>
</template>

<script>
export default {
  name: "withoutTerminal",
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
  methods: {
    click1(){
        this.$router.push({name: 'CreateTerminal'});
    },
  }
}
</script>

<style scoped>

</style>
