import React from "react";
import { Redirect, Routes, Route } from "react-router-dom";
// import AdminPage from "../pages/AdminPage/AdminPage";
// import LoginPage from "../pages/LoginPage/LoginPage";
// import UserAppPage from "../pages/UserAppPage/UserAppPage";
// import { useSelector } from "react-redux";
// import { getIsAuth } from "../store/auth/selectors";

const AppRoutes = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <Routes>
      <ProtectedRoute
        authenticated={isAuth}
        path="/admin"
        element={AdminPage}
      />
      <Route exact path="/login">
        {!isAuth ? <LoginPage /> : <Redirect to="/admin" />}
      </Route>
      <Route path="/" element={UserAppPage} />
    </Routes>
  );
};

export default AppRoutes;

const ProtectedRoute = ({ authenticated, ...props }) =>
  authenticated ? <Route {...props} /> : <Redirect to="/login" />;
