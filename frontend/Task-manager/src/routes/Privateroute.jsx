import React from "react";
import { Outlet } from "react-router-dom";
const Privateroute = ({allowedRoles}) => {
  return (
    <div>
      <Outlet/>
    </div>
  );
}
export default Privateroute;