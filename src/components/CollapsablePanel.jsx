import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const CollapsablePanel = ({Title,Content}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className=" border border-black w-1/2">
      <div className=" flex">
        <div>
          <p>{Title}</p>
        </div>
        <div onClick={() => setCollapse(!collapse)}>
          {collapse ? <FaAngleDown /> : <FaAngleUp />}
        </div>
      </div>
      {collapse ? (
        <div>
          <p>{Content}</p>
        </div>
      ) : null}
    </div>
  );
};

export default CollapsablePanel;
