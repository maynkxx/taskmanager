import React from "react";
import { Outlet } from "react-router-dom";

// CHANGE component name to use PascalCase
const PrivateRoute = ({allowedRoles}) => {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

// CHANGE export name to use PascalCase
export default PrivateRoute;