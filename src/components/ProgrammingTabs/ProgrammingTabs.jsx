import { Button } from "../ui/button";
import { useState } from "react";
import { useBoardStore } from "@site/src/lib/stores/store";
import CodeBlock from "@theme/CodeBlock";


// Gib den Kontext an, mit ein bisschen RegEx(https://regex101.com/)
const examples = require.context(
    "../../../docs/hardware/sensors",
    true,
    /\/(arduino-[^/]+\.ino|circuitpy-[^/]+\.py)$/,
);


// Funktion zum laden von Arduino und Python Code 
// der Ordernanme wird über das prop übergeben und muss IMMER mit 
// dem Ordnernamen des Sensors übereinstimmen.
function loadExample(sensor, fileName) {
    try {
        const example = examples(`./${sensor}/${fileName}`);
        return example.default ?? example;
    } catch {
        return null;
    }
}

export function ProgrammingTabs({ sensor, instructions }) {
    // State Variable für das Aktive Tab, default Wert am Anfang ist Arduino
    const [activeTab, setActiveTab] = useState("arduino");
    // Beim mounten der Komponente, werden alle nötigen Dateien geladen
    const board = useBoardStore((state) => state.board);
    const files = {
        arduino: loadExample(sensor, `arduino-${sensor}.ino`),
        circuitpython: loadExample(sensor, `circuitpy-${sensor}.py`),
    };

    const activeCode = files[activeTab];

    return (
        <div>
            <Button
                variant={activeTab === "arduino" ? "default" : "outline"}
                onClick={() => setActiveTab("arduino")}
            >
                Arduino
            </Button>

            {/* // Zeige CircuitPython nur wenn das Board  ne MCU-S2 ist */}
            { board === "MCU-S2" || board === ":edu S2" ?   <Button
                variant={activeTab === "circuitpython" ? "default" : "outline"}
                onClick={() => setActiveTab("circuitpython")}
            >
                CircuitPython
            </Button> : null }
            {activeCode ? (
                <div>
                    {instructions[activeTab]}
                     <CodeBlock language={activeTab === "arduino" ? "cpp" : "python"}>
                        {activeCode}
                    </CodeBlock>
                </div>
            ) : (
                <p>Für diesen Sensor ist kein Codebeispiel verfügbar.</p>
            )}
        </div>
    );
}