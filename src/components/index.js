import ViewMain from './ViewMain'
import JkHeader from './JkHeader'
import JkFooter from './JkFooter'


export default {
  install (Vue, options) {
    Vue.component('view-main', ViewMain);
    Vue.component('jk-header', JkHeader);
    Vue.component('jk-footer', JkFooter);
  }
}
