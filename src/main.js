import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store/user';
import router from '@/router/index';
import vuetify from '@/plugins/vuetify';
import Amplify from 'aws-amplify';
import aws_exports from '@/aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.ignoredElements = [/amplify-\w*/];

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
