import React from "react";
// import Sidebar from "../../AdminComponents/Sidebar/Sidebar.js";
import MainDash from "../../AdminComponents/Sidebar/MainDash/MainDash.jsx";
import Sidebar from "../../AdminComponents/Sidebar/Sidebar.jsx";
//  import MainDash from "../../AdminComponents/Sidebar/MainDash/";
//  import Sidebar from "../../AdminComponents/Sidebar/MainDash/MainDash.js"
import Table from "../../AdminComponents/Sidebar/Table/Table.jsx"
import "../../App.css";
const Admin = () => {
  return (
    <div className="admin">
      <div className="adminGlass">
       <Sidebar/>
       {/* <Table/> */}
       <MainDash/>
      </div>
    </div>
  );
};

export default Admin;
