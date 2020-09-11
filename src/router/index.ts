import Login from '@/views/Login';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { routes as PortfolioRoutes } from '@/views/Portfolio';
import Signup from '@/views/Signup';
import ResetPassword from '@/views/ResetPassword.vue';
import ConfirmEmail from '@/views/ConfirmEmail.vue';
import Timeline from '@/components/Timeline.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...PortfolioRoutes,
  {
    path: '/timeline',
    name: 'timeline',
    component: Timeline
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/emailconfirmation',
    name: 'confirmEmail',
    component: ConfirmEmail,
    props: route => ({
      token: route.query.token,
      tokenId: route.query.tokenId
    })
  },
  {
    path: '/password-reset',
    name: 'resetPassword',
    component: ResetPassword,
    props: route => ({
      token: route.query.token,
      tokenId: route.query.tokenId
    })
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
