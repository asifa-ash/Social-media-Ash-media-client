import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Ptable.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { deleteRPost, getAllPost } from "../../../api/PostsRequests";
import { deletePost } from "../../../actions/PostsAction";





export default function BasicTable() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    const posts = async () => {
      const { data } = await getAllPost();

      setAllPost(data.reverse());
    };
    posts();
  }, []);


  const handleDeleteReportPost=(id)=>{
    
    deleteRPost(id,user._id)
  }

  console.log(allPost, "susuuuuuuuuuuuuuuuuuuuuuuuuu");

  return (
    <div className="ptable">
      <h3>Reported Posts</h3>

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Post_Id</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">User_Id</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPost.map((el) => {
              return el.isReport === true ? (
                <TableRow
                  key={el.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{el._id}</TableCell>
                  <TableCell align="left">{el.fullname}</TableCell>
                  <TableCell align="left">{el.userId}</TableCell>

                  <TableCell align="left">
                    <button className="button" onClick={()=>handleDeleteReportPost(el._id)}>Delete Post</button>
                  </TableCell>
                </TableRow>
              ) : (
                ""
              );
            })}
            {/* {allPost.map(el => {el.isReport==true?
             
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
