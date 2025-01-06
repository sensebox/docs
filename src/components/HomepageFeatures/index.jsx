import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'
import Translate, {translate} from '@docusaurus/Translate';
import LogoSensebox from '@site/static/img/logo.svg'
import osem from '@site/static/img/osem.png'
import blockly from '@site/static/img/blockly.png'
import hardware from '@site/static/img/hardware.jpg'
import { useBoardStore } from '@site/src/lib/stores/store'

const FeatureList = [
  {
    title: ':edu S2',
    description: (
      <Translate>
        Die zweite Generation der senseBox:edu für den Einsatz im
        Bildungsbereich. Klicke hier für alle nötigen Informationen!
      </Translate>
    ),
    to: '/docs/boards/mcus2/mcu-s2-overview',
  },
  {
    title: ':edu',
    description: (
      <Translate>
        Informationen zum Anschluss und zur Programmierung der senseBox:edu für
        den Einsatz im Bildungsbereich
      </Translate>
    ),
    to: '/docs/boards/mcu/mcu-overview',
  },
  {
    title: ':bike',
    description: (
      <Translate>
        Anleitung und Informationen zur senseBox:bike, der dazugehörigen App und
        der Installation der Fahrradhalterung
      </Translate>
    ),
    to: '/docs/category/bike',
  },
  {
    title: ':CO2 Ampel',
    description: (
      <Translate>
        Informationen zum Anschluss und Programmierung der Sensoren, Bees und
        weiteren Bauteilen für Bildungszwecke
      </Translate>
    ),
    to: '/docs/products/co2Ampel/co2Ampel-overview',
  },
  {
    title: ':home',
    description: (
      <Translate>
        Aufstellungsort, Installation und alle weiteren Informationen zu
        Sensoren der senseBox:home findest du hier!
      </Translate>
    ),
    to: '/docs/boards/mcu/mcu-overview',
  },
  {
    title: ':mini',
    description: (
      <Translate>
        Alle relevanten Informationen zur Miniaturversion der senseBox findest
        du hier!
      </Translate>
    ),
    to: '/docs/boards/mini/mini-overview',
  },
]

const ThumbNailPreviewList = [
  {
    title: 'openSenseMap',
    Image: osem,
    description: (
      <Translate>
      Die openSenseMap als Internetplattform für offene Umweltdaten
      </Translate>
    ),
    to: 'https://docs.opensensemap.org/',
  },
  {
    title: 'Blockly',
    Image: blockly,
    description: (
      <Translate>
        Die frei verfügbare grafische Oberfläche zum Programmieren der senseBox
      </Translate>
    ),
    onClick: () => {
      useBoardStore.setState({ board: 'Blockly' })
    },
    to: '/docs/category/blockly-2',
  },
  {
    title: 'Hardware Glossar',
    Image: hardware,
    description: (
      <Translate>
        Informationen zum Anschluss und zur Programmierung der Sensoren, Bees
        und weiteren Bauteilen
      </Translate>
    ),
    onClick: () => {
      useBoardStore.setState({ board: 'Glossar' })
    },
    to: '/docs/category/glossar',
  },
]

function ThumbailPreview({ Image, title, description, onClick, to }) {
  return (
    <Link
      onClick={onClick}
      className="mx-auto w-full overflow-hidden rounded-lg bg-gradient-to-r from-green-3 to-green text-white  transition duration-300 hover:-translate-y-1 hover:text-white hover:no-underline  hover:shadow-[rgba(0,0,15,0.5)_-7px_7px_0px_0px] hover:shadow-yellow lg:w-[25%]"
      to={to}
    >
      <div>
        <img className="h-48 w-full object-cover" src={Image} alt={title} />
        <div className="p-4">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </Link>
  )
}

function Feature({ title, description, to }) {
  const handleBoardChange = selectedBoard => {
    // Verwende die setBoard-Funktion direkt, um das Board im Store zu aktualisieren
    useBoardStore.setState({ board: selectedBoard })

    // Hier kannst du weitere Aktionen ausführen, wenn sich das Board ändert
  }

  return (
    <Link
      className={clsx(
        'border-3 flex w-full flex-col items-center rounded-lg border-dotted border-yellow p-4 text-white shadow-2xl hover:text-white lg:w-[15%]',
        'hover:shadow-4xl transition duration-300 ease-in-out hover:bg-yellow hover:no-underline ',
      )}
      to={to}
      onClick={() => handleBoardChange(title)}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  )
}
export default function HomepageFeatures() {
  return (
    <section className="flex flex-col">
      <div>
        <div className="flex flex-col gap-20 bg-gradient-to-r from-green to-green-3 p-8">
          <div className="flex flex-col items-center justify-evenly  lg:flex-row">
            <div className="text-center text-white">
              <h1 className="font-bold">senseBox Dokumentation</h1>
              <p><Translate>Der Platz für die senseBox-Dokumentation.</Translate></p>
            </div>
            <div>
              <LogoSensebox />
            </div>
          </div>
          <div className="flex flex-wrap  justify-center gap-4 lg:flex-row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-center gap-4 p-4 lg:flex-row lg:gap-0 lg:p-20">
        {ThumbNailPreviewList.map((props, idx) => (
          <ThumbailPreview key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
