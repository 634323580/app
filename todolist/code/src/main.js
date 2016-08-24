import Vue from 'vue'
import App from './App'
import Resource from 'vue-resource'
Vue.use(Resource);
Vue.http.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
Vue.http.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
