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
      <v-toolbar-title>Login Dispatcher</v-toolbar-title>
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
                Iniciar Session Despachador
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
                      <v-text-field
                          class="my-text-style"
                          label="Username" color="blue"
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
                    <v-text-field
                        class="my-text-style"
                        label="Password" color="blue"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <div class="text-center">
                <v-btn
                    color="primary"
                    dark
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
    <div style="width: 300px; height: 300px; background-color: black" v-if="value === 1"></div>
  </v-card>
</template>

<script>


export default {
  name: "LoginDispatcher",
  data (){
    return{
      logo: require('@/img/avatar.png'),
      value: 0
    }
  }
}
</script>

<style scoped>
.my-text-style{
  width: 200px !important;
}
.my-text-style >>> .v-text-field__slot input {
  color: blue;
  border-bottom-color: black;
}
.my-text-style >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
}
.my-text-style >>> label{
  color: blue;
}
.my-text-label{
  color: black;
}
</style>
