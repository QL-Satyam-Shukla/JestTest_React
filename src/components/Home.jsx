import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter your name"
        id="userId"
        name="username"
        onChange={() => {
          console.log("first");
        }}
        value="Satyam Shukla"
      /> */}
      <h3>Test Click Event With Button</h3>
      <button onClick={() => {
        setData("Updated Data")
      }}>Update Data</button>
      <h3>{data}</h3>
      <label htmlFor="input3">Your Username</label>
      <input type="text" id='input3' value="satyam" disabled/>
      <button>click 1</button>
      <button>click 2</button>
      <label htmlFor="input1">User Name</label>
      <input type='text'  id='input1'/>
      <label htmlFor="input2">User Age</label>
      <input type='text' id='input2'/>

      <div role='dummy div'>
        dummy text 
      </div>
    </div>
  );
};

export default Home;
