/* eslint-disable prettier/prettier */

import { Route, Routes } from "react-router-dom";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={< DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/history" element={<History />}/>
      </Route>
    </Routes>
  )
}