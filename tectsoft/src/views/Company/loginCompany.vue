<template>
  <v-card
      width="900"
      class="mx-auto"
  >
    <v-app-bar
        dark
        color="blue"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Login Company</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-flex class="pa-0 pb-16 text-center">
            <v-img class="mx-auto" :src="logo" width="200px" height="250px"></v-img>
          </v-flex>
          <v-card
              color="#E1F5FE"
          >
            <v-card-title class="headline black--text pb-8 pa-8 font-weight-bold">
              <v-flex class="text-center">
                Iniciar Session Compañia
              </v-flex>
            </v-card-title>
            <div>
              <v-container>
                <v-row
                    style="height: 80px;"
                    justify="center"
                >
                  <v-col
                      cols="12"
                      md="5"
                  >
                    <p class="my-text-label text-right pa-5">Ingrese su Username:</p>
                  </v-col>
                  <v-col
                      cols="6"
                      sm="5"
                  >
                    <v-text-field v-if="invalidData === false"
                                  class="my-text-style"
                                  :rules="[rules.required]"
                                  v-model.lazy="username"
                                  label="Username" color="blue"
                                  counter
                                  maxlength="20"
                    ></v-text-field>
                    <v-text-field v-if="invalidData === true"
                                  class="my-text-style"
                                  :rules="[rules.required]"
                                  v-model.lazy="username"
                                  label="Username" color="blue"
                                  counter
                                  error
                                  maxlength="20"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row
                    style="height: 80px;"
                    justify="center"
                >
                  <v-col
                      cols="12"
                      md="5"
                  >
                    <p class="my-text-label text-right pa-5">Ingrese su contraseña:</p>
                  </v-col>
                  <v-col
                      cols="6"
                      sm="5"
                  >
                    <v-text-field v-if="invalidData === false"
                                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                  :rules="[rules.required]"
                                  :type="show3 ? 'text' : 'password'"
                                  name="input-10-2"
                                  class="my-text-style input-group--focused"
                                  v-model.lazy="password"
                                  label="Password" color="blue"
                                  counter
                                  maxlength="20"
                                  @click:append="show3 = !show3"
                    ></v-text-field>
                    <v-text-field v-if="invalidData === true"
                                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                  :rules="[rules.required]"
                                  :type="show3 ? 'text' : 'password'"
                                  name="input-10-2"
                                  class="my-text-style input-group--focused"
                                  v-model.lazy="password"
                                  label="Password" color="blue"
                                  counter
                                  maxlength="20"
                                  error
                                  @click:append="show3 = !show3"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <div class="text-center">
                <v-btn
                    color="primary"
                    dark
                    @click="validUsernameAndPassword()"
                >
                  Iniciar Sesion
                </v-btn>
              </div>
            </div>
            <h4 class="pa-8 pb-5 text-center">¿Olvidaste tu contraseña?</h4>
            <h5 class="pa-0 text-center">Quieres ingresar como Usuario</h5>
            <h5 class="pa-0 text-center">Quieres ingresar como Compania</h5>
            <h5 class="pa-0 pb-16 text-center">Quieres ingresar como Repartidor</h5>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

import CompanyService from '@/services/company/company-service'

export default {
  name: "LoginCompany",
  data (){
    return{
      logo: require('@/img/avatar.png'),
      username: '',
      password: '',
      show3: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
      invalidData: false
    }
  },
  methods:{
    validUsernameAndPassword(){
      CompanyService.getByUsernameAndPassword(this.username, this.password)
          .then(response => {
            this.$router.push({name: 'HomeCompany', params: {companyId: response.data.id}});
          })
          .catch(e => {
            console.log(e);
            this.invalidData = true;
          })
    }
  }
}
</script>

<style scoped>
.my-text-style{
  width: 200px !important;
}
.my-text-style >>> .v-text-field__slot input {
  color: #eb8023;
  border-bottom-color: black;
}
.my-text-style >>> fieldset {
  border-color: rgb(235, 128, 35);
}
.my-text-style >>> label{
  color: #ba6216;
}
.my-text-label{
  color: black;
}
</style>
