import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const CollapsablePanel = ({Title,children,initalCollapse}) => {
  const [collapse, setCollapse] = useState(initalCollapse);

  return (
    <div className=" border border-black w-1/2">
      <div className=" flex">
        
        <div className="flex bg-gray-400 w-full justify-between py-2" onClick={() => setCollapse(!collapse)}>
          {Title}
          {collapse ? <FaAngleDown /> : <FaAngleUp />}
        </div>
      </div>
      {collapse ? (
        <div className=" bg-slate-100">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default CollapsablePanel;
