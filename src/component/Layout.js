import Header from "./Header";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Compole from "./User/Compole";
import Admin from "./Admin/Admin";
import Composeuser from "./Admin/Composeuser";
import Group from "./Group/Getgroup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Showcmt from "./Home/Right_Home/GetCmmt";

const Layout = () => {
  const Account = useSelector((state) => state.accountThanh.Account);

  return (
    <>
      {/* <div style={{ width: 200, position: "absolute", top: 100 }}>
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              // sign out
            } else {
              navigate(key);
            }
          }}
          items={[
            { label: "Home", key: "/", icon: <HomeOutlined /> },
            {
              label: "Dashboard",
              key: "/dashboard",
              icon: <DashboardOutlined />,
            },
            {
              label: "UserList",
              key: "/userlist",
              icon: <UnorderedListOutlined />,
            },
            { label: "Profile", key: "/profile", icon: <UserOutlined /> },
            {
              label: "Signout ",
              key: "/signout",
              icon: <PoweroffOutlined />,
              danger: true,
            },
          ]}
        ></Menu>
      </div> */}

      <Routes>
        <Route path="/" element={<Header />}></Route>

        <Route path="/:id" element={<Compole />} />

        <Route path="/cmt/:id" element={<Showcmt />} />
        <Route path="admin" element={<Admin />}>
          <Route path="alluser" element={<Composeuser />} />
        </Route>
        <Route path="group" element={<Group />}></Route>
      </Routes>
    
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <div>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/Dashboard" element={<div>Dashboard</div>}></Route>
          <Route path="/UserList" element={<div>UserList</div>}></Route>
          <Route path="/Profile" element={<div>Profile</div>}></Route>
          <Route path="/Singout" element={<div>Singout</div>}></Route>
        </Routes>
      </div> */}
    </>
  );
};

export default Layout;
