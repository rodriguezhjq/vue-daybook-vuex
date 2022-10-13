import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/styles.scss'

createApp(App)
    .use( store)
    .use( router )
    .mount('#app')
    
//Para usar el store de Vuex se debe colocar .use ( store )
//Para definir el uso de SASS para los estilos, se debe instalar: yarn add -D sass-loader@10 sass
//Se debe crear un archivo styles.scss e importarlo en el main de la siguiente manera: import './styles/styles.scss'
