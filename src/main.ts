import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import http from "./tools/http";
import App from "./app.vue";

import "./static/css/app.css";

Vue.use(VueRouter);

Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.config.silent = true;

const v = new Vue({
    el: "#app",
    router,
    render: (h) => h(App),
});
