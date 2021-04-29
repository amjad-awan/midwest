<template>
  <v-tab-item key="mantainance">
    <v-card flat class="mt-3" min-height="400">
      <v-card-text>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="User Pin"
              outlined
              dense
              v-model="order.userPin"
            ></v-text-field>
          </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="User Password"
              outlined
              dense
              v-model="order.userPassword"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="4">
              <v-select
                :items="questions"
                label="Security Question 1"
                item-value='id'
                item-text='name'
                dense
                outlined
                v-model='order.securityQuestion1'
            ></v-select>
          </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="Security Answer 1"
              outlined
              dense
              v-model="order.securityAnswer1"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="4">
              <v-select
                :items="questions"
                label="Security Question 2"
                item-value='id'
                item-text='name'
                dense
                outlined
                v-model='order.securityQuestion2'
            ></v-select>
          </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="Security Answer 2"
              outlined
              dense
              v-model="order.securityAnswer2"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="4">
              <v-select
                :items="questions"
                label="Security Question 3"
                item-value='id'
                item-text='name'
                dense
                outlined
                v-model='order.securityQuestion3'
            ></v-select>
          </v-col>
           <v-col cols="12" sm="6" md="4" offset-md="1">
           <v-text-field
              label="Security Answer 3"
              outlined
              dense
              v-model="order.securityAnswer3"
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
  name: 'Security',
  data: () => {
    return {
      order: {},
      questions: [{ id: 1, name: 'Question 1' }, { id: 2, name: 'Question 2' }, { id: 3, name: 'Question 3' }]
    }
  },
  methods: {
    save () {
      http.post('/user/security', this.order).then(res => {
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
