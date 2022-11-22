import React from "react";
// import Sidebar from "../../AdminComponents/Sidebar/Sidebar.js";
import MainDash from "../../AdminComponents/Sidebar/MainDash/MainDash.jsx";
import Ptable from "../../AdminComponents/Sidebar/Ptable/Ptable.jsx";
import Sidebar from "../../AdminComponents/Sidebar/Sidebar.jsx";
//  import MainDash from "../../AdminComponents/Sidebar/MainDash/";
//  import Sidebar from "../../AdminComponents/Sidebar/MainDash/MainDash.js"
import Table from "../../AdminComponents/Sidebar/Table/Table.jsx"
import "../../App.css";
const UserManagement = () => {
  return (
    <div className="admin">
      <div className="adminGlass">
       <Sidebar/>
       <Table/>
       
    
      </div>
    </div>
  );
};

export default UserManagement;
