---
sidebar_position: 2
---

# Ignition Editions - Video Transcripts

This page contains transcripts from the ignition-editions video course.

## Overview

These transcripts are automatically generated from the [ignition-editions Course](https://inductiveuniversity.com/courses/ignition/ignition-editions/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 1:28:55 PM
Source URL: https://inductiveuniversity.com/courses/ignition/ignition-editions/8.1
:::

## Video Transcripts

### 1. Getting Started with Maker Video at Inductive University

:::tip Video Link
Watch the video: [Getting Started with Maker Video at Inductive University](https://inductiveuniversity.com/videos/getting-started-with-maker/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll show how to install and activate the Ignition Maker Edition. The Maker Edition is a free to use version of Ignition, which is great for learning Ignition on your own, or for creating personal use projects. To get started, we'll need to download the installer, so from the Inductive Automation homepage, click on Download Ignition, which takes us to the Downloads page. Then click the link for Other operating systems and versions. Here you will always find the install media for the latest Ignition version for all supported operating systems. One thing to note about Maker Edition is that it's installed from the same fileset as Standard Edition is. There's no special Maker installer, it's all the same Ignition. If you're new to Ignition, I'd suggest selecting the installer instead of the zip file options, it's just easier to use. We'll use the Windows installer, but the steps will be mostly the same for Linux or Mac platforms. I'll download this installer, then move it to my desktop. Before running the installer, a couple prerequisite steps. For all three operating systems, make sure you have the needed installation privileges, whatever it's called, root, elevated permissions, admin access, or anything else, make sure you have it, first. Then one specific difference on Linux, make sure the installer file is executable. If you need more details, check out the installation information in the User Manual or the other Installing Ignition videos here on Inductive University.

**[01:31]** [01:31]
                                    Once we have our installer, just run it. We'll run it with admin permissions as noted, and we'll speed up the steps just a bit. Now we're in the installer wizard, and we will just accept the default options all the way through. The User Manual pages on installing Ignition have more info on what all the options represent. Finally, we're ready to install, and I'll speed this part up and wait for the installation to complete. Then we'll click Finish, which finishes the installation and starts the gateway.

**[02:05]** [02:05]
                                    Next we find ourselves on the commissioning page. This is just a fork in the road where we get to specify which of these Ignition editions we want to install, and it will perform some additional setup needed. This step differs from our other installation videos in that here, we'll select the Maker Edition. We'll next get a reminder that this is only for personal use projects and we'll click Agree. Then we'll get to this license agreement. We'll agree with the terms and click Next. Next, in commissioning step 2, we'll be prompted for a License Key and an Activation Token. Both of these are free and require only that you have an internet connection and an Inductive Automation account. There's a link here which will take you to that login page, but there are also links on our website, and the needed URL is just account.inductiveautomation.com. I'm already logged into my user account in a separate tab, so we'll head over to the left side and select Maker Edition. Now we can generate a license by clicking on Get License.

**[03:03]** [03:03]
                                    We'll accept another licensing agreement, and now we've got the needed License Key and Activation Token. The License Key is stored in our user account and can be reused to move to a different installation later. The Activation Token is not stored, but a new one can be regenerated as needed. So we will copy the License Key, head back over to our Activate License window and paste it. Then return to our account page where we will copy the Activation Token, and at this point we can close the license popup and see that our license has been stored. We'll return to the Activate License window, then paste the Activation Token and click Next. Now we're in step 3 of the commissioning, creating an initial user account. This user will have full admin and access privileges in Ignition, so make sure the credentials are something you can remember, though they can be changed later in the gateway. So we'll use admin as the username, and create a password, but do use a more secure password than this one.

**[04:10]** [04:10]
                                    Then click Next. On this last step 4, we'll accept the default port settings. Then click Finish Setup to start the gateway, and we'll fast forward through this step. If you're new to Ignition, it's a good idea to enable the Quick Start, so we'll select Yes and we'll be prompted to log into our gateway one more time. So we'll enter the credentials we just created, and now we're up and running in our Ignition gateway. If this is your first Ignition installation, probably the first thing you'll want to do is to download and install the Designer, which will allow you to start browsing example projects and creating new ones. You can access the Designer installer from here in the gateway, or from the Quick Launch sidebar. You can also refer to a separate IU video on installing the Designer.

**[05:04]** [05:04]
                                    Then you can have a look through some of these useful resources at the bottom: Inductive University, the Ignition Exchange, and various user forums, as well as the Quick Start Starter Project to help you begin exploring Ignition. Okay, now we've seen how to install the Maker Edition Gateway and get it licensed and running. Happy building with the Ignition Maker edition.

</details>

---

### 2. Getting Started with Maker

:::danger Error
Failed to retrieve transcript: Waiting for selector `#library-course-description` failed: Waiting failed: 10000ms exceeded
:::

---

### 3. Edge Architecture Video at Inductive University

:::tip Video Link
Watch the video: [Edge Architecture Video at Inductive University](https://inductiveuniversity.com/videos/edge-edition-architecture/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at some architecture diagrams that demonstrate some of the options that can be achieved with Ignition Edge. Edge is a more lightweight version of the Standard Ignition installation and is perfect for filling in on edge of the network solutions. While Edge can be deployed in standalone solutions, it can also be paired with a standard Ignition gateway to take advantage of its full functionality. The main functionality of Edge is achieved through the different products that are made available through the two product offerings Panel and IIoT. Let's take a look at Panel first. Panel enables standalone HMI functionality for one local client and one remote client at the edge of the network. Panel allows you to choose between the Vision or Perspective visualization modules. Setup can be as simple as connecting to a local PLC and building a basic screen. When paired with a central Ignition gateway, Edge can also act as a local client fallback. This way if network connection to the central site is lost, control will be retained at the Edge site. On top of visualization, Panel also includes all of the features that are included with the other offering, IIoT. The IIoT product allows Edge to push MQTT data from the edge of the network directly to an MQTT broker. IIoT also allows OPC UA clients to connect to the OPC UA server on Edge.

**[01:18]** [01:18]
                                    This means that a standalone Edge gateway can be connected to multiple types of devices and act as a remote MQTT publisher and it also allows connection to a greater IIoT architecture that can synchronize with a central Ignition installation as well. Coupling IIoT and Panel together allows the ability to publish data to an MQTT broker, while also providing a local client at the edge of the network. Ignition Edge doesn't allow for database connections, but with Sync Services, which is included with IIoT, it does have internal storage that provides a one week buffer for the alarm journal and audit logs, as well as up to 35 days of tag history data to be retained locally. This data can then be forwarded and synchronized with a central gateway or can then send the edge of the network data to your central database.

**[02:02]** [02:02]
                                    Finally, EAM also provided by IIoT, allows for an edge gateway to act as an agent in an EAM architecture. EAM enables the ability to bring diagnostics, automatic backup and recovery, central licensing, and project and tag synchronization to your edge of network device. These functionalities are what make Edge a flexible addition that can fill multiple roles at your edge of the network and help bridge the gap between different architectures.

</details>

---

### 4. Edge Overview Video at Inductive University

:::tip Video Link
Watch the video: [Edge Overview Video at Inductive University](https://inductiveuniversity.com/videos/ignition-edge-edition-configuration/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll provide an overview of Ignition Edge. Edge is a lightweight, lean version of Ignition designed for edge of network solutions. Edge can come pre-installed on a range of edge of network devices that are ready out of the box, but it can also be installed on a wide variety of operating systems such as Windows, Linux, and MacOS and with its ARM processor support can run on devices like a Raspberry Pi. We have specific zip installers on our downloads page, or Edge can also be installed via the normal Ignition installer. To do this via the installer, I just need to access the Gateway webpage after installation, and when I get to the first step of the commissioning process, I'll choose Edge from the different editions. From here, I'll accept the Inductive Automation EULA, set up my administrator user, and start the gateway. Once it's started, you may notice that the branding is different from a standard Ignition installation, but navigating the Gateway webpage will feel familiar. The Home and Status pages will look like they do on the Standard edition.

**[01:05]** [01:05]
                                    You'll start noticing differences on the Config page. First, the overview page will list the different products available for Ignition Edge. Each product represents a set of features to resolve pain points at the edge of the network. These products have been bundled together into two product offerings: Ignition Edge IIoT, and Ignition Edge Panel. Ignition Edge IIoT automatically includes the EAM, Sync Services and Compute products, which will be installed with Edge. It also includes the MQTT transmission module and Opto22 and Emerson driver Modules. However, these will have to be manually installed and can be downloaded from the Strategic Partners tab of the Ignition downloads page. Ignition Edge panel includes everything that comes with Ignition Edge IIoT, but also provides visualization functionality for your HMIs. For more information on the functionality that can be achieved with these products, see the Edge Architecture's IU video or the corresponding page in our user manual. I'm currently in trial mode, but if I wanted to activate a license, I would do it in the same way as a standard installation by going to the licensing page.

**[02:08]** [02:08]
                                    The only difference is that I would be activating an Edge specific license. As previously mentioned, Edge is a lightweight version of Ignition and that comes with certain limitations. For one, there's no section of the config page for setting up a database connection. Instead, edge has built in internal storage for tag history, the alarm journal, and audit logs. Data collected on Edge can then be synchronized to a central Ignition server when a connection is available. Additionally, Edge only allows for one project, which will already be created on installation. There's no option to add or import another project from the Gateway webpage, and no way to create a new project from the Designer. However, you can import project resources such as windows and views, and you can import tags as well, just like you would with a standard install. If you have another Edge Gateway, you can take a gateway backup and restore it between the two Edge gateways, but you cannot restore a gateway backup between standard and Edge gateways. While Edge Panel adds visualization to Edge, you must choose between Vision or Perspective, but not both.

**[03:05]** [03:05]
                                    Vision will be the default active visualization module, but this can be changed by going to the Gateway Settings page and scrolling down to this dropdown. That wraps up the main distinctions between a standard installation of Ignition and Ignition Edge. Edge offers a lot of the same functionality as a standard install, but in a scaled down, lower cost version that makes it perfect for edge of the network architectures.

</details>

---

### 5. Local Client Fallback Video at Inductive University

:::tip Video Link
Watch the video: [Local Client Fallback Video at Inductive University](https://inductiveuniversity.com/videos/local-client-fallback/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    Ignition clients depend on a stable connection with a gateway to function. If that connection is lost, the client will suspend operations as it attempts to reconnect. This can be a problem when clients need to monitor critical operations. In this lesson, I'll demonstrate how to configure a local client fallback. With a local client fallback, if connection to a central gateway is lost, then a Vision project on the machine that's running the client will be launched. This project can be set up with the minimum amount of realtime information required to keep operations running until that connection can be reestablished. I've created an environment to replicate a scenario where I have a local Ignition installation onsite with me and a gateway that's in a different centralized location. I'll start by showing my project and the designer for my central gateway. My central gateway is a standard Ignition installation and has connections to things like my database server. I also have a designer open for the project on my local gateway. In my scenario, this gateway is an Edge installation with connections to local devices.

**[01:04]** [01:04]
                                    It's physically separated from the central gateway and the network connection between the two isn't always reliable. This project is stripped down and doesn't contain some of the same windows that the project on the central gateway does. An important note about this Edge gateway is that it's also installed on the same machine that I'm going to be launching clients from. When the connection to the central gateway is up, I want operators to use that project. However, when that connection goes down, I want them to still be able to continue operations at the local site with the Edge project. In order to accomplish this, I'll need to configure a local client fallback on the local gateway. I'll start by opening the Edge Gateway's config page and navigating to System, Overview, and Gateway Settings. Then I'll need to scroll down to the Local Vision Client Fallback section. I'll click this checkbox to enable local fallback, and then I need to specify the project to use during fallback. This is an Edge gateway, so the project is named Edge. This other property here controls how long the client will wait before switching to the local gateway's project.

**[02:03]** [02:03]
                                    I'm gonna leave this at the default of 60 seconds, but if you wanted to increase or decrease that, this is the place to do it. It's also important to note that port 6501 must be open on the local machine in order to use local client fallback. Once I'm finished with these configurations, I'll scroll down and click save changes. Now I'll open up a client for the Central Gateway project. Under ideal conditions, operators will use this project and get access to everything Central Gateway has access to. However, in the event of a network problem, which I'll trigger on my other screen, communications will drop and the project won't be accessible. Then operators will see this Gateway connection lost window. This window will notify them that the connection is lost, the local fallback project will be detected, and a countdown for whatever value was in the Seconds Before Failover property we saw in the local gateway will start. Once the timer reaches zero, it will automatically switch to the Fallback project. However, failover can also be triggered manually by clicking this button here.

**[03:14]** [03:14]
                                    Now my operators can continue working in this project, which gives them just enough to keep operations running while communications are down. After the Fallback project is launched, it won't automatically transfer back to the central gateway when communications are restored. However, you can create your own functionality to accomplish this. My project monitors the status of the central gateway and displays it on this label here. I'll restore the connection and you can see that my label will update and I've added a button to the window that will reveal itself. Clicking that will retarget back to the Central Gateway Project. To see an example of how to retarget via a client timer script, check out the user manual link in the resources below the video. To further extend the functionality of what we looked at, in this video, you can store historical data on the Edge Gateway's temporary provider, and sync that with the central gateway when the connection is restored.

**[04:06]** [04:06]
                                    To see how to configure this, check out our other video called Setting Up Edge Sync Services.

</details>

---

### 6. Setting up Edge Sync Services Video at Inductive University

:::tip Video Link
Watch the video: [Setting up Edge Sync Services Video at Inductive University](https://inductiveuniversity.com/videos/setting-up-edge-sync-services/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to synchronize real time and historical tag data from an Edge gateway to a standard Ignition installation. This way, my central gateway will be able to read and write to the tags on the edge gateway, and any historical data that's collected on Edge will be forwarded for more permanent storage and querying. I already have my two gateways needed for this demonstration configured locally, so I'll quickly run through my environment. I have a central gateway acting as a hub with a standard version of Ignition installed. My hub Gateway is connected to a Microsoft SQL Server database. Then I have a spoke gateway with Ignition Edge installed. My spoke has a programmable device simulator connection created, simulating a PLC connection. Since I won't be going over the DB or device connections in this video, refer to the Databases in Ignition and OPC UA and Devices in Ignition topics in IU if you need to see how to set those up. I'll open up a designer for my spoke, and you can see that I have a simple dashboard displaying live tag values, and those same tag values are being stored to Edge's internal history provider, and the trends are displayed on a power chart.

**[01:07]** [01:07]
                                    I want to be able to replicate a similar dashboard on my Hub gateway that can read and write to those same tags and view historical data as well. To get started, I'll need to set up a Gateway Network connection between the two gateways. I'll navigate to my spoke's config page, and then under networking, I'll click Gateway Network. From here, I'll go to the outgoing connections tab and create a new connection. I'll enter my hub's hostname, which is just Hub, and click create. Then I'll need to go to my hubs gateway webpage, approve the certificate, and accept that incoming connection. Before I can start sending the spoke's tag history to the hub, I need to configure the hub to accept storage. This can be done by navigating to the service security page and clicking edit on my security zone. I'll scroll down to the history provider access section and change the default profile access level to query and storage.

**[02:06]** [02:06]
                                    Now that that's done, I can turn on the Spoke's data sync. This will be accessed from the data sync section by clicking Settings. I'll enter in turn the hub gateway name, which in my case is Hub_Standard. The remote provider I'm connecting to is MSSQL. Then I just need to check the Remote History Sync enabled checkbox and then click Save. As of now, my Edge Spoke should be synchronizing its historical data with my hub and storing it in my SQL Server database. I also want to be able to read the live Edge tag values on my hub. To do this, I need to create a new realtime tag provider on my hub. This can be done by going to the tag section and clicking realtime. Then I'll click create new realtime tag provider. It's going to be a remote tag provider via the Gateway Network, and it's going to come from my Spoke Edge Gateway. The default tag provider on Edge Gateways is called Edge, so I'll select that. I don't really need to change anything else here, but if you wanna further configure your provider, you're free to do so here. I'm just gonna remove the extra "edge" from the name and click Create.

**[03:13]** [03:13]
                                    I should be able to read the edge tags now, but if I wanna write to them, I need to do one more thing on my Spokes Gateway webpage. Under security, I'll click Service Security and edit my security zone. Then I need to scroll down to Tag Access and change the Edge access level to ReadWrite. In order to test all of this, I'll open up a brand new project on my hub in the designer, and then I'll create a test view, and I'm not gonna replicate the exact same dashboard I had on my spoke, but I'll throw a couple components on here to test the functionality. First, I'll change the provider in my tag browser to the new Spoke Edge remote provider I created, and I can confirm I'm getting live tag values. I'll test writing to one and see that there are no errors. Finally, I'll throw a power chart on my view and find the tags storing history and add them to the chart.

**[04:16]** [04:16]
                                    Then I'll change the timeframe really quick, and I can see that I'm able to query the Edge gateway's historical values from my central gateway. My Edge Gateway will still only be able to see up to the 35 days worth of data that it can store, but now I can store that data in my database to be viewed from my central location.

</details>

---

### 7. Cloud Edition Overview Video at Inductive University

:::tip Video Link
Watch the video: [Cloud Edition Overview Video at Inductive University](https://inductiveuniversity.com/videos/cloud-edition-overview/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Cloud Edition differentiates itself from a standard Ignition installation by being an easy way to integrate Ignition into a cloud deployment. There are many reasons one might look to deploy a solution on the cloud. For example, cost and convenience. As you probably know, deploying a solution on premises, or on-prem, means that you're responsible for the physical location of your hardware, including any costs related to that space. You set up the actual hardware and infrastructure, and you pay for the upkeep and maintenance of them. Alternatively, platforms like AWS or Microsoft Azure will host servers for you on the cloud. These companies handle all the maintenance and infrastructure burdens allowing you to access the solution simply with an internet connection. From there, you would only be responsible for things like your application code, identity management, and network traffic. With a cloud deployment, you get the convenience of someone else handling the hardware, and you can take advantage of powerful, highly available, highly scalable services, that AWS and Azure offer. To illustrate this, let's take a look at an example of Ignition deployed in a standard AWS architecture.

**[01:11]** [01:11]
                                    This deployment uses a virtual private cloud with public and private subnets. It expands across two availability zones for high availability. It uses Linux Bastion hosts in an auto-scaling group to connect resources within the private and public subnets. It provides an Amazon Aurora DB cluster for read and write operations, and it takes advantage of encryption, alarming, and notification services for the AWS resources as well. Since Ignition is hosted within this environment, it benefits from the AWS managed resources. While you can spin up a virtual machine on a cloud platform and install the standard edition of Ignition, Cloud Edition makes this process much simpler. First of all, Cloud Edition is available through the cloud vendors themselves. For example, you can use an Ignition Cloud Edition AMI from the AWS Marketplace to easily create a virtual machine with Ignition pre-loaded and ready to go. On top of this Cloud Edition is bought through the marketplaces themselves, like other cloud services.

**[02:08]** [02:08]
                                    There is no startup cost and it's instead paid for by usage. Cloud Edition will also come with a fixed set of modules, such as our new cloud connector modules that will help create connections to commonly used cloud technologies like MongoDB and Kafka. One important difference with the included modules is that Cloud edition will not come with the OPC UA drivers. This is intentional. It's not advised to connect directly to PLCs or other industrial devices due to security reasons. These distinctions are what make Ignition in the cloud unique. It's not intended as replacement for on-prem Ignition setups. Since these solutions will still be preferable for controls and data acquisition. However, Cloud Edition provides a much simpler way to create a hybrid solution with both on-prem and cloud deployments to take advantage of availability, computing, storage, and various other services offered by cloud platforms.

</details>

---

### 8. Spinning up Cloud Edition in AWS Video at Inductive University

:::tip Video Link
Watch the video: [Spinning up Cloud Edition in AWS Video at Inductive University](https://inductiveuniversity.com/videos/spinning-up-cloud-edition-in-aws/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to create an AWS EC2 instance pre-loaded with Ignition Cloud Edition. Before I get started with the EC2 instance, I need to create a network, or VPC in AWS for the instance to reside in. This allows me to configure the isolated part of the AWS Cloud where my instances is so that I can control who has access to it and ensure that I have access myself. Within the VPC service in AWS I'll click Create VPC. If I were to select VPC only, I'd have to go and manually create each other component of the network to fit my needs. This gives me ultimate control over the network and lets me customize it to my liking. However, to keep this lesson brief, I'm gonna choose the VPC in more option as this will automatically create public and private subnets, routing tables, and an internet gateway so that I can quickly connect to my instance. Check out AWS's documentation to learn more about networking resources and AWS. I'll quickly name the resources in this VPC so that they reflect what I intend to use them for and they're easier to identify.

**[01:06]** [01:06]
                                    Then I'll leave the rest of the options at the default and click create VPC, but just know that this network can be configured differently. Now that I have a VPC for my Ignition installation, I need to subscribe to the Ignition Cloud Edition Marketplace listing. I'll navigate to the AWS Marketplace Subscription Service and then click Manage subscriptions. Next, I'll click Discover Products, and now I can search for Ignition. Once Ignition Cloud Edition shows up, I'll click it to go to the product page. The product page contains an overview of Ignition Cloud Edition, pricing information to calculate costs, and a link to the end user license agreement, as well as information about support.

**[02:02]** [02:02]
                                    I'll go ahead and click Continue to Subscribe. In order to subscribe, I'll need to accept the terms, and then once subscribed, I can continue to configuration. The fulfillment option is going to be a 64 bit AMI. AMI are templates that contain operating systems and applications for instantiating an EC2 instance. This AMI is going to let me create an EC2 instance running Ubuntu with Cloud Edition preloaded on it. I also have the option of selecting a specific Ignition version, and then I can choose my AWS region that I want to deploy in. I'm happy with this window, so I'll go ahead and continue to launch. There are a couple options for launching the software. I'm gonna choose launch through EC2 to be taken to the EC2 console to create my instance.

**[03:06]** [03:06]
                                    This form will let me start configuring my instance. First, I'll give my instance a name, and we can see that the new Cloud Edition AMI is already selected for us, thanks to the subscription page. Choosing the correct instance type is going to depend on the needs of your application, and you can change that through the dropdown, but I'm gonna keep mine at the default selection. If you've created a key pair within AWS, you can use it to securely connect your instance, or you can proceed without one. Click edit to the right of network settings to make sure these settings are correct. I wanna change my VPC to the one I just created. I'll put this in my public subnet one, and I want to enable auto-assign public ip. I'll let it create a security group. I'll leave the default name and description, and luckily for me, it's already created Inbound Security Group rules.

**[04:04]** [04:04]
                                    If you're using your own security group, make sure that you have the proper rules set up to access your instance. The source type dropdown let's me configure the IP addresses that can access this port. I'm just gonna leave this at the default so that all IP addresses can access it, but I'd highly recommend setting this up to only allow connections from IP addresses, you know and trust. Under configure storage, I can see the volumes that are associated with my instance and how much data they can store. The root volume is for the operating system data and this EBS volume here is for the Ignition data. On first startup, the AMI is going to automatically link the Ignition data folder to this volume for you. Despite this button, you can't actually start up with just a root volume. If you delete this, AWS will create and attach one for you anyways. If I expand advanced details, this allows me to specify even more options for this instance, such as recovery options, what the instance does when it stops and down at the bottom, I can add scripts to the user data field if I wanted to insert some commands for the instance to run when it's created.

**[05:03]** [05:03]
                                    I'm gonna leave everything else at default, and then I'll click launch instance on the right. Once the instance is running and the status checks are complete, I can click it for more information. I wanna find the public ipv4 address or public DNS record, which will be on the details tab or the networking tab. I can copy that and I'll open a new tab and paste it. Normally, the default Ignition port of a standard install would be port 8088, but the AMI is configured to start up with port 80, so I'll add that and hit enter. If you're using SSL, the Cloud Edition port will be 443 instead of 8043. The commissioning phase for Cloud Edition is shorter and will only prompt you for the admin username and password, so I'll create a user real quick. Once it's done starting up, you can see that I now have my own Cloud Edition installation.

**[06:15]** [06:15]
                                    Once you have your network carefully set up to be as secure as it can be while still providing the proper access, Ignition Cloud Edition can quickly and easily be set up.

</details>

---

### 9. Connecting to an AWS RDS Database Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to an AWS RDS Database Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-an-aws-rds-database/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to connect to an AWS RDS Aurora database from Ignition running in an EC2 instance. I already have Ignition installed in an EC2 instance, and it's VPC has already been set up to accept incoming HTTP connections. To see how I set this up, you can refer to the Ignition AMI video. To start, from the RDS dashboard, I'll click Create Database. For my database creation method, I'm gonna choose standard create instead of easy create, and the reason for this is it'll give me the ability to specify more configuration options, such as an initial database name. Next, I'll pick the Aurora engine that's compatible with MySQL, and I'll scroll down. I'm gonna choose the dev/test template. Under settings, I'll need to specify a DB cluster identifier, which is how I'll identify this database in AWS. I'll leave the master username as admin, and I'll specify a master password.

**[01:05]** [01:05]
                                    Make sure that you don't forget this as you'll need it later. For the instance configuration, I'm gonna leave the default values, since this is just a demonstration, but you can click this dropdown to pick a different database class to suit your needs. The next thing I wanna change is the connectivity settings. I'm gonna click this radio button to connect to an EC2 Compute resource, and then this dropdown appears and I can see my running instances, and I'll select my instance running Ignition. This will cause my database to automatically get added to the Ignition VPC. I'll let it automatically set up a DB subnet group. However, under VPC Security group, I'm gonna choose the security group that was created with my VPC stack. If you click additional configuration here, you can see the default database port and see that it's 3306. And if you want, you could change it here. I'll continue scrolling down toward, it says additional configuration here, and now I can expand it and specify my initial database name. Note that they say Amazon RDS does not create a database if nothing is specified here, but we'll need an initial database to exist to create our connection from Ignition. When I go to create the connection from Ignition, the default database name and the connect URL is gonna be "test".

**[02:17]** [02:17]
                                    I can easily change that, but I'm just gonna name this database test to simplify the connecting process. Once I've done that, I'm gonna leave everything else as the default value and scroll down to the bottom and click create database. Once my database is up and running, I'm gonna click on the database instance and copy the endpoint. Now I can head over to my gateway webpage config page. I can go down to databases and click connections, and then click create a new database connection. The Aurora DB engine I chose is compatible with MySQL, so I'm gonna choose the MariaDB driver since that's included in the installation and is compatible with MySQL.

**[03:07]** [03:07]
                                    I'll call this connection Aurora MySQL, and I'm gonna overwrite the "localhost" in the connect URL with the endpoint I just copied from AWS. I left the database port at 3306 and named the initial database test, so I'll leave the rest of the URL alone. The username for my database was admin, so I'll type that in along with the password, and then I can scroll down and create the connection. The connection will go valid, and I'm ready to start storing and retrieving data from my cloud database.

</details>

---

### 10. MongoDB Connector Overview Video at Inductive University

:::tip Video Link
Watch the video: [MongoDB Connector Overview Video at Inductive University](https://inductiveuniversity.com/videos/mongodb-connector-overview/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to use the MongoDB Connector Module to retrieve and update data from a MongoDB NoSQL database. The MongoDB connector gives the ability to create a new connection type from the gateway webpage's config page, it adds a new binding type to Perspective, and adds new scripting functions. I have some sample data in my MongoDB Atlas database that's in the cloud. I've already gone through the effort of adding the proper network access for my cluster, and I've created some user credentials within Atlas. To create my connection from Ignition, I'll need some information in Atlas. I can grab that by clicking on "Database" and then "Connect". I'm going to select "Drivers" as my connection method, and then I wanna make sure that my driver is set to Java and it's set to version 4.3 or later. This connection string at the bottom contains all the info that I need to make my connection from Ignition so I can copy this and reference it later. One thing to note is that it uses placeholders for the username and password.

**[01:07]** [01:07]
                                    Those just need to be substituted for whatever user you set up to access this database. I'll also, quickly go into the sample databases I have to show a record that I want to view an ignition. Within this "sample_airbnb" database is a collection named "listingsAndReviews". I'll bring this document with the name "Ocean View Waikiki Marina w/prkg" into Ignition to view it. I'll switch over to my gateway webpage and on the config page, I'll scroll down to where it says Connectors and click MongoDB. I'll create a brand new connection and start filling in the requested fields with the information I copied from my connection string. The name is just the name of the connection in Ignition. I'll call this MongoDB Test. The connection scheme identifies the format for the connection. This is the first portion of the connection string, and I just need to append a "+srv" to the default value. I can find my connection host in the connection string after the "@", but before the "?".

**[02:13]** [02:13]
                                    The database I'm connecting to is "sample_airbnb". I'll enter the username and password that I set up in Atlas, and finally, I'll copy over the connection properties that are at the end of the connection string. Now I can click Create New MongoDB Connector, and once that connection's valid, I can head over to my Designer to use the new Perspective binding type. I have a blank view that I'll go ahead and drop a label onto. I'll add a binding to the text property, and you can see there's a new binding type called MongoDB.

**[03:15]** [03:15]
                                    From here I can choose from the connectors that I've created on my Gateway webpage. I can choose the collection that I want to query from, and then I can choose a query type, the options being: Find, FindOne and Aggregate. I just wanna return the one result we saw earlier, so I'll choose FindOne. Now I'll use the query builder to add a filter. I'll add a key value pair where the key is called name, which is the field I want to filter on, and then the value will be Ocean View Waikiki Marina w/prkg. Now I can hit okay, and you can see that it's returning all the fields for the document that matched my filter. If we look at the Perspective Property Editor, we can see all the different fields including the name. If I wanted to only return certain fields, I could add a script, transform and filter the return value, or I can go back to the binding and add a projection. For example, if I wanted to return the name of the listing and the number of beds, I can add a new value under projection for name, and I'll set that to one.

**[04:20]** [04:20]
                                    Then I can add another value for beds and set that to one, and then I can hit okay, and you can see that there are less fields returned from the query. The "_id" field also gets returned by default, but if I want to exclude that, I can go back to the query builder and add another value for "_id" and set that to zero. In addition to a Perspective binding. The MongoDB Connector Module also includes some new scripting functions, which I'll demonstrate in a component script event. These new functions can be found in the "system.mongodb" library. There are functions that, for example, find documents, delete documents, and insert documents, and there are also functions for listing connector or collection info.

**[05:23]** [05:23]
                                    I'll choose updateOne to update one of the fields in the document we just looked at. The name of the connector I created is "MongoDB Test". The collection is "listingsAndReviews", and then the filter is going to be a PyDictionary where the keys are the field names, and then I supply the values that I want to match. In my case, I want to update the record where the name is Ocean View Waikiki Marina w/prkg. Then I need to provide my update operators.

**[06:05]** [06:05]
                                    This will also be a PyDictionary where I provide my desired operators as keys, and the values will also be PyDictionaries, including the updates themselves. I'll be using the set operator, and then my update will be to change the beds field to zero. I'll quickly add a Perspective print call to this so that we can take a look at the return, and we can see that the update was acknowledged and one record was matched and modified. If I head back over to my Atlas database in my browser, I can refresh it and confirm that the document has been updated to say that there are zero beds.

**[07:09]** [07:09]
                                    These are some quick examples of the new features that are added with the MongoDB Connector Module.

</details>

---

### 11. Upgrading Cloud Edition in AWS Video at Inductive University

:::tip Video Link
Watch the video: [Upgrading Cloud Edition in AWS Video at Inductive University](https://inductiveuniversity.com/videos/upgrading-cloud-edition-in-aws/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to upgrade Cloud Edition when it's running in an AWS EC2 instance. I currently have version 8.1.27 installed, and I wanna upgrade it to the most recent 8.1.29 nightly. The first thing I'll need to do is connect to my EC2 instance. Before I can do that, I need to make sure that I have my SSH port exposed. I can find this out by navigating to my instance's security page and scrolling down to the inbound rules. As of now, I only have port 80 and 443 exposed, so I'll click my security group to configure it, and then I'll click edit inbound rules. I'll click add rule and then select SSH from the type dropdown. For the source, I'll choose anywhere IPv4, but you can specify custom IP addresses or ranges on your end to be more secure, and I strongly recommend doing so. Once my rule is set up, I'll click save rules.

**[01:04]** [01:04]
                                    Now I can head back to my EC2 instance and select my Cloud Edition instance, and once it's selected, I'll click connect. There are multiple options for connecting, but I'm going to use the EC2 Instance Connect and click connect. This should open up a new tab with a terminal connected to my instance. Next, I'll head over to the Inductive Automation downloads page. I'll click other operating systems and versions. I'll change the version to the 8.1.29 nightly. And next I'll scroll down to the Linux installers. I want this 64-bit Ignition cloud installer for Linux, so I'm going to right click it and click copy link address. Now I'll go back to my instance connect tab, and I can download the installer to my instance. To do this, I'll use the wget command, and then I'll right click and paste to input the link to the installer. Now I can hit enter and it will start downloading. Once it's finished downloading, I'll type "ls" to make sure that the installer is here, and now I need to make the installer executable, and I can do that by typing "chmod+x" and then the file name. If I type "ls", again, it should show up in a different color to signify that it's executable, and now we can run it.

**[02:38]** [02:38]
                                    Throughout this process, you may be asked a couple questions about modules and the install location, and when that happens, you can type in your answers and hit enter. Once it's finished upgrading, it'll ask me if I wanna start Ignition and I'll hit "Y" and hit enter.

**[03:15]** [03:15]
                                    Then I'll say, yes, I want to install the service, and the gateway will start. Once the installation is complete, I'll refresh my Gateway webpage. Then I can head to the status page and see that I'm now running a dev version and the upgrade is complete.

</details>

---

### 12. Spinning up Cloud Edition in Azure Video at Inductive University

:::tip Video Link
Watch the video: [Spinning up Cloud Edition in Azure Video at Inductive University](https://inductiveuniversity.com/videos/spinning-up-cloud-edition-in-azure/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to create an Azure virtual machine preloaded with Ignition Cloud Edition. If you search for Ignition in the Azure marketplace, you should be able to find the Ignition Cloud Edition Marketplace listing, which I currently have opened. If you explore the different tabs of the listing, you can find an overview of Cloud Edition. You can view pricing details and you can view ratings and reviews. In order to use this image, I'll click the Get It Now button on the left side of the screen. Now I can click continue in this popup to start creating this app in Azure. This next page will have a lot of the same information from the marketplace listing with the addition of usage information and support information. However, now we can see some different deployment options. You can choose to start with a preset configuration, purchase a reservation through Azure, or deploy programmatically, but I'm gonna choose the standard create option, and this will take me to the VM creation wizard where I can start supplying the configuration options for my Cloud Edition VM.

**[01:13]** [01:13]
                                    First, I'll need to provide some project details for billing and resource management purposes. My subscription is already selected, but I'll go ahead and create a resource group for my Cloud Edition resources. Next, I'll provide the instance details. I'll give my virtual machine a name. I'll leave the next two fields at the default values, but the region and availability options let you configure where the VM is hosted and manage the resiliency of your resources in case of data center outages or maintenance events. The image is the base operating system or application for the VM, and the Cloud Edition image will already be selected thanks to the steps we've already gone through. You can choose to modify the VM size to add or remove resources based on your needs, but I'm gonna leave this standard D2 VM with two virtual CPUs and eight gigabytes of memory selected.

**[02:11]** [02:11]
                                    I'll need to configure an administrator account for when I wanna access my vm. I'm going to choose the SSH public key authentication type, and I'll leave the rest of these values alone. On the disks tab, you can configure the operating system disk or add additional disks, but I'm gonna leave these default values and move on to the networking options. The VM requires a virtual network. You can choose an existing one that you may have already created, or you can create a new one while creating your VM. Make sure that a subnet is selected, and you'll also need a public IP to access your gateway. When creating a network security group, this image will use pre-configured rules, and we can see these by clicking Create new under the Configure Network Security Group dropdown. Under Inbound Rules, ports 80, 443, and 22 will automatically be open to all sources. I would recommend modifying these after you create your vm, and you can do that by navigating to the network security group service in Azure, and you can make sure that these are only exposed to the IP addresses that need to access them. You can click the X to leave this window.

**[03:19]** [03:19]
                                    The next page has VM management options. Then the following page allows you to enable alerts and diagnostics. The advanced page allows you to specify custom configurations or scripts for your vm, and then the tags page lets you add key value pairs to your vm that lets you group like resources. Finally, once we're done with our configuration options, we can go to the review and create page, and as long as the validation passes and the settings look correct, we can click create. Since I chose to authenticate with an SSH key, it'll prompt me to download the private key and create a resource. So I'll go ahead and do that. You won't be able to download this key again, so make sure you keep it somewhere safe.

**[04:12]** [04:12]
                                    Once it's finished deploying, I'll click Go to Resource to see the details of my new vm. In order to access my gateway webpage and commission my gateway, I'll need the IP address of my vm, which can be found under the Essentials section or in the Networking properties. If I hover over the public IP address under Essentials, an icon to copy to clipboard will appear. So I'll go ahead and copy, and I'll paste that into a new browser tab. Cloud Edition is configured to bind to ports 80 and 443, the default HTTP and HTTPS ports as opposed to a standard installation which binds the Port 8088 and 8043, by default. You shouldn't need to specify port 80, but it's important to know this difference from a standard Ignition installation. The commissioning phase for Cloud Edition is shorter than a standard installation, so all I need to do is create my administrator user credentials, and then I can click Finish Setup, and then Start Gateway.

**[05:16]** [05:16]
                                    And now I have Ignition Cloud Edition installed and running in the cloud on an Azure VM.

</details>

---

### 13. Connecting to an Azure SQL DB Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to an Azure SQL DB Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-an-azure-sql-db/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll connect an Azure SQL database to Cloud Edition installed on an Azure VM. In the SQL Databases service in Azure, I'll click the Create button. The subscription field is already filled out, so I'll specify a resource group for this to live in, and I'm going to place it in my Cloud Edition resource group that I created while creating my VM. I'll give my database a name and it'll be important to remember this name as I'll be referring to it from the Database Connection and Ignition. Next, I'll need to make a server for my database, so I'll click create new. I'll give this a name, and I'm on the west coast of the US so I'll update my location to access the server. I can use Azure AD and or SQL authentication. I'm just going to use SQL authentication, so I'll specify a username and password, and then I'll click okay. Now my server is created, and if I wanna modify the resources for the database, I can click configure database here. I'll click next to go into networking.

**[01:17]** [01:17]
                                    And if I want to access this database, I need to choose some sort of endpoint for my Azure apps. So I'm going to select a private endpoint, and then I can click the add private endpoint link here. I'm going to select the same location that my Cloud Edition VM is in, and then give this a name. I can add it to the same virtual network, and I'll pick the default subnet, and then I'll choose yes, integrate with Private DNS zone, and click Okay. Next, I can click review and create to see all the configuration options that are currently selected for the database. If you need to make changes to any of these options, you can navigate to the corresponding section at the top of the page and make your selections. Since I'm happy with my selections, I'll click create.

**[02:19]** [02:19]
                                    Once that's deployed, my DB should be accessible. I'll click Go to Resource to see its details. And now I can copy the server name from the overview page, and I can go to my Gateway webpage to create a new database connection. I'll pick the Microsoft SQL Server driver, and I'll give this connection a name. I'm going to delete the default host and instance name from the Connect URL and paste my database server name I copied from Azure. I'll leave it at that and it'll connect to the default instance and port, which is perfect. Next, I'll enter the SQL authentication credentials I set up while creating the database, and then I'll wanna change the database name in the extra connection properties.

**[03:20]** [03:20]
                                    And then I'll click create. And now I have a valid connection to an Azure SQL database from my Azure Cloud Edition installation.

</details>

---

### 14. Upgrading Cloud Edition in Azure Video at Inductive University

:::tip Video Link
Watch the video: [Upgrading Cloud Edition in Azure Video at Inductive University](https://inductiveuniversity.com/videos/upgrading-cloud-edition-in-azure/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to upgrade Cloud Edition running in an Azure virtual machine. I'm currently running a release candidate for version 8.1.29, and I want to upgrade to the newest 8.1.30 nightly. First thing I'll do is go to my VM page in Azure. I'll click connect at the top of the page to see my options. I'll choose the SSH into my incense. Azure will run a couple checks against my instance to make sure that the connection prerequisites are met. Once those are good, I can move to the connection stage. When I created this VM, I chose to authenticate with a public key and I was prompted to download my private key. After downloading it, I moved it from my downloads folder to another folder for safekeeping. The first thing I'll need to do is change the permissions for my private key. If you're on Linux or Macs, you can run the chmod command they list here. But I'm on a Windows machine, so my steps were slightly different. To summarize, I right clicked the private key and went to Properties, and then the Security tab. I clicked Advanced and removed any permissions here aside from giving my user account full control. Since the permissions are good, I'll copy the command that's listed in step four of the SSH instructions here, and then open up PowerShell, my command line interface of choice. Next, I can paste that command and I just need to replace this part with the path to my private key, which I move to my ".ssh" folder, and then I can hit enter, and now I'm connected to my vm.

**[01:43]** [01:43]
                                    Next thing I wanna do is find the address to the installer I want. I'll head over to the Inductive Automation downloads page, click other operating systems and versions, pick my version from the dropdown, and then I'll right click the Ignition Cloud Linux installer and copy the link address.

**[02:01]** [02:01]
                                    I'll switch back to my PowerShell window and I'll download the installer to my VM by using the wget command, adding a "--referer" argument, which I'll display down below, and then pasting the link I just copied. Once it's finished downloading, I can type ls to make sure that the installer is here, and now I need to make it executable. I can do that by typing chmod+x, and then the file name. And if I type ls again, I should see that it changed color, which tells me it's executable and I can run it. The installer is going to ask me a couple questions throughout this process, and I can just type out the answers.

**[03:05]** [03:05]
                                    It'll ask what installation location I want. I'll just hit enter here. It will detect that this is an upgrade, and ask me if I want to continue. I'll Type Y and hit enter. I don't wanna modify any included modules, so I'll type N and then N again, for the additional modules. Then I can type Y one more time to start upgrading. Once it's done installing, I'll say, yes, I want to start Ignition, and then yes, to installing the service. Now I can go back to my Gateway webpage and I can check the status page to confirm that I'm running a dev version and my upgrade was successful.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
