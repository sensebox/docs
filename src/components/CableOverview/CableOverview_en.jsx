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

  // Filter cables based on the selected board
  const showJstCables = board === ':edu' || board === ':mini';
  const showQwiicCables = board === ':edu S2';

  return (
    <>
      <h2>USB A to USB C Cable</h2>
      <p>
        The USB A to USB C cable is a data cable used to connect the senseBox MCU to a computer, for transferring data or supplying power.
      </p>
      <p>
        All newer senseBox MCU models are equipped with a USB-C port. Some older versions of the senseBox still use Micro-USB.
        For the current models, this cable is the standard connection.
      </p>
      <p>
        <strong>Note:</strong> Other USB-C cables can generally be used as well. However, make sure that the cable is suitable for data transfer. Some USB-C cables are power-only and do not support communication or only support it to a limited extent.
      </p>
      <ul>
        <li>Available in the following lengths:</li>
        <li>2 meters</li>
        <li>3 meters</li>
      </ul>
      <ImageWithText src={usbACable} alt="USB A to USB C Cable" title="USB A to USB C Cable" />

      {showJstCables && (
        <>
          <h2>JST PHR-4 to JST PHR-4 Cable</h2>
          <p>
            The JST PHR-4 cable is a 4-pin connection cable for senseBox sensors, with a JST PHR-4 connector on both ends.
          </p>
          <p>
            "PHR-4" is part of the JST PH series with a 2.0 mm pitch, designed for compact connections with minimal space requirements. In the context of senseBox, this cable is commonly referred to simply as "JST".
          </p>
          <ul>
            <li>The senseBox offers this cable in the following lengths:</li>
            <li>200 mm</li>
            <li>350 mm</li>
            <li>500 mm</li>
          </ul>
          <p>
            Choose the appropriate length depending on your application and sensor placement.
          </p>
          <ImageWithText src={jstPhr4Cable} alt="JST PHR-4 Cable" title="JST PHR-4 Cable" />

          <h2>JST PHR-4 to Jumper Wire (Male)</h2>
          <p>
            The JST PHR-4 to Jumper Wire (Male) cable is ideal for connecting senseBox sensors to other microcontroller platforms such as Arduino, or to a breadboard.
          </p>
          <p>
            A breadboard allows you to build electronic circuits without soldering. Individual components, like sensors, resistors, or wires, can be inserted and flexibly connected.
            This cable has a JST PHR-4 connector on one side and four male jumper wires on the other, which fit directly into breadboards or Arduino pins.
          </p>
          <ul>
            <li>Available in two lengths:</li>
            <li>150 mm</li>
            <li>300 mm</li>
          </ul>
          <p>
            Choose the appropriate length depending on the setup and the distance between sensor and microcontroller.
          </p>
          <ImageWithText src={jstPhr4ToJumperMale} alt="JST PHR-4 to Jumper Wire (Male)" title="JST PHR-4 to Jumper Wire (Male)" />

          <h2>JST PHR-4 to Jumper Wire (Female)</h2>
          <p>
            The JST PHR-4 to Jumper Wire (Female) cable, also known as a cable whip, has a JST PHR-4 connector on one side and four individual female jumper sockets on the other.
          </p>
          <p>
            It’s ideal for connecting senseBox sensors to other microcontroller platforms, breakout boards, or modular test setups, e.g., on a breadboard with pins or to an Arduino.
          </p>
          <ul>
            <li>Available in the following lengths:</li>
            <li>150 mm</li>
            <li>300 mm</li>
          </ul>
          <ImageWithText src={jstPhr4ToJumperFemale} alt="JST PHR-4 to Jumper Wire (Female)" title="JST PHR-4 to Jumper Wire (Female)" />

          <h2>Jumper Wire Cable (Male-to-Male)</h2>
          <p>
            The Jumper Wire Cable (M/M) has male connectors on both ends and is primarily used to connect electronic components on a breadboard or to a microcontroller like the Arduino.
          </p>
          <p>
            It is especially useful for quick test setups and prototypical circuits without soldering.
          </p>
          <ul>
            <li>Available in the following length:</li>
            <li>100 mm</li>
          </ul>
          <ImageWithText src={jumperWireMM} alt="Jumper Wire Cable (M/M)" title="Jumper Wire Cable (M/M)" />

          <h2>JST PHR-4 to SDS011 Adapter Cable</h2>
          <p>
            The JST PHR-4 to SDS011 adapter cable allows the SDS011 fine dust sensor to be connected to the senseBox MCU.
          </p>
          <p>
            The SDS011 has a dedicated connector that differs from other senseBox sensors. This adapter cable ensures the correct connection and power supply.
          </p>
          <p>
            One side has a JST PHR-4 connector, and the other side has the specific SDS011 connector matching the sensor’s socket.
          </p>
          <ul>
            <li>Available in the following length:</li>
            <li>350 mm</li>
          </ul>
          <ImageWithText src={jstToSds011} alt="JST PHR-4 to SDS011 Adapter Cable" title="JST PHR-4 to SDS011 Adapter Cable" />
        </>
      )}

      {showQwiicCables && (
        <>
          <h2>QWIIC Cable (JST SH-4)</h2>
          <p>
            The QWIIC cable, also known as JST SH-4, is the new standard connector for many sensors and expansion modules connected to the senseBox MCU. The compact 4-pin connector has a 1.0 mm pitch and requires significantly less space than the older JST PHR-4 connector.
          </p>
          <p>
            Almost all newer senseBox sensors feature both a QWIIC and a JST PHR-4 connector, to remain compatible with both the MCU S1 and MCU S2. However, QWIIC is expected to become the main standard in the long term.
          </p>
          <ul>
            <li>Available in the following lengths:</li>
            <li>100 mm</li>
            <li>200 mm</li>
            <li>500 mm</li>
          </ul>
          <ImageWithText src={qwiicCable} alt="QWIIC Cable (JST SH-4)" title="QWIIC Cable (JST SH-4)" />

          <h2>QWIIC to JST PHR-4 Adapter Cable</h2>
          <p>
            The QWIIC to JST PHR-4 adapter cable allows you to connect components with different connector standards. Ideal for connecting QWIIC sensors to a senseBox MCU S1, or conversely, connecting an MCU S2 to sensors without a QWIIC port.
          </p>
          <p>
            Both ends are 4-pin, in QWIIC (JST SH-4) and JST PHR-4 formats respectively.
          </p>
          <p>
            In general, it doesn't matter which end of the cable is connected to the MCU or the sensor. Both sides are electrically compatible.
          </p>
          <ul>
            <li>Available in the following length:</li>
            <li>80 mm</li>
          </ul>
          <ImageWithText src={qwiicToJstPhr4} alt="QWIIC to JST PHR-4 Adapter Cable" title="QWIIC to JST PHR-4 Adapter Cable" />

          <h2>Jumper Wire Cable (Male-to-Male)</h2>
          <p>
            The Jumper Wire Cable (M/M) has male connectors on both ends and is primarily used to connect electronic components on a breadboard or to a microcontroller like the Arduino.
          </p>
          <p>
            It is especially useful for quick test setups and prototypical circuits without soldering.
          </p>
          <ul>
            <li>Available in the following length:</li>
            <li>100 mm</li>
          </ul>
          <ImageWithText src={jumperWireMM} alt="Jumper Wire Cable (M/M)" title="Jumper Wire Cable (M/M)" />
        </>
      )}
    </>
  );
};

export default CableOverview;
