<template>
 <div style="width: 100%">
 <v-card>
     <v-card-text>
    <v-row>
      <v-col cols="12" sm="6" md="4">
           <v-select
              :items="containers"
              label="Container ID"
              item-value='id'
              item-text='name'
              dense
              outlined
              v-model='order.containerId'
            ></v-select>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4">
           <v-select
            :items="types"
            label="Container Type"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.containerType'
          ></v-select>
        </v-col>
    </v-row>
     <v-row>
        <v-col cols="12" sm="6" md="4">
           <v-text-field
              label="Container Description"
              outlined
              dense
              v-model="order.containerDesc"
            ></v-text-field>
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
  name: 'ContainerMantainance',
  data: () => {
    return {
      order: {},
      types: [{ id: 1, name: 'Type A' }, { id: 2, name: 'Type B' }],
      containers: [{ id: 1, name: 'Container 1' }, { id: 2, name: 'Container 2' }, { id: 3, name: 'Container 3' }]
    }
  },
  methods: {
    save () {
      http.post('/container/maintenance', this.order).then(res => {
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
