import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/login"; // Use "./pages/Auth/Login" if your file is Login.jsx
import Signup from "./pages/Auth/Signup";
import ManageTask from "./pages/Admin/ManageTask";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUser from "./pages/Admin/ManageUser";
import UserDashboard from "./pages/User/UserDashboard";
// NEW: This correctly looks for ./routes/PrivateRoute (relative to src/)
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Routes: Protected and nested */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/managetask" element={<ManageTask />} />
          <Route path="/admin/createtask" element={<CreateTask />} />
          <Route path="/admin/manageuser" element={<ManageUser />} />
        </Route>

        {/* User Routes: Protected and nested */}
        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/mytasks" element={<div>MyTasks</div>} />
          <Route path="/user/profile" element={<div>Profile</div>} />
          <Route path="/user/task-details/:id" element={<div>ViewTaskDetails</div>} />
        </Route>

        {/* Fallback 404 Route */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;