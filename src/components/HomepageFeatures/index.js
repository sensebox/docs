import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ArduinoCategoryIcon from "@site/static/img/category-icons/arduino.png";
import BlocklyCategoryIcon from "@site/static/img/category-icons/blockly.png";
import HardwareCategoryIcon from "@site/static/img/category-icons/hardware.png";
import openSenseMapCategoryIcon from "@site/static/img/category-icons/osem.png";
import homeCategoryIcon from "@site/static/img/category-icons/home.png";
import senseBoxCategoryIcon from "@site/static/img/category-icons/senseBox.png";
import miscCategoryIcon from "@site/static/img/category-icons/allgemein.png";
const FeatureList = [
  {
    title: "Blockly",
    Image: BlocklyCategoryIcon,
    description: (
      <>Informationen zur visuellen Programmierumgebung Blockly für senseBox.</>
    ),
    to: "/docs/category/blockly",
  },
  {
    title: "Arduino",
    Image: ArduinoCategoryIcon,
    description: <>Erste Schritte mit deiner senseBox und der Arduino IDE</>,
    to: "/docs/category/arduino",
  },
  {
    title: "Hardware & Komponenten",
    Image: HardwareCategoryIcon,
    description: (
      <>
        Informationen zum Anschluss und Programmierung der Sensoren, Bees und
        weiteren Bauteilen
      </>
    ),
    to: "/docs/category/hardware",
  },
  {
    title: "Verschiedenes",
    Image: miscCategoryIcon,
    description: <>Verschiedene Dokumentationen zur senseBox</>,
    to: "/docs/category/verschiedenes",
  },
  {
    title: "senseBox:home",
    Image: homeCategoryIcon,
    description: <>Informationen zum Aufbau & Erweiterungen</>,
    to: "/docs/category/senseboxhome",
  },
  {
    title: "openSenseMap",
    Image: openSenseMapCategoryIcon,
    description: (
      <>
        Informationen zur API, zum Verwalten der senseBox, zum Datendownload,
        luftdaten.info, hackAIR
      </>
    ),
    to: "/docs/category/opensensemap",
  },
  {
    title: "senseBox:tutorials",
    Image: senseBoxCategoryIcon,
    description: <>Informationen zum Aufbau & Erweiterungen</>,
    to: "/docs/category/tutorials",
  },
];

function Feature({ Image, title, description, to }) {
  return (
    <Link
      className={clsx(
        "w-[25%] flex flex-col items-center text-black border-2 border-solid border-slate-100 shadow-2xl rounded-lg hover:no-underline hover:text-green transition duration-300 ease-in-out hover:scale-105 hover:shadow-4xl p-4 "
      )}
      to={to}
    >
      <div className="">
        <img src={Image} alt={title} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className="flex flex-row flex-wrap justify-center gap-6 pt-4">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
