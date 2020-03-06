import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import BlankLayout from "../Layout/BlankLayout";
import HomeLayout from "../Layout/HomeLayout";

const HomeComponent = lazy(() => import("../pages/Home"));
const ArticleListComponent = lazy(() => import("../pages/ArticleList"));
const LoginComponent = lazy(() => import("../pages/Login"));
const TestComponent = lazy(() => import("../pages/Test"));


const SuspenseComponent = (Component: any) => (props: any) => {
  return (
    <Suspense fallback='Loading...'>
      <Component { ...props } />
    </Suspense>
  )
};

export default [
  {
    path: '/login',
    key: 'login',
    component: SuspenseComponent(LoginComponent),
  },
  {
    component: BlankLayout,
    path: '/',
    routes: [
      {
        component: HomeLayout,
        path: '/',
        routes: [
          {
            path: '/',
            key: '/',
            exact: true,
            hidden: true,
            render:() => <Redirect to="/home" />
          },
          {
            path: '/home/:id',
            key: 'home',
            name: '工作台',
            authority: 'guest',
            render: SuspenseComponent(HomeComponent),
          },
          {
            path: '/admin',
            key: 'admin',
            name: '文章管理',
            authority: 'root',
            component: SuspenseComponent(TestComponent),
            routes: [
              {
                path: '/admin/add/:id',
                key: 'add',
                name: '新增文章',
                hidden: true,
                component: SuspenseComponent(HomeComponent),
              },
              {
                path: '/admin/list',
                key: 'list',
                name: '文章列表',
                component: SuspenseComponent(ArticleListComponent),
              }
            ]
          },
        ]
      }
    ]
  }
]
