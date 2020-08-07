import Vue from 'vue'
// import LazyLoad from 'vanilla-lazyload'

// Vue Components
import Notification from './components/Notification.vue'
import Launchpad from './components/Launchpad.vue'
import lazyLoad from './plugins/lazyload'

function init() {
  new Vue({
    el: '#app',
    components: { Notification, Launchpad },
    mounted() {
      lazyLoad.init()
    }
  })
}

init()
