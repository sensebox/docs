---
sidebar_position: 6
title: Variables
hide_title: false
---

# Variables

## General
Variables are placeholders for numbers, letters, and strings. This means that a variable **does not** need to remain the same throughout the entire program. This is especially useful when you want to use specific information in different parts of the program.

Variables can be defined using the `Set Element` block.

![](/img/en/blockly-bilder/variablen/blockly-variablen-1.svg)

In the block's dropdown menu, you can rename the variable or create a new one.

## Example
After a soccer game, the number of goals scored should be stored in a variable. This variable will then be displayed on the screen.

![](/img/en/blockly-bilder/variablen/blockly-variablen-2.svg)

To expand on the simple example, we now want to be able to add points live. For each goal scored, the built-in button on the MCU must be pressed once.

![](/img/en/blockly-bilder/variablen/blockly-variablen-3.svg)

## Data Types
Depending on what is stored in a variable, you should set the correct data type. You set the data type using the `as Character` block. This block is attached to a `Set Element` block. Then, the value to be stored is inserted in the free block section, and the data type is selected from the dropdown menu.

![](/img/blockly-bilder/variablen/blockly-variablen-4.svg)

In Blockly, the following data types are available:

**Character:** For single text characters

**Text:** For whole words or sentences

**Boolean:** For values that are either true or false (or 1 or 0)

**Number:** For whole numbers from -32,768 to 32,767

**Big Number:** For large numbers from -2,147,483,648 to 2,147,483,647

**Decimal:** For decimal numbers

> - [Blockly.senseBox.de](https://blockly.sensebox.de/)
