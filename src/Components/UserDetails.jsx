import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from 'react-router-dom';


const UserDetails = () => {

    const userId   = useParams();
    const [singleData, setSingleData] = useState()
    document.title = 'User-Detail';
    useEffect(() => {
        axios
          .get(
            `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId.id}`
          )
          .then((response) => {
            setSingleData( response.data );
           
          });
          document.title = 'User-Detail';

      }, [userId.id]);
    return (
        <div>
            { singleData.firstName }
            {/* {
                singleData.map((items, index) => {
                    return(
                        <p>

                        {items.firstName} {items.lastName} <br/>
                        {items.email}  <br/>
                        {items.contactNumber}  <br/>
                        {items.dob}  <br/>
                        {items.age}  <br/>
                        </p>
                    )
                })
            } */}

        </div>
    );
}

export default UserDetails;
