import Vue from 'vue'

// Vue Components
import Notification from './components/Notification.vue'
import Launchpad from './components/Launchpad.vue'
import LazyLoad from './plugins/lazyload'

function init() {
  new Vue({
    el: '#app',
    components: { Notification, Launchpad },
    mounted() {
      LazyLoad()
    }
  })
}

init()
