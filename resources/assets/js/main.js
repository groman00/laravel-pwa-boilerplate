import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './routers/app';


// Components
//import appBar from './components/app-bar.vue';

//const eventHub = Vue.prototype.eventHub = new Vue(); // Create a new instance of Vue to use as an event hub.

// Register Components
//Vue.component('app-bar', appBar);

//Vue.use(VueResource);

// Vue.directive('mdl', (el, binding) => {
//     Vue.nextTick(() => {
//         window.componentHandler.upgradeElements(el);
//     });
// });

// serviceWorker(eventHub);
// omnitureStart();

(new Vue({
    router,
    created() {}
}).$mount('#app'));
