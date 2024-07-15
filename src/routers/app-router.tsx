import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Loader } from "@/components/loader/loader";
import { MainLayout } from "@/layouts/main-layout";

const SignInPage = lazy(() => import("../pages/sign-in/page"));
const HomePage = lazy(() => import("../pages/home/page"));
const DetailsPage = lazy(() => import("../pages/details/page"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loader className="h-screen w-screen" />}>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
