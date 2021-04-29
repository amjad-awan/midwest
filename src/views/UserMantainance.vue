<template>
 <div style="width: 100%">
      <v-card>
      <v-tabs
        v-model="tab"
      >
        <v-tab key='mantainance'>
          Mantainance
        </v-tab>
        <v-tab key='demographics'>
          Demographics
        </v-tab>
        <v-tab key='security'>
          Security
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
          <mantainance></mantainance>
          <demographics></demographics>
          <security></security>
      </v-tabs-items>
    </v-card>
 </div>
</template>

<script>

import Mantainance from '../components/Mantainance.vue'
import Demographics from '../components/Demographics.vue'
import Security from '../components/Security.vue'

export default {
  name: 'UserMantaince',
  components: {
    Mantainance,
    Demographics,
    Security
  },
  data: function () {
    return {
      tab: ''
    }
  }
}
</script>
