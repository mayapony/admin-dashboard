import { Home } from '@/pages/home/Home';
import { List } from '@/pages/list/List';
import { Login } from '@/pages/login/Login';
import { New } from '@/pages/new/New';
import { Single } from '@/pages/single/Single';
import { Root } from '@/Root';
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route path="new" element={<New />} />
      </Route>
      <Route path="products">
        <Route index element={<List />} />
        <Route path=":productsId" element={<Single />} />
        <Route path="new" element={<New />} />
      </Route>
    </Route>
  )
);

export default router;
