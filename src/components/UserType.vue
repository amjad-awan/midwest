<template>
 <div style="width: 100%">
 <v-card>
     <v-card-text>
    <v-row>
        <v-col cols="12" md="4">
             <v-select
                :items="typeids"
                label="Type Id"
                item-value='id'
                item-text='name'
                dense
                outlined
                v-model='order.typeId'
            ></v-select>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6" md="4">
           <v-text-field
              label="Type Description"
              outlined
              dense
              v-model="order.typeDesc"
            ></v-text-field>
          </v-col>
    </v-row>
    </v-card-text>
    <v-card-actions>
          <v-btn color="secondary" dark @click="save"> Save </v-btn>
      </v-card-actions>
 </v-card>
 </div>
</template>

<script>
import http from '../http'
export default {
  name: 'UserType',
  data: () => {
    return {
      order: {},
      typeids: [{ id: 1, name: 'Type 1' }, { id: 2, name: 'Type 2' }, { id: 3, name: 'Type 3' }, { id: 4, name: 'Type 4' }]
    }
  },
  methods: {
    save () {
      http.post('/user/user_level', this.order).then(res => {
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
