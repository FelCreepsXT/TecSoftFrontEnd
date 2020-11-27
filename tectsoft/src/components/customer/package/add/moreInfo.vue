<template>
  <v-card
      width="1000"
      class="mx-auto"
  >
    <v-card class="mx-auto ma-8" width="800">
      <v-row>
        <v-col md="9">
          <v-card-title  class="text-md-h4 mb-12">{{this.companyName}}</v-card-title>
          <v-row>
            <v-col md="4">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Correo: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Ruc: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Numero: </v-card-subtitle>
            </v-col>
            <v-col md="8">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{this.companyEMail}}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{this.companyRuc}}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{this.companynumber}}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pt-md-16 mt-16" md="3">
          <v-icon size="150">
            mdi-account-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-card-actions>
            <keep-alive>
              <v-btn class="mx-auto" @click="navigateToChat()">Comunicate con nosotros</v-btn>
            </keep-alive>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import CompanyService from '@/services/customer/company.service'
export default {
  name: "moreInfo",
  data(){
    return {
      companyName:"",
      companyRuc:"",
      companyEMail:"",
      companynumber:""
    }
  },
  methods:{
    getcompanyInfo(id){
      CompanyService.getCompanybyId(id).then(response=>{this.companyName=response.data.name,this.companyRuc=response.data.ruc,this.companyEMail=response.data.email,this.companynumber=response.data.number});
    },
    navigateToChat(id){
      this.$router.push({name:"Chat",params:{id:id}});
    }
  },
  mounted() {
    this.getcompanyInfo(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
