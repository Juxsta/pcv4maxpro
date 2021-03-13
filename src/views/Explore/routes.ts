import { RouteConfig } from 'vue-router';
import Guide from './Guide.vue';
import Bar from './Bar.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/explore',
    name: 'explore',
    component: Guide,
    meta: {
      layout: 'no-nav',
      requiresAuth: false,
      requiresUser: false
    }
  }
];

export default routes;
