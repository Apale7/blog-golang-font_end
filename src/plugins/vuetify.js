import Vue from "vue";
import Vuetify from "vuetify/lib";
// import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#6becff',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                anchor: '#8c9eff',
            },
            dark: {
                primary: '#716d6d',
            },
        },
        dark: false,
    },
});
