<template>
<v-tab-item key="billingaddress">
 <div style="width: 100%">
 <v-card>
     <v-card-text>
    <v-row>
        <v-col cols="12" md="4">
             <v-text-field
              label="Address1"
              outlined
              dense
              v-model="order.address1"
            ></v-text-field>
        </v-col>
         <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="Address2"
              outlined
              dense
              v-model="order.address2"
            ></v-text-field>
          </v-col>
    </v-row>
    <v-row>
       <v-col cols="12" md="4">
             <v-text-field
              label="City"
              outlined
              dense
              v-model="order.city"
            ></v-text-field>
        </v-col>
         <v-col cols="12" sm="6" md="4" offset-md="1">
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
    <v-row>
       <v-col cols="12" md="4">
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
 </div>
</v-tab-item>
</template>

<script>
import http from '../http'
export default {
  name: 'BillingAddress',
  data: () => {
    return {
      order: {},
      states: [{ id: 1, name: 'State 1' }, { id: 2, name: 'State 2' }, { id: 3, name: 'State 3' }]
    }
  },
  methods: {
    save () {
      http.post('/customer/mailing_address', this.order).then(res => {
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
