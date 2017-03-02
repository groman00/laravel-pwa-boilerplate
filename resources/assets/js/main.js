import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './routers/app';

const eventHub = Vue.prototype.eventHub = new Vue(); // Create a new instance of Vue to use as an event hub.

// Components
//import appBar from './components/app-bar.vue';

// Register Components
//Vue.component('app-bar', appBar);

Vue.use(VueResource);

(new Vue({
    router,
    created() {}
}).$mount('#app'));
