<template>
<v-app>
<v-snackbar
  v-model="snackbar"
  :color="color"
  :top="true"
  :right="true"
  :timeout="timeout"
  >
  {{ message }}
  <v-btn
    dark
    text
    @click="snackbar = false"
  >
    CLOSE
  </v-btn>
</v-snackbar>
 <v-dialog v-model="successdialog" persistent max-width="350">
  <v-card>
    <v-card-title></v-card-title>
    <v-card-text style="text-align:center;">
      <h3 class="headline"> Success </h3>
      <v-icon color="primary" height="200" class="mt-3"> check_circle_outline </v-icon>
      <h4 class="mt-5"> Record updated Successfully </h4>
      <v-btn color="primary" width="100"  class="text-center mt-6" text  outlined @click="closeDialog">OK</v-btn>
    </v-card-text>
  </v-card>
</v-dialog>
<nav-menu/>
<v-main>
  <v-container fluid>
    <router-view></router-view>
  </v-container>
</v-main>
</v-app>
</template>

<script>
import http from '../http'
import NavMenu from './NavMenu'
import { mapState } from 'vuex'

export default {
  name: 'Dash',
  components: {
    NavMenu
  },
  data: function () {
    return {
    }
  },
  methods: {
    closeDialog () {
      this.$store.dispatch('alert/closeSuccessDialog')
    }
  },
  computed: {
    ...mapState({
      color: state => state.alert.color,
      timeout: state => state.alert.timeout,
      message: state => state.alert.message,
      successdialog: state => state.alert.successdialog
    }),
    snackbar: {
      get: function () {
        return this.$store.state.alert.snackbar
      },
      set: function (newValue) {
        this.$store.state.alert.snackbar = newValue
      }
    }
  }
}
</script>

<style>
</style>
