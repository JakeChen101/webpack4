import App from './App'
import router from './routers'
import vuex from './store'

import components from './components'
Vue.use(components);

window.vm = new Vue({
  el: '#app',
  router,
  vuex,
  render: h => h(App)
});
