import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "@site/static/img/mcus2/mcus2top.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@site/src/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@site/src/components/ui/popover";
import { Button } from "@site/src/components/ui/button";
import mcus2ports from "@site/static/img/mcus2/mcus2-ports.png";
import lightSensor from "@site/static/img/hardware-bilder/helligkeit-uv/sensor_helligkeit_uv.png";
import display from "@site/static/img/hardware-bilder/oled/display.png";
import tempSensor from "@site/static/img/hardware-bilder/temperatur-luftfeuchte/sensor_temperatur_luftfeuchte.png";
import pressureSensor from "@site/static/img/hardware-bilder/luftdruck/bmp_top.png";
import tofSensor from "@site/static/img/hardware-bilder/tof/tofsensor.png";
import ledMatrix from "@site/static/img/hardware-bilder/led-matrix/led-matrix.png";
import i2cdaiychain from "@site/static/img/hardware-bilder/i2c/i2c-daisy-chain.png";
import ImageWithText  from "@site/src/components/ImageWithText/ImageWithText"


// Positions of the different elements
const usbPort = {
  x: 40,
  y: 180,
  width: 40,
  height: 40,
};

const MCUS2Board = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [targetSize, setTargetSize] = useState({ width: 0, height: 0 });
  const handleTextHover = (targetX, targetY, width, height) => {
    // Update state to show the arrow and set its position
    setTargetPosition({ x: targetX, y: targetY });
    setTargetSize({ width, height });
    setShowArrow(true);
  };

  const handleTextLeave = () => {
    // Hide the arrow when leaving the text
    setShowArrow(false);
  };

  return (
    <div className="flex w-full flex-col items-center text-center gap-4">
      <div >
        <img src={mcus2ports} alt="Your Image" className="" />{" "}
      </div>
      <div className="flex w-full flex-col">
        <h1 className="text-left"> Anschlüsse </h1>
        <div className="flex flex-row justify-evenly">
          <Popover>
            <PopoverTrigger className="flex  cursor-pointer bg-white border-solid border-1 rounded-md w-[10rem] p-2 hover:bg-gray-100">
              I2C/Wire Ports
            </PopoverTrigger>
            <PopoverContent>
              <div>
                <h2>Sensoren und Accessoire an den I2C/Wire Ports</h2>

                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col items-center">
                    <img
                      src={lightSensor}
                      alt="Your Image"
                      className="w-[5rem] lg:w-[10rem]"
                    />
                    <p className=" text-gray-500">Lichtsensor</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={tempSensor}
                      alt="Your Image"
                      className="w-[5rem] lg:w-[10rem]"
                    />
                    <p className=" text-gray-500">Temperatur und Luftfeuchte</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={pressureSensor}
                      alt="Your Image"
                      className="w-[5rem] lg:w-[10rem]"
                    />
                    <p className=" text-gray-500">Luftdruck</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={tofSensor}
                      alt="Your Image"
                      className="w-[5rem] lg:w-[10rem]"
                    />
                    <p className=" text-gray-500">Time of Flight(Tof)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={display}
                      alt="Your Image"
                      className="w-[5rem] lg:w-[10rem]"
                    />
                    <p className=" text-gray-500">Display</p>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="cursor-pointer bg-white border-solid border-1 rounded-md w-[10rem] p-2 hover:bg-gray-100">
              Digital/Analog Ports
            </PopoverTrigger>
            <PopoverContent>
              <div>
                <h2>Sensoren und Accessoire an den Digital/Analog Ports</h2>
                <div className="flex flex-row justify-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={ledMatrix}
                      alt="Your Image"
                      className="w-[5rem] lg:w-[10rem]"
                    />
                    <p className="text-gray-500">LED-Matrix</p>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-left">I2C/Wire Daisy Chain</h1>
        <p className="text-left">
        Eine I2C-Daisy-Chain ermöglicht die einfache und effiziente Verbindung mehrerer Geräte in einer seriellen Kommunikationskette unter Verwendung des I2C-Protokolls. Durch die Daisy-Chain-Konfiguration kann jedes Gerät in der Kette Daten senden und empfangen. Diese Methode ist besonders nützlich in Anwendungen, bei denen Platz und Ressourcen begrenzt sind, da sie die Anzahl der benötigten physischen Verbindungen minimiert und gleichzeitig eine robuste und zuverlässige Datenkommunikation ermöglicht.
        </p>
        <div className="flex justify-center">
          <ImageWithText src={i2cdaiychain} title="I2C/Wire Daisy Chain" />

        </div>
      </div>
    </div>
  );
};

export default MCUS2Board;
