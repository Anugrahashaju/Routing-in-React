// routes.js , stores all the routes in my application

import { createBrowserRouter as browserRouter } from "react-router";

import { Component } from "react";
import HomePage from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Layout from "./src/pages/Layout";
import ProductList from "./src/pages/products/Products";

const routes = [
  {
    Component: Layout,
    children: [
      { path: "/home", Component: HomePage},
      { path: "/login", Component:Login},
      {path:"/signup", Component:Signup},
      {path:"/products",Component:ProductList}
    ],
  },
];

export const router = browserRouter(routes);
