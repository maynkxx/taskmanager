import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import ManageTask from "./pages/Admin/ManageTask";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUser from "./pages/Admin/ManageUser";
import UserDashboard from "./pages/User/UserDashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />

          {/*Admin routes*/}
          <Route element ={<Privateroute allowedRoles={["admin"]}/>}> </Route>
          <Route path="/admin/dashboard" element={<div>Dashboard</div>} />
          <Route path="/admin/Managetask" element={<div>Managetask</div>} />
          <Route path="/admin/Createtask" element={<div>Createtask</div>} />
          <Route path="/admin/Manageuser" element={<div>Manageuser</div>} />
          
          {/*User routes*/}
          <Route element ={<Privateroute allowedRoles={["user"]}/>}> </Route>
          <Route path="/user/dashboard" element={<div>UserDashboard</div>} />
          <Route path="/user/MyTasks" element={<div>MyTasks</div>} />
          <Route path="/user/profile" element={<div>Profile</div>} />
          <Route path="/user/task-details/:id" element={<div>ViewTaskDetails</div>} />

        </Routes>
      </Router>

    </div>
  );
}
export default App;