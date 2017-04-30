import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './route.config';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter); 
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
});


document.title = 'WorkSpace';
var _app=new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app');