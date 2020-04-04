import React from "react";
import fackData from "../../fakeData";

const Inventory = () => {
  // fake data post database
  console.log(fackData);
  const hendleAddInventory = () => {
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      body: JSON.stringify(fackData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <h1>Inventory coming soon...</h1>
      <button onClick={hendleAddInventory}> Add Inventory</button>
    </div>
  );
};

export default Inventory;
