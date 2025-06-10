---
sidebar_position: 4
---

# Opc Ua And Devices In Ignition - Video Transcripts

This page contains transcripts from the opc-ua-and-devices-in-ignition video course.

## Overview

These transcripts are automatically generated from the [opc-ua-and-devices-in-ignition Course](https://inductiveuniversity.com/courses/ignition/opc-ua-and-devices-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 1:55:54 PM
Source URL: https://inductiveuniversity.com/courses/ignition/opc-ua-and-devices-in-ignition/8.1
:::

## Video Transcripts

### 1. Connecting to Legacy CompactLogix Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Legacy CompactLogix Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-legacy-compactlogix/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to create a device connection using the Legacy Allen-Bradley CompactLogix driver. This driver is used to connect to Allen-Bradley CompactLogix PLCs, up to firmware version 20.18. Allen-Bradley devices above this version can be connected to using the Allen-Bradley Logix driver, which we have a separate video on. To get started, I'll navigate to my gateway's config page, scroll down to the OPC UA section and click device connections. Then I'll click create new device. I'm going to select the Allen-Bradley CompactLogix Legacy driver since my device is below firmware version 20.18, which is listed here. Then I'll click Next. First, I'll give my connection a name, so I'll name it Legacy CompactLogix. Then I need to enter the IP address of this device, which I'll enter into the host name field here. I could create my connection now, but I'll call out a couple more connection properties here that might be relevant for you.

**[01:04]** [01:04]
                                    Below the host name is the local address property, and this is the local address that'll be used when establishing A TCP connection. This gives an opportunity to specify an address, but leaving it blank lets the driver just pick an available address. Next, the connection path is a set of four numbers that represents a route to the device's processor. This is used when the device has a special ethernet card versus a built-in ethernet connection, or when another device is being used as a bridge. I don't need to specify a connection path for my connection, but if you do, I'll include a link underneath this video to an explanation of connection paths in our user manual that will help you. The other property of interest is the concurrent requests. This is the number of requests that Ignition will try to send the device at the same time. Increasing this can sometimes increase throughput, but increasing it too much can overwhelm the device. To finish, I'll click Create New Device. Once it's created and has finished browsing, I can view the tags by going to the OPC Client section and clicking OPC Quick Client.

**[02:03]** [02:03]
                                    Then if I expand the folders in my OPC UA server, I'll expand the device connection I just made and now I can see the device's tags.

</details>

---

### 2. Connecting to Legacy ControlLogix Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Legacy ControlLogix Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-legacy-controllogix/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll connect to an Allen-Bradley ControlLogix device using the Legacy driver. To add a new device connection, I'll navigate to the config section of the Gateway webpage. I'll scroll down to OPC UA and then click Device Connections. Next, I'll click Create New Device. Then I'll need to choose the driver I want to use. My PLC is a ControlLogix device with a firmware below version 20.18. So I'll need to select the Allen-Bradley ControlLogix Legacy driver. If your Logix device is on a firmware version above version 21, then you would choose the Logix Driver instead. Once I have the correct driver selected, I'll click next. I'll need to give my connection a name, so I'll call this Legacy ControlLogix. Next, I'll need to provide the host name or IP address of my device. Then if I wanted to connect to the device from a specific network card, I can specify the address in the Local Address field, but I'll just leave this blank, which lets the driver pick an available address automatically.

**[01:06]** [01:06]
                                    The slot number value is the zero based ControlLogix chassis slot number of the processor to connect to. In my case, it's slot zero, so I'll leave the default value of zero. Another property I'll mention here is the connection path. When connecting to an Allen-Bradley processor through a ControlLogix gateway, a connection path is required. I'm connecting directly to mine, so it's not needed. But if you want more information on Allen-Bradley Connection Paths, see the link to our user manual below the video in the resources section. I'll also include a link to the ControlLogix legacy driver page to reference these properties. Since I'm finished, I'll click create. The device will connect, initiate a browse, and then continue in run mode. If I head over to my OPC quick client, I can expand my OPC server, find my brand new device connection, and view my tags.

</details>

---

### 3. Connecting to Logix v21+ Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Logix v21+ Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-controllogix-v21/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Lets take a look at how to connect Ignition to an Allen-Bradley Logix family device that's using firmware version 21 or above. The first thing were going to do is log into the configuration section of the Gateway webpage and scroll down to the device's page of our OPC UA server. We're then going to click on the create new device link and make sure the Allen Bradley Logix driver is selected. This driver can connect to older devices but it's optimized for devices with firmware version 21 and above. Once we have that selected, we're going to scroll down and hit the next button. We can then finish configuring the connection. We can give it a name. I'm going to name mine Logix V 21. And then for the host name property, we put the IP address of the PLC. Mine is 10.20.4.57. We then need to hit the create new device button at the bottom. And once it connects to the device, it'll automatically browse it for any tags. We can then scroll down to our quick client under OPC connections, expand the OPC folder and find our device and you'll notice all of our tags are in here.

</details>

---

### 4. Connecting to MicroLogix Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to MicroLogix Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-micrologix/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show how to set up a connection to an Allen-Bradley MicroLogix device. I'll start in the config section of my gateway webpage, and then I'll scroll down to OPC UA and click on Device Connections. Then I'll click Create New Device. Next, I'm gonna select the Allen-Bradley MicroLogix driver. This driver supports connections to the 1100 and 1400 series MicroLogix PLCs. We have a separate lesson on using the Micro800 driver and connecting to that series of PLCs if you need to refer to that instead. Once I have the driver selected, I'll scroll down and click next. I need to give this connection a name, so I'm just gonna call mine Micrologix. Then I need to provide the hostname or IP address of the device I'm connecting to. If I want to connect from a specific IP address, I can specify that in the local address field, or I can leave it blank to let the driver select one automatically. If I was connecting to my Micrologix device through a ControlLogix gateway, I would need to enter a connection path.

**[01:03]** [01:03]
                                    I'm not, so I'll leave it blank, but if you are, then your path will be unique to your setup. I'll include a link to our user manual page on Allen-Bradley Connection Paths for your reference. I'll also include a link to our page for this driver if you'd like to read more about each property or see the supported connection methods. One last note about the properties, this driver supports the 1100 and 1400 series and 1200 and 1500 series are not fully supported. However, if you are creating a connection to a 1200 or 1500 series Micrologix device, these devices cannot browse. So you'll need to go into the advanced properties and set disable processor browse to true for those connections. I'm finished with my selections, so I'll click create new device. Once it says I'm connected to my device, I should be able to go to my OPC quick client, expand my OPC server, expand my device, and start seeing my tags.

</details>

---

### 5. Connecting to PLC5 Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to PLC5 Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-plc5/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show how to set up a connection to an Allen-Bradley PLC5 device. I'll start in the config section of the gateway webpage, and I'll scroll down to the OPC UA section and click on Device Connections. Next, I'll click create new device. Then I'll select the Allen-Bradley PLC5 from the list of drivers and click Next. I'll need to give this connection a name, so I'm gonna call mine PLC5. Then I need to provide the hostname or IP address of my device. This is all I really need to connect to my device, but I'll mention a couple other properties. The local address property allows you to specify an IP address that you'd like to connect to the device from. Leaving this blank allows the driver to select one for you automatically. If I was connecting to my PLC5 device through a ControlLogix gateway, I would need to enter a connection path. I'm not, so I'll leave it blank, but if you are, then your path will be unique to your setup. I'll include a link to our user manual page on Allen-Bradley Connection Paths for your reference. I'll also include a link to our page for this driver.

**[01:06]** [01:06]
                                    If you'd like to read more about each property or see the supported connection methods. Since I'm done configuring the connection, I'll click Create new device. The device will initiate a browse, and then once it's finished, I can navigate to the OPC quick client, expand my OPC server, expand the device, and start viewing my tags.

</details>

---

### 6. Connecting to SLC Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to SLC Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-slc/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at how we would connect Ignition to an Allen-Bradley SLC device. First, we want to log into the configuration section of the Gateway webpage. Let's scroll down to the OPC UA section and select Device Connections. Next, we'll click on Create New Device. The following page will contain a list of all your installed drivers. Let's select the Allen-Bradley SLC Driver. These PLCs don't have a native ethernet connection, so another device must be used for the connection. For reference, these are the supported SLC connection methods. Let's scroll down to the bottom of the page and hit the next button. Now we can configure a connection. We'll give the connection a name first. Then we can enter a host name, which is the IP address of the SLC processor device. In my case, it's 10.20.4.51 . You'll want to use the IP address of the device you want to connect to. The protocol the SLC processor supports will be detected automatically.

**[01:10]** [01:10]
                                    It will use either of these protocols. As of Ignition 8.1.8, the Local Address property allows you to specify what local address to connect from when establishing a TCP connection. If this box is left blank, then the driver will simply pick the address of an available network adapter to connect from as needed. For more information on how to connect to a SLC device, supported protocols, and connection paths, please see the link to the Ignition User Manual below this video, or review the documentation for the device. For this demonstration, we'll leave all the other fields at their default settings and hit the Create New Device button at the bottom. It will then browse the device for any tags and connect to it. Once we're connected, we can go take a look at all the tags in the device. We'll scroll down to OPC Client and select OPC Quick Client from the menu options. We can expand these folders, find our SLC device, and explore there to see the associated tags in the device.

</details>

---

### 7. Connecting to Micro800 Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Micro800 Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-micro800/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will learn how to connect an Allen-Bradley Micro800 device. We first need to navigate to the config section of the gateway. If I scroll down on my config page, you will see the device connections section under OPC-UA. I'll go ahead and choose device connections to create the connection. We'll click on create new device. On the driver selection screen, we'll choose the Allen-Bradley Micro 800 driver, and we'll scroll down to the bottom of the page and hit next. Now, the only things we need to configure to create the connection are the name and host name properties. I'll go ahead and name my device. For the host name you would type in the IP address of your device. I'll leave the port as the default 4 4 8 1 8. Now, there are some additional configurations you might want to consider when making the connection under the advanced settings here.

**[01:03]** [01:03]
                                    Due to the limitations of the PLC, tag reads and writes are not optimized into fewer requests like they would for other device drivers. So for these settings, you should refer to the user manual Micro800 page, for more information. I have included the link to the user manual below this video. Finally, you would click the create new device button to complete the connection. If the device creation is successful, you will see the status as connected and the enabled property set to true.

</details>

---

### 8. An ENBT Example Video at Inductive University

:::tip Video Link
Watch the video: [An ENBT Example Video at Inductive University](https://inductiveuniversity.com/videos/an-enbt-example/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to connect to an Allen-Bradley ControlLogix PLC through another ControlLogix gateway using ENBT. This is important when you have PLCs on two different subnets and Ignition is only on one of those subnets. By chaining the PLCs together, Ignition will be able to talk to both PLCs at the same time. Before getting started, I'd like to walk through a diagram of an example setup. From Ignition, this routes into the first ControlLogix PLC through an ENBT module. Then it goes out a separate ENBT module and into a second ControlLogix PLC, and then goes to its processor. We can tell Ignition how to navigate this with a connection path. Connection paths will be unique to a setup, so let's look at a table that describes how to build one and run through each part. In the example, the first number in the connection path is always going to be a one, and that means to move to the back plane of the first device. The second number is going to be the slot number of the module that we want to move to.

**[01:04]** [01:04]
                                    This example has another ENBT module in slot number three. So the second number in the connection path is a three. The third number is the exit port or the channel of that module. In this case, the ethernet port is port two. The fourth number is going to depend on the module we're connecting to and the target PLC. This will either be a ControlNet address, a DH+ station number, or in the case of this lesson, an IP address of an ENBT module. The IP address here is "192.1.68.0.56". The fifth number is going to be one again to move to the back plane of the second device. And finally, the sixth number is going to be the processor number or the slot number of the module to move to. In this example, we want to connect to the processor in slot zero. Now that we've walked through building a connection path, I'll show you what it actually looks like to do this in Ignition. I'll start in the config section of my gateway webpage, and I'll scroll down to OPC UA and click on device connections and create a new connection.

**[02:04]** [02:04]
                                    The PLC that I want to connect to is a ControlLogix on a firmware version greater than 21. So I'll choose the Logix driver. I'll need to give the connection a name, so I'll just call mine ControlLogix ENBT. Next, I need to specify the host name or IP address of the ControlLogix gateway. So if we look back at that example diagram, this would be the first PLC. Then I'm gonna scroll all the way down to the connection path property. My path is gonna look a little different than the example we looked at earlier, but it's built in the exact same way. My first number is going to be a one to move to the back plane of my gateway. Then my ENBT module is in slot number two. The ethernet exit port is port two. Then the fourth number is the IP address of the ENBT module for the second device, which in my case is 10.25.4.65 and then I need to move to the back plane of the second device, which means I put a one and finally, I'll move to the processor in slot zero. Now that I have my specific connection path configured, I can click create new device.

**[03:07]** [03:07]
                                    Once my device status says connected, I can confirm I'm getting values by connecting to the OPC quick client, and I'll find my device and I can start seeing my tags.

</details>

---

### 9. ControlNet Example Video at Inductive University

:::tip Video Link
Watch the video: [ControlNet Example Video at Inductive University](https://inductiveuniversity.com/videos/controlnet-example/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to connect to a PLC5 through a ControlLogix gateway using ControlNet. Before I walk through the steps, I'd like us to take a look at an example diagram. This diagram depicts two PLCs connected via ControlNet modules. From Ignition, this routes into the first PLC through an ENBT module, then it goes out a ControlNet module into a second PLC's ControlNet module, and then into that PLC's processor. We can tell Ignition how to navigate this route through a connection path, which is a comma separated list of numbers that tell it how to get to the target. PLC. Connection paths will vary depending on your setup, so let's take a look at a table with the rules on creating one. The first number is always going to be a one, and that tells Ignition to move to the back plane of the first PLC. The second number is the slot number of the module to move to. In this example, we would want to move to the ControlNet module in slot number four. So the second number in the connection path would be a four. The third number is the exit port or channel of that module that it'll be exited through.

**[01:07]** [01:07]
                                    In this case, the ControlNet port is port two. The fourth number is going to depend on the module we're connecting to in the target PLC. This will either be a ControlNet address, a DH+ station number, or an IP address of an ENBT module. In this example, we're connecting via ControlNet and the ControlNet address is 12. The fifth number is one again, and this would signify moving to the back plane, and then the sixth and final number would then be the processor slot number or the number of the module to move to. The processor in this example is in slot zero. An important note about the last two numbers is that they're only necessary when the target PLC is a ControlLogix, like in this example. If connecting to a PLC5 or SLC, then we don't need the last two numbers. Now that we've walked through how to build a connection path, let's see how this is actually done in Ignition. I'll start in the config section of my gateway webpage, and I'll scroll down to OPC UA and click on device connections and create a new connection. In this case, I'm going to connect to a PLC5, so I'll choose the Allen-Bradley PLC5 driver.

**[02:10]** [02:10]
                                    I'll need to give the connection a name, so I'll just call mine PLC5 ControlNet. Next, I need to specify the host name or IP address of the ControlLogix gateway, so if we look back at that example diagram, this will be the first PLC. Then I need to enter my connection path. My path is gonna look a little different than the example we looked at earlier, but it's built in the exact same way. My first number is going to be a one to move to the back plane of my gateway. Then my ControlNet module is in slot number three. The ControlNet exit port is port two. Then the fourth number is the ControlNet address for the second device, which in my case is 14. Since I'm connecting to a PLC5 and not a ControlLogix device, I don't need the one and the zero at the end, so I'm done with my path. Now that I have my specific connection path configured, I can create the connection. Once my device status says connected, I can confirm I'm getting values by navigating to the OPC quick client, or I'll find my device and then I can start seeing my tags.

</details>

---

### 10. A DH+ Example Video at Inductive University

:::tip Video Link
Watch the video: [A DH+ Example Video at Inductive University](https://inductiveuniversity.com/videos/a-dh-example/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to connect to a SLC using Data Highway Plus from a ControlLogix Gateway. Before walking through the steps, I'd like to take a look at an example diagram. This diagram depicts three SLC devices connected to a ControlLogix gateway via Data Highway Plus, or DH+, for short. To connect to these PLCs from Ignition, we need to navigate into the first PLC via its ENBT module, out one of its DH+ channels and into one of the SLCs. We can tell Ignition how to navigate this route with a connection path, which is a comma separated list of numbers that tell how to get to the target PLC. Connection paths will vary depending on your setup, So let's take a look at a table with the rules on creating one. The first number is always going to be a one, and that tells Ignition to move to the back plane of the first PLC. The second number is the slot number of the module to move to. We would want to move to the DHRIO module in slot number three. So the second number in the connection path would be a three.

**[01:03]** [01:03]
                                    The third number is the exit port or channel of that module that'll be exited through. In this diagram, that depends on the desired PLC. If connecting to SLC X, then we'd want to use DH+ Channel A, which uses the number two. If connecting to SLC Y or Z, then we'd use the DH+ channel B, which is three. The fourth number is going to depend on the module we're connecting to in the target PLC. This will either be an IP address of an EMBT module, a ControlNet address, or a DH+ station number. In this example, we're connecting via DH+, and the station number will vary depending on the PLC. We would put 21 for SLC X, 40 for SLC Y, or 41 for SLC Z. A really important note about the DH+ station numbers is that these are octals. So be sure to put your station number in octal format and not in decimal format. If we were connecting to another ControlLogix device, we'd want to include another one and zero to move to the back plane and then the processor, but that's not required with PLC5s or SLCs.

**[02:04]** [02:04]
                                    Now that we've walked through how to build a connection path, let's see how this is actually done in Ignition. I'll start in the config section on my gateway webpage, and I'll scroll down to OPC UA and click on device connections and create a new connection. In this case, I'm going to connect to a SLC, so I'll choose the Allen-Bradley SLC driver. I'll need to give the connection a name, so I'll just call mine SLC DH+. Next, I need to specify the host name or IP address of the ControlLogix gateway. So if we look back at that example diagram, this will be the first PLC. Then I need to enter my connection path. The path is gonna look a little different than the examples we looked at earlier, but it's built in the exact same way. My first number is going to be a one to move to the back plane of my gateway. Then my DHRIO module is in slot number six. I wanna move out of DH+ channel A, so I'll need to put a two. Then the fourth number is the DH+ station number, which in my case is one.

**[03:04]** [03:04]
                                    Now that I have my specific connection path configured, I can create the connection. Once my device status says connected, I can confirm I'm getting values by navigating through the OPC quick client, I'll find my device, and I can start seeing my tags.

</details>

---

### 11. Micro800 Tag Export and Import Video at Inductive University

:::tip Video Link
Watch the video: [Micro800 Tag Export and Import Video at Inductive University](https://inductiveuniversity.com/videos/micro800-tag-export-and-import/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    The Micro800 driver supports OPC-UA server browsing for global scoped variables. However, there are a few exceptions of global scoped variables that cannot be browsed. These include UDTs booleans and non indexed arrays. These will need to be manually added in order to be used in ignition. They could be added through individual addressing. However, we recommend creating a tag import file, which can be generated from the connected components workbench. I'm here in the connected components workbench application, used to program my my Micro800 PLC. While in your Micro800 project, you'll want to navigate to the project organizer pane and right click on the desired controller. Then you would highlight export on the pop-up menu and choose the variables option. Finally, you would choose a download location and save the file as a CSV. Once the CSV file is downloaded, we can navigate to the ignition gateway on the gateway.

**[01:05]** [01:05]
                                    Go ahead and select the config tab. I'll scroll down here and select device connections under OPC-UA on the connections page, we can use this more option to access addressing or importing or adding non browsable tags. Using the load configuration button, we can import the CSV file gathered from the connected components workbench. I'll click on load to import my file. Now the list of tags that populate here will be filtered to only non browsable tags. This helps to avoid any redundant tags or collisions. If everything is looking good here, go ahead and save the configuration. One thing to keep in mind is that local scope variables, which cannot be accessed, are not filtered out of the import file. For example, if I go to the quick client here and drill down to my 870 device, you'll see a local scope function block variable. Trying to read this variable will result in a null value. For more information on tag addressing and imports, refer to our user manual.

**[02:04]** [02:04]
                                    I've included a link to that manual below this video.

</details>

---

### 12. Connecting to Modbus Device Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Modbus Device Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-modbus-device/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's connect to a device with one of Ignition's Modbus drivers. From the homepage of your gateway, go to the Configure section. Scroll down to the OPC UA section, and select Device Connections. Here you can see I don't have any devices configured yet. Let's begin by clicking the Create New Device link. The next page will contain a list of all your installed drivers. Scroll down to the Modbus section and you'll see that there are several options available. In most scenarios, you'll probably be using the Modbus TCP driver here. However, if you know you're working with an RTU that connects to a device via Modbus RTU over Serial, the Modbus RTU driver is what you should select. If you're working with Modbus RTU that implements the Modbus protocol over TCP, choose Modbus RTU over TCP. If you're uncertain about what to use, check the device's documentation to determine what protocols it supports.

**[01:06]** [01:06]
                                    The different RTU drivers will only connect with RTU configurations that match their requirements. I know I'm not working with an RTU over Serial or an RTU over TCP, so I'll select the Modbus TCP driver. Now, let's scroll down to the bottom of this list and click the Next button. We need to give the device connection a name, so I'm gonna call this Modbus. Under Connectivity, we need to specify a host name. For this demonstration, I'm working with a local Modbus simulator, and I have that local IP saved on my clipboard already, so I'm just going to paste that in. You'll want to put in the host name or IP of the Modbus device that you want to connect to. Next, I'd like to highlight a few specific properties. First, the port defaults to 502. Typically, this is the default port from Modbus TCP over IP, so in most cases, you can leave this setting alone.

**[02:03]** [02:03]
                                    However, if your device is configured to communicate over a different port, you can fill in that value here. As of Ignition 8.1.8, the Local Address property allows you to specify what local address to connect from when establishing a TCP connection. If this box is left blank, then the driver will simply pick the address of an available network adapter to connect from. If you check the Show Advanced Properties checkbox here and scroll down, you'll see a list of other available properties. Most of these properties can also be left at the default setting, but there are a few especially useful ones I'd like to call attention to here. One new property added in Ignition version 8.1.0 is the property called Concurrent Requests. This value represents the number of requests that Ignition will try to send to the device at the same time. Increasing this number can sometimes help with your request throughput, but increasing this too much could overwhelm the device and negatively impact communications with that device.

**[03:07]** [03:07]
                                    Now let's talk about Reverse Word Order. Some device manufacturers read consecutive registers in varying word orders because the Modbus specification doesn't include a section for reading and writing 32-bit values. Because of this potential variation, when someone tries to read a multi-word 32-bit value, they might get an incorrect tag value initially. The Reverse Word Order property is set to false by default, so when reading and writing 32-bit values from or to a Modbus device, the high word comes before the low word. If this option is set to true, however, the low word comes before the high word instead. If an incorrect tag value is coming through due to this variation, toggling this property would then return the expected tag value. Another important property to focus on is Zero Based Addressing. The driver defaults to one-based, meaning that the address range will start at one.

**[04:05]** [04:05]
                                    However, you can toggle this property to start the address range at zero instead. The device I'm trying to connect to is one based, so I can leave this setting as is and move to the next property, Span Gaps. The span gaps property optimizes requests by grouping them into large chunks, but if a bad address is present in that range, then every other address in that request will also be flagged with bad quality. This leads to a large amount of bad quality tags that appear in the tag browser. In this scenario, toggling Span Gaps can aid in finding those bad addresses. With that, I'm going to scroll back up and uncheck Show Advanced Properties, and then we can click Create New Device. We start off with a disconnected status, and then it'll switch over to connected. Now that we have an active connection, we can start creating tags manually or with Ignition's address mapping feature. We'll see examples of both methods in upcoming videos.

</details>

---

### 13. Modbus Addressing Video at Inductive University

:::tip Video Link
Watch the video: [Modbus Addressing Video at Inductive University](https://inductiveuniversity.com/videos/about-modbus-addressing/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Since the Modbus protocol doesn't support browsing, we can manually create OPC tags from our Modbus device connections. To see how this process works, we'll start in the designer and go to our tag browser. Let's create a new OPC tag from scratch. I'll click on the plus sign, select new standard tag, and then OPC tag to open our tag editor window. I'll change the name of our new OPC tag to HR1. With this tag, I'm going to try to retrieve the first holding register within my device connection. To do this, we'll need to set the OPC server for the tag. I'll select our Ignition OPC UA server from the dropdown. Then we need to figure out what to set as the OPC item path. My device connection name is Modbus, so I'm going to begin the OPC item path with that device name in square brackets. Starting with the device name in brackets is a typical pattern with Ignition drivers.

**[01:04]** [01:04]
                                    Next, we need to reflect the fact that the holding registers for the Modbus protocol are in the 40,000 range. Assuming one-based addressing, I need to access the address at 40,001. To specify that address, you don't have to type out 40,001. Instead, you can use the HR designator, referencing the holding registers table. So, putting the HR shortcut in the OPC Item Path starts you with a 40,000 address, and then we just need to add a one to reach that first address. Let's test it. I'll click ok, and after a moment to connect, you can see that the HR1 tag now has good quality in the tag browser. I'll set that tag value manually. I also have a few other Modbus-related OPC tags pre-configured here. I'll double-click on this HR1_Bit0 tag, and we can see an example of how the Modbus driver can handle bit-level addressing. From the item path, I can specify individual bits that I want to retrieve.

**[02:08]** [02:08]
                                    This tag uses a very similar path to our HR1 tag, but I added this .0 so it will read and write to the first bit of the holding register. Your Modbus device must support the Mask Write command for this to work, and your device documentation should specify if it has that capability. Next, let's take a look at this BCD Value tag. Some devices that utilize the Modbus protocol store data in a BCD format. As a result, we have some designators for those situations. Here, you can see I have a holding register with a 16-bit BCD conversion, and it's starting at the fourth address. Next, we'll take a look at this Consecutive HR tag. This OPC item path contains an HRF designator. This represents two consecutive holding registers with a a float conversion at the sixth address. There are many ways to accommodate other data encoding commonly used by Modbus-supported devices.

**[03:08]** [03:08]
                                    For a full listing and description of each available designator, please check out the link to the Ignition User Manual article about Modbus Addressing below this video.

</details>

---

### 14. About Modbus Address Mapping Video at Inductive University

:::tip Video Link
Watch the video: [About Modbus Address Mapping Video at Inductive University](https://inductiveuniversity.com/videos/about-modbus-address-mapping/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    Now that we know how to manually create tags for a Modbus device connection, let's leverage the Modbus driver's address mapping feature to create a large number of tags simultaneously. In our gateway, we'll go to the config tab, scroll down to the OPC UA section, and select device connections. We'll just verify that our Modbus device is connected, and then we can click on this more dropdown. Let's select addresses, and the Address Configuration for Modbus page will open. This page allows you to define multiple ranges of addresses in the device that will later be exposed in Ignition's OPC UA server via the Connected Devices window. I'll start by clicking Add Row. A new row will appear and I can configure a mapping here. In this example, I'm going to add this V prefix -- V underscore. This will form part of the name for each of the mapped items. You can use any prefix you like except for designators used by the driver such as HR or C.

**[01:07]** [01:07]
                                    For more information on Modbus address mapping and reserved prefixes, please see the link to the Ignition user manual below this video. So each of the items created by this row will now be assigned the name V_, followed by a number. Now, let's consider the start and end. The number of items Ignition creates for this range depends on the start and end values we enter. As of Ignition 8.1.42, The start and end range must be set between zero and 65,535. The gateway will throw an error if star and end values are outside of that range. So for this example, I'll put in zero for start, a nine for end. With that range in place, it will create 10 items, all with a prefix of V underscore-- V_0, V_1, and so on. I'm going to skip over the Step and Unit ID for this example.

**[02:05]** [02:05]
                                    Let's leave the Modbus type as Holding Register Int16. Then we'll need to specify a Modbus address. This corresponds to the location on the holding registers table where we're going to start with the zero value. In this case, I'm going to say our Modbus address is one for the first address on the holding register table. In other words, V underscore zero would be Modbus address one, v underscore one would be Modbus address two, and so on, counting up by one each time. Now we can save our work and the device connection will reinitialize. While it's doing that, let's go take a look at the OPC Quick Client. I'll scroll down to the OPC Client section and select OPC Quick Client. Here, we can expand the Ignition OPC UA server, then devices. We'll open up the Modbus device connection and look for the new Unit ID folder. Let's expand that, and we can see a new V_zero to V_nine folder.

**[03:03]** [03:03]
                                    Inside that, we can see each of our mapped items. So now, I can go into my designer, browse my connected devices, drill down to my new V_ folder, drag these V's into the tag browser, and create a bunch of Ignition tags all at once. Now let's take a look at another example in our gateway. We'll head back to the OPC UA section and navigate back to our connected devices page. Here, I'll click on the more dropdown again next to my Modbus device and select addresses. This time, I have multiple configurations saved as a CSV that I'd like to import using the import configuration functionality. I'll click on choose file and browse to find the CSV file I want to import. Before I click on this import configuration button, I want to point out that importing a configuration will wipe out the prior rows here.

**[04:03]** [04:03]
                                    If you already have some configurations defined, you could instead export and merge those into the file you want to import. That way, you'd have all your configurations in a single file. Now, I'll click the import configuration button. You can see it imported a bunch of new rows from that CSV file. Before I click on the save button though, let's take a quick look at the radix. By default, we're starting with a radix of 10, so all these mapped items we're creating are 10-based. In some scenarios, it may be preferable to make it eight-based or octal instead. So let's change the radix to eight and take a look at the end result once we save our values. Let's head back to the OPC client section and go into our OPC Quick Client again. We can drill down to our OPC UA server, devices, Modbus device Connection, and Unit ID zero. We have multiple folders here now, one for each row we imported in. Because these are octal values, we start at CC zero, go to seven, and then jump to CC 10.

**[05:09]** [05:09]
                                    So, even though the Modbus protocol isn't browsable, you can use the Ignition address mapping feature to create browsable areas of the device and then create a large number of tags in just a matter of seconds.

</details>

---

### 15. Modbus Over Serial Device Connection Video at Inductive University

:::tip Video Link
Watch the video: [Modbus Over Serial Device Connection Video at Inductive University](https://inductiveuniversity.com/videos/modbus-over-serial-device-connection/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Ignition is able to communicate with Modbus PLC devices over a serial link using the Modbus RTU protocol. To be able to establish disconnection, you must first have both the Modbus driver module, as well as the serial support gateway module. Once those two modules are installed, you will be able to create the Modbus RTU over a serial device connection. Let's take a quick look at how to create the device itself. To do that from the configure page, I will head to the device connection section under OPCUA here on the left. From there, you can see I have no devices created. So let's press the create new device button to launch the device creation wizard. Here, we see a list of all the communication drivers available in my gateway. We are interested in the Modbus RTU driver. As you can see from the description, it will allow for our RTU over serial connection. I will head to the bottom and click next. I will name the device serial one and give it a description. Under connectivity settings, we see our serial port setting, which allows us to select our communication port. In my case, my device is on serial port comm three. So I will type that on here. I also need to configure my bit rate to be 9,600. Everything else looks correctly configured for my application. So I will move on to a few settings I want to highlight under advanced properties. Most of these properties can be left alone. But one important property to point out would be the zero-based addressing. The driver defaults to one base. Meaning that the address range will start at one. However, you can toggle this property to start the address range at zero if needed. The device I'm trying to connect to is one base. So I can leave this setting alone. The next property down, span gaps, optimizes requests by grouping them into large chunks. But if a bad address is present in that range, then every other address in that request will also be flagged with bad quality. This leads to a larger amount of bad quality tags that appear in the tag browser. In this scenario, toggling span gaps can aid in finding those bad addresses as only the badly addressed tags will be flagged as bad quality. I am done with my devices configuration, so I'm going to click the create new device button. That's it. We have created our device connection. Now that we're connected, we can start creating tags manually or with Ignition's address mapping feature. We'll see examples of both methods in upcoming videos.

</details>

---

### 16. Connecting to S7 Devices Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to S7 Devices Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-s7-devices/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at an example of connecting to a Siemens S7 device. We'll start off in the gateway in the configure section, and then we'll scroll down to the familiar OPC UA Device connections page. Next, we'll click on the create new device link, and we'll scroll down this long list of drivers we have until we get to the Siemens section. You can see we have four drivers here, and of course, each one pertains to a specific series of device, so 1200, 1500, 300 and 400. Now for this video, I'm going to be connecting to a 1200 series device, but the following steps would be the same regardless of which one of these you use. Before we move on, I do wanna point out for the 1200 and 1500 series, there are some device site configurations and considerations that need to be made when using our drivers. For a list of all the considerations and configurations, please see the Siemens section of the Ignition User manual, which I've linked below this video.

**[01:07]** [01:07]
                                    So we'll continue here and select the S71200 and click the next button. We need to name this connection, so let's call this S71200. Under connectivity, we need to specify a host name. I'm just going to paste in the IP address of my device. Now, technically that's all we have to do. I do want to point out though that we do have some advanced properties down below. I'm going to leave these as the default settings, but if you wanted to or needed to change the port or the PDU size, anything like that, these properties do exist here. Again, I'm not making any changes, so I'll just click the create new device button down below. The status will start off as disconnected but in just a moment changes to connected, and that's it. we're connected. The next step is to create some tags, but we'll take a look at how to do that in a later video.

</details>

---

### 17. About Siemens Addressing Video at Inductive University

:::tip Video Link
Watch the video: [About Siemens Addressing Video at Inductive University](https://inductiveuniversity.com/videos/about-siemens-addressing/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we'll take a look at manually creating tags from an S7 device connection. The S7 protocol does not support browsing, but we can manually create tags easily. We'll start in the designer and focus on the tag browser here. To start, let's create a new OPC tag by clicking on the add icon and highlighting the new standard tag option. And then choosing OPC tag. Let's change the name on this tag here. We'll call this input zero. You'll see why in just a moment. I'm going to leave the data type as an integer. Let's set the OPC server to ignition's OPC UA server. Next, we need to specify the OPC item path. As usual with ignitions drivers, we need to specify the name of the device connection in the square brackets. In the previous video, I named the connection S71200, so let's type that out in square brackets. Now we need to figure out what the rest of the path should look like using the driver syntax.

**[01:06]** [01:06]
                                    Now, typically the syntax contains an area, a data type and an offset. So for example, I could type I for inputs, W for word, and zero for offset. So in the inputs area, I want to show the value for the word at offset zero. We'll click okay, and in just a moment, the tag comes back with good quality and now we can see the value. For our next example, I already have a string tag created, and you can see the string value is shown as I am a Siemens S71200. I'll double click on it and let's take a look at the item path. So in this case, I'm trying to fetch a string. So I've changed the data type to a string. I'm saying DB2 for the data blocks area named DB2. When specifying a data blocks area, we do need to separate the area and the data type with a comma, and I've set this at offset 20. Additionally, I added a dot 23 to specify the string length. Now you don't have to memorize the syntax here.

**[02:05]** [02:05]
                                    If you take a look at the Siemens section of the ignition user manual, which I've linked below this video, we list the full syntax and show many examples. So make sure to check out the user manual for more information.

</details>

---

### 18. Connecting to DNP3 Devices Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to DNP3 Devices Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-dnp3-devices-legacy/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at how we can connect to a legacy DNP3 device in Ignition. First, since we're already logged in, we'll go to the configure section of the Gateway webpage and scroll down to the OPC UA section. Here, we'll select Device Connections. A list of the existing device connections will appear. Next, I'll click Create New Device. We're looking for the Legacy DNP3 driver option. This option only shows up if you have the DNP 3 module installed. I'll select that driver and hit next. We can then give our device connection a name. I'll call mine DNP3Legacy. Now let's enter the host name, which is the IP address of the device we want to connect to. Mine is 10.20.1.108. As of Ignition 8.1.8, the Local Address property allows you to specify what local address to connect from when establishing a TCP connection.

**[01:02]** [01:02]
                                    If this box is left blank, then the driver will simply pick the address of an available network adapter to connect from as needed. Next, let's talk about the source address and the destination address. These two properties will actually be configured in the DNP 3 device itself initially. Then in Ignition, they're reversed. If the source address in the DNP3 device is a four, that will become our Ignition destination address. If the DNP3 destination address is a three, that will become our Ignition source address. This swap will allow it to properly connect using the settings that appear here. Another important property to highlight is the Unsolicited Messages Enabled property. When that property is enabled, it will allow Ignition to accept unsolicited messages. What this means is that Ignition will communicate with the device a single time when the connection is set up, and then it won't request any more data. Instead, Ignition will passively listen for any data that's being sent from the DNP3 device. Not all DNP3 devices support doing this, so it's important to know whether or not your device is able to send unsolicited messages.

**[02:09]** [02:09]
                                    Please refer to the documentation for the DNP3 device on how to set up this capability. Once our configuration is complete, we can hit Create New Device at the bottom. Depending on the settings we've used to create our DNP3 connection, our status will then either say idle or connected.

</details>

---

### 19. About DNP3 Addressing Video at Inductive University

:::tip Video Link
Watch the video: [About DNP3 Addressing Video at Inductive University](https://inductiveuniversity.com/videos/about-dnp3-addressing/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll use the DNP3Legacy device connection that we set up in the previous lesson to explore DNP3 addressing, tags associated with the legacy device, and legacy DNP3 scripting tools available within Ignition. To get started, I'll go to the Config tab, scroll down to the OPC UA section, and select Device Connections to confirm that our DNP3Legacy device is set up and connected within the gateway. Now we can switch over to our designer. First, we'll head to the tag browser. We'll need to take a look at the Connected Devices window in order to access the Ignition OPC UA Server, so I'll click on the plus sign and select Browse Devices. Here, I can expand Ignition OPC UA Server and the devices folder to find my DNP3Legacy device. Next, I'll expand the DNP3Legacy folder, and we can take a look at the two folders inside-- internal indicators and points.

**[01:04]** [01:04]
                                    The internal indicators folder contains a number of tags that are used to assess the status of the device. If there are other tags associated with the device, the points folder will contain a list of those tags, including analog inputs and outputs, counters, and frozen counters. My simulator doesn't have any tags of that nature associated with it, so let's use one of the special built-in features and add some Aliased Points tags instead. If we go back to our gateway, we can click the more button next to our DNP3Legacy device. A link will appear for Aliased Points. Here, we can address a number of points to add to our DNP3Legacy device. We can also export our current configuration or import any previous configurations we may have created. I'm going to start by clicking on Add Row. Now, We can add a point address. Mine is G40V1I3.

**[02:05]** [02:05]
                                    That G,V, and I stand for group, variation, and index, and it's how Legacy DNP3 devices do their addressing. Next, I can enter a path to that tag. If I just want my tag to appear in the root folder, then I would put a slash and then my tag name. However, I can precede my tag name by putting as many folder names as I want. For example, I'll put /folder at the beginning of the path. Now my tag is going to appear in a folder called folder, and the name of my tag is going to be tag. Finally, I can enter a short description for my tag. I can add as many rows as I want and set up as many tags as I want. I have what I need, so I'm going to scroll down and hit Save Configuration. Let's go back to our designer. I'll refresh the OPC browser in the Connected Devices window and navigate to my device again. Now, you'll notice there's a new folder available called Aliased Points.

**[03:03]** [03:03]
                                    If I expand the Aliased Points folder, you'll notice it contains a folder called folder. I open it and there's my tag called tag exactly like we set up in the path. One of the other more advanced features of the Legacy  DNP3 driver is that we can interface with it directly through scripting. I have a button in my view here, and if I right click on it and select configure events, I can look at a component event as a quick example. I'll select onActionPerformed, hit the plus sign, and select script. If I type in system dot dnp3 dot, the autocomplete popup will appear with a list of built-in scripting functions that I can use to interface directly with the device. All of these functions contain descriptions of the function as well as descriptions of all the parameters. One note of caution, though. All of these functions are considered advanced and you should only use them if you're familiar with both scripting and your device.

**[04:04]** [04:04]
                                    For more information on connected devices, Aliased Points, and scripting functions related to the Legacy DNP3 device, please see the links to the Ignition User Manual below this video.

</details>

---

### 20. Connecting to DNP3 Devices Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to DNP3 Devices Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-dnp3-devices/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to connect to a DNP3 device in Ignition. Here we'll start out in our Ignition gateway's Config tab. To create a new device connection, we can scroll down a bit, to the OPC-UA section, where we can select its Device Connections link. This takes us to the Devices page, where we'll click on Create New Device. Here we see a list of all available device driver types. We'll select the DNP3 Driver option, scroll down to the bottom and click Next. Now we're prompted to configure the parameters of our device connection. The primary ones for us will be: the Name, a name for the device connection, which I'll set to DNP3_device; Hostname, the device's hostname or IP address, which for me will be 10.20.4.103; and the Source Address and Destination Address, those of the master and the outstation, which for my device will be 30,000 and 0.

**[01:15]** [01:15]
                                    Your device parameters, of course, will vary. This is the minimal set of parameters needed to set up the device connection. We may also choose to configure some of the Data Acquisition parameters. The DNP3 driver supports event-based polling by class. So let's retain 10 second polling for Class 1 by keeping the 10,000 millisecond default. And perhaps we'll assume we are only doing Class 1 polling, so we'll disable Class 2 and Class 3 polling, by setting their poll rates to 0. We also have the option to enable Unsolicited Event Classes by setting this parameter to some comma separated list of classes 1, 2, and 3. We'll leave this at its default disabled state.

**[02:03]** [02:03]
                                    There are also other advanced customization parameters available. For full descriptions of all settings, please refer to the Ignition User Manual. We'll go ahead and accept all other default parameter values by clicking on Create New Device. This brings us back to the earlier Devices page where we started. If we're successful, we'll see the specified dnp3_device added to the device connections list, with a status of Connected. Next, let's head over to our Designer. The DNP3 driver offers OPC Browsable capability of our tags, also called points by DNP3. Let's inspect some available tags by clicking Add, Browse Devices, then select the OPC-UA server and expand it: Devices, dnp3_device, Points. We see that the available points are named according to their function in an index value, such as AnalogInput5.

**[03:06]** [03:06]
                                    Next, let's select a few tags for import. How about AnalogInput1, AnalogInput2, AnalogOutput2 and AnalogOutput3. We'll click the arrow to stage them for import. and then click. OK. If we'd like to rename any of these to use their known group, variation and index, or GVI, point naming, we can do so by editing their Name property in the Tag Editor. So for example, for AnalogInput1, we'll change AnalogInput1 to group 30, variation 1, index 1. And likewise for AnalogOutput2, we'll change AnalogOutput2 to group 40, variation 3, index 2. However, note that by doing so, we are reverting to legacy DNP3 polling, and won't be making use of available event-based polling.

**[04:13]** [04:13]
                                    Finally, to make use of event-based polling, we need to set two values in the containing tag group. So we'll head over to Edit Tag Groups, select the tag group, here it's going to be Default, and in the OPC Uua section, set the Sampling Interval to 0 and the Queue Size to some desired value, perhaps 100. Now our device connection is configured to provide the latest 100 event values at the Class 1 sampling rate that we configured in our Gateway device connection. So in this lesson, we've shown how to create and configure a device connection with our DNP3 driver in Ignition.

</details>

---

### 21. Connecting to Omron FINS Devices Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Omron FINS Devices Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-omron-fins-devices/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at creating device connections with the Omron FINS driver. We're starting off here on the Gateway, under the config section's overview page. I'll take the quick link here to create a new device connection, which if I scroll on down here is just a shortcut to the device connections page under the OPCUA area. Let's go right back to the top here and I don't have any device connections. So let's get started by creating one. I'll click the create new device link. And from our wealth of options here, I'm going to scroll on down and we do have two Omron options. One for TCP and one for UDP. I'm going to start with the TCP option, but I'll come back and show you the UDP option as well. Let's keep scrolling on down. I'll click next. Like all device connections, we do need to give this a unique name here. So, how about FINS TCP. And we simply need a host name for the TCP option. Now, my colleague that set up the device is telling me it's sitting at this IP address, so I'll just type it in and that's all we really need. So I'll scroll on down and you'll notice that I'm skipping by a whole bunch of other properties here. There are descriptions for these properties in the user manual if you're curious on what they do, but I'm going to skip over them for now and I'll click the create new device button. And we can see that it's connected. Now, let's try that again. Let's go back and take a look at the UDP option. I'll click the create new device link again. And we'll scroll back down. Of course, this time, we will select the UDP option. Let's keep going down and I'll click next. Again, we need a name here, so how about just FINS UDP. Now, we don't have a host name property, but we do have these other properties. So there's five properties you'll need to set if you're using the UDP option. To start with, you need a bind address. So the bind address is the IP address of your gateway. So I'll just type mine in here. Next up would be the remote address. So this would be the IP address of the device we're trying to connect to, so I'll just type that in again. And let's go down a little bit further here. We need to look under the FINS settings here. So the first one would be the FINS source node. Now this is the last octet of your Gateway's IP address. So if we look back up here, we see 28, so I'll type in 28. For the FINS destination network here, this is the address number of the FINS device. This is typically configured in the routing table for your device, so this is something on the hardware side. Now, my colleague is telling me that I should type in a one here. Last would be the FINS destination node. This is the node number for the device. This is typically the last octet of the device's IP address. As we saw earlier in my device's last octet is 23, so 23. And that's it. Now at this point, we can go down and click the create new device connection button, but that's all you really need to know to start creating these connections.

</details>

---

### 22. Omron FINS Addressing Video at Inductive University

:::tip Video Link
Watch the video: [Omron FINS Addressing Video at Inductive University](https://inductiveuniversity.com/videos/omron-fins-addressing/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at creating tags for Omron FINS device connections. We can see here I have a device connection already configured. And I want to access some values inside of this device connection. There are a couple of ways to do this, one option which I'm not going to show you, is manually creating OPC tags. So going to the designer and creating an OPC tag. It's kind of a slow method to do so I'm not even going to bother showing you. Instead, I'm going to show you the addresses page here on this device connection. Now this is an Omron FINS TCP connection. What I'm going to show you here would work just as well on a UDP type connection, they both use the same addresses page. So what I'm going to do to start is, I'm going to click on the more drop down here and I'm going to click on addresses. And then we see this piece of user interface right here. So what this does is, it allows us to effectively create nodes inside of our OPC UA server that are then browsable. And these nodes can be assigned addresses, from inside of the devices programming. Now, to really understand how this works, we need to know a thing or two about syntax and this particular driver. So I'm going to switch over to our user manual here, we do have an Omron FINS driver page here. And the page may change over time depending on when you watched this video. But, I did want to head over to the examples area here. Where we can see it has some syntax examples and then it gives you some more flashed out examples. So when you're filling out that addresses page on the gateway here, we more or less follow this example here. And by more or less I mean, some of these items are actually optional. So in the very least willing to start with the area. Now if I scroll up just a little bit here, there is a table that basically spells out all the we call them data areas here, but I believe in the device they're called memory areas. But basically the various areas inside of the device. As well as the notation that we'll need to use to access them. Then I scroll down a little bit more back to that example there. We see that the next part here is the data type, which does have a set of curly braces around it. But then does have some angle braces inside of it. Now this part is optional, but it's probably a good idea for us to go ahead and specify this. Next step would be the offsets, and then optionally the bit if we need to. Now for this example here, my colleague that's handling the programming for this device I'm connected to is telling me that in the auxiliary bit area, so if I scroll up here. Auxiliary bit area would be AR or A, there's a float so we'll put down the data type at offset 723. So if I head back to my gateway here, I'm going to add a row. So an auxiliary bit would be AR, we're going to do the angle brackets so I'm going to type float and then the offset so 723. So that points to the location in the program. I need to enter at least a tag path, so the tag path here represents the node that we're going to be browsing for inside of our OPC UA server. So, let's just call this how about test tag for now, there's an optional description here. You really don't see this on the tag as you're browsing for it, it's really more or less for this page here as well as if you create an export file it'll contain the description, which is nice when you have a lot of rows here. But to start with let's go ahead and save the configuration and we can take a look at the quick client, but I'm actually going to switch over to the designer. So, I'm going to bring my designer over here and have a designer open, doesn't really matter how you get here, but you definitely want to take a look at the tag browser. I don't have any tags inside of my tag provider here we see that it's empty. I'm going to click the OPC browser button. I'm going to go down into ignitions OPC UA server. Go down to devices we do see our FINS TCP device connection. I'll go into the tags folder and hey, there's that test tag we created a moment ago. So, if I drag this over into the text folder here it should create a float OPC tag with a value of 3.14. We'll wait for it to come through and there we are. Now if I were to double click on this tag here, just to show you the OPC data path you'll notice, that part of the path here looks pretty familiar the AR float 723. Of course, we have the device name and the namespace that all of our drivers use. Now, I'm going to close this here and I'm going to come back to this. So I'm actually going to just dock this to the side for right now. If I go back into that addresses page, so I'll click more again, we'll go back to addresses. And for the test tag here, I didn't mention it earlier but this can actually be a path. So, if you just add a say a folder name right, so folder1/ how about folder2/, right. We'll go ahead and we'll save. I'll head on back to my designer. Now, adding those folders to the tag path doesn't really impact our existing tag. This is using the address from that item we created so we can freely add folders after the fact if we need to. What it did change is, we need to refresh on our OPC browser since it's not polling. Let's go back in we'll go to device, we go to FINS TCP back to tags. And now we got folder one, folder two and now our test tag, right. So if you wanted to add a little bit of structure inside of the OPC browser, you can do that with the tag path. Now the last thing I wanted to show you, which is a nice time saver, let's go back to that addresses page here. Now if you fill this out, you had a bunch of rows you can export the configuration and then move it to, a different device connection or a different gateway or what have you. And then of course, you can load in with the load configuration file button here. But what I wanted to show you, I'm going to go ahead and browse real quick. I have this TSV file here, which I'm going to open real quick just to show you before I import it in. Now my same colleague that's been programming this device, created this file for me. So they are using the CX programmer software to program the device. And they actually just created this export for me, directly from that software. So our driver can take this export here and just create a whole bunch of entries in this addresses table. So I'm going to select that file, I'll click open. I'll click load here, I can also append to the current configuration so if I wanted to maintain that test tag here, we'll just add the entries in this configuration file after. So I'll click Load now and you can see, it went ahead and added a whole bunch of entries here which I'm just going to scroll down here. I'm going to save and of course, if we go back to our designer. We'll just refresh the OPC browser, head on back down and just like that, we got a whole bunch of extra entries here. So that should give you enough information to get started with creating tags here. Again, you just going to want to lean pretty heavily on the user manual page just because it has all the various, data types and notation that you're going to want to use, when creating tags from this device connection.

</details>

---

### 23. Connecting to Omron NJ Devices Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Omron NJ Devices Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-omron-nj-devices/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Ignition has a driver that allows you to connect to Omron NJ devices. Like with any device connection, we must configure it in the Ignition gateway, where I am currently. From our configure page, I can head to the device connection section under OPC UA, where I will find all of my current device connections. I will click the create new device option, and I will scroll down to find the Omron NJ driver. This option is only available if the Omron module is installed. The module can be obtained and downloaded from our website's downloads page. With my driver selected, I will press the next button to see my device's configuration. All I need to do now is give my device a connection name and the IP address to my device. Once I press the "Create New Device" button, my device will be created and will be ready to use once it switches to a connected state.

</details>

---

### 24. Omron NJ Addressing Video at Inductive University

:::tip Video Link
Watch the video: [Omron NJ Addressing Video at Inductive University](https://inductiveuniversity.com/videos/omron-nj-addressing/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In a previous lesson, we showed how Ignition is able to use its Omron driver to connect to Omron NJ devices. In this lesson, we will learn how Omron addressing works and how we can create OPC tags from an Omron device within Ignition. Unlike other types of devices Ignition supports, Omron devices do not support browsing, meaning that we cannot directly browse our OPC server for tags coming from an Omron PLC connection. What you would do instead is create a tag mapping for the device in the gateway. I am currently in the configure section of the gateway in the device connections menu, where we find all the device connections configured on this gateway. Here, I have an Omron NJ device connection as you can see. To get to its tag mapping page, we click on the More button on the right-hand side and select Tags. Here, I can manually map tags by adding rows to this table, like so.

**[01:08]** [01:08]
                                    Each tag is given a name, a data type, a max character count for string-type tags, an element section for array tags, and we also get the ability to set read or write restrictions on each tag we create. Instead of manually mapping tags, we could also export variables from Sysmac Studio to create a tab-separated file, or TSV. This file can then be imported into Ignition to facilitate the tag mapping process. To demonstrate this, I will import a TSV file I obtained from Sysmac Studio. To import it, I will press the Browse button and browse for my TSV file. Note the two options given to us here on the top left. With overwrite selected, the contents of the tag table will be replaced by the tags I am importing, hence the warning above.

**[02:03]** [02:03]
                                    I can also select to append the tags I am importing which won't override anything, it will just add the tags I am importing to the tags table without overriding. Now I can press the import button and see my tag mapping get created. Once I am happy with my tag mapping, I can scroll down to the bottom of the page and press the Save Changes button. Now that my mapping is completed, let's create some OPC tags. To do this, let's head to our designer. From our tag browser, I will press the plus button on the upper left-hand corner and select browse devices. Here, I can browse through the devices hosted by my Ignition OPC UA server Drilling into my Omron device connection, I will find all of the tags we mapped earlier. As we mentioned before, Omron devices do not support browsing. So without our tag mapping, there would be no tags for us to browse for here. What I will do is select some of my tags and add them to my default tag provider by pressing this arrow button in the middle of my window.

**[03:13]** [03:13]
                                    Once I am happy with my selections, I will press OK, and I will find my tags now present in my tag browser. Drilling down into each folder I added, we will find our tags and their corresponding values coming directly from our Omron device. Now these tags are ready to be used in the development of your HMI/SCADA application.

</details>

---

### 25. Connecting to TCP Device Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to TCP Device Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-tcp-device/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    There are a lot of devices that output ASCII over the network or over TCP, such as barcode scanners and scales. To read these values in Ignition, we can use the built-in TCP and UDP drivers. These drivers are essentially passive listeners on the network that read these packets, possibly parse them out and then display them as tags. If we wanted to set up these types of device connections, we first need to go to the device connections page in the configure section of our gateway. Here, we can click on the create new device link and scroll all the way down to the bottom where we'll find the TCP and UDP drivers. You're going to select the appropriate driver for whatever your device uses. I'm going to select the TCP driver and then we'll click on next. We're going to want to give a name to our device. I'm just going to call mine scale. Then we can scroll down to the connectivity section where we'll find a port and address.

**[01:04]** [01:04]
                                    We're going to want to put the port that we're communicating over. For me, it's 5,000. For address, we want to specify the IP address to connect to. In my case, I'm using local host. We can then scroll down a little further to the message section. Here we can set up the type of message delimiter we're going to use. The first is packet based, where the driver will assume that each packet is one entire message, and then wwill turn that entire packet into a single tag. The second type of message delimiter is character based. With character based message delimiters, It's going to be looking for a specific character that you would specify in the message delimiter property. Finally, the last type is fixed size, which will use a fixed amount of characters specified in the message delimiter property as well to determine when the end of the message is. I'm going to keep mine at packet based. There's also a field count and field delimiter where you can set up the number of fields in a message.

**[02:02]** [02:02]
                                    It's important to note that the number of fields in your message must match the number of fields specified here in the field count property, or else your message will throw an error. Finally, if we take a look at these advanced properties by clicking the show advanced properties checkbox, you'll notice that the TCP driver has the ability to write back. This can be useful for certain devices and you simply click the checkbox to enable it and then put the delimiter in the write back message delimiter property. I'm going to leave mine blank and go ahead and click the create new device button at the bottom. You should be able to tell right away if you have a successful connection. You'll notice that mine says one out of one connected. If we wanted to take a quick look at the tags that we get from the TCP driver, we can go ahead and scroll down and go to the quick client down under OPC Connections. We'll expand our OPC UA server and find my scale device. Here you'll find the port number that our device is located at. You'll have some tags here, including a message tag. My scale currently has a value of five, so if I were to subscribe to that tag and take a look at it, we see here that we have a value of five.

**[03:10]** [03:10]
                                    If I were to adjust the weight on the scale to say 15.2, we can see we now get a value of 15.2 in our tag.

</details>

---

### 26. Connecting to Kepware OPC UA Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Kepware OPC UA Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-kepware-opc-ua/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    While Ignition has built in drivers that allow it to connect to some devices, it doesn't have a driver for every single type of device. Ignition's OPC UA server can act as both an OPC UA server and an OPC UA client, allowing it to connect to third-party OPC UA servers such as Kepware. This can greatly expand the range of devices that we can connect to. To connect to a Kepware OPC UA server, let's go to the config section of the gateway and scroll down to the OPC Client section. There, we'll select OPC Connections. Here, you can see our built-in Ignition OPC UA server in the list of OPC connections. We'll click on Create New OPC Connection so we can connect to Kepware. I'll leave OPC UA selected and click next. Here, Ignition can actually discover the OPC UA server for us, provided we give it an IP address and a port number. My Kepware OPC UA server is installed locally, so I'll enter localhost, then a colon, then the port number. 49320 is the default port that Kepware uses.

**[01:13]** [01:13]
                                    If Kepware isn't using the default port, I can figure out which port it is using by coming down to the start bar and finding the Kepware icon. I can then right-click on it and go to OPC UA Configuration. It'll ask for my credentials, so I'll just enter the information I set up when I installed the Kepware server. Here, under the Server Endpoints tab, you'll notice that it has an endpoint with the port number 49320. The IP address here is 127.0.0.1, which is localhost, so that's the one I'm going to be communicating over. I can go ahead and close this out for now and click the Next button when I'm done. I'll leave that server selected and click next. A list of available endpoints with security policies and security modes options will appear. You may have more to choose from than I do in this case, so choose the one with the security level that best fits your needs.

**[02:09]** [02:09]
                                    I'll leave this selected and hit next. Now we need to manage the certificate. We'll click yes to trust the certificate, and then next. The following screen allows us to confirm the settings we've chosen, and then we can click finish. This takes you to the new OPC Connection screen. In this screen, you first have the option to change the name of the connection if you'd like. I think I'll just keep the default name for now. In the authentication section, I'll enter my credentials and confirm my password. Most current installations of KEPServer require a login and won't connect without one. In my case, the connection succeeded. If yours reads as faulted, you'll need to complete Kepware installation by trusting the Ignition certificate. To do this, let's go down to the start bar and right-click on the Kepware icon. I'll select OPC UA Configuration. It will ask me to sign in with my credentials again, and we'll go to the Trusted Clients tab.

**[03:09]** [03:09]
                                    Mine looks like this. If your OPC UA client has a red X to the left of it, as in this example, it means it's not trusted yet. Make sure it's selected and click trust and the red X will disappear. Then you can close the Kepware window and return to your gateway where it should read as connected shortly. To ensure your changes are persisted, right-click on the Kepware icon in the start bar, and select Reinitialize from the menu. It will ask for confirmation of the action you want to take, and then ask again for your credentials. To confirm that the certificate is not quarantined and is being recognized as a trusted certificate, go back to the Ignition gateway webpage. In the config section, scroll down to OPC UA and select Security. Here in the Client Security tab, you should see both the Ignition OPC UA server and Kepware server certificates under the Trusted Certificates section.

**[04:06]** [04:06]
                                    If the Kepware server certificate is quarantined for some reason, you can simply hit the trust button, as in this example, to add it to the trusted list. The status of your KEPserver connection should then be connected. For more information about how to connect to Kepware OPC UA, please visit the Ignition User Manual link below this video or check the respective server's documentation. Now that we're connected, let's scroll down to the OPC client section and select Quick Client. Along with Ignition's built-in internal OPC UA server, we also have the Kepware OPC UA server listed here. With that successful connection, expanding the folder gives you access to whatever devices are associated with Kepware.

</details>

---

### 27. Connecting to the Device Simulator Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to the Device Simulator Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-the-device-simulator/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll be taking a look at the simulator functionality built into Ignition's OPC UA server. Using the Programmable Device Simulator, you can mock up a test device for development and experimental purposes containing OPC items from one of our sample programs or from you that you create yourself. So, to get us started here we're going to go ahead and configure a connection to our Programmable Device Simulator. So, I'm in the config section of my gateway webpage and I'll go into my sidebar here and scroll down until I find OPC UA device connections. So once I'm there, I'm going to go ahead and click, create new device. And then I'm go to scroll down until I find the Programmable Device Simulator driver. And I'll select the simulator and then click, next. Since we're not connecting to a real device we don't have to type in anything like an IP address or a host name. The one thing I do need to give my connection is a name. So I'll go ahead and call this simulator. Now it's worth noting here that I could configure multiple connections that are simulator driven. It's not like this is the only simulator connection that I can make. So now that I've given my simulator a name there are a couple settings at the bottom here. Repeat program will allow my program to run indefinitely. Once it's done executing all of the instructions in the simulator program it will just run them all again. As we'll see in a moment our simulator program is broken up into time intervals with instructions at each time interval. And the base rate property here just specifies what the unit should be for each time interval. So I could have some instructions executing it times zero. And others executing times one and that could be one second or thirty seconds apart based on this setting here. So I'll go ahead and create my new device. And now my simulator connection is up and running. However, we'll find that the simulator isn't running anything in particular. In fact if I browse that connection via the OPC quick client or the OPC browser in the designer. We'll find that there are no OPC items in it all. To change that I'm going to find the connection here an click more and then click edit program. So now you've got a chance to configure what are simulator should actually simulate. To get us started here I'm going to find the load program options on the left hand side. And let's just choose a program to load. How about our generic program. So I'll select that program and then say load simulator program. So these programs are pre configured collections of simulated values just designed to give you something to test with. In fact the programs that are available to us in here directly mimic the simulators that have long been available in Ignition. Prior to the release of the Programmable Device Simulator. So you may recognize these programs already. Now since I've already selected a program. We can see the program's instructions listed below. For now I won't dive to much into those instructions, we will explore how to write you own instructions in programs in a later video. It's worth noting that at any time you can export your instructions. Which will allow you to download your program as a CSV file and if you wanted to say, transfer your programs to a different gateway. Or maybe write a script that builds a program for you. You'll find that you can load programs from CSV files as well, by selecting load from CSV in the program list. So now that I have my generic program up, I'll just go ahead and save my program at the bottom. And now my simulator device is running that generic program. So if I wanted to see that in action. I can scroll down here in my gateway webpage and pull up my OPC quick client. So the OPC quick client allows you us to browse any OPC and device connections on our gateway. So in here I'll go ahead and expand Ignition OPC-UA server. And then expand devices, and then expand simulator. And now we can see that our simulator program is running. So for instance if I wanted to expand Ramp here and subscribe to that Ramp 0 item. We can see that the value is coming through just fine. And of course I can create tags from this device connection in the usual way. So this concludes our basic overview of the Programmable Device Simulator. It can be an easy way to get some test tags up and running. Either from one of our starter programs or from one that you create.

</details>

---

### 28. Custom Programs Video at Inductive University

:::tip Video Link
Watch the video: [Custom Programs Video at Inductive University](https://inductiveuniversity.com/videos/custom-programs/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll be taking a look at how you can create your own programs using the Programmable Device Simulator. You can configure your own OPC items to be populated using functions or static values, as well as specify how the value should be updated over time. So to get started, let's go ahead and find our simulator connection. So I'm in the config section of my gateway web page, and I'm going to scroll down until I find OPC UA device connections. Now, I already have a simulator connection configured, so I'm just going to go to more and then edit program. In the context of our Programmable Device Simulator, a program is just a set of instructions to run, where each instruction reads some value or function output and pushes that value onto an OPC item. So to see this in action, let's go ahead and add an instruction. So once I click that add instruction link, a row appears in our table here with a few different options we have to specify. So the first is a time interval associated with this instruction. Effectively, whenever our program executes, that program will start at time zero and increment once for each time unit that passes. By default, that time unit is one second, although we can change it in the device connection properties. So in this case, if I set up an instruction to run at time interval five, that instruction will occur five seconds into the execution of my program. Whereas setting the time interval to zero here is effectively controlling the starting value of this item. So next, I have to type in a path to the item. So for example, 'Test/MyTag', what that's going to do is define a folder called 'Test' and an item inside of it called 'MyTag'. So once we actually spin up this program, that item will be defined. So next we have this value source field here. And what this controls is effectively what value we should assign to our path at the specified time interval. So how about I make it easy and set that to zero. So now we'll pass over a value of zero at that zero time interval. And then finally we have our data type for the value, so I can make it a double or a Boolean, or an integer, and so on. I'll just leave it at double for now. So now I have an instruction complete for time interval zero. Now I'm going to go ahead and add an instruction for time interval one. So I'll set the time interval to one, I'll set the browse path to my tag again, I'll set the value source to one and I'll leave the data type as double. So now after one second has passed the 'Test/MyTag' item should take on a value of one. And with that, I'll go ahead and save my program. Now we're ready to see our program in action. So what I'm going to do is scroll down and find OPC Quick Client under OPC Client. I already have this open in the second tab. So from in here, we can test out subscriptions without having to create real tags on our gateway. So I'll find ignition OPC UA server and expand devices, and then expand test, which is our simulated device, and then expand the test again, which is the name of the folder we created. And there finally we can see our my tag item. So I'll go ahead and click the 's' to subscribe to that item. And now we can see our subscription underneath. And we can see the value on that tag fluctuate between zero and one. So it makes good sense that the value should go from zero to one because that's exactly how we programmed the simulator. But the reason that the value goes back to zero is because the program is actually restarting, it's being run on a loop. This again is a configurable option that we can find in our simulator settings. So for that, I'll come back to my first tab, scroll up, come back into my simulator and then hit edit instead of more and this will give me the two basic settings for this simulator. One, repeat program is the setting telling it to repeat indefinitely, meaning once the program is finished and there are no more time intervals to execute, go ahead and restart the program. The other property here specifies the program base rate, which indicates how long each time interval in our program should be. So I'll leave this alone for now but I will go back into our program and configure some more advanced settings. So I said at the very beginning, the value source here does not have to be a static value. In fact, it could be the output of a function. So for this example, I'm going to add another instruction to my program. So this time my browse path is going to be 'Test/MySineTag'. So this is going to be another item inside of our simulator, but this time its value source is going to be sine, open parenthesis, negative 10 comma 10 comma 60, comma true and then a closed parenthesis. So to quickly breakdown what this function is doing, it is going to give me values for a sine wave fluctuating between negative 10 and 10 with a period of 60 seconds because of that 60 parameter. Meaning that if the value is negative 10 now it will be 60 time intervals before the value is negative 10 again. And that brings me to the final parameter here, this true parameter. This is the repeat parameter for this function. And what that means is, if I set this to true, every second will push a new value from this waveform onto the item. This effectively just saves us the trouble of configuring 60 instructions in this table just for this single item. Another important note here, if I had set that parameter to false and otherwise left the program alone, you would actually see some interesting behavior. Specifically, you would find that 'MySineTag' updates every two seconds instead of every second but otherwise sticks to the exact same behavior. This is because setting this parameter to false will still allow the value to update anytime the program's time interval is zero. And currently the program is repeating every two seconds, so every other second has a time interval of zero. This is an important thing to keep in mind because it might be tempting to think that this sine function will be restarted every time the program restarts. However, this is not the case. This sine function is taking the simulators clock as an input, not the program's time interval. Now this is generally very handy because I've actually done all that I need to get this sine tag working as it is, once I hit 'Save Program' and I go back into my OPC Quick Client, and I refresh, expand devices test, test, and then I subscribe to 'MySineTag', we'll see our assigned value updating seamlessly, and it'll keep doing so forever, even with the program resetting every two seconds. Worth noting that there are many other functions you can use. You can create square waves, triangle waves, random values, ramp values and so on. And a full list of our simulator functions are available in the user manual, along with documentation for each of the parameters. So, that's all it takes to get a simple program up and running. Now I'm ready to take my program and turn it into ignition tags and use those tags throughout my project.

</details>

---

### 29. Control Tags Video at Inductive University

:::tip Video Link
Watch the video: [Control Tags Video at Inductive University](https://inductiveuniversity.com/videos/control-tags/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at one special feature of the programmable device simulator; a set of control tags built into its structure that allow you to monitor and manipulate a program in progress. To demonstrate, I've set up a simple program here. I have a Sine tag set up to start at zero and fluctuate between zero and 20 over a 100-second interval, based on the function parameters in here. I also have a Boolean tag which I've set up to go from false to true over the course of my two-second program. Now in my other tab here I have the OPC Quick Clients, which I can use to test out reads, writes and subscriptions against my simulator. And currently I have it set up to show subscriptions across my Sine and Boolean tags, as well as all the control tags on the system. These tags are located in the controls folder inside the device connection for my simulator. Our five control tags show us the information about the ongoing program, like the program base rate, repeat behavior and current program step. So we can see that as the program restarts, the program counter item goes back to zero. However, it's worth mentioning that I can modify the behavior of my simulator by changing the values on any of these control tags. For example, if I click that little W on the left hand side of our pause item, and write a value of one to it, then click Write, we'll see that that actually suspends our program on its current step. So it effectively acts as a freeze frame for our program. It's worth noting that if I un-pause the program by clicking on that W again, and entering a value of zero, there's actually a pretty big jump in my Sine value. It goes back to what it would have been had I never paused the program in the first place. Effectively, the pause item doesn't pause the program clock so much as freeze the values. There's also a Reset tag. If I write a value of one to that tag, again, by clicking that W and writing the value of one, we'll see that it sets our Sine tag back to where it initially was. It effectively reverts the entire simulator back to its initial state when the program was first loaded. Among the other tags here, the base rate and repeat tags allow me to change the base rate and repeat settings for the entire connection, as defined in the simulator connection properties. However, it's worth noting that if the device connection is restarted or the reset item is used, the settings will revert back to those defined on the connection. So that's a quick overview of the control tags in here. They give us a nice way of monitoring and making adjustments to a program in progress.

</details>

---

### 30. BACnet Device Configurations Video at Inductive University

:::tip Video Link
Watch the video: [BACnet Device Configurations Video at Inductive University](https://inductiveuniversity.com/videos/bacnet-device-configurations-2020-07/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll look at using the BACnet driver. Our driver allows an ignition gateway to communicate with other devices using BACnet over IP. If you've ever configured a device connection using any of our other drivers before, then this will be a little different as there's a prerequisite configuration we have to make first called a local device. This step registers the ignition gateway is presence as a BACnet device on a network. So let's get started. I'm on the config section of my gateway. We need to head down, I'm going to scroll down here under the BACnet heading. There should be a local devices page or link. I'm going to click on this. Now you'd only see that link and this page, if you have the BACnet driver installed on the gateway, if you don't, then you won't see that link. I don't have any local devices configured. So let's click the create new local device link. As with most of these forms on the gateway, we need to provide a name for this configuration.

**[01:03]** [01:03]
                                    Now, a few of these fields are actually required aside from the name property, which is also required. Let's start with the bind address here. Now, depending on your network architecture, this could just be your gateway's IP address. Now in a later step in this video, we're going to configure what's called a remote device, which is basically configuration information for some hardware that we want our gateway to communicate with using BACnet over IP. If that remote device only sends broadcast packets, as opposed to being able to send unicast messages, then you'll need to set the bind address here to 0.0.0.0. Now my case that isn't true, I can actually just use my gateway's IP address. So today I'm working with 10.100.70 and 12, it looks like. You can specify the port down here. It just so happens that I don't need to make any changes here, but that is the default port our driver tries to use for our BACnet communications. And we have a broadcast address. Again, this depends on how your gateway is configured and how your network set up.

**[02:00]** [02:00]
                                    But in my case, I can actually just copy my gateway's IP address here and paste it down below. I'm going to skip the network prefix length, and talk about the device number and network number. These are both identifiers and are part of the BACnet protocol. So device number is just the device identifier on the BACnet side of things. This just needs to be set to something that's different from every other BACnet device identifier on the network. Network number is just the BACnet network assignments. So what you need to type into these two fields here really depends on how your BACnet architecture has been laid out. Now, in my case, I have a very simple architecture. It's just my local system here and the remote device I'm going to be connecting to in a moment. So I can leave these fields with their default values. I'm going to scroll down a little bit more here. And we do have these BBMD fields, which stand for BACnet Broadcast Management Device. Now, in my case here, I don't actually need to type anything in because I'm not using a BBMD.

**[03:02]** [03:02]
                                    If you are using a BBMD, then you'd simply enter the address and the port for that management device, that's on the same network as the remote device you're planning on interacting with. So you do need to have a good idea on how your network is laid out, as well as where exactly that device you're trying to interact with is. Now say you are using BBMDs, and you have a couple different BBMDs. So the way you're supposed to handle that is by creating multiple local devices. So multiple of these fields here. So you can have a whole bunch of them, that's why it's a separate step from the remote device step, which you'll see in a moment. So I'll go ahead and I'll create the new local device. And it now exists as an entry here. So I mentioned it earlier, but if we needed to create more of these local devices, because we're using multiple BBMDs, we just create additional ones here, but we can always come back and do that later. So that was step one here, we have the local device. Now we need to create the remote device configuration.

**[04:02]** [04:02]
                                    Again, still on the config section here, I'm going to scroll down, and under OPC UA, let's go to the device connections page. Now this part might feel really familiar if you've used our drivers before. Let's click the create new device link. And from our list of options here, I'm going to scroll down just a little bit. We do have our BACnet over IP option. I'll keep on scrolling down after selecting that, and click the next button. And let's give this a name. You can also fill out the description to make it a bit more transparent on what this configuration is pointing to. And we do have this local device drop down here. Now this part is mandatory. So we couldn't create the remote device unless we had the local device configured first, which is why I did that first. So I do need the network address of the device I'm trying to interact with. Now, this case looks like I'm going to 10.20.4.24. I happened to be using this port here so I can skip over that.

**[05:02]** [05:02]
                                    And we have our remote device number, which defaults to one, but in most cases, you're not going to be using one. So again, this is another one of those identifiers. Now my colleague that sets up the hardware for me is telling me that I need to enter one two one five zero zero zero as the remote device number. I'm going to scroll down a bit more here and there's some more properties that do have some descriptions here. I'm not going to spend the time talking about them here. We do realist these in the user manual if you're curious. I'm just going to click the create new device button. And the status should start with initializing, and then if everything goes according to plan should end up with initialized. Just like that. When our device configuration here tries to reach out to the remote device, it collects some initial information. Specifically an object list and a listing of supported properties for each object. It then caches these lists. So later on, if these lists change in the device, we'll need to come over here and update this device configuration. Which you can do by clicking on more and then selecting invalidate browse.

**[06:04]** [06:04]
                                    Which then triggers the re-initialization process. Now that's it for the device configuration. We're ready to go on that end. Now we can start looking at accessing some of the points in the device and incorporating the tag system here in ignition. But we'll look at that in a later lesson.

</details>

---

### 31. BACnet Addressing Video at Inductive University

:::tip Video Link
Watch the video: [BACnet Addressing Video at Inductive University](https://inductiveuniversity.com/videos/bacnet-addressing-2020-07/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at creating tags while using the BACnet Driver. In the previous lesson, we saw how to use the BACnet driver to create a local device configuration, as well as a remote device configuration, which I have right over here. I'm at the point where I'm now ready to start extracting values from this remote device configuration. So to do that, we'll need to head over to the designer. While in the designer, we'll head over to the tag browser, and I'm going to go ahead and click the browse OPC servers button here, which will bring up the OPC browser. And from here, I'm going to drill down into the ignition OPC-UA server that's currently interacting with that remote device, which is really my only option at this point. So I'll go ahead and drill down into there. I'll go into devices. We saw the name of my remote device configuration earlier on the gateway. So we know this is the right one. It's also the only choice.

**[01:01]** [01:01]
                                    We have a device item here, which I'll expand. And now we have some device level data points that we can actually drag in. So things like the firmware revision and so on, but I want to go a little bit deeper. I want to actually access the objects inside, which would be inside of this object list folder, which we can expand and we can start seeing our various objects. If we take a look at AI zero or analog input zero, we can see some additional tags or items we can drag in. Now, fortunately because of the driver does support browse ability, which is why we can use the OPC browser in the first place, I can actually just create tags here by dragging and dropping. So I can take the present value of my analog input zero, drag it into the tags folder here and now we're getting a live value. So it's really just that easy. Now the status flags here, they are a little bit trickier to use. You can see that if I expand them, they actually have some items under them. So the way status flags works is if I drag this over to the tags folder, you'll see that the type is actually a document. So it's just a JSON document here.

**[02:03]** [02:03]
                                    The actual flag, so the fault and InAlarm are inside of this value array here. More specifically the first element there. So if you wanted to access those, actually the easiest way to do it would be to just go ahead and grab the flags under status flags here and just drag those over and we'll automatically create some Boolean tags for you. Alternatively, we could use the expression language to parse the string here. We could use the JSON get expression function to start parsing, and then we can use other functions like get bit to identify or single out individual flags. But dragging and dropping is just the easier option. Now I did want to take a look at the actual OPC item path here. So I think I'll go ahead and look at present value here. So I'll double click on this and I do want to take a look at the actual sort of addressing we're using here for the OPC item path. So just to make it a little bit easier to read, I'm actually going to click in here. I'm going to control C to copy, and I'm actually going to close this and get my script console open instead, which is open off screen here.

**[03:07]** [03:07]
                                    And I'm going to go ahead and just paste that path in there, just so I can kind of see what's going on. If you've ever seen our driver addressing before you'll notice some commonalities. So the path does begin with three namespace notation here. In square brackets, we do have the name of the device configuration. After that, we do have the BACnet object type. So analog input specifically here. Now, if I was trying to manually type this information in and instead I was trying to go to an analog value, well, that's pretty easy, just replaced input there with value. It's not a lot of good reasons to be typing the path in, but just to kind of give you an idea. And then of course, if you wanted to try to access a binary value, well, that'd be just binary value. You get the idea. And then we have the zero here. The zero is just the identifier, the object identifier.

**[03:56]** [03:56]
                                    So if I was trying to actually access binary value 100 I would need to add a one and a zero there. And then after that dot whatever data point you're trying to access. So in this case .present value. So it's a pretty simplistic naming scheme. If you're familiar with BACnet you probably know a lot of this already, but just kind of wanted to spell out how our drivers actually work in here. Now, because you have those three pieces, it's actually pretty easy to just make a UDT and turn those three pieces into parameters, which is actually something I did here. So I'm going to close a couple of things here. If I go to my data types folder here, I do have a UDT I created a little bit earlier. Double click here to open it up. And this is actually on the ignition exchange. So if you wanted to download a copy of this without having to create it yourself, it's pretty straightforward. It's a pretty small UDT, but I'll put a link in the description for you. If we take a look at parameters here, I'll just click the little edit icon here. I did actually add a fourth sort of parameter just to kind of represent the OPC-UA server in case yours is named differently. But we just need the device name, the identifier, and the type.

**[05:00]** [05:00]
                                    So what I could do, I'll go ahead and actually close out of this real quick. And instead let's go ahead and create an instance. So what I'll do is I'll go up to the text folder here. I'll go ahead and we'll add a new data type instance. I'll use this BACnet base UDT I created. And the way the UDT works, if we take a look at present value, I'll go ahead and take a look at the OPC item path here, and we'll edit just for viewing. Again, it just uses those three parameters. So just like I've been talking about. So let's go ahead and instead of overriding this here, I'll go to the top item here, and instead of calling a new instance, how about we'll use this to access analog values zero. So I'll just call this AV zero, and then for the parameters here, I'll click the little edit button. For the device name, you saw my device name earlier. For the object identifier, we just need zero here because I want to get analog value zero, and then for the object type, just analog value. So we'll go ahead and hit enter. I'll hit commit.

**[06:01]** [06:01]
                                    Now, if everything went according to plan, then when I expand the UDT instance here, I should see some live values. And with that, we'll end the lesson here. Now you should have a pretty good idea of how to create tags while using the BACnet driver.

</details>

---

### 32. Connecting to IEC 61850 Devices Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to IEC 61850 Devices Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-iec-61850-devices/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to connect to an IEC 61850 device in Ignition. IEC 61850 is an international standard used by power systems needing to send control signals among multiple different intelligent electronic devices, or IEDs, defined in a substation. Here we'll start out in our Ignition gateway's Config tab. The first thing we ought to do is confirm that we have the IEC 61850 device driver installed. We'll go to the System option, then to the Module suboption. If we see this IEC 61850 driver present, we know it's installed and ready for use. Please note that this driver may not be available on all platforms. For more specifics on supported platforms and Ignition versions required, please consult the online Ignition User Manual. Next we need to create a new device connection. Still in the Config tab, we'll scroll down a bit to the OPC UA option, then select its Device Connection suboption.

**[01:06]** [01:06]
                                    Now we're in the Devices page, where we'll click on Create New Device. Here we see a list of all available device driver types. We'll select IEC 61850 MMS Client Driver, scroll down to the bottom, and click Next. Now we are prompted to configure the parameters of our device connection. The two essential ones are the Name and the Hostname. I'll enter a device name of my_61850_device, and for the host name, my device's IP address of 10.10.76.64. Since I've done this several times now, you'll notice they appeared as auto complete options for me. Your device parameters of course will vary. We'll next click the Show Advanced Properties checkbox. There are many other customization parameters available. For full descriptions of each of these settings, please see the online Ignition User Manual. Scrolling down just a little bit, it's fine to leave the Use SCD File, IED Name, and Access Point Name parameters unchecked and blank for now, these will be auto-populated once an SCD file is specified in a following step.

**[02:17]** [02:17]
                                    We will go ahead and accept all other default parameter values. Then we'll scroll to the bottom of the page and click Create New Device. This brings us back to the Devices page where we started. If we are successful, we will see the specified IEC 61850 device added to the devices list, with a status of Connected. However, for IEC 61850 devices, there is one more configuration step needed. That is to specify an SCD file name to use. For this driver implementation, it's recommended to always use an SCD file in order to limit the request size and visibility of access points during OPC browsing. The creation of an actual SCD file is beyond the scope of this lesson. If using an IEC 61850 device, it's assumed that you already have a suitable such SCD file on hand from the vendor or by other means. To specify an SCD file, we will click on More > SCD, and then Choose File.

**[03:18]** [03:18]
                                    We can navigate if needed to our desired SCD file. I know that this particular file is the one compatible with my device, so I'll select it and click Open, and then Upload. Here, my SCD file only specifies one available IED, but you may have multiple options to choose from. Once you've made your selection, click Save. And this brings us back to the Devices page. If we go over here and click Edit, and then down to Show Advanced Properties, and scroll down just a bit, we see that the Use SCD File, IED Name, and Access Point Name have indeed been updated from our SCD file. So now let's go back and finish at our Devices page.

**[04:05]** [04:05]
                                    And at this point we have created and configured an IEC 61850 device connection. Finally, we can also browse our reports data hierarchy using the OPC Quick Client. This will let us preview the data we may want to import as tags into our Tag Browser. So while still in the Gateway's Config tab, we can scroll down a bit, and in the OPC Client option, select OPC Quick Client. Here we can expand the OPC UA server, then the Devices folder, then our connected device and the Reports folder, and so on down this tree. We can see that our configured my 61850 device is present, along with the first several levels of its hierarchical data model. For more specifics about this structure, please see the online Ignition User Manual. And finally, be aware that any write interaction with any such operational control attributes is intended to be handled using the available IEC 61850 specific scripting functions, which will be the subject of another lesson.

**[05:13]** [05:13]
                                    So in this video, we have seen how to create and configure an IEC 61850 device connection, and how to inspect its hierarchical data model.

</details>

---

### 33. Using IEC 61850 Scripting Functions Video at Inductive University

:::tip Video Link
Watch the video: [Using IEC 61850 Scripting Functions Video at Inductive University](https://inductiveuniversity.com/videos/using-iec-61850-scripting-functions/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate some sample usage  of several IEC 61850 driver scripting  functions. For this driver, the available scripting functions  are THE recommended means to perform writes to  its various operation control attributes. For  a full list of all available functions and their APIs,  please consult the online Ignition User Manual. We  won't demonstrate each function in this lesson, but we'll show  the general approach of how to use them. Let's start by examining  this Perspective view. It will be made available as  an Ignition Exchange resource. Please see the link appearing beneath  this video for how to obtain it. This view demonstrates  interaction with a simulated IEC 61850  device to control a circuit breaker. The  four blue buttons each run underlying event  scripts using four of the available API functions:  getControlParams(), select(), operate(), and cancel(). The big  picture workflow here will be to: select a connected  IEC 61850 device, obtain a  full list of its operation control attributes, filter  that list down to a specific subset  of interest, use those parameters to write an  on or off value to the device, and finally, confirm  the commanded change in the breaker state.

**[01:21]** [01:21]
                                    For the breaker state value, let's take a look at its data  binding. Its read only display value is bound to a specific  named tag, then that numerical value is mapped to  a text value as shown here. Now, your tag  path of course will likely differ from this one. Then that tag is also shown over here  in our Tag Browser. Here it represents a display  only operation control attribute on our  connected device. We need to access this attribute in  order to control our power breaker, but it's important to  keep in mind that for this device driver, we must do this  using available scripting functions instead of  writing directly to this tag. Next let's take a quick look at the underlying event script  for the Get Control Params button.

**[02:09]** [02:09]
                                    We won't go through each line of this script. Hopefully  the comments will guide you in that, but I will do  a control+mouse wheel to make this text a little bigger and  easier to read. So line 11 shows the  key statement, the call to the getControlParams() API  function. Its one input is the name of the  connected IEC 61850 device, which comes  from the line 8 drop down component. Once  allResults is returned, the for loop at line 17  reassembles those results into a specified ordering,  and lines 23 to 25 apply  a filtering string if specified. Scrolling  down a little bit, on line 31, the  results are converted into a dataset, and then  used to populate a table of control parameters. Okay, so now let's begin running through an intended testing sequence.  When we go up here to Preview mode,  we notice that all the buttons become disabled and  we must select a device to proceed. So we'll  select our one configured device, which then enables  Get Control Params. When we press this button,  we run the first script we examined earlier,  and we're presented with a table of all  available control points, with all operation control  attributes beneath for reference.

**[03:27]** [03:27]
                                    This winds up being a lot of results, and maybe  we're just interested in a certain subset of them, such as these  ones up near the top. So we can specify a  filtering pattern. Let's use SUBA_DCULD1 like so, and run Get Control Params again. So now we're down to the subset of five results.  Next, in order to perform an actual control value  write, we need to specify one of these control access  points. Let's select this last one. When we  do this several things happen. The other top pane fields now  populate.

**[04:05]** [04:05]
                                    We have specified a ctlModel of  1 which indicates direct with normal security. Because  this is not one of the select-before-operate,  or sbo options, this means we only  need to use the operate() function to write. The  Select and Cancel buttons are conditionally enabled  based upon ctlModel, so they remain  disabled. Their underlying scripts will be comparable to  what we will see for Operate. With that in  mind, let's also look at the event script for the Operate button,  but we'll need to go back to Design mode first, before we  can select the Operate button and open  its event script. Once again, I'll use control+mouse  wheel to make the text a little bit bigger for easier  reading. And again, we won't go over each line, but here are  the key points. Line 22 shows the  key statement, the call to the operate() API  function. Its 3 inputs are: the device name,  coming from the line 9 drop down  component, the control parameters, assembled using the line 10 function call, then two values  reset to other preferred defaults,  and the control value to be written to the device,  coming from the line 20 drop down component.

**[05:20]** [05:20]
                                    If we go back into Preview mode, now we are  ready to turn our breaker on and off. We see the  current breaker state is off, which corresponds to  this displayed stVal tag value of 1.  We can then specify a write of 2, or breaker on, and press Operate. After some short latency, we now see a breaker state  of on, and the tag value updates to  2, which represents the on state. By the way, note  that if we try to command the same state as the state  it's already in, the function would fail. Finally, let's  turn the breaker back off. We can now specify a  write of 0, or breaker off, and press  Operate.

**[06:02]** [06:02]
                                    Again, after some short latency, we now see a  breaker state of off, and the tag value updates  to 1, which represents the off state. And yes,  that is correct, a commanded write of 0 results  in an off state of 1 per the standard. So  in this lesson, we've shown how one might make use of  several driver API scripting functions to control  the state of a connected IEC 61850  device.

</details>

---

### 34. Connecting to Mitsubishi Devices Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Mitsubishi Devices Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-mitsubishi-devices/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to connect to a Mitsubishi device in Ignition. Here  we'll start out in our Ignition gateway's Config tab. To create a new device connection, we can scroll down a bit to the OPC-UA option, where we can select its Device Connections suboption. That takes us to the Devices page, where we'll click on Create New Device. Here we see a list of all available device driver types. We'll scroll down a bit, select Mitsubishi TCP, then scroll down to the bottom and click Next. Now we're prompted to configure the parameters of our device connection. The primary ones for us will be the Name, the user specified device name, which I'll set to mitsubishi_device, the host name, the device's IP address, which for me will be 10.20.4.25, and the port, which for me will be 1031.

**[01:08]** [01:08]
                                    Your device parameters, of course, will vary. This is the minimal set of parameters needed to set up the device connection. We may also need to specify the MELSEC series, but we'll leave it at its default value of iQR. There are also a small handful of other customization parameters available. For full descriptions of all of these settings, please refer to the online Ignition User Manual. We'll go ahead and accept all other default parameter values. Then we'll scroll to the bottom of the page, and click Create New Device. This brings us back to the earlier Devices page where we started. If we're successful, we'll see the specified mitsubishi_device added to the device connections list with a status of connected. And that's it. Our device is now ready for further addressing setup, which will be the subject of a following lesson. So in this lesson, we've shown how to create and configure a Mitsubishi device connection in Ignition.

</details>

---

### 35. Mitsubishi Addressing Video at Inductive University

:::tip Video Link
Watch the video: [Mitsubishi Addressing Video at Inductive University](https://inductiveuniversity.com/videos/mitsubishi-addressing/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to manually create tags in Ignition using an existing Mitsubishi device connection. We'll also demonstrate the use of some basic addressing syntax for the Mitsubishi driver. We'll start out here in our Ignition gateway on the Device Connections page. In a prior lesson, we showed how to set up a Mitsubishi device connection. We're going to need that device connection name for coming steps, so we note that it will be: mitsubishi_device. Next, in order to manually create tags in the Tag Browser, using this device connection, we'll first need to know about the addressing syntax for Mitsubishi devices. This diagram visually summarizes many key things about Mitsubishi device addressing. Let's consider this diagram in a bit more detail. Broadly speaking, Mitsubishi device addressing consists of two required components and several other optional ones.

**[01:03]** [01:03]
                                    The first required component is a device keyword for the various possible logical areas of the device, such as inputs, outputs, relays, registers, and so forth. For example, a D designator stands for a data register. For a full listing of all available device area names and mnemonics, please refer to the User Manual. Just for the sake of simplicity,  this example diagram is confined to data registers, so each addressing syntax expression here will start with a letter D. The other required component is a numerical offset within that device area. Each device area has its own range of offsets. This is shown along the left side from top to bottom. So here the offsets for the D or data register area begin at 0 at the top, and increment downward on the diagram. Because each data register item is natively a 16 bit word, this word size is shown across the top by individual bits left to right from the most significant bit 15, or MSB, to the least significant bit 0, or LSB.

**[02:09]** [02:09]
                                    Let's now implement some tags using some of these examples. Next, we'll head over to our Designer, specifically to the Tag Browser. Since the Tag Browser will be where we'll manually create some tags using Mitsubishi device addressing syntax, we will resize this window such that we can see the Tag Browser side by side with our device addressing diagram. To create one individual tag, let's start with the simplest addressing syntax. In our Tag Browser, we'll click on Add > New Standard Tag > OPC Tag. This takes us to our Tag Editor, where we'll specify the following parameters. For the name, we'll specify DReg0 For the value source, we'll leave this as OPC. We'll leave the data type as its default integer. For the OPC Server we'll select our one option, the Ignition OPC UA Server. Then for the OPC Item Path, this is where our addressing syntax will come into play. To start, we'll need to specify the name of our device in square brackets.

**[03:15]** [03:15]
                                    We saw from our device connections page that this will be mitsubishi _device. Now we can specify the intended addressing syntax. We'll use the first one in our diagram, a data register with offset 0, so D0. That's all we need, so we'll click OK, and we see that our name tag DReg0 with a device address D0, has been created and shows the current value from the device. Now that we've seen how to manually create one tag, the steps will be mostly identical for other tags, apart from the specific addressing syntax used. In fact, let's save ourselves a few steps by copy pasting this original tag into some new ones. Let's create a bit address tag next by doing copy, paste.

**[04:05]** [04:05]
                                    Then we'll open up this copied tag in the Tag Editor and adjust its parameters, For the name. We'll change it to DReg0 _Bit0. The Value Source, Data Type and OPC Server retain their existing values now, but now our addressing syntax will differ a bit from our diagram. That's because now we want to extract the LSB of the existing D0 tag we created in the prior example, so that we can toggle it later. So we'll specify D0.0 instead of D2.0, which is the 0th bit of the D0 address. That's all we need, so we'll click OK, and we see that our name tag is created. Note that it has a correct bit 0 value of 0 since D0 is an even number. Finally, let's create one more tag, this time for a double sized word. Here the angle brackets for int32 represent an optional data type attribute that can be used to specify a double word size using two adjacent memory addresses as shown. So similar to before, we'll do copy, paste, then we'll open up this copied tag in the Tag Editor and adjust its parameters.

**[05:28]** [05:28]
                                    For the name, we'll call this one Big Tag. The Value Source, Data Type, and OPC Server retain their existing values. Then for the Item Path, this time we'll specify D `</int 32>` 5, which is the 32 bit double word, starting at offset 5. That's all we need, so we'll click OK, and we see that our Big Tag is created. Finally, as a simple check on our tags, we can do the following. Let's give our Big Tag some other very large value that clearly exceeds 16 bits. How about 1 2 3 4 5 6 7 8 9.

**[06:13]** [06:13]
                                    And for our DReg0 tag, let's set it to any odd value such as 2005, and we see that its 0 bit in the other tag toggles to a 1. So in this lesson, we've demonstrated how to manually create some tags in the Tag Browser, using an existing Mitsubishi device connection, and how to make use of several available types of Mitsubishi addressing.

</details>

---

### 36. Mitsubishi Address Mapping Video at Inductive University

:::tip Video Link
Watch the video: [Mitsubishi Address Mapping Video at Inductive University](https://inductiveuniversity.com/videos/mitsubishi-address-mapping/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to create individual OPC items in an Ignition gateway, using an existing Mitsubishi device connection. Then we'll show how to create a large number of such items using the address mapping feature in a comma separated values text file. We'll continue to use the Mitsubishi addressing syntax that was introduced in a prior lesson. We'll start out here in our Ignition gateway in the Config tab. Then we'll scroll down a bit, to the OPC-UA option,  and select its Device Connections sub option. In a prior lesson, we showed how to set up a Mitsubishi device connection. Ours is named mitsubishi_device. We will use this connection to set up some new OPC items here in the gateway, On our Device Connections page, if we go to the right and click on More > addresses, we are taken to the Mitsubishi addresses page. Right now we have no address mapping row shown, so let's create one to start with by clicking on Add Row.

**[01:08]** [01:08]
                                    For each addressing row, the first two fields are required and the last one is optional. The first field is the browse path for the OPC-UA client. This is where we can specify an OPC item name. The second field is the Mitsubishi addressing syntax for the particular OPC item, we saw some examples of possible addressing options in a prior lesson, on a device addressing diagram. We'll see this diagram again shortly. And the last field contains any optional description text. So let's create one simple item. For the browse path, let's once again call our item DReg0, and FYI, here Browse Path refers to its browsable OPC path name. For the address, we'll once again use a very simple example of data register offset zero, so D0, and we'll add some simple description text. So perhaps, data register 0. At this point, we will commit our updates by clicking Save Configuration.

**[02:13]** [02:13]
                                    Doing a save returns us to our Device Connections page. Let's repeat these steps to add one more item, but this time we'll introduce one hierarchy browse level. As before, we'll do More > addresses, then Add Row. And this time for the Browse Path, let's specify Folder/D Reg1, and here we are introducing one hierarchy level to the browse path. For the address, how about D1 or data register offset 1, but now this will be one browse level down. And for the Description, we'll use data register 1 as before. We'll commit our updates by clicking Save Configuration. By the way, note that we don't have to do the save after each individual row as we showed here. We can create all desired rows first, then click Save Configuration once. Great, we've just seen how to individually create browsable OPC items using the Device Connections addressing page.

**[03:18]** [03:18]
                                    But what if we have a large number of OPC items we'd like to define simultaneously? If instead we'd prefer to set these up from a file, this is where the address mapping feature comes into play. We can much more efficiently define each needed OPC item in a 3 column, comma separated format, then load those definitions in their entirety, in one simple step. Here on the left, we see such a CSV text file with 3 columns: the browse path, the addressing, and the description. Once again, the first two fields are required, the third field is optional. This text file on the left corresponds to the address definitions in the addressing diagram on the right, which is also found in the User Manual. As a quick summary of the item addressing we are defining here, we have individually addressed elements, including bit addressing and double word sizes, then various types of array allocation and addressing, and finally, string addressing. For a fuller description of each addressing mode, please refer to the User Manual. A couple things of note in the CSV file.

**[04:21]** [04:21]
                                    The spacing between the columns is added for clarity. This wouldn't likely be the case in any automatically generated file. Any alternative addressing syntax shown is also included. Note that for any 2-D addressing syntax with embedded commas, those have to be enclosed in double quotes. And some of the array addressing also makes use of an added browse path hierarchy. Now that we have all the addressing of this diagram on the right defined in a CSV file, let's perform this address mapping in one step. From our Device Connections page on the left, we'll go to our mitsubishi_device connection. On the right, we will click More > addresses, where we'll select Load Configuration File.

**[05:06]** [05:06]
                                    We'll select Choose File to browse for our CSV file. We'll select the one we just created called Mitsubishi addressing diagram items. And here we have the option of appending or overwriting any existing item definitions. We won't select the append option this time, so we'll overwrite our prior items. When we click Load, we see that in one step, we used our CSV address mapping definitions to create all device addresses for the diagram on the right. Then the necessary final step would be to click Save Configuration to commit our changes. Let's inspect our results by heading over to the OPC Quick Client. This is where we can inspect our OPC items in a browsable OPC path hierarchy. So in our Config tab, we'll scroll down a bit to the OPC Client option and then select OPC Quick Client.

**[06:05]** [06:05]
                                    Here we'll see our Ignition OPC UA Server, and we'll expand its hierarchy: Devices, mitsubishi_device, which was our original device connection, then Tags. And here we see all the OPC browse paths we just created, along with several array elements, for which we added another hierarchy browse level. So these represent all the OPC items, which we created in mass by reading in one CSV file. Now that we've done all the desired address mapping and they are now browsable OPC items, let's import them into our Tag Browser as tags so they can be put to use as needed. So here in our Designer, on the left in our Tag Browser, we will go up here and select Add > Browse Devices, then expand the Ignition OPC UA Server, Devices, our mitsubishi_device, and here we'll simply select the entire Tags hierarchy and click the arrow to stage it for import.

**[07:10]** [07:10]
                                    When we click OK and expand these tag folders, we see that we have imported all of the address mapped OPC items into our Tag Browser as tags, along with some nested tag levels we defined. So in this lesson, we've demonstrated: how to use the gateway address mapping interface for our Mitsubishi device, to create individually addressed browse path items, how to perform bulk address mapping using a CSV file, and we've shown how to use additional addressing features such as arrays and additional browse path levels.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
