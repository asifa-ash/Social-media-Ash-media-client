
import React from "react";
import Sidebar from "../../AdminComponents/Sidebar/Sidebar";
import Potable from "../../AdminComponents/Sidebar/PostTable/PoTable"

function PostsManager() {
    return (
        <div className="admin">
          <div className="adminGlass">
            <Sidebar />
    
            <Potable/>
          </div>
        </div>
      );
}

export default PostsManager