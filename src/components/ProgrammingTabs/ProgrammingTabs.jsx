import { Button } from "../ui/button";
import { useState } from "react";
import { useBoardStore } from "@site/src/lib/stores/store";
import CodeBlock from "@theme/CodeBlock";

export function ProgrammingTabs() {
    const [activeTab, setActiveTab] = useState('arduino');

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
                    variant={activeTab === 'python' ? "default" : "outline"}
                    onClick={() => setActiveTab('Circuitpython')}
                >
                    Circuitython
                </Button>
            </div>
        </>
    
    )

}