import { Button } from "../ui/button";
import { useState } from "react";
import { useBoardStore } from "@site/src/lib/stores/store";
import CodeBlock from "@theme/CodeBlock";

export function ProgrammingTabs( { sensor } ) {

    const [activeTab, setActiveTab] = useState('arduino');

    const files = {
    arduino: loadExampleCode(sensor, `arduino-${sensor}.ino`),
    circuitpython: loadExampleCode(sensor, `circuitpy-${sensor}.py`)
    }

    const activeCode = files[activeTab]

    const examples = require.context(
        "../../../docs/hardware/sensors",
        true,
        /\/(arduino-[^/]+\.ino|circuitpy-[^/]+\.py)$/
    )

    function loadExampleCode(sensor, fileName) {
        try {
            const filePath = `./${sensor}/${fileName}`;
            const fileContent = examples(filePath);
            return fileContent.default ?? fileContent;
        } catch (error) {
            console.error(`Error loading example code for ${sensor}/${fileName}:`, error);
            return null;
        }
    }

    return (
        <>
            <div>
                <Button
                    variant={activeTab === 'arduino' ? "default" : "outline"}
                    onClick={() => setActiveTab('arduino')}
                >
                    Arduino
                </Button>
                <Button
                    variant={activeTab === 'circuitpython' ? "default" : "outline"}
                    onClick={() => setActiveTab('circuitpython')}
                >
                    Circuitpython
                </Button>

                <CodeBlock >
                    {activeCode}
                </CodeBlock>
            </div>
        </>
    
    )

}