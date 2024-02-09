import { Suspense } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/common/navbar/NavBar";
import { Loading } from "./components/common/loading/Loading";
import { FindShops } from "./components/pages/find-shops/FindShops";
import { ShopDetails } from "./components/pages/shop-details/ShopDetails";
import { Intro } from "./components/pages/intro/Intro";
import { ShopLogin } from "./components/pages/shop-login/ShopLogin";
import { ShopResetPassword } from "./components/pages/shop-reset-password/ShopResetPassword";
import { Shop } from "./components/pages/shop/Shop";
import { AdminAddShop } from "./components/pages/admin-add-shop/AdminAddShop";

export function AppView() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Box display="flex" sx={{ marginTop: "10px" }}>
          <Routes>
            <Route
              path={"/"}
              element={
                <Suspense fallback={<Loading messageId="loading" />}>
                  <Intro />
                </Suspense>
              }
            />
            <Route
              path={"/find-shops"}
              element={
                <Suspense fallback={<Loading messageId="loading" />}>
                  <FindShops />
                </Suspense>
              }
            />
            <Route
              path={"/shop-details"}
              element={
                <Suspense fallback={<Loading messageId="loading" />}>
                  <ShopDetails />
                </Suspense>
              }
            />
            <Route
              path={"/shop-login"}
              element={
                <Suspense fallback={<Loading messageId="loading" />}>
                  <ShopLogin />
                </Suspense>
              }
            />
            <Route
              path={"/shop-reset-password"}
              element={
                <Suspense fallback={<Loading messageId="loading" />}>
                  <ShopResetPassword />
                </Suspense>
              }
            />
            <Route
              path={"/shop"}
              element={
                <Suspense fallback={<Loading messageId="loading" />}>
                  <Shop />
                </Suspense>
              }
            />
            <Route
              path={"/admin-add-shop"}
              element={
                <Suspense fallback={<Loading messageId="loading" />}>
                  <AdminAddShop />
                </Suspense>
              }
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}
