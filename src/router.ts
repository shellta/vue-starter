import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: require("./views/home.vue").default,
    },
    {
        path: "*",
        redirect: "/",
    },
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
});

export default router;
