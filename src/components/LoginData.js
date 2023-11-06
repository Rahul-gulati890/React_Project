import React from 'react'
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from './Data';


const LoginData = () => {
  return (
    <>
      <div style={{ margin: "1rem" }} >
        <Table striped bordered hover size="sm" className="table-secondary">
          <thead>
            <tr>
              <th>
                Client Names
              </th>
              <th>
                No.of Login Users
              </th>
            </tr>
          </thead>
          <tbody>
            {
                Data && Data.length > 0
                ?
                Data.map((item)=>{
                    return(
                        <tr>
                            <td>
                                {item.Name}
                            </td>
                            <td>
                                {item.Count}
                            </td> 
                        </tr>
                    )
                })
                :
                "No Data Availble"
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default LoginData
