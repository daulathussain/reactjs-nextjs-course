import React, { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div class="card">
      <div class="header">{count == 0 ? "UseState" : count}</div>
      <div class="info">
        <p class="title">REACT / NEXT JS HOOKS COURSE</p>
        <p>
          Master ReactJs/ NextJs, by build project, check all the projects we
          have build{" "}
        </p>
      </div>
      <div class="footer">
        <p class="tag">useState</p>
        <button onClick={() => handleIncrement()} type="button" class="action">
          Increment{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
