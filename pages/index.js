import React, { useContext } from "react";
//INTERNAL IMPORT
import UseState from "../component/UseState";
import UseContext from "../component/UseContext";
import UseEffect from "../component/UseEffect";
import UseRef from "../component/UseRef";
import UseReducer from "../component/UseReducer";

import { NFTContext } from "../context/useContext";

const index = () => {
  const { NFT_MARKETPLACE } = useContext(NFTContext);
  return (
    <div className="center">
      <h1>MASTER REACTJS/NEXTJS HOOKS COURSE</h1>
      <UseState />
      {/* <UseEffect /> */}
      {/* <UseContext title={NFT_MARKETPLACE} /> */}
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
    </div>
  );
};

export default index;
