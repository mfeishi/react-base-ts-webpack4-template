import Home from '@/pages/home';
import Header from '@/pages/header';
import { lazy } from 'react';

// const Header=lazy(()=>import('@/pages/header/index'))
// const Home=lazy(()=>import('@/pages/home/index'))

const routes:any[] = [{
    name:"home",
    path:'/home',
    component:lazy(()=>import('@/pages/home/index'))
},{
    name:"header",
    path:'/header',
    component:lazy(()=>import('@/pages/header/index'))

}]


export default routes;