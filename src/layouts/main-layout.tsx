import { Outlet } from "react-router-dom";

import Header from "@/components/header/header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
    </>
  );
};
