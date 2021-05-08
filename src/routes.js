import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import UserLayout from '@/layouts/UserLayout';
import Login from '@/pages/Login';

const routerConfig = [
  {
    path: '/dashboard',
    component: UserLayout,
    children: [
      {
        path:'/',
        component:Dashboard,
      },
      
    ],
  },
  {
    path:'/',
    component:BasicLayout,
    children:[
      {
        path: '/',
        component: Login,
      },
    ]
  }
];
export default routerConfig;
