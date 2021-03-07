import { RouteConfig } from 'vue-router';
import Guide from './Guide.vue';
import Bar from './Bar.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/explore',
    name: 'Guide',
    component: Guide
  }
];

export default routes;
