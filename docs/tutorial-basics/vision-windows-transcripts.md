---
sidebar_position: 11
---

# Vision Windows - Video Transcripts

This page contains transcripts from the vision-windows video course.

## Overview

These transcripts are automatically generated from the [vision-windows Course](https://inductiveuniversity.com/courses/ignition/vision-windows/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 2:49:18 PM
Source URL: https://inductiveuniversity.com/courses/ignition/vision-windows/8.1
:::

## Video Transcripts

### 1. Window Types Video at Inductive University

:::tip Video Link
Watch the video: [Window Types Video at Inductive University](https://inductiveuniversity.com/videos/window-types/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we will learn about the Different Types of Vision Windows. There are three different types of Windows in Vision, Main windows, Docked windows, and Popup windows. You can create a new window of any type by right clicking on the Window section in your Project Browser, and then, selecting the type of window, you want to create. I'm going to create all three here right now before I discuss the differences. I'll create a Main window, I'll create a Popup window, and I'll create a Docked window. When you create a Docked window, it's going to ask you for a docking position, North, South, East, or West, I'm just going to choose North for now and we will get into the differences a little bit later. Each type of window is actually just a difference in how their properties are configured.

**[01:04]** [01:04]
                                    And when creating a specific type of window, the properties are simply set a specific way to begin with. Main windows are defined as being a floating window that is set to Start Maximized and does not display a title bar or a border. These Windows take up all the available space on the screen, minus any space being used by Docked windows. We can see the appearance and behavior properties are set in such a way that it defines a Main window. Popup windows are defined as being floating windows that are not set to Start Maximized. You can also take a look at the Layer Property for Popup windows. Most often, you will want to set that to something higher than zero, while all Main windows will be on layer zero. This will keep the Popup on top of the Main windows at all times, and prevent it from being hidden behind a Main window, if focuses lost on the Popup. The last thing you want is a bunch of open Popup windows that the user may be unaware of, possibly bogging down your project.

**[02:10]** [02:10]
                                    The last type of window is the Docked window. Docked windows have the dock position set to anything but floating. And you can see that there are several different options here as we saw, when we created the windows, North, South, East, and West. When you dock a window, you essentially stick it to the side of the screen and no other windows are allowed to overlap it. Most often, these windows will be long and skinny and use to make certain information always available to the user, no matter what other Main window they may have open in the project. They are also handy for implementing different navigation strategies, which we'll get to in a later video. Finally, it should be noted that since the type of window is really just determined by how its properties are configured, you can change the window type simply by changing its properties to be that of a different window type.

**[03:02]** [03:02]
                                    I can easily turn my Main window here into a Docked window by setting the dock position to North. You will notice that when I do that, the Start Maximized Property also gets set to False since the maximized Docked window really wouldn't make sense. I'd also probably want to go back and readjust this window to a more appropriate size for a Docked window and change some of the other properties to match what I would expect in a Docked window.

</details>

---

### 2. Anatomy of a Window Video at Inductive University

:::tip Video Link
Watch the video: [Anatomy of a Window Video at Inductive University](https://inductiveuniversity.com/videos/anatomy-of-a-window/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we will discuss the basic parts of a Vision Window. When creating something in Vision, it is merely a collection of Vision Windows coupled with a navigation scheme, by which you must move from Window to Window. When you first create a Window, it's given a name which must be a unique name among the Windows residing in the same folder. You can create folders to organize your Windows and it's actually strongly recommended to spend some time thinking about implanting the folder hierarchy for your Windows. Planning your folder structure ahead of time will make your life a lot easier as your project grows and starts consisting of more and more Windows. Windows are identified by their full path, not just their name. The full path of a Window starts with a root folder. Then each sub folder you must drill into to reach your Window and finally ends with the Window name.

**[01:03]** [01:03]
                                    An example of this would be here, my Test Window. It starts with the root folder, which would be Vision Windows. Main Windows is the next folder I have to drill into and my Test Window resides within. So my full path to my Window here would be Vision Windows, slash Main Windows, slash Test Window. This is an important thing to remember because once you start setting up your own custom navigation schemes, if you decide to reorganize your Windows afterwards, all your references to your Windows will no longer be valid and you'll have to go back and re-reference where necessary. Now, if we're creating a Window here by right clicking and choosing Main Window, you'll see that this is automatically created with one component called Root Container. Every Window you create has a Root Container, and this cannot be deleted like other components you add to your Window. You can add a nest, other container components into the Root Container, but the Root Container is always the base container on your Window.

**[02:09]** [02:09]
                                    Finally, let's examine the title bar and border properties. All of your Windows, no matter what type will have these properties. However, it doesn't always make sense to show a title bar on your Windows. My Test Window, if we go back there was created as a Main Window. Meaning it's supposed to be maximized and full screen. So you can see that by default, the border and title bar display policy had been set to Win not maximized. This means when the Window is maximized and acting like a Main Window, it shouldn't have a title bar or border. Many times, you'll want your pop-up Windows to show a border and title bar. With these settings, since a pop-up is maximized, you would get a title bar and a border on your Window. In the next videos, we will go into more detail on the different parts of a Vision Window.

</details>

---

### 3. Window Properties Video at Inductive University

:::tip Video Link
Watch the video: [Window Properties Video at Inductive University](https://inductiveuniversity.com/videos/window-properties/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we will take an in-depth look at the properties of a Window. Just like components, Windows have properties that can change the way the Window looks and the way it behaves. We can view these properties in the designer by selecting the Window object in the project browser. It's important to note that if you click on the Window in the design space, or even in the background, you're going to select the root container that's inside the Window. So you must select it from the project browser. Down in the property editor, you'll see all the properties for the Window. Under behavior, we have properties that control if the Window's closable, maximizable, resizable and whether or not we want the Window to start maximized. So here in my client, I have the pop-up Window open right now, which is the Window that I'm looking at in the designer. Currently, closable, maximizable, and resizable are all checked.

**[01:06]** [01:06]
                                    And you can see that right now I can close it. I can maximize it and minimize it. And I can also resize it here in the client. If I go back and uncheck these properties in the designer and save these changes, you can see that now I don't have the closable nor maximizable buttons and I can't resize the Window anymore. Going down the list of properties, we have a title property, which is the title we see at the top of the Window if the title bar is showing. Then there's the border and title bar display policies. The top of the Window, which shows the title is the title bar and the border goes around the whole Window. Right now, both of those are set to always show in the client. But I can also set these to never show or only show when the Window is not maximized.

**[02:06]** [02:06]
                                    Let's go ahead and set these to never and never for both the title bar and the border. And we'll save my changes. Now you'll see that the pop-up Window looks like it has no border and no title bar at the top. If you do show the title bar, there's properties for the height of the title bar, as well as the font, if you want the font to be bigger or smaller. Down below under layout, we have the dock position. This is where you can set the Window to be one of the various types. You can make it a docked Window docking it to the west, south east, or north sides, or you can make it floating, which allows a Window to float around in the middle and is used for pop-up Windows and main Windows. There's some other properties for the location and size of the Window, which you can actually change by making the bigger or smaller in the designer. At the very bottom, we have a layer property and a dock index.

**[03:06]** [03:06]
                                    The layer property is mainly used for pop-up Windows because it determines the Z order or layer of the Window. The higher the number, the more on top that Window is going to be. If you have multiple Windows with the same layer, then the Window in focus will be on top. The dock index is if multiple Windows are docked to the same edge. So if there are two Windows that are docked west, then I can specify which one's going to be first and closest to the edge and which one's going to be second. Each of these properties play a part in determining how envision Window looks and behaves.

</details>

---

### 4. Docked Windows – Axis Precedence Video at Inductive University

:::tip Video Link
Watch the video: [Docked Windows – Axis Precedence Video at Inductive University](https://inductiveuniversity.com/videos/docked-windows-order-precedence/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will learn about the axis precedence of docked windows. When you add a docked window to your project, it'll dock to one of the sides of the client. When adding multiple docked windows, certain windows will take precedence over the corners of the client. If we take a look at my project, I have four docked windows labeled north, east, south, and west, and then a main window that takes up the remaining space in the client. Right now, the east and west windows are taking precedence over the corners of the client, so the blue and red go all the way to the top and the bottom of the client. Meanwhile, the bounds of the north and south windows are within the east and west windows. The windows that take precedence over the corners are actually controlled by a property. So I'll switch over to the designer to show it. Accessing this property can be done by opening the project properties and then finding user interface in the Vision section. And then towards the bottom here is the axis precedence property. Right now, it's set to east/west like we saw in the client, but if I click the dropdown, I'll change it to North/South and then hit okay and save my project.

**[01:07]** [01:07]
                                    Then I'll switch back to my client and update the project. And now the north and south windows take precedence over the corners while the east and west windows are contained within their bounds.

</details>

---

### 5. Opening Windows on Startup Video at Inductive University

:::tip Video Link
Watch the video: [Opening Windows on Startup Video at Inductive University](https://inductiveuniversity.com/videos/opening-windows-on-startup/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at how we can open Vision windows on startup. When building an Ignition project using Vision, you can have quite a few windows. While there is often some sort of navigation scheme that allows users to change what windows are being displayed, we do need to decide on which windows will be opened first when the user logs in. There are two main ways to do this. A built-in method, which allows you to directly pick windows to open on startup, but it doesn't offer any flexibility and will open the same windows every time. Or by using some simple scripting, which can be a little more difficult to set up, but can be more flexible in which windows open when the user logs in. You can see here in my project, I have a handful of windows that are already created. To select which windows to open on startup using the built-in method, I simply need to right click on the window and select Open on Startup.

**[01:05]** [01:05]
                                    I can do this for as many windows as I want. So in addition to this main window one, I will also set the navigation window to open on startup. I will save and then open my client. Now, regardless of who I log in with, we can see that the navigation window, as well as main window one were both opened initially. Now to have the windows open to be dynamic based on some condition, we will need to use a script instead. I will close my client and go back to the designer. The first thing I want to do is remove the Open on Startup options from my main window one and navigation window. This is so the built-in system doesn't interfere with my script. Once I have done that, I want to go into my client event scripts, where I will find the option to add a startup script. This script runs when the client first starts, which is when the user logs in. Here, I will paste in a simple script.

**[02:05]** [02:05]
                                    You can see, I am grabbing the username of the logged in user and using that in my comparison. The operator user will have the navigation window and main window one open initially, while everyone else will have the navigation window and main window two open initially. I will again save my project and open my client. I will log in as the admin user, which is not my operator user. And as you can see, main window two and the navigation window were what was opened initially. While I am choosing which windows to open based on the logged in user, you can decide which windows to open using whatever information you like, such as the roles of the user, where they are logging in from, or even what time of day it is.

</details>

---

### 6. Navigation Strategies Video at Inductive University

:::tip Video Link
Watch the video: [Navigation Strategies Video at Inductive University](https://inductiveuniversity.com/videos/navigation-strategies/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In Vision, there are different types of navigation strategies that can be implemented. Despite their differences they all share the same idea. First, you want to pick which windows will open on start-up. Then from those windows you can navigate to any other window or windows you have designed as part of your Vision project. How you navigate to other windows in your project it's up to the navigation strategy that you choose. You can use tabs to navigate around your project. You can use a tree view. You can have a back and forward button, and a lot more. All you are doing is simply opening and closing a set of windows from your Vision client. Let's take a look at some examples. Here you can see your typical navigation strategy on clients startup. I am opening a west docked window along with a main window. The west docked window will remain always open.

**[01:03]** [01:03]
                                    The currently open main window will vary but there were only ever be one main window open at any given time. I am using tabs from the west docked window to switch which main window is currently open. That is every time I change my selection in these tabs a different main window will be navigated too here on the right. Because I can only have one main window open at once the navigation tabs will close and open main windows as needed. If I needed to I can also use independent buttons to trigger the opening of things like pop-up windows like so. As you can see I am using tabs to navigate around the various main windows in my Vision project. And buttons on this screens to open things like pop-up windows. I can also use tree components to control navigation. Here on this next Vision client I have opened I have a tree component on my west docked window where I can double click on individual notes and navigate to different windows in my application. I can also have back and forward buttons like in this third Vision application.

**[02:09]** [02:09]
                                    The top buttons on each side basically navigate between different Vision windows. Again, at any given time we are only opening one main screen and we're replacing the currently open screen with a different screen using the swap operation. For many of those windows again, I can also open up pop-up windows like so. The navigation strategy that you choose is dependent on how you want people to navigate within your application. What windows you want open is entirely up to you and your implementation. In future lessons we will explore some of these navigation strategies and take a deeper dive into how they work.

</details>

---

### 7. Swapping vs. Opening Video at Inductive University

:::tip Video Link
Watch the video: [Swapping vs. Opening Video at Inductive University](https://inductiveuniversity.com/videos/swapping-vs-opening/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    There are two primary window navigation operations - swapping and opening. Swapping between windows involves the closing of the current window and the opening of the window you wish to swap to. We can see this swapping window behavior here on the left. As I click on a different button on my west docked window the currently open main window on the right closes and my selected window denoted by each button, opens up to replace it. Every time I click on a different navigation button I am swapping the currently open main window on my vision client. Because of this, if I click on the windows menu up above, you will note that there are only two open windows at any given time - my main window and my navigation window. Opening a window simply opens a window and does not close or swap a window. A perfect example of this is pop-up windows. If I press this button, a pop-up window opens without any other window being closed.

**[01:05]** [01:05]
                                    In fact, if I press this button a few more times you will note that for every click a new instance of my pop-up window will open. Typically you want to use the open operation for pop-up screens as well as docked windows. Because you can only see one of your main windows screens at a time, you want to use the swap operation for main screens like our main window here. If I have two main windows open I will not be able to use one of them because the other would simply be stacked on top. To show an example of this behavior, let's head back to our designer where I have my west docked navigation window open. I will double click on my button here to bring up its scripting editor. Instead of having this button swap windows I will configure it to open a window instead. I will do the same with the next button and configure it to open a window. And I will do the same with my last button.

**[02:05]** [02:05]
                                    I will save my changes and head back to my vision client. Clicking each of my navigation buttons, it will appear that only one main window is open at a time. But going back to our windows menu above, you will note that there is in fact more than one main window open. The rest are just hiding in the background. Having multiple main windows open at once could mean that any bindings, scripts, or other functionality associated with these hidden windows could be unwantedly running in the background, increasing the resource overhead of your application. For this reason, when working with main windows it is recommended to use the swap window operation.

</details>

---

### 8. Tab Navigation Video at Inductive University

:::tip Video Link
Watch the video: [Tab Navigation Video at Inductive University](https://inductiveuniversity.com/videos/navigation-tab-strip/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In an Ignition Vision application, it is common to use tabs as a navigation mechanism. Here in my Vision client, I have two windows that opened on startup. I have a north dock window with a navigation tab strip and a main window. I am not able to close this navigation window because it will be my application's main navigation mechanism. Clicking and selecting different tabs from my doc window will essentially swap between the different windows and my project, ensuring that only one main window is opened at any given time. Let's walk down to our designer and see how this works. Here I have the north dock navigation window open, which as you can see from the icon on the right in the project browser, is configured to open on startup, just like my overview window up here. A window can be configured to open on startup by simply right-clicking on it from the project browser and selecting the Open On Startup option.

**[01:09]** [01:09]
                                    Remember to only ever have one single main window configured to open on startup. Now, the tab strip component has a built-in property called Navigation Mode that allows it to swap to any vision window in your project. This is exactly what we look for to implement a typical navigation strategy. To access the configuration behind the tab strip's navigation mode, we have to head to its customizer. With the tab strip selected, I will right-click, hit the Customizers menu, and get to the Tab Strip Customizer. From this customizer, I can select each individual tab, and using the window name dropdown list, I can configure this tab to swap to any vision window in my project. I can also configure the text that appears on the tab by using the Display Name setting here. I can also see Appearance settings from when the tab is selected or unselected, along with some text settings on the bottom left.

**[02:11]** [02:11]
                                    With one of my existing tabs selected, pressing the Add Tab button will add a new tab that follows the same configuration as my previously selected tab. This will ensure that all of my newly added tabs will have the same shape and configuration. With my new tab added, I will configure its display name to be Main Window. I will then select my main window from my Windows Name dropdown list. Once I do this, I will press Okay and save my changes. Heading back to the Vision Client, I can now use this tab to navigate to my main window, like so. Let's head back to our designer. It is also possible to implement a two-tier navigation mechanism that involves two sets of tabs to navigate around various areas in your project.

**[03:06]** [03:06]
                                    In fact, ignition has a built-in template project called Vision Two-Tier Tab Nav that you can use. Here in my project browser, I have the same doc navigation window that our two-tier tab nav project template uses. There are essentially two tab strips in this window in charge of navigation. The visibility of these two navigation strips is controlled by a third tab strip named First-Tier Tabs. This first-tier tab strip is here showing two options, HMI screens, and Administration. And as you can see in its navigation mode property, it is disabled. Now, one of the two tab strips in charge of navigation can be seen here named Administration Tabs. You'll notice this visibility property has an expression binding that will only allow this tab strip to be visible when the first-tier tab strip selected tab equals administration.

**[04:04]** [04:04]
                                    If I put my designer in preview mode and select the HMI screens tab in the first-tier tab strip, when I get out of preview mode, you will notice that a different tab strip appears right below named HMI Screen Tabs. This tab strip's visibility property is also controlled by the first-tier tab strip using an expression binding, and it will only allow this tab strip to be visible when the first-tier tab strip selected tab equals HMI screens. Now, the HMI screen and administration tab strips both have their navigation modes enabled and are configured to navigate to a different set of windows. Which tab strip shows up for the user is again determined by the first-tier tab strip. To test this, let's first disable the regular navigation window from opening on startup by right-clicking on it, like so. I can then right-click on my navigation two-tier window and configure it to open on startup.

**[05:05]** [05:05]
                                    I will now save my changes. I will then use the F10 shortcut key to launch a vision client very quickly and test this functionality. Once I log into my vision client, I will be able to control which navigation tab strip is visible in my window, and I will be able to navigate to windows configured on both tab strips individually.

</details>

---

### 9. Tree View Video at Inductive University

:::tip Video Link
Watch the video: [Tree View Video at Inductive University](https://inductiveuniversity.com/videos/navigation-tree-view/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In our previous lesson, we showed how it is possible to use a tabstrip component for navigation as part of your Vision project. It is also possible to use a Tree component for this purpose. In fact, there is a built-in project template called Vision Tree Nav that you can use to take advantage of this functionality. We are currently seeing the Vision client for this very project template opened in front of us. Here on the west docked navigation window, you can see the Tree component used to navigate throughout all the windows in this Vision project. If I go to the Tree component and double-click on the alarms node, the currently open main window in my Vision client changes to my alarms window. Similarly, I can double-click on any of my nodes here and my Vision client will navigate to the window corresponding to that node in my tree. Let's head over to our designer to see how this works.

**[01:05]** [01:05]
                                    Here I have the west docked navigation window open for us to see. This Tree component in my navigation window has a dataset type property named Items that it uses to populate the tree with all the nodes we see in it. If I click on this magnifying glass icon next to my items property, I will be able to see the items dataset. This dataset contains various columns which allow you to configure the look of the nodes in your Tree component. The columns we will focus on today are the windowPath and text columns. The path column tells the Tree component where each individual node should be located in the tree hierarchy. As you can see, my settings node is in the Administration/More section. This text column simply tells the node what text it should show. Now the windowPath column is special in the sense that it was added as a part of the project template I spoke about earlier.

**[02:05]** [02:05]
                                    If I dragged in a brand new Tree component from my component palette, you will find that the windowPath column is missing from this items dataset. This windowPath column contains the literal path to my windows, and it's used in conjunction with a mouse clicked event script to trigger the swap window action that takes place whenever I double-click on a tree node. The Tree component does have its own customizer which allows you to gracefully add nodes to the tree. If I close my dataset editor and right-click on my tree, I can head over to Customizers, Tree View Customizer, and here I can add as many nodes as I see fit. The problem is that the windowPath column is missing from this customizer. Remember, this column was added as part of our project template, so using this customizer could potentially override our items dataset and delete the windowPath column which is needed for the mouse click navigation script to work.

**[03:03]** [03:03]
                                    Let's take a look at that script now. I will close the customizer and right-click on my Tree component once more. I will select the scripting menu to bring up the scripting editor, where I will find the pre-configured mouse click script that is a part of our project template. Let's walk ourselves through this code really fast. First, we see an if condition checking the click count associated with my event. This basically ensures that this code will only fire when I double-click on a specific node. Next, in line three, I am fetching the row index from my selected node. This row index is used to know which row in my items dataset property I am double-clicking on. Next, I fetched the actual dataset in my items property. Event.source is a reference to the component that is invoking this script, which is our tree in this case. The .data refers to the items property's scripting name, which is data, and which we can confirm by simply hovering our mouse over the items property to find this property scripting name.

**[04:06]** [04:06]
                                    Next, I have another if condition that checks if the row index of my selected node is not equal to -1. A -1 row index will mean that I do not have a node in my Tree component selected, or that I am not selecting a leaf node from my tree. Once I verify that I am double-clicking on my Tree component and that a leaf node is being selected, I get the windowPath value for my items dataset that corresponds to the row I clicked on. I get the windowPath value from my items dataset that corresponds to the row I clicked on. Once I have this windowPath, I simply call the swapTo navigation system function to swap to the specific window. Again, this script relies on the existence of the windowPath column in my items dataset. Using a brand new Tree component will not include this script or this windowPath column. So, if I wanted to add a new window to my tree node, all I have to do is add an entry to my tree items dataset property, so let's do that.

**[05:11]** [05:11]
                                    I'll select my tree. And once again, I'll click on the magnifying glass icon next to my items property. I'll make the columns a bit bigger so we can see what we're doing, and I will click on the add row button on the upper right-hand corner of the dataset editor to add a new row. I want this new node to navigate to a main window named Main Window. So I will double-click on this cell and set the text column value to Main Window. I want this main window to be in the same HMI screens folder in my tree, so I will set the path column value to HMI Screens. Finally, I need to set the windowPath value to the actual path of my main window, as it appears in my project browser, like so. Of course you can configure an icon, background, foreground, et cetera, if you want, but we will keep it simple for this example and leave it as is.

**[06:04]** [06:04]
                                    I will save my changes and head back to my Vision client. Here I will find my newly added node, and double-clicking on it should swap the window currently visible in my Vision client to my new main window as we configured it in the designer.

</details>

---

### 10. Drill Down Video at Inductive University

:::tip Video Link
Watch the video: [Drill Down Video at Inductive University](https://inductiveuniversity.com/videos/navigation-drill-down/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Another popular navigation strategy in Ignition is to drill into various parts of a vision application using a map. Currently, I have a vision client open where I can see a map of the state of California. This map illustrates two different facilities, one facility in Northern California, and one in Southern California. These two facilities are denoted by these transparent rectangles right here clicking on the facility one rectangle will swap the currently open main window through my facility one window which shows me tack history for this specific facility you will notice a back button on the upper right-hand corner and clicking on that will bring me back to my map window. I can then click on the Facility 2 rectangle and that will be taken to my Facility 2 tech history window where I will find a similar back button on the upper right-hand corner.

**[01:03]** [01:03]
                                    Let's head over to our designer and explore how this navigation mechanism works. Here I have my overview window which contains a map of the state of California in the form of a scale vector graphic, or SVG object. You can learn more about SVGs and ignition in our SVGs lesson. Now our transparent rectangle objects are nothing but groups made up of rectangle shapes and a label component. The group itself has a navigation script configured on it so that anytime I click on the group a slopped navigation operation takes place which takes me to my Facility 1 main window From the project browser I will right click on my group object and head over to his scripting menu. Here. I will see the mouse click the event handler script that will swap to my Facility 1 main window. I will find a very similar script on my Facility 2 rectangle with the exception that is swaps to Facility 2 main window.

**[02:05]** [02:05]
                                    Now each Facility main window has a back button that allows me to go back to my overview window. So let's take a look at that now I will hit over to my Facility 1 window and on the upper right-hand corner, I will find the back button. I would right click on it. And I will head to its scripting menu where we will find an additional swap operation. That takes me back to my overview window. Using this navigation mechanism. I can configure as many Facilities as I want on my map and navigate to each Facility individually.

</details>

---

### 11. Back and Forward Buttons Video at Inductive University

:::tip Video Link
Watch the video: [Back and Forward Buttons Video at Inductive University](https://inductiveuniversity.com/videos/navigation-back-and-forward-buttons/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will explore a vision navigation strategy, that uses forward and backward buttons on your main screens, to navigate between the different windows in your vision application. As you can see, I do not have a dock window that contains tabs, tree views or buttons to navigate around like we saw in previous lessons. All I have is a button on the upper right-hand corner, that if I press, I will be taken to a different main window, Main Window 2 in this case. In Main Window 2, we see a similar button in each upper corner that allows me to further navigate to other windows in my project, essentially going forward and backward, throughout all the windows in my vision project. Let's dive into our designer and let's take a look at how this works. Here in the designer, I have my Main Window 1 currently open. The navigation mechanism, is handled by buttons with navigation scripts configured on them.

**[01:07]** [01:07]
                                    To access these navigation scripts, I will right click on my button and hit to its scripting menu. Once the scripting editor opens, I will see this button's navigation action configuration. As we can see, this button is configured to swap to Main Window 2. We use the swap navigation operation to ensure that there will always only be one main window open, at any given time. If I close out of here, and head over to my Main Window 2, which I also have open, you will find similar buttons on each upper corner. Right clicking on any of these buttons and going to their scripting menu, you will find a very similar navigation action script, that swaps to a different main window. Using this configuration, you can set up navigation buttons on each of your windows, to allow you to swap between all of your projects screens.

</details>

---

### 12. Open Popup Window Video at Inductive University

:::tip Video Link
Watch the video: [Open Popup Window Video at Inductive University](https://inductiveuniversity.com/videos/open-popup-window/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll go over pop-up Windows including their  properties and how to open them.  To get started, I'll create a pop-up window. Within the vision section of my designer I can right click Windows  and click pop-up window. The new window prompt will open and I can name my new window. I'm gonna  call it My Popup and click Create Window. I don't want it to be empty. So I'm going to add a label to it. I'll give it the text: This is a pop-up window!! Now that I have a pop-up window, let's go over opening it. I have a main window in my project that automatically opens  on startup. I want to place a button on this window that opens my  new pop-up. Now that I have a button on my main window I can double click it to open  the component scripting window.

**[01:05]** [01:05]
                                    I'll choose the actionPerformed Event Handler and on  the Navigation tab, I'll click the Open/Swap radial button. Want the pop-up to open and center and I'll  choose My Popup from the drop-down menu. Once I'm done here, I'll click ok and I can test my new window by saving and launching a client. If I click the Button, you can see that the Popup window opens. I can click and drag to move it around,  I can resize it and I can close it. I'll head back to the designer and look at some of the ways I can configure my pop-up. Back in the designer, I'll select the pop-up window in the  Project Browser. A pop-up window is just a window with certain settings. Specifically a pop-up window was a floating window that is  set to not start maximized.

**[02:05]** [02:05]
                                    Let's take a look at the Property Editor to see what can be configured  on my pop-up window. The Behavior properties allow me to do things like make it closable  or resizable. The Appearance properties are where I  can configure a title for my pop-up window. For example, I can change the title to something like 'Super Cool  Popup Window.' Now, if I save and head back to the client, you can see the title here. Finally, the Layout properties allow me to change things like  the location and size of the pop-up window. If you want to use the location property for your pop-up window, be sure  to uncheck the center option and the Navigation action as  this will override the location property. If I go back to the client, open my pop-up  window, and click outside of its bounds, You'll see that it remains in front of the main window.

**[03:04]** [03:04]
                                    This is controlled by the Layer property. Windows with higher layer numbers will always be on  top of windows with the lower layer numbers. The main window is set to layer 0 so if  I change the pop-up window to layer 0, I can save, open the pop-up window, click the main window, and the pop-up will disappear. If I click Windows, I can see that it's still open. But it has lost focus to another window within the same layer,  so it becomes hidden. To bring it back, I can just click it from the menu here. There is another property of note that will change the behavior  of pop-up windows. If I click and drag the pop-up to the edge of my client window, you'll see that the client window gets larger. This is controlled by a setting in the project properties.

**[04:04]** [04:04]
                                    Within the designer, I can click Project,  Project Properties, and I can click User Interface within the vision properties. If I uncheck the Infinite Desktop property and save, I can go back to the client and when I click and drag the window  to the edge of the screen, the behavior changes and pop-up is now restricted from moving any further.

</details>

---

### 13. Parameterized Popup Window Video at Inductive University

:::tip Video Link
Watch the video: [Parameterized Popup Window Video at Inductive University](https://inductiveuniversity.com/videos/parameterized-popup-window/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll go over passing parameters to a pop-up window. Parameterize pop-up windows allow us to create a single window but change  its behavior or appearance based on the supplied parameters when  it's opened. I have a pop-up window on my project that I want to pass a value to. The first thing I'll need to do is create a custom property on the root container of  my pop-up. In order to do this, I can right click the root container, go to Customizers, and click Custom Properties I'll click the plus icon. And that adds a new custom property. I'll give it the name body and change it to a String type. Once you have a custom property on your root container, you can  see it in the Property Editor here. If you're going to be passing value to this property, it's important that you don't bind it  to anything. We want it to get its values from the opening action and don't want  anything else to override it. I want to display this property in my pop-up. So I'll place  a label in the window.

**[01:11]** [01:11]
                                    Now we'll create a property binding on the text value, and bind it to my custom property. Now I want to be able to open my pop-up window. I'll head over to my Main Window and add a Button components to do this. I can open up the Component Scripting window, and I'll use an Open/Swap navigation action. Select my pop-up from the window drop down, and then I can click this checkbox here to be able to pass parameters to  the window. I'll click the plus icon. And if I click the parameter name? You'll notice that the custom properties auto-populated in the dropdown. I'll go ahead and select body. Now, I could pass a dynamic parameter here and bind  something here.

**[02:04]** [02:04]
                                    But instead, I'm going to pass a hard-coded value. I'll pass it. Hello world! And then I'll hit OK. Now I want to make another button that passes a different parameter. I can duplicate this Button. And open up its Component Scripting window. I'll change it to Something else! At this point I should have everything I need to open my window and pass different parameters  to it. So I'll save and test it in the client. You'll notice that if I click the top Button here, it opens my pop-up and you can see the Hello World! text. If I click the other Button, It opens that same pop-up, but you see Something else! As you can see it's really easy to pass values to  the window and have Its behavior or appearance change based on those values.

</details>

---

### 14. Popup Window - Multiple Instances Video at Inductive University

:::tip Video Link
Watch the video: [Popup Window - Multiple Instances Video at Inductive University](https://inductiveuniversity.com/videos/popup-window---multiple-instances/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll go over opening multiple instances of  a pop-up window. By default, the client will only open one instance or  copy of a pop-up window. However, this can be changed. I have four tanks in my client and if I click one, it opens a pop-up with additional details. If I look at the Windows menu, I can see that there are two windows open: Main Window and Popup. If I click another tank, it opens a new pop-up. But there's still only two windows open. When I click a new tank, it passes the new parameters to this pop-up instance  here. This happens by default to limit the number  of open windows in the client. However, we can change this behavior and open multiple instances of the  same pop-up window. Let's head over to the designer to see how to do this. I'm looking at my tank template right now and this template has a script on it  that's opening the pop-up window. So let's look at that script.

**[01:05]** [01:05]
                                    We can see that the script is opening my pop-up window  and passing a parameter to it. In order to have this open an additional instance, all we need to do is  click this checkbox here. This rewrites the script that controls this action so that  when there's a pop-up already open, it opens another instance. I'll check this box and click ok. Now I'll save my project and go back to the client to test it out. If I start clicking my tanks, you'll see that additional pop-up instances start opening. If I look at the windows, you can see each instance of the  pop-up listed here and I can do this as many times as I'd like.

</details>

---

### 15. Parameterized Popup Window and UDTs Video at Inductive University

:::tip Video Link
Watch the video: [Parameterized Popup Window and UDTs Video at Inductive University](https://inductiveuniversity.com/videos/parameterized-popup-window-and-udts/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how it's possible to pass an entire  UDT instance as a parameter to a pop-up window. You can see in my designer that I have a UDT definition called  Tank. I also have a pop-up window called Tank Popup. and I'll show you how I'm passing my UDT to this pop-up. If I right click the root container of my pop-up, and go to Custom Properties, you can see I have a custom property called Tank and the  data type for this property is also called tank. if I click the drop-down for this type You can see that I have the option of all of the standard property types  as well as user-defined types, which is  what my tank property is. My pop-up window is ready to accept a UDT parameter. If I move the mouse over to the Property Editor for the Root Container,  we can see the benefit of doing this. I'll click the magnifying class on the tank property and it will show all the properties or tags that are available to me  within my tank UDT.

**[01:04]** [01:04]
                                    An example of this in action would be my multi-state button on the pop-up as  you can see the properties or tags of the tank UDT  are now available to bind to and I've  set up a bi-directional binding on the HOA tag. I'm trying to pass the tank UDT to my pop-up window  so I'll go into my Tank template which is opening my pop-up. I'll open up the Custom Properties of the template and you'll notice that it has this same exact tank type property. I'll open up the Scripting window and you can see that it's opening my pop-up and it's passing the tank  UDT as a parameter. If I go into the binding you can see the tank property here. I'll head over to the client to test this out. Each of these tanks is an instantiation of  the tank template we just looked at. The components needs templates are bound to tags within  the UDT's assigned to them.

**[02:05]** [02:05]
                                    So when I click one of these templates, it fires the script to  open the pop up window and passes that UDT as a parameter. That assigns the same UDT instance to the tank custom property on  the root container of the pop-up. Then each of these components in the pop-up are bound tags  within that UDT, which allows me to access and display  more details about the tank.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
