// src/Layout.js

import React from 'react';
import BoardDropdown from '@site/src/components/BoardDropdown/BoardDropdown';
import { useBoardStore } from "@site/src/lib/stores/store";

const Layout = ({ children, title }) => {
  const board = useBoardStore((state) => state.board);

  const handleBoardChange = (selectedBoard) => {
    useBoardStore.setState({ board: selectedBoard });
    // Hier kannst du weitere Aktionen ausführen, wenn sich das Board ändert
  };

  return (
    <div>
      <div className='flex flex-row items-baseline justify-between mb-4'> 
        <h1> {title}</h1>
        <BoardDropdown onChange={handleBoardChange} value={board} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
