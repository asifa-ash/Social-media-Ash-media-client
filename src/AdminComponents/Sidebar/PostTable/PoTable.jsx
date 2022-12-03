//  import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import "./PoTable.css";
// import { useDispatch, useSelector } from "react-redux";

// import { useEffect, useState } from "react";
// import { getAllPost } from "../../../api/PostsRequests";






// export default function BasicTable() {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.authReducer.authData);

//   const [allPost, setAllPost] = useState([]);

//   useEffect(() => {
//     const posts = async () => {
//       const { data } = await getAllPost();

//       setAllPost(data.reverse());
//     };
//     posts();
//   }, []);
//   console.log(allPost,"jjjjjjjjjjjjjjjjjj")



  

//   return (
//     <div className="potable">
//       <h3>Posts</h3>

//       <TableContainer
//         component={Paper}
//         style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//       >
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Post_Id</TableCell>
//               <TableCell align="left">Username</TableCell>
//               <TableCell align="left">User_Id</TableCell>
             
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {
//                 allPost.map((el) => 
              
//                 <TableRow
//                   key={el.name}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell align="left">{el._id}</TableCell>
//                   <TableCell align="left">{el.fullname}</TableCell>
//                   <TableCell align="left">{el.userId}</TableCell>

//                   <TableCell align="left">
                    
//                   </TableCell>
//                 </TableRow>
              
//             )}
//             {/* {allPost.map(el => {el.isReport==true?
             
//             ))} */}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

import React, { Component } from 'react'
import MaterialTable from 'material-table'
import ReactDOM from 'react-dom'



function Editable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ]);

  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);

  return (
    <MaterialTable
      title="Editable Preview"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
  )
}
export default Editable