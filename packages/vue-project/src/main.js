import Vue from "vue";
import App from "./App.vue";
import simpleProject from "simple-project";

Vue.config.productionTip = false;

simpleProject()

new Vue({
  render: h => h(App)
}).$mount("#app");
