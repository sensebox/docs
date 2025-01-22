// BoardDropdown.jsx

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@site/src/components/ui/select";
import { useBoardStore } from "@site/src/lib/stores/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
const BoardDropdown = () => {
  const board = useBoardStore((state) => state.board);
  const handleBoardChange = (selectedBoard) => {
    // Verwende die setBoard-Funktion direkt, um das Board im Store zu aktualisieren
    useBoardStore.setState({ board: selectedBoard });
    // Hier kannst du weitere Aktionen ausführen, wenn sich das Board ändert
  };

  return (
    <Select onValueChange={(value) => handleBoardChange(value)} default>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={board ? board : "Board auswählen"} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value=":edu">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          :edu
        </SelectItem>
        <SelectItem value=":edu S2">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          :edu S2
        </SelectItem>
        <SelectItem value=":home">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          :home
        </SelectItem>
        <SelectItem value=":bike">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          :bike
        </SelectItem>
        <SelectItem value=":CO2Traffic">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          CO2 Traffic Light
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default BoardDropdown;
