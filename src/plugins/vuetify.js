import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#004d40',
        secondary: '#009688',
        accent: '#009688',
        error: '#B2DFDB'
      },
      dark: {
        primary: '#303F9F'
      }
    }
  }
})
