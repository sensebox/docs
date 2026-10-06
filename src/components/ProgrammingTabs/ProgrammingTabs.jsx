// import { Button } from "../ui/button";
// import { useState } from "react";
// import { useBoardStore } from "@site/src/lib/stores/store";
// import CodeBlock from "@theme/CodeBlock";

// const examples = require.context(
//   "../../../docs/hardware/sensors",
//   true,
//   /\/(arduino\/[^/]+\.ino|circuitpython\/[^/]+\.py)$/
// )

// function loadExampleCode(project, language, sensor) {
//     const extension = language === "arduino" ? ".ino" : ".py"
//     try {
//         const filePath = `./${project}/${language}/${sensor}${extension}`;
//         const fileContent = examples(filePath);
//         return fileContent.default ?? fileContent;
//     } catch (error) {
//         console.error(`Error loading example code for ${project}/${language}/${sensor}${extension}:`, error);
//         return null;
//     }
// }

// export default function ProgrammingTabs( { project, sensor, instructions = {} } ) {

//     const [activeTab, setActiveTab] = useState('arduino');

//     const board = useBoardStore((state) => state.board);

//     const files = {
//         arduino: loadExampleCode(project, "arduino", sensor),
//         circuitpython: loadExampleCode(project, "circuitpython", sensor)
//     }

//     const activeCode = files[activeTab]

//     return (
//             <div>
//                 <Button
//                     variant={activeTab === 'arduino' ? "default" : "outline"}
//                     onClick={() => setActiveTab('arduino')}
//                 >
//                     Arduino
//                 </Button>
                
//                 {(board === "MCU-S2" || board === ":edu S2") && <Button
//                     variant={activeTab === 'circuitpython' ? "default" : "outline"}
//                     onClick={() => setActiveTab('circuitpython')}
//                 >
//                     Circuitpython
//                 </Button>}
//                     {activeCode ? (
//                         <>
//                             {instructions[activeTab]}
//                             <CodeBlock language={activeTab === 'arduino' ? 'cpp' : 'python'}>
//                                 {activeCode}
//                             </CodeBlock>
//                         </>
//                     ) : (
//                         <p>No example code available for {sensor} in {activeTab}.</p>
//                     )}
//             </div>
//     )
// }

//des


import { Button } from "../ui/button";
import { useState } from "react";
import { useBoardStore } from "@site/src/lib/stores/store";
import CodeBlock from "@theme/CodeBlock";

const examples = require.context(
  "../../../docs/hardware",
  true,
  /\/(arduino\/[^/]+\.ino|circuitpython\/[^/]+\.py)$/
);


function loadExampleCode(filePath) {
  try {
    const fileContent = examples(filePath);
    return fileContent.default ?? fileContent;
  } catch (error) {
    console.error(`Error loading example code for ${filePath}:`, error);
    return null;
  }
}

export default function ProgrammingTabs({
  arduinoFile,
  circuitpythonFile,
  instructions = {}
}) {
      console.log("arduinoFile:", arduinoFile);
  console.log("circuitpythonFile:", circuitpythonFile);
  const [activeTab, setActiveTab] = useState("arduino");

  const board = useBoardStore((state) => state.board);

  const files = {
    arduino: loadExampleCode(arduinoFile),
    circuitpython: loadExampleCode(circuitpythonFile)
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

      {(board === "MCU-S2" || board === ":edu S2") && (
        <Button
          variant={
            activeTab === "circuitpython" ? "default" : "outline"
          }
          onClick={() => setActiveTab("circuitpython")}
        >
          CircuitPython
        </Button>
      )}

      {activeCode ? (
        <>
          {instructions[activeTab]}

          <CodeBlock
            language={activeTab === "arduino" ? "cpp" : "python"}
          >
            {activeCode}
          </CodeBlock>
        </>
      ) : (
        <p>No example code available for {activeTab}.</p>
      )}
    </div>
  );
}