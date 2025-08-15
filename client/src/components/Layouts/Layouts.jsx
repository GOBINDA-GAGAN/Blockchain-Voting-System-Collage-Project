import Navbar from "../Common/NavBar";
import Sidebar from "../Common/SideBar";

const Layout = ({ children,userRole }) => {
  return (
    <div className="flex h-screen">
      <Sidebar userRole={userRole} className="w-1/5 bg-gray-900 text-white" />

      {/* Main Area */}
      <div className="flex flex-col flex-1">

        <Navbar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4 overflow-auto">
          {children || <div className="text-gray-500">Select an option...</div>}
        </main>
      </div>
    </div>
  );
};

export default Layout;
