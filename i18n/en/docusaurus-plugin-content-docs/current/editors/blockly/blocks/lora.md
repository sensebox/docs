---
sidebar_position: 8
title: LoRa
hide_title: false
---


# LoRa


## Activation

![](/img/blockly-bilder/lora/blockly-lora-1.svg)

Use these blocks to initialize the Lora-Bee and connect to [The Things Network](https://www.thethingsnetwork.org/). Depending on the activation method you use (OTAA or ABP), you need to enter the corresponding IDs in the block. Additionally, the transmission interval can be set in minutes.

## LoRa Message

![](/img/blockly-bilder/lora/blockly-lora-2.svg)

Use these blocks to send a message over the LoRa network. No specific format is used for the message (often called payload). The data is encoded as bytes, allowing for quick and efficient transmission over the LoRa network. The data must then be converted back into a readable format using a special decoder in the TTN Console.

## Creating a Decoder

TTN decoding is all about understanding bytes. After that, it is possible to create quick solutions to access the data measured by the senseBox.

### Theory
LoRaWAN is not suitable for sending large amounts of data. Therefore, the information is divided into small bytes and sent. One byte contains 8 bits, which means you can distinguish between 256 different values. Two bytes contain 16 bits, making it possible to distinguish between 65,536 values.


The following table provides an overview of the bandwidth:

______________________________________________________________________________
| Bytes | Bit | min (signed)   | max (signed)  | min (unsigned) | max (unsigned) |
| :-------: | :-----:|:----------------:|:---------------:|:----------------:|:----------------:|
| 1     | 8   | -128           | 127           | 0              | 255            |
| 2     | 16  | −32.768        | 32.767        | 0              | 65.535         |
| 3     | 24  | −2.147.483.648 | 2.147.483.647 | 0              | 4.294.967.295  |
______________________________________________________________________________

In the table, there are two different types: "signed" and "unsigned". Signed values cover both positive and negative ranges.

Example: You want to measure humidity. The values range between 0% and 100%. However, these are not decimal values, but only integer values. One could use a byte that corresponds to the value for humidity. However, if you want to send a decimal number with two decimal places, 1 byte is no longer sufficient. 2 bytes must be used.

Imagine we measure 85.42%. A simple approach would be to take the measurement and multiply it by 100. Now we have a value of 85.42 * 100 = 8542. We can encode 8542 in two bytes, send them to TTN, and decode these two bytes to get 8542. This number can then be divided by 100 to get the value of 85.42%. That's basically how it works.

### Example

__Blockly__:
On the Arduino side, the [lora-serialization](https://github.com/thesolarnomad/lora-serialization) library is used. The documentation shows a [function](https://github.com/thesolarnomad/lora-serialization#unsigned-16bit-integer-2-bytes) to send a value with 16 bits. This function can be used to send the values for humidity. The value for humidity ranges between 0 and 100%, so the following blocks can be used to send it:

![](/img/blockly-bilder/lora/blockly-lora-humidity.svg)

The measured value is multiplied by 100 to retain the two decimal places.

Since the value for the temperature can also fall into the negative range, the value must first be converted to a positive value and then multiplied by a factor to retain the decimal places.

![](/img/blockly-bilder/lora/blockly-lora-temperatur.svg)

In this example, a temperature sensor is used that has measured values from -18 degrees Celsius and outputs the temperature with an accuracy of 0.0013 degrees Celsius.

__TTN__:
In the TTN Console, two different values from the senseBox now arrive. These values must now be decoded from bytes back to the original values using a decoder. You can define the decoder under Payloads:

![](/img/blockly-bilder/lora/blockly-lora-13.png)


```cpp
/**
 * Convert the array of bytes to an unsigned integer, LSB.
 *
 * BEWARE: This is only safe up to 0x1FFFFFFFFFFFFF, so: 6 bytes.
 */
function uint(bytes) {

  return bytes.reduceRight(function(acc, b) {
    // We expect an unsigned value, so to support more than 3 bytes
    // don't use any bitwise operators, which would always yield a
    // signed 32 bits integer instead.
    return acc * 0x100 + b;
  }, 0);
}
```

Here you can now define the decoder:

```cpp
function Decoder(bytes) {

  var i = 0;
  var decoded = {};
  // The index in the bytes array that needs to be handled next;
  // use along with "i++" which returns the current value, and
  // then increments it for the next usage


  // Relative humidity with 0.01 precision, 0.00 through 100.00, LSB
  var humidity = uint(bytes.slice(i, i+=2)) / 100;
  // Temperature with 0.0013 precision, -18.000 through 67.000, LSB
  var temperature = uint(bytes.slice(i, i+=2)) / 771 - 18;
  // Unary plus operator to cast string result of toFixed to number
  temperature = +temperature.toFixed(3);

  decoded['TEMPERATURE_SENSOR_ID'] = temperature
  decoded['HUMIDITY_SENSOR_ID'] = humidity

  return decoded;
}
```

The function takes the first two bytes and converts them to the humidity measurement value. The next two bytes are converted to a temperature measurement value. If you use openSenseMap as an endpoint (`https://ttn.opensensemap.org/v1.1`) in the TTN HTTP integration, the measurement values will be linked with your sensor IDs and displayed on openSenseMap. Learn more about the openSenseMap TTN integration [here](https://sensebox.github.io/books-v2/osem/ttn_integration.html).

### Important Points
Some important points to note:

→ The decoding fails / returns incorrect values if you do not send everything that needs to be decoded. For example, if the decoder expects both humidity and temperature values, but the senseBox only sends a humidity value, you will not get correct values.

→ When sending values larger than 3 bytes, it is a bit different. Values for illuminance can be larger than a 2-byte integer at maximum. Therefore, 3 bytes are needed. You can send it as follows:

![](/img/blockly-bilder/lora/blockly-lora-illuminance.svg)


and decode as follows:
```cpp
var lux = bytes[i] | bytes[i+1]<<8 | bytes[i+2]<<16;
i = i + 3 // increment counter afterwards
```


## Cayenne LPP
![](/img/blockly-bilder/lora/blockly-lora-5.svg)

![](/img/blockly-bilder/lora/blockly-lora-6.svg)

![](/img/blockly-bilder/lora/blockly-lora-7.svg)

![](/img/blockly-bilder/lora/blockly-lora-8.svg)

![](/img/blockly-bilder/lora/blockly-lora-9.svg)

![](/img/blockly-bilder/lora/blockly-lora-10.svg)

![](/img/blockly-bilder/lora/blockly-lora-11.svg)

![](/img/blockly-bilder/lora/blockly-lora-12.svg)

The [Cayenne Low Power Payload Format](https://community.mydevices.com/t/cayenne-lpp-2-0/7510) offers an easy way to send data over the LoRaWAN network. The data can be directly decoded back into a readable format using an existing decoder. Different blocks are available for different measurements to ensure that all decimal places are transmitted correctly.

![](/img/blockly-bilder/lora/blockly-lora-14.png)
  
  







In the TTN Console, you can select the decoder under __Payload__. Choose Cayenne LPP, and the values will be automatically decoded.

> - [Blockly.senseBox.de](https://blockly.sensebox.de/)

  
