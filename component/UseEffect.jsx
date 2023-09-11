import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div class="card">
      <div class="header">UseEffect</div>
      <div class="info">
        <p class="title">REACT / NEXT JS HOOKS COURSE</p>
        <p>
          Master ReactJs/ NextJs, by build project, check all the projects we
          have build{" "}
        </p>

        <ul>
          {users.map((user) => <li key={user.id}>{user.name}</li>).slice(0, 5)}
        </ul>
      </div>
      <div class="footer">
        <p class="tag">useState</p>
        <button onClick={() => {}} type="button" class="action">
          Increment{" "}
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
