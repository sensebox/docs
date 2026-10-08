// import { Button } from "../ui/button";
// import { useState } from "react";
// import { useBoardStore } from "@site/src/lib/stores/store";
// import CodeBlock from "@theme/CodeBlock";

// const examples = require.context(
//   "../../../docs/hardware",
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


// import { Button } from "../ui/button";
// import { useState } from "react";
// import { useBoardStore } from "@site/src/lib/stores/store";
// import CodeBlock from "@theme/CodeBlock";

// const examples = require.context(
//   "../../../docs/hardware",
//   true,
//   /\/[^/]+\.(ino|py)$/
// );


// function loadExampleCode(filePath) {
//   try {
//     const fileContent = examples(filePath);
//     return fileContent.default ?? fileContent;
//   } catch (error) {
//     console.warn(`Error loading example code for ${filePath}:`, error);
//     return null;
//   }
// }

// export default function ProgrammingTabs({
//   arduinoFile,
//   circuitpythonFile,
//   instructions = {}
// }) {

//   const [activeTab, setActiveTab] = useState("arduino");

//   const board = useBoardStore((state) => state.board);

//   const files = {
//     arduino: loadExampleCode(arduinoFile),
//     circuitpython: loadExampleCode(circuitpythonFile)
//   };

//   const activeCode = files[activeTab];

//   return (
//     <div>
//       <Button
//         variant={activeTab === "arduino" ? "default" : "outline"}
//         onClick={() => setActiveTab("arduino")}
//       >
//         Arduino
//       </Button>

//       <Button
//         variant={activeTab === "blockly" ? "default" : "outline"}
//         onClick={() => setActiveTab("blockly")}
//       >
//         Blockly
//       </Button>

//       {(board === "MCU-S2" || board === ":edu S2") && (
//         <Button
//           variant={
//             activeTab === "circuitpython" ? "default" : "outline"
//           }
//           onClick={() => setActiveTab("circuitpython")}
//         >
//           CircuitPython
//         </Button>
//       )}
    
//       {activeTab !== "blockly" ? (
//         activeCode ? (
//           <>
//             {instructions[activeTab]}

//             <CodeBlock
//               language={activeTab === "arduino" ? "cpp" : "python"}
//             >
//               {activeCode}
//             </CodeBlock>
//           </>
//         ) : (
//           <p>No example code available for {activeTab}.</p>
//         )
//       ) : (
//         <div>{instructions.blockly || null}</div>
//       )}
//     </div>
//   );
// }

// des

import { Button } from "../ui/button";
import { useState } from "react";
import { useBoardStore } from "@site/src/lib/stores/store";
import CodeBlock from "@theme/CodeBlock";

const examples = require.context(
  "../../../docs/hardware",
  true,
  /\/[^/]+\.(ino|py)$/
);

function loadExampleCode(fileName, extension) {
  const filePath = examples
    .keys()
    .find((path) => path.endsWith(`/${fileName}.${extension}`));

  if (!filePath) {
    return null;
  }

  try {
    const fileContent = examples(filePath);
    return fileContent.default ?? fileContent;
  } catch (error) {
    console.warn(`Error loading example code for ${filePath}:`, error);
    return null;
  }
}

export default function ProgrammingTabs({
  fileName,
  instructions = {},
  notes = {}
}) {
  const [selectedTab, setActiveTab] = useState("arduino");

  const board = useBoardStore((state) => state.board);

  const files = {
    arduino: loadExampleCode(fileName, "ino"),
    circuitpython: loadExampleCode(fileName, "py")
  };

  const availableTabs = [
    { value: "arduino", label: "Arduino", available: !!files.arduino?.trim() },
    { value: "blockly", label: "Blockly", available: !!instructions.blockly },
    {
      value: "circuitpython",
      label: "CircuitPython",
      available:
        (board === "MCU-S2" || board === ":edu S2") &&
        !!files.circuitpython?.trim()
    }
  ].filter((tab) => tab.available);

  const activeTab = availableTabs.some((tab) => tab.value === selectedTab)
    ? selectedTab
    : availableTabs[0]?.value;
  const activeCode = files[activeTab];

  if (!activeTab) {
    return null;
  }

  return (
    <div>
      {availableTabs.map((tab) => (
        <Button
          key={tab.value}
          variant={activeTab === tab.value ? "default" : "outline"}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </Button>
      ))}

      {activeTab !== "blockly" ? (
        activeCode ? (
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
        )
      ) : (
        <div>{instructions.blockly || null}</div>
      )}
      {notes[activeTab] && (
        <div>{notes[activeTab]}</div>
      )}
    </div>
  );
}
