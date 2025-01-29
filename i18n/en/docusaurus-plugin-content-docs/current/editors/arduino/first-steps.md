---
date: 2020-03-11
title: First Steps with the Arduino IDE
title_order: 4
categories: arduino
description: Programming the senseBox in the Arduino IDE
type: Document
set: erste-schritte-arduino
set_order: 5

resources:
image1: /images/2020-03-11-allgemein-einfuehrung-arduino/arduino-buttons-1.png
image2: /images/2020-03-11-allgemein-einfuehrung-arduino/arduino-buttons-2.png
---

# First Steps with the Arduino IDE

Before you can get started, you need to install the Arduino IDE. You can find out how to do this [here](/allgemein/allgemein-arduino-ide-installieren//)

## Basics

When you open the IDE, you will see a large white area where you will write your program.
In the black area below, status and error messages will be displayed. It is always worth taking a look at these messages when errors occur.

Finally, you should take a look at the small buttons above the white area.

![](/img/arduino-bilder/erste-schritte/arduino-buttons-1.png)

The checkmark and the arrow are the two most important symbols for you:
With the checkmark, you can check your program for syntax errors, and with the arrow, you upload your program to the senseBox MCU.

## The Arduino Sketch

An Arduino program (also called a "Sketch") has a very simple structure consisting of two main components. These two required functions contain blocks of instructions that describe the program flow:


```cpp
void setup(){
    // Instruction
}
void loop(){
    // Instruction
}
```

The `setup` function is executed only once at the start of the program. In contrast, the `loop` function repeats all instructions in an endless loop. Both functions are essential for the program to compile and run successfully. "Compiling" refers to the translation of the program into machine code, which can be understood by the Arduino processor; the Arduino IDE handles this for us.

Comments can be added to the program code with a double slash (`//`). It is always important to comment on your program code so that others can understand what is happening at a particular point.
