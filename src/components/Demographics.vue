<template>
  <v-tab-item key="demographics">
    <v-card flat class="mt-3" min-height="400">
      <v-card-text>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="First Name"
              outlined
              dense
              v-model="order.firstName"
            ></v-text-field>
          </v-col>
           <v-col cols="12" sm="6" md="4">
           <v-text-field
              label="Middle Name"
              outlined
              dense
              v-model="order.middleName"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
           <v-text-field
              label="Last Name"
              outlined
              dense
              v-model="order.lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Email"
              outlined
              dense
              v-model="order.email"
            ></v-text-field>
          </v-col>
           <v-col cols="12" sm="6" md="6">
           <v-text-field
              label="Phone Number"
              outlined
              dense
              v-model="order.phoneNumber"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Address 1"
              outlined
              dense
              v-model="order.address1"
            ></v-text-field>
          </v-col>
           <v-col cols="12" sm="6" md="6">
           <v-text-field
              label="Address 2"
              outlined
              dense
              v-model="order.address2"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="City"
              outlined
              dense
              v-model="order.city"
            ></v-text-field>
          </v-col>
           <v-col cols="12" sm="6" md="6">
            <v-select
            :items="states"
            label="State"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.state'
          ></v-select>
          </v-col>
        </v-row>
        <v-row dense>
        <v-col cols="12" sm="4">
            <v-text-field
              label="Zip"
              outlined
              dense
              v-model="order.zip"
            ></v-text-field>
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
  name: 'Mantainance',
  data: () => {
    return {
      order: {},
      states: [{ id: 1, name: 'State 1' }, { id: 2, name: 'State 2' }, { id: 3, name: 'State 3' }]
    }
  },
  methods: {
    save () {
      http.post('/user/demographics', this.order).then(res => {
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
