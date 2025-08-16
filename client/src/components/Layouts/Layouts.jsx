import Navbar from "../Common/NavBar";
import Sidebar from "../Common/SideBar";
import { Outlet } from "react-router-dom";

const Layout = ({ userRole }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar userRole={userRole} className="w-1/5 bg-gray-900 text-white" />

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4 overflow-auto">
          <Outlet /> {/* <-- Renders child route content */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
