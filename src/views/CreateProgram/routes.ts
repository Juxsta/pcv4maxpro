import { RouteConfig } from 'vue-router';
import CreateProgram from './CreateProgram.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/createprogram',
    name: 'createprogram',
    component: CreateProgram,
    meta: {
      requiresAuth: true,
      requiresUser: true
    }
  }
];

export default routes;
