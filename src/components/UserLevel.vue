<template>
 <div style="width: 100%">
 <v-card>
     <v-card-text>
    <v-row>
        <v-col cols="12" md="4">
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
        <v-col cols="12" sm="6" md="4">
           <v-text-field
              label="Level Description"
              outlined
              dense
              v-model="order.levelDescription"
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
  name: 'UserLevel',
  data: () => {
    return {
      order: {},
      userlevels: [{ id: 1, name: 'Level 1' }, { id: 2, name: 'Level 2' }, { id: 3, name: 'Level 3' }, { id: 4, name: 'Level 4' }]
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
