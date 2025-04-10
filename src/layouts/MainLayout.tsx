
import { Outlet } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-bank-gray flex">
      <MainNavigation />
      <div className="flex-1 md:ml-64 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
