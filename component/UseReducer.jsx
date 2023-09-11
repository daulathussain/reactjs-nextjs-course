import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div class="card">
      <div class="header">{state.count == 0 ? "UseReducer" : state.count}</div>
      <div class="info">
        <p class="title">REACT / NEXT JS HOOKS COURSE</p>
        <p>
          Master ReactJs/ NextJs, by build project, check all the projects we
          have build{" "}
        </p>
      </div>
      <div class="footer">
        <button onClick={() => handleIncrement()} type="button" class="action">
          Increment{" "}
        </button>
        <button onClick={() => handleDecrement()} type="button" class="action">
          Decrement{" "}
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
