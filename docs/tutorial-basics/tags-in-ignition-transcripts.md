---
sidebar_position: 8
---

# Tags In Ignition - Video Transcripts

This page contains transcripts from the tags-in-ignition video course.

## Overview

These transcripts are automatically generated from the [tags-in-ignition Course](https://inductiveuniversity.com/courses/ignition/tags-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 2:26:12 PM
Source URL: https://inductiveuniversity.com/courses/ignition/tags-in-ignition/8.1
:::

## Video Transcripts

### 1. Tags in Ignition Video at Inductive University

:::tip Video Link
Watch the video: [Tags in Ignition Video at Inductive University](https://inductiveuniversity.com/videos/tags-in-ignition/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll talk about Tags in Ignition. A tag is an object that contains value, timestamp and quality attributes. The value of a tag can come from different sources. A tag source will define its type. Tags can be OPC type, memory type, query type, expression type, among a few others. Generally speaking a tag's value can come from a PLC or a similar device somewhere on our network. A tag's value can also come from a database via a SQL query. Finally, a tags value can also be coming from an address in memory. This allows users to have tags be independent from a database or PLC. The source of the value of a tag determines what kind of a tag it is. And we will cover the different types of tags in a later lesson. For now what we need to understand is that tags are the main mechanism to move values or data around your Ignition projects. The main reason behind this is that all of the various resources inside of a project. Vision Windows, scripts, Perspective Views etc all have access to the tag's system. Here on my screen is the Ignition Designer. The Ignition Designer is where all Ignition projects are developed. On the left here. You will see the Tag Browser. The Tag Browser is where you create tags as well as modify pre-existing ones. Clicking on this plus sign here brings up menu with a few options. We will address the data type instance and new standard tag options in the later lesson. For now i want to focus on the browse devices option. If i click it the tag creator window will appear. Here I'll be able to browse all the OPC devices hosted by our Ignition OPC-UA server. If your Ignition gateway is connected to a third party OPC-UA server or an Ignition OPC-UA server in a remote location. You will be able to browse the tags available in those servers here. The idea is that you can always open the tag creator and then drag some tags into your Tag Browser from an OPC server. Alternatively you can select that location in your Tag Browser. Right click on it drill down to new tag. Then standard tag to be able to manually create a tag. We will cover the various types of tags what each of them do and how to create them later on. Now we can see in my Tag Browser. I have tags created already. Drilling into the OPC tags folder. I will see tags coming from one of the PLCs configured in my Ignition gateway. I'm able to see their value and their data type. If I only wanted to see the tag's value and not it's data type. I can head to the kebab dropdown here column selection. And I'm able to select what columns I want to see on my Tag Browser. As you can see my tags are currently changing in value. They're executing. What I mean by this is that tags will execute and fetch a value from their source at a rate specified by their configured tag group. Clicking on the kebab menu and selecting the edit tag groups option. Will bring up the tag group editor window. Here I'm able to see our two default tag groups. Default. And default historical. Selecting the default tag group. I'm able to see that this tag group will require a tag to execute every 1000 milliseconds. If I exit out of the tag group editor and double click on one of my sine OPC tags here. I will be greeted by the tag editor window. Notice the tag group setting and how it is linked to my default tag group. This means this tag will execute or fetch a value from its OPC source. Every 1000 milliseconds as dictated by my default tag group. From the tag editor window I can also make configuration changes to this tag. So for example, I can change the value source of the tag which changes the tag to one of the different tag types we talked about earlier. I can also configure what tag group my tag belongs to. What OPC address it's value should come from etc. I can also alter the tags numeric properties and add things like tool tip or documentation for this tag. Scrolling down a little further we're able to configure tag security in the event i only want to allow a specific role to be able to read or write to this tag. We also see options for adding tag events scripts. This is useful in the event i want to execute a piece of python code when this tag's value changes. I can also configure alarms and enabled tags history to begin logging in this tag's data. To a database of my choice. Now, if we close our tag editor here and go back to our Tag Browser. As an important concept, you're going to want to understand that tags actually live outside of your project. Currently this project we're looking at here is called tags. If I were to create a brand new project by going to file. New. New project. I won't worry about saving as I didn't make any changes. We will give this brand new project a name and title and move forward with it's creation. This project has no vision windows, perspective views scripts, or literally anything associated with it. I just created it from scratch. Yet i can see on my Tag Browser. All the tags we saw earlier from our tags project. So tags live outside of your projects. If you delete a project it does not delete your tags. This is because tags reside in the gateway. So if I were to close all my designers, vision clients, perspective sessions and all of our visualization tools. As long as the gateway is still running your tags will still be executing. So for example, you can enable tag history on a tag or configure alarms on a tag. As long as the gateway is running. The tag data will get historized and alarms configured for tags will still work.

</details>

---

### 2. Tag Providers Video at Inductive University

:::tip Video Link
Watch the video: [Tag Providers Video at Inductive University](https://inductiveuniversity.com/videos/tag-providers/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    The Tag system in ignition features a concept called Tag providers. A Tag provider is a grouping of tags. When you first install ignition, we create two tag providers for you. The default tag provider and system tag provider. The default tag provider will be empty on initial installation and it is there so that you have a place to add tags. The system tag provider is there to provide users with clients and gateway metrics. Currently, I have my designer open and we can see the tag browser on the left here. Notice how this drop-down list, currently shows its selected value to be default. This is because, this tag browser is currently looking at the default, tag provider. This means that, the tag browser will display all the tags that belong to that provider. If I click on the drop-down list and select my system provider, I will see two folders here. One for client metrics and one for Gateway metrics. Drilling into the gateway folder here, I will be able to see gateway relevant information like, device statuses, statuses for each of the databases my gateway is connected to, even my performance figures for my gateway machine among others.

**[01:09]** [01:09]
                                    It is important to note that users cannot add new tags or modify existing tags in the system tag provider so keep that in mind going forward. By double clicking on the system tag, you will be able to see what tag parameters or configuration changes we are able to make. Things like, configuring tag security, tag event scripts, alarming, and tag history our mechanisms that we can still use for system tags. I will go back to my tag provider drop down lists and swap between providers like so. Notice how each provider has its own individual tags associated with it. As we said earlier, a tag provider is just a group of tags, so selecting a different provider from the drop-down list here, will display all the tags available for our selected tag provider. Tag groups are also specific to each provider. This means that if I create a new tag group for my default provider, by clicking on the kebab icon here and opening the tag group editor, once my tag group is created, I can see it on my tag group list for my default provider.

**[02:05]** [02:05]
                                    If I point my tag browser to a different provider and check my tag groups once more, notice our created tag group does not appear on this list. This is because again, tag groups are specific to a type provider. At this point, you might be wondering how to create a tag provider? Since tags are a gateway scope resource, we must head to our gateways web interface. From the configure section, I can head down to tags, realtime. Here, we will see a list of all the providers available in our gateway. Notice how the system provider is missing from this list. We hide the system providers configuration for the same reason, we do not allow users to add tags to it. It is there solely to provide you with information about your system, and that is not to be modified. Anyway, let's create a new provider by clicking on the button down here. We will talk about Remote Tag Providers later on, but for now, I will create a new standard tag provider. I will leave all the default configurations and press the create new tag provider button.

**[03:03]** [03:03]
                                    My new tag provider now appears on my gateway's list and going back to my designer and pressing the refresh button on my tag browser, I'm able to see my newly created provider. Of course, if I select it from the drop-down list, it will be empty because it was just created, and no tags I've been added to it yet. What we just did opens up a question of when is it a good idea to create a new tag provider. Users tend to create a new tag providers to maintain organization within their tag system. Other users have in the past created, a tag provider for each project in their gateway. Ultimately though, there aren't any guidelines as to when you should create a new provider. That is up to you to decide. It is important to remember however, that moving tags between providers or moving tags in general can potentially break bindings, scripts or other resources that utilize the tag you're moving. Moving a tag essentially changes its tag path or location so you could end up with ignition resources pointing to a tag that has since been moved. We also want to point out how a project can point to a specific tag provider.

**[04:03]** [04:03]
                                    For my designer, if I head to the top menu here under project, project properties. Under project general, there is a default provider option. This setting is there so that the project knows which tag provider it is tied to. Clicking on the drop-down here, you will see that I can configure this project to point to any tag provider, configured on my gateway. Of course, this does not limit what tags I can see from this project. I can always come into my tag browser and look up tags for whatever tag provider I want to. The projects that all provider setting is mainly there so that I do not have to specify a tag provider for every tag binding I build in my project. For example, if I create a new vision window and try to create a new tag binding in it, the primary tag provider that will be presented to me to choose tag from, will be the tag provider configured for this project. Just like in the tag browser, I'm able to see all of my tag providers from here as well if I drill down the all providers folder.

</details>

---

### 3. Importing and Exporting Tags Video at Inductive University

:::tip Video Link
Watch the video: [Importing and Exporting Tags Video at Inductive University](https://inductiveuniversity.com/videos/importing-and-exporting-tags/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will talk about Tag imports and exports. In some cases, you may need to backup your tags. So you want to make some large scale changes to a particular tag provider, it might be a good idea to backup your tags. You can always take a gateway backup which will backup your entire gateway, including your tags. However, gateway restores require the gateway service to be stopped temporarily. A tag import can be performed while the gateway is running without the need for any downtime. Tag exports and imports are facilitated from the tag browser and your designer, you simply need to select the tag or tag folders you want to export. In my case, I want to export my entire tag provider so I will select all my tags like so. I'll click on the kebab drop down list here and select Export tags. You will get a little save window where you will be prompted to select your file save location, we support two types of tag exports, XML and JSON. I will leave the default JSON file option and press the Save button to save my export to my desired location. I will then get a small pop up telling me that my save succeeded. If you want it to export your tags as XML, we can select our tags once more, head to the tag explorer button. Or alternatively, you can simply right click and select Export tags and simply change our files extension from JSON to XML like so. I can then press Save to save my tags in my desired location in XML format. So you wanted to import some of your tag exports, you first need to select whatever location you want your tags to be imported into, in your tag browser. Always be mindful of where you import your tags. If I select my query tags folder and go through the import process using one of my tag exports we took a few seconds ago, I will have essentially imported my entire tag provider into the query tags folder which may not be ideal. So it is important to be cautious when importing tags. If I do not select a location at all and choose to import tags, all my tags will be imported into the location in my tag browser. This is exactly what I want. So I will simply click on the kebab drop down menu and select Import tags. You will see a warning explaining to you that no folder or UDT definition was selected. And you will be asked if you want to import tags to the root. We do. So I will click Yes. A window will open prompting us to select the tag export file we wish to import. You will note that down below under files of type the CSV is supported. This is mostly for legacy purposes. The Legacy CSV format in older versions of ignition does not include alarm configurations in the export file. So we prefer to use XML or JSON. Now, you'll want to be aware of the collision policy in the right hand side here. Basically, when we are importing tags, how should admission handle any sort of path collisions that exist during an import. With Abort you will get an error message at the end like so. This error is telling me Hey, the tags you're importing already exists, I will abort the import. Now if you did not want the error message to appear, we can close it, try our import once more and set the collision policy to ignore. This way, if there is any type of collision conflict it just skips it and moves on without the error message. Let's open up one of these export files. I have both of the files here on my file explorer. I will right click on the JSON file and select to open it using notepad plus plus, you can of course use a text editor of your choice. Once the file opens, I will see all of my tags arranged in a large JSON object, having my tags laid out in front of me in a text editor will give me flexibility. I will be able to make mass edits to large number of tags using the Find and Replace tool without having to manually make any changes using the tag browser which can be slow and painful. The designer does have its own Find and Replace tool which can be reached pressing Ctrl + F or Command + F. And it does allow you to search for tags and do some Find and Replace. But sometimes it's nice to do that in an external editor of some sort. So again, I could try editing one of these export files you could always do a find and replace, say you needed to update the name of the device connection or you needed to change the datatype of a whole bunch of your tags, you could just export the entire tag provider, make the change, save the file and import your modified tags back into your system. Now, best practices go, this one's kind of common sense. If you're going to do any sort of external editing of these export files, it's usually a good idea to save those changes in a separate file. So that way you have an export of your tag provider before you made any modifications. From my tag export here, I will do something simple like change the folder name, my derived tags folder I will modify it to be called derived tags new and I will save my changes if I try and import these tags now. Notice how a new folder is created and named derived tags new. If I open it, you will notice that contents match exactly what is in the derived tags folder. The import will not delete the derived tags folder or overwrite with the derived tags New Folder. Both will remain. So when you're working with these export files and you import, if there isn't a tag on a specific node, we don't delete nodes. We don't delete folders or other tags. We can however overwrite them if we choose an overwrite collision policy. Let's open up our tag export and see how this will look like. I will change my derived tags New Folder back to its original name, I will scroll down to my OPC tags, and I will change it to point to a different OPC device. I cheated a little bit since both device connections are pointing to the same simulator, the only real thing I have to change is the device name and the rest of the OPC Item Path will remain the same. I will save my changes and try to import these tags using the overwrite collision policy. After having done so, if I drill into my tags configuration, I see that my old OPC tag's OPC Item Path was overwritten by the new OPC Item Path and therefore my OPC tags are not pointing to a different OPC device. The renamed collision policy will simply rename any node that is flagged as having collided with an existing node. I will try and import my entire tag provider over itself using the renamed collision policy. Notice how every single one of my nodes was duplicated and renamed. This is quite messy now. Instead of deleting nodes one by one, I would just delete all of them and re import them using one of my original backups to get me back into my original state. The last collision policy rule, Merge Overwrite, we did not talk about much but it's similar to the overwrite option. The only difference is that the overwrite option completely overwrites colliding nodes and their entire configuration. The merge overwrite will keep all the existing node configurations unless one of them conflict in which case it will overwrite just the colliding configuration.

</details>

---

### 4. Tag Diagnostics Video at Inductive University

:::tip Video Link
Watch the video: [Tag Diagnostics Video at Inductive University](https://inductiveuniversity.com/videos/tag-diagnostics/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    When there's a problem with one of your tags, sometimes it requires a bit of detective work to find the source of the issue. The tag diagnostics window is usually a good place to start. Here in the tag browser, I have a tag that's clearly got a problem. If we hover over the value showing in red, it'll give us a helpful tooltip message about the error it's currently showing. I want to look at the tag diagnostics window to see if we can figure out why it's throwing that error. There are two different ways to access tag diagnostics within the designer. If you just want to focus on the diagnostics, you can right click on the tag you want to examine, and select View Tag Diagnostics. A separate popup window will appear that lets you look specifically at the tag diagnostics, any active subscriptions, and the reference log. There is another option for accessing tag diagnostics that may give you a little more context as well. I'll close out this window and we can see that method.

**[01:05]** [01:05]
                                    Depending on your needs, you may want to look at other information within the tag editor first and then check out the tag diagnostics. In that case, you could double-click on the tag to open the tag editor and then look for this icon in the header menu. The same tag diagnostics window opens from that location as well. In the diagnostics tab, we can see the current value, quality, timestamp information, and some initial error messages for the selected tag. This window displays a snapshot of the information that was collected when we opened the window. If you'd like to update the information while you're in the tag diagnostics window, you can use this refresh button here. The second tab, active subscriptions, displays real-time tracking of a tag subscription. Here, under the subscriptions column, you can see the path to a resource that's currently subscribed to the selected tag telling us where it's being used in Ignition. If you expand that path, you can see additional information about that subscription.

**[02:05]** [02:05]
                                    In this case, you can see I've bound this tag to the LED display in my new Perspective view. The first referenced column can tell us when the tag subscription was created, and the totals column gives us the number of currently active subscriptions from the reference location. If I had multiple Perspective sessions with the same view bound to my Sine0 tag, this number would go up. There are also several buttons in our toolbars here that can help us expand and collapse how much information is displayed for better focus, or, if we want a more updated view, we can refresh our results. In addition, the designer button is available to show or hide references to the specified tag from the designer, including in the tag browser and vision components when in preview mode. The reference log tab displays the data from the tag reference tracker store as a way to find where tags are being used in a project. Since we'll go into more detail about the reference log and tag reference tracker store in future videos, this tab's functionality will become clear in those lessons.

**[03:09]** [03:09]
                                    For more details about the tag diagnostics window, the reference log tab and the tag reference tracker, please see the Ignition User Manual links below this video. Now, let's go back to our diagnostics tab and see if we can figure out what's gone wrong with our tag based on what we see here. For the last published value, we're showing a null and error_configuration. So, to get a little more information, let's take a look at this OPC area, which I can expand. As you start adding additional configurations to your tags for things like alarms, you'll start to see new areas under tag diagnostics that you can expand and get more information about. So the last subscription value is also returning a null value and error_configuration message that says our node doesn't exist in the server address space. On an OPC tag, this generally means that there's a problem with the OPC Item Path.

**[04:04]** [04:04]
                                    Let's close our tag diagnostics window and go back to the tag browser. I'll double click to open the tag editor and we can see there's a typo in our OPC item path. It should be pointing to Sine0, not Sine10. To fix that, I can either delete the one directly or I can select the browse devices icon and drill down to the correct item path for my tag. I'll click ok, and now the value is coming through as expected. The tag diagnostics window gives us quick access to relevant tag information and metrics that are sure to make any tag-related detective work faster and easier.

</details>

---

### 5. Tag Diagnostics - Tag Reference Tracker Video at Inductive University

:::tip Video Link
Watch the video: [Tag Diagnostics - Tag Reference Tracker Video at Inductive University](https://inductiveuniversity.com/videos/tag-diagnostics---tag-reference-tracker/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate the Tag Reference Tracker tool that was introduced in 8.1.34. The Tag Reference Tracker is a tool that was introduced to identify which resources are using a tag. I'll demonstrate the functionality with a memory tag that I've created in my default tag provider. You can access the tool by right clicking on a tag and selecting view tag diagnostics. This will open a window with three different tabs, Diagnostics, Active Subscriptions, and Reference Log. The first tab is the Diagnostics tab, which contains information that used to exist within the Tag Editor, but it's been moved here to this new location. The other two tabs are new and have been added as part of the Tag Reference Tracker. The Active Subscriptions tab is a place to check for anything that is currently subscribed to your tag, and it'll tell when it was first referenced. I currently have something subscribed to this tag, and if I expand this record, I see that it's coming from an expression on the text property of a label. Also, the record shows a hierarchy of the project that this exists in, which module it's coming from, and then the view and component down to the function.

**[01:07]** [01:07]
                                    This helps me find the actual location of this source in my project, and then I can go and investigate that label and its expression, if I want. I could also double click this record to be taken to the resource in question. I can also click this Designer icon here to show any references that are originating from a Designer session, for example, my tag browser. The next tab is the Reference Log, which shows historical interactions with this tag, such as reads, writes, subscriptions, and configuration changes. Just like the Active Subscriptions tab, I can toggle the Designer interactions, and this will show me what and where the source of the interaction is. Additionally, this will show me what type of interaction happened and then when it was last referenced. To demonstrate this, I'll launch a Perspective session. I have two buttons on my view and one line of code each to read and write to my tag. If I click the read button and fire the script, I'll go back to the Reference Log and I see that there's a new record that shows that a read occurred.

**[02:03]** [02:03]
                                    If I click the write button, then I get the same thing, but for a write interaction, and if I were to click the write button multiple times, it increments the update field and I can see how often this type of interaction happens. If I want, I can also click this erase icon and clear out the Reference Log records for this particular tag. Note that this permanently removes the records. The records themselves are stored in a SQLlite database that exists on the gateway in the Ignition install directory. I'll show the path to this directory below. Each SQLlite database in this directory will be specific to a tag provider. So, if I create new tag providers that have the reference store enabled, another database would be created to hold records for tags within that provider. If you'd ever like to back these up, just know that they won't be included in a gateway backup due to their size, so they'll need to be manually backed up. In fact, depending on the number of references in the project, they may grow to be quite large. If available disc space becomes a concern, this functionality can be disabled.

**[03:05]** [03:05]
                                    Speaking of which, it can be enabled or disabled from the gateway webpage by going to config > tags > realtime > clicking edit on a provider > showing advanced properties > and then by enabling or disabling this property. For non realtime providers, like the system provider or for MQTT tags, it can be enabled or disabled via config > gateway settings > enable tag reference tracker store. New gateways will have this feature enabled by default. However, any existing gateways that are upgraded to version 8.1.34 or beyond, will have this feature disabled by default, and it will need to be turned on.

</details>

---

### 6. The Tag Editor Video at Inductive University

:::tip Video Link
Watch the video: [The Tag Editor Video at Inductive University](https://inductiveuniversity.com/videos/the-tag-editor/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we'll explore the layout and basic features of the Ignition interface for working with tags. To begin, we'll go to our tag browser in the designer. I have a couple of tags pre-configured already. The first thing I'd like to do is open one of my existing tags. To do this, I can simply double click on the tag to open the tag editor window. You also have the option to right click on a tag and select edit tag. Whichever method you prefer, it gives us access to the tag editor, and we can see a comprehensive list of the configurable properties of our selected tag. Here we have a list of basic properties that control items like the name of our tag or what tag group it's in. Once in the tag editor, you can update the tag properties to new values if you'd like. For example, if I just wanted to change this tag's name, I could replace the value here and hit okay to close the tag editor window. This window also gives you a handy category navigation menu on the left.

**[01:05]** [01:05]
                                    Clicking on one of the categories allows you to isolate a section of related properties at a time for better focus as you're making updates or checking values. The metadata properties give us the opportunity to describe our tag in ways that will help other users and developers of our project. I'll just put in a bit of documentation here, and since I'm finished making that change, I can select All Properties to return to the default view. My changes won't be saved until I click okay at the bottom of the tag editor window. One other category I want to highlight here with our memory tag is value. The specific value properties we're provided in this window vary based on the type of our tag. A memory tag will have certain value properties, while another type of tag may have different options. So just to demonstrate that idea, let's exit this memory tag and double click on this OPC tag instead. Now, in the value properties section, we have an OPC server property and an OPC item path property that can be updated as needed.

**[02:10]** [02:10]
                                    For example, if you'd like to modify an existing OPC item path, you can click on this browse devices icon and locate a new item path you'd like to assign instead. Next, we have numeric properties. These deal with things like scaling or engineering units we'd like to use for our tag. From the tag editor, we can also configure security, scripting, alarms, or tag history. Let's take a quick look at this task bar up above. From here, we can rearrange our properties alphabetically or by category, which is the default. This button allows us to show or hide the detailed description area for whichever property is selected. I can also expand or collapse the categories with these buttons. Next, the little plus icon here gives us the opportunity to configure a custom property on our tag.

**[03:03]** [03:03]
                                    Let's try that out. I'll give my new custom property a name -- customProperty. Then I'll choose type array. If I click okay and scroll down within the window, we can see that my new property has been added. If I decide I don't need it after all, I can always use this little trash can icon in our task bar to delete it. There are a couple more useful features in the tag editor we can explore. We have a refresh button here that allows us to pull in any changes made to this tag from another designer. Also, by default, we're showing the documentation for this tag as specified on the documentation property, but if I'd like, I can use this documentation button to see an expanded version of that and make changes directly. In addition, I can view tag diagnostics if I click here. That pop-up gives us some useful information about our tag, and since it's an OPC tag, we're also getting some OPC specific information as well.

**[04:05]** [04:05]
                                    This is just the beginning though. In future videos, we'll dig deeper into how to configure specific tag properties, since there are so many other useful ways to interact with those properties in the designer.

</details>

---

### 7. Tag Quality and Overlays Video at Inductive University

:::tip Video Link
Watch the video: [Tag Quality and Overlays Video at Inductive University](https://inductiveuniversity.com/videos/tag-quality-and-overlays/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Since tags in Ignition typically represent data coming from real world devices and databases, there can be real world problems that interrupt that flow of data. To account for this, all Ignition tags have an associated quality value, which tells us how much we can trust the value on the tag. A tag with a quality value other than good is generally untrustworthy, since it means that something in the data flow has gone wrong. There are many reasons for bad quality on a tag, including network disconnections, overloaded devices, and tag configuration issues. To demonstrate, I'll use a couple of tags here in my Tag Browser. Everything on these tags seems to be going just fine, and values are coming through as expected. If I expand one of my tags here, we see that the quality of my tag is good. Let's change this to reflect one of those potential problems that can arise. I'm gonna break the network connection to my device, which will cause these tags to stop receiving new values.

**[01:06]** [01:06]
                                    Having severed the connection, we can see some important changes in our tag within the Tag Browser. The value of the tag has stopped updating, as we would expect, and the text color has turned red. If we hover over that value, a tooltip can give us more information about the problem. The quality value on our tag has also been set to bad. There are many possible quality values you might encounter in the Tag Browser, depending on what's causing the quality issue. For more information on specific tag quality values, please see the links to the Ignition User Manual below this video. There are also other visual indicators that this tag has bad quality. Earlier, I set up this Perspective view with an LED display and a cylindrical tank. These components are tied to the first couple of tags on my device. Since our connection is broken right now, you can see that these components both have overlays indicating that an associated tag has bad quality.

**[02:03]** [02:03]
                                    Although we're currently viewing this in the designer, any open Vision clients or Perspective sessions would similarly indicate that there's a problem with the tag. So now if I reinitialize my connection to the device, we can see that the values are starting to come through again. The quality on our tag has changed back to good, and our components no longer have a red overlay. With these tools, Ignition users can gauge the health and accuracy of what's displayed at a glance and glean important information to help resolve any tag quality issues promptly.

</details>

---

### 8. Tag Scaling Video at Inductive University

:::tip Video Link
Watch the video: [Tag Scaling Video at Inductive University](https://inductiveuniversity.com/videos/tag-scaling/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    Sometimes when configuring our tags, we may want to represent the value of a tag in a different way than it's being provided by the tag source. For example, perhaps a sensor is giving us a reading in inches when we really want to see it In feet. Ignition offers a set of tag properties to automatically convert a numerical value from one context to another through tag scaling. Scaling will take the raw value of a tag driven by an external source such as a PLC or SQL Query, apply a mathematical formula and use the resulting converted value as the value of that tag. To demonstrate this process, we'll start with these two pre-configured OPC tags in my tag browser. You'll notice that both of my tags have the same value. This is because they're both pointing at the same OPC item path. The value we're receiving from the PLC is 250, and it's an integer.

**[01:02]** [01:02]
                                    However, what the PLC is trying to represent is the value 2.5. So for this example, I'm going to configure one of my OPC tags to reflect this. In the tag editor, we can go to the numeric properties to find the scale mode property. The scale mode is set to off, meaning we aren't doing any conversions on this value, but, if I open up the dropdown, I have a few different scaling options to choose from. The most common scaling option is linear, and that's what we'll need here. Depending on your needs, you can find details on all our scaling options and the functions they use in the Ignition User Manual. I've attached links to those resources below this video. So, when I select my linear scale mode, a few more properties appear in the tag editor: raw low, raw high, scaled low, scaled high, and clamp mode. These properties broadly dictate how we want to change our value. Raw low and raw high refer to some typical bounds for the incoming value, while the scaled low and scaled high properties refer to bounds on the output value, the actual value that our tag will hold. Linear scaling maps the raw distribution onto the scaled distribution.

**[02:17]** [02:17]
                                    By default, if the value from the PLC falls between zero and a hundred, it will fall between zero and 10 on the tag. Essentially, we're dividing by 10. In my case, the incoming value is 250, so let's just say it can fall between zero on the low end and a thousand on the high end. So I'll change this raw high value to a thousand. The actual value I'd like to represent is 2.5, so if the highest input value is a thousand, the highest output value should be 10. This means I can leave the scaled low and scaled high properties at their defaults. To see this in action, I'll click okay, and we can see that an icon has appeared in the tag browser to indicate that our value is being scaled.

**[03:04]** [03:04]
                                    The value on the tag is now three. But we wanted a value of 2.5, not three. We're seeing a value of three because we've neglected to change the data type of our tag, The data type of the tag must match the data type of the scale value. We can't represent 2.5 as an integer, so we're rounding it to three, currently. To fix this, I'll go back into my tag editor and change the data type for that tag from integer to float. I'll click ok to save the changes, and after a moment, we can see that the value is now correctly showing as 2.5. Now, there's another scenario that might arise as well, and it's the reason we have a second OPC tag. If I update the value on the scaled tag and set it to four, you'll see that the value written back to the PLC was not four but 400 as our unscaled tag below shows. This is because tag scaling works both ways. When you do a tag write to that scaled tag, Ignition will scale that value in the opposite direction, back into the raw range, before writing to the PLC.

**[04:12]** [04:12]
                                    This means that our value between zero and 10 will scale back into a value between zero and a thousand. There's one other helpful property we can examine. I'll go back into my tag and we'll look for the clamp mode property. This property is important because even though I've specified raw low and raw high values, there is nothing preventing the PLC from giving us a value outside of this range. With a clamp mode of no clamp, we'll scale values gracefully, even if they fall outside of the raw range. For example, a value of 1100 will scale to a value of 11. If we configure our clamp mode and select Clamp_Both, it will clamp both the high and low values. I'll click ok, and now I'll write 1100 to the unscaled tag value, just to demonstrate.  You can see that because of the clamp mode, we prevented the value on the scaled tag from going above the scaled high value we configured.

**[05:13]** [05:13]
                                    As a result, it's set to the max scaled high of 10. As we can see from these examples, tag scaling can be very useful for converting PLC-driven values into a more precise, human readable format.

</details>

---

### 9. Custom Tag Properties Video at Inductive University

:::tip Video Link
Watch the video: [Custom Tag Properties Video at Inductive University](https://inductiveuniversity.com/videos/custom-tag-properties/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson We will cover tag custom properties. Users can define their own custom properties within a tag. Their tag custom properties can then be referenced just like most other tag properties. Currently, I'm in my designer. I will create a new tag by hitting to my tag browser on the left, and right clicking where I want my new tag to be created. I'll head down to the new tag menu and select to create a new standard expression tag. I will name the tag "Multiplier" and set this expression to be 10 multiplied by five. Clicking okay and accepting my changes my tag will be created and it's value is 50. Or my expression's expected result. Instead of multiplying the number 10 by the static value of 5 let's make it dynamic and multiply it by a custom property value. I double clicked on my multiplier tag to bring up the tag editor. I will press on the plus sign here to create a custom property. I will name my custom property "myNumber" and set it's type to number. If I scroll to the very bottom here I will see my newly created property now listed. If I press okay I can expand my tag from the tag browser tree, and I will see my newly created property, as well as it's value. Now that I created our property, let's use it under the expression tags expression. As we said earlier, we want to multiply 10 by my custom properties value. So I can get rid of the 5 and use the tag button here to drill down to my expression tag, and then it's custom property. I'll press okay and now my expression is multiplying the number 10 by my custom properties value. Let's use some perspective components to visualize what's going on. Here, I have a perspective view where I will put a numeric entry field component and say, an LED display. I will bind my LED displays value property to my multiplier tag like so. I will then bind my numeric entry fields value property to my multiplier tag's custom property like this. I will set this binding to be bidirectional so that my component can run back to my custom property and press okay to finish my binding configuration. Now putting my view in preview mode using the F5 shortcut key whatever value I type into my entry field here will be written to my custom property and my custom properties value will be multiplied by 10. The product should then be displayed on my LED display. As you can see, tag's can have custom properties and these custom properties can be used by the system and within tags themselves.

</details>

---

### 10. Creating OPC Tags Video at Inductive University

:::tip Video Link
Watch the video: [Creating OPC Tags Video at Inductive University](https://inductiveuniversity.com/videos/creating-opc-tags/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we will talk about adding OPC tags through browsing or manually creating them. We've installed Ignition, created some device connections, and now we want to start interacting with some of the data points inside those devices. The Tag Browser here will show all of our available Ignition tags, but we need to create some first. The easiest way to create them is using the Tag Creator. You can open the Tag Creator by clicking on the plus icon in the upper left corner of the Tag Browser, and then selecting browse devices. When you do this you can see the Tag Creator shows up and it's got two sections here. One for the connected devices on the left, which will show all of your connected OPC Servers and allows you to browse into those Servers into any devices that you connected to. On the right you can see a list of all of your existing tags. To add tags, we'll go over to our Ignition OPC UA Server, expand this out, expand into the devices, and then you can see we have all the different devices set up with any tags inside of them. You can even expand all the way down to individual tags. Now, there aren't any values here because we aren't asking for the tag data yet. This is just a tree of all the browsable tags. Now you can add tags to Ignition by dragging tags from the Connected Devices section over to our Tag Provider on the right. Or, you can select them and hit the little icon in the center. I'll take the entire Sim device folder and drag it over, and you can see now it'll show up in the Tag Provider with all of the folders and all the tags inside of it. Once we have all these tags here, I can hit Apply down at the bottom or Okay. Now we can expand the folder in the Tag Browser and we can see all of our live values. These tag values are being fetched in one second rate which is the default for Ignition. We'll talk more about tag group rates in other videos. Now dragging an entire device into Ignition is a bad idea if you don't need all of the tags. Having thousands of tags that are unused will cause additional overhead for your network and devices that isn't necessary. This also means you'll have all the extra tags here in your Tag Browser, which can be cumbersome to work with. Instead, you should only have the tags that you need in your project to keep the workload light. We recommend creating folders and organizing your tags in an easy to understand structure. You can easily add folders to our tag structure in the Tag Browser or in the Tag Creator. For example, if I expand out my Dairy device and look in the Refrigeration folder, you can see that we have a few Towers here. If these are the only tags that we need from this device, then I can simply go to the plus icon in the upper right and click on new folder. I can give this folder a name, something like Towers, and click okay, and then you can see we have a new Towers folder. Now I can select both of my Towers and drag them into this new Towers folder. And you can see they'll show up in the Provider here. Now when I hit Okay or Reply at the bottom you can see that our Towers folder will show up in the Tag Browser, and now we have live values. Now the Connected Device History will show all of your connected devices but not all of the devices support tag browsing. Some Drivers won't and some devices won't. For example, Ignitions ModBus and Siemens Drivers don't support browsing. For those we'll have to manually add tags. Now you can manually add tags in the Tag Browser or in the Tag Creator and it works in the same way. All we have to do is click on the plus icon in the upper right and then click on this new standard tag. Now you can see it adds a tag here, and to modify this blank tag I can double click it or select the little edit icon on the right and then fill in whatever values I want. I'm going to start with a name, I'll call this tag Temp, I'll change my values source to be an OPC type. And then you can see when I select that we now have an OPC Server and an OPC Item Path. For my Server, I'll select the Ignition OPC UA Server, and then for my Item Path all I have to do is type in the path to that particular tag. Now every device type is different and you'll have to know what the Item Path is for your particular device. And there's lots of information in our user manual for all of Ignitions Drivers. Ignition's OPC UA Server requires us to start with a device name in square brackets. So, I'll type in ModBus, with those square brackets. Now because this is a ModBus device I want to read one of the holding registers, but my holding registers are available in Unit 1. So my OPC Item Path should look like something, should look something like this. 1.HR1 will give us Holding Register 1 from Unit 1. Now I can just click commit at the bottom, and then apply, and then you'll see our new temperature tag and we have a live value.

</details>

---

### 11. Device Diagnostic Tags Video at Inductive University

:::tip Video Link
Watch the video: [Device Diagnostic Tags Video at Inductive University](https://inductiveuniversity.com/videos/device-diagnostic-tags/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Every OPC server will give you diagnostic information about throughput connections and things like them. Ignitions OPC UA server will expose these diagnostic tags and we can use those tags and ignition, once we drag them into the tag browser here. First, we need to open up our tag creator here and then we can go into the ignition OPC UA server and into our devices and into any one of the devices. And you can see we have this diagnostics folder and inside each diagnostics folder we'll have information like is connected in host name. Now we can drag the is connected tag over into our provider and hit apply. And then you can see, we have a new is connected tag in our tag browser. Now we can do things like you know, put this on the screen or add history or alarming to it. Certain devices will have more information like our control logics here. We have things like the serial number and major, minor revision numbers for that. Other devices like our micro logics will have different information. If you go into diagnostics here you can see, we have that same is connected in host name. And like most devices will have a request folder that will give you some more information about things like you know, minimum and maximum duration for requesting information from that device. Once we have the tags that we want in our tag browser, we can display them on screen. The most common case is to take the, is connected flag and use it onscreen to tell me if the device is connected or not. I'll create a new main window here and I'll grab a circle and drop it onscreen. And then we can use the is connected flag to bind our fill paint property. I can just select our new is connected tag and then set our values off being red and on being green. Now on screen, I have a display to tell me if the device is connected or not.

</details>

---

### 12. Addressing Bits Video at Inductive University

:::tip Video Link
Watch the video: [Addressing Bits Video at Inductive University](https://inductiveuniversity.com/videos/addressing-bits/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    It's really important in Ignition to be able to address individual bits in a Word. Here you can see I have two Tags, the Controlling and MicroLogix Tag that have some values associated with them. Reading or displaying individual bits of a Word on your screens is very easy to do. But what if you want to actually write to those to do this, we will need to change our Tags or add additional Tags to be able to show just the individual bit and then we can write to it very simply. It's easy to alter an existing Tag like this ControlLogix Tag. I can just double click on it to open up the Tag Editor and then I can change my OPC Item Path to show just the individual bit. You can see I'm looking at this T1 level PV Tag and I can go and add a dot one to the end of the OPC Item Path. And that will give me just that first bit. Now, if I do this, I'll also have to change the data type from short to Boolean. And then if I click apply down at the bottom, then you can see now my ControlLogix Tag and the tag browser changes to just a Boolean value and you can see a turning on and off based on how the Tag is changing. Now I can do the same thing for my MicroLogix here. I'll actually go ahead and duplicate I'll copy and paste, so I get a second one. And again, I can double click on this new Tag. I can change my OPC Item Path for this Tag in the same way. I'll put dot zero at the end to get the very first Bit, and I'll also change that data type to Boolean. Now, when I hit apply, you can see that my new MicroLogix one Tag has a value of True because our Micro original MicroLogix Tag has value of five. If I set this new Tag to False, then you can see that our MicroLogix Tag changes to four. Now I can also change the value of the Tag to something like 10. And if you change it to 10, you can see our value is still False. And if I change it to nine, then it changes back to True. Now some PLCs will actually support getting a value all the way down to the Bit-level. So if I go and browse my device here and I go into my MicroLogix and into my end seven, then you can see each of these individual Tags will allow you to select a particular bit. And then you can add those to the Tag browser.

</details>

---

### 13. Memory Tags Video at Inductive University

:::tip Video Link
Watch the video: [Memory Tags Video at Inductive University](https://inductiveuniversity.com/videos/memory-tags/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll explain the purpose of memory tags and show how to create and update one. A memory tag is a very simplistic tag. Unlike other tag types, a memory tag doesn't automatically update or change its value from some outside data source, such as a PLC or a database. Instead, it simply stores a data value in memory until it gets updated somehow by other means. Hence its name. It's akin to a global storage variable. Creating a memory tag is no different from creating any other standard tag type. in our Tag Browser, we will simply click on the Add button and select the New Standard Tag > Memory Tag option. This will bring up our Tag Editor. Though there are lots of options here, we'll just update the three basic settings of interest. So we will give our tag a name, perhaps memtag1. We'll leave the data type at its default value of Integer, and we'll give our tag an initial value, maybe 45. We'll leave all other options at their default values.

**[01:05]** [01:05]
                                    That's enough to set up a simple tag. So we'll click OK. This finishes the tag configuration, and now our Tag Browser shows the specified memory tag. So let's update this tag. Right now its value is set to 45. If we first ensure that our Designer is set to bi-directional read write mode, we can then double click on the tag and set it to some other value, maybe 60. Again, a memory tag retains its current value until something comes along and writes to it. Typically, that's going to be some other component bound bidirectionally to it, or perhaps a script that writes to it. So for example, we could drag this tag to the window, and select a Control > Slider element to write to it. If we set the Designer to Preview mode, we see that dragging the slider updates the memory tag value. Memory tags can be really useful during initial development, if you just need a placeholder tag. For example, say you wanna start a project, but you don't yet have access to any viable PLC data. For the time being, you can simply use memory tags as stand-ins.

**[02:10]** [02:10]
                                    Or if you want to test the functionality of a script in advance of using live production tags, you can make use of memory tags instead. It's also pretty common to use memory tags, for example, as setpoint tags for alarms, storing the current work order number for a particular production line, or any number of other purposes. Memory tags, like all other tags, reside inside tag providers created on the Gateway. So any other module subsystem or feature of Ignition has access to such tags. The ability for a memory tag to exist independently from OPC or any databases, makes them a powerful and useful part of the Ignition tag system. So now we've seen that memory tags are like items of global memory storage, independent of any PLC or database, and we have seen how to set them up and how to update them.

</details>

---

### 14. Expression Tags Video at Inductive University

:::tip Video Link
Watch the video: [Expression Tags Video at Inductive University](https://inductiveuniversity.com/videos/expression-tags/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll cover expression tags. Expression tags utilize Ignition's expression language, to derive their value. This OPC tag in my tag browser is bringing in a temperature reading in degrees Celsius. I can write an expression using ignition expression language that will take my Celsius temperature reading, and convert it to Fahrenheit. I will begin by right clicking anywhere in the tag browser, going down to new tag and creating a new standard expression tag. I will name this tag temp F for Fahrenheit, and I will set a stat type to float. Similar to how an OPC tag needs an OPC item path to figure out which device connection to pull its value from, an expression tag needs an expression. To write our expression, I can edit the tags expression property by clicking on the pencil icon here. This will bring up the expression editor. If I type three times 423 and hit commit down below, I see that my expression gets assigned to the tag. What I mean by this is if I hit okay, my tag will show my evaluated expression value which is 1269.

**[01:06]** [01:06]
                                    Let's modify the expression so that it takes in my Celsius temperature tags value and converts it to Fahrenheit. I will double click on our expression tag to bring up the tag editor again, and modify our expression like so. Here, my expression has 32 to the product of C and nine over five. I need to replace C with my Celsius temperature tag, so I will delete C and press on the tag icon here on the right. This allows me to bring in whatever tag value I wanted to my expression. I will drill down to my Celsius temperature tag and click okay. Now my expression is complete. I will commit and press okay to finish my configuration, and we can see that now my tag shows the converted temperature value. Every time my OPC time value changes, it causes our expression to evaluate, and therefore we will have a Fahrenheit convert its temperature for every Celsius temperature value you get from OPC. This is one of the main reasons why you would want to use an expression tag.

**[02:01]** [02:01]
                                    If you want to store calculation in that tag and perhaps use other tag values in your calculations, expression tags are the way to go. Now let's go back to our Fahrenheit tag's configuration. We can see that there's an execution mode property. Now, full descriptions of these will be in our user manual, but you have three options right now, event driven, the top item there, basically means that there's something inside of the expression that's going to change. We want to run this expression whenever that changes. So in this case, the value of our temp C tag is changing, which is dragging the expression tags execution. You can also set it to fixed rate, the middle option here, which allows you to determine how often this tag should update using an execution rate. Finally, you can select a tag group. This means that this tags execution will follow the execution rules outlined by the tag you have configured above. So really there's three ways to determine how to update the value of this one tag. Expression tags are very powerful because you can define an expression to be whatever you want. Ignitions expression language allows you to run Python scripts from an expression.

**[03:04]** [03:04]
                                    Similarly expressions also allow you to run SQL queries from an expression. This coupled with an ample list of expression functions makes expression tags the most versatile of all tag types.

</details>

---

### 15. Client Tags Video at Inductive University

:::tip Video Link
Watch the video: [Client Tags Video at Inductive University](https://inductiveuniversity.com/videos/client-tags/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Client tags as the name implies are only available for use in clients. This means that their values are isolated to each Vision Client runtime. And even though they're created in the Designer, each client will have their own instance of those tags. For example, if I have a single client tag of the value of say 42, if I open five vision clients, each vision client will have its own instance of my tag with the same value of 42. If I write a 59 to one of my tags from one of my clients, only that client performing the write will reflect the 59 value change. This is because again, each client will have its own independent instance of this client tag. To create client tags in the Designer, we go into the tag browser. This is special tag provider called Vision Client Tags. Since client tags only apply to vision clients, the vision client tags provider will only appear if you're in the vision design space, we can easily right click on the tag browser, scroll down to new tag and create a new client tag, which is the only one available when you're in this provider.

**[01:05]** [01:05]
                                    We give the tag name, so I'm going to name it Area and a data type. So I'll make that a string. I'll set this value to say processing. A client tag can be a static value where I simply type in the value I want, think of it like a memory tag in that sense, of course it's value could be modified from the vision client by writing to the tag. You can also go to the Expression SQL section here and make it an expression or a SQL Query depends on where you want the tag source value to come from. I want the tag to have a static value processing, so I will leave this as a none. Press OK to exit my configuration and I will see my new client tag in the tag browser. This tag can be used as a variable to be passed between windows, I can read from it, I can write to it. It is a variable we can use and work with. As we saw earlier, client tags can also be expressions. Let's create one. This time I'll name it Flag and set the datatype to Boolean. I will select the Expression SQL option on the left and set the expression type to "Expression" to bring on the expression editor.

**[02:04]** [02:04]
                                    Say I want this tag to evaluate the truth if my client's IP address equals two one, two, three, four. To do that, I can click the little tag icon here and drill down to my system tag provider, which contains a tag that has the client's IP address. I will complete my expression like so. Now this expression will evaluate to true if, and only if my client's IP address is 1.2.3.4. I will click Okay and you will notice that my tag's value is indeed false because 1.2.3.4 is not my IP address. However, if I have fifty vision clients open, and one of them has an IP address of 1.2.3.4 that single vision client will see it's flag clients tags, and since I'm a value of one or true. One other important thing about clients tags that I want to mention, especially when you're looking at expressions or SQL Queries, is that Client Tags do not have a tag group associated with them. So the values do not poll according to a tag group that we created for regular tags. If you want a client tag to continuously update automatically in the SQL Query mode, you set the polling mode to relative or absolute.

**[03:07]** [03:07]
                                    So you can specify how often you want the query to run. In the expression mode, you have to make the expression actually reevaluate, which either is dependent on values within the expression changing, or you can use functions that actually poll. For example, in the Date and Time functions, then now function, you can specify a poll rate and it would continuously make that expression calculate over and over again. In this case, it will evaluate every 1000 milliseconds. So Client Tags can really be useful for in project variables. In the next lesson, we're going to look at how we can use them for indirection.

</details>

---

### 16. Reference and Derived Tags Video at Inductive University

:::tip Video Link
Watch the video: [Reference and Derived Tags Video at Inductive University](https://inductiveuniversity.com/videos/reference-and-derived-tags/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    <v Instructor>In this lesson,</v> we will cover derived tags and Reference Tags. A reference tag is a tag that pulls its value from a source tag. In other words, there's some other tag in the system that the reference tag is referencing to obtain its value. A derived tag references the value of another tag as well. However, a derived tag's value can have an expression tied to it, allowing you to perform calculations to derive the tags actual value. Additionally, you're able to configure a write expression, which is used to evaluate the value that will be written back to the source tag. Here I have an OPC tag named status. What I will do is create a reference tag for this guy. I will right click on my tag browser, on the location where I want my tag to be added. I will go down to New Tag, and select the option to add a Reference Tag. I will name it status_ref, status_reference, set it's Data Type to be the same as my Status Tag Integer, and set it's source to point to my status OPC tag like so. I will hit OK to finish my configuration and I will see both my OPC tag and my newly created reference tag, holding the same value.

**[01:09]** [01:09]
                                    If my status tag changes value, my status reference tag will reflect this change. Why is this useful? Well, generally speaking, when you're developing a project, OPC tag paths may change. I could very well have my status tag bound to an LED display like so. If I move my status tag to be inside this new folder here, my LED displays tag minding will break. So will my reference tag for that matter since its source tags path just changed. If I wanted to fix this problem, I would have to go to my LED display's value property and change its binding to point to my status tag's new location. I would actually have to do this for every component bound to my status tag, which can be very slow and painful. Let's put a status tag back to where it was. What I can do instead is bind my LED display to my status reference tag. Now, if I move my status tag again, both my LED display and my reference tag will break as expected.

**[02:04]** [02:04]
                                    However, instead of having to reconfigure bindings in my vision or perspective resources, I can simply re-point my reference tag to my status tag's new location. And just like that, I can fix the problem without having to rework any bindings. And of course, for the reference tag here, you can set the source path to a memory tag or other types of tags. If you're trying to develop a project and you don't have access to live PLC data, you could just create a number of reference tags with an equal number of memory tags to be used as source tags. Then, when you're deploying the project live, you can replace the memory tags with OPC tags and simply update your reference tags to point to the new OPC tags instead. That way, you don't have to touch any of your screens at all to reconfigure any bindings. How do Derived Tags difer? To find out, let's first create a memory tag named mem1. I will leave this data type as integer and set its value to 20. I will create a new derived tag. I will name it mem1_derived, and set it's source path to point to my mem1 tag.

**[03:09]** [03:09]
                                    I will click OK to finish my configuration and I will see both tags here. So if my design is read and write mode, I can write to my memory tag or source tag and my derived tag will reflect this change. And of course, if the derived tag changes in some way, that change will be written back to the source tag. So right now, derived tags are looking pretty similar to reference tags. If we go back to the derived tag settings, you will begin to see the differences. Derived tags have a read expression and a write expression. The read expression determines the value that should appear on the derived tag itself. The write expression allows us to configure what value should be written back to the source tag, should the derived tag change in value. Let's explore how this will work a little further. Let's imagine that my mem1 tag holds a temperature value in degrees Fahrenheit, and I want my derived tag to show this temperature in degrees Celsius. Well, to do that, I will need to configure my derived tags read expression to take in my source tag's value and convert it from Fahrenheit to Celsius.

**[04:08]** [04:08]
                                    The expression will look like this. Now if I write to my derived tag a temperature in Celsius, I don't want the Celsius reading to be written back to my source tag which expects this value temperature in Fahrenheit. So I have to first convert that write back value to Fahrenheit before it is written back to the source tag. This means my read expression must take in a value and convert it to Fahrenheit. This will make my expression look like this. What we have done, is configured my derived tag to always see my source text temperature reading in degrees Celsius. But if I write back to my derived tag, that value will be converted back to Fahrenheit and then written back to the source tag. I will click OK to complete my changes. I will then write a 32 to my mem1 tag, my derived tag shows a value of zero which is exactly 32 degrees Fahrenheit converted to degrees Celsius. If I write a 42 my derived tag, a 104 will be written back to my mem1 tag because 104 is 40 degrees Celsius converted to Fahrenheit.

**[05:04]** [05:04]
                                    Both my read and write expressions have use of the entire expression language. So my expressions have infinite configurability as far as what value should be shown on the derived tag, and what value should be written back to the source tag, the ability of tag referencing and the ability to configure read and write expressions, make reference and derived tags a useful part of the tag system.

</details>

---

### 17. Query Tag Video at Inductive University

:::tip Video Link
Watch the video: [Query Tag Video at Inductive University](https://inductiveuniversity.com/videos/query-tag/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at query tags. Query tags, as their name implies, allow you to run a SQL query, and then return the result of that query to the tags value. Query tags are a standard tag, so if we come over and right click anywhere in our tag browser, I can go down to new tag to be able to create a new query tag. I will name this guy, query one. I will set this data type to dataset. The query setting here will allow me to configure the query that will be used to populate this tag's value. So I will click on the pencil icon here to bring up the query editor. I will create a query here that returns all of the data in my database's inventory table which contains ice cream inventory data. I'll commit my change, and now I have to tell my query tag which database to query for its data. If you leave this setting blank, ignition will try and use the default database for the Tag Provider as this tag's data source. I do not mean the default database for this project, I mean the default database for the stock provider, which is very different. My inventory table lives in my DB database so I'll select it and finish my configuration. My tag is now created. From the tag browser, I can drill down to it's value property and I should see all of my inventory tables now. This data is not very easy to visualize in this tag browser, but I can easily drag and drop my tag onto my visual window here, and select table, to display my tag's data on a table. This data is coming directly from my database onto my query tag which is not bound to this table's data property. Since my tag now contains this table's data, it can be used in reference by vision clients, perspective sessions, reports, pretty much any admission subsystem that has access to tags. This becomes useful because now, instead of querying the database, which can sometimes be expensive, I can simply read this tag's value to retrieve the same data. Let's go to tools here, and select to open up our database query browser. Here, we can execute queries against any database or gateway it's connected to. Instead of querying for all the data in my inventory table, I just want to return the inventory count for strawberry ice cream, so I will need to write a query like so. I can use the same query to have my query tag hold the inventory account for strawberry. Let's do that. I will copy this value and head down to my tag browser, double click on my query tag to modify its query, and paste my query here and commit. My query will no longer return an entire table. It instead will return a single integer value, so it's data type no longer needs to be a dataset, but it must be an integer now. I will then hit okay, and you will notice that my tag's value changed and that not only has my strawberry ice cream count. So we just saw how a query tag can be used to retrieve a whole table's data and also just a single value within a table. Now let's go back to our tags configuration. As far as determining how often our query time will execute, that's what the execution mode is for. So this is very similar to the expression tags you may have seen earlier. You can either do an event driven, which means your query has some sort of tag reference inside of it, and whenever that reference updates, we want to fire the query again. You can use a fixed rate, which means specify the execution rate here, and we'll run the query at whatever rate you specify, or you can always set it to a tag group, and then the query's execution will be dictated by the tag group above. You always want to be mindful of a query tag's execution rate, like with any rate of query execution. Say the query tied to my tag here takes five seconds to return a value. It probably would not be wise to set this tag to a fixed one second execution rate, for instance. So hopefully this gives you a good idea of what query tags can do.

</details>

---

### 18. System Tags Video at Inductive University

:::tip Video Link
Watch the video: [System Tags Video at Inductive University](https://inductiveuniversity.com/videos/system-tags/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll talk about system tags. System tags simply report information about the system, specifically the gateway or vision clients and designer sessions. If we take a look at the tag browser here, which I have expanded in the middle of my screen, we can see there's a system tag provider. This is where system tags live and we have some tag folders available, those being client and gateway. One important thing to note is that we can't create any new system tags. If I try to add a new tag, I don't have any available options to do so. If I expand the client folder here, we receive additional sub folders about the client's system. Just to be clear, these do differ from these similarly named vision clients tag provider, as those tags are specific to vision clients during runtime. So these tags here report information about vision clients or the designer. They do not report any information about other entities.

**[01:04]** [01:04]
                                    So for example, in the perspective module, you have sessions. These tags do not report information to the sessions. Sessions can't actually use the tags in this folder. If you wanted something similar to these tags here in a perspective session, that's what the session props are used for. Session props basically fill that role. They provide similar functionality, and again, they're really only available inside of the session. So if I open our system folder here, we receive information about our current system. We get things like the systems current date and time, the default database connection, which operating system we are using and so on. Now, these client tags are unique in that they are not able to be modified. For example, if I try to write to this project update available tag, we'll get an error message letting us know the tag is read only if we try to edit the tag by double clicking on it, we are not brought to the tag editor, however we receive additional information about the tag. Right clicking on the tag doesn't give me the option to edit either as it's disabled.

**[02:06]** [02:06]
                                    However, you can utilize these tags in component bindings. For example, we could go to a vision window like this system tags window and set our tag provider to system. We could then open the same system folder and drag in the current date time to the window, and we'll bind it to a label component and you'll see the current daytime displayed on the window. Let's go back to our tag browser and move on to the gateway tags, which report information about the gateway. We can see, for example, the uptime seconds, so the number of seconds since the gateway last started. There's also some sub folders based on different functionality. So for example, if I go down to the redundancy folder, we see information such as the role of the gateway that's active. In this case, the master is active. If I go up to the performance folder, we can actually see resource wise how the gateway is doing. So for example, memory usage. Now a similarity between other types of tags and the system tags here is if I double click on the system tag, we do see our tag editor.

**[03:07]** [03:07]
                                    So I can make some configuration changes to these as well as create some alarms or turn on history. So if I wanted some trends of resource usage, I could simply turn on history here. Now, I'm not going to cover all of the different folders. A lot of them are somewhat self-explanatory, but we'll have them listed in the user manual, which I've linked below this video. Now, hopefully that gives you a good idea about what the system tags are. Again, there's not really a lot of configuration you need to apply to them. They do offer some useful information that otherwise is somewhat difficult to obtain.

</details>

---

### 19. Understanding UDTs Video at Inductive University

:::tip Video Link
Watch the video: [Understanding UDTs Video at Inductive University](https://inductiveuniversity.com/videos/understanding-udts/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll talk about a special kind of tag data type in Ignition known as the User Defined Type or UDT for short. User Defined Types allow us to take a custom created tag structure and treat it as a complex data type, something that we can associate with any number of actual tags in the tag browser. UDTs can be quite useful when some part of your desired tag structure is inherently repetitive. Maybe you have 10 motors and you need the exact same tags for each, or maybe you have 100 sensors that all have the same data points. When we create UDTs in cases like these, we provide a clean easy way of organizing and maintaining our tag structure. The first thing you do when working with a UDT is declare a UDT definition. A definition is effectively the master copy of the User Defined Type, and it should fully or mostly define how we want our custom structure to look. Once we set up a definition that outlines our structure, we set up any number of instances which inherit the structure of whatever definition they're derived from.

**[01:04]** [01:04]
                                    So if we have a UDT definition with a specific couple of tags, each UDT instance will have the same couple of tags. So just to reiterate, a definition declares a UDT structure effectively like a design specification, and then an instance is an actual collection of tags following that specification. Now to see UDTs in action, I'm going to find my tag browser here in the designer, on the left-hand side. Across the top of the tag browser there's two tabs, tags and UDT definitions. If I click over to my UDT definitions tab, we can see that a motor definition here. And if I expand it, I have two tags inside Amps and HOA. We call these our UDT member tags, and every instance of this motor UDT will include those two tags. Effectively, this is the structure we'd like to repeat. Now if I swap back over to my tags tab here, we'll see that we have five instances of our motor UDT, motors one through five here. If I click through some of these, we'll see that the structure is the same across different motors like we'd expect, but the actual values on the member tags are different. That's actually because we've set this UDT to include a parameter.

**[02:08]** [02:08]
                                    So if I expand this parameters field here, we'll see a MotorNum parameter inside. That value is being used in our Amps and HOA tag configurations to point to the correct motor, we'll explore this more in later videos. Now as configured here, our tagged browser is very organized, we have five clear instances containing tags for our five motors. But as we've mentioned, the other real benefit we're getting here is how easily we can maintain and update our UDTs when we need to. Say for example that we wanted to make a configurable setpoint for each motor, maybe as the basis for an alarm. Well, if I weren't using UDTs, I need to add a new tag manually for each of my motors here, but instead what I can do is go back into the UDT definitions tab, double click on my motor definition, and that will bring up the structure for the definition. And on here, all I need to do is click the little tag plus icon here to add a new tag into my structure. And we'll keep things simple and make it a memory tag here.

**[03:05]** [03:05]
                                    With that tag selected on the left hand side, I can see the properties on the right, so I'll find the name and change it to setpoint. And then I'll set the value on the tag to 20. Any properties I specify in here will be included in our UDT definition, including alarm, security, scripting and history settings. So if I wanted to I could set up alarms on every instances Amps tag or setup tag change grips on every instance is HOA tag, just by configuring it here in this interface. Now that my setpoint tag is set up, I'll click OK at the bottom. And then I'll find my way back into the tags folder and we can see that our setpoint tag has been added to each of our instances. We didn't have to configure the tag separately five times over, just doing it once in the definition is all it takes. We'll be exploring additional UDT features in later videos, but in general UDTs are a great way of keeping an organized and maintainable tag structure when any part of your tag structure is regularly repeated.

</details>

---

### 20. Creating UDT Definitions Video at Inductive University

:::tip Video Link
Watch the video: [Creating UDT Definitions Video at Inductive University](https://inductiveuniversity.com/videos/creating-udt-definitions/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    As we've discussed already, UDTs are custom complex types we can use to represent repeated tag structures in a way that allows them to be organized and maintainable. In this lesson, we'll focus on how we can create and configure these types which effectively means we'll be working with UDT definitions in this video. To create a new UDT definition, I'll find my tag browser here on the left-hand side and select the UDT Definitions tab. Once I have that tab selected, I can right-click within the main tag browser and select New Tag, New Data Type, or I can click the plus icon in the top left and select New Data Type from there directly. We can also create folders if we want to organize our UDTs a bit more. Selecting New Data Type will pull up this UDT definition editor, which comes in two parts. On the left-hand side, we have our type structure which allows us to declare member tags for our UDT. On the right-hand side, we'll see properties for any node we've selected on the left. So right now we have our type itself selected on the left.

**[01:03]** [01:03]
                                    So, to get us started, let's go ahead and create a name for our new type. How about we call it Sensor? And then, for our sensor type, we have some other options which we'll cover a bit later. But one thing I can do now is give my type a color, which will make it easy to distinguish my UDT instances inside by tag browser. So, how about I expand my color dropdown and select a nice shade of blue? It's worth noting that you can also bind this color and make it dynamic using the chain link icon here. Now that we have our UDT properties sorted out, I'm ready to add some member tags. So to do that, I just need to find this panel to the right of the type structure. I can use this panel to add folders, tags, or even nested UDT instances into my structure here. The element is just added immediately below the current selection in my type structured dialogue. So, since I have the root node selected here, if I wanted to add a tag to my UDT, I could just click the tag plus icon here, select the tag type and get rolling. Certainly, that's what I'd want to do if I was working with a memory, expression or query tag in here.

**[02:07]** [02:07]
                                    However, I happen to know that I'm going to be working with OPC tags for my sensor because my UDT is intended to model an actual device. With that in mind, I can actually select the fourth icon here which allows me to browse my connected devices. Naturally, this option will only be useful if your device supports browsing or for something like Modbus provided you've set up your address mappings yourself. Inside of here, I'll expand Ignition OPC UA Server, Devices, DairySim, Overview, and then scroll down until I find my three sensors. If I expand those sensors, we'll find that they contain the same humidity and temperature tags, which makes this a perfect time to use UDTs. In this case, I just want my definition to model a single sensor. And then, ultimately, I can create a UDT instance for each of my three sensors. So, to model just one sensor, I'll find Sensor 1 here, click on Humidity, then hold Ctrl, and Ctrl + click on Temperature, which will do a multi-select.

**[03:10]** [03:10]
                                    And then I'll click Add at the bottom. And that'll add two OPC tags into my structure. Now, it might seem like I'm done here because I have the exact tags that the sensor OPC structure calls for. However, there is one small problem. If I select the humidity tag here, which again is an OPC tag, and I find the OPC item path property on the tag, If I make that wide enough we'll see that the item path is set to Sensor 1. This makes perfect sense. It's the OPC item we selected in our picker a moment ago. However, our sensor data type isn't supposed to work for just Sensor 1. We want it to work against any of the sensors. So, in a way, this OPC item path can't be the same on every UDT instance. It's going to need to change in some way. Thankfully, UDTs can handle this innately, all we need to do is configure a UDT parameter which will be set whenever we make an instance of this type that can control what sensor we look at on the device.

**[04:05]** [04:05]
                                    To do this, I'm going to click the root node of my type structure, and find the parameters field on the right. On here, I'll click the pencil icon, and then click the plus icon to add a new UDT parameter. Now, we have a few different options for what parameter to use. We could ask for a sensor's name or an OPC item path to the sensor, but let's keep things simple and call our parameter, SensorNum. So we'll expect a parameter that's something like one, two or three that we can use to make our OPC tags work. Now, we have another couple of fields here, our data type is defined as integer, but other options are floating point and string. And then we have a value field. It might be tempting to put something in the value field, but remember, we're on the UDT definition here, and we're meant to decide which sensor to look at when we actually create instances. So it's fine to actually just leave that field blank on here. And with that, I'll click Commit.

**[05:03]** [05:03]
                                    We're almost done. We just need to go modify our humidity and temperature tags to use our new parameter. So, I'll select Humidity here on the type structure, and then find that OPC item path field. Now, on this field, I just want to change a single character. I want that one here to be replaced with the parameter reference. To do this, I can click the chain link icon on the right-hand side. And then, from there, I have a few options. Browse OPC will allow us to pick a new path. Parameter is probably tempting, but it'll replace the entire field with the parameter. Remember, I just want one character changed. So, I'll actually be clicking Edit here. And now we're given the full OPC item path and a curly brace icon on the right-hand side for adding parameters into the path. All I need to do is find that one in there, delete it, and then without changing my text editor position, I'll click the curly braces and then find my parameter, so, SensorNum. That's all we need to do to move on here, but it's worth noting that any part of the OPC item path can be made dynamic, including the device name in the square brackets, or the item names themselves, or even the entire item path.

**[06:13]** [06:13]
                                    That's it. Our approach is good as is, so if I hit Commit, I just need to do the exact same thing on the Temperature tag. I'll select the tag, find the OPC item path, click the chain link icon, Edit, find the one and delete it out, then use the curly braces to bring in SensorNum, and then finally hit Commit. And now our UDT is all set up and ready to deploy across our tag structure.

</details>

---

### 21. Manually Creating UDT Instances Video at Inductive University

:::tip Video Link
Watch the video: [Manually Creating UDT Instances Video at Inductive University](https://inductiveuniversity.com/videos/manually-creating-udt-instances/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll talk about creating UDT instances. If you've been following along with prior videos under this topic, we're going to pick up right where we left off with our sensor type, which includes humidity and temperature tags as we see here. I would like to create an instance of this sensor UDT, which again is separate from a UDT definition. To create our instance, I need to find my way into the tags tab since instances live with the rest of our tags, not with the definitions, which are more like designs than actual tags. Once I'm here, I can add a UDT instance in effectively the same way I'd add another tag. Clicking the tag plus icon at the top of the tag browser will expand a dropdown for us. And from there we'll select data type instance, and then sensor. This will bring up the tag editor, which looks pretty similar to the UDT definition editor, except that we're now dealing with tags for an actual sensor.

**[01:00]** [01:00]
                                    I'll begin by giving the sensor a good name, something like sensor one, hitting the enter key when I'm done, which will change the name in the type structure. Now, believe it or not, we're nearly done with creating our instance. The last thing we need to do is specify values for any parameters our UDT is relying on. So I'll find the parameters field here and then click the pencil icon on the right-hand side. All of the OPC tags in our sensor type are relying on the SensorNum parameter here to decide which sensors items to look at. Since I'm setting up an instance for sensor one I'm just going to set the value here to one, then hit enter and click commit at the bottom. And that's it. Our UDT definition has already been set up to take care of the rest, so I can click okay at the bottom to finish creating the instance. And we'll see right away in the tag browser that our instance is working. To create additional instances we could run through the same interface again or copy and paste the instance changing the parameter for each paste. We'll also look at more advanced ways of creating many instances at once in a later video.

</details>

---

### 22. UDT Multi-Instance Wizard Video at Inductive University

:::tip Video Link
Watch the video: [UDT Multi-Instance Wizard Video at Inductive University](https://inductiveuniversity.com/videos/udt-multi-instance-wizard/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In the previous lesson, we looked at how we can create UDT instances by hand, in much the same way we would create any other tag type. While that approach was straightforward, it did require some manual effort to set up our instance, a couple of clicks of the mouse and a little typing. Of course, if you're accustomed to working with hundreds or thousands of tags, you know that even just a couple seconds of mouse clicks and keyboard input can really add up over time and anything we can do to automate the tag creation process could pay dividends in development time while staving off human error. In that spirit, we'll take this lesson to explore a competing way of creating UDP instances designed for scale and ease of use. We'll be using a tool called the Multi-Instance Wizard which simply put, allows us to spin up many instances of a UDT in a single action. Now, the first step as in our last video is to have a UDT definition created. We'll be using the sensor UDT we made earlier in the series. Since we already have that, we're ready to get our instances up and running.

**[01:05]** [01:05]
                                    To pull up my multi-instance wizard, I'm going to begin by finding my tag browser and right clicking wherever I want my new instances to live. If I right click on a tag in the root folder of my provider here I can put the instances right at the roots but I have this nice little sensors folder set up already. So if I right click on that folder, I'm just going to select the Multi-Instance Wizard. And as my wizard comes up I'm going to make it a little bit larger. Now there are two parts to working with the Multi-Instance Wizard, in step one here we select a data type to use for our instances. Since I only have the sensor data type that will be selected automatically. After that step two here is the real heart of the interface. What we do is decide how we want to name our instances and also what parameter values we'd like to pass to them. We'll begin by specifying our instance names and we have two fields here for that. I think I'd like the names for my instances to be sensor one, sensor two and so forth. So they'll all start with the word sensor and then have a number at the end that will need to be specific to each instance.

**[02:06]** [02:06]
                                    This interface happens to be set up perfectly for that format. The base tag name field here lets us specify a starting set of characters that all of our instance teams will share. So here I'll just type sensor and now we're ready for the more complicated bit. The number at the end of each of our names, for this will need to be tag name pattern field here. This allows us to configure a dynamic piece of the tag name and it accepts a few different formats which we can see in our little box here at the bottom. One of the options is a range pattern which just allows us to specify a numeric range like one to 10 or zero to 99. This actually works perfectly for us here because we have three centers total and I just want them to be numbered one to three. So in my tag name, pattern field I'll just type one dash three. I can include a step size if I want the pattern to be something other than sequential numbers. Though I won't be needing them here. There are two other patterns available as well.

**[03:03]** [03:03]
                                    The list pattern allows you to type out a comma separated list of values to use. And the repeat pattern just allows you to use the same value for as many instances as you specify. As the note suggests here, you can also mix and match the range and repeat patterns inside of a list pattern. So with that said, our work isn't quite done yet. We have our names set up the way that I'd like but I also have a UDT parameter that each of my instances needs to have populated. If you've been following along with our UDT videos, you know that the SensorNum parameter is driving the OPC member tags in our UDT and it's essential that we populate it correctly. Each of my UDT instances is going to need a different value here. Sensor one should have a value of one. Sensor two should have a value of two and sensor three should have a value of three. To do that all I need to do is find my pattern field here for the parameter, double click to enter the cell and type one dash three again, the same pattern our name uses. Once we do that, the interface is smart enough to know that we'll be creating three instances so it shows the size as three.

**[04:05]** [04:05]
                                    Now, if I were to click okay here, our instances would be spin up right away. But if I want to check my work before I create the tags I can hit the preview button in the bottom left. That'll show us the tag names and parameters for using, for our created instances. And in fact, looking at the preview here, if I want to put a space character between the word sensor and the number for that sensor, that isn't too hard to do. If I click the back button here and go back into our configuration, I can just find the base tag name field and I add a space at the end. And that's it. So now if I click, okay I can find my sensor's folder in the tag browser, expand it and we'll find three new instances. Browsing through them, we'll see that they're complete with different values on that SensorNum parameter. That's all there is to using the Multi-Instance Wizard. It's a great way to create many UDT instances at once with just a few clicks.

</details>

---

### 23. Overriding Properties in UDT Instances Video at Inductive University

:::tip Video Link
Watch the video: [Overriding Properties in UDT Instances Video at Inductive University](https://inductiveuniversity.com/videos/overriding-properties-in-udt-instances/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    When configuring UDTs and UDT instances, we can control all of the important properties of our UDT instances using UDT parameters. However, sometimes it might be necessary to manually change tag properties for a specific UDT instance. Maybe we want to change alarm set points for a specific device, or maybe we want to add in some custom scaling options to correct for a device discrepancy. Whatever the reason, it's easy in ignition to make localized changes to specific UDT instances. To demonstrate, I have a sensor UDT instance here. We created an Explorer, this UDT in previous videos, but I've added a tag for this example. So our UDT is now showing humidity, temperature, and pressure tags for a given sensor. And it's using the SensorNum parameter to decide which one to show data for. So for instance, if I expand this pressure tag in sensor one, we see that it's tied to sensor one's pressure item on our simulator. Now this is working just fine.

**[01:02]** [01:02]
                                    If I expand the sensor to instance right below it, we can see that our tags are looking good in sensor two as well. But if I expand sensor three, we'll note that we're not getting that pressure tag coming through correctly. To see why this is the case, I'm going to click the plus icon at the top here, and select browse devices. Just so we can see what our OPC structure looks like. I'm going to dive into devices, dairySIM, overview, and then find my sensors a little ways down here. And if I expand my instances, we'll see that sensor one and sensor two have pressure tags called pressure, and sensor three's tag is just called press. Since the UDT is set up to use an OPC item called pressure, it's not going to find this press item on sensor three. So we'll have to find a way to correct it. Now, maybe a simple inconsistency like this, is something we could and should fix on our PLC. But it's easy for us to handle this in ignition as well. And the technique we're about to see could be used for many other data or structural inconsistencies too. To correct our problem here, I'm going to find the sensor three instance in my tag browser, and double click to pull up the configuration for the tag.

**[02:08]** [02:08]
                                    In here, I'll select the pressure tag, and we'll notice that each property in the tag editor, has a small gray circle next to it. This gray circle indicates that the value on the property is coming from the UDT definition, and parameters on this instance. But that said, this interface gives me the ability to change that. I can change any properties I'd like, but the one I need to change, is the OPC item path. So to do that, I'm going to find that property, click the chain link icon on the right hand side, and then select to edit, which will let me change. The reference has been configured on the property already. So in here, we're building an OPC item path from the sensor numb parameter. And all I need to do is change this final item here. So I'll find pressure, and change it to just press. And then I'm going to hit commit. So it's important to note here that what I've done is make a change to this specific instance. Just as sensor three instance, living in the sensors folder. None of the other sensors is affected, and the UDT definition has not been changed.

**[03:05]** [03:05]
                                    We'll see here that the gray circle next to the OPC item path has turned green, indicating that the property has been overridden for this instance. So now we can test out our changes, by hitting okay, here. And when we do, we'll see that the correct value has come through on the pressure tag. So you know our override worked. We'll also see a small half-filled circle icon, appear next to the tag. Indicating that the tag property has been overridden. And with that, I'd like to talk about one very important consideration in this process. Since we've made this change to sensor three, the UDT definitions value for that OPC item path property, is going to be ignored on that instance. Which includes any changes that might be made in the future. In other words, that OPC item path property on the pressure tag, in the sensor three instance, can only be changed directly by hand on that instance. It cannot be changed by modifying the UDT definition. However, if we wanted to revert this, that's a relatively simple process. We just go back into the tag editor for our pressure tag.

**[04:03]** [04:03]
                                    And if we click on the green circle, that we'll remove our override and set the property value back to the one controlled by the UDT definition. So that's all it takes to make changes to a specific UDT instance. Overriding UDT instances is a great approach, when there's a one-off problem with a specific UDT instance, when you want to create a test case, or when a specific instance just needs a slight tweak. In later videos, we'll look at some more complex ways of working with UDTs, including a way of overriding or modifying a UDT, that is more globally manageable.

</details>

---

### 24. UDT Inheritance Video at Inductive University

:::tip Video Link
Watch the video: [UDT Inheritance Video at Inductive University](https://inductiveuniversity.com/videos/udt-inheritance/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    One novel way of varying the structure of a UDT, to more closely match the specifics of your setup, is to use UDT inheritance. UDT inheritance is a feature available when designing UDTs, that allows us to base the starting structure of one UDT, off of another UDT definition. If we have several changes, we want to make to some but not all instances of a UDT, inheritance can be a great way to implement those changes in an organized way, without using UDT overrides on instances directly, which can be difficult to manage at scale. To demonstrate, I've got a sensor UDT instance here, and it's working just as expected, giving me back humidity and temperature tags. I'd like to create a new kind of sensor UDT, based off of this UDT, then incorporates some additional features. So to create our new UDT, I'm going to navigate to my UDT definitions tab, click the plus icon at the top, and select new data type. And the name of my new data type is going to be, fancy sensor.

**[01:06]** [01:06]
                                    In effect, what I'd like to do for this UDT is start from the sensor UDT, but then incorporate a pressure tag for my PLC. So we're imagining here that we have some simple sensors that keep track of humidity and temperature, and then some fancier sensors that also include a pressure tag. So in order to configure inheritance here, I'm going to find the parent data type property, expand the dropdown, and select my sensor data type. Once we do that, we see that our fancy sensor UDT, is inheriting from the sensor UDT. What that's going to do is pull through the entire configuration of the sensor UDT, into this UDT. Although in order to see it, we'll need to click the refresh button in the top right. And now we'll see that our humidity and temperature tags appear on the left. However, we've done a bit more than just copy one UDT definition onto another. This UDT is now built on top of that existing type. And if the sensor UDT is ever changed, those changes will be reflected on the humidity and temperature tags here.

**[02:05]** [02:05]
                                    Now that we have that setup, we can configure tag property overrides, introduce new tags or alarms or history, change UDT properties, and so on. In my case, what I'd like to do, is just add an additional tag to show pressure. And I'll be doing it in the same way we did when we first created the sensor type in previous lessons. So I'm going to select the route of my UDT structure, then find and click the browse devices icon on the right, drill into my OPC UA server, find devices, dairySIM, overview, then scroll down and find my sensors. Expand sensor one and select the pressure tag, then hit, add. And with that done, I just need to configure the item path correctly. So I've pulled through the pressure tag from sensor one, but I need to modify the final path to use my sensor numb parameter, instead of just being for sensor one. So I'm going to click the icon next to OPC item path, and click edit.

**[03:05]** [03:05]
                                    Then I'll find the one in here, delete it, and replace it with a parameter reference to sensor numb. And that's all it takes to configure the pressure tag I'd like to use. So I'll click commit and then click okay. So let's conclude by creating an instance of our new data type. I'm going to navigate to my tags tab, and then click the plus icon at the top, select data type instance, and then fancy sensor. Once the tech editor comes up, I'll name my new instance, fancy sensor one, and then all we need to do, is configure the sensor numb parameter. It's worth noting that we never specified this parameter on the fancy sensor UDT. It came directly from the parent UDT. So let's set a sensor numb of one and then click commit, and click okay. And now if we expand our new UDT instance in the tag browser, we can see that all three tags are working as expected. On a final note, there is one more neat feature behind UDT inheritance. If I ever configure a custom property in vision or perspective that requires our sensor UDT type, I can pass to that property a fancy sensor type and it will work just as well.

**[04:11]** [04:11]
                                    So in addition to helping with organizing and maintaining UDT structures in my tag browser, UDT inheritance can also make project development simpler, in both vision and perspective.

</details>

---

### 25. Nested UDTs Video at Inductive University

:::tip Video Link
Watch the video: [Nested UDTs Video at Inductive University](https://inductiveuniversity.com/videos/nested-udts/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    When configuring UDTs, Ignition offers us the ability to add a UDT instance as a member of another UDT, that is, we have the ability to nest UDTs inside of each other. This can be particularly useful when working with larger or complex UDTs, or when we have a few UDTs that we'd like to combine into one. To demonstrate, I'll be working with the sensor data type we've been exploring in earlier lessons. Our sensor data type has temperature, pressure, and humidity tags, and uses a SensorNum parameter to hook the tags up correctly to OPC items. for this lesson, let's imagine that we're working with sensors for tanks containing some kind of gas. We'll devote this video to creating a new data type for the tank, which includes the sensor data as well as some supplemental tank info. Since we already have our sensor structure sorted out, let's create our tank UDT. So I'm going to find the UDT definitions tab, in the tag browser, and click the plus icon at the top, then select new data type.

**[01:05]** [01:05]
                                    The first thing that we'll need is a name for our type. So I'm just going to call it tank. Now I want the tank UDT to take a parameter, because it's going to use my sensor type, and my tank will need to know which sensor to use. So next to parameters, I'm going to click the pencil icon, and then I'm going to hit the plus icon, to add a parameter, and let's just call it sensor. It's just going to be a number, but I'm going to resist calling it SensorNum, for reasons that will become clear. And finally, I don't need to set the value inside the definition. It will be set on each instance of the UDT. So I'm just going to hit commit. The first member I'm going to add to my UDT is a volume tag. Something that will just keep track of the capacity of the tank. My PLC isn't giving me this value. So I'm just going to make a memory tag for it. I'll make sure I have the route of my tag structure selected. And then I'm going to click the plus tag icon, and add a new memory tag.

**[02:02]** [02:02]
                                    Once that tag is added, I'll give the tag a name, so maybe volume, and then I'll just set a sensible default value on the tag. Something like 50. Now that we have some information for the tank, let's add our sensor UDT into the structure. So I'll click the third icon here, the stripes tag icon, which will allow me to select a UDT to embed. So in this dialogue, we have a filter along the bottom if we need to, but I'm just going to select my sensor UDT directly, and click okay. I'll begin by naming this UDT instance. So I'll just find the name field here and set it to sensor. Now remember this sensor UDT, does take a parameter called SensorNum, and we've configured a sensor parameter on our tank UDT that we want to pass through. So to configure this, I'm going to specify a value for the SensorNum parameter in the nested UDT. So I'll click the pencil icon here, and find the SensorNum parameter. Note that when we're referencing a UDT parameter, we need to include it in curly braces.

**[03:03]** [03:03]
                                    So the reference should be sensor, like this, but that's all that we have to do to pass a parameter from the outer tank UDT into the inner sensor UDT. Now one important note here, I could actually use my outer parameter in my inner UDT directly. I don't necessarily have to do this pass through. However, this allows the sensor UDT to stand on its own if we need it to. On a related note, if my inner and outer parameters have the same name, the inner one would be used, wherever the parameter is referenced inside this nested UDT. I've taken care of how to use different names for the parameters, just to avoid confusion here. So with that, I'm going to hit commit. Now all we have to do to create our data type, is hit okay. And we see that the tank data type has appeared. I'll conclude by creating an instance of my data type. So to create an instance, I'm just going to find the tags tab, then click the plus icon at the top, select data type instance, and then select tank.

**[04:04]** [04:04]
                                    I could just call this tank two. And then let's specify the sensor parameter. So clicking the pencil icon here, and let's just set a value of two, then we'll hit commit, and then, okay. We can see that our UDT instance has been created. And if I expand it, and then expand the sensor instance, we can see that all of the values are coming through successfully.

</details>

---

### 26. Tag Group Overview Video at Inductive University

:::tip Video Link
Watch the video: [Tag Group Overview Video at Inductive University](https://inductiveuniversity.com/videos/tag-group-overview/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    All tags in ignition have some concept of execution. A status code from the PLC is only valuable if they get new values occasionally. To implement and organize the idea of tag execution, ignition has tag groups. A tag group is a collection of tags that share the same execution logic. So let's create a new tag group. To do that we'll open up the tag group editor and note that each tag group is for a particular tag provider, and you can see that it says for provider default here. Each provider starts with a couple of tag groups and default and default historical. And if you select default, you can see that this one is using a mode of direct in a rate of 1000 milliseconds. We'll talk about the mode in just a moment. Now I'm going to add a new tag group by clicking on the plus icon here. Then I'll give my new group a name. And I can select the mode. I'll use direct but we'll cover driven and leased modes in future videos. Now a direct mode allows our tags to run at a specific rate all the time. So for example, I can type in 5,000 milliseconds and that means, every time we'll get a new value, every five seconds. Now, the primary reason for a tag group is to control the mode and rate of execution, but there are other properties here. The data mode will allow us to choose a subscribed or polled mode. Subscribed means we're going to ask the OPC server to get a tag value at a particular rate. Whereas polled means, every five seconds, we would ask for a new value. The subscribed mode is more efficient but the polled mode gives us more precise control over how we ask for our tag values. I'll go ahead and select polled here for our data mode. The read after write setting, if we change that to true, it will force a read for this tag after every time you write to it. And this is really useful when you have a very slow tag group. So that way you'll pull in the new tag information very quickly, instead of waiting until the next execution. The optimistic writes setting will allow us to immediately assume that the value wrote correctly and the write time out there will say that if it doesn't confirm that it's written correctly by this timeout, then it'll revert the value. Now I'm not going to talk about all the different properties here and specifically we'll cover a history properties when we talk about tag history. These are specific to when this group is being used for storing tag history. So I just set a name and I have a direct mode with a rate of 5,000 milliseconds. I'll go ahead and click okay. And that will create our new tag group. To use that new tag group, I do have to go and select to one or more of my tags. I can double click it to edit that particular tag. And then you can see it's running at a one second rate because our tag group is using the default. I can change this tag group to use my new tag group, my tag group, and then hit apply. And then you can see if we watch our executions here, now it'll be running at a five second rate, instead of a one second rate. We'll talk more about the other two types of tag groups in future videos.

</details>

---

### 27. Driven Tag Group Video at Inductive University

:::tip Video Link
Watch the video: [Driven Tag Group Video at Inductive University](https://inductiveuniversity.com/videos/driven-tag-group/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Sometimes we don't want our Tags to execute 24/7, we want to execute at different rates at different times based on some condition. For this ignition has a Driven Tag Group. Tags and Driven Tag Group will execute at one rate when the condition is true. And another rate when the condition is false. You can see I have these pressure and temperature Tags derived from the PLC, as well as a machine status Tag. These Tags are running at a one second rate, and that's fine. But when the machine is turned off, I'd like to turn down the polling rate a bit, or maybe even stop polling completely. To do this, we'll open up the Tag Group Editor. And you can see we have our default Tag groups. But I'm going to add another one. And I'll name it Driven Tag Group. And we'll change the mode to driven. Now once we do that, you can see that a few other properties pop up. Namely, we now have two rates, our regular rate and our Leased/Driven Rate. The Leased/Driven Rate is the one that's going to run when our driving comparison is true. And the normal rate is how often will run when the driving comparison is not true. Now for our comparison to work, we'll have to fill out all three of these properties. And I'll set my driving expression to be based on that machine status Tag, we can click on the Edit icon on the right. And then we can select our machine status Tag. And this is all I need in here. So hit Apply Changes. And we want to change a rate based on when the machine status Tag is true. So I'll have a comparison of equal and a value of one. So when our machine status is equal to one, now I'll leave our Leased/Driven Rate at one second. So when a machine status is one, we'll run at one second rate. But when it's not true, then we'll run at a different slower rate. And I'll set that to 5000 milliseconds or five seconds. Now, before I hit OK, I wanted to mention this One-Shot property. If this is true, then when our driving comparison becomes true, we will collect the Tag values once rather than at the rate, then the Tag group will wait for the comparison to become false and then true again, to collect the Tag value one more time. We'll leave that as false, and then hit OK to submit our group. Now you can see our Tags are still running at that one second rate. But this is because we haven't actually assigned our new Tag group to these Tags. We'll select both Tags, and then go and edit the Tags. And then you can see here we'll have our Tag Group, we'll set it to the new Driven Tag Group that we just created. And then when we hit OK, then you can see that these Tags are going to start running at a different rate because our machine status is off. If we turn our machine status back on, then you can see that they will move into the faster rate and start running at a one second rate again. Now what if I want to do something a little bit different until these Tags do not run at all when the machine is off. To do this, we can go back and edit our original Tag Group here. And we can set our rate to a value of zero. That means don't collect the Tag values while we're off. I'll hit OK down at the bottom. And then if I change my machine status to false, then you can see the Tag values will stop updating. In future videos, we'll look at additional applications for these Driven Tag Groups.

</details>

---

### 28. Leased Tag Group Video at Inductive University

:::tip Video Link
Watch the video: [Leased Tag Group Video at Inductive University](https://inductiveuniversity.com/videos/leased-tag-group/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Ignition offers a built in way of executing at one rate, when a tag is being viewed in a client session or designer, and another rate when it's not. Now this is useful when trying to minimize the use of network or PLC resources by only subscribing at the faster rate, when tags are in demand. We can do this by using a leased tag group. So let's start by configuring a new tag group. We'll go into our tag browser and click on the edit tag groups button. I'll add a new tag group by clicking the plus icon in the upper right. And I'll rename it to "Leased Tag Group". I'll change my mode from direct to leased. And you can see now we have a rate and a leased/driven rate. The leased slash driven rate, is the rate at which the tag data will be fetched when the tags are in demand or being viewed in the client session or designer. And the original rate is the rate that those tag values will be fetched when the tag is not in demand. I'll make this rate a little bit slower. So I'll set it to something like 5,000 milliseconds or five seconds. And then we'll come down to the bottom and click okay. Now I can set my temperature tag to use that new tag group. So I'll change it to my at leased tag group and then come down and hit okay. And then you can see that my temperature tag will now start running at a slower five second rate. Now, if I want to see this run at a quicker rate then all I need to do is drag my temperature tag onto my view here. And I'll have it display as an led display component. And now, because this tag is in demand, it's being viewed on a view. Then we will see that our value updates at the quicker rate. All I need to do to change it back to that slower rate, is remove it from my view. And then now you'll see that in our tag browser, it slows back down. So you can see, this is a very easy way to reduce the load on your resources, when tags aren't in demand.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
