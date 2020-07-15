import React from "react";
import "./styles.css";
import CheckboxContainer from "./CheckboxContainer";

const CHECKBOXES_LIST = [
  { name: "Item 1", isChecked: false },
  { name: "Item 2", isChecked: false },
  { name: "Item 3", isChecked: false },
  { name: "Item 4", isChecked: false }
];

export default function App() {
  return (
    <div className="App">
      <CheckboxContainer list={CHECKBOXES_LIST} />
    </div>
  );
}
