import React from "react";
import BlocklyEsp from "@site/static/img/blockly_esp.png";
import BlocklyMcu from "@site/static/img/blockly_mcu.png";
import { useBoardStore } from "@site/src/lib/stores/store";

const BoardSelection = ({ setOpen }) => {
  const board = useBoardStore((state) => state.board);
  const handleBoardChange = (selectedBoard) => {
    // Verwende die setBoard-Funktion direkt, um das Board im Store zu aktualisieren
    useBoardStore.setState({ board: selectedBoard });
    setOpen(false);
    // Hier kannst du weitere Aktionen ausführen, wenn sich das Board ändert
  };

  return (
    <div>
      Welches Board benutzt du?
      <hr></hr>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col align-baseline   ">
          <div className="m-4 p-2 rounded-full hover:bg-gray-100">
            <button
              className="bg-transparent border-none focus:outline-none"
              onClick={(e) => handleBoardChange("MCU")}
            >
              <img
                src={BlocklyMcu}
                alt="Image 2"
                className="object-cover rounded-full border-solid border-1 border-gray cursor-pointer"
              />
            </button>
          </div>
          <div className="text-center mt-2">MCU</div>
        </div>
        <div className="flex flex-col align-baseline ">
          <div className="m-4 p-2 rounded-full hover:bg-gray-100">
            <button
              className="bg-transparent border-none focus:outline-none"
              onClick={(e) => handleBoardChange("MCU-S2")}
            >
              <img
                src={BlocklyEsp}
                alt="Image 1"
                className="object-cover rounded-full border-solid border-1 border-gray cursor-pointer"
              />
            </button>
          </div>

          <div className="text-center mt-2">MCU-S2</div>
        </div>
      </div>
      <hr></hr>
      Du kannst die Auswahl jederzeit ändern.
    </div>
  );
};

export default BoardSelection;
