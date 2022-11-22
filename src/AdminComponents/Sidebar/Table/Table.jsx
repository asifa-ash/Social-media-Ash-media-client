import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useSelector } from "react-redux";
import { getAllUser, updateAdmin } from "../../../api/UserRequests";
import { useEffect, useState } from "react";
function createData(name, username, edit, id, report) {
  return { name, username, edit, id, report };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setAllUsers(data);
    };
    fetchPersons();
  }, []);

  const handleBlock = (userId) => {
    const data = { isBlock: true };

    updateAdmin(userId, user._id, data);
  };



  const handleUnBlock = (userId) => {
    const data = { isBlock: false };

    updateAdmin(userId, user._id, data);
  };



  console.log(allUsers, "ellaaaaaaaaaaa");

  return (
    <div className="table">
      <h3>Users</h3>

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Edit</TableCell>
              <TableCell align="left">Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.firstname}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                {!row.isBlock ? (
                  <TableCell align="left">
                    <button
                      className="button"
                      onClick={() => handleBlock(row._id)}
                    >
                      Block
                    </button>
                  </TableCell>
                ) : (
                  <TableCell align="left">
                    <button
                      className="button"
                      onClick={() => handleUnBlock(row._id)}
                    >
                      UnBlock
                    </button>
                  </TableCell>
                )}

                <TableCell align="left">{row._id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
