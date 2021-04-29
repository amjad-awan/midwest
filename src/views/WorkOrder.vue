<template>
  <div style="width: 100%">
      <v-card>
      <v-tabs
        v-model="tab"
        color='primary'
      >
        <v-tab key='ordersetup' dark>
          Order Setup
        </v-tab>
        <v-tab key='activity'>
          Order Activity
        </v-tab>
        <v-tab key='landfill'>
          Landfill Details
        </v-tab>
        <v-tab key='linedetails'>
           Line Details
        </v-tab>
        <v-tab key='notes'>
           Notes
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <order-setup> </order-setup>
        <order-activity> </order-activity>
        <landfield-details></landfield-details>
        <line-details></line-details>
        <notes></notes>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import OrderSetup from '../components/OrderSetup.vue'
import OrderActivity from '../components/OrderActivity.vue'
import LandfieldDetails from '../components/LandfieldDetails.vue'
import LineDetails from '../components/LineDetails.vue'
import Notes from '../components/Notes.vue'

export default {
  name: 'WorkOrder',
  components: {
    OrderSetup,
    OrderActivity,
    LandfieldDetails,
    LineDetails,
    Notes
  },
  data: function () {
    return {
      tab: ''
    }
  }
}
</script>
