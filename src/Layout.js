// src/Layout.js

import React from "react";
import BoardDropdown from "@site/src/components/BoardDropdown/BoardDropdown";

const Layout = ({ children, title }) => {
  return (
    <div>
      <div className="flex flex-row items-baseline justify-between mb-4">
        <h1> {title}</h1>
        <BoardDropdown />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
