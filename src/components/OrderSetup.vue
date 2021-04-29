<template>
  <v-tab-item key="ordersetup">
    <v-card flat class="mt-3">
      <v-card-text>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="4">
             <v-select
              :items="workorders"
              label="Work Order Id"
              item-value='id'
              item-text='name'
              dense
              outlined
              v-model='order.workOrderId'
          ></v-select>
          </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
            <v-text-field
              label="Purchase Order#"
              outlined
              dense
              v-model="order.purchaseOrder"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
           <v-col cols="12" sm="6" md="4"  justify="center">
            <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="date"
                label="Work Order Date"
                prepend-inner-icon="event"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
            </v-menu>
        </v-col>
        </v-row>
        <v-row dense>
        <v-col cols="12" sm="4">
          <v-select
            :items="customers"
            label="Customer"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.customerId'
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4" offset-md="1">
          <v-select
            :items="drivers"
            label="Driver"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.driverId'
          ></v-select>
        </v-col>
        </v-row>
        <v-row dense>
        <v-col cols="12" sm="4">
          <v-select
            :items="vehicles"
            label="Vehicle"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.vehicleId'
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4" offset-md="1">
          <v-select
            :items="containers"
            label="Container"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.containerId'
          ></v-select>
        </v-col>
        </v-row>
        <v-row dense>
        <v-col cols="12" sm="4">
          <v-select
            :items="oLocations"
            label="Origin Location"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.originLocationId'
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4" offset-md="1">
          <v-select
            :items="dLocations"
            label="Destination Location"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.destinationLocationId'
          ></v-select>
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
  name: 'OrderSetup',
  data: () => {
    return {
      order: {},
      menu: false,
      date: null,
      workorders: [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }, { id: 3, name: 'Order 3' }],
      customers: [{ id: 1, name: 'Customer A' }, { id: 2, name: 'Customer B' }],
      drivers: [{ id: 1, name: 'Driver A' }, { id: 2, name: 'Driver B' }],
      vehicles: [{ id: 1, name: 'Vehicle A' }, { id: 2, name: 'Vehicle B' }],
      containers: [{ id: 1, name: 'Container A' }, { id: 2, name: 'Container B' }],
      oLocations: [{ id: 1, name: 'Location A' }, { id: 2, name: 'Location B' }],
      dLocations: [{ id: 1, name: 'Location C' }, { id: 2, name: 'Location C' }]
    }
  },
  methods: {
    save () {
      http.post('/work-order/', this.order).then(res => {
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
