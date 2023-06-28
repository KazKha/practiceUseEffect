import { useState, useEffect } from "react";
import "./App.css";
import Headers from "./Components/Headers";
import axios from "axios";
 

function App() {
  const [data, setData] = useState(20);
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
     axios.get(`https://hub.dummyapis.com/employee?noofRecords=${data}&idStarts=${dataId}`)
     .then((response) => {
       setUserList( response.data )
        console.log(response.data);

     })
    document.title = `( ${userList.length} ) records `
  }, [ dataId ]);

  const buttonHalders = (params) =>{
    
    if (params === true  ){ 
      setdataId(dataId + 20)``
    }else if (params === false  && dataId > 20) { 
      setdataId( dataId - 20 ) 
       }
   
  }

  return (
    <div className="App">
      <Headers />
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

      <ul  style= { {textAlign:"left"} }>
          {
            userList.map ( (item, index ) => {
              return(
                <li className ="ul-list-user" key = {index} > {item.id} , {item.firstName} {item.lastName} , {item.email} , {item.age} </li>
              )
            })
          }
      </ul>
      
    </div>
  );
}

export default App;
