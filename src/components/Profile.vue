<template>
<v-tab-item key="profile">
 <div style="width: 100%">
 <v-card>
     <v-card-text>
    <v-row>
        <v-col cols="12" md="4">
             <v-select
              :items="customers"
              label="Customer ID"
              item-value='id'
              item-text='name'
              dense
              outlined
              v-model='order.customerId'
            ></v-select>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" md="4">
           <v-text-field
              label="Customer Name"
              outlined
              dense
              v-model="order.customerName"
            ></v-text-field>
          </v-col>
    </v-row>
    </v-card-text>
    <v-card-actions>
          <v-btn color="secondary" dark @click="save"> Save </v-btn>
      </v-card-actions>
 </v-card>
 </div>
</v-tab-item>
</template>

<script>
import http from '../http'
export default {
  name: 'Profile',
  data: () => {
    return {
      order: {},
      customers: [{ id: 1, name: 'Customer 1' }, { id: 2, name: 'Customer 2' }, { id: 3, name: 'Customer 3' }]
    }
  },
  methods: {
    save () {
      http.post('/customer/profile', this.order).then(res => {
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
