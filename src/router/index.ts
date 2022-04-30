import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [{
    path: '/', name: 'home', component: HomeView
}, {
    path: '*', component: () => import('../views/NotFoundView.vue')
}];

const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes, scrollBehavior() {
        window.scrollTo(0, 0);
    }
});

export default router;
