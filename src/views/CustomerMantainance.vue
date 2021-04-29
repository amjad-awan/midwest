<template>
 <div style="width: 100%">
      <v-card flat>
      <v-tabs
        v-model="tab"
      >
        <v-tab key='profile'>
          Profile
        </v-tab>
        <v-tab key='mailingaddress'>
          Mailing Address
        </v-tab>
        <v-tab key='billingaddress'>
          Billing Address
        </v-tab>
        <v-tab key='administrativecontact'>
          Administrative Contact
        </v-tab>
        <v-tab key='technicalcontact'>
          Technical Contact
        </v-tab>
        <v-tab key='billingcontact'>
          Billing Contact
        </v-tab>
        <v-tab key='customersettings'>
          Customer Settings
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
          <profile></profile>
          <mailing-address></mailing-address>
          <billing-address></billing-address>
          <admin-contact></admin-contact>
          <billing-contact></billing-contact>
          <tech-contact></tech-contact>
          <customer-settings></customer-settings>
      </v-tabs-items>
    </v-card>
 </div>
</template>

<script>

import Profile from '../components/Profile.vue'
import MailingAddress from '../components/MailingAddress.vue'
import BillingAddress from '../components/BillingAddress.vue'
import AdminContact from '../components/AdminContact.vue'
import BillingContact from '../components/BillingContact.vue'
import TechContact from '../components/TechContact.vue'
import CustomerSettings from '../components/CustomerSettings.vue'

export default {
  name: 'CustomerMantaince',
  components: {
    Profile,
    MailingAddress,
    BillingAddress,
    AdminContact,
    BillingContact,
    TechContact,
    CustomerSettings
  },
  data: function () {
    return {
      tab: ''
    }
  }
}
</script>
