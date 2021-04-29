<template>
<div>
<v-navigation-drawer
  v-model="drawer"
  clipped
  app
  :permanent="$vuetify.breakpoint.mdAndUp"
  dense
>
<v-list dense>
  <v-list-item link to="/">
    <v-list-item-action>
      <v-icon color='primary'>mdi-home</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>Home</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item link to="/workorder">
    <v-list-item-action>
      <v-icon color='primary'>work_outline</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>Work Order</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item link to="/user">
    <v-list-item-action>
      <v-icon color='primary'>people</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>User Mantainance</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item link to="/userlevel">
    <v-list-item-action>
      <v-icon color='primary'>person_outline</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>User Level</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item link to="/usertype">
    <v-list-item-action>
      <v-icon color='primary'>portrait</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>User Type</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item link to="/customer">
    <v-list-item-action>
      <v-icon color='primary'>emoji_people</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>Customer Mantainance</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item link to="/vehicle">
    <v-list-item-action>
      <v-icon color='primary'>local_shipping</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>Vehicle Mantainance</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item link to="/container">
    <v-list-item-action>
      <v-icon color='primary'>layers</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>Container Mantainance</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-list>
</v-navigation-drawer>
<v-app-bar clipped-left app dark color="primary" flat height="60">
<v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
<v-toolbar-title>MIDWEST</v-toolbar-title>
</v-app-bar>
</div>
</template>

<script>

export default {
  name: 'NavMenu',
  data: function () {
    return {
      drawer: null
    }
  }
}
</script>
<style>
</style>
