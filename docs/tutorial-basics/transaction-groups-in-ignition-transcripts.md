---
sidebar_position: 19
---

# Transaction Groups In Ignition - Video Transcripts

This page contains transcripts from the transaction-groups-in-ignition video course.

## Overview

These transcripts are automatically generated from the [transaction-groups-in-ignition Course](https://inductiveuniversity.com/courses/ignition/transaction-groups-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 4:43:38 PM
Source URL: https://inductiveuniversity.com/courses/ignition/transaction-groups-in-ignition/8.1
:::

## Video Transcripts

### 1. Transaction Group Introduction Video at Inductive University

:::tip Video Link
Watch the video: [Transaction Group Introduction Video at Inductive University](https://inductiveuniversity.com/videos/transaction-group-introduction/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Transaction Groups are available in ignition, through the SQL Bridge Module. They are objects that map data in ignition to and from a database. With every execution cycle, they can perform actions such as storing OPC data to a database table, or writing database table data to OPC data points. A variety of group types, item types, and configuration options means that Transaction Groups are versatile and have a wide range of configuration. We will go over some of the group types and item types in later videos, but for now let's familiarize ourselves with the Transaction Group basics. When the SQL Bridge Module is installed, you will see a new node, in the designer Project Browser for Transaction Groups. When you create a new group, it is only a part of the current project that you're editing. Groups are designed and modified in the designer, on a per-project basis. But, they execute on the gateway. Once they are started, groups will run indefinitely, as long as the gateway is in an active state.

**[01:04]** [01:04]
                                    Here in the designer, we see the Transaction Group design space. Here, we can create new Transaction Groups and we can also see a list of the recently modified groups. I have one already created named myGroup, so I will double click on it to see its configuration. The Transaction Group design space will allow users to control the group state. It can be enabled, disabled or paused. Currently, myGroup is disabled. If I choose to enable it like so, this change will not take effect until the project is saved. This is true for any configuration change for any Transaction Group. The group's last safe configuration will always be respected, until a new change is physically made and saved. On the bottom, you have two tabs available, to view the current group status, and any events associated with the group itself. The Status tab will show metrics such as total executions, failed executions, while the events tab will show any messages related to the group's state, such as when the group was started, or if the group started in an error state.

**[02:04]** [02:04]
                                    If I enable the group and save my configuration changes, notice how I've began to see live status information. Similarly, go into the Events tab. We'll see that the group changed to a running state. There are several types of groups that can accomplish different goals. All group types, however, follow common principles. Once a group has started, it will execute on a timer or schedule. Groups also contain data items, which can be OPC items, configure tags, expressions, or even SQL queries in some instances. Expression item execution can be trigger- dependent if defined in the Triggered Expression Items list. Expressions can also ignore a trigger altogether, if defined in the Run Always Expression Items list. Depending on the group type, items can be mapped one directionally or bidirectionally, meaning that data can flow from OPC to a database, a database to OPC, or it can flow in both directions.

**[03:04]** [03:04]
                                    What I mean by both directions, is that the database will be monitored and when data changes on one side or the other, it will automatically be written to the other side to maintain data synchronization. Transaction Groups can use several different trigger mechanisms, which in conjunction with the timer or schedule, can specifically dictate when the group should execute. When the group is finished running, success or failure can be communicated back to other tasks through handshake mechanisms. The additional videos in this series, we'll dive deeply into each of these features and provide examples of how they might be useful. In short, bidirectional data synchronization between the database and OPC, flexible triggering of group execution and the ability to modify groups with minimal to no downtime, makes them a key component to many ignition projects.

</details>

---

### 2. Historical Group Type Video at Inductive University

:::tip Video Link
Watch the video: [Historical Group Type Video at Inductive University](https://inductiveuniversity.com/videos/historical-group-type/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    The most straightforward way to log data with a Transaction Group, is to use the Historical Group. This is a very simple type of group that maps data from OPC into table columns for the purpose of inserting rows into a database table. To show you how it works from my Transaction Group Design space, I will create a new Historical Group and I will name it "My Group". On the left side is our OPC browser where from the Designer, we can browse down to the devices currently configured in our Ignition Gateway. From my Simulator Device, I will select a few tags and drag them over to my newly created historical group's OPC items list. Notice how they are automatically brought in with a few default configurations. The most notable setting is the target name, which translates to the database table column name, that this specific OPC data point will be mapped to when it is stored. However, it is possible to have the target name be Read Only. When set to read only the value of the item will not be tied to any columns in the database, but is still visible from the Transaction Group and can be used for something like a trigger for instance. At this point, I can make the target name anything I want, and the group will automatically take care of creating the table for me with the column names to match my target name settings. If the table already exists, the group will take care of adding any additional columns needed. So I'll configure my table name to be "My Table," and I'll leave the default column names as they are. This is really all I need to do. With the timer one second, I can enable the group and save my changes, and the group will begin running. Remember, this table didn't exist before I started the group. And yet, now we can come in and see the value streaming into the database every second. Of course, I may want to log at a different rate or to only store data on a condition through a trigger. But in regards to storing basic OPC data to a database, This is all that is required.

</details>

---

### 3. Standard Group Type Video at Inductive University

:::tip Video Link
Watch the video: [Standard Group Type Video at Inductive University](https://inductiveuniversity.com/videos/standard-group-type/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    The standard transaction group is perhaps the most flexible of transaction groups. Just like other groups, the standard group contains items that can be mapped to a database or used internally for triggers or handshakes. Items that are mapped to a database will target a specific column and a single specific row, chosen according to their group settings. Unlike the Historical Group type where data only flows from ignition to a database, standard groups have modes associated with them. In OPC to DB mode, data can flow from OPC to a database, for OPC data historization. In DB to OPC mode, database data can be mapped to OPC items. Finally, bi-directional modes allow for data synchronization between a database and OPC. The standard group can not only insert new rows into a database table, but it can also update existing rows in the table. Now that we have a basic understanding of the standard group, let's take a look at how it works. From the transaction group design space, I'll create a new standard group named my group.

**[01:07]** [01:07]
                                    Once it is created, I will head over to my OPC browser and drill down to one of my OPC devices configured on my gateway, and I will drag a few tags from it to my standard group's OPC items list. Notice the mode column for each OPC item by default, it will be set to use groups mode. The groups mode in this case is OPC to DB. My group is configured to use a table named standard. Since this is a new group, This table does not yet exist in my database, so I will check the automatically create table setting to true. There is also other settings available to us, like adding a custom index column, store a quality code for my OPC data, as well as data pruning mechanisms. In contrast to historical groups, standard groups also have table actions associated with them. For now, we want to insert a new row with every group execution, so I will leave the default "Insert New Row" Table Action selected.

**[02:02]** [02:02]
                                    Currently, my group is disabled. If I enable it and save my changes in the status tab below, I begin to see live statistics for my now enabled transaction group. Checking our database query browser, I'm able to see live OPC data insertions to the database, which is expected using OPC to DB mode. Let's play around with the table actions. Currently, we're inserting a new row with every group execution. If I switch the table actions to "Update/Select", I will be asking the group to update or select database information depending on the groups mode. In OPC to DB mode, database data will be updated with OPC data. In contrast, in DB to OPC mode, data will be selected from the database to update OPC, changing the table action to Update/Select and selecting first. After saving my changes we see in the database query browser that only the first row is getting updated with OPC data. If I set the table action to be last, we see that now the last row was getting updated with OPC data.

**[03:05]** [03:05]
                                    The table action can be custom as well, which gives you the flexibility to specify a custom work condition to select what database rows should be updated by the transaction group. This configuration will ensure that only the row that has an index of five is updated. On the database, we can see that just as expected, only the row with an index of five is getting updated. The key value pairs table action works in the same fashion as the custom table action. If I select my index column and set it to have a value of say nine, we see that only the ninth index row is getting updated with OPC data. Now that we have seen table actions, let's look at the other transaction group modes. We saw how data can flow from OPC to a database, for both insertions and updates. Changing my group's mode to DB to OPC, If I make a change to the ninth row in my database table, we see that my OPC data point reflects this database site change, as expected with DB to OPC mode.

**[04:12]** [04:12]
                                    The remaining mode is bi-directional. This mode will ensure that data in a database will always be synchronized with OPC data. There's two modes of Bi-directionality. With DB wins, if the data between the database and OPC differs when the group first starts, the database record will win and will be written to OPC. With OPC wins, if the data between the database and OPC differs when the group first starts, the OPC record will win and will be written to the database. Let's quickly see how this will work. Notice that my ambient temp value is 15. With my group disabled, and with a bi-directional OPC wins mode, if I go to my database and set my ambient temp value to 60, when the group starts, since OPC sees ambient temp to be 15, and the database sees it as 60, OPC data will win and 15 will be written to the database.

**[05:09]** [05:09]
                                    Setting its mode to bi-directional DB wins, disabling my group once more. Going back to my database and setting ambient temp value to 90. Once the group starts up, since OPC sees ambient temp to be 15 and the database sees it as 90, database data will win and 90 will be written to OPC.

</details>

---

### 4. Stored Procedure Group Type Video at Inductive University

:::tip Video Link
Watch the video: [Stored Procedure Group Type Video at Inductive University](https://inductiveuniversity.com/videos/stored-procedure-group-type/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this example, we're going to create a stored procedure group that will interact with the stored procedure on my database. So store a value, retrieve back the number of rows stored, and also retrieve a count of how many times we've called this stored procedure. A store procedure is essentially a type of function in a database, and it can have various parameters that are mapped as either input, output or both. First, we have to define to store procedure in the database. For the purposes of our example, we'll create a new procedure that's defined as follows. We're going to call it "safe insert", because store procedures are often used to provide extra security by validating data before inserting it into a database. In this store procedure, will have three parameters; an input parameter named value, an output parameter that we'll call a row count and an additional parameter called counter. Generally speaking, all databases support these features since most databases will support store procedures with input and output parameters. Our defined store procedure will insert our value input parameter into a table we've already created. Then, it will select the row count from that table into our output parameter. We will also have our counter parameter increment is valued by one with every execution. Now that the procedure is created, we can go back into ignition and create a store procedure group. From the transaction group design space, we'll select a store procedure group and create a new group named "myGroup". We'll select our procedure from the dropdown list. Since we have an active database connection to the server where the store procedure is defined, it should be visible to ignition automatically after having been created. Now, we must create items that will map to the parameters in our store procedure. For input value, we'll just select a ramp tag from our OPC browser and drag it into our items lists. The target name or first input or output parameters. Selecting the dropdown, we can see the parameters in our store procedure. I want this rent value to be stored into my database, so I will map it to my input parameter value. For the output parameters, we'll use Writable tags from our OPC browsers, such as WritableInteger1. We'll map this to our row count output parameter. Next, because we're not using this as an input, and in fact, we can't because it's defined as only as an output, we'll set the target name to read only. For our last parameter, I will use WritableInteger2. And we'll map both the target name and the output to the same parameter, which is counter. Now with a group configured, I enable it and I save my changes. As soon as we enable the group, we see that a value begins writing. Our row count is being written back and our counter is being incremented. This is a simple example, but shows how to map to all the different types of parameters in a store procedure. Additionally, we can choose them at the timestamp or quality code to other parameters. Items can also be mapped to return the value of a procedure if the database supports it. For example, in my SQL stored procedures can not return values, but functions can. So the exact mapping will depend on the definition of the procedure and what the database will actually support.

</details>

---

### 5. Block Group Type Video at Inductive University

:::tip Video Link
Watch the video: [Block Group Type Video at Inductive University](https://inductiveuniversity.com/videos/block-group-type/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    The block transaction group is a type of group that stores data vertically in multiple rows under the columns defined. This is opposite of the standard group, which stores data as multiple columns in a single row. Beyond this distinction block groups operate very similarly to standard groups. They have all the same features such as bi-directional mode, triggers, handshakes and expression items. In my Designer's transaction group design space, I will create a new block transaction group named 'my group' and use it to write an array of data vertically into a single column of a table. We'll browse for an array of tags in one of the PLCs, my gateway is connected to. Select all the tags and bring them into the group's OPC items lists. You'll note that unlike a standard group, which will create multiple columns of data here by default. We've created a single block item that maps to a column in our table. We'll set our table name for the table name we want.

**[01:02]** [01:02]
                                    As always, this table doesn't need to exist already. The group will create it for us when it first executes. The block item defines all of the sub items coming from the OPC server, and supports many of the features that were used to have such as scaling dead band and alarming. In addition to inserting the data, we can choose to add some additional data that might be useful to us. For example, we can store the row ID, which will provide an index for the array, and we can store the block ID which would be a unique number incrementing each time a new block is inserted. In this case, we'll insert new values and we'll choose to insert them every 10 seconds. When we start the group after having saved our changes, it will create the table and begin inserting values. In the database we can now see the rows for the first block inserted, along with the block ID and the row ID that we chose to also include. Now, every 10 seconds, a new block is inserted. As mentioned, block group supported bi-directionality, just like standard groups.

**[02:03]** [02:03]
                                    So instead of inserting a new block, we can choose 'bi-directional DB wins' and set the group to update or select the first block. If we save the group in this state, we can go into the database and our right to the column will be synchronized automatically to the PLC. This is because bi-directional mode will ensure that a synchronization between database and OPC. Additionally, because all of the rows in the block group are stored inside of a transaction, you can achieve very high performance of writes. This makes block groups great for storing large amounts of history or bulk data from the PLC.

</details>

---

### 6. Tag References vs. OPC Items Video at Inductive University

:::tip Video Link
Watch the video: [Tag References vs. OPC Items Video at Inductive University](https://inductiveuniversity.com/videos/tag-references-vs-opc-items/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    As we've discussed in previous lessons a Transaction Group is fundamentally designed to link PLC data points in a database table. In this video series, we'll be expanding on that Transaction Group model by discussing the different ways that those PLC data points and in fact, other types of data too can be referenced inside of a group. In this lesson specifically, we'll be focused on the two primary ways of pulling in PLC data for a group to use and to demonstrate we have a basic historical Transaction Group pulled up already. The first way to reference PLC data is using OPC tags from our ignition system. So for example, we can find our Tag Browser on the left-hand side, find a tag we'd like to pull in and then drag and drop that tag into our basic OPC slash group item section like so. When we do this, we're telling the Transaction Group to use the tags value when the group executes, which seems very straightforward as our OPC tag is already configured the tag can be used across our system can have tag history and security and so on.

**[01:05]** [01:05]
                                    There is one caveat here, though, remember that tags have their own update rate as determined by their tag group. Transaction Group executions are independent of the tag executions. So in some circumstances our group executions could become a little muddier. For example, if our group were configured to write to the tag here on execution but the tag only updates every 30 seconds it could take awhile for the PLC to receive the final value. If our group set up depends on very precise timing, this could cause trouble. For these situations, a second and more precise way of using OPC data is available. In the menu at the top of the Transaction Group Interface there is a Browse OPC Items icon. And if we click on that, it'll pull up our OPC browser. We can use this interface to add OPC Items directly provided our device supports browsing. In here, I'll expand ignition OPCUA server, Devices, GenSIM and then let's add sign one this time. So I'll find sign one and drag and drop into my OPC Group Items box.

**[02:06]** [02:06]
                                    This group item is different from the previous one in that it is defined only in the group. We have a direct OPC Reference and no tags need to exist for the Transaction Group to run. As a result, we're working independently from the tag execution timings and tag group configurations won't impact our group in any way. Instead, we'll pull in the value at the rate required by the Transaction Group. And some settings inside the group can determine whether this involves asynchronous OPC subscriptions or synchronous OPC read operations. Now, when we configure OPC Items this way we'll get some special options in the items configuration. I can access that configuration menu by double clicking on the item or by right clicking on the item and selecting edit. From this menu, we'll see that in addition to configuring basic OPC Item info I can go to numeric on the left-hand side and find numeric scaling and dead band options and I can go to alarming and find an interface for configuring alarms, just like we would have on a tag.

**[03:04]** [03:04]
                                    So in summary, when pulling data points from a device into a Transaction Group we can use either tags or OPC Items directly. Tags can be the better choice when we want to have the same data points and configuration in other places in ignition. While OPC Items can be the better choice when we're worried about complicated timing requirements or we want to avoid unnecessary delays in later videos in this series we'll look at some other possible item configurations in our Transaction Groups.

</details>

---

### 7. Expression Items Video at Inductive University

:::tip Video Link
Watch the video: [Expression Items Video at Inductive University](https://inductiveuniversity.com/videos/expression-items/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    As we've seen in previous lessons, transaction groups make it easy to work with data from our tag structure or from our device directly and store or sync that data against a database table. In this lesson, we'll discuss an additional possibility for a transaction group item, which is the expression item. Expression items allow us to populate a group item from custom calculations inside our transaction group using ignitions expression language. In many ways, expression items are like expression tags except that expression items exist purely within the transaction group and can reference other group items directly. These items can be helpful when the transaction group requires internal calculations to decide when to run, what to store, or what to return. For example, maybe we have some complex triggering requirements, say our group should only run on Thursdays when a certain device is online and a specific tag value is above 100. We could configure an expression item that represents whether these conditions are true, and then use it as a trigger for our group.

**[01:04]** [01:04]
                                    We discussed triggers in other lessons. Here we'll be looking at a slightly different application of expression items. I have in my designer here a historical transaction group that's simply configured to log three sign values to separate columns in a table. What I'd like to do is add a fourth data column that computes the sum of these three values. We'll begin by adding our new expression item. You might've noticed that in our interface here, there are two separate boxes for expression items: run always and triggered. And we'll discuss the difference between these two boxes in a later lesson. For now, I'm just going to find the plus tag icon at the top of the interface, click the little drop down on the right, and select New expression item. I could also have right clicked on a specific box to add it directly. Once inside our configuration interface, I'm just going to give my new item a name of sum and then a data type of float. And at the bottom of this interface, there's a right target section. By default, we're not using this new item in any way, but if I set the target type to database field and then set the target name to sum, we'll actually log this new data point to the database.

**[02:13]** [02:13]
                                    And with that, we're ready to configure our expression. So in the menu on the left, I'm going to go to Expression/SQL, and then I'll select an expression type of expression, is also SQL query type which we'll discuss in a later lesson. Now that I'm in my expression editor, I can use the tag icon on the right hand side to add references to tags or to group items, which are in this group tags tab. So one at a time here, I'll select one of my OPC items, click "Okay" to add it and then type + and go back into my tag interface, select the next one, hit "Okay", type +, and then go back in one final time and hit "Okay". And with that, we'll have our expression all sorted out. So we're simply summing together all three other fields and we'll be logging it into a column called sum.

**[03:08]** [03:08]
                                    So I'll click okay here to finish up. And now, of course, we need to save our group to see it in action. So if I click "Save" here, we should see a lashed value coming through on my item that matches this sum of the other three. And then if I go into Tools at the top here and pull up my database query browser, I can open up that table we're working with and we'll see that our sum is coming through just fine. Expression items offer us opportunities to customize the logic behind how a transaction group works beyond simple data references, and they can serve a meaningful purpose in many different flavors of transaction group.

</details>

---

### 8. Run Always vs. Triggered Items Video at Inductive University

:::tip Video Link
Watch the video: [Run Always vs. Triggered Items Video at Inductive University](https://inductiveuniversity.com/videos/run-always-vs-triggered-items/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In previous lessons,we've thought through a couple of the ways we can work with Expression items inside of transaction groups. But it's important we address one fundamental question behind Expression logic. That question is, when do the Expressions actually evaluate? Because Expression items in groups can be used in so many different ways, there are actually two separate options available to answer that question. The first option is Run-Always, which allows an Expression to run according to the transaction groups base timer or schedule, and the second is Triggered, which will only evaluate on valid executions of the group, meaning ones where the trigger is applied and we're preparing to actually take the transaction groups action. Before we explore these two options, I want to note that if a group is not using a Trigger as configured in the Trigger tab here, there's not going to be a difference between the two approaches. They'll effectively have the same results. With that said, to demonstrate the difference between these two modes, let's walk through a quick example. I've set up a basic historical group here with some OPC items, just some data points I'd like to log and a couple of Expression items called Running and Sum.

**[01:11]** [01:11]
                                    We've been working with some of these items already in this series. Right now I have both of our Expression items configured under run, always. So they appear in this run always Expression items box. Before we dive in deeper it's important to understand what our transaction group trigger is really doing here. For now I'll just say that my group will log data for as long as the running item here is set to true, and stop logging data when the value is false. I've used the trigger tab here to configure that behavior. For more info on transaction group triggers check out our topic on the trigger tab. So moving on here, just incidentally I have the running items set up to use my running tag in the tag browser, which will keep things simple. Referencing a tag value like this doesn't require an Expression item, but it'll be helpful for our demonstration. To test my trigger set up here, I'll toggle my running tag to false, like so, and that'll update our Expression item, and we'll see that our group stops running.

**[02:07]** [02:07]
                                    So our execution count stops ticking up and we'll no longer get any new records being logged. Our executions will be suspended for as long as the running item stays false. Notice that even though my group is not currently running, both of my Expression items we'll continue to evaluate every second, which is precisely because they are configured as run, always Expression items. If they were configured as triggered Expression items, they would have halted execution along with the rest of the group. With that in mind, let's look at what each of these expressions is doing, and then decide whether they should be configured as run always or triggered. And we'll start with our sum item here, which is giving us a sum of the three signed values in our group and saving that to its own column in the database table. At present with our group not running and data not being logged, There's no need to perform that calculation, since we don't plan on actually saving the sum. As a result we can easily reduce the overhead of our group by configuring this Expression item as triggered. To do that I'm just going to double-click on the sum item, find the evaluation options heading towards the bottom of this interface and turn off the run, always check box, and that's all I really have to do.

**[03:12]** [03:12]
                                    So when I click, okay, here, we'll see that the item has moved into the triggered table. We also could have clicked and dragged the item over directly. for a simple Expression like our sum, the performance benefits here won't be too noticeable, but for an Expression item running bulky sequel queries or using more complex Expression functions like run scripts, this optimization could eliminate unnecessary database, device, and network traffic when the group is not active. So now that we've addressed the sum item let's take a look at the running item. For this item, we need to take into account that it's being used as the transaction group trigger, which actually makes it imperative that we mark this Expression item as run, always, because we can't trigger our group off an item that itself only evaluates when the group is triggered. We would end up with a group that is impossible to turn on. In fact, it isn't directly possible to configure a triggered Expression item as a trigger for our group.

**[04:04]** [04:04]
                                    So we'll leave that item in the run always box. In summary, most Expression items can be configured as triggered Expression items provided that they're not being used in the transaction groups trigger configuration. Any Expression items that are being used for the group triggers should be configured as run always. And again, if your group is not using a trigger at all the two options are effectively the same.

</details>

---

### 9. Hour and Event Meters Video at Inductive University

:::tip Video Link
Watch the video: [Hour and Event Meters Video at Inductive University](https://inductiveuniversity.com/videos/hour-and-event-meters/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to talk about event meters and hour meters, which are special item modes that can calculate useful meta information about a value coming into the group. Typically, these item modes are used with Boolean items, and can be used to count the number of times the value becomes true, in the case of event meters or calculate the duration of time the value is true in the case of hour meters. They can also be used with numeric values with zero translating to false and all other values translating to true. To demonstrate, I have some Boolean values coming into my historical transaction group. And to keep things simple, they're all tied straight to the same Boolean tag in the tag browser. So the items are pretty much identical apart from the names. I've set the names to reflect what I'd like to make each item show, but I haven't configured any of the items beyond tying them to the Boolean tag and renaming them. So I'll leave the tag value item alone here since I want that to represent the original value on the tag unmodified. We'll skip to the second item here, which is time on.

**[01:05]** [01:05]
                                    I'll double click on the item to bring up its menu. And once we're in here, we want to find the value mode settings and the mode heading beneath that. My goal for this item is for it to reflect the amount of time in seconds that the tag has spent in the true state. So I'm going to change the mode here to hour meter, which we'll do precisely that. Rather than returning the value on the tag, the item will count up from zero every time the tag is set to true and be reset back to zero every time the tag is set to false. The unit for the count is decided by the units field here. So if I expand the dropdown, we can count up in milliseconds, seconds, minutes, and so on. And finally, since we now have a counter here, I'm going to find the data type in the upper right-hand corner and change it to Int4. So to see this in action, I can click OK at the bottom and then I can save my group. And we'll see that rather than showing our Boolean value, the time on item is counting up from zero.

**[02:04]** [02:04]
                                    And if I toggle my tag off, we'll see that the counter gets reset to zero. And if I toggle back to true, the count begins again. For our next item, we'll look at a couple of ways of modifying this behavior further. I'll find my way into the total time off item. Double-clicking again to access the menu. And in here, we're going to take a couple of similar steps. I'll set the data type to Int4 and the mode to hour meter. From there, one change I'd like to make is that I want to monitor the time the tag is false rather than the time the tag is true. This change is pretty easy. I just need to check the on zero checkbox. So we'll look for a false or zero values rather than true or non-zero ones. The other change I'd like to make here is that I'd like the counter to not reset when the value goes to true. In essence, I want a cumulative account for the amount of time the value is false while the group is running, rather than just the count of the number of seconds since the tag was last set to false.

**[03:07]** [03:07]
                                    To do this, I just need to check the retentive checkbox, which means that when the value gets set to true in this case, we'll pause the counter rather than reset it and pick it up at the same place when the tag value goes back to false. So with that done, I can click OK, and then I can save my project and we can see if I toggle the tag a few times, we'll see that the total time off value is sticking between separate runs as we intended. A configuration like this can be useful if we're looking to track something like downtime and uptime durations. We could just configure an hour meter on a status tag just like this. Finally, I'd like to take a look at this total events item. So I'll open it up by double clicking one last time. On this item, I just wanna count the number of times the tag value has transitioned from false to true, rather than calculating a duration. There is a mode suited for this and it's the event meter mode here.

**[04:03]** [04:03]
                                    This mode will detect and count rising edges on my tag. Meaning changes from false to true or from zero to non zero. If we want to catch transitions in the other direction, meaning from true to false or non zero to zero, we could use the on zero checkbox to flip the logic. Note that the retentive option is not available here since we don't want to reset the counter if the value toggles. In fact our whole objective here is to count the number of times the toggle occurs. Effectively, whereas our meter is useful for tracking among other things uptime and downtime durations, the event meter is useful for counting the number of uptime or downtime events instead. So with that said, I'm just going to use the event meter mode and also take care to once more change my item data type to Int4 so that it can effectively represent a counter. And I'll conclude by clicking OK. And then I'll hit save, our group will start again. And I'll try toggling the tag a couple of times. And as we can see our event counter is increasing as we toggle the tag.

**[05:05]** [05:05]
                                    That about wraps up our discussion on basic hour and event meters. They are great approach to getting specific metadata about the behavior of numeric or Boolean group items, and can be handy in a variety of group configurations.

</details>

---

### 10. Resetting Hour and Event Meters Video at Inductive University

:::tip Video Link
Watch the video: [Resetting Hour and Event Meters Video at Inductive University](https://inductiveuniversity.com/videos/resetting-hour-and-event-meters/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In previous lessons, we looked at how hour and event meters can help us track the behavior of numeric and Boolean group items. As we've established an event meter is counting the number of times a tag becomes true or becomes false depending on its settings. Similarly, we've discussed the retentive property on hour meters, which allow the meters value to be held rather than reset to zero. In both cases, we faced the prospect of a group item that counts up in value forever and never gets reset. In this lesson, we'll be exploring reset functionality in a bit more depth particularly for event meters and retentive hour meters since non retentive hour meters reset on their own. Here we'll be working with the group items from the prior lesson in this series. So we have a Boolean tag and then some hour and event meters configured against it on our other items. Let's say open up my total time off item which is a retentive hour meter that will count up forever. One thing I can do in here is check the reset on condition checkbox, which will allow us to configure a logical check that would reset the counter if it evaluates as true.

**[01:09]** [01:09]
                                    So here maybe I'll opt to restart the total time off counter if the time on value goes above, let's say five. So if our Boolean tag is set to true for long enough in this case five seconds, we will wipe this counter. What I do here is click that tag icon and then select the time on group item, like so, and then click Okay. And then we'll have our check be greater than five. So setting that number to five will give us the check against time on that we need. So I can include by clicking Okay. Hitting Save, and then testing it out. So with the tag set to false, we'll get our counter going. And then once we set it to true, if we wait five seconds, we can eventually see the total time off item go back to zero. The primary way of resetting a retentive or event meter is using that reset on condition checkbox.

**[02:05]** [02:05]
                                    It's worth noting though that it is also possible to reset meters by writing to them directly. Of course, the caveat here is that given the unique way that a meter is configured, the only opportunity you typically have to write to a meter item directly is from the database which won't always be feasible or meaningful depending on the group that you have set up. However, in certain situations typically making use of a bi-directional DB wins update mode we could have an hour or event meter that we logged to the database, but also reset via database edits. We could also write to the item from either a success or failure handshake. If we were to pursue either approach one bonus is that we could write any value we want to the counter rather than just zero. So that wraps up the ways we can reset an hour or event meter inside of a transaction group based on a simple logical or numeric check via database edits or using a handshake.

</details>

---

### 11. SQL Query Expression Items Video at Inductive University

:::tip Video Link
Watch the video: [SQL Query Expression Items Video at Inductive University](https://inductiveuniversity.com/videos/sql-query-expression-items/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to talk about using a SQL query expression item. in SQL query mode they can typically be used in one of two ways. They can execute a SELECT statement to retrieve a value that can then be used by the group or written to the database, or they can be data modification statements such as update, insert or delete where they might reference items in the group in order to write those values to other places in the database. A SQL query expression item can do all of the things that other expression items can do. For example, it can write to database columns or it can write to other items and it can reference the group's items inside of their query. Let's take a look at selecting a value out to use as a trigger. I'm going to make a new expression item and change the type to SQL query in the item configuration window, besides the text field for writing the query, we have the ability to set the data source that we will target which can be the same or different than that of the group as well as the setting for the query type.

**[01:19]** [01:19]
                                    The item has to know whether the query is a select or an update query, and usually can auto detect, but for more complex multi line queries or when Column stored procedures it may be necessary to set it directly. Our example group here updates the first row of a table and has a column called trigger column. So as an example, we'll write a query that will select that value from the table, and we'll use that to trigger the group. I've written this simple SELECT statement and I'll rename the item and set it to run always because I want it to always be checking the value. Now I'll set the group trigger.

**[02:05]** [02:05]
                                    Set it to true and enable and save the group. If we go to the database and update the column on the next execution the SELECT statement will see the new value which matches the trigger condition and the group will begin to trigger which we will see as the ramp value being updated. Now let's look at inserting a value into another database table each time this group execute it. It would probably be easier to just create a second transaction group for what we are about to do but hopefully this serves to demonstrate what can be done. We will create a new expression item and set the name. We'll leave it set to run on the trigger and we'll come over and create a SQL query, set it an insert statement. At this point, we'll reference a tag in our group that has the value that we want.

**[03:08]** [03:08]
                                    The reference will get injected directly into the query as if the value had been typed by hand. If we save the item, that's all we need. Now, each time the group executes and is triggered that insert statement will be run with the current value of our ramp tag. We can see in our database, our original table where the ramp value is still being updated. And in the second table we can see the new ramp values being inserted. SQL query expression items provide a great way to interact with data from different parts of the database. The ability to query from different database connections than the group is set to use is a great way to get data from other systems. However, it's important to keep in mind the impact that running queries can have on a system, creating many SQL items inside a large number of groups can really drive up the average query count against your database so it's important to be mindful of the number of queries that you create, and when they get executed.

**[04:12]** [04:12]
                                    Running queries on triggers can be a way to improve the situation and avoid problems.

</details>

---

### 12. Group Update Rate Video at Inductive University

:::tip Video Link
Watch the video: [Group Update Rate Video at Inductive University](https://inductiveuniversity.com/videos/group-update-rate/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at the update rate of transaction groups. Everything that transaction groups do is driven by the group's execution scheduling. This small section around the top of the action tab, drives everything that a group does. There are two modes for scheduling group execution, a basic timer, and a schedule. The basic timer allows you to run the group at a set rate, while the schedule can be times of day or ranges of times, which will then run at a rate that you specify. This execution scheduling can be thought of as the beating heart of the group. It dictates things such as the OPC subscription rate, and drives all evaluation. For example, if we set the group to run at a one minute rate, every minute the group would first come in and evaluate it's pre-trigger conditions, then it would look at the trigger configuration, first the on change tag conditions, and then the specific trigger condition.

**[01:09]** [01:09]
                                    If these were true, or in this case not enabled, it would go on to evaluate the triggered expression items. And then finally, it would interact with the database as defined on the action tab. In timer mode, we simply specify a rate that we want the group to run in, by entering in a numeric value and adjusting the units. In schedule mode, we can specify times of day or ranges of times. For example, if we wanted to run at 8:00 AM, and then continuously from 12:00 PM to 3:00 PM, we could put in a schedule such as this. Since we have a range, we need to specify a rate for how the group will run during that range. Let's say we wanted every 15 minutes. One interesting point about the scheduling system as opposed to the timer, is that the execution aligns to your specified start time on the update rate. So for example, we'll know that we will get recordings at 12:15, 12:30, 12:45, and so on.

**[02:11]** [02:11]
                                    Contrast that with timer mode, where without the use of a special triggering expression item, it's impossible to specify exactly when the group should run. It's all a function of when the group first starts running, and its update rate. Although these options are fairly straightforward, it's important to understand that these are the foundation for the group. And so nothing else in this group is going to run faster than what the schedule dictates. Remember, a great amount of flexibility can be derived by using the timer in conjunction with expression items and the triggering system, both of which are covered in other videos.

</details>

---

### 13. Update or Insert Group Video at Inductive University

:::tip Video Link
Watch the video: [Update or Insert Group Video at Inductive University](https://inductiveuniversity.com/videos/update-or-insert-group/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    Transaction groups are normally used to insert or update a particular row in a database table. However, it's also possible to use them in a manner that will update a row or insert a new row if a specified key combination is not present. So for example, we could create a new standard group and bring in some tags that represent the current values of a particular batch. To get the table created, we'll give it a name, and I'll enable it one time set to update the first row, just to create all of the columns. With that done, I can pause the group, and I'll set the batch ID to be read-only, because we want to use it in our where clause. But we don't necessarily need to write new data to that column. Back in the table action section, we'll select key value pairs.

**[01:04]** [01:04]
                                    This is where we'll map the column batch ID to a value, in this case, the batch ID tag. Now we'll select this option below that says insert row when not present. This option works with any number of parameters in the key value pair table. So you can have multiple dynamic values, and the group will insert a new row any time any of the values have changed. We'll see it in action with a single value. Now we can run the group and take a look at the database table. We'll see that there's one row inserted for our batch ID zero, and it is constantly updating with the new values from the tags. If we modify our batch ID tag value, a new row will be inserted on the next execution, and it will become the target of the following values. This simple example shows how you can create a group that can dynamically track part numbers, batch numbers, barcodes, or anything where you have dynamic values associated with a changing ID.

</details>

---

### 14. Trigger – On Value Change Video at Inductive University

:::tip Video Link
Watch the video: [Trigger – On Value Change Video at Inductive University](https://inductiveuniversity.com/videos/trigger-on-value-change/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    When using Transaction Groups it is often useful to only have the group execute when the tag values being monitored have changed. This could be any tag value in the transaction group itself or it might be a specific tag or a set of tags that you want to monitor. Here I have a historical transaction group logging three Integer values and a Boolean value to my database at a one second rate. I can configure this transaction group to only execute when any of the values I am monitoring changes. This can be configured in the Trigger section of the transaction group. The first and simplest method of restricting group execution is to have the transaction group, Only evaluate when values have changed. Enabling the group of this configuration will cost the group to execute the first time. I'll not execute again until any of my tag values here change, like so.

**[01:09]** [01:09]
                                    I can go even further and restrict the group to only execute if a specific tag or tags change value. I can change the mode from, All tags to Custom. I can now press this Select tags button and choose which tags needs to change for my transaction group to execute. I can select say, Integer A and Boolean A. Now the group will only execute when either of those values change. It does not require that both of them change, it is an either, or scenario. The third way we can limit a transaction group's execution is via a trigger set up on a specific tag. So for example, if we wanted the group to execute only if Integer C changed value, I could enable my trigger by toggling the setting, which now requires this group to, Execute on a trigger.

**[02:06]** [02:06]
                                    I can then use this dropdown and choose Integer C to be my trigger item. If I set my trigger configuration to be, Active on any change, anytime my Integer C see has changed value my trigger condition will be met and the transaction group will execute. With my trigger configuration on Integer C like this, the group would act the same as if I had selected Integer C as part of my selected tags list above. However, both of these settings can be used together for finer grain control. So to summarize, in this particular configuration we have selected Integer A and Bullion A in the top on change condition. And then down below, we've set Integer C as our specific trigger condition. When used together, this means that the group will first look at these two values, Integer A and Bullion A And only when one of those have changed, we'll look at the Integer C value.

**[03:06]** [03:06]
                                    If Integer C has changed as well, the group will then execute. With all of these conditions combined, there's a great deal of flexibility in restricting group execution and logging data only when you need to.

</details>

---

### 15. Trigger – While Condition is True Video at Inductive University

:::tip Video Link
Watch the video: [Trigger – While Condition is True Video at Inductive University](https://inductiveuniversity.com/videos/trigger-while-condition-is-true/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    A transaction group can be configured to execute continuously while a trigger condition is met. Here I have a historical transaction group logging four tag values to my database at a one-second rate. I can configure this group to execute on a trigger. Notice our Boolean A tag here. I can head over to the Trigger tab on my historical transaction group and use our Boolean A tag's value to control the execution of my group. By default, enabling this group to execute on a trigger and selecting the Boolean A tag as the trigger item, like so will cause a transaction group to execute if, and only if, my Boolean A tag has a value of false. Enabling the transaction group and saving my changes with my Boolean A value set to true, I see the total executions of my transaction group do not change because my trigger condition is not met.

**[01:07]** [01:07]
                                    Toggling my Boolean A tag to false, I immediately see the transaction group begin to execute every second and log a value to my database every second due to my trigger condition being met. Toggling the Boolean A tag back to true will cause the transaction group to stop executing. I can change that transaction group to only execute if my Boolean A value is equal to true by simply using the not equal to zero trigger condition. Another example of this type of trigger would be to run the group while my trigger's value fell within a certain range. With a Boolean trigger, this might not make much sense, but if I set my trigger item to be, say, this integer B tag, I can tell the group to only be active or execute if this integer value is greater than, say, 50, for example. I can also tell the group to be inactive if the integer value goes below, let's say, 10.

**[02:10]** [02:10]
                                    If we enable the group with these settings, we will not see any rows inserted into our database unless the integer B value meets our trigger conditions. If the integer value goes to 65, the group will begin logging and will continue to log until our trigger item goes below 10. Using triggers, it is easy to capture data while some user-defined conditions are true. For example, you may choose to only record values to your database while a machine is running. In that case, you could have the group trigger from a bit's value like we had earlier. Or, as we did just now, we could have the group execute based on a numeric range, which could be used to capture abnormal events. For example, you can log your data to your database whenever a temperature value was outside of a certain tolerance.

</details>

---

### 16. Trigger – Rising Edge (Once) Video at Inductive University

:::tip Video Link
Watch the video: [Trigger – Rising Edge (Once) Video at Inductive University](https://inductiveuniversity.com/videos/trigger-rising-edge-once/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    It is common to trigger a transaction group to execute on the rising edge of a Boolean value. For example, let's say I wanted this Boolean tag here to act as the trigger for the historical transaction group I have configured here. I could add this tag into the group by simply dragging it over like so. I can choose to either store my trigger value to the database, or I can make it Read Only by setting the target name to Read Only. The target name in this case translates to the table column where this tags value will be written to. Making it Read Only means my trigger will not be written to the database at all. On the trigger tab of my group, I can enable this group to execute on a trigger. I can use this dropdown to select my Boolean tag as my trigger item. I will then set my trigger condition to not equal to zero which means this group will execute if an only if my trigger item has a non-zero value.

**[01:09]** [01:09]
                                    More importantly, however, I want to enable this setting here. Only execute once while the trigger is active. This means that the first time the group evaluates and sees the trigger value in a high state it will allow the group to execute once and it will not execute again until the trigger item goes from a low state to a high state again. If I save my group with this configuration we can now see that rows are only inserted each time the trigger tag transitions to true. Nothing happens until we toggle the trigger tag to false, and then back to true again. This is what is considered a rising edge trigger and allows you to trigger a group's execution only once based on a trigger condition.

</details>

---

### 17. Trigger - Reset Trigger Video at Inductive University

:::tip Video Link
Watch the video: [Trigger - Reset Trigger Video at Inductive University](https://inductiveuniversity.com/videos/trigger-reset-trigger/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    This historical transaction group that I have configured is logging data to my database at a one-second rate and has a read only Boolean tag that I want to use as a trigger to control the execution of the group. From the groups trigger tab I can require it to only execute on a trigger and then point my trigger item to my Boolean tag using this dropdown. I want this group to execute if and only if my Boolean trigger has a value not equal to zero or a true value so I can use this trigger condition here. I want to also toggle this setting. Reset trigger after execution. This means that each time the group evaluates and my trigger has a value of true. My trigger condition will be met and the group will automatically reset my trigger by writing a false back to it upon successful execution. I will enable my transaction group and save my changes to test it out.

**[01:07]** [01:07]
                                    You notice that every time I talk with my trigger bit to true. It automatically gets reset by the transaction group. Once it executes successfully. And my tag data reaches my database. If I were to change my trigger condition to be equal to zero, meaning only execute my transaction. If my bullying trigger has a value of false. I also see that with every successful execution my trigger gets reset, but now to a value of true or the opposite of what I defined the active trigger condition to be this mechanism has many useful applications. I can write a true value to my trigger tag from say a button script to trigger my groups execution for example, I can have pretty much any part of the ignition ecosystem trigger my group's execution just as long as it can write to this trigger tag. Another common situation is to have what's known as a PLC watchdog, where the PLC is setting this bit high and the group is automatically resetting it in order to prove that the group is still running.

**[02:11]** [02:11]
                                    This can also be used for flow control. As the PLC may load data into registers, set this bit high and then only load new data. When it sees that the group has executed successfully indicated by the trigger reset. Another way to accomplish this could be the success handshake, but we'll cover that in a future lesson.

</details>

---

### 18. Trigger – Handshakes Video at Inductive University

:::tip Video Link
Watch the video: [Trigger – Handshakes Video at Inductive University](https://inductiveuniversity.com/videos/trigger-handshakes/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    A transaction group's execution can have two different outcomes. Either the group executes successfully, or there is an error that prevents a successful execution. Both scenarios can be communicated to other parts of the Ignition ecosystem using the handshake mechanism. If I head over to the Trigger tab, of my standard transaction group here, towards the bottom, you will find the handshake mechanism. Here, I can define what group item I want to write to when my group execution succeeds. And I can define what group item I want to write to, should my group execution fail. You will note that in these drop-downs, I can only select from tags that are available in the transaction group itself. This is expected. If you want to write to a tag on group success or failure, these tags have to be a part of the transaction group itself.

**[01:04]** [01:04]
                                    If you do not wish to log these success/failure flags to the database, you can simply set their target name to be "read-only", like I have done here. Whatever you choose to do, the success and failure flags will allow you to monitor the execution of your groups. Maybe you have other processes in your plant floor, that are dependent on your successful transaction group execution. These handshakes become crucial for such configuration.

</details>

---

### 19. Realtime Group Video at Inductive University

:::tip Video Link
Watch the video: [Realtime Group Video at Inductive University](https://inductiveuniversity.com/videos/realtime-group/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In previous lessons, we saw how a transaction group can be configured to log tag information into a database for historization purposes. It is also possible to have a transaction group record real time tag information to a database. This means that as tag values change in ignition, the transaction group will update the database with the new values, rather than continuously insert new values into the database. Having the database continuously update with your tags real-time values, means that this tag data can be accessed by anything that has access to your database. Making, sharing tag data between two systems, quite simple. Let's explore what this will look like. Here I have a brand new standard transaction group named Tower One. I want this group to keep track of all my tower one's real time tag values here. To do that, I'll simply drag all my tower one tags into my group, like so, I will make sure my group is pointing to a valid data source or database connection, and I'll tell the group to write this data to a table named Towers, and I'll press Enter.

**[01:19]** [01:19]
                                    This group will log real-time data, so for my table action, instead of inserting a new row into my tower's table with every group execution, I will tell it to update the first row like so. I will enable my group and save my changes. I can now click on the database icon next to my table name to have the database square browser show me my group's data in the database. Setting the database query browser to auto refresh, you will notice that with every group execution, the first record at my table, constantly gets updated with my tower one tags, real time values. What if I had more than one tower? Well, my tower one group is updating my tower tables first row as I have it configured here.

**[02:08]** [02:08]
                                    If I wanted to log data for a second tower on this same table, I would first have to insert a new row into the table like so. I will require my tower's table to see my newly inserted row and notice how this new row has a new tower index of two, we will use this index shortly. Now I will create a new standard transaction group. I'll name it, Tower Two, and create it. I will grab the tags from tower two here from my tag browser, and just like before I will drag them over to my new groups OBC items table. I will configure its data source to point to my configure database, and I will tell it to write this tag data to my same tower's table. Now for the table action, I will also choose the update option, but instead of updating the first row, I want this transaction group to update the row that has a towers index of two.

**[03:10]** [03:10]
                                    I will do so by selecting key value pairs here. I will add a new key value pair by pressing this button for my column cell, I want to select my towers index. For my value, I will set it two. This means that this transaction group will update the row in my towers table with a towers index of two. I will enable my group, save my changes, and I'll click on the database icon next to my table name once more to see my database data again. Setting the database query browser to auto refresh once more, you will notice that my tower one transaction group, is updating my towers tables first row. While my tower two transaction group, is updating the row with a tower index of two. Now just like I did here, I can have as many transaction groups as I want update an individual row in this tower's table.

**[04:07]** [04:07]
                                    Since this tower's table is constantly updating with real time tag values, anything that has access to this database will be able to see this data as well.

</details>

---

### 20. Bi-directional Group Video at Inductive University

:::tip Video Link
Watch the video: [Bi-directional Group Video at Inductive University](https://inductiveuniversity.com/videos/bi-directional-group/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    A bi-directional transaction group is any transaction group that is configured to write bi-directionally from my database tool OPC or tags. In other words, it is not a group that is inserting new records or new rows into the database. Instead the bi-directional group will synchronize OPC tag data with database data. Should I tag value change OPC side, this tax new value will be written to the database. Should our value change database side, this value change will be written back to OPC. Aside from data synchronization between OPC and a database, this type of group can be useful in a number of cases. For example, if I had a third party application writing data to my database, ignition will reflect this data in OPC. Similarly, if I write to one of my OPC tags in ignition my database will reflect this change and therefore this change can be seen from any third party application, as long as it has access to my database.

**[01:08]** [01:08]
                                    For our example, I have a basic standard transaction group created here. I will grab a few of my energy or tags from my tag browser and add them to my group. I will also add some string type tags. I will leave the execution of the default one second rate, the update mode, I will have to configure to bi-directional OPC wins. I will set the data source to be one of my gateways configure databases. Next, I will tell the group to use a table named My Data Table and press Enter. Remember because I have this setting enabled here, the group itself will automatically create this table for me, if it does not already exist in my database. Now for my table action, since this is a bi-directional group, instead of inserting a new row for every group execution, I want to set this to update select, the first record in my data table.

**[02:06]** [02:06]
                                    I will now enable the group and save my changes. If I click on the database icon next to my table name, I will see the database query browser up here, showing you the table my group just created along with all its data. Remember this group is configured to update select the first record on this table. What does this mean? If I change one of my integer tag values, and then re-execute my query in the database query browser, you will see that my OPC tag data was written to the database. Similarly, I can change this value in the database by pressing the edit button right here. Double-clicking on the cell I wish to edit and change its value. When I press Apply, you will see that the value I wrote to the database gets written to my OPC tag, essentially synchronizing the two. Now I can continue to my tag values or change my database values, and both will always synchronize.

**[03:04]** [03:04]
                                    Anytime a value changes in OPC or in the database, the other side would reflect this change. You may have noticed two different types of bi-directionality up here in my groups update mode. OPC wins and database wins. This allows you to control how the group will handle OPC records, not matching DB records, only on initial groups start. With OPC wins, if the group first starts, and sees OPC data does not match the database the OPC data will win and the database will be updated to match OPC. With database wins, if the group starts and sees the database data does not match OPC, the database data will win and it will be written to OPC. So bi-directional items and transaction groups are a concept that can provide a great deal of flexibility and help expose data in two different ways to outside sources. As tags in ignition, or as records inside a database.

</details>

---

### 21. Recipe Group Video at Inductive University

:::tip Video Link
Watch the video: [Recipe Group Video at Inductive University](https://inductiveuniversity.com/videos/recipe-group/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In the manufacturing industry, it is common to have product recipes stored in a database. Since transaction groups can bidirectionally read and write to and from a database, it is possible to have a group load recipe information from a database table into OPC tags. What do I mean exactly? Here in front of us, I have the database query browser, querying a table in my database called recipes. Here I have five recipes for making ice cream. For each recipe, I see different columns with different integer values which can be quantities for ice cream ingredients, like sugar, milk, water, as well as the string column for my recipe name. I want to load these ice cream recipes into OPC tags, so I will create a brand new standard transaction group. I chose this group type, because it allows me to not only write tag data to a database, but it works bidirectionally, meaning I can also write database data to OPC tags, which is what we want.

**[01:14]** [01:14]
                                    Now, my recipe requires three integer values for my ingredient quantities, and one string value for my recipe name. I will grab three integer tags from my tag browser, and bring them into my group by simply dragging them over like so. I will also drag in a string tag for my recipe name. I will leave the execution timer at the default one second. I will then configure my table name to point to my recipes table in my database and press enter. Remember, this is where my recipes are stored, and I need this group to fetch this data and write it to my OPC tax year. Because of this, I also need to set my groups update mode to DB to OPC. Now, for my table action, I will not be inserting new records to this recipes table, I will be selecting data from this table, so I will configure the update select table action, and choose key value pairs.

**[02:16]** [02:16]
                                    I need to tell the transaction group which recipe to select from my recipes table, so I will add a key value pair. I will select the string one column as my key, and my string one tag as my value. In other words, I want this transaction group to select the recipe information that has a string one column value, that is equal to my string one tag value. We will see what this looks like in a second. But before we test it, let's talk about the target name column here. I will bring up my database query browser again, to aid in my explanation. My first tag, integer one, has a target name of integer one. This means that the recipe value in the integer one column will be written to this integer one tag.

**[03:09]** [03:09]
                                    Similarly, my integer three tag has a target name of integer three, which again means that the recipe value in the integer three column will be written to this integer three tag. Now the string one tag value is how we tell the group which recipe values to write to our OPC tags. For this reason, it does not require a target name, and it can be made read only. You can think of this string one tag as a recipe selector. Now, let's enable the group and save our changes. I will set my string tag here to say chocolate. And you will notice that the chocolate recipe values are now loaded into my OPC tags. If I set my string tag to vanilla, the vanilla recipe values will be loaded to my OPC tags. This is because remember, my group is selecting the recipe that has a string one column value that is equal to my string one tag value.

**[04:13]** [04:13]
                                    You will note that every second, the group will execute, even though my selected recipe does not really change. This constant execution is inefficient, and can add overhead to a network, a database, or your PLC. What I can do is head over to the group's trigger tab, and I can configure the group to execute on a trigger. I will select my string one tag as my trigger item, and select the active on value change trigger condition. This means that this group will only ever execute when my string one tag value changes. If I save my project and write a different recipe name to my string one tag, you will notice that the group will only write to OPC once every time I change this string one tag value. As we just saw, thanks to the flexibility of transaction groups, we're able to fetch data from a database, and load it into OPC tags.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
