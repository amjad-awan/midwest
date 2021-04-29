<template>
  <v-tab-item key="mantainance">
    <v-card flat class="mt-3" min-height="400">
      <v-card-text>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="4">
             <v-select
              :items="userids"
              label="System User ID"
              item-value='id'
              item-text='name'
              dense
              outlined
              v-model='order.systemUserId'
            ></v-select>
          </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
            <v-select
              :items="userids"
              label="Application User ID"
              item-value='id'
              item-text='name'
              dense
              outlined
              v-model='order.applicationUserId'
            ></v-select>
          </v-col>
        </v-row>
        <v-row dense>
        <v-col cols="12" sm="4">
          <v-select
            :items="userlevels"
            label="User Level"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.userLevelId'
          ></v-select>
        </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
              <header>User Type</header>
         </v-col>
         <v-col cols="12" sm="1">
            <v-checkbox v-model="order.isDriver" label="Driver"></v-checkbox>
         </v-col>
         <v-col cols="12" sm="1">
            <v-checkbox v-model="order.isClient"  label="Client"></v-checkbox>
         </v-col>
         <v-col cols="12" sm="1">
            <v-checkbox v-model="order.isVendor" label="Vendor"></v-checkbox>
         </v-col>
         <v-col cols="12" sm="1">
            <v-checkbox v-model="order.isSystem"  label="System"></v-checkbox>
         </v-col>
         <v-col cols="12" sm="2">
            <v-checkbox v-model="order.isContractor" label="Contractor"></v-checkbox>
         </v-col>
         <v-col cols="12" sm="2">
            <v-checkbox v-model="order.isOfficeStaff" label="Office Staff"></v-checkbox>
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
      userlevels: [{ id: 1, name: 'Level 1' }, { id: 2, name: 'Level 2' }, { id: 3, name: 'Level 3' }],
      userids: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }, { id: 3, name: 'User 3' }]
    }
  },
  methods: {
    save () {
      http.post('/user/maintenance', this.order).then(res => {
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
