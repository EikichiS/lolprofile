import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            name: 'Search',
            path: '/',
            component: () => import('@/views/Search'),
        },
        {
            name: 'Profile',
            path: '/:name/:region',
            component: () => import('@/components/Profile'),

        },
    ],

});
