// BoardDropdown.jsx

import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@site/src/components/ui/select"
import  {useBoardStore}  from "@site/src/lib/stores/store";

  const BoardDropdown = () => {
    const board = useBoardStore((state) => state.board);
    const handleBoardChange = (selectedBoard) => {
        // Verwende die setBoard-Funktion direkt, um das Board im Store zu aktualisieren
        useBoardStore.setState({ board: selectedBoard });
        // Hier kannst du weitere Aktionen ausführen, wenn sich das Board ändert
    };

  return (
    <Select onValueChange={(value)=>handleBoardChange(value)}>
    <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={board} />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="MCU">senseBoxMCU</SelectItem>
        <SelectItem value="S2">senseBoxMCU-S2</SelectItem>
    </SelectContent>
    </Select>
  );
};

export default BoardDropdown;
