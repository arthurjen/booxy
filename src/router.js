import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Booxy from './components/Booxy.vue'
import Scootsy from './components/Scootsy.vue'


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/Booxy', component: Booxy },
    { path: '/Scootsy', component: Scootsy }
  ]
});