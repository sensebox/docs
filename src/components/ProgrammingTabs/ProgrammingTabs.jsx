import { Button } from "../ui/button";
import { useId, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
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
  const animationId = useId();
  const reduceMotion = useReducedMotion();

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
    <div className="bg-[#f2f2f2] text-black dark:bg-[#1a1e2b] dark:text-white shadow-lg shadow-black/30 rounded-3xl m-2 p-4">
      <LayoutGroup id={animationId}>
        <div className="mb-4 flex justify-evenly w-full gap-2 overflow-x-auto">
          {availableTabs.map((tab) => (
            <Button
              key={tab.value}
              type="button"
              variant="ghost"
              aria-pressed={activeTab === tab.value}
              className="relative isolate flex-1 cursor-pointer text-black hover:bg-transparent hover:text-black dark:text-white dark:hover:text-white"
              onClick={() => setActiveTab(tab.value)}
            >
              {activeTab === tab.value && (
                <motion.span
                  layoutId="active-tab-highlight"
                  aria-hidden="true"
                  initial={false}
                  className="pointer-events-none absolute inset-0 rounded-md bg-[var(--ifm-color-primary)] shadow-sm"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 450, damping: 35 }
                  }
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </Button>
          ))}
        </div>
      </LayoutGroup>

      {activeTab !== "blockly" ? (
        activeCode ? (
          <>
            {instructions[activeTab]}

            <CodeBlock
              className="m-2"
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
