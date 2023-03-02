import React from 'react';
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import MainMobile from "../pages/MainMobile";
import MyAccount from "../pages/MyAccount";
import MyOrder from "../pages/MyOrder";
import MyOrders from "../pages/MyOrders";
import NewPass from "../pages/NewPass";
import ProductDetails from "../pages/ProudctDetails";
import RecoveryPass from "../pages/RecoveryPass";
import ShoppingCart from "../pages/ShoppingCart";
import SignOut from "../pages/SignOut";
import NotFound from "../pages/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CreateAccount" element={<CreateAccount />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/MainMobile" element={<MainMobile />} />
            <Route exact path="/MyAccount" element={<MyAccount />} />
            <Route exact path="/MyOrder" element={<MyOrder />} />
            <Route exact path="/MyOrders" element={<MyOrders />} />
            <Route exact path="/NewPass" element={<NewPass />} />
            <Route exact path="/ProductDetails" element={<ProductDetails />} />
            <Route exact path="/recoveryPass" element={<RecoveryPass />} />
            <Route exact path="/ShoppingCart" element={<ShoppingCart />} />
            <Route exact path="/SignOut" element={<SignOut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
		</BrowserRouter>
    </AppContext.Provider>
  )
}

export default App