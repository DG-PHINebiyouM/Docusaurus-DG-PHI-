---
sidebar_position: 6
---

# Ignition Designer - Video Transcripts

This page contains transcripts from the ignition-designer video course.

## Overview

These transcripts are automatically generated from the [ignition-designer Course](https://inductiveuniversity.com/courses/ignition/ignition-designer/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 2:07:58 PM
Source URL: https://inductiveuniversity.com/courses/ignition/ignition-designer/8.1
:::

## Video Transcripts

### 1. The Designer Launcher Video at Inductive University

:::tip Video Link
Watch the video: [The Designer Launcher Video at Inductive University](https://inductiveuniversity.com/videos/the-designer-launcher/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In Ignition, Designers are launched using the Ignition Designer Launcher, which can be downloaded and installed from the Gateway Webpage. In the upper right-hand corner of the webpage, there is a "Get Designer" button. Similarly, on the Home tab, there is a Download Ignition Designer Launcher button. Both avenues take us to a page where we can download the designer launcher itself. You'll notice that the gateway automatically detected that I'm on a Windows computer and in the upper right-hand corner provides a button for me to download the Designer Launcher for Windows. Alternatively, on the right-hand side, I can download Designer Launchers for other operating systems as well. I'm going to go ahead and download the Designer Launcher for Windows, and then run it to install the launcher. A setup wizard guides us through the installation process where we can choose an installation location. And whether we want to create a desktop shortcut for our Designer Launcher. When we hit the Install button, the setup wizard is going to go ahead and install. And once it's finished, we can go ahead and click the Finish button and it will automatically launch the Designer Launcher for me. Once it launches, I'm able to add a designer. It is important to understand that each ignition gateway will have a designer associated with it. The designer being the doorway to designing projects and an ignition gateway. When I select to add a designer, we see a list of gateways. Generally, the Designer Launcher will automatically detect gateways you can see in our network. In my case, I have two gateways listed, I will select my local gateway and press the Add Designer button. After I do this, my designer will be listed and I will have the chance to open it. Adding a new designer here simply allows me to have two designers that I can launch each from a separate gateway. Once the designer opens, I will be asked to authenticate against the identity provider configured for gateway authentication. I click on the Log In button, and I'm redirected to a web browser page for authentication. Once I authenticate, I will see some texts telling me that my authentication was successful. And to return to my designer, where I will now have access to all the projects hosted by this Ignition gateway. At this point, I can open whichever project I want, and I can begin making changes to it. As you can see, the Designer Launcher is not specific to one gateway, and can be used for every gateway within your network. Because the Designer Launcher is an application that's installed on your computer, there's no need to redownload it every time from the Ignition gateway. You simply need to run the Designer Launcher when you want to launch the designer. In the Settings tab, you can configure some basic settings about your Designer Launcher. Two of them in particular are really interesting. The default designer property allows you to select a designer that you want to launch when you first open the Designer Launcher. The launcher will then go ahead and open that designer automatically without you having to click on the Launch button. The other property Auto Exit on launch will automatically close the Designer Launcher whenever you launch a designer. Finally on the bottom, you have the ability to export or import launcher configurations. This makes it really easy to send out launcher configurations to someone else within your network.

</details>

---

### 2. Creating a Project Video at Inductive University

:::tip Video Link
Watch the video: [Creating a Project Video at Inductive University](https://inductiveuniversity.com/videos/creating-a-project/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will explore the Designer Launcher's ability to create a brand new project in your Ignition Gateway. Here in front of me, I have the Designer Launcher up and running. The first thing I need to do is I need to tell the Launcher which Gateway I want to create a project for. Here I only have one Gateway listed called University. If you have more than one Gateway in your network, you could theoretically have more than one Gateway listed here. So it is important to choose the correct one. I will go ahead and double click on my Gateway. I will go ahead and log in. (keyboard clicking) And now I can see all the available projects in this Gateway. I will create a new one by pressing this button here. And now I can begin to give information to the system about the new project I'm creating.

**[01:05]** [01:05]
                                    First, I'm gonna give it a name. (keyboard clicking) My project. Notice how I can't have any spaces in my project name. This is fully expected. For my project title, I can have it be anything I want, including spaces. You can also assign this project a parent project. This means that our new project will inherit resources from whatever project I configure here. I can also choose to make this project inheritable, which means my new project will inherit resources to other projects. Keep in mind that inheritable projects are not runnable as standalone projects and are only used for inheritance purposes. I can also give my project a user source. This will be the list of users for this project's authentication and security. Similarly, I can also choose what identity provider will be used for authentication and security in this project.

**[02:08]** [02:08]
                                    I can also give my project a default database to use. This is because it is possible to have multiple databases in your Ignition Gateway. So assigning a default database is generally a good idea. My project can also have a default tag provider for similar reasons. I can have as many type providers in my Gateway as I want. So assigning a default type provider to your project is generally a good idea. Now, project templates are also very important. These are project resources that we pre-packaged for you to help you in getting started with your project's development. Some of these pre-packaged resources include navigation mechanisms, example windows, and more. Finally, I can give my project a description, which can be anything I want. Once I am done with my description, all I have to do is press the Create New Project button.

**[03:10]** [03:10]
                                    Now that my project is created, I can go ahead and start the development of the project itself. Just like that, with a few clicks, I can create a brand new project directly from my Designer Launcher.

</details>

---

### 3. The Designer User Interface Video at Inductive University

:::tip Video Link
Watch the video: [The Designer User Interface Video at Inductive University](https://inductiveuniversity.com/videos/the-designer-user-interface/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    The Ignition Designer has a lot going on inside of it. After all it is the doorway into the design and implementation of every ignition project. You can see here in my designer, we have a big central area, which will be the main development area once you have a resource open. Along the left and right hand sides, you have panels to control information. In the upper left hand corner, we have a Project Browser which lists out individual sections available in the designer, such as your scripting resources, perspective resources, transaction groups, vision resources, named queries and reports. Each section can be expanded to expose the available resources. Below that we have a tag browser, which shows all of the different tags we have in the system. The tag browser also gives users the ability to browse OPC resources via the OPC browser, which is here. A property editor down at the very bottom, which will change depending on which vision resources you have selected and will display all the available properties for this resource.

**[01:04]** [01:04]
                                    Over on the right hand side, we have our component pallet, which lists all the different vision components that are available. If I select the perspective session in my project browser, we see that the designer moves around a bit. The vision property editor is now gone and replaced by the perspective property editor, which is now on the right. Also on the right, we can expand the perspective component pallet, which lists all the available perspective components. The central area of the designer will remain being the main perspective design area. Depending on what section of the project browser we have selected, the designer will adapt itself to that section. For instance, if I click on the report section of the project browser, I will be greeted by the report design space. Regardless of what section you have selected, you can modify the look of the designer by moving things around. For example, I can go to my tag browser and simply drag it and resize it whichever way I want. I can also drag it into the right hand side of the designer and pin it there if I wanted to. I can also close pallets like so.

**[02:02]** [02:02]
                                    Now I have a very large design space area to work with. You may have noticed that when I drag a pallet around, it tries to pin itself in places around the designer. As I get close to the edges, it's going to try to pin itself to the side or to the bottom or wherever you're at. If you don't want it to do this, you can hold the control key down on your keyboard, and then as you move it around, it's not going to pin itself anywhere. You can put it exactly where you want it. These panels don't actually have to be inside the designer either. I can move my designer over here, grab my tag browser panel and drag it outside of the designer. Now here you can see if I had multiple different monitors, you could pull all of these different panels out of the screen and place them wherever you'd like. If something happens and you've lost one or closed it, or you want to get it back and you can't remember how, the easiest way is to go up to the menu bar at the very top and go to view, there's a reset panels button. If you click on that, it'll put everything back to the default place. If you want it to pull in just one particular panel or toolbar, you can go into view, in the menu bar and under panels, you can pick out individual ones.

**[03:09]** [03:09]
                                    You can see there are some here like the Pipeline Block Editor, really only makes sense when you're looking at pipelines, but the selection is still available to you. Under project, we can access project properties, which lets us control things like the default database for this project, the default provider for this project, et cetera. We also have access to various scripting editors for gateway session and client event scripts. Our component menu allows you to control the settings associated with a vision component. You can interact with things like component layout, and component level scripts. The alignment and shape menus allow you to control vision components as well. Under the tools manual, we have perhaps my favorite items, the Database Query Browser and the Script Console. The Database Query Browser will allow you to directly query any database your gateway is interacting with directly from the designer. The Script Console will allow you to write and test Python code. It is treated sort of like a scripting playground.

**[04:04]** [04:04]
                                    The tools manual also gives users access to the Image Management menu, Translation Manager and Symbol Factory, among others. The Help menu simply has a link to our Ignition User Manual, when clicking on the Help option. We also have access to the designer's diagnostics, which displays tons of useful metrics related to performance. Under the Menu bar, we have the Main Shaping and Drawing Tools. Those are up along the top edge here and down the right hand side. Alternatively, there is a list of panels available down at the very bottom here in the lower left hand corner. If I select this little button, you can see here is our list, as well as a reset panels button.

</details>

---

### 4. About Project Properties Video at Inductive University

:::tip Video Link
Watch the video: [About Project Properties Video at Inductive University](https://inductiveuniversity.com/videos/about-project-properties-2020-06/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    An ignition project has a lot of properties that can be configured to determine how the project behaves. To access the project properties, you can go up into the Project menu and select Project Properties or click on the Project Properties button at the top right of the project browser. You should get a project properties popup window where you can configure all of these settings. On the left-hand side are all of the different categories that you can go to. Each with its own set of properties. We won't be able to go over all of the properties or categories in this video, but we are going to touch on some of the most important. For more information regarding all of these properties, please see our user manual. We start out in the Project/General section. Some of these properties here may look familiar as they are the same properties that you can setup when you first create your project.

**[01:02]** [01:02]
                                    Things like, the Default Tag Provider, Default Database Connection, as well as the User Source that the project will use. If we go to the Project/Designer section, you'll noticed there's only one property for us to set, but it is very important. The Initial Gateway Comm Mode determines the Gateway Comm Mode that the designer is first set to upon opening. By default this is set to Comm Read-Only. This means that if I wanted to write a value to a tag, I would need to set my designer to be in read-write mode, typically, up in the menu bar here. We can change the Initial Gateway Comm Mode so that tag writing is allowed right from the start. There are then a handful of different categories that have to do with vision. We'll start here in Vision/Design where we have properties that relate to how components are laid out or scaled on the window. In Vision/General we get the ability to change whether users are notified of any saved changes or whether those changes are immediately pushed to the client.

**[02:15]** [02:15]
                                    We can also determine how the client is going to launch in the Vision/Launching section. Finally, the last set of categories all have to do with perspective. And here in Perspective/General we can set things like, the timeout period for a session. We can also go to the Perspective/Tag Drop section to determine which components are created when we drop a tag onto a view. The last thing that I want to mention is that it's important to remember that these are project properties, meaning they are unique to each project. So it is important to configure the project properties to determine how you want that project to behave.

</details>

---

### 5. About Communication Modes Video at Inductive University

:::tip Video Link
Watch the video: [About Communication Modes Video at Inductive University](https://inductiveuniversity.com/videos/about-communication-modes/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to talk about the different communication modes of the designer. The Ignition Designer is a live designer, in that it will allow you to interact with live data, and it even shows you real time values. By default, in order to protect you from accidentally changing anything in the PLC or the database, the designer is set in a read-only mode. Up at the top of the designer, you can see there are three little icons up here, that you can select between, and if you go into the project menu, in the menu bar, you'll see those same three icons. One of them is communications off, one is read-only, and one is read/write. Again, Ignition is going to start in read-only mode, in order to protect you from accidentally changing something, but you can come in here and change it to read/write, if you wanted to go and write to a tag or to the database. Comm off means that it won't even read the data which may help minimize traffic on your network.

**[01:10]** [01:10]
                                    You can also go into the project properties and change what the default mode the designer starts at when it first opens up.

</details>

---

### 6. Using Find and Replace Video at Inductive University

:::tip Video Link
Watch the video: [Using Find and Replace Video at Inductive University](https://inductiveuniversity.com/videos/using-find-and-replace/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at the Find and Replace function. The Ignition Designer has a Find and Replace function that allows you to check through all of the things that are in your project. To use it, we're going to go up to our Edit menu bar item, and then go to Find and Replace. Or you can just press Control + F anywhere in the Designer. Once this opens up, you can see we have a couple of different sections here. Up at the top, we have a space where we can type in our search term, which can include the star symbol, which acts as a wild card, and will match with any characters in that spot on the term. The Target section also allows you to focus your search on specific areas of the project. A Select All option up at the top will select and de-select all of the options, and then I can go from there, selecting or deselecting different areas that I want to target.

**[01:06]** [01:06]
                                    So, as an example, I will search for the word button in my project. You can see we get no results, which is odd because I know I have a button component on a view. If I look closely at my targets, I can see that I am only looking at open views, of which there are none because I haven't opened any of them yet. So, I want to set this to All Views, which will search them whether they are open or not. Once I make that change, you can see that now results come in. You can see there's even a Replace category down at the bottom. So instead of Button, I could rename it to something else if I wanted to. Maybe Cool Button, and you can see how it would change it. I can either replace just this one, or I can replace all of the items that the search matched. Now, I don't actually want to do any replacing right now, but I do want to go and find this particular button in my project.

**[02:04]** [02:04]
                                    So what I can do is double click on the item, and you can see how our project browser in the upper left-hand corner changes and takes me directly to where in the project that item is. And that is how the Find and Replace system works.

</details>

---

### 7. Project Inheritance Video at Inductive University

:::tip Video Link
Watch the video: [Project Inheritance Video at Inductive University](https://inductiveuniversity.com/videos/project-inheritance/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll talk about project inheritance. Project inheritance allows one project to inherit the resources from another. To demonstrate, I have two designers open. One is looking at a project called Project 1. Project 1 has some resources. It has a perspective view. If we go down to the vision module, it has a window, it has a template. It even has a report from the reporting module. So I can have another project inherit those resources. For right now, I'll move Project 1's designer out of the way and we can see that I have Project 2 here in a separate designer session. Project 2 doesn't have any resources. I just created it. So we'll configure it so that Project 2 inherits the resources from Project 1. Now, just to eliminate confusion, I'm going to close Project 2's designer. To enable inheritance, you must go to the gateway under the configure section on the project's page. We can see both of our projects and at least one of these have to be inheritable. To make Project 1 inheritable, we can click the edit button. And for the inheritable property, we need to enable this. So I'll check this property, scroll down, and I'll click save. And we can see that those changes have been applied. So now that I have an inheritable project, let's configure Project 2 so that it inherits from Project 1. We'll hit the edit button again. And I'm not going to set the inheritable property here although I could. It is entirely possible to chain multiple inheritable projects. We'll keep it simple for now. I simply need to set the parent project property. So if we click on this drop-down here, we see Project 1. That's because Project 1 is inheritable. If it wasn't inheritable, we wouldn't see it in this list. So I'll select Project 1, we'll scroll down here, save our project, and you can see we're ready to go. The parent project has been set for Project 2. So let's head back to our designer. I don't need to make any more changes to Project 1 here so we'll go to File, Open, and I don't need to save any changes here. We'll switch over to Project 2, which is now inheriting from Project 1. I'll open the project. So now we're in Project 2 here. And you can see some of the resources are grayed out including under the Perspective area here. Grayed out resources means that the resource has been inherited. All of my views in this project are inherited, so the entire Views folder is grayed out. Inherited resources can only be edited from their original project. So if I try to right click on my view here, it doesn't give me any sort of open options. Instead, I can override it. So if I override the resource, it recreates that resource inside of this new project. So because I'm overriding, changes made to the original view in Project 1 won't propagate down to this view, but I do have all of my original configuration so I could simply start adding new components here. When you have an inherited resource like this, if you try to delete it, so if I right click, go to Delete and then say yes I want to delete the node, it doesn't delete the resource in Project 1, rather it just deletes the override we created in Project 2. You can see that we're still inheriting my view from Project 1 in the project browser. Now you can still use these resources so for example, if I were to right click on the Views folder, create a brand new view, and if we were to say, place an embedded view component down or some component or object that references one of my inherited resources, so we could collapse everything, go down to embedding, grab an embedded view, and with this embedded view, if we change the path to my view which is being inherited, click Okay, and you can see that it does have the original configuration. So now we're treating the resources in Project 1 as a base library of resources. If I want to make changes to my view, I can open Project 1 in the designer, make changes, and any other projects that are inheriting those resources will see the updates. Now something really important to note here, I'm going to head back to my gateway and if I scroll up here, head back to that Home, and if I take a look at my perspective projects here, you'll notice that I can't launch Project 1 anymore. So when you have a project that's flagged as inheritable, you can't launch that as a stand-alone project anymore. So in that case, if you have an inheritable project, you'll want another project to inherit from it. This applies to the visualization systems as well as other resources like my report.

</details>

---

### 8. Production and Development Server Video at Inductive University

:::tip Video Link
Watch the video: [Production and Development Server Video at Inductive University](https://inductiveuniversity.com/videos/production-and-development-server/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Once you complete your ignition project and have in production, it is a good idea to have a separate ignition development server for making future changes. That way, the changes won't affect the plant floor and can be completely tested before rolling out to the production environment. It is also nice to have a development server to perform any ignition upgrades on. That way, any problems can be addressed before upgrading the production environment. There are a few things to take into consideration when having a production and development server. First, the development server should have it's own PLCs and SQL databases as depicted here. The production server will go against the live PLCs and live databases. The development server will go against it's own development PLCs and development databases. You don't want the development server to point directly to the live PLCs since it's possible to accidentally ride values down the PLC that could turn on or off machines. You also don't want to point to the production database either, to avoid any duplication of data. Secondly, the development ignition server doesn't have to be licensed. You can run the ignition server in the two hour trial mode. Despite being in the trial mode, everything you configure can be backed up and moved to the production server without any problem. Third, you should never move a daily backup from the development server to the production server. The development server will be pointing to the development PLCs and the development databases. So if you move the gateway backup, those connections will be saved, and restored on the production server which is bad since the production server should be pointing to the live PLCs and live databases. Instead, you should back up individual projects and tag separately, and move them to the production server. Ignitions projects use various tags and database connections but only by name so the development server and production server will have the same PLC names and database names but behind the scenes they will point to different places such as different IP addresses. You can't just back up and restore the ignition project though. The project contains all the windows and templates but it does not contain any tags or settings you configure in the ignition gateway. You have to back up tags separately and move them to the production server and you have to keep track of any changes made to these settings on the ignition gateway and perform the same changes on the production server. So there's a little bit to manage, when you have a production environment and a development environment. But in the long run, you'll save a lot of time and headache when new development changes or upgrades to ignition need to be done.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
