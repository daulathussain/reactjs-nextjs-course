import React from "react";

const UseContext = ({ title }) => {
  return (
    <div class="card">
      <div class="header">UseContext</div>
      <div class="info">
        <p class="title">{title}</p>
        <p>
          Master ReactJs/ NextJs, by build project, check all the projects we
          have build{" "}
        </p>
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

export default UseContext;
