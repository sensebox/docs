---
sidebar_position: 7
title: Conditions
hide_title: false
---
# Logic

## Conditions
Conditions or branching in programs are among the most important control structures in programming. They enable your program to respong to different conditions.

### If, do relationship
The `if, do` block has two free block sections `if` and `do`.

![](/img/en/blockly-bilder/logik/blockly-entscheidungen-1.svg)

The actions linked to the block section `do` are only executed if the conditions attached to the block section `if` are met.

For example, the built-in LED on the senseBox MCU should be turned on **if** the built-in button is pressed.

![](/img/en/blockly-bilder/logik/blockly-entscheidungen-2.svg)


Commands added after the `if, do` block will always be executed, even if the condition was not met before.

### Else
By clicking on the small gear icon at the top left of the `if, do` block, you can extend the block with an `else` section. Commands placed in this section will only be executed if the condition was **not** met before. If the condition was met, they will be skipped.

For example, the built-in LED 1 should only light up **if** the built-in button is pressed and **else** the built-in LED 2 should light up.

![](/img/en/blockly-bilder/logik/blockly-entscheidungen-3.svg)


### Branching
By clicking on the small gear in the top-left corner of the `if, do` block, you can expand the block with an `else if` section. First, the top `if` condition is checked, and if it is not met, the following `else if` condition is checked. This way, only the commands whose associated condition is met will be executed.  
In contrast to the `else` condition, this allows you to set more than two conditions.

For example, depending on the temperature, a LED should be turned on. If the temperature is below 0°C, LED 1 should turn on; at exactly 0°C, LED 2 should turn on; and at temperatures above 0°C, LED 3 should turn on.


![](/img/en/blockly-bilder/logik/blockly-entscheidungen-4.svg)


## Operators
In Blockly, you have the option to use various logical operators to compare values, such as sensor readings. These operators also allow you to create more complex logical expressions through logical connections.

### Logical Comparisons
With the `logical comparisons` block, you can compare values.

![](/img/blockly-bilder/logik/blockly-entscheidungen-5.svg)

The block offers a selection of six operators:

______________________________________________________________________________
| Operator              | Mathematics |
| :-------------------: | :----------: |
| equal | = |
| not equal | ≠ |
| less than | {'<'} |
| greater than | {'>'} |
| less than or equal to | &le; |
| greater than or equal to | &ge; |
______________________________________________________________________________ 
### Logical operations
With the `logical operations` block, you can formulate more complex logical expressions. 
For example, a lamp that only lights up when two conditions are met.

![](/img/en/blockly-bilder/logik/blockly-entscheidungen-6.svg)

The block offers a choice between the operators `and` and `or`.

`And` connects two conditions such that both must be met for the entire expression to be considered true.

`Or` connects two conditions such that only one of the two must be true for the entire expression to be considered true.

### Not Block
With the `not` block, you can negate expressions. A condition is true if the input value is false and false if it is true.

![](/img/en/blockly-bilder/logik/blockly-entscheidungen-7.svg)

### Test Block
With the `test` block, you can check a condition and define actions that will be executed based on the result.

![](/img/blockly-bilder/logik/blockly-entscheidungen-8.svg)


- [Blockly.senseBox.de](https://blockly.sensebox.de/)

