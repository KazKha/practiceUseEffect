import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";


function UserListing() {

  const [dataId, setdataId] = useState(1);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // api with fetch
    // async function fectUserData() {
    //   const fetchData = await fetch(
    //     `https://hub.dummyapis.com/employee?noofRecords=${data}&idStarts=${dataId}`
    //   );
    //   const res = await fetchData.json();
    //   setUserList(res);
    // }
    // fectUserData();
    axios
      .get(
        `https://hub.dummyapis.com/employee?noofRecords=20&idStarts=${dataId}`
      )
      .then((response) => {
        setUserList(response.data);
        console.log( response.data);
        document.title = ` ${response.data.length}  records `;
      });
  }, [dataId]);

  const buttonHalders = (params) => {
    if (params === true) {
      setdataId(dataId + 20);
    } else if (params === false && dataId > 20) {
      setdataId(dataId - 20);
    }
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          buttonHalders(false);
        }}
      >
        Prev page
      </button>

      <button
        onClick={() => {
          buttonHalders(true);
        }}
      >
        Next page
      </button>
      <br />
      <br />

      <div>
        <h2> User Records </h2>
        <table>
          <thead>
            <tr>
              <th> Srno </th>
              <th> Name </th>
              <th> Email </th>
              <th> Phone </th>
              <th> Dob </th>
              <th> Age </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {item.id}</td>
                  <td>
                    <Link to={`/user-detail/:${item.id}`}>
                      {item.firstName} {item.lastName}
                    </Link>
                  </td>
                  <td> {item.email} </td>
                  <td> {item.contactNumber} </td>
                  <td> {item.dob} </td>
                  <td> {item.age} </td>
                  <td> </td>
                </tr>
              );
            })}
          </tbody>
          
          <tfoot>
            <tr>
              <th> Srno </th>
              <th> Name </th>
              <th> Email </th>
              <th> Phone </th>
              <th> Dob </th>
              <th> Age </th>
            </tr>
          </tfoot>
        </table>
      </div>
      
      
    </div>
  );
}

export default UserListing;
