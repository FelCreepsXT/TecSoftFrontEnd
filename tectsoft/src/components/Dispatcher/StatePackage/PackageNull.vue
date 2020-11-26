<template>
  <div>
    <div class="mx-auto mb-15"
            style="width: 600px">
      <v-row>
        <v-col
            cols="auto"
            class="mr-auto"
        >
          <v-row align="center">
            <v-col cols="12">
              <v-select
                  :items="packages"
                  :menu-props="{ top: false, offsetY: true }"
                  label="Label"
                  item-text="description"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col
            cols="auto"
        >
          <v-row align="center">
            <v-col cols="12">
              <v-select
                  :items="packages"
                  :menu-props="{ top: false, offsetY: true }"
                  label="Label"
                  item-text="description"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div v-for="pack in packages" :key="pack.id">
      <v-card
          class="mx-auto mb-15"
          max-width="600"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ pack.id }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ pack.description }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ pack.observations }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions v-if="name === 'DispatcherState1'">
          <v-btn
              outlined
              rounded
              text
              @click="updateState(pack.id,2)"
          >
            Adelante
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import PackageService from '@/services/dispatcher/package-service'

export default {
  name: "PackageNull",
  data(){
    return {
      packages: [],
      name: ''
    }
  },
  methods: {
    retrievePackageState(){
      PackageService.getPackageByDispatcherNull()
          .then(response => {
            this.packages = response.data;
          })
          .catch(e => {
            console.log(e);
          })
    },
    refresh(){
      this.retrievePackageState();
    },

    updateState(id,value){
      PackageService.updatePackageState(id,value)
          .then(() => {
            this.refresh();
          })
          .catch(e => {
            console.log(e);
          })
    }
  },
  mounted() {
    this.retrievePackageState();
    this.name = this.$route.name;
  }
}
</script>

<style scoped>

</style>
