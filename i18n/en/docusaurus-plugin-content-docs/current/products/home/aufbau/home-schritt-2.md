---
sidebar_position: 6
title: "Step 2: Register on openSenseMap"
description: Step 2 for setting up the senseBox:home
---

# Step 2: Register on openSenseMap

After your measurement station has been assembled, it will be registered on [openSenseMap](https://opensensemap.org).

openSenseMap is a platform to store, compare, and visualize sensor data. Just take a look at it. Go to [www.opensensemap.org](https://www.opensensemap.org) and discover a huge pool of sensor data from around the world. Not only senseBoxes send data to openSenseMap, but also other microcontrollers with sensors. How the individual functions of openSenseMap and its interfaces work can be found [here](https://docs.sensebox.de/opensensemap/).

![](/img/sensebox-home-bilder/home-schritt-2/osem-1.png)

## 1. User Account Registration
Go to [www.opensensemap.org](https://www.opensensemap.org) and create an account. To do this, click on "Login" in the top right corner and then go to "Sign up". You need a valid email address to register. After successful registration, you will receive an email with a confirmation link. Please click the link to complete the registration.

![](/img/sensebox-home-bilder/home-schritt-2/osem-2.png)

## 2. Create a new senseBox
After successful registration, you can start creating your senseBox. Click on "New senseBox / Neue senseBox" in your menu and accept the terms of use. Then follow the registration instructions and provide the following information:

* A freely selectable name for the senseBox
* The environment (Exposure) where you want to place your senseBox
* The location where you want to place your senseBox (you can also determine your location automatically)

![](/img/sensebox-home-bilder/home-schritt-2/osem-3.png)

Since openSenseMap is open to all types of senseBoxes, you will be asked about the hardware you are using. Select *senseBox:home V2* and the data transmission module you are using. If you want to send your data to openSenseMap via LoRa, select LoRa as the "Connection type". Then you can enter your LoRa settings in the "Advanced" tab. Here you need to enter the Application ID and Device ID that you specified on [TheThingsNetwork](www.thethingsnetwork.org). More information can be found [here](/sensebox-home-erweiterungen/home-erweiterung-lora/).

![](/img/sensebox-home-bilder/home-schritt-2/osem-4.png)

For some sensors, you need to select which port you have connected them to.

![](/img/sensebox-home-bilder/home-schritt-2/osem-5.png)

## 3. Summary of the Registration and Email
When you have completed the registration, you need to agree to the publication of your data once again. Then you will receive an overview of your registration. There you will see your senseBox ID, your sensor IDs, and the Arduino code.

The senseBox ID is a unique identifier for your senseBox. With it, you can find your senseBox, for example, via the URL (opensensemap.org/explore/ENTER-YOUR-SENSEBOX-ID-HERE) or track it in datasets. It is also used for various applications and functions related to the senseBox and openSenseMap.
