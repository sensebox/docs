---
sidebar_position: 9
title: Mathematics
hide_title: false
---
# Mathematics

## General
In Blockly, you have the ability to perform various mathematical operations. You can calculate with numbers, generate random numbers, and map values to a different range.

## Calculating Numbers
In Blockly, you can perform various mathematical calculations. The following blocks are available for this purpose:
________________________________________
| Block | Function |
| :-----: | :--------: |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-1.svg) | A number. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-2.svg) | Simple mathematical operationen. |
| ![](/img/en/blockly-bilder/mathematik/blockly-mathematik-3.svg) | A number. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-4.svg) | Trigonometric functions. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-5.svg) | Mathematical constants. |
| ![](/img/en/blockly-bilder/mathematik/blockly-mathematik-6.svg) | Check numbers. |
| ![](/img/en/blockly-bilder/mathematik/blockly-mathematik-7.svg) | Add a specific value to a number. |
| ![](/img/en/blockly-bilder/mathematik/blockly-mathematik-8.svg) | Round a number. |
| ![](/img/en/blockly-bilder/mathematik/blockly-mathematik-9.svg) | Get the remainder of a division. |
| ![](/img/en/blockly-bilder/mathematik/blockly-mathematik-10.svg)| Limit the range of a number. |
________________________________________

## Random Numbers
In Blockly, you can generate random numbers. There are two different blocks available for this purpose.

![](/img/en/blockly-bilder/mathematik/blockly-mathematik-11.svg)  

With the `integer random value` block, you can generate an integer random value within a defined range.

![](/img/blockly-bilder/mathematik/blockly-mathematik-12.svg) 

With the `random number (0.0-1.0)` block, you can generate a random decimal number between 0.0 and 1.0.

## Mapping Values
With the `Map Value` block, you can map numbers, such as measurement values, to a new range. This is useful when you want to convert your measurement values directly into a percentage between 0 and 100, for example.

![](/img/en/blockly-bilder/mathematik/blockly-mathematik-13.svg) 

In the block sections, you need to set the boundaries of the original range and the boundaries of the new range using the `number` blocks.

In the following example, the entire range of the light sensor (from 3 to 200,000 lux) is mapped to a new range from 0 to 100.

![](/img/en/blockly-bilder/mathematik/blockly-mathematik-14.svg) 


> - [Blockly.senseBox.de](https://blockly.sensebox.de/)