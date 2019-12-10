import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: '#1e82a8',
        primary: '#4d5f66',
        accent: '#82B1FF',
        success: '#00b4ff',
        info: '#a7bfc9',
        warning: '#c49225',
        error: '#c71818'
      }
    }
  }
})
