---
sidebar_position: 3
title: senseBox:home with LoRa
description: Transmit senseBox:home data via LoRa
---

# senseBox:home with LoRa

## LoRa and TheThingsNetwork

The data is transmitted via [TheThingsNetwork](https://www.thethingsnetwork.org/) (TTN).  
In the first step, you need to create an **Application** and a **Device** and set up data forwarding to the openSenseMap using a **Webhook**.  
In general, all sensors that can be selected directly on the openSenseMap can be used.  
Decoding takes place directly on the openSenseMap, so there is **no need** to configure it in the TTN Console.

## Registering with TheThingsNetwork

Many gateways, established by various groups, associations, or companies, use TheThingsNetwork to receive and transmit data.  
To process data within the network, you first need to create an account, set up an **Application**, and register the **Devices**.

In many cities, the network already has good coverage. You can check the coverage on [ttnmapper.org](https://ttnmapper.org/).  
> Note: The coverage data may not reflect reality and could be outdated.

### Creating the Application and Adding a Device

Create a new account at [https://eu1.cloud.thethings.network/](https://eu1.cloud.thethings.network/).  
Then, select **Go to Applications**.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-00.png)

You’ll see an overview of all registered **Applications**. Click **add Application** to create a new one.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-01.png)

Choose a name for your Application and optionally add a short description.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-03.png)

After clicking **Add Application**, you’ll be taken to the overview page.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-04.png)

Within an Application, you can now register multiple Devices. Click **+ Add end device**.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-05.png)

Now, click **Manually** at the top and fill in the fields as shown in the image.  
Generate the **DeviceEUI** and **AppKey** using the respective buttons, and click **Fill with zeros** for the **AppEUI**.  
Finally, you can give the Device a custom ID or use the pre-generated one. Click **Register end device**.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-06.png)

### Setting up the openSenseMap Integration

The data is transmitted via TheThingsNetwork as simple bytes and forwarded to the openSenseMap.  
To enable this forwarding, click **Integrations** in the sidebar, then **Webhooks**, and add a new Webhook using the **+ Add webhook** button.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-07.png)

Some services already have pre-configured **Webhooks**.  
For forwarding to the openSenseMap, select a **Custom webhook** (the last option in the list).

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-08.png)

Name the integration and enter it under Webhook ID. Select **JSON** as the **Webhook Format**.  
For the integration URL, use `https://ttn.opensensemap.org/v3` and check **Uplink Message**. Leave the field that appears empty.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-09.png)

Now, click **Register Webhook**.

The registration with TheThingsNetwork is now complete.

## Registering on the openSenseMap

Register on the openSenseMap as described here. Select "LoRa" as the connection type and add the sensors you connected to your senseBox in the first step.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-10.png)

To ensure proper communication between TheThingsNetwork and the openSenseMap, select **senseBox:home** as the decoding profile.  
Add your TTN Application ID and TTN Device ID. Click next to complete the registration.

## Compiling and Uploading

After registration, you can compile the program code for your senseBox on the openSenseMap.  
No software installation on your computer is required.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-12.png)

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-13.png)

Copy the Device EUI, Application EUI, and Application Key from the Device overview and paste them into the respective fields.  
Click "Compile" to generate the program.

### Copying to the senseBox

Put the senseBox into learning mode by double-clicking the red reset button.  
The senseBox will appear as a removable drive, and you can copy the previously downloaded program onto it.  
The senseBox will then restart automatically, and the data will be transmitted.

> Note: On macOS, dragging and dropping the .BIN file does not work.  
> The easiest way is to use our senseBox Sketch Uploader. Simply unzip the file and start the program.  
> You can [download it here](https://sensebox.de/docs/senseBox_Sketch_Uploader_DE.zip). Alternatively, you can use [MuCommander](https://www.mucommander.com/) or copy the file via the terminal using `dd` (recommended for advanced users only).

## Troubleshooting

If your data is not displayed on the openSenseMap, first check whether the data is reaching TheThingsNetwork.  
You can do this from your Application's overview page. Look for **Live Data** messages marked **Forward Uplink Data message**.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-14.png)

If data appears in the console but is not forwarded to the openSenseMap, verify that all parameters for TTN integration were copied correctly to the openSenseMap.  
You can find these parameters in the openSenseMap dashboard.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-15.png)

Click "Edit" for your senseBox and select "TheThingsNetwork" from the sidebar menu.

![](/img/sensebox-home-bilder/home-erweiterung-lora/home-lora-16.png)
