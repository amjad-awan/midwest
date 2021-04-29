<template>
<v-tab-item key="customersettings">
 <div style="width: 100%">
 <v-card>
     <v-card-text>
    <v-row>
        <v-col cols="12" md="4">
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
                label="Active Date"
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
    <v-row>
        <v-col cols="12" sm="6" md="4">
            <v-select
            :items="statuses"
            label="Status"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.status'
          ></v-select>
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
  name: 'CustomerSettings',
  data: () => {
    return {
      order: {},
      statuses: [{ id: 1, name: 'Active' }, { id: 2, name: 'In Active' }],
      menu: false,
      date: null
    }
  },
  methods: {
    save () {
      http.post('/customer/customer_settings', this.order).then(res => {
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
