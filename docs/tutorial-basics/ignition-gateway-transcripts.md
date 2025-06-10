---
sidebar_position: 3
---

# Ignition Gateway - Video Transcripts

This page contains transcripts from the ignition-gateway video course.

## Overview

These transcripts are automatically generated from the [ignition-gateway Course](https://inductiveuniversity.com/courses/ignition/ignition-gateway/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 1:39:11 PM
Source URL: https://inductiveuniversity.com/courses/ignition/ignition-gateway/8.1
:::

## Video Transcripts

### 1. The Gateway Webpage Video at Inductive University

:::tip Video Link
Watch the video: [The Gateway Webpage Video at Inductive University](https://inductiveuniversity.com/videos/the-gateway-webpage/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    We are currently looking at the Gateway webpage which acts as a sort of hub for everything within the Ignition software. To get to the Gateway webpage, you need to navigate to the Gateway server's IP address :8088 or in our case if you're on the server itself, localhost:8088 will do just fine as well. Initially, you start out in the Home section where we have some different actions that we can take to get started with the software. Up here at the top, we have the Ignition Designer Launcher which you can download and launch to get started with designing your very first project. Next we have our Application Launchers which allow you to either download the Vision Client Launcher where you can launch and view your Vision projects or you can view your Perspective projects which will launch right within your web browser.

**[01:07]** [01:07]
                                    At the very bottom of the Home section, we have some helpful links that'll take you to various areas where you can learn more about Ignition such as our user manual or the Inductive University website where you're currently at right now. The next section is the Status section. The Status section typically needs a user to log in to the view this section so I'm going to log in with my admin user. Here we can get an idea of how our Ignition system is doing. This very first page here has some very general parts of the Ignition software. Each one of these parts would be highlighted red if there was an issue with it. We can also dive into some more specific sections on the left-hand side here such as looking at the Gateway system logs. The last section is the Configure section or Config for short.

**[02:02]** [02:02]
                                    The Configure section also requires a login but because I've already logged in from the previous section, I don't have to log in a second time. The Configure section is where you can manage all of the different parts of the Ignition software. We can add new users, set up new database connections, add device connections, all sorts of things are possible here within the Configure section of the Gateway. If you wanted to manage a specific system but you weren't sure on which page on the left here that the system was located in, then in this Overview page right here in the middle, we do have some common things that people like to do to help you get started. Additionally, on both the Status and Configure pages, on the bottom left-hand corner of the screen, there is a search bar where I can type in a search term and it'll let me know all of the places within the Gateway webpage where it finds that term.

</details>

---

### 2. Password Reset with GWCMD Video at Inductive University

:::tip Video Link
Watch the video: [Password Reset with GWCMD Video at Inductive University](https://inductiveuniversity.com/videos/password-reset-with-gwcmd/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to take a look at how to reset our password when we're locked out of our ignition gateway. So for starters, I have an ignition gateway here and I'm unable to remember what 80 character pseudo random string my colleagues set the password to. So I'm going to go about resetting it. There are two key prerequisites to resetting your password. The first is that you'll need to be on the actual machine that ignition is installed on. So you should verify that you're on the right system before you proceed. The second thing is you'll need administrator access on this machine in order to reset the password. Since I have both of those things, I'll get started. The first thing I need to do is open up a command prompt. So I'll click my little start icon here and type in CMD to find the command prompt application. Then I'll right click on that application and select run as administrator. That step is very important. If you forget to run your command prompt as an administrator, you'll get access denied errors. Next we'll type CD, which is short for change directory and then I'll need to type in the path to my ignition install folder.

**[01:05]** [01:05]
                                    So C: \ Program Files\Inductive Automation\Ignition and then I'll hit enter. Now, one other note, before I proceed, I'm doing this on windows but if you're on a different operating system and the procedure is going to be pretty similar you'll open up a terminal application like Bash and navigate into your ignition install directory just like I've done here. Now that we found our install directory we're going to run the gateway command utility which is GWCMD.bat. In windows this is a batch  file in other operating systems it'll be a shell script that you can treat as an executable. Now I need to pass my little utility here, a command line argument to tell it what to do. If I want to find out what the options are, I can do -h and hit Enter and it'll show me the available options. So with that done, it looks like the right argument is -p. So I'll hit the Up arrow on my keyboard to pull up the previous command and change the argument to -p then hit Enter.

**[02:06]** [02:06]
                                    Now the interface is telling me that the password has been reset and I need to restart. It still happens that we can restart our gateway right from here by pulling up the previous command and doing -r. And with that, we'll navigate back over to our browser and wait, just a moment for our gateway to come back up. Once the gateway is back up, we're going to be prompted for new temporary credentials for the gateway. So how about I put admin and then password and then confirm password and then proceed and start my gateway. So now that I'm back in, I can go to my config tab here and then log in using my new credentials. So admin and then password. Now what this reset is actually done is created a new user source called temp as well as a new identity provider called temp.

**[03:08]** [03:08]
                                    The identity provider which is an ignition identity provider is pointing at that temp user source. And the user source just has my one user in it. So if I pull up my gateway security settings under security and then general, we'll see that our system identity provider has been changed to that temp provider. Now, this is built in such a way that the new provider and user source won't collide with any others on the system. We'll just generate a unique name for the temp provider if we find any collisions. On a final note we also give that one temporary user the administrator role which we use to gate the config section of the gateway web page as well as the designer by default. When you're ready to replace your temporary user with your permanent IDP and user source, you can do it all right from here.

</details>

---

### 3. Gateway Status Page Troubleshooting Video at Inductive University

:::tip Video Link
Watch the video: [Gateway Status Page Troubleshooting Video at Inductive University](https://inductiveuniversity.com/videos/gateway-status-page-troubleshooting/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    The Status section of the Gateway webpage is a great tool that you can use when troubleshooting any issues with your Ignition system. On this first Overview page, our attention is immediately drawn to any areas that are having some issues. In this case, I can see that one of my database connections is faulted as well as my Gateway Network connection. Clicking on one of these will bring me to a new screen where I can see some more details about what's going on. Here, all of my database connections would be listed and I can see the status of each of them. In this case, my one database connection is errored out and I can actually click on the error message here to see more information. In this case, Ignition is failing to connect to the database and it's receiving a timeout, and it's telling me to verify some information to make sure it's correct. More than likely, I probably entered in the host name wrong and I would simply need to go back and correct that. On many of these more detailed pages, in the upper right-hand corner, there is a button that says Configuration. Clicking it will take you to the relevant Config section for the area that you are looking at. Because we were troubleshooting our database connection, that Configuration button took us to the Database Connections page in the Config section. Back in the Status section, it's important to note that the areas listed in the center here are only general areas of the Ignition system. In the tree on the left-hand side here, there are some more pages that take you to very specific systems. For example, if we look at the Gateway Scripts page, we can see all of the Gateway Scripts that are currently running within our Ignition system. This page lists out all of our Gateway Event scripts. In this case, we're looking at the Timer scripts because we're in the Timer tab and I can see that my one timer script has an error. Down at the bottom, there's a special logging section that will only log events for this particular area, in this case Gateway Event scripts. I can either find my issue in the Log Activity section or just like before, I can click on the error next to the script that I'm looking at and it's going to give me more information about what's causing that error. In this case, I know on line three of my script that the myVar object is not defined. All these error messages have a Copy button, making it really easy to copy the error out and send it to someone else.

</details>

---

### 4. Changing Gateway Memory Allocation Video at Inductive University

:::tip Video Link
Watch the video: [Changing Gateway Memory Allocation Video at Inductive University](https://inductiveuniversity.com/videos/changing-gateway-memory-allocation/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In the future, there may be some situations where you need to change the amount of memory allocated to Ignition. For example, perhaps you want to scale that amount of memory based on the size of your system, or you're trying to optimize response events. The process is easy. Like all pieces of software, the Ignition service is allocated a certain amount of memory or RAM that it's allowed to run with. To see how much your system is allowed to run with, we'll start on the homepage of your Ignition gateway and click on the Status tab. Now, select the Performance page. I'm only using a fraction of the available memory in my case. We can see here that our system is allowed to use 1024 megabytes, a little over one gigabyte of RAM. You might wanna add a little more wiggle room to utilize more of the server's memory, especially if your memory usage usually floats around the maximum allocated. If we wanted to change this maximum value for memory allocation, we would need to first go into the Ignition installation directory.

**[01:03]** [01:03]
                                    In this example, I'm working with a Windows machine, but the process is similar for MacOS or Linux. Here are the default installation directories for each operating system. Next, we'll need to find the Data directory inside the Ignition installation directory. Once we're in the Data directory, we can open up this configuration file -- the Ignition.conf file. Scroll down to the section called Wrapper Java Properties, and look for the property called Maximum Java Heap Size. The line below it called wrapper.java.maxmemory  is the line that we're going to update. Right now we're using about one gigabyte of RAM here, but because I have a 64-bit system, I can bump this up a little. Let's set it to use four gigabytes of RAM, or 4096 megabytes. The value is required to be in megabytes, and it should also be a multiple of eight. For the changes to take effect, I would then need to save this and restart my gateway. One important note of caution, though.

**[02:02]** [02:02]
                                    if the max memory here is set higher than what's currently available in the system, the Ignition service will stop and then fail to start again. It will also log an error in the wrapper.log file explaining why. If this happens, simply come back here to the Ignition.conf file, set the max memory to something more appropriate, save the file, and restart the gateway again. I've included links to the Gateway Configuration File reference, and the Ignition Default Installation Directories reference in the Ignition User Manual below this video. Please check out the articles for more details about the default installation directories and the configuration changes that can be made to the Ignition.conf file.

</details>

---

### 5. Making Ignition Gateway Backups Video at Inductive University

:::tip Video Link
Watch the video: [Making Ignition Gateway Backups Video at Inductive University](https://inductiveuniversity.com/videos/making-ignition-gateway-backups/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    Creating a backup of your Ignition Gateway is super easy. In most instances, the gateway backup process takes about a minute and backs up everything you find in the ignition gateway. This includes your projects gateway settings, authentication profiles, tags, database connections, OPC and device connections, alarm pipelines, scripts, sequential function charts, reports and the image management library. Perspective custom assets, such as fonts, icons and themes are also included in a gateway backup. The only data not included in a gateway backup is the data stored in other pieces of software that ignition interacts with. This includes things like SQL databases and PLC programs for example. It is also important to note that items manually added to the ignition installation directory are also not included in a gateway backup and must be backed up separately. Now, how do I take an ignition gateway backup?

**[01:06]** [01:06]
                                    There are actually a few ways to do this. The easiest is through the ignition gateway web interface where I am currently. All I have to do is head to the configure page select the backup and restore menu and press the big blue button with a text, download backup. I will press it, and as you can see a file download is initiated, that's it. Once that file downloads, you will have a gateway backup in the form of a single GWBK file. This file will allow you to restore a copy of this ignition gateway into any other ignition server. This is very useful for things like cloning and ignition server, but most importantly you have a way to back up all of your ignition resources. For ignition gateways that are in constant development, it is often useful to have ignition take gateway backups automatically for you on a schedule. Luckily Ignition is capable of taking schedule gateway backups.

**[02:01]** [02:01]
                                    While still on the configure tab, if I head over to the gateway settings menu, I can scroll down and eventually find this schedule backup settings. Once enabled I'm able to choose a gateway backup file destination where all of my scheduled gateway backups will be saved to. I am also able to define my gateway backup schedule using a Unix crontab style scheduling string. By default schedule backups are taken every day at 1:15 AM. Finally, we can define a backup file retention count. This tells the system how many backup files to keep. Once this retention count is reached, the oldest gateway backup is pruned to make room for any new backup files. Ignition is also able to take gateway backups through its gateway command line utility. The gateway command line utility, provides a list of commands you can use to perform specific functions in an ignition gateway, invoking the gateway command utility or GWCMD for short can only be done for my command line.

**[00:00]** [00:00]
                                    [03:04]         So you will need to use a command line interface like terminal, PowerShell, command prompt, et cetera. I am currently on a window system. So let me grab my command prompt. With my command prompt open, I will need to navigate to the root directory of my ignition installation. I will do so by going CD followed by the path to my ignition installations root directory which I will paste from my clipboard here. Now that I am in my installations root directory I will type "GWCMD -b" which is the command to take a gateway back up and I will follow it with a path to the directory I want my gateway backup file to be stored. In my case, I want it to go to my documents, so I will go users, my username, documents, followed by my backup files name which I will name my backup and I will press enter.

**[04:03]** [04:03]
                                    After a few seconds, you will see a message telling you the gateway backup succeeded. As a side note, since we are asking the system to write a gateway backup file to my documents folder the command prompt will have to be ran with administrative privileges. This is true regardless of the command line interface you are using. As you can see there are various ways to trigger Ignition to take a gateway backup. Ultimately, any way you choose will lead to a way for you to get a copy of your entire gateway in its current state.

</details>

---

### 6. Restoring Ignition Gateway Backups Video at Inductive University

:::tip Video Link
Watch the video: [Restoring Ignition Gateway Backups Video at Inductive University](https://inductiveuniversity.com/videos/restoring-ignition-gateway-backups/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to take a look at how to restore a Gateway Backup onto an Ignition Gateway. Restoring a Gateway Backup is actually quite simple. First, from our Gateway webpage, we need to navigate to the Configure section by clicking on the Config tab on the left. We'll go ahead and log in using my username and password. And then once here, we will navigate to the Backup Restore page under System on the left. Here, we can download a backup of our current gateway, which we do recommend you do before you restore a Gateway Backup. But we can also click on this Restore tab. Here we can set some options about how the Gateway Restore process will work. For example, we can restore this gateway Disabled, which means all projects and connections will be disabled upon the restore.

**[01:04]** [01:04]
                                    Or we could even choose to override the gateway name with a new one. We then need to choose our Gateway Backup file by clicking the Choose File button below and selecting a GWBK file for Gateway Backup. It is important to remember that when we restore a Gateway Backup, it will overwrite everything that is currently on the gateway, which is why we recommended taking a Gateway Backup prior to the restore. When you're sure that you want to do the restore, go ahead and click the Restore button down at the bottom. The Ignition Gateway will stop, restore our Gateway Backup, and then start again when it's done. And just like that, our Gateway Backup has been restored onto this Ignition Gateway. It is important to note that it is also possible to restore a Gateway Backup using the Ignition Gateway Command-line Utility.

**[02:04]** [02:04]
                                    This involves opening up a command prompt and typing in the proper Gateway command with a certain modifier. You can find more information about the Gateway Command-line Utility as well as all of the modifiers in our user manual.

</details>

---

### 7. Making Project Backups Video at Inductive University

:::tip Video Link
Watch the video: [Making Project Backups Video at Inductive University](https://inductiveuniversity.com/videos/making-project-backups/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Sometimes when working with Ignition resources, it may be necessary to take a backup of an individual project instead of the entire gateway. There are a few different ways to do this, so let's talk about each one a little bit. The first way that we're going to be taking a project backup is from the Gateway web page. So I have my Gateway web page up here and I'm in the Config section. From here I'm going to go to the Projects page. In here I'll see a list of all the projects on my gateway. So I'll find the project that I'd like to export, and then on the right-hand side I'll click More. And there are a couple of options here worth mentioning. The Copy option here will duplicate the project on our current gateway, and the Export option will allow us to download our project as a ZIP file, which we can take and restore onto a different gateway. So let's try that out. If I click Export here, we can see that my ZIP file has been downloaded. If I want to restore this University project onto a different gateway, I can just come back into this Projects page on that gateway, and then click Import project. And when I click Import project it will pull up a dialog where I can select which project file I'd like to upload, as well as specifying a project name, or overwrite existing projects with the same name. I don't need a second copy of the project on this gateway, so I'll just go ahead and click Cancel. By the way, one final note on these project exports, we can see that it's a ZIP file that's being downloaded. It might be tempting to think that the ZIP file contains the project export. In fact the ZIP file is the project export. So you don't need to extract out the contents of that ZIP file. You just upload the entire ZIP file when you import. One other note about importing and exporting project resources. The project export that I'm taking here can be restored onto the same version of Ignition or onto a later version of Ignition, but I can't take an 8.0.3 project and restore it onto a 7.9.1 gateway, for example. So now that we've talked about how to take project exports, let's also talk about the contents of our project export. So for this, I'm going to open up my Designer. One useful way of thinking about a project export is that everything in the project browser here on the left-hand side will be included in the export. So this means that my alarm notification pipelines and transaction groups and Perspective and Vision resources and reports from this project will be included in the backup. Notably absent are things like database connections, device connections, and tags. Only project resources will be included in a project backup. So keeping that in mind, while we're in the Designer here, there are a couple of other ways to back up project resources, specifically from the Designer. One of those ways is that I can come up to File at the top and then say Export. And what's different about this export is that I get this dialog appearing here which includes a list of all of my project resources, and I have the chance to pick and choose which ones I want to export. So whereas before we were taking what was called a full project export, meaning a total backup of everything in the project, from here we can take what's called a partial project export, meaning that we'll only export the resources that we pick. There is one final way of exporting project resources. So I'll go ahead and close out of this. Now suppose that I want to export my empty alarm pipeline here, and it's the only thing that I want to export. I don't care about anything else in the project, just this pipeline. I could do that from the interface that I was just in, but my other option is to find my project browser here, right-click on the pipeline, and say Export. You'll find that most project resources will have an export option on them allowing you to take a partial project export with just that resource included. These partial project exports will still be ZIP files. They'll still contain everything they need to run as a stand-alone project, but one option available to us in here is that with our project export handy, we can come to File, and say Import. So we can use these tools, both from the Gateway web page and the Designer here to easily transfer individual resources or entire projects from one gateway or project to another.

</details>

---

### 8. Project Backup vs Ignition Gateway Backup Video at Inductive University

:::tip Video Link
Watch the video: [Project Backup vs Ignition Gateway Backup Video at Inductive University](https://inductiveuniversity.com/videos/project-backup-vs-ignition-gateway-backup/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    There's a big difference between Project backups and Ignition Gateway backups. And it's important to understand what these differences are. This way, when you go to take a backup, you can take the correct backup for what you need to use it for. An Ignition Gateway backup includes everything within the Gateway. All of your projects and the tags that they use. Your authentication profiles, database connections and even device connections. While it may be useful to have everything in a single backup, restoring a Gateway backup will overwrite all currently configured projects and settings within your Gateway. A Project backup includes things that are unique to the project, such as any vision or perspective resources, scripts, alarm pipelines, reports or transactions groups. When you restore a Project backup, you can add it as a new Project to the Gateway or merge it into an existing project on your Gateway. It will not overwrite any of your projects unless there is a naming conflict which it will ask you to resolve. Regardless of whether you're restoring a project or Gateway backup, it may be a good idea to take a backup of the project or Gateway you're restoring over. Just in case anything happens.

</details>

---

### 9. About Licensing Video at Inductive University

:::tip Video Link
Watch the video: [About Licensing Video at Inductive University](https://inductiveuniversity.com/videos/about-licensing/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to learn about licensing. Licensing in ignition is actually quite simple. First, we need to log into the configure section of the gateway webpage. And then we need to go to the licensing page on the left. Here, we will see the license that we currently have applied to our gateway. You'll notice that there are two sections here, the applied licenses section shows us the license key that we currently have applied as well as all of the modules that make up that license. On the right hand side, there are also two buttons which we can use to refresh the license or remove the license. There is then a section called Effective License, which shows us the modules that are being licensed as part of this ignition system. This is dependent on the licensed modules that are installed on the gateway. It is also possible to add multiple licenses to your gateway, which is most often used for a module license from a third party developer. In the next videos, we will go over the trial period as well as how to apply a license.

</details>

---

### 10. About the Trial Period Video at Inductive University

:::tip Video Link
Watch the video: [About the Trial Period Video at Inductive University](https://inductiveuniversity.com/videos/about-the-trial-period/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to talk about the trial timer. If you don't have a license applied to your Gateway, the Gateway will be in what's known as trial mode, a free two hour trial. During this two hour trial period, the full functionality of Ignition is available. You can create projects, connect to databases, create reports, launch your clients. Anything is possible within Ignition during the trial period. When that two hour trial period ends, there are certain things that will stop working within the Gateway. Your device connections will stop pulling tag data from your PLCs, you will be unable to launch Vision Clients and Perspective Sessions. You will be unable to execute reports among a few other things. However, we do still allow you to launch a designer and create a project. If you want to see your project in action and launch it in say a client or session, then you will need to reset the trial.

**[01:10]** [01:10]
                                    When you reset the trial timer, that timer gets reset back to two hours where you can continue to play around with the full functionality of Ignition. Resetting your trial is very simple and it all starts here in the Gateway webpage. You'll notice right up at the top we have our trial banner and my trial has currently expired. To reset my trial, I need to log in to my Gateway. And click this button on the right here and type in my username and password. Once I've logged in, you'll notice on the right-hand side, there is a reset trial button. Clicking that will add our two hours back to that trial timer. Now, I can add a license to my Gateway by going to the licensing page.

**[02:05]** [02:05]
                                    When I activate a license on the Gateway, if all modules that are installed are now licensed, the trial timer will go away because there is a license applied. However, it is possible to have a license applied and still have a trial timer. Let me apply a license really quick. You'll notice my license has now been applied, but I still have the trial timer up at the top. But this time it says licensed incomplete. In this case, I do have a license applied to my Gateway, but it does not license every single module that I have installed. And so that module is technically still in trial mode. I can see which modules are still in trial mode by clicking on this view modules button on the right of the trial banner.

**[03:04]** [03:04]
                                    It's going to take me to my modules page, where I can see that my SMS notification module is still in trial. In this case, when the trial timer ends only the unlicensed modules will stop working. So in this case, I will no longer be able to send out SMS notifications, but everything else in the Gateway will continue to work because they are fully licensed.

</details>

---

### 11. Online Activations Video at Inductive University

:::tip Video Link
Watch the video: [Online Activations Video at Inductive University](https://inductiveuniversity.com/videos/online-activations/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to take a look at online activations. If your gateway server has internet access, you can do what's known as an online activation. To do so, you can go either to the licensing page on the left here or you can click on the activate ignition button on the right. Either way, it takes you to the licensing page where you can click on the activate license button and then type in your license key into the space provided before hitting the submit button. The gateway will confirm your internet connection where you can then just click the activate button. It will activate your gateway and you can see which modules are licensed. It is also possible to refresh your license if you've added some new modules to it by clicking on the refresh button to the right of the activation key.

</details>

---

### 12. Offline Activations Video at Inductive University

:::tip Video Link
Watch the video: [Offline Activations Video at Inductive University](https://inductiveuniversity.com/videos/offline-activations/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to take a look at offline activation. If your gateway does not have an active internet connection, you will need to do what's known as an offline activation. We can do this by first going to our gateway webpage and going to the licensing page either by clicking the link on the left or this activate ignition button on the right of the trial mode banner. We can then click the activate license button down at the bottom and type in our license key before clicking on the submit button to the right. You will notice that the gateway cannot detect an internet connection. And so the only available option is to activate offline. Like it says here, access to a device with internet is required for this process.

**[01:01]** [01:01]
                                    So with that, let's go ahead and click the activate offline button. The first step of this process is to click on the download activation request button, which will download an activation message.text file. The second step then requires an internet connection. So here is where you would typically take that activation message.text file and transfer it to a computer that does have internet access. I'm simply going to re-enable my internet access on my computer here. With internet access, we then need to go to this link, which takes us to our website. This first section allows us to upload the activation message.text file that we downloaded earlier. I'll go ahead and hit the choose file button and select that text file. I then want to hit the upload activation file button.

**[02:00]** [02:00]
                                    And you'll notice when we do that, our website actually spits back a license.IPL file. We need to take this file back to the gateway webpage. So this is typically where a transfer from the computer with internet access back to the gateway server would occur. I'll go back to my gateway and complete step three, which requires that we select our license.IPL file and then click the activate button down at the bottom left to activate our gateway. Reloading the license also works a little bit differently when we have an offline gateway. Because the gateway is offline we can't simply click this reload button anymore. What we actually have to do is unactivate this gateway and then reactivate it using the offline unactivation and activation processes. You can learn more about the offline unactivation process in a future video.

</details>

---

### 13. Reactivating a License Video at Inductive University

:::tip Video Link
Watch the video: [Reactivating a License Video at Inductive University](https://inductiveuniversity.com/videos/reloading-a-license/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at how to reactivate your license. In Ignition, it may sometimes be necessary to reactivate your license. Reactivating your license will pull in any recent changes that you've made to your license and update it on your gateway. You will notice that my license is currently incomplete and that's because I have a module installed that is not within my license. I can click on the button over on the right that says view modules in this license incomplete banner and that will take me to the status section of my gateway where I can figure out which modules are not activated by my license. In this case, we can see that my OMRON driver is not currently activated by my license.

**[01:00]** [01:00]
                                    Now I have recently purchased the OMRON driver module and have had it added to my license key so I'm going to go back to my configure section of the gateway and go to the licensing page where I can see my currently applied license. Here, I need to reactivate my license key so that it can pull in the updated version of my license which includes the OMRON driver. To reactivate the license, I simply need to go over to the right of my license key and click the reactivate button. You'll notice that my license has been reactivated, I can see the OMRON driver is now included in my license and the license incomplete banner has gone away. It is important to note that the reactivation process only works because the gateway has an active internet connection. If you do not have an active internet connection to your gateway you will first need to do an offline unactivation and then do an offline activation.

</details>

---

### 14. Unactivating a License Video at Inductive University

:::tip Video Link
Watch the video: [Unactivating a License Video at Inductive University](https://inductiveuniversity.com/videos/unactivating-a-license/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to take a look at how we can unactivate a license from our gateway. To unactivate the license from our gateway, we would need to come into the Configure section of our gateway webpage. Once here, we can go to the Licensing page where we should see our applied license. To unactivate the license, we simply need to go to the right hand side and click on the Unactivate button which looks like a little trashcan symbol. Once we click on that, it will confirm that we want to unactivate our license from the gateway. I'll go ahead and click Yes. And this will have removed the license from the gateway as well as give it another grant in Inductive Automation servers. Now, because I had an internet connection here, the unactivation process happened automatically. But if I didn't have an internet connection, I would need to go through with offline unactivation. Offline unactivation is actually very similar to offline activation. The gateway will download an unactivation file that we need to bring to Inductive Automation's website to the Activate or Unactivate Ignition page. We can then upload that file to the Unactivate Ignition section and hit the Upload Unactivation Notice button. This will let Inductive Automation servers know that you have unactivated your gateway, and it will give the license key a new grant. Now, unactivating a license can be used to remove it from a gateway, but it is also typically used when transferring a license from one gateway to another. To transfer a license, you would simply need to unactivate it from the first gateway, and then go through the activation process with that same license on the new gateway. The unactivation process will give a grant back onto that license so that the new gateway can be fully licensed using that same license key.

</details>

---

### 15. How Redundancy Works Video at Inductive University

:::tip Video Link
Watch the video: [How Redundancy Works Video at Inductive University](https://inductiveuniversity.com/videos/how-redundancy-works/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    Ignition redundancy supports a two node system, meaning there are two copies of the gateway running. One is designated as the master gateway and the other is the backup. If we review the architecture setup on my gateway here in the status overview screen, you'll notice I already have redundancy set up. My master gateway named Alpha is hosted locally, and my connected backup gateway is hosted on another computer. All systems are identical. This is because when changes are made on the master, they are queued up to be sent to the backup node and when the backup connects, it retrieves these updates or downloads a full system backup if it is too far out of date. The master node is responsible for all system configurations. The backup node will not allow you to edit properties. If the master system were to fail or the computer were to shut down, the system will automatically fail over to the backup system and continue running there.

**[01:03]** [01:03]
                                    All clients that are currently running will automatically switch over to the backup when a failover occurs, and there are many redundancy settings that you can alter that affect how a failover occurs, and what happens to the system when the master comes back up. One important thing to note about redundancy is that the gateways don't have to be installed on the same type of system. Meaning we could have one gateway via 64 bit and another one via 32 bit, or we can have our master via Windows machine and the backup of the Linux machine, although it is recommended to keep the operating systems the same, the only thing that needs to happen for redundancy is that the gateways need to be the same ignition version.

</details>

---

### 16. Setting Up Redundancy Video at Inductive University

:::tip Video Link
Watch the video: [Setting Up Redundancy Video at Inductive University](https://inductiveuniversity.com/videos/setting-up-redundancy/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    <v Instructor>In this lesson,</v> we'll take a look at configuring redundancy across two different gateways. In my web browser here, I have two tabs with a separate gateway in each tab. I have beta, which is going to be the backup of the redundant pair, and I have alpha, which is going to be the master. Now, redundancy requires that I make some configuration changes on both gateways here. The order you do this in doesn't matter too much, but for the purposes of this example, I'm going to start with the alpha gateway, or the master gateway. So, on alpha here, I'll head over to the config section, and under the system header, I'll click on redundancy. The property that's ultimately responsible for whether or not a gateway is participating in redundancy is this mode property over here. By default, all Ignition gateways, when they're installed, are set with a mode of independent, which means they're not participating in redundancy at all. So, alpha here needs to be set with a mode of master to make it a master in a redundant pair.

**[01:04]** [01:04]
                                    So I'll click on the dropdown, and select master. I'll scroll down a little bit more on this page. And I did want to point out that there are master node settings and backup node settings. So these settings are only applied to this gateway, depending on the mode of the gateway. So because I'm going to set alpha as the master, the master node settings would be applied to it. The backup node settings would only be applied if this gateway was set to be a backup. But I'm actually not going to make any other changes. I'm just going to scroll on down and click save changes, and then I'll click confirm. And that's actually all we have to do to set up redundancy on the master gateway. It's pretty straightforward. Let's switch over to beta. I'll go to the config section on beta. Again, I'll go to the redundancy page, and I need to tell this gateway that it should be a backup, so I'll change the mode to backup. Now, in a redundant pair, the backup gateway is the one that's responsible for reaching out to the master. So, I need to tell my backup gateway here where the master is located. So I'll scroll down on this page, and under backup node settings, I need to set the master node address.

**[02:07]** [02:07]
                                    So in this field, I just need the network address of alpha. So I'll switch over to alpha, and I'm going to actually just copy the IP address here. I'll then switch back, and I'll paste the address into this field. Now, as far as the port goes, you may recognize this port if you've looked through our documentation, but the 80/60 port is the primary port our gateway network feature uses. So, the redundant pair will utilize the gateway network to communicate with each other, which is actually going to come up in just a moment. Now, I don't need to make any other changes here. We can scroll on down, and I'll click save changes. Now, before I click confirm here, now would be a good time to back up any work that's on this gateway that's going to become a backup. When synchronization occurs, this backup gateway here is going to lose all of its unique configuration. So if you've been any projects, or anything that you wanted to save, you would want to take either a project export, or go ahead and just take an entire gateway backup, if there are tags, or other gateway-level configurations you wanted to save, and maybe important into another gateway elsewhere.

**[03:13]** [03:13]
                                    Now, I don't have to worry about that, so I'll just click confirm. And changing a gateway to a backup does require a little bit of time, so I'll just speed this part up here. All right, so, now this gateway is set to be a backup. Now, how can we verify that this gateway is now a backup? Well, we can head over to status here, and on the overview page, once this page finishes loading its information, we can see that this gateway does have a peer. So if we look at those little boxes there, we can see that this is set as a backup, and it's supposed to have a master, but it can't find the master. For some reason, there's a communication problem. You probably also noticed that there's a gateway network connection problem down below. Well, that's because the two gateways can't talk on the gateway network. So, this is a problem you might run into, naturally, but with any sort of gateway network connection, out of the box, you need to approve connections across different gateways.

**[04:05]** [04:05]
                                    So when you're setting up redundancy, the backup gateway will make an implicit outgoing connection to the master gateway. So I just need to switch over to alpha here, and under config, I will go to gateway network settings, I'll click on incoming connections, and we can see, there is, in fact, a remote connection that's not approved. So, I'll just go ahead and approve this because I do recognize this connection. I'll confirm this, and there we go. So now it's approved. We can switch over to status here on alpha. And if we give it just a moment, and there we are. We now have our redundancy set up. Now, I'm looking at this page on alpha, or the master, but you'll see a similar page on the backup. Now, if I click on the peer box here, it does take us to the status section on the redundancy page, which has information about the redundant state. Now, you'll notice the peer is no longer connected. That's because the backup initiated a gateway restore. It's restarting itself right now, so that it can inherit all of the configurations from the master, which has to happen initially, just so the backup can become in sync with the master.

**[05:12]** [05:12]
                                    So if I go over to the beta tab here, I can actually refresh this page. This page is actually out of date now because the gateway is restarting. But if I click reload here in my browser, we can see that the gateway is starting. All right, now that we're back online, you're going to notice this gateway changed its name. This gateway, this backup gateway, is now called alpha. It's still considered a backup, but it inherited all of the other settings from the master gateway, except for the redundancy settings, of course. But that about wraps it up for redundancy. Now, any changes that are made to the master are going to be inherited automatically by the backup. And if the master goes down for any reason, the backup is here, ready to take over.

</details>

---

### 17. Redundant Licensing Video at Inductive University

:::tip Video Link
Watch the video: [Redundant Licensing Video at Inductive University](https://inductiveuniversity.com/videos/redundant-licensing/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In an earlier lesson, I showed you how to configure a redundancy across two different gateways, but I didn't talk about licensing. Now redundancy is actually a platform-level feature. It's not owned by one module, rather other modules utilize it. However, in a production environment, you're going to want a license on both the master as well as the backup, so you will need two licenses. The main reason for that is when a failover occurs, things switch over to the backup. If the backup doesn't have a license and the trial is expired, then none of the modules will run, which more or less invalidates the point of having redundancy in the first place. Now when you're purchasing a license from us, you do have the option to add on a redundant license, so it's basically a copy of the license you're purchasing, but it's intended for the backup gateway. I'm looking at my backup gateway here, which does have a license applied. If I look at the effective license, there's this backup true item that's being applied. Now in most cases, you don't really know, need to know what these details are or what they mean, but the backup one is kind of special in that it sort of marks this gateway as a backup only, so this gateway here can only ever be set to a backup mode in redundancy.

**[01:18]** [01:18]
                                    So if I go to, under the Config section here, if I go to the redundancy page, you can see that mode, which is normally a dropdown, is actually just statically set to backup. I can't change this, and that's because of the license, because that particular license has been applied to this gateway. For reference, I'm going to switch over to my master gateway, which is licensed right now, you don't see the little banner at the top here, but I am free to change the mode. So when you're configuring redundancy, if you can't change the mode of a gateway and there's a license applied, it's pretty safe to assume that the license is applying a mode.

</details>

---

### 18. Gateway Network Overview Video at Inductive University

:::tip Video Link
Watch the video: [Gateway Network Overview Video at Inductive University](https://inductiveuniversity.com/videos/gateway-network-overview/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    The gateway network is a part of the ignition platform that allows two or more gateways to connect with one another and share data. By connecting gateways in the gateway network, it unlocks the ability to use ignitions distributed services, which can benefit systems that have multiple gateways spread out across their facility. Currently, there are four major systems that use the gateway network, and then there are security zones in service security, which helps to lock down each gateway in the gateway network and to keep them secure. First, we have remote tags, which are stored and executed on one gateway, but can be shared amongst any other gateways on the gateway network by setting up a remote tag provider on those remote gateways. Similarly, we have remote history providers, which allows you to store and query history data from any gateway in the gateway network. Next, we have remote alarms, which allows you to set up alarms remotely and utilize the alarm pipelines of any gateway in the gateway network, meaning you can set up alarms on tags in remote gateways, but have them use an alarm notification pipeline that is on a centrally located gateway. So then all of your alarm notifications happen in one central location.

**[01:20]** [01:20]
                                    Finally, one of the last major services to utilize the gateway network is the enterprise administration module. The enterprise administration module allows you to control and maintain multiple gateways from one central gateway called the controller. All connected through the Gateway Network.

</details>

---

### 19. Setting up a Gateway Network Connection Video at Inductive University

:::tip Video Link
Watch the video: [Setting up a Gateway Network Connection Video at Inductive University](https://inductiveuniversity.com/videos/setting-up-a-gateway-network-connection/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to create a gateway network connection between two gateways. Setting this up is easy and simply requires two Ignition gateways on the same network. If I take a look at my web browser, I have two tabs open, one from my local gateway and the other from my remote gateway. I'll start on my local gateway by navigating to config, networking, and gateway network. This will open up the general settings page for the gateway network, which is where I can configure the basic rules for the system, including the security rules. For example, I can configure whether or not connections are required to use SSL. By default, this will be true, and that means that any incoming connections to this gateway that don't use SSL won't be allowed. If I scroll down, there's also the allow incoming connection setting, which determines the allowed direction of connections for this gateway. This also defaults to true, which means that this gateway will allow connections from other gateways. There's also the connection policy setting below it, which potentially further restricts which connections are allowed. By default, this only allows approved connections, which means that any incoming connections from other gateways need to be approved from the incoming connections tab before they're allowed.

**[01:14]** [01:14]
                                    If I scroll down some more, I can configure the ping settings for any potential incoming connections. Each of these settings will have a short description that goes along with it, but I'll link to our user manual page with additional information, including any changes to these settings that have occurred for the various 8.1 versions. Now that I've gone over the general settings, I'll create the actual connection. I'll do that by scrolling up and clicking the outgoing connections tab. Then I can click create new connection to connect to the remote gateway. Keep in mind, with the default settings, incoming and outgoing connections are allowed, so I could have also chosen to create a connection from the remote gateway and there'd be no difference in the end result. Since I'm connecting to the remote gateway, I'll enter its host name here, but I could also provide the IP address. Next is the port number. For SSL Connections, this is going to use the default port of 8060, but any non-SSL connections would use the default port of 8088.

**[02:07]** [02:07]
                                    By default, the use SSL setting will be set to true, which is good. If I accidentally unchecked this, my connection wouldn't work because of the required SSL setting that is still set to the default of true on my remote gateway. I'm gonna leave the rest of the settings at their default values for this connection, but I could configure things like the rate that the remote gateway is pinged at and the timeouts for web socket and HTTP connections. Since I'm not gonna change anything else, I'll click create. I'll see the connections show up here, but it'll say it's faulted because I'm not done yet. If you remember, in the general settings, by default, only approved connections are allowed, so I need to head over to my remote gateways gateway network page and go to the incoming connections tab and approve the connection. First, since I'm using SSL, I'll need to approve this certificate, and once that's approved, I'll approve the connection by clicking more and then approve. The status will then change to running, and if I switch back to my local gateway webpage, that will also say running, and now I have an active gateway network connection between my two gateways.

</details>

---

### 20. Remote Tag Provider Video at Inductive University

:::tip Video Link
Watch the video: [Remote Tag Provider Video at Inductive University](https://inductiveuniversity.com/videos/remote-tag-provider/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    A Remote Tag Provider uses the Gateway Network to grab a tag provider from another gateway on the Gateway Network, allowing you to share tags between networked gateways. If we set up a Remote Tag Provider on Gateway A, it'll create a link to the specified tag provider on Gateway B and then be allowed to read and write to the tags that exist on Gateway B. However, Gateway B will still handle things like writing to A PLC, alarms, and history for those tags. A Remote Tag Provider allows tags to be shared between gateways without the need for additional OPC connections, for a more streamlined flow of data. Before we get started, you'll first need to ensure that you have two separate gateways. In addition, you'll need to make sure both of these gateways are connected through the gateway network. You can see that I have one gateway installed locally and one installed on a remote machine here. Since we have our prerequisites set up, we'll go to the Configure section of the local gateway.

**[01:07]** [01:07]
                                    Scroll down and go to Tags and Realtime, here on the left. If you already have some tag providers set up here, don't worry about it. Click the Create New Realtime Tag Provider link down below. Select the Remote Tag Provider option and go to the next page. Here we can see our remote gateway listed. If there were more gateways in our gateway network, they would also appear here, but since we only have the one, I'm going to make sure it's selected and hit the next button. This presents us with a list of the tag providers on that remote gateway. You'll notice that I only have the tag provider called Default and the tag provider called System. The System Provider includes all of the gateway's built-in system tags. Since the default tag provider holds the tags I'm trying to access, I'm going to choose default as my tag provider and click the next button. This last page is where we can customize exactly how this tag provider works.

**[02:04]** [02:04]
                                    Since my remote gateway's name is Remote Gateway and the tag provider is default, it combined those elements to create this new name. If you'd prefer to use something different, you can change that to a custom name. And here you can see the gateway and provider sections got filled in automatically based on my choices from before. These are also customizable, if you'd like to use something else. Here in the history setting section, we can choose how we want to handle history that may already be set up on some of the tags. In this simple example, there are two gateways on the same network, and the tags we want to access from Gateway A, our local gateway, actually live on Gateway B, our remote gateway. If we set up a remote tag provider on Gateway A, it will request the tag information from Gateway B. B will query the records from its database, process the records, then send the results back over to the requesting gateway. Normally, tag history queries are sent through the Gateway Network, but I can also choose to send them directly to the database if I have a connection to the database on my local machine that the Remote Gateway is using.

**[03:14]** [03:14]
                                    This graphic shows the flow of information directly from the database to the querying gateway, if database is selected instead of Gateway Network. When set to database, history requests will run against the database directly. In this scenario, the requesting gateway then processes the data. If the local gateway is connected to the database, then you can use these settings down here to identify that database connection after setting the history access mode to database. Since we're not using the database for this demonstration, I'll keep the dropdown set to Gateway Network. I can also choose how alarms are going to be handled with these tags. Alarms can either be queried through the Gateway network when necessary, or they can be directly subscribed to, which will usually be faster, but it will use more memory than queried mode.

**[04:04]** [04:04]
                                    If you click on the advanced properties checkbox, it will reveal some new properties that I'd like to draw attention to for just a moment. In version 8.1.34 of Ignition, the Enable Tag Reference Tracker Store option was added. This enables the storing of tag reference entries to a database on the local gateway for analysis in a designer. Its default value is true. In version 8.1.4, Allow Backfill Data became another new option. This is set to false by default so that each value is processed fully as it arrives, but if this is enabled, data will be allowed to arrive out of order from the source. Data from the past will be stored to history, but will not be used for alarms, scripts, or subscriptions. Once we have all of our options set, we can go ahead and click Create New Realtime Tag Provider. You can see that it is now created our new remote provider. Let's take a look at those tags in the designer.

**[05:06]** [05:06]
                                    I already have a pair of designers open, one for my local gateway and one for my remote gateway. The first thing we need to do is make sure that Read-Write mode is enabled for both. On the remote gateway, we can take a look at the tag provider called default to see what kind of tags we would expect in the remote provider that we just set up on our local gateway. My local gateway doesn't have any native tags for the purposes of this demonstration. In the local gateway's designer, we can use this dropdown to select our remote tag provider. It has the same tags as the tag provider called Default in the Remote Gateway. If the value of this tag were to change in the remote gateway, you'll notice that it also updates on the remote tag provider on the local gateway. When you try to change a tag from the remote tag provider on the local gateway, though, you get an error message and it says Access Denied.

**[06:03]** [06:03]
                                    This is because of the way I have my Service Security and Security Zones set up right now. This connection is read-only. To learn more about Service Security, please watch our Security Zones and Service Security video. You'll find a link in the resources below. Once I've set up security properly to allow Read-Write access, I can close this error and enter a new value into the tag on the remote tag provider in my local gateway. It also updates in the actual tag provider on my remote gateway. While it may look like the tags are storing history here, the tags are actually on the remote gateway and storing history using the remote gateway's history providers. The tags are going to be stored and executed from the remote gateway where the tags actually live and originate. If I create or delete a tag on this remote tag provider in my local gateway, that tag will actually be created or deleted on the provider that they originate from on the remote gateway.

</details>

---

### 21. Remote History Provider Video at Inductive University

:::tip Video Link
Watch the video: [Remote History Provider Video at Inductive University](https://inductiveuniversity.com/videos/remote-history-provider/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    A remote history provider allows us to use the history provider of another gateway as well as its corresponding database connection. While it's fairly simple to set up, we first need to make sure that we have at least two gateways. I have this one here named controller, which is installed locally and one installed remotely on another machine. Additionally, we need to ensure that both of them are connected to each other through the gateway network. We then can scroll down on our configure section to the history page under the tag section. As you can see, I currently have one historical tag provider defined. This is because historical tag providers are automatically added whenever we set up a new database connection. This tells us I have a MariaDB connected to this gateway. Let's imagine I didn't have a database connection configured on this gateway. I do have a database connection on my remote gateway, and we can use that one. Because we are making a remote history provider, we don't need to connect this local gateway directly to the database and add another connection to it.

**[01:09]** [01:09]
                                    We can click the create new historical tag provider link to get started. First we want to select the remote history provider option and click the next button at the bottom. Then we wanna make sure our remote gateway is properly selected. If we have multiple gateways in our gateway network, they would show up here as well. Once the proper gateway is selected, we're going to want to hit the next button at the bottom. We then want to select the proper history provider. The remote gateway's history provider and corresponding database connection is called MariaDB. I'm going to select that one and then click the next button at the bottom. We can give our history provider a unique name and we also should confirm that the remote gateway name and the remote history provider name are both correct. Finally, we need to decide if we want to allow storage on this history provider. If this setting is unchecked, we will only be able to read historical data coming from the history provider of the remote gateway.

**[02:07]** [02:07]
                                    Keeping it checked allows us to both read and store history to the history provider. I'm going to leave it checked and then click the button at the bottom that says, create new historical tag provider. You may have noticed that right away it says that storage is faulted. This is because by default, the service security settings of any gateway will only allow read access to any of its providers, and because we kept the allow storage setting checked, it is not able to properly store data there because the gateway is preventing it. If you have never created security zones or set up any service security, you may run into this issue. To fix it, we're simply going to go into the remote gateway and go down to the service security within the configure tab. Then we want to go into the security zone that defines our local gateway. I'll scroll down to the history provider access section. You'll notice that the default profile access is set to query only. I'm going to want to query and store data to my history provider, so I'm going to set this setting to query and storage.

**[03:08]** [03:08]
                                    Once that's set, we're going to scroll down and click the save button and then go back to our local gateway. I can edit the remote history provider and save it with no changes to reinitialize it. You'll notice now it's running just fine. Now that's set up, I can set history on some tags using the remote history provider. Let's go ahead and open up a designer. I can then go and edit this tag named history tag and go down to the history section. When I choose to enable history and select a storage provider you can see my remote gateway database connection is now selectable. I'll go ahead and click on, okay. In addition, I can also set up tag history bindings using that historical provider, say from the data property of this table on my window. I'll go ahead and select it and I'll click on the chain link icon next to its data property. You can see when I go to the tag history binding, my remote gateway provider is there as well.

**[04:03]** [04:03]
                                    This can be used for things like tables, charts, and even in reports. With remote history providers, I can set up a database at one central location and have all of my historical data funnel through that gateway. This way, I don't have to worry about setting up a database in every single one of my gateways, and I can also view the historical data of any gateway from any other gateway in the network.

</details>

---

### 22. Remote Alarms Video at Inductive University

:::tip Video Link
Watch the video: [Remote Alarms Video at Inductive University](https://inductiveuniversity.com/videos/remote-alarms/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll look at remote alarming. Remote alarming allows one gateway to utilize the alarm notification capabilities of another gateway via the gateway network. I've already done some setup on my end to prepare for this, but in order to get this to work on your end, you'll need to meet the following prerequisites. You'll need two Ignition gateways, those gateways need to be connected via the gateway network, and each gateway will need to have the alarm notification module installed. My remote gateway also has other modules installed that my local gateway does not, but we'll see that in a moment. I want my local gateway to be able to utilize the other gateways alarming capabilities. To get started, I'll navigate to my local gateway's config page, scroll down to alarming, and then click notification. Next, I'll click Create New Alarm Notification Profile. The next page will show the available notification profile options I have on this gateway. This gateway is only able to create email notifications as I don't have the SMS or voice notification modules installed.

**[01:03]** [01:03]
                                    However, if I choose a remote notification profile, I can choose the remote gateway that's connected to this local gateway via the Gateway Network, and then I have access to any of the notification profiles that have been configured on that remote gateway. My remote gateway has the SMS and Voice notification modules installed and already has a profile created for email SMS and Voice. So each of those profiles are available to me here on my local gateway. I'll select the SMS notification profile and click next. This next page contains the settings for this remote profile. It pre-populates a name based on the connected gateway and the notification profile that was selected, which can be seen and changed in the remote gateway section. There are also some advanced properties for the delay between retries of a failed synchronization and for the size of the queued alarm transitions. I'm gonna leave these alone and create the profile, and then I'll see a running remote notification profile that gives me SMS notification capabilities on this gateway thanks to remote profiles.

**[02:02]** [02:02]
                                    Now that the profile is set up, I'll switch to the designer for my local gateway to show how to utilize this profile. First, I'll navigate to the alarm notification pipelines where I have an existing pipeline with a notification block. I can click the notification dropdown and choose the remote profile that I just created to use SMS notification in this pipeline. Furthermore, if I open up an alarm on one of my tags, I can choose one of the notification pipeline dropdowns and select any of the pipelines I have configured on this gateway, as well as any that are configured on the remote gateway. These features allow you to set up any hardware or software that you need on a central gateway, and then utilize those resources on any remote gateways via the Gateway Network.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
