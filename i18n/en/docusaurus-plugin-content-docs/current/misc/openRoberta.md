---
date: 2020-03-11
title: openRoberta
categories: misc
description: Programming the senseBox in openRoberta
type: Document
set: editoren
set_order: 3
resources:
  - name: "openroberta lab"
    link: https://lab.openroberta.org
  - name: "openroberta Wiki"
    link: https://jira.iais.fraunhofer.de/wiki/display/ORInfo  
image1: /images/2020-03-11-allgemein-einfuehrung-openroberta/openroberta-carousel.png
image2: /images/2020-03-11-allgemein-einfuehrung-openroberta/openroberta-oberflaeche.png
image3: /images/2020-03-11-allgemein-einfuehrung-openroberta/openroberta-buttons.png

---
# openRoberta

openRoberta is a graphical programming interface developed by the Fraunhofer Institute. In addition to the senseBox, you can program many other systems with openRoberta.

## Getting Started

Open the Open Roberta Lab at [lab.open-roberta.org](https://lab.open-roberta.org/). There, you first need to select your system, which is the senseBox.

![](/img/open-roberta-bilder/openroberta-carousel.png)


## Interface
Once you have selected your system, you will find yourself on the programming interface.
This can be roughly divided into three areas: The navigation bar at the top, the toolbox on the left and the large white workspace.

![](/img/open-roberta-bilder/openroberta-oberflaeche.png)

### Navigation Bar
The *Navigation Bar* can be divided into two areas. In the upper half, there are buttons like "Edit", "Robot", "Help", etc. Here, you can open saved programs or switch the system.
In the lower half, there are tabs for "Program" and "Robot Configuration". The "Program" tab is open by default and shows your workspace for writing programs. Under the "Robot Configuration" tab, you need to specify the various connected sensors and actuators.

> If a connected component is not specified in the robot configuration, it cannot be used in the program!

### Toolbox
The *Toolbox* contains all the blocks you need to program the senseBox. They can be easily dragged and dropped into the workspace. All blocks in a category are always colored the same as the category.

### Workspace
In the *Workspace*, you program your senseBox. As you can see, there are already two blocks in the workspace by default: `Start` and `Repeat indefinitely`. These blocks are essential for every program and therefore cannot be removed.
Additionally, at the bottom right of the workspace, you will find the button to transfer your program to the senseBox, save the program in the cloud, zoom in and out of your blocks in the workspace, and the trash can to delete blocks.

![](/img/open-roberta-bilder/openroberta-buttons.png)

## Transferring Programs
To transfer your program to the senseBox, you need to connect the senseBox to your computer using the USB cable. Next, you can download it by clicking the "Play button" at the bottom left of the workspace. Follow the instructions in the pop-up window.

## openRoberta Wiki
You can find this and all other information about the openRoberta lab online in the [documentation for the Open Roberta Lab from the Fraunhofer Institute](https://jira.iais.fraunhofer.de/wiki/display/ORInfo).

> - [openRoberta Lab](https://lab.openroberta.org/)
> - [openroberta Wiki](https://jira.iais.fraunhofer.de/wiki/display/ORInfo)