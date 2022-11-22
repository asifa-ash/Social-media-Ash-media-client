import React from "react";
import Sidebar from "../../AdminComponents/Sidebar/Sidebar";
import Ptable from "../../AdminComponents/Sidebar/Ptable/Ptable.jsx";

function Postmanager() {
  return (
    <div className="admin">
      <div className="adminGlass">
        <Sidebar />

        <Ptable />
      </div>
    </div>
  );
}

export default Postmanager;
