<template>
  <v-tab-item key="landfill">
    <v-card flat class="mt-3">
      <v-card-text>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Ticket #"
              outlined
              dense
              v-model="order.ticket"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
         <v-col cols="12" sm="4">
          <v-select
            :items="measurements"
            label="Unit Of Measure"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.unitOfMeasure'
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4">
            <v-text-field
              label="Measurement"
              outlined
              dense
              v-model="order.measurement"
            ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
         <v-col cols="12" sm="4">
          <v-text-field
              label="Cobmeal"
              outlined
              dense
              v-model="order.cobmeal"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-checkbox
          v-model="order.deliverWithLiner"
          label="Deliver w/Liner"
         ></v-checkbox>
        </v-col>
        </v-row>
        <v-row dense>
        <v-col cols="12" sm="5">
          <v-textarea
            outlined
            label="Pre-Trip Qualifications"
            v-model="order.preTripQualifications"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="5" offset-md="1">
          <v-textarea
            outlined
            label="Post-Trip Qualifications"
            v-model="order.postTripQualifications"
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
  name: 'LandfieldDetails',
  data: () => {
    return {
      order: {},
      measurements: [{ id: 1, name: 'Weight' }, { id: 2, name: 'Length' }]
    }
  },
  methods: {
    save () {
      http.post('/work-order/landfill', this.order).then(res => {
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
