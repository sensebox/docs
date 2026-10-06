import { Button } from "../ui/button";
import { useState } from "react";
import { useBoardStore } from "@site/src/lib/stores/store";
import CodeBlock from "@theme/CodeBlock";

const examples = require.context(
    "../../../docs/hardware/sensors",
    true,
    /\/(arduino-[^/]+\.ino|circuitpy-[^/]+\.py)$/
)

function loadExampleCode(sensor, fileName) {
    try {
        const filePath = `./${sensor}/${fileName}`;
        // const fileContent = examples(filePath);
        return filePath.default ?? filePath;
    } catch (error) {
        console.error(`Error loading example code for ${sensor}/${fileName}:`, error);
        return null;
    }
}

export function ProgrammingTabs( { sensor, instructions } ) {


    const [activeTab, setActiveTab] = useState('arduino');

    const board = useBoardStore((state) => state.board);

    const files = {
        arduino: loadExampleCode(sensor, `arduino-${sensor}.ino`),
        circuitpython: loadExampleCode(sensor, `circuitpy-${sensor}.py`)
    }

    const activeCode = files[activeTab]

    return (
        <>
            <div>
                <Button
                    variant={activeTab === 'arduino' ? "default" : "outline"}
                    onClick={() => setActiveTab('arduino')}
                >
                    Arduino
                </Button>
                
                {(board === "MCU-S2" || board === ":edu S2") && <Button
                    variant={activeTab === 'circuitpython' ? "default" : "outline"}
                    onClick={() => setActiveTab('circuitpython')}
                >
                    Circuitpython
                </Button>}
                    {activeCode ? (
                        <>
                            {instructions[activeTab]}
                            <CodeBlock language={activeTab === 'arduino' ? 'cpp' : 'python'}>
                                {activeCode}
                            </CodeBlock>
                        </>
                    ) : (
                        <p>No example code available for {sensor} in {activeTab}.</p>
                    )}
            </div>
        </>
    )
}