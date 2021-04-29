<template>
 <div style="width: 100%">
 <v-card>
     <v-card-text>
    <v-row>
      <v-col cols="12" sm="6" md="4">
           <v-select
              :items="vehicles"
              label="Vehicle ID"
              item-value='id'
              item-text='name'
              dense
              outlined
              v-model='order.vehicleId'
            ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="Vehicle Description"
              outlined
              dense
              v-model="order.vehicleDesc"
            ></v-text-field>
          </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4">
           <v-select
            :items="types"
            label="Vehicle Type"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.vehicleType'
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="Vehicle License #"
              outlined
              dense
              v-model="order.vehicleLicence"
            ></v-text-field>
          </v-col>
    </v-row>
     <v-row>
      <v-col cols="12" sm="6" md="4">
           <v-select
            :items="drivers"
            label="Driver"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.driver'
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="VIN Number"
              outlined
              dense
              v-model="order.vinNumber"
            ></v-text-field>
          </v-col>
    </v-row>
     <v-row>
        <v-col cols="12" sm="6" md="4">
             <v-select
              :items="mantainance"
              label="Maintenance ID"
              item-value='id'
              item-text='name'
              dense
              outlined
              v-model='order.maintenanceId'
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="4" offset-md="1">
             <v-select
              :items="statuses"
              label="Status"
              item-value='id'
              item-text='name'
              dense
              outlined
              v-model='order.statusId'
            ></v-select>
          </v-col>
    </v-row>
    </v-card-text>
    <v-card-actions>
          <v-btn color="primary" @click="save"> Save </v-btn>
      </v-card-actions>
 </v-card>
 </div>
</template>

<script>
import http from '../http'
export default {
  name: 'VehicleMantainance',
  data: () => {
    return {
      order: {},
      types: [{ id: 1, name: 'Van' }, { id: 2, name: 'Track' }],
      statuses: [{ id: 1, name: 'Active' }, { id: 2, name: 'InActive' }],
      drivers: [{ id: 1, name: 'Jonh' }, { id: 2, name: 'Eric' }],
      mantainance: [{ id: 1, name: 'Mantainance 1' }, { id: 2, name: 'Mantainance 2' }, { id: 3, name: 'Mantainance 3' }],
      vehicles: [{ id: 1, name: 'Vehicle 1' }, { id: 2, name: 'Vehicle 2' }, { id: 3, name: 'Vehicle 3' }]
    }
  },
  methods: {
    save () {
      http.post('/vehicle/', this.order).then(res => {
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
