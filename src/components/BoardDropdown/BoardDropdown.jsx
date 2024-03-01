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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
  const BoardDropdown = () => {
    const board = useBoardStore((state) => state.board);
    const handleBoardChange = (selectedBoard) => {
        // Verwende die setBoard-Funktion direkt, um das Board im Store zu aktualisieren
        useBoardStore.setState({ board: selectedBoard });
        // Hier kannst du weitere Aktionen ausführen, wenn sich das Board ändert
    };

  return (
    <Select onValueChange={(value)=>handleBoardChange(value)} default>
    <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={board ? board: "Board auswählen"} />
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="senseBoxMCU">
            <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
             MCU</SelectItem>
        <SelectItem value="senseBoxMCU-S2">
        <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
             MCU-S2
        </SelectItem>
    </SelectContent>
    </Select>
  );
};

export default BoardDropdown;
