---
sidebar_position: 7
title: "Step 3: Transfer Program Code"
description: Step 3 for setting up the senseBox:home
---

# Step 3: Transfer Program Code

After registration, the program code must be copied to the senseBox. If you have a senseBox with WiFi-Bee or Lan-Bee, you can compile the program code online quickly and easily and transfer it via drag-and-drop. You don't need to install any software on your computer.

## Compile Online

The easiest way to get your code onto the senseBox is to use our online compiler. You need to provide some information in the form. If something does not fit your individual setup of the senseBox, you can simply leave the field blank. Finally, press "Compile" and a .BIN file will be downloaded by your browser.

![](/img/sensebox-home-bilder/home-schritt-3/compile.png)

### Transfer to the senseBox MCU

Connect your senseBox MCU to your computer and double-click the red button, it will be recognized as a removable drive. By clicking "Compile Code" in the web interface, your program code will be compiled on the server and a .BIN file will be offered for download. Depending on the operating system you are using, the copying process differs.

#### Copying on Windows

On Windows, you can simply drag and drop the created .BIN file onto the removable drive <b>SENSEBOX</b>. The red LED on the button will flicker briefly and then the board will restart itself and execute your program code.

#### Copying on MacOS

On MacOS, copying the .BIN file via drag and drop unfortunately does not work at the moment. The following options are available to copy the file to the senseBox:

- Use the [senseBox Copy Tool](https://sensebox.de/docs/senseBox_Sketch_Uploader_DE.zip). Unzip the ZIP file and start the program contained within.
- Use an alternative file manager such as [muCommander](http://www.mucommander.com/)
- Copy the file via Terminal using the dd command (recommended only for experienced users!)

#### Copying on Linux

On Linux, you can simply drag and drop the created .BIN file onto the removable drive <b>SENSEBOX</b>. The red LED on the button will flicker briefly and then the board will restart itself and execute your program code.
