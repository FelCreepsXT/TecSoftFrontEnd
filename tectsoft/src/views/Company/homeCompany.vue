<template>
  <v-card>
    <h1>Bienvenido {{ company.name }}</h1>
    <v-list-item-avatar
        tile
        size="80"
        color="grey"
    ></v-list-item-avatar>
    <v-list-item-subtitle>
      {{ company.description }}
    </v-list-item-subtitle>
  </v-card>
</template>

<script>
import CompanyService from '@/services/company/company-service'

export default {
  name: "HomeCompany",
  data(){
    return{
      company: []
    }
  },
  methods: {
    retrieveCompany(id){
      CompanyService.getId(id)
          .then(response => {
            this.company = response.data;
            console.log(this.company);
          })
          .catch(e => {
            console.log(e);
          })
    }
  },
  mounted() {
    this.retrieveCompany(this.$route.params.companyId);
  }

}
</script>

<style scoped>

</style>
