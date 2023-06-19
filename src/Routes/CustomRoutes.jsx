import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const Component1Lazy = lazy(() => import("../Components/C1"));
const Component2Lazy = lazy(() => import("../Components/C2"));
const Component3Lazy = lazy(() => import("../Components/C3"));
const Component4Lazy = lazy(() => import("../Components/C4"));
const Component5Lazy = lazy(() => import("../Components/C5"));
const NavbarLazy = lazy(() => import("../Components/Navbar"));

const CustomRoutes = () => {
  return (
    <div>
      <Suspense fallback={<p>................loading</p>}>
        <Routes>
          <Route path="/" element={<NavbarLazy />}>
            <Route path="/1" element={<Component1Lazy />} />
            <Route path="/2" element={<Component2Lazy />} />
            <Route path="/3" element={<Component3Lazy />} />
            <Route path="/4" element={<Component4Lazy />} />
            <Route path="/5" element={<Component5Lazy />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default CustomRoutes;
