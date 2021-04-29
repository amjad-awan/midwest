<template>
  <v-tab-item key="linedetails">
    <v-card flat class="mt-3">
      <v-card-text>
        <v-row dense align="center">
            <v-col cols="12" sm="6" md="3">
             <v-select
            :items="items"
            label="Item ID"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.item.itemId'
          ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              label="QTY"
              outlined
              dense
              v-model="order.item.quantity"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
            <v-text-field
              label="Charge"
              outlined
              dense
              v-model="order.item.charge"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
            <v-text-field
              label="Total"
              outlined
              dense
              v-model="order.item.total"
              readonly
            ></v-text-field>
        </v-col>
        </v-row>
         <v-row dense align="center">
            <v-col cols="12" sm="6" md="3">
             <v-select
            :items="items"
            label="Item ID"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.item.itemId'
          ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              label="QTY"
              outlined
              dense
              v-model="order.item.quantity"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
            <v-text-field
              label="Charge"
              outlined
              dense
              v-model="order.item.charge"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
            <v-text-field
              label="Total"
              outlined
              dense
              v-model="order.item.total"
              readonly
            ></v-text-field>
        </v-col>
        </v-row>
         <v-row dense align="center">
            <v-col cols="12" sm="6" md="3">
             <v-select
            :items="items"
            label="Item ID"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.item.itemId'
          ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              label="QTY"
              outlined
              dense
              v-model="order.item.quantity"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
            <v-text-field
              label="Charge"
              outlined
              dense
              v-model="order.item.charge"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
            <v-text-field
              label="Total"
              outlined
              dense
              v-model="order.item.total"
              readonly
            ></v-text-field>
        </v-col>
        </v-row>
         <v-row dense align="center">
            <v-col cols="12" sm="6" md="3">
             <v-select
            :items="items"
            label="Item ID"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.item.itemId'
          ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              label="QTY"
              outlined
              dense
              v-model="order.item.quantity"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
            <v-text-field
              label="Charge"
              outlined
              dense
              v-model="order.item.charge"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
            <v-text-field
              label="Total"
              outlined
              dense
              v-model="order.item.total"
              readonly
            ></v-text-field>
        </v-col>
        </v-row>
         <v-row dense align="center">
            <v-col cols="12" sm="6" md="3">
             <v-select
            :items="items"
            label="Item ID"
            item-value='id'
            item-text='name'
            dense
            outlined
            v-model='order.itemId'
          ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              label="QTY"
              outlined
              dense
              v-model="order.qty"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
            <v-text-field
              label="Charge"
              outlined
              dense
              v-model="order.charge"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
            <v-text-field
              label="Total"
              outlined
              dense
              v-model="order.total"
              readonly
            ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
        <v-col cols="12" sm="4">
            <v-text-field
              label="Total"
              outlined
              dense
              v-model="order.allTotal"
              readonly
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
  name: 'LineDetails',
  data: () => {
    return {
      order: { item: {} },
      items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }]
    }
  },
  methods: {
    save () {
      http.post('/work-order/linedetail', this.order).then(res => {
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
