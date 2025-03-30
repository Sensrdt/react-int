import React, { useState } from "react";

export default function TaskLists({ name, children}) {

  return (
    <div>
        <div style={{ minWidth: "200px", border: "1px solid black", padding: "10px" }}>
        <h3>{name}</h3>
        {children}
        </div>
    </div>
  );
}
