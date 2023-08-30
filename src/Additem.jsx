import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
function Additem(props) {
  const [line, setline] = useState(false);
  const cutit = () => {
    setline(!line);
  };
  const val = props.text;
  return (
    <>
      <div className="listitem">
        <Tooltip title="Delete">
          <span onClick={cutit}>
            <DeleteIcon className="delete" />
          </span>
        </Tooltip>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {" "}
          {val}
        </li>
      </div>
    </>
  );
}

export default Additem;
