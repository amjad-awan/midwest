<template>
<v-tab-item key="administrativecontact">
 <div style="width: 100%">
 <v-card>
     <v-card-text>
    <v-row>
        <v-col cols="12" md="4">
             <v-text-field
              label="Name"
              outlined
              dense
              v-model="order.name"
            ></v-text-field>
        </v-col>
         <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="Title"
              outlined
              dense
              v-model="order.title"
            ></v-text-field>
          </v-col>
    </v-row>
    <v-row>
       <v-col cols="12" md="4">
             <v-text-field
              label="Office Phone"
              outlined
              dense
              v-model="order.officePhone"
            ></v-text-field>
        </v-col>
         <v-col cols="12" sm="6" md="4" offset-md="1">
            <v-text-field
              label="Mobile Phone"
              outlined
              dense
              v-model="order.mobilePhone"
            ></v-text-field>
          </v-col>
    </v-row>
   <v-row>
       <v-col cols="12" md="4">
             <v-text-field
              label="Email"
              outlined
              dense
              v-model="order.email"
            ></v-text-field>
        </v-col>
         <v-col cols="12" sm="6" md="4" offset-md="1">
            <v-text-field
              label="Fax"
              outlined
              dense
              v-model="order.fax"
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
  name: 'AdminContact',
  data: () => {
    return {
      order: {}
    }
  },
  methods: {
    save () {
      http.post('/customer/admin_contact', this.order).then(res => {
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
