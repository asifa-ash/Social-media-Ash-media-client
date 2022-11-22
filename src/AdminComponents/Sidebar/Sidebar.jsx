import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../img/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../AdminData/data";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/AuthActions";
import { UilEstate } from "@iconscout/react-unicons";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Ash <span>M</span>edia
        </span>
      </div>
      {/* menu  */}
      <div className="menu">
     
        <div
          className={selected === 0 ? "menuItem active" : "menuItem"}
          key={0}
          onClick={() => setSelected(0)}
        >
         <div> <UilEstate /> </div>
         <Link to="/admin"  style={{textDecoration: 'none',color:"black"}}>
          <span>DashBoard</span>
          </Link>
        </div>
        
       
        <div
          className={selected === 1 ? "menuItem active" : "menuItem"}
          key={1}
          onClick={() => setSelected(1)}
        >
          <div><UilEstate /></div>
          <Link to="/admin/user" style={{textDecoration: 'none',color:"black"}}>
          <span>Users</span>
          </Link>
        </div>
       

        <div
          className={selected === 2 ? "menuItem active" : "menuItem"}
          key={2}
          onClick={() => setSelected(2)}
        >
          <div><UilEstate /></div>
          <Link to="/admin/post" style={{textDecoration: 'none',color:"black"}}>
          <span>Posts</span>
          </Link>
        </div>

        <div
          className={selected === 3 ? "menuItem active" : "menuItem"}
          key={3}
          onClick={() => setSelected(3)}
        >
          <div><UilEstate /></div>
          <span>Analytic</span>
        </div>

        <div className="menuItem">
          <UilSignOutAlt onClick={handleLogOut} />
          {/* <span>Sign Out</span> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
