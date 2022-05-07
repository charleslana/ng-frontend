import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateCharacterView from '../views/CreateCharacterView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [{
    path: '/', name: 'home', component: HomeView
}, {
    path: '/create-character', name: 'create-character', component: CreateCharacterView
}, {
    path: '*', component: () => import('../views/NotFoundView.vue')
}];

const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes, scrollBehavior() {
        window.scrollTo(0, 0);
    }
});

export default router;
