import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { FlashTool } from "@sensebox/flash-tool";
import "@sensebox/flash-tool/style.css";

export default function CircuitPythonFlash(props) {
  return (
    <BrowserOnly fallback={<div>Lade Flash-Tool...</div>}>
      {() => <FlashTool {...props} />}
    </BrowserOnly>
  );
}
