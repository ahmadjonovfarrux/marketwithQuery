import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
