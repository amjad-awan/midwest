<template>
  <v-tab-item key="activity">
    <v-card flat class="mt-3">
      <v-card-text>
        <v-row dense align="center">
             <v-col cols="12" sm="6" md="4"  justify="center">
            <v-menu
            ref="activitydatemenu"
            v-model="activitydatemenu"
            :close-on-content-click="false"
            :return-value.sync="activitydate"
            transition="scale-transition"
            offset-y
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="activitydate"
                label="Activity Date"
                prepend-inner-icon="event"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker v-model="activitydate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="activitydatemenu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.activitydatemenu.save(activitydate)">OK</v-btn>
            </v-date-picker>
            </v-menu>
        </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
            <v-menu
            ref="activitytimemenu"
            v-model="activitytimemenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="activitytime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="activitytime"
                label="Activity Time"
                prepend-icon="access_time"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker
                v-if="activitytimemenu"
                v-model="activitytime"
                full-width
                @click:minute="$refs.activitytimemenu.save(activitytime)"
            ></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row dense align="center">
             <v-col cols="12" sm="6" md="4"  justify="center">
            <v-menu
            ref="pickupdatemenu"
            v-model="pickupdate"
            :close-on-content-click="false"
            :return-value.sync="pickupdate"
            transition="scale-transition"
            offset-y
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="pickupdate"
                label="Pickup Date"
                prepend-inner-icon="event"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker v-model="pickupdate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="pickupdatemenu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.pickupdatemenu.save(pickupdate)">OK</v-btn>
            </v-date-picker>
            </v-menu>
        </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
            <v-menu
            ref="pickuptimemenu"
            v-model="pickuptimemenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="pickuptime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="pickuptime"
                label="Pickup Time"
                prepend-icon="access_time"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker
                v-if="pickuptimemenu"
                v-model="pickuptime"
                full-width
                @click:minute="$refs.pickuptimemenu.save(pickuptime)"
            ></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row dense align="center">
             <v-col cols="12" sm="6" md="4"  justify="center">
            <v-menu
            ref="deliverydatemenu"
            v-model="deliverydate"
            :close-on-content-click="false"
            :return-value.sync="deliverydate"
            transition="scale-transition"
            offset-y
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="deliverydate"
                label="Delivery Date"
                prepend-inner-icon="event"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker v-model="deliverydate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="deliverydatemenu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.deliverydatemenu.save(deliverydate)">OK</v-btn>
            </v-date-picker>
            </v-menu>
        </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
            <v-menu
            ref="deliverytimemenu"
            v-model="deliverytimemenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="deliverytime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                v-model="deliverytime"
                label="Delivery Time"
                prepend-icon="access_time"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker
                v-if="deliverytimemenu"
                v-model="deliverytime"
                full-width
                @click:minute="$refs.deliverytimemenu.save(deliverytime)"
            ></v-time-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6" md="2" offset-md="1">
            <v-text-field
              label="Total Hours"
              v-model="order.totalHours"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
        <v-col cols="12" sm="4">
          <v-text-field
              label="Starting Mileage"
              dense
              v-model="order.startingMileage"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" offset-md="1">
          <v-text-field
              label="Ending Mileage"
              dense
              v-model="order.endingMileage"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="2" offset-md="1">
            <v-text-field
              label="Total Mileage"
              dense
              v-model="order.totalMileage"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
        <v-col cols="12" sm="4">
          <v-select
            :items="capacity"
            label="Capacity"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.capacityId'
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4" offset-md="1">
          <v-select
            :items="returnto"
            label="Return To"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.returnToId'
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
      activitydatemenu: false,
      activitydate: null,
      capacity: [{ id: 1, name: 'Full' }, { id: 2, name: 'Empty' }],
      returnto: [{ id: 1, name: 'Customer' }, { id: 2, name: 'Facility' }, { id: 3, name: 'Midwest' }],
      activitytimemenu: false,
      activitytime: null,
      pickupdatemenu: false,
      pickupdate: null,
      pickuptimemenu: false,
      pickuptime: null,
      deliverydatemenu: false,
      deliverydate: null,
      deliverytimemenu: false,
      deliverytime: null
    }
  },
  methods: {
    save () {
      this.order.activityDate = this.activityDate
      this.order.activitytime = this.activityTime
      this.order.pickupdate = this.pickupDate
      this.order.pickuptime = this.pickupTime
      this.order.deliverydate = this.deliveryDate
      this.order.deliverytime = this.deliveryTime
      http.post('/work-order/order-activity', this.order).then(res => {
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
