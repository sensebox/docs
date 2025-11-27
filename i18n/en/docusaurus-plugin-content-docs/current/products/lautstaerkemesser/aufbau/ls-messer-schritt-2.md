---
sidebar_position: 5
title: "Step 2: Assembling the Hardware"
description: Step 2 to build a senseBox Loudness Meter.
---

# Step 2: Assembling the Hardware

:::warning
Work in progress
:::

## Overview of the Components
The senseBox:LoudnessMeter consists of the following components:
- senseBox MCU S2
- Adapter board und DNMS Teensy 4.0
- Mikrophone IM72D128V01 in a 12,7mm round tube
- 1× QWIIC cable, 1× power cable
- USB-C cable and power supply
- Enclosure, 2× M20 cable glands, 4× screws and 4× spacers
- Silica gel pouch

Additionally, you only need a screwdriver.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-1.png)

## Attaching the Microphone
The microphone is attached to the enclosure through one of the cable glands.
To do this, first remove the cap of the cable gland.

Because the opening is narrow, it is recommended to push the non-wired end of the microphone through the larger side of the cable gland.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-2.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-3.png)

Then slide the cable gland all the way to the end of the microphone...

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-4.png)

... and close it again using the cap.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-5.png)

The enclosure should have two opposite openings:
- The middle opening is for the USB cable,
- the offset opening is for the microphone.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-6.png)

To mount the microphone, first remove the nut from the cable gland.
Then feed the microphone cable and the gland from the outside through the opening in the enclosure and secure it with the nut on the inside.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-7.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-8.png)

Next, attach the second cable gland on the other side of the enclosure.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-9.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-10.png)

Feed the USB-C cable through this second gland.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-11.png)

## Preparing the Adapter Board

For the next step you need the Teensy adapter board, the four screws, and the four spacers.

First attach the spacers to the inner holes of the adapter board.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-12.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-13.png)

Next you should connect the cables to the adapter board.
This step is much easier now, because once everything is mounted in the enclosure, there is very little space left.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-14.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-15.png)

Insert the adapter board into the enclosure.
First slide it under the microphone cable, then gently press down the other side until it lies flat.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-16.png)

### Mounting the Adapter Board in the Enclosure

Align the holes of the adapter board with the mounting points in the enclosure and fix it with the four screws.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-17.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-18.png)

### Connecting the Cables

Now connect the QWIIC cable and the power cable to the adapter board.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-19.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-20.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-21.png)

Before inserting the senseBox MCU S2, check how far the microphone should protrude from the enclosure.
Now is also the right time to tighten the cable gland on the USB side to keep the enclosure as sealed as possible and prevent moisture from entering.


## Connecting the senseBox MCU-S2

Now connect the senseBox MCU-S2 to the cables.
Use the QWIIC and power connectors positioned above the USB-C port.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-22.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-23.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-24.png)

Before pressing the senseBox onto the spacers, place the silica gel pouch on the adapter board in the enclosure.
It helps reduce moisture inside.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-25.png)

Then place the senseBox onto the spacers and press it down gently.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-2/lautstaerkemesser-26.png)

Finally, put on the enclosure lid and screw it in place - done!
