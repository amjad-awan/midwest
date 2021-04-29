<template>
  <v-tab-item key="notes">
    <v-card flat class="mt-3">
      <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
            <v-textarea
                outlined
                label="Special Handling Instructions"
                v-model="order.specialInstructions"
            ></v-textarea>
            </v-col>
            <v-col cols="12" sm="4" offset-sm="1">
               <v-text-field
                 outlined
                label="Driver Pin"
                dense
                v-model="order.driverPin"
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
            <v-textarea
                outlined
                label="Damage Report"
                v-model="order.damageReport"
            ></v-textarea>
            </v-col>
          </v-row>
      </v-card-text>
      <v-card-actions>
          <v-btn color="secondary" dark @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-tab-item>
</template>

<script>
import http from '../http'
export default {
  name: 'Notes',
  data: () => {
    return {
      order: {}
    }
  },
  methods: {
    save () {
      http.post('/work-order/linedetail', this.order).then(res => {
        this.$store.dispatch('alert/displaySuccessDialog', {})
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
</style>
