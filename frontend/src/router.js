import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Join from '@/pages/Join/Join';
import Login from '@/pages/Login/Login';
import Error from '@/pages/Error/Error';

import List from '@/pages/Typography/List'
import Write from '@/pages/Typography/Write'
import Edit from '@/pages/Typography/Edit'
import View from '@/pages/Typography/View'
import Search from "@/pages/Typography/Search";

Vue.use(Router);

export default new Router({
    data: {
        postIdx: ''
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: Login,
            component: Login,
        },
        {
            path: '*',
            redirect: '/error'
        },
        {
            path: '/error',
            name: 'Error',
            component: Error,
        },

        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/join',
            name: 'Join',
            component: Join,
        },
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: 'board',
                    redirect: '/board/list',
                    component: List
                },
                {
                    path: '/board/list',
                    name: 'List',
                    component: List,
                },
                {
                    path: '/board/view/:postidx',
                    name: 'View',
                    component: View,
                },
                {
                    path: '/board/write',
                    name: 'Write',
                    component: Write,
                },
                {
                    path: '/board/edit/:postidx',
                    name: 'Edit',
                    component: Edit,
                },
                {
                    path: '/board/search',
                    name: 'Search',
                    component: Search,
                    props: (keyword) => ({query: keyword.query.q})
                }
            ],
        },
    ],
});
