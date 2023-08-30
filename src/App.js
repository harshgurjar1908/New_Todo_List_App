import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Additem from "./Additem";

function App() {
  const [newitem, setitem] = useState("");

  const itemevent = (event) => {
    setitem(event.target.value);
  };

  const [items, additem] = useState([]);

  const Update = () => {
    if (newitem.length === 0) {
      return alert("Please enter item name");
    }
    additem((prev) => {
      return [...prev, newitem];
    });
    setitem("");
  };
  const clearall = () => {
    additem([]);
  };

  return (
    <>
      <div className="main">
        <div className="headings">
          <h1>ToDo List</h1>
        </div>
        <div className="input">
          <TextField
            id="input"
            label="Add an item"
            variant="standard"
            onChange={itemevent}
            value={newitem}
          />
          <Tooltip title="Add">
            <Button onClick={Update}>
              <AddIcon />
            </Button>
          </Tooltip>
          <br />
          <Tooltip title="Clear All">
            <Button onClick={clearall}>
              <ClearAllIcon />
            </Button>
          </Tooltip>
        </div>
        <div className="items">
          <ol className="list">
            {items.map((val, index) => {
              return <Additem key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;
