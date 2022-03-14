import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Data() {
  const [result, setResult] = useState("");
  let token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/data`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setResult(result.data[0]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
  
      <div class="card" style={{width: "500px",margin:"5% auto "}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">FirstName :  {result.name}</li>
    <li class="list-group-item">Mobile :     {result.mobile}</li>
    <li class="list-group-item">Age : {result.age}</li>
    <li class="list-group-item">Delivery Type : {result.deliveryType}</li>

  </ul>
</div>
  );
}
