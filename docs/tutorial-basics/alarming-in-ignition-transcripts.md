---
sidebar_position: 10
---

# Alarming In Ignition - Video Transcripts

This page contains transcripts from the alarming-in-ignition video course.

## Overview

These transcripts are automatically generated from the [alarming-in-ignition Course](https://inductiveuniversity.com/courses/ignition/alarming-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 2:40:57 PM
Source URL: https://inductiveuniversity.com/courses/ignition/alarming-in-ignition/8.1
:::

## Video Transcripts

### 1. Configure an Alarm Video at Inductive University

:::tip Video Link
Watch the video: [Configure an Alarm Video at Inductive University](https://inductiveuniversity.com/videos/configure-an-alarm/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Because tags in the Ignition allow us to control and monitor connected devices the platform also offers an automated way of monitoring tag values for specific conditions. For example, let's say we have a tag configured to show the pressure in a tank. When the value on that tag becomes too large we'd like operators on the plant floor to immediately know there's a problem. The system we use to handle this in Ignition is called Alarming. We can configure Alarms on tags, then configure an Alarm notification set-up to let plant personnel know when something is wrong. In this course, we'll explore many facets of Ignition Alarming but for now, let's just walk through configuring an Alarm on a tag. So for starters I have a tag in my Tag Browser here, called Pressure. It's an OPC tag and my goal is to configure an Alarm on this tag that will become active if the value on the tag exceeds 50. So basically, I want people to know if the value on this tag gets too high. To configure this, I'm going to right-click on the tag. And, select Edit Tag. And, then I've already scrolled all the way down to the bottom here in the Tag Editor. We see we have an Alarm section. And, to configure a new Alarm I'm going to click the icon on the right. From here we can configure one or more Alarms on our tag. Each Alarm will become active under independent conditions that I can configure here. To add an Alarm I'm going to click the + icon here. And, now that our Alarm is created, we have the opportunity to configure many properties on the Alarm. For starters, let's set the name of the Alarm to High Pressure Alarm. Let's also set the Priority property. This controls, essentially, how important this Alarm should be. So if I expand the drop-down here, we have five priorities to choose from. I'm going to choose the most severe one for this Alarm. We can also specify a Label property as well as a Display Path property. These properties provide us the chance to override the Name and Source Path properties. Basically, they replace them with more human-readable ones. Other properties here deal with Alarm acknowledgement and shelving. Basically, we can control whether operators can acknowledge this Alarm as well as whether they can shelve it, meaning put it off for a little while. And, then if I scroll down a little bit here, we have Alarm Mode Settings. These are the most critical settings on the Alarm. They control when the Alarm becomes active. So remember, I wanted this Alarm to become active when the value on the tag exceeded 50. So for that, I'm going to specify a Mode of Above Setpoint, and then the setpoint will be 50. If I wanted to, I could make the Setpoint dynamic by clicking the icon here, and then I could configure this property to look at a tag or expression. I'm just setting it to a static 50 for now so I can go back. And, again there are many more properties here. We're not going to get into all of them in this video. We've already configured enough to get our Alarm up and running. So I'm just going to click Commit here. And, then I'm going to click OK. We can now see in the Tag Browser that an Alarm icon has appeared next to our tag and now let's manually trigger our Alarm. So I'm going to write a value to this tag of 55. And, I have a vision window open here with an Alarm Status Table component on it. Here we can see details about any recent Alarms. Note that because our Tags Alarm condition is met an Alarm has appeared in the Alarm Status Table. Now let's say the pressure is reduced. So I'm going to write a value of 45 to the tag. The Alarm condition is no longer met so the Alarm goes to a cleared state. Then if the tag goes back into Alarm, so I'll write 60 this time, we don't revive the same Alarm instance. We create a new instance of the Alarm. So this covers the basics of configuring an Alarm in Ignition. Throughout this course, we'll take a deeper dive into many different aspects of Alarming, including working with Alarm Status Tables, like this one and configuring Alarm Notification so that operators can know when Alarms become active.

</details>

---

### 2. Dynamic Alarm Setpoints Video at Inductive University

:::tip Video Link
Watch the video: [Dynamic Alarm Setpoints Video at Inductive University](https://inductiveuniversity.com/videos/dynamic-alarm-setpoints/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                     In a previous lesson, we learned how alarms can be configured on Ignition Tags to alert Ignition users that there is something wrong in their facility. To configure an alarm on a tag, we simply right click on the tag, select the Edit tag menu and scroll all the way down to the alarming section where clicking on the little pencil will bring up the alarm configuration window. Here, I can add as many alarms as I want on this specific tag, but most importantly, I can define my alarms mode, which allows me to tell the system what condition must be met for my alarm to be considered active. For my pressure tag here, I can set my alarm to have an above setpoint mode and a setpoint value of 50. Now, every time my pressure value goes above 50 PSI, my alarm condition will be met and my alarm will become active.

**[01:04]** [01:04]
                                    This setpoint value is statically configured to be 50. What I can do instead of a static configuration is bind this setpoint value by clicking on the chain link icon we see here. I can bind the setpoint to either a tags value, or I can define an expression that evaluates to my setpoint value, therefore, making it dynamic. With the tag binding, I have access to every tag in my gateway. And with an expression binding, I have access to the entire Ignition expression language to derive my setpoint value. Now I will close out of my alarm configuration window for just a few minutes. For this example, I want this pressure tag to have two alarms. I want it to have a low pressure alarm and high pressure alarm. But before I configure those alarms, I want to define two memory tags that I will use to configure my dynamic low and high setpoint values.

**[02:03]** [02:03]
                                    I will click on this plus sign here in the Tag Browser and create a New Standard Memory Tag, which I will name Lo SP and give it a default value of 20, and press OK. I will do the same once more and create a New Standard Memory Tag, which I will name Hi SP and give it a default value of 95 and press OK. Now that I have defined my setpoint tags, I will double click on my pressure tag to bring up its tag editor. I will head down to the alarm section and click on the little pencil to configure my alarms. I want to first create my low pressure alarm. So I'll press the plus sign here and define my alarm to be named low pressure. I will make this a critical alarm and set it's mode to be below setpoint. I will now bind my setpoint to a tag, which tag my Lo SP memory tag that I created earlier.

**[03:11]** [03:11]
                                    I will now press the plus sign once more to add my second alarm that I will name high pressure. This will also be a critical alarm and we'll have a mode of above setpoint. I will again bind my setpoint value to a tag using the chain link icon as before and selecting my Hi SP memory tag. I will now press Commit to save my alarm configuration and click OK to save everything. Now, my pressure value is set to 50, which is outside my defined alarm range, but I can set my pressure value to say 120. I can see immediately on the right hand side in my Vision alarm status table that my high pressure alarm is now active. I can however, change my Hi SP time's value to say 150 since my pressure value is not above my newly configured setpoint.

**[04:12]** [04:12]
                                    My high pressure alarm is no longer active. Similarly, if I set my pressure value, just say 10, my low pressure alarm becomes active. I will now configure my Lo SP value to be five. And since my pressure value is not below my newly configure setpoint, my low pressure alarm will no longer be active. Having dynamic setpoints allows you to configure your alarm's active condition by writing two tags or evaluating expressions, instead of having to alter the tags configuration directly.

</details>

---

### 3. Configure Alarm in UDT Video at Inductive University

:::tip Video Link
Watch the video: [Configure Alarm in UDT Video at Inductive University](https://inductiveuniversity.com/videos/configure-alarm-in-udt/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will explore the configuration of alarms in complex tags or UDTs. Since UDTs are comprised of other standard tags, it is possible to configure alarms on any of the tasks inside of the UDT. The benefit of using UDTs is that they are defined in one place, and every instance of the UDT automatically inherits the configuration of its definition. In other words, if I configure an alarm on one of my tags within the UDT definition, this alarm configuration will automatically propagate to every running instances of this UDT definition. Here in my designer's Tag Browser on the left, I see, I have four instances of a Motor UDT. Motors, one, two, three and four. Heading over to the UDT Definitions tab, I will see my Motor UDT definition.

**[01:06]** [01:06]
                                    I will double click on it to bring up its editor. Here, I can individually configure not only my UDT itself, but any member tags within it. Specifically, I want to configure an alarm on my Amps tag here. So I will select it, I'll scroll down to its alarm section and press the little pencil to configure my alarm. I will now press the little plus sign here to add a new alarm to my tag. And I will name this alarm, High Amps. For its display path, I could do something like this, High Amps Alarm. The problem with this is that every one of my motors, one through four, will share the same display path, making it more difficult to tell their alarm events apart without looking at their source path. For this reason, I can use the little chain link icon to bind my display path to an expression.

**[02:08]** [02:08]
                                    In my expression, I want to use my Motor UDT parameter, which in this case represents my motor number. So if I set my expression to Motor space, remember these are strings, so they need quotations around them. Plus, now I can click on the little UDT icon to insert a reference to my Motor number UDT parameter. I will then do another plus and concatenate the following string. Space, High Amps Alarm. This way, my display path will be dynamic and it will work for any and all motors in my tag system. I should point out that leaving the display path blank will automatically default its value to the source tag's path followed by the alarms name that was triggered. I am happy with my display path, so I will click the Back button and I will now configure my alarms mode to Above Setpoint and give my setpoint a static value of 60.

**[03:14]** [03:14]
                                    In future lessons, we will learn about dynamic setpoints, but a static setpoint will do for now. That's it. I'm going to press Commit and then press OK. And now the alarm I configured it in my Motor UDT Definition should have propagated to every single instance of my Motor UDT. To see this, I will quickly head back to the Tags tab and refresh my Tag Browser by using this refresh button. And I will drill into each of my Motor UDT instances where I will find a bill icon next to all my Amps Tags, which tells me that my alarm configuration worked. If I add a new motor, of course, that's also going to have the same Amps alarm configuration. As you can see from the Vision Alarm status table on the right, some of my motor alarms are getting triggered already.

**[04:06]** [04:06]
                                    Just like that, I was able to configure four alarms for four different motors by configuring one alarm in just my UDT Definition.

</details>

---

### 4. UDT Alarm Dynamic Setpoints Video at Inductive University

:::tip Video Link
Watch the video: [UDT Alarm Dynamic Setpoints Video at Inductive University](https://inductiveuniversity.com/videos/udt-alarm-dynamic-setpoints/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will learn how to configure an alarm with dynamic set points in a complex tag or UDT. You can learn more about UDTs in the Understanding UDTs lesson. Here my designer, we can see in my tag browser four instances of a motor UDT. Motors one through four. Each motor contains an amps OPC tag with an alarm configured on it. Let's head over to the UDT definitions tab in the tag browser, and take a look at how this alarm is configured. I will double-click on the motor UDT definition to access its amps member tags configuration. Once here, I will scroll down to the bottom where I will find the alarm section. I will click on the little pencil to be greeted by my high amps alarm definition, where we will find a static set point value of sixty.

**[01:08]** [01:08]
                                    This means that if my amps tag goes above sixty for any of my motors, that motor's alarm will become active. What if I wanted each individual motor to have its own independent set point value? Maybe motor one has a higher amps tolerance, and we can afford to have a higher set point. To achieve this, let's first press the revert button and head back to our UDT settings. Since I want each motor to have its own independent set point, I will create a new memory tag in my UDT definition. I'll select the UDT, then press the add tag button and choose to add a memory tag, which I will name amps SP and give it at the full value of 9,000. This memory tag can now be referenced by the set point value in our high amps alarms definition.

**[02:06]** [02:06]
                                    Let's set that up really fast. Also like my amps tag, head down to its alarming section to bring up my high amps alarms definition. For its set point, I will ditch the static value of sixty and use the bind button to bind my set point to a tag; not just any tag, but my newly defined amps SP memory tag. Of course, I also have access to all the other tags in my UDT and also every single tag in my ignition gateway. Now I will press the back button and commit my changes, then press OK to save everything. Each of my motor UDT instances has its own independent set point, which I can control by simply writing to their corresponding set point tag like so. You will note that as I lower the alarming set point for all my motors, each motors high amps alarm will become active.

</details>

---

### 5. Multiple Alarms on a Tag Video at Inductive University

:::tip Video Link
Watch the video: [Multiple Alarms on a Tag Video at Inductive University](https://inductiveuniversity.com/videos/multiple-alarms-on-a-tag/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will explore the ability to configure multiple alarms on a single Ignition tag. Here in my designer I have a level OPC tag that tells me the level in liters of one of the tanks on my plant floor. I will be configuring multiple alarms on this tag so let's double click on it to bring up its editor. I will scroll down to the alarming section where I will click on this little pencil to bring up the alarming configuration window. First, I want to configure a high level alarm so let's do that. I will click on the plus sign to add my alarm. I will name the alarm high level. I will give it a critical priority. And for my alarm notes, I want to include something to give operators a bit of information as to how to resolve this problem. So I will say, tank level is high, open overflow valve.

**[01:05]** [01:05]
                                    I will then set its mode to be above setpoint. And for my setpoint value, I will just give it the static value of 900. If my tank's level does go above 900 liters, my alarming condition will be met and this alarm will become active. I am done with this alarm's configuration so I will press the plus sign once more to add my second alarm. This alarm will be named low level, its priority will remain low, and for the alarm notes I will just say, tank level is low, open filler valve. For my mode I will have it be below setpoint. And for my setpoint value I will have it be the static value of 50, meaning that if my tanks level falls below 50 liters, this low priority alarm will become active. Now let's imagine for a second that the network connection between my Ignition server and my PLC were to fail.

**[02:06]** [02:06]
                                    My OPC tag here representing my tank level will no longer be able to fetch a value from the PLC and therefore its value will become bad quality. If this were to happen, we want users to be warned. So we will configure an alarm that watches this tag's quality. I will press the plus sign once more to add my third alarm and I will name it tank level quality and give it a priority of critical as well. For my mode, I will use the bad quality mode. This simply means that if my tag's value were to go bad quality, my alarm condition will be met and this alarm will become active. This is a good way to notify users of possible PLC connection issues or configuration issues. That's it. Once I'm done configuring my alarms, I can press commit and then press okay to save all my configuration changes. Ignition's ability to configure multiple alarms on a single tag makes it easy to account for multiple alarm conditions on a single tag.

</details>

---

### 6. Alarm Grouping Video at Inductive University

:::tip Video Link
Watch the video: [Alarm Grouping Video at Inductive University](https://inductiveuniversity.com/videos/alarm-grouping/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will explore the different ways alarms can be grouped in ignition. Alarm grouping is useful when it comes to the filtering of alarms in any of the alarm visualization components ignition offers. Such as the alarm status table, or the alarm journal table. Here in my tag browser, I have various folders each containing some tags with alarms configured on them. On the right, you will find the perspective alarm status table, where all my alarms in their different states, can be seen. What if I wanted a way for my alarm status table to only show alarms from any of my motors. I could use the status tables display path filter, and set it to say, M followed by a wild card symbol. Now, I will only see alarms that have a display path that starts with the letter M.

**[01:04]** [01:04]
                                    Similarly, if I set it to, T followed by my wild card symbol again, I will only see alarms with a display path that starts with a letter T. Here, I am basically grouping my alarms based on their display path. I can also group my alarms and filter them on my status table using the tags, source path. The source path includes the actual path to the tag in my tag browser. So, let's say for example, that I only wanted to see alarms in the section A folder in my tag browser. I can set the status tables source path filter to wild card, section A, followed by another wild card. And after I do that, you will notice that my table only shows my single trigger A alarm, which is within my section A folder. Aside from grouping and filtering alarms, based on their display path and their source path, we can also group alarms based on what we call alarm associated data.

**[02:10]** [02:10]
                                    Alarm associated data allows you to define a custom alarm property that you can use in your alarm grouping. For example, let's say we want all our motor alarms to be grouped together. I will head over to my UDT definitions tab, double click on my motor UDT, and select my Amps tag to see its configuration. I will now scroll down and head to the alarm section where I will click on the little pencil here to see the alarms configured on this tag. I will select my alarm, and using this little plus sign here, I can add alarm associated data to this alarm. I could double click on it like so, and name it whatever I want. I'm gonna name it, group. For its value, I can either set it to be a static value, or I can use the chain link icon to bind it to anything I want and make it dynamic.

**[03:09]** [03:09]
                                    For this example, I will simply set it to be group A. Now, I can use this custom alarm property that I just created and filter alarms based on its value, which is independent from my alarms display and source paths. In future lessons, we will explore how we can use these different grouping methods to filter alarms in our different alarming visualization components.

</details>

---

### 7. Create Alarm Journal Profile Video at Inductive University

:::tip Video Link
Watch the video: [Create Alarm Journal Profile Video at Inductive University](https://inductiveuniversity.com/videos/create-alarm-journal-profile/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to create an alarm journal profile. By default, Ignition will capture current alarm data in memory. However, it will only capture a finite amount of events for each alarm, and this information is lost upon a gateway shutdown. Fortunately, an alarm journal can be created for long-term storage of alarm data. A journal can store basic information about alarms that have occurred such as their source and timestamp, associated data on the alarm, and value of the alarm properties at the time of the alarm event. We can set up these alarm journals via the gateway webpage. If we navigate to Config > Alarming > Journal and click create new alarm journal profile. We have a couple options here for our alarm journal. The database option will send alarm event data to an external database for storage. This option requires that we have a valid database connection created, which I've already set up before recording. The remote option will send alarm event data to a remote gateway's alarm journal to be logged.

**[01:02]** [01:02]
                                    This can be useful in hub and spoke architectures where the hub stores alarm events for each spoke. Finally, the internal option allows you to store alarm event data in the Ignition install directory on the gateway, and this can be useful if you don't have an external database to connect to. I'll pick the database option since I have a valid connection and I'll click next. I'll give this journal a name and then I'll be asked to pick a data source where alarm data will be sent. I'll click the dropdown and choose my SQLServer connection. The "query only" option is new to 8.1.5 and can be used to opt this journal out of storing events. Any events that will be sent to this journal will be discarded. I'll leave this set to false so that it will store alarm events. The "use store and forward" option, new to 8.1.23, is enabled by default and sends events through the store and forward system to protect against any temporary database connectivity issues where events might otherwise be lost. Moving down to the events properties, we can set the minimum priority for an event before it's allowed to be stored in this journal.

**[02:03]** [02:03]
                                    So if I were to change this to high, only events that are high or critical priority would be stored. I can also check these boxes to store shelved events or events for enabling or disabling an alarm event. Data properties are where you can choose what kind of event data gets stored. The built-in alarm properties fall under the config umbrella and you can specify whether or not properties should be stored if they're static, and not bound to anything, or if they're dynamic, and they are bound. Then user created properties are the associated data, and these can also be stored based on whether or not they're static or dynamic. Data filters can be added to decide which alarms are stored by specifying alarm sources, display paths, or by filtering on both. Adding a filter means that only alarms that match the filter will be stored. For example, if I were to add a display path filter for "pump alarm", only alarms with that specific display path would be stored in this journal. Leaving these blank means that nothing will be filtered based on these fields. The three filters together interact via a logical AND, meaning iIf there is a filter for alarm source and display path, an alarm has to match both of them exactly in order to store.

**[03:09]** [03:09]
                                    All of the filters will accept a wild card symbol and can accept multiple comma separated values. The next set of properties have to do with data pruning. Enabling this means that alarm event data will be deleted after a specific time period you can specify with the age and unit properties. Data pruning may be especially useful for internal alarm journals to avoid the gateway running out of hard drive space. If I click show advanced properties, there are a couple more settings here that allow me to specify the name of the tables that will be created in the database. By default, the core table will be named alarm_events and the table for the event data will be alarm_event_data. Since I'm happy with my settings, I'll go ahead and click create new alarm journal profile, and now I'm ready to store alarm journal events on my gateway.

</details>

---

### 8. Displaying Current Alarms Video at Inductive University

:::tip Video Link
Watch the video: [Displaying Current Alarms Video at Inductive University](https://inductiveuniversity.com/videos/vision-displaying-current-alarms/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at alarm visualization in the Vision module. Specifically, we'll be looking at the alarm status table component, which allows us to view, filter, and interact with live alarms across our system. To start, I will add an alarm status table component onto the screen and expand it to fill the whole space available. As we can see, I have already created some alarms and we can now see the different statuses of these alarms in the table. By default, each status will be displayed with a different color, with the active alarms up near the top, followed by the cleared alarms. There is some basic information about each alarm displayed in the table, but we can customize what gets displayed by changing the columns in the table. To do so, we need to put the designer into preview mode and right click on the header. This allows us to add or remove columns to the table so that we can display the information we need.

**[01:07]** [01:07]
                                    For example, if I wanted to display the user that acknowledged the alarm, I can select that column to add it to the table. And any alarm that has been acknowledged will now display that information in the column. We can also change the order of the columns by clicking and dragging them around the table, or sort ascending or descending on a particular column by clicking on it. I can also select an alarm event and use the buttons at the bottom of the table to interact with the selected event. I can use these two buttons on the left to either acknowledge or shelve the selected alarms. This magnifying glass button will allow me to inspect the selected alarm, which gives me an in-depth view of all of the alarm's properties. The chart button here will display history of the alarm if it is already being stored using tag history. This last button here will actually show me a list of alarms that are currently shelved and how long they have been shelved for.

**[02:04]** [02:04]
                                    I have the ability to unshelve any of them before their shelf time expires. In addition to the features on the alarm status table itself, there are a few properties that can control how the alarm status table works. The properties include options like specifying the default sort order of the alarms in the table, and the ability to change the date format that the table uses. However, what are probably the most important of the properties are down near the bottom, which allow us to filter the alarms that get displayed. There are three different types of filters represented here. The first is a priority filter and it allows us to set a minimum priority that we want displayed. So if I were to change this to medium, all alarms with a lower priority will no longer be displayed. The next set of filters allows me to select what states of alarms I want to display. By default, active and unacknowledged, active and acknowledged, and cleared and unacknowledged alarms are displayed, but I can use these check marks to change what states get displayed in the table.

**[03:07]** [03:07]
                                    For example, if I only want to see active alarms, I would uncheck cleared and unacknowledged, and those would get removed from the table. Finally, the last set of filters are text-based, allowing us to type something in, and any matches to our typed in value will be displayed. There are three different things we can compare against. The source path of the alarm, which is a combination of the tag provider, tag path, and alarm name. The display path of the alarm, which is a property that we can set when configuring the alarm. And the provider, which is just the tag provider of the tag that the alarm is set on. Again, we simply need to type something into one of these filter properties and any matches to our typed in value will be displayed. Each of these filters can also use the star symbol, which acts as a wild card. So for example, if I only wanted to see alarms that had the word motor in the display path, I could enter in a display path filter of star motor star.

**[04:10]** [04:10]
                                    And once I hit enter, you can see that only alarms with motor in the display path get displayed in the table.

</details>

---

### 9. Row Styles Video at Inductive University

:::tip Video Link
Watch the video: [Row Styles Video at Inductive University](https://inductiveuniversity.com/videos/alarm-status-row-styles/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to talk about alarm row styles. By default, the alarm status table has a certain style and color that it uses for different events it displays in the table. We can customize how different rows get displayed by right clicking on the component and going down to customizers, alarm row styles. You can see that there are a number of styles specified here, and each one has an expression that determines when it will be used. You can see that most of these are based on the state of the event, which is then given a specific style. I can select any of these and change the style to be whatever I want. I can also add a new row style. I just need to come up with an expression that determines when it will be used. I'm going to do something similar to this row style up here, which is all events that are active and unacknowledged and have a priority of three or greater, which would be a high or critical priority.

**[01:11]** [01:11]
                                    I'm going to have mine be active and unacknowledged, but only checking for a priority of two for medium priority. Now, the last thing to note here is that order does matter as each of these style expressions are checked in order. And the first match is the style that gets applied to a row. So if we left our new style at the bottom, all active and unacknowledged medium priority events will match with this option here first, which is just checking the state. So to have our new style be useful, I need to put it above that option. Once we have that set, I can click OK, And we can see our new style in action on some medium priority alarms that are active and unacknowledged. Finally, I want to point out that the alarm journal table has the exact same mechanism that works in the same way.

**[02:06]** [02:06]
                                    Right-click and go to customizers, alarm row styles, and you can customize the styles for different types of rows using whatever expressions you want.

</details>

---

### 10. Alarm Journal Component Video at Inductive University

:::tip Video Link
Watch the video: [Alarm Journal Component Video at Inductive University](https://inductiveuniversity.com/videos/alarm-journal-component/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at the alarm journal table component. The alarm journal table is designed to show alarm events that have already been stored in the database by the alarm journal system. Now, while the alarm events stored in the database can be manually queried out using a SQL query, the alarm journal table makes it easy and offers some additional built-in functionality. If we drag an alarm journal table onto the screen, we can see that it actually bears a lot of similar functionality to the alarm status table. The biggest difference between the two is that while the alarm status table shows current live events, the alarm journal table shows events that have already happened in the past and have been stored to the database. Now just like the alarm status table, we can put our designer into preview mode and sort the events by clicking on specific headers, rearrange the columns by clicking and dragging them around, or add and remove columns by right clicking on the header and making new selections.

**[01:10]** [01:10]
                                    We also have some buttons on the bottom that allow us to focus on a specific alarm event or see more details about an event. At the bottom of the list of properties, we have some of the different properties that can filter the alarm events being displayed. We can filter on the type of event, the event's priority, or even matching a string to a specific part of the alarm. One of the really neat things about these filters is that some of them are built into the filter button that is available to the user, allowing the user to select how they want to filter events. The last thing I want to go over is how the component updates. Because this component is pulling data from the database, it is not always pulling for new data. The data that gets displayed is based on a range of time, which is specified in the start and end date properties here.

**[02:03]** [02:03]
                                    By default, the properties both start with no date, which will pull in the last eight hours of events. The component will re-query the database anytime the start or end date properties change. This is typically done using a date range component, which has a start date and an end date property, and allows the user to pick a range of times. We simply need to bind the start and end date of the alarm journal to the start and end date of the date range. Once we have those bindings set up, moving the slider allows us to change the timeframe of events that the alarm journal table is showing, pulling in all events during that timeframe. it is also possible to have a date that is constantly updating by using an expression binding with the date time functions, such as now on the start and end date of the alarm journal component.

</details>

---

### 11. Filtering Alarms on Associated Data Video at Inductive University

:::tip Video Link
Watch the video: [Filtering Alarms on Associated Data Video at Inductive University](https://inductiveuniversity.com/videos/alarm-status-filter-on-associated-data/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at filtering alarms on associated data. We can filter alarms in the alarm status table on the associated data that we add to our alarms by using scripting. So for example, if I go to my tags, you will see that I have test tags 1 through 10, each with an alarm that is active when the tag is true. I have an associated data on each of the alarms that I've added called group, and it has a static value of either odd or even determined by the tag number. So test tag one has a group value of odd. I can use that to filter what's shown in the alarm status table so that it shows only the odd group or only the even group. To do this, I need to right-click on the component and go into the scripting area. In the scripting area, there's an extension function we have for filtering alarms.

**[01:07]** [01:07]
                                    This allows you to filter on anything that you want, like the associated data. I'm going to go ahead and enable this. And in this script, every alarm that would normally be displayed is going to get evaluated, and they need to return either true or false. If it's true, the alarm will be shown. And if it's false, it won't be shown. I'm going to copy my script in here. To access a property in the alarm, I can reference the alarm event argument and call .get with the name of the property I want to get the value of. You can see I'm accessing the value of my associated data property called group and assigning that value to a variable. I'm then going to say if the group is equal to odd, I'm going to return true. And at the very end, I'm going to return false. Once we hit OK, we can see that only the odd alarms are shown.

**[02:05]** [02:05]
                                    Just like with the alarm status table, we can do the same thing with the alarm journal table. In fact, I can copy the exact same script into my journal table to filter the results in the same way. This time I will only show even alarms. Now when hitting OK, you will notice that the alarm journal table does not filter out the alarms that don't match. It's important to remember that the alarm journal table does not update on its own and will only update when the start or end date properties change. So I'm going to push my end date out a little further, and we can see then our alarms get filtered.

</details>

---

### 12. Displaying Current Alarms Video at Inductive University

:::tip Video Link
Watch the video: [Displaying Current Alarms Video at Inductive University](https://inductiveuniversity.com/videos/displaying-current-alarms-perspective/8.1)
:::

<details>
<summary>View Transcript (9 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll explore alarm visualization in the Perspective module. We're going to focus on the capabilities of the Alarm Status Table component, which allows us to view, filter, and interact with live alarms across our system. We'll start in the Ignition Designer with a new Perspective view open for editing. I'll find the Alarm Status Table component in my Component Palette and drag it into my view here. I have a few live events in my system already, and we can see them showing up in our table. To see the functionality of the Alarm Status Table to its best advantage in Perspective, let's put it in Preview mode. Here's how the basic interactivity works. I'll start by selecting one or two live alarm events in my table, and I can either shelve the alarms or acknowledge the events. If I hover over each alarm event, on the right hand side I can see a little ellipsis icon. If I click on it, a popup modal appears with alarm details for that event. There are two sections we'll check out here-- the Config Properties section and the On Active section.

**[01:11]** [01:11]
                                    The Config Properties section contains pre-configured properties of the alarm, like display path, label, et cetera. The On Active section holds runtime properties of the event, like the time the alarm became active, special notes, and setpoint information. Once I'm finished gathering the info I need, I can click the X to see the whole table again. We'll continue in preview mode and take a quick look at the toolbar at the top of the table. The tools provide you granular control over what is displayed within the Alarm Status Table. In this top toolbar, I can choose between showing Active and Shelved alarms on the left hand side. If I click on Shelved here, we'll see that I have no shelved alarms for now, so I want to go back into my active alarms. When viewing Shelved alarms, clicking on the bell icon will switch the component back to the real time active view. On the right hand side of that top toolbar, we have a magnifying glass icon that will take you to the built-in search field for our table. Let's say I only wanted to see the critical alarms for a moment.

**[02:13]** [02:13]
                                    One way I could do that would be to search for the term critical here. Right next door, this little strawberry shaped bar icon allows us to control our table filters based on their state and their priority. We'll talk more about filtering alarms in a later video. Since I want to keep those settings as is for now, I'll just X out here to go back to my main table view. Our last item in this section is a little gear icon that takes us to the Configuration menu. This menu allows me an easy method to select what alarm info to show in my table so I can change what columns appear. Here, I can select the alarm properties to display in my table. I already have several of the most commonly used properties enabled, so we'll X out of that, and we can explore some of the filtering capabilities. Right below that top toolbar, I have a bar here that shows my current filters and allows me to remove them if I'd like.

**[03:05]** [03:05]
                                    Let's say I don't want to see anything that's marked low priority in this table. I'd just click on this X to remove that priority filter. If I change my mind later, I have two ways to remedy that in my designer. I can either go back to my strawberry icon above and reselect low, or I can go into my Perspective Property Editor, find the filters object, expand active and priorities, and then check the box next to low to enable that again. Now let's return to our actual table, which looks and functions quite a bit like the Perspective table component. We'll use the built-in tools to tailor the Alarm Status Table to our needs first, and then we'll take a look at further customization capabilities within the Perspective Property Editor. If we start with the headers, I can use them to sort based on individual fields. For example, I can change the sorting for Priority if I want to see priority events in a different order. As of Ignition 8.1.14, columns can be reordered in Preview mode and in a Perspective session by clicking on the column header and dragging it to a new location.

**[04:11]** [04:11]
                                    In order to do this, make sure the dragOrderable property is enabled in your Perspective Property Editor, and try it out for yourself. I've put a reference to the Perspective Alarm Status Table documentation from the Ignition User Manual below this video, if you'd like more information on this or other properties. I only have a few alarms displayed here in my alarm status table for demonstration purposes, but if there weren't enough room to display all of them, I could use the pager at the bottom to navigate to additional alarms. Long lists of alarm events are spread across multiple pages to improve performance, so if multiple pages are created, clicking on a number down here will switch which page is shown. I can also change the number of rows shown on each page with this dropdown menu at the bottom left. We do have a couple of other videos dealing with alarm visualization in Perspective in greater depth, but let's go ahead and take a brief look at a few of the other handy properties of our component.

**[05:07]** [05:07]
                                    In the Perspective Property Editor, the refreshRate property is new as of Ignition 8.1.0. This is the rate at which the table will poll for updates in milliseconds. The default value is 5,000 milliseconds, so it will look for alarm updates every five seconds, but you can change this value to suit your needs. These next few properties toggle any of the main features in our table. For example, the enableHeader property controls the header's visibility, while enableDetails controls the ability to see the details dialog. The other properties in this section follow the same self-explanatory pattern. Just a bit further down, we have the toolbar section, which will allow us to toggle the large navigation toolbar at the top or any of the individual elements inside it. For example, I could remove the Shelved tab by turning off enableShelvedTab, or I could hide the gear icon by turning off enableConfiguration, so my users can't change what columns are displayed.

**[06:04]** [06:04]
                                    Scrolling down a bit, we have this responsive object which allows us to configure a breakpoint for our table. If the enabled box is checked and the pixel width of the table falls below that defined breakpoint, we'll render our alarm events as cards rather than rows in a table. The new selection object added in Ignition version 8.1.4 is useful for controlling the ability to select alarms within the Alarm Status Table. If you expand active and look at the mode property dropdown, you'll see that there are several different options available: single, multiple, and none. The default is multiple, so right now I can select multiple alarms in my status table if I want to acknowledge many at one time or perform another bulk action. If I want to restrict it so that only one alarm can be selected at a time, I would choose single so that no matter how many alarms I try to select, it only allows me to take action with a single alarm. The none option sets the table so that you can't select any alarms. I'll point out one final set of properties here -- activeSortOrder and columns.

**[07:08]** [07:08]
                                    If I want to sort on this Active Time value here in my Alarm Status Table, and I'd like to set up my table so that the active time values display in descending order by default, it's pretty easy to make that change. First, let's take our current alarms view out of Preview mode at this point. Then I would need to find the columns object in the Perspective Property Editor. You'll notice that it has two nested objects, either active or shelved. Expand the active object, and you'll see a bunch of property objects that correspond to table columns we can modify as needed. Right now, the only ones we have enabled are activeTime displayPath, priority, state, source, and name. To see the Active Time values in descending order in our table, first expand activeTime and set sort to descending in the dropdown. Now that we've set the sort mode under the parent column, let's go to activeSortOrder next. We'll need to add an array element that tells it what we want to sort on.

**[08:05]** [08:05]
                                    Click on Add Array Element and select the Value option to create a new value item in the active sort order array, then replace the word value with activeTime, the object we enabled sort descending mode on below. With that, it'll change the default sort order of the table and show the items in descending order based on active time. The Perspective Alarm Status Table is a flexible and highly customizable way of monitoring and interacting with your alarming platform from a Perspective session. Please check out the documentation linked below for more information about how you can tailor the alarm display to meet your needs.

</details>

---

### 13. Filtering Alarms Video at Inductive University

:::tip Video Link
Watch the video: [Filtering Alarms Video at Inductive University](https://inductiveuniversity.com/videos/filtering-alarms-perspective/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will be taking a look at how we can use the filtering options built into our Alarm Status and Journal components to customize which alarms appear in our table. So let's get started with our Alarm Status table here. Now, as we've discussed in earlier videos, if I go into preview mode, I can configure some very basic filters from the component UI itself by clicking on the filter icon in the top right hand corner there. There I can filter on alarm state and acknowledge state as well as alarm priority. We also have a display running across the top of our component that shows our currently active filters and gives us a chance to remove them by click on the X. Now, this is a great start, but there's actually quite a bit more filtering that's possible on the component. For that, I just need to go into my Property Editor on the right hand side, and in there, I'm going to scroll down until I find the filters property. There are two sub-properties in here that I can work with which allow me to configure filters on the active and shelved tabs of the component, respectively.

**[01:06]** [01:06]
                                    So if I expand active here, we have a few different options. If I enter text here, for example, that is basically the same as typing into the search field at the top of the components. The alarming table components are actually built on top of the standard prospective table components, and the text filtering here is functionally identical. So below that, we have states and priorities, which, much like the text option, are linked to the filtering UI built on the components. So I can adjust these filters by messing with the properties here or changing them on the component directly, and it's basically the same thing. One note on that. If I clear all the check boxes for my states or priorities, it'll clear the filters entirely, meaning I'll see all alarm events rather than none. Below that, we have conditions which allow us to do filtering on source paths, display paths, and tag providers. Now, I can actually use asterisks as wildcard characters in here, so I don't need to match the paths or provider names directly.

**[02:02]** [02:02]
                                    If I type something like, "star, Sine7, star" and hit Enter, I'll see only Sine7's alarm events in my table. So that's the conditions properties. They allow us to do our own more granular search on alarm events. Finally, at the bottom here, we have results. What this does is it actually exposes the alarm events in the filtered table as objects inside of the data array here, so long as I've checked that enabled check box. So basically, I can work with my alarm events as actual properties underneath. Now, it's worth noting that these can cause a bit of a performance hit since we'll be constantly writing alarm events to this property as the user makes filtering selections. So it's a good idea to turn this on only if you really need it. So moving on here, if I collapse active, we can see shelved underneath. We have two properties in here, just text and results, which are basically the same as the corresponding properties underneath active.

**[03:02]** [03:02]
                                    They just apply when the shelved tab is up instead. So that's the basic filtering available to us on the Alarm Status table. I'll take just a moment to touch on the filtering props for the Alarm Journal table which I have in this tab at the bottom here. Now, they're pretty much the same. The filtering functionality on the component is basically identical. The only difference is that, in addition to having all the same properties in my filter prop here, I also have events. Since an Alarm Journal table shows different rows for active, clear, and acknowledge events, this event's sub-property just allows me to filter on each of those states. So that about wraps up our coverage of alarm filtering and perspective. The alarming components offer easy, built-in ways to pair down alarm events coming in.

</details>

---

### 14. Displaying Alarm History Video at Inductive University

:::tip Video Link
Watch the video: [Displaying Alarm History Video at Inductive University](https://inductiveuniversity.com/videos/displaying-alarm-history-perspective/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In the previous lesson, we looked at how we can process live alarm data within the respective module. In this lesson, we're going to be focusing instead on historical alarm data, meaning information from the alarm journal. Now, one important note, I've set up some alarms and I've already set up my alarm journal profile, that's an important first step. If you haven't set up an alarm general profile before, take a look at the earlier topics in this course for more info. So with that in mind, let's get started. I'm going to go ahead and drag an alarm journal components into my view here. And then, since this is a flex container in my view here, I'm going to go ahead and set, grow on my table to one so that the table takes up all available space. Now at first glance, the alarm journal table looks quite a bit like the alarm status table, and that's true. We still have all the same search filtering and table manipulation functionality we discussed in the previous video.

**[01:01]** [01:01]
                                    However, there are a couple of differences I did want to touch on, the status table allows us to interact with alarm events that are currently in progress or recently cleared on the system, while the alarm journal table is just going to show us details for alarm events that occurred arbitrarily far in the past. So we're not going to have some of that same interactivity like shelving and acknowledgment that we have on the alarm status table. Furthermore, because we're working with historical alarm data here, in the top left hand corner, we have a date selector built into the components. Currently, it's set to show us the last eight hours of alarm events by default, but if I click on it, I can choose between real time and historical date ranges. Real time will allow me to select something like the last eight hours or the last 10 minutes. While historical here will allow me to select any date range in the past. So maybe I just choose July 20th here at midnight for the start date and then July 20th again at 11:59 PM for the end date, and then hit apply.

**[02:00]** [02:00]
                                    And that's going to show me a single calendar days worth of alarm events. Now there's one other major point here to be made about the alarm journal table. We will have separate rows in the alarm journal table for each status change on each alarm event, meaning that, an alarm event might have separate rows in our table for when it first became active, when it was acknowledged and when it was cleared. Now, if I click on a row, a little menu will appear along the bottom of the components, allowing me to view rows associated with a given alarm or a given source path. So if I choose alarm, now my table will only show the alarm events associated with that specific value high alarm on that specific sign tag. And if I want to go back to the full view, I can just select a few all events on the right hand side. So there are of course, many other features of the alarm journal table, but you'll find that they are effectively the same features as are available on the alarm status table. So for more info about how you can filter and sort alarm events in this table, check out other accompanying videos in this topic.

</details>

---

### 15. Alarm Row Styles Video at Inductive University

:::tip Video Link
Watch the video: [Alarm Row Styles Video at Inductive University](https://inductiveuniversity.com/videos/alarm-row-styles/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at how we can customize how alarms are displayed in our perspective alarming components. So to get started here, I have an alarm status table showing a nice little assortment of alarm events of differing priorities. And to keep things simple, all of them are active and unacknowledged alarms. Now it's clear that our alarm events don't all look the same. Currently, we're getting different background colors and text colors for our rows based on the priority and alarm state. However, there's quite a bit that we can do to modify this default functionality within this table. Specifically, we can make use of what are called alarm row styles, to make pretty much any style customizations we want to our rows. To see this in action, I'm going to find my way into the properties for my alarm status table on the right here and scroll down until I find the row styles property. The first thing to know about row styles is that they're configured separately for each of the four Main alarm states.

**[01:01]** [01:01]
                                    I'm only showing active unacknowledged alarm events in my table here, so I'm going to focus on just the first sub property in here. If I expand activeUnacked, I have two more sub properties base, which allows us to configure a basic style for all active unacknowledged alarms. And priorities, which allows me to configure more granular styles for each priority of active unacknowledged alarm. Both the base and the priority fields could take any style properties or defer to style classes. So for example, inside base I'm going to go into my classes field and select alarm text. Which is going to sync up with a pre-configured alarm text style class and just modify the font and font size for each of my rows. We could do something a bit fancier using style classes. Like having a style class with an animation so our alarm backgrounds could flash. Next, if I want to make a change that affects only one alarm priority. I can go into priorities, select the priority I'd like to modify. So how about that diagnostic here and then use the paint swatch icon to configure any style we'd like.

**[02:05]** [02:05]
                                    So how about I go in here and then go into the background color. Go into the palettes and change the background color to a nice light blue and then click OK. And we'll see that diagnostic active and unacknowledged alarms have been updated in the table. Classes will also still work in here, you just have to specify the classes property yourself. So on one final note, if I go to my alarm journal tab here at the bottom, you will see that the alarm journal component has a similar functionality. Except row styles can be configured for each event type. Like active acknowledged or cleared rather than current alarm state. So that's how we can change the appearance of rows inside our alarming components in perspective. Now we can really make sure our operators catch the most important alarms in our system.

</details>

---

### 16. Email Notification Profile Video at Inductive University

:::tip Video Link
Watch the video: [Email Notification Profile Video at Inductive University](https://inductiveuniversity.com/videos/email-notification-profile/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Once alarms are set up on tags, they can be configured to notify users when the tags go into an alarm state. In order to do this, an alarm notification profile needs to be created. In this lesson, I'll demonstrate how to create an alarm notification profile that allows for email notifications. To create one, I'll need to go to the config section of the gateway webpage, and then scroll down to alarming and click notification. From here, I can click Create new Alarm notification profile. Then I'll select email notification from the list of options and click Next. First thing I'll do is I'll give this a name. In the config > networking > email settings section of the gateway webpage, you can create a connection to an SMTP server called an email profile. Doing this allows you to perform email setup once and then not have to repeat it in multiple places within your gateway. If you've already configured an email profile, you don't need to reenter your SMTP server information and can instead check this box and choose your email profile from the dropdown.

**[01:10]** [01:10]
                                    If you haven't set up an email profile, that's okay, and you can leave this box unchecked and use the rest of the settings below. I'll need to enter the host name of my SMTP server, so in my case, I'll enter mail-server. Next, I'll need to specify the port that the SMTP service is running on, and I'll leave the default of 25. If my server were to require SSL or TLS, then I can use this checkbox here to make the connection. Then I can enter in my username and password. The two way settings allow users to respond to the emails that are sent to them and acknowledge alarms through the emails themselves. Similarly, the POP3 two way settings give the same functionality, but for POP3 servers. If I continue scrolling down, I can tie this notification profile to an audit profile, which allows for email and acknowledgement events to be stored with the associated audit system. Finally, the advanced properties allow me to specify a timeout for the SMTP server.

**[02:05]** [02:05]
                                    They allow me to enable debug mode, which prints out email session information to the wrapper log. And finally, it allows me to enable the use of the STARTTLS command, which will upgrade a connection to an SSL or TLS connection if the server supports it. Since I'm finished with my selections, I'll click Create new Alarm notification Profile, and now I have an email notification profile that's ready to use.

</details>

---

### 17. SMS Notification Profile Video at Inductive University

:::tip Video Link
Watch the video: [SMS Notification Profile Video at Inductive University](https://inductiveuniversity.com/videos/sms-notification-profile/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to set up an SMS notification profile so that alarm notifications can be sent via text message. In order to do this, I'll need to navigate to the gateway webpages config page, and then scroll down to alarming and click notification. From here, I'll click Create New Alarm Notification Profile. Then I can select SMS notification from the list and click Next. A quick note about this option, there are a couple prerequisites that need to be met before SMS notifications can be used. The SMS notification module is what allows you to use this type of notification method, but this module is also dependent on the alarm notification module, so both modules will need to be installed in order to create this. Additionally, you'll need a cellular modem and an active cellular account to send the messages. Inductive Automation officially supports three AirLink devices, the RV50 or RV50X, the RV55, and the LX40. Most devices that support AirLink IP protocol can be used, but configuration settings may vary.

**[01:07]** [01:07]
                                    I'll include a link to our user manual page for SMS notification profiles that includes a link with information about AirLink devices, as well as the links to IA knowledge base articles with device setup guides. Alternatively, SMS notifications can also be sent using Twilio. However, this will require an account with Twilio as well as a special Twilio module installed on the gateway. I won't go over that module in this lesson, but I'll link to that user manual page as well. Back to creating the profile. I'll give the profile a name, and then the next thing I need to do is enter the AirLink host address, which is going to be the IP address of the cellular modem. I'll go ahead and paste the address to my device. The send port is what the device uses to send messages and is configured on the device itself. I'm gonna go ahead and leave the default of 17341. The receive port is what Ignition will use when two way messaging is enabled. I'll also leave this at the default of 17342.

**[02:05]** [02:05]
                                    The next property, if enabled, includes an alphanumeric code with a notification message. This allows users to reply with that code in order to acknowledge the alarm. Then the following property would change the code that's sent to users so that it's only a numeric code, not alphanumeric. Finally, the last property will associate this notification profile with an audit profile, and that way events such as SMS messages and acknowledgements will be stored to the audit system. Now that my selections are complete, I'll click the create button at the bottom of the page, and now I have a running SMS notification profile on my gateway.

</details>

---

### 18. Voice Notification Profile Video at Inductive University

:::tip Video Link
Watch the video: [Voice Notification Profile Video at Inductive University](https://inductiveuniversity.com/videos/voice-notification-profile/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to create a voice notification profile so that text-to-speech alarm notifications can be delivered to users. I'll start by navigating to the config section of the gateway webpage, and then scrolling down to alarming and I'll click notification. From here, I'll click Create new Alarm notification profile. Before I move on, I wanna talk about the prerequisites for this type of notification profile. The voice notification module allows us to create the profile, and that's dependent on the alarm notification module, so both will need to be installed on the gateway. In addition to these modules, a specific voice module for your desired language also needs to be installed. I'll provide a link to a knowledge base article we have with download links. Note that some voices and languages are only available with specific versions of Ignition. Finally, the notification profile sends these voice messages over the telephone using a SIP compatible phone system or VoIP system, so one will need to be set up. As long as these are taken care of, we can move forward with the profile creation.

**[01:02]** [01:02]
                                    I'll select VoIP voice notification from the list, and click Next. I'll provide a name for my profile, and then I'll start entering the VoIP gateway settings. First thing I'll need to enter is the gateway address, which is the IP address or domain name of the SIP gateway. After this, I'll provide the username or account, which is generally an extension of the phone system, and then I'll enter the password required to access it. I'm not using a proxy, so I'll leave this field blank. I can then configure some of the call settings. For example, I can specify a max call duration that any call's allowed to take before it's ended. I can also specify the amount of time that the system will wait for the call to be answered before it moves onto the next contact. And finally, I can adjust the voice rate. This notification profile can also be linked to an audit profile, and that way any events such as phone calls and acknowledgements will be stored to the audit system. Then if I expand the advanced properties, there are some additional fields here for specifying an authorization id, if your service requires one in addition to the user or account name, the SIP and RTP ports, local and public bind addresses, and then, if desired, the call audio can be recorded and stored in the Ignition temp directory for debugging purposes.

**[02:14]** [02:14]
                                    I'll click the create button at the bottom of the page, and once it says that it's registered, I've successfully created a voice notification profile.

</details>

---

### 19. Notification Users Video at Inductive University

:::tip Video Link
Watch the video: [Notification Users Video at Inductive University](https://inductiveuniversity.com/videos/notification-users/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to add contact details to a user so that they can receive alarm notifications. To do this, I'll navigate to the config section of the gateway webpage and scroll down to security and click users, roles. This is where I can make modifications to the user sources on my gateway. I've created some users in my default user source, so I'll click the more button to the right and click manage users. Here are the users that I have in my user source, and you'll notice that one of them, John, already has an email set up. I want to add contact info for Mary, so I'll click edit on her user row. I'll scroll down and call out notification related settings that can be configured. The first is the schedule dropdown here. Schedules are also involved in alarm notifications, and you can set up users so that they're only notified of alarms when the users are active, and if they're scheduled to work when an alarm is triggered. We'll go over how to configure schedules in the next video. Underneath that is the Language field, which will tie into voice notifications.

**[01:03]** [01:03]
                                    It's possible to have multiple voice modules, or languages, installed, and depending on what is filled out in this field, voice notifications will be sent to Mary in the most closely associated language. Since Mary's language is set to English, it would try to send an English voice notification if possible. If I continue to scroll down, I'll make it to the Contact Info section. This is where I can add an email address or a phone number for notifications to be sent. I'll click add contact info, and then I'll click the dropdown and choose email. Then in the value field, I'll add Mary's email address. Once I'm finished with that, I can click save. Then if I want to add more contact info, I click add again, and this time I'll select SMS. Then I'll enter Mary's phone number that will receive SMS notifications. Once again, I'll click save, and now Mary has an email address and a phone number as contact options. Before I click save changes, I'll also mention the Security PIN here in the extended properties. You can force an operator to enter their PIN in order to hear a voice alarm notification.

**[02:08]** [02:08]
                                    This would prevent anyone from hearing the message except for the intended user, even when someone else may have access to their phone. I'm finished making modifications, so I'll click save, and now you can see the modifications I made to her contact info, and now she's able to receive those types of alarm notifications.

</details>

---

### 20. User Schedules Video at Inductive University

:::tip Video Link
Watch the video: [User Schedules Video at Inductive University](https://inductiveuniversity.com/videos/user-schedules/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to configure user schedules. Schedules allow us to define times of availability for our users to receive alarm notifications. From the manage users window, you can see that each of my users has the default "Always" schedule assigned to them, which means that they're available 24/7. To change the user's schedule, I can click edit on the appropriate user. Under user properties is this dropdown, which allows me to pick a schedule that exists on the gateway. The two built-in schedules in Ignition are the "Always" and "Example" schedules, but new schedules can also be created in order to fit user needs. To configure schedules, you can navigate to the Alarming section and click Schedules. Here are the two built-in schedules: Always, which is available 24 hours a day, seven days a week, 365 days a year. And then there's the Example schedule, which is a Monday through Friday, 8:00 AM to 5:00 PM schedule with a lunch break. To see how this Example schedule is configured, I'll click the edit button to the right of the schedule. One of the first properties you'll see is the Observe Holidays checkbox.

**[01:07]** [01:07]
                                    When this is selected, the schedule will observe holidays and not be active when the holidays are specified. Holidays can be configured on the Holidays tab of the Schedules page. If I scroll down, then the next section is where the times of the schedule are configured. The schedule can be set up so that there's the same hours every day of the week. It can be set up so that Monday through Friday will have the same hours, but there will be no hours on the weekends or the schedule can be configured down to each day of the week. Hours can be input into whichever field or fields are relevant for the current schedule, and multiple time ranges can be added to one field by separating with a comma. This is the example Monday through Friday schedule with a lunch break. So the weekdays box is checked and then two timeframes are added on either side of the 45 minute lunch. If I scroll down to the repeating properties, I can repeat the schedule to customize it even further. I can choose to set the schedule to have a set number of days on and off, or weeks on and off. And this allows me to create even more unique schedules. I'll go ahead and click save to keep the current settings, and that takes me back to the list of schedules I have on this gateway.

**[02:07]** [02:07]
                                    Creating a brand new one can be done with this button, and once that schedule form we just looked at is completed, it will show up here on the list and I can select it from the schedule dropdown when managing users.

</details>

---

### 21. On-Call Rosters Video at Inductive University

:::tip Video Link
Watch the video: [On-Call Rosters Video at Inductive University](https://inductiveuniversity.com/videos/on-call-rosters/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll create on-call rosters so that I can pick subsets of users to receive alarm notifications. I've already gone through the steps of configuring contact information and schedules for my users. So the last step is to add them to a roster. In order to do this, I can navigate to the alarming config section and click On-Call Rosters. I don't have any rosters on my gateway yet, so I'll go ahead and click Create New on-call roster. I'm gonna end up creating multiple rosters, and I'll call this first one "Operators", and then I'll click the create button. Now it shows up on my list of rosters, but it currently has zero users. To change this, I'll click the more button and select Manage. This screen allows me to see my list of users and interact with them. First thing I need to do is choose which user source I wanna look at. So I'll click the dropdown and select my default user source, and this will populate with my users. You'll notice that some of the names have icons to the right of the names.

**[01:03]** [01:03]
                                    These icons signify that these users have contact information set up for that method of contact. This roster is specifically for operators, so I'm gonna move over George and Joe by clicking the arrows to the right of their names. And then I can click save. Now the operator's roster is listed as having two users in it. I'll create one more roster, and I'm gonna name this one "All". So I'll click create, I'll enter the name, and click create. Just like before, I'll click more and then manage to add users. I'll select the default user source again, and this time this roster is intended for everyone. So I'm gonna add anyone with contact info. So George, Joe, John, and Mary. You'll notice that I added George and Joe to the previous roster as well, so users can be added to multiple rosters if needed. Now I'll click save, and you can see my two rosters here with a given number of users for each. These rosters are now ready to be used in alarm notifications.

**[02:03]** [02:03]
                                    Be sure to check out our videos on alarm pipelines to see how to send out alarms.

</details>

---

### 22. Alarm Pipeline Overview Video at Inductive University

:::tip Video Link
Watch the video: [Alarm Pipeline Overview Video at Inductive University](https://inductiveuniversity.com/videos/alarm-pipeline-overview/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at the last two steps of Alarm Notification, which are creating an Alarm Notification pipeline and then adding that pipeline to a tags alarm. This video assumes that we have already created an Alarm Notification profile and an on-call roster of users with contact info. To start, we will go to the Alarm Notification pipeline section of the designer and create a new pipeline. When creating a pipeline, we need to connect multiple pipeline blocks together to create a logical pathway or pipe that the alarm event will follow when it enters the pipeline. The alarm event has two ways that it can leave the pipeline. First, it can reach the end of the pipeline. With nowhere else to go and no other blocks to evaluate, the instance will simply end and the pipeline will sit and wait for the next alarm to come through.

**[01:05]** [01:05]
                                    The alarm event can also leave the pipeline prematurely by meeting one of the dropout conditions, which are specified on the route of the pipeline. When one of these are met, the alarm event will be removed from the pipeline and will not evaluate any other blocks, even if it has not reached the end. Now, I want to create a simple pipeline. And the simplest pipeline is the one that I have here with just a notification block, which will notify users immediately when the alarm event enters the pipeline. However, I want to add in a delay just before the notification, so that we can see our pipeline in action in the gateway. The delay block that I am adding here will simply hold the alarm event here for the specified amount of time when the alarm event reaches the delay block for evaluation. Once the time has passed, the alarm event will move down the pipeline to the next block, which is a notification block.

**[02:06]** [02:06]
                                    The notification block allows us to notify our users by first selecting an alarm notification profile that will be used to send out the notifications, and then an on-call roster of users that will be notified. For more information on the other settings in this block or on any of the other pipeline blocks, please see our user manual. This pipeline is ready to go, so let's save it. The next step, which allows us to use this pipeline that we just created, is to go to an alarm and add the pipeline to the alarm. I have a Boolean tag here with an alarm that is triggered when the value is true. If we look at our alarms properties, we will see three properties which will allow us to add a pipeline. Ack, Active, and Clear Pipeline. Setting a pipeline for any of these properties will push the alarm event into the pipeline specified when the alarm transitions to the state listed in the property.

**[03:05]** [03:05]
                                    So for example, setting an Ack pipeline means that when the alarm is acknowledged, the alarm event will be pushed into the pipeline so that users can be notified that the alarm was acknowledged. For our example, let's set the active pipeline and select the pipeline we just created. We will go ahead and commit this and test it out by triggering the alarm. Now with your pipeline configured, you can see the status of it by going into the Gateway Webpage Status section. Here on the left-hand side, we can navigate to the Alarm Pipelines page, where we will see a list of all of our alarm pipelines that have been created, as well as if they are currently active and how many events are currently moving through them. If we look at the details of the pipeline, we can see where in the pipeline each alarm event is at. As we can see here, the alarm event that was just triggered is still sitting in the delay block.

</details>

---

### 23. Dynamic Rosters Video at Inductive University

:::tip Video Link
Watch the video: [Dynamic Rosters Video at Inductive University](https://inductiveuniversity.com/videos/dynamic-rosters/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at how we can make a roster dynamic and an alarm notification pipeline. Let's go ahead and take a look at how they work. I have a notification block here, and if I go over to the contacts tab in the Pipeline Block Editor, you'll see, we have an option to select a roster type. Currently there are three roster types, Direct, Expression, and Calculated. The Direct roster type is by far the simplest. I simply need to select a roster from this dropdown list of On-Call rosters that I've previously set up in the gateway. Once I've made a selection, the notification block will always notify the users in that selected On-Call roster. While this roster type is very easy to use, the trade-off is that it's not very flexible, forcing you to select a single roster to use for this notification block. Next up is the Expression roster type.

**[01:03]** [01:03]
                                    The Expression roster type allows you to use ignitions built in expression language to select a particular On-Call roster that you're going to use. Because you have the ability to create an expression here, it does offer some amount of flexibility. For example, in my expression here, I'm looking at the priority of the alarm. If it's equal to four, then I want to use the administrators On-Call roster. Otherwise it'll just use the user's On-Call roster. In addition, I also have the ability to use tag values or even any of the built-in expression functions of the expression language. While this roster type is a little bit more complex, it does offer the flexibility you may need to make a dynamic selection for what roster you're going to use for this notification block. However, it still forces you to choose a roster that was created previously. So, if you don't have users that you want notified, grouped into a particular roster, you won't be able to notify them.

**[02:03]** [02:03]
                                    This forces you to really plan ahead and select what users are going to be notified in certain instances and create a roster for each of them. These limitations led to the third type of roster, the Calculated roster. The Calculated roster allows you to use scripting to create a custom roster at runtime. With it you're essentially building a temporary roster that will be used this one time, during the notification. If a new notification comes in, the script will run again and rebuild a new roster using potentially new parameters. This is perfect if the users that you're notifying change with each new alarm instance, allowing you to truly customize who you're going to be notifying when the alarm event happens. I'm gonna expand the block editor so we can take a closer look at how the script works. Now, the basics of this script is that it needs to return a list of dictionaries. This can be done in one of two ways, either manually by building out a dictionary for each user, putting them into a list and then returning them or using the built in builder object.

**[03:09]** [03:09]
                                    Let's first take a look at the example down here that puts together a list of dictionaries manually. As you can see, it first creates two different user dictionaries, it then places those dictionaries into a list, and then it returns that list of dictionaries. It's important to note that the key value pairs that you build your user dictionaries with, must match the key value pairs that are listed here in the description. You can put together as many different users as you like, and you'll also notice that each user does not have to have the same type of information. As the user, Bob has a phone number while the user, Joe has an email address. Now, let's take a look at how you could use our builder object instead. I've put together an example that uses the same information from the manual example. You'll notice that this time we're calling methods of the builder object to insert in information for each user.

**[04:04]** [04:04]
                                    Then once we have all the users appropriate information, we call the add method on that builder object. This adds all previously added information as a single user into the builder. I can add as many different users as I would like, again, even using different types of information, such as a phone number or an email address. It's important to know that the methods of the builder object that I'm calling must match the keys listed above, while the parameter values that get passed in must match the data type associated with the corresponding key. So, for example, the phone number is expecting a list of strings. So, when I call the phone method, I have to pass it a list of strings for the phone number, even if there is only one phone number there. Once I've added all the appropriate users, I then call.build on the builder object. This will return the same list of dictionaries that I'd previously built using the manual method. I then simply need to return that list of dictionaries to finish my script.

**[05:07]** [05:07]
                                    You may have noticed that there's a couple of different ways that we can use the builder object, such as in my example, where I've broken it up into multiple lines, or like within the description, where it's all on one line. Both of these will yield the same results and I recommend you check out the user manual for more information on how to use both the builder method and the manual method. Now, It's important to note that the examples I've shown here are fairly simple, with just a couple of static users that I'm returning. However, it's not recommended that you use the calculated roster like this, as it would just be easier to build a roster for them in the gateway, and then select that roster as a direct roster. Ideally, we would use scripting here to grab various bits of information such as from the database or even tags. And then you use that information to build a very customized roster from various user sources. This helps to ensure you are notifying exactly who you need to.

**[06:03]** [06:03]
                                    The last thing I wanna point out is that both the manual method and the builder method achieve a similar result, which is to create a list of dictionaries. This means that you can use whichever one feels more comfortable for you so that you can build the best script possible. So, with these three roster types, you can put together a notification pipeline that sends out alarm notifications to exactly who they're intended for.

</details>

---

### 24. Pipeline - Filter on Alarm Priority Video at Inductive University

:::tip Video Link
Watch the video: [Pipeline - Filter on Alarm Priority Video at Inductive University](https://inductiveuniversity.com/videos/pipeline-filter-on-alarm-priority/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at how we can create a notification pipeline that notifies a different list of people based on the alarm's priority. Let's assume that all the alarms are already configured to come into this pipeline. Since we're filtering on the priority, we can either use the switch block or the expression block to make this happen. The switch block will allow me to switch on the priority, doing something different for every single priority that exists. The expression block will allow me to check for a particular priority, and it's going to return true or false if the priority matches. This will allow me to do something if it's true, and something different if it's false. I'm gonna do the expression block here. I'll drag an expression block down into my pipeline, and then I'm going to hook up my start into the end of the expression. Now the expression is going to return true or false.

**[01:03]** [01:03]
                                    So down here on the bottom left, I can type in what I want the expression to be. I'm going to go and use the parameter selector button here to go and bring in the priority of the alarm. When the alarm comes through the pipeline, it's going to be replaced with the actual priority of that alarm. Now, I want to check to see if that priority is critical. So I need to compare it to what a critical priority would be. Each priority is assigned a numeric value, with zero being diagnostic, one being low, two being medium, three being high, and four being critical. So to check if the priority is critical, I need to compare the alarm's priority to a value of four. If the alarm is critical, this comparison will return true, and will go out the true output. If it is not critical, it will return false and will go out the false output. I can do something different for each of these conditions. I'm going to bring a notification block in and hook up the true output into the notification block. For these critical priority alarms, I'm going to send an email to all of the users in my critical roster.

**[02:10]** [02:10]
                                    If I take another notification block and bring it down below, I can hook up the false output into the notification block. And on here, I can send an email to all of the users in my non-critical roster. So as you can see, a simple expression allows us to filter on the priority of any alarms that come through the pipeline.

</details>

---

### 25. Pipeline - Filter on Associated Data Video at Inductive University

:::tip Video Link
Watch the video: [Pipeline - Filter on Associated Data Video at Inductive University](https://inductiveuniversity.com/videos/pipeline-filter-on-alarm-associated-data/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we will look at how we can filter an alarm notification pipeline based on associated data that we've added to an alarm. Remember from previous lessons, it's possible for you to add associated data to an alarm that can be static or dynamic. I've added associated data called Group to a few of my alarms that has a value of either A, B, or C. After I've added the associated data, it's possible for me to use that same associated data in filtering my notification pipeline. I can use either the switch block or the expression block to filter. The switch block will allow me to have a different output for each group, while the expression does something similar but I can really only check to see if the alarm matches a single type of group. I'm going to use the switch block this time. So I'll bring in a switch block into my pipeline, and I'm going to hook up the start into the switch input.

**[01:04]** [01:04]
                                    On the switch block in the bottom left, when you configure the block, you need to specify the expression that will return the possible values. You won't find any of the associated data properties here in the alarm properties button, because only built in properties are listed in this dropdown. You must manually type in the name of your associated data property, surrounded by curly brackets. Then down below, I can add as many values that I need for possible return values from my expression. I know my group can either be A, B, or C, so I'm going to add possible values that correspond to those. Once I add those three, you'll see an output for each possible value, as well as a catch all. From there, I can then notify a different list of people based on the group that the alarm is associated with. I'll set up some notification blocks here, with each group notifying a different roster. My catch all is then for any groups that aren't recognized or any alarms that don't have a group assigned.

**[02:07]** [02:07]
                                    So I will just put a roster of all. This is how we can filter our alarm notification based on an associated data property.

</details>

---

### 26. Pipeline - Escalation Video at Inductive University

:::tip Video Link
Watch the video: [Pipeline - Escalation Video at Inductive University](https://inductiveuniversity.com/videos/pipeline-escalation/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at how we can automatically escalate an alarm notification to a different group of users after a set time. I want to notify my operators that there is an issue. And after notifying them a few times, if the problem persists, then I will have it escalate and notify a manager. So first and foremost, in order to keep track of the number of times that we have notified the operators, we have to actually set a property inside this pipeline. I'm going to bring in the set property block in the very beginning, and from the start I'm going to come right into the set property block. Here I'm gonna call that property Counter. I'm going to initialize that to a value of zero. Then from there, I'm going to bring in the notification block and notify my operators. After notifying all of my operators, I need to increment my counter to indicate that I have notified one time.

**[01:03]** [01:03]
                                    I will add another set property block, give it the same property name, and give it a value of the value of the counter property plus one. I then want to wait and give them a chance to take care of the issue. So what we're going to do is we're going to do a simple delay block here. We'll delay for maybe 300 seconds, which is five minutes. And after that, if the alarm is still active and unacknowledged, I then want to check to see what to do next. Do we notify our operators again, or do we escalate? That decision will be based on the value of the counter variable. So I will need to add in an expression block to check the value of that property. My expression will be, my counter variable is less than three. If it is less than three, which means I have not notified my operators three times yet, it's going to return true. And we're going to go right on back into the notification block.

**[02:05]** [02:05]
                                    If it is three or higher, that means that my operators have been notified three times and it has been a total of 15 minutes. So it will return false. I want to escalate that up to the managers at this point. So we're going to do another notification block here that notifies the managers. As you can see this pipeline, when an alarm comes in, it's going to notify my operators three times over 15 minutes before escalating to my managers. This is how we can use a simple loop with some logic and a variable to create a pipeline that automatically escalates our alarm notifications.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
