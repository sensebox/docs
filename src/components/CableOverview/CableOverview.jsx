import React from 'react';
import { useBoardStore } from '@site/src/lib/stores/store';
import ImageWithText from '@site/src/components/ImageWithText/ImageWithText';
import usbACable from '@site/static/img/hardware-bilder/cable/usb-a-to-c.png';
import jstPhr4Cable from '@site/static/img/hardware-bilder/cable/jst-phr4_cable.png';
import qwiicCable from '@site/static/img/hardware-bilder/cable/qwiic_cable.png';
import qwiicToJstPhr4 from '@site/static/img/hardware-bilder/cable/qwiic-to-jstphr4.png';
import jstPhr4ToJumperMale from '@site/static/img/hardware-bilder/cable/jst-phr4-jumper-male.png';
import jstPhr4ToJumperFemale from '@site/static/img/hardware-bilder/cable/jst-phr4-jumper-female.png';
import jumperWireMM from '@site/static/img/hardware-bilder/cable/jumper_wire_mm.png';
import jstToSds011 from '@site/static/img/hardware-bilder/cable/jst-to-sds011.png';

const CableOverview = () => {
  const board = useBoardStore(state => state.board);

  // Filtere die Kabel basierend auf dem ausgewählten Board
  const showJstCables = board === ':edu' || board === ':mini';
  const showQwiicCables = board === ':edu S2';

  return (
    <>
      <h2>USB A zu USB C Kabel</h2>
      <p>
        Das USB A zu USB C Kabel ist ein Datenkabel, das verwendet wird, um die senseBox MCU mit einem Computer zu verbinden, zum Übertragen von Daten oder Versorgen mit Strom.
      </p>
      <p>
        Alle neueren senseBox MCU-Modelle sind mit einem USB-C-Anschluss ausgestattet. Einige ältere Versionen der senseBox nutzen noch Micro-USB.
        Für die aktuellen Varianten ist dieses Kabel jedoch die Standardverbindung.
      </p>
      <p>
        <strong>Hinweis:</strong> Grundsätzlich können auch andere USB-C Kabel verwendet werden. Achte jedoch darauf, dass das Kabel für die Datenübertragung geeignet ist. Manche USB-C Kabel dienen ausschließlich der Stromversorgung und unterstützen keine oder nur eingeschränkte Kommunikation.
      </p>
      <ul>
        <li>Erhältlich in folgender Länge:</li>
        <li>2 Meter</li>
        <li>3 Meter</li>
      </ul>
      <ImageWithText src={usbACable} alt="USB A zu USB C Kabel" title="USB A zu USB C Kabel" />

      {showJstCables && (
        <>
          <h2>JST PHR-4 zu JST PHR-4 Kabel</h2>
          <p>
            Das JST PHR-4 Kabel ist ein 4-poliges Anschlusskabel für senseBox Sensoren. Auf beiden Seiten befindet sich ein JST PHR-4 Steckverbinder.
          </p>
          <p>
            "PHR-4" ist ein Teil der JST PH-Serie mit einem Rastermaß von 2,0 mm, der für kompakte Verbindungen mit geringem Platzbedarf entwickelt wurde. Im Kontext der senseBox wird dieses Kabel meist nur "JST" genannt.
          </p>
          <ul>
            <li>Die senseBox bietet das Kabel in folgenden Längen an:</li>
            <li>200 mm</li>
            <li>350 mm</li>
            <li>500 mm</li>
          </ul>
          <p>
            Je nach Anwendung und Sensorposition kannst du die passende Länge wählen.
          </p>
          <ImageWithText src={jstPhr4Cable} alt="JST PHR-4 Kabel" title="JST PHR-4 Kabel" />

          <h2>JST PHR-4 zu Jumper Wire (Male)</h2>
          <p>
            Das JST PHR-4 zu Jumper Wire (Male) Kabel eignet sich ideal, um senseBox Sensoren mit anderen Mikrocontroller-Plattformen wie z.B. einem Arduino, oder mit einem Breadboard, zu verbinden.
          </p>
          <p>
            Ein Breadboard (auch Steckbrett genannt) ist eine einfache Möglichkeit, elektronische Schaltungen ohne Löten aufzubauen. Einzelne Komponenten, wie Sensoren, Widerstände oder Kabel, können darin eingesteckt und flexibel verbunden werden.
            Dieses Kabel hat auf der einen Seite einen JST PHR-4 Steckverbinder  und auf der anderen Seite vier männliche Jumper-Stecker, die direkt in Breadboards oder Arduino-Pins passen.
          </p>
          <ul>
            <li>Erhältlich in zwei Längen:</li>
            <li>150 mm</li>
            <li>300 mm</li>
          </ul>
          <p>
            Je nach Aufbau und Entfernung zwischen Sensor und Mikrocontroller kann die passende Länge gewählt werden.
          </p>
          <ImageWithText src={jstPhr4ToJumperMale} alt="JST PHR-4 zu Jumper Wire (Male)" title="JST PHR-4 zu Jumper Wire (Male)" />

          <h2>JST PHR-4 zu Jumper Wire (Female)</h2>
          <p>
            Das JST PHR-4 zu Jumper Wire (Female) Kabel, auch als Kabelpeitsche bekannt, hat auf der einen Seite einen JST PHR-4 Stecker und auf der anderen Seite vier einzelne Buchsen (Female Jumper).
          </p>
          <p>
            Es eignet sich ideal, um Sensoren der senseBox mit anderen Mikrocontroller-Plattformen, Breakout-Boards oder modularen Testaufbauten zu verbinden, z. B. auf einem Breadboard mit Pins oder auf einem Arduino.
          </p>
          <ul>
            <li>Erhältlich in folgenden Längen:</li>
            <li>150 mm</li>
            <li>300 mm</li>
          </ul>
          <ImageWithText src={jstPhr4ToJumperFemale} alt="JST PHR-4 zu Jumper Wire (Female)" title="JST PHR-4 zu Jumper Wire (Female)" />

          <h2>Jumper Wire Kabel (Male-to-Male)</h2>
          <p>
            Das Jumper Wire Kabel (M/M) hat auf beiden Seiten männliche Steckverbinder und wird hauptsächlich verwendet, um elektronische Komponenten auf einem Breadboard oder mit einem Mikrocontroller wie dem Arduino zu verbinden.
          </p>
          <p>
            Es eignet sich besonders gut für schnelle Testaufbauten und prototypische Schaltungen ohne Löten.
          </p>
          <ul>
            <li>Erhältlich in folgender Länge:</li>
            <li>100 mm</li>
          </ul>
          <ImageWithText src={jumperWireMM} alt="Jumper Wire Kabel (M/M)" title="Jumper Wire Kabel (M/M)" />

          <h2>JST PHR-4 zu SDS011 Adapterkabel</h2>
          <p>
            Das JST PHR-4 zu SDS011 Adapterkabel ermöglicht den Anschluss des Feinstaubsensors SDS011 an die senseBox MCU.
          </p>
          <p>
            Der SDS011 hat im Vergleich zu anderen Sensoren der senseBox einen einen separaten Anschluss. Das Adapterkabel sorgt dafür, dass die richtige Verbindung und Stromversorgung hergestellt werden kann.
          </p>
          <p>
            Das Kabel besitzt auf der einen Seite einen JST PHR-4 Steckverbinder und auf der anderen Seite den spezifischen SDS011-Anschluss, passend zur Buchse des Sensors.
          </p>
          <ul>
            <li>Erhältlich in folgender Länge:</li>
            <li>350 mm</li>
          </ul>
          <ImageWithText src={jstToSds011} alt="JST PHR-4 zu SDS011 Adapterkabel" title="JST PHR-4 zu SDS011 Adapterkabel" />
        </>
      )}

      {showQwiicCables && (
        <>
          <h2>QWIIC Kabel (JST SH-4)</h2>
          <p>
            Das QWIIC Kabel, auch bekannt als JST SH-4, ist der neue Standardanschluss für viele Sensoren und Erweiterungsmodule, die mit der senseBox MCU verbunden werden. Der kompakte 4-polige Stecker hat ein Rastermaß von 1,0 mm und benötigt deutlich weniger Platz als der ältere JST PHR-4 Anschluss.
          </p>
          <p>
            Nahezu alle neueren Sensoren der senseBox verfügen sowohl über einen QWIIC- als auch über einen JST PHR-4 Anschluss, um sowohl mit der MCU S1 als auch mit der MCU S2 kompatibel zu bleiben. Langfristig wird QWIIC jedoch als Hauptstandard verwendet.
          </p>
          <ul>
            <li>Erhältlich in folgenden Längen:</li>
            <li>100 mm</li>
            <li>200 mm</li>
            <li>500 mm</li>
          </ul>
          <ImageWithText src={qwiicCable} alt="QWIIC Kabel (JST SH-4)" title="QWIIC Kabel (JST SH-4)" />

          <h2>QWIIC zu JST PHR-4 Adapterkabel</h2>
          <p>
            Das QWIIC zu JST PHR-4 Adapterkabel dient zur Verbindung von Komponenten mit unterschiedlichen Anschlussstandards. Ideal, um z. B. Sensoren mit QWIIC-Anschluss an eine senseBox MCU S1 anzuschließen oder umgekehrt eine MCU S2 mit Sensoren ohne QWIIC-Port zu verbinden.
          </p>
          <p>
            Beide Enden sind 4-polig, jeweils im QWIIC (JST SH-4) und JST PHR-4 Format.
          </p>
          <p>
            In der Regel ist es egal, welches Ende des Kabels mit der MCU bzw. dem Sensor verbunden wird. Beide Seiten sind elektrisch kompatibel.
          </p>
          <ul>
            <li>Erhältlich in folgender Länge:</li>
            <li>80 mm</li>
          </ul>
          <ImageWithText src={qwiicToJstPhr4} alt="QWIIC zu JST PHR-4 Adapterkabel" title="QWIIC zu JST PHR-4 Adapterkabel" />

          <h2>Jumper Wire Kabel (Male-to-Male)</h2>
          <p>
            Das Jumper Wire Kabel (M/M) hat auf beiden Seiten männliche Steckverbinder und wird hauptsächlich verwendet, um elektronische Komponenten auf einem Breadboard oder mit einem Mikrocontroller wie dem Arduino zu verbinden.
          </p>
          <p>
            Es eignet sich besonders gut für schnelle Testaufbauten und prototypische Schaltungen ohne Löten.
          </p>
          <ul>
            <li>Erhältlich in folgender Länge:</li>
            <li>100 mm</li>
          </ul>
          <ImageWithText src={jumperWireMM} alt="Jumper Wire Kabel (M/M)" title="Jumper Wire Kabel (M/M)" />
        </>
      )}
    </>
  );
};

export default CableOverview;
