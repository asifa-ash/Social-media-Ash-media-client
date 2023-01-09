import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";
import Admin from "./pages/Admin/Admin";
import UserManagement from "./pages/UserManagement/UserManagement";
import PostManager from "./pages/PostManager/Postmanager";
import PostsManager from "./pages/PostsManger/PostsManager";

function App() {

  const user = useSelector((state) => state.authReducer.authData)
  let admin = false
  if (user) {
   
    admin = user.user.isAdmin
    console.log(admin,"gjgghhghvhgvhvhjb")
    // admin=false
  }


  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === `${process.env.REACT_APP_URL}/chat`
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        {/* <Route path="/" element={user ? <Navigate to="home" /> : <Navigate to="auth" />}/> */}
        {/* <Route path="/home" element={user ? <Home /> : <Navigate to="../auth" />}/> */}
        <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />}/>
        <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to="../auth" />} />
        <Route path="*" element={ <main style={{ padding: "1rem" }}><p>There's nothing here!</p> </main> }/>

        <Route path="/chat" element={user ? <Chat /> : <Navigate to="../auth" />} />

        <Route path="/admin" element={admin ? <Admin /> : <Navigate to="../auth" />}/>
        <Route path="/home" element={user ? (admin ? <Admin /> : <Home />) : <Navigate to="../auth" />} />
        <Route path="/" element={user ? (admin ? <Navigate to="admin" /> : <Navigate to="home" />) : <Navigate to="auth" />} />
        <Route path="/admin/user" element={user ? (admin ? <UserManagement /> : <Admin />) : <Navigate to="../auth" />} />

        <Route path="/user" element={user ? <UserManagement /> : <Navigate to="../auth" />}/>
        <Route path="/post" element={user ? <PostManager /> : <Navigate to="../auth" />}/>
        <Route path="/admin/post" element={user ? <PostManager /> : <Navigate to="../auth" />}/>
        <Route path="/posts" element={user ? <PostsManager /> : <Navigate to="../auth" />}/>
        <Route path="/admin/posts" element={user ? <PostsManager /> : <Navigate to="../auth" />}/>
      </Routes>
    </div>
  );
}

export default App;
