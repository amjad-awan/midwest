<template>
<div style="width: 100%">
    <v-row>
      <v-col cols="12" md="3">
        <v-card height="150px" class="container">
          <v-card-text style="height: 100px; margin: auto;">
                <p class="no item primary--text"> 50 </p>
                <p class="item txt"> Work Orders </p>
                <v-btn text class="item btn secondary--text" to="/workorder" small> View More </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" offset-md='1'>
        <v-card height="150px" class="container">
          <v-card-text style="height: 100px; margin: auto;">
                <p class="no item primary--text"> 20 </p>
                <p class="item txt"> Users </p>
                <v-btn text class="item btn secondary--text" to="/user" small> View More </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" offset-md='1'>
        <v-card height="150px" class="container">
          <v-card-text style="height: 100px; margin: auto;">
                <p class="no item primary--text"> 300 </p>
                <p class="item txt"> Customers </p>
                <v-btn text class="item btn secondary--text" small to="/customer"> View More </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="11">
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
</div>
</template>

<script>

export default {
  name: 'Home',
  data: () => {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Work Order', value: 'workOrder' },
        { text: 'Purchase Order', value: 'purchaseOrder' },
        { text: 'Driver', value: 'driver' },
        { text: 'Customer', value: 'customer' },
        { text: 'Status', value: 'status' }
      ],
      items: [
        { id: 1, workOrder: 'Order 1', purchaseOrder: '86667', driver: 'Driver 1', customer: 'John Doe', status: 'COMPLETE' },
        { id: 2, workOrder: 'Order 2', purchaseOrder: '36487', driver: 'Driver 2', customer: 'John Doe', status: 'COMPLETE' },
        { id: 3, workOrder: 'Order 3', purchaseOrder: '43345', driver: 'Driver 3', customer: 'John Doe', status: 'COMPLETE' },
        { id: 4, workOrder: 'Order 4', purchaseOrder: '45436', driver: 'Driver 4', customer: 'John Doe', status: 'COMPLETE' },
        { id: 5, workOrder: 'Order 5', purchaseOrder: '123324', driver: 'Driver 5', customer: 'John Doe', status: 'COMPLETE' },
        { id: 6, workOrder: 'Order 6', purchaseOrder: '234234', driver: 'Driver 6', customer: 'John Doe', status: 'COMPLETE' },
        { id: 7, workOrder: 'Order 7', purchaseOrder: '234234', driver: 'Driver 7', customer: 'John Doe', status: 'COMPLETE' }
      ]
    }
  }
}
</script>
<style>
.item{
  text-align: center;
  width: 200px;
}
.txt{
  font-weight: 600;
}
.no{
  font-weight: 700;
  color: black;
}
.container {
    display: flex;
    align-items: center;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th{
  color: green;
}
</style>
