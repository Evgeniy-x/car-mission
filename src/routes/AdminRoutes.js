import React from "react";
import { Routes, Route } from "react-router-dom";
// import FormContainerMainPageSections from "../components/admin/MainPageSections/FormContainer/FormContainer";
// import FormContainerAboutUs from "../components/admin/AboutUs/FormContainer/FormContainerAboutUs";
// import FormContainerWorkStages from "../components/admin/WorkStages/FormContainer/FormContainerWorkStages";
// import FormContainerServicePakages from "../components/admin/ServicePakages/FormContainer/FormContainerServicePackages";
// import Page404 from "../pages/Page404/Page404";
// import FormContainerReviewCarousel from "../components/admin/ReviewCarousel/FormContainer/FormContainerReviewCarousel";
// import FormContainerSocialNetworks from "../components/admin/SocialNetworks/FormContainer/FormContainerSocialNetworks";
// import FormContainerBlogs from "../components/admin/Blogs/FormContainer/FormContainerBlogs";
// import AdminsWrapper from "../components/admin/AdminUsers/AdminsWrapper/AdminsWrapper";
// import { decodeUser } from "../utils/functions/decodeUser";
// import FormContainerLogo from "../components/admin/Logo/FormConatiner/FormContainerLogo";
// import FormContainerNavbar from "../components/admin/Navbar/FormContainer/FormContainerNavbar";
// import Callbacks from "../components/admin/Callbacks/Main/Callbacks";

const AdminRoutes = () => {
  // const { isOwner } = decodeUser().decoded;

  return (
    <Routes>
      <Route exact path="/admin/" />
      <Route exact path="/admin/navbar" element={FormContainerNavbar} />
      <Route exact path="/admin/logo" element={FormContainerLogo} />
      <Route
        exact
        path="/admin/main-page-sections"
        element={FormContainerMainPageSections}
      />
      <Route exact path="/admin/about-us" element={FormContainerAboutUs} />
      <Route
        exact
        path="/admin/work-stages"
        element={FormContainerWorkStages}
      />
      <Route
        exact
        path="/admin/social-networks"
        element={FormContainerSocialNetworks}
      />
      <Route
        exact
        path="/admin/service-packages"
        element={FormContainerServicePakages}
      />
      <Route
        exact
        path="/admin/reviews"
        element={FormContainerReviewCarousel}
      />
      <Route exact path="/admin/callback-requests" element={Callbacks} />
      <Route exact path="/admin/blogs" element={FormContainerBlogs} />
      {isOwner && <Route exact path="/admin/users" element={AdminsWrapper} />}
      <Route path="*" element={Page404} />
    </Routes>
  );
};

export default AdminRoutes;
