---
sidebar_position: 20
---

# Reporting In Ignition - Video Transcripts

This page contains transcripts from the reporting-in-ignition video course.

## Overview

These transcripts are automatically generated from the [reporting-in-ignition Course](https://inductiveuniversity.com/courses/ignition/reporting-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 4:57:49 PM
Source URL: https://inductiveuniversity.com/courses/ignition/reporting-in-ignition/8.1
:::

## Video Transcripts

### 1. Reporting Interface Video at Inductive University

:::tip Video Link
Watch the video: [Reporting Interface Video at Inductive University](https://inductiveuniversity.com/videos/reporting-interface/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    Built to be intuitive and familiar the reporting workspace has a logical workflow which makes it easy for anyone to create meaningful reports. Before we talk about the workflow, let's first mention where you create and find your reports. Any report that is created in your project will be located in the project browser under reports. You can see my project already has this existing report here, and if you click on reports, we are brought to the welcome tab. Here we can view and access any recently modified reports. Additionally, we have two options to create new reports. We first need to provide the report a name. I'll go ahead and title this as new report. For our options the blank report allows you to design your report from scratch and the tabular report is a template with some sample data and a report design. After making our report selection here, we can go ahead and click on create to generate the report, I'll go ahead and create a blank report. This brings us to the report overview tab, which provides some valuable information at a glance. Towards the top, we again see our report name.

**[01:07]** [01:07]
                                    This also gives us the opportunity to change the name from here by clicking into the text box. I'll keep it the same for now. Below the name, we have information on when the report was last scheduled to run and when it's next scheduled to run. We also get a snapshot of the report. This is obviously blank for now since we opted to go with the blank report. Now with any new report, we'll need to configure it to show anything meaningful, and the first stop for this is the data tab. On the left hand side, we have two sections showing us our available parameters and data sources. By default, new reports come with these start and end date parameters. These are expressions where our end date uses the now function, which gathers the current time. The start date uses the date arithmetic, to look at the time eight hours previous to now. Parameters are similar to custom properties on vision components, and you can create any number of parameters you'd like. We can make use of this add icon to do so and select a new parameter.

**[02:02]** [02:02]
                                    This lets us give our parameter a unique name, a type, and a default value. We can also use the add icon to add a number of different data sources. You can see we have different query types, tag data, and alarm journals. I'll go ahead and create an SQL query. Now, if there's a problem with your data sources or parameters, you can make use of the design tab for error checking. When I click on design here, we see this data collection error pop up towards the bottom, letting us know my parameters missing a default value, and that my SQL string cannot be empty. So we'll head back to the data tab and delete our query, and we'll give our new parameter a default string of a fake company name, let's say Builders Incorporated. After defining your parameters and data sources, you are then ready to start designing the report. We'll go ahead and move over to the design tab. If you've ever designed a vision window, the design tab should make you feel right at home. Starting from the top left the structure of a report is represented in the project browser tree, allowing easy visualization of the tree elements on your report.

**[03:03]** [03:03]
                                    In place of the tag browser, there is a key browser that gives you an easy way to add the data sources and parameters that you configured in the data tab to the report. For example, I could expand the parameter folder and drop in my new parameter to the top left of the page. Once you have a component on the page, if you select it, you can configure it further in the property inspector. Let's go ahead and update the color of my parameter string. We can go to the properties tab and then let's set our text color to blue. Let's also increase the text size a bit with the dropdown menu on the font property, and let's give it a size of 20. You can also grab components off the reporting palette on the far right and add it to the page. These components are reporting specific, so they won't necessarily share the same behaviors you may find with similar components in other modules. Let's go ahead and drag in an x y chart. As you're designing reports, you can make use of the preview tab to get a quick visual feedback on your report. We can see our page has our parameter string now visible and an empty XY chart.

**[04:02]** [04:02]
                                    Also in the preview tab, you'll see this XML data over on the right here. This is the raw data from my parameters and data sources. So you can see here the value for end date, the value for new parameter, some built-in keys, and the value for start date. Once your report is looking good, you can then start distributing it with the schedule tab. In this tab, you can create a new schedule with the add new schedule icon. In the top right, you can see the screen is split in that this top portion holds our list of schedules, and the bottom portion lets us configure them on the schedule tab. In the configure section we can set the frequency of the schedule. This is built using a cron tab expression, and you can use the common settings to select from a number of preset options. We see options like once per day, once per week, and so on. On the parameters tab, we can override the default value of any of our parameters. Here you'll see that all of my parameters are listed, including my new parameter down there at the bottom. Lastly, you'll see the actions tab. The actions tab is where you'll determine what you want to do with your report on your schedule.

**[05:03]** [05:03]
                                    If you click on the add new action icon here, you'll see that we can print the report, we can save it to an FTP server, we can save it locally to the gateway and send out an email. If none of these options work, then you also have the option to run your own script. So you can see that when you follow through the intended workflow of report design, you can easily configure and design a report in a quick and intuitive way.

</details>

---

### 2. Report Data Tab Video at Inductive University

:::tip Video Link
Watch the video: [Report Data Tab Video at Inductive University](https://inductiveuniversity.com/videos/report-data-tab/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**00:07** [ 00:07 ]
                                    In this lesson, we'll take a look at the data tab in the reporting module. When you're creating a report, the data tab is where you'll collect the various pieces of information that will go into your report. There are two main types of data. There are parameters and data sources. When you create your report, you always start with these two parameters, start date and end date. Whenever you select a type of data, in this list here, you'll always see some configurations appear. The various fields and configurations, that appear, depend entirely on the type of data you selected. Adding a new type of data is easy. We can simply click on the plus icon here, and we see a list of the different types. I'll select new parameter and we can see that it appears here in the list. I'll also give it a default value of five.

**00:58** [ 00:58 ]
                                    Let's switch over to the design tab. If we head over to the key browser, we can see in the parameters folder, here, if I expand it, that my new parameter is listed. Also, if we go to the preview tab at the top, we can see my new parameter and its value of five.

**01:15** [ 01:15 ]
                                    Now let's head back to the data tab. As you saw, the name of the parameter was referenced in the other tab. The names are fairly important. If I were to add a new parameter again, they can't both be called a new parameter. We always try to avoid name collisions here. It's also why you're seeing the little exclamation mark over here. I have to have unique names for these. Let's call this one B and I'll call this one A.

**01:39** [ 01:39 ]
                                    A has a value of five. We need to give a value to B. Now, you may have noticed the arrow icons, that are just to the right of my different types of data. These allow us to rearrange or change the sort order of my different types of data. It's possible for me to rearrange my parameters in the list, here. Now that's not just for organizational purposes.

**02:04** [ 02:04 ]
                                    All types of data can reference other types of data, that are above them in this list. For example, my parameter B here, can have an expression that references the value of A.

**02:17** [ 02:17 ]
                                    Now the value of B is going to be whatever the value of A is plus 10. If we head over to the preview, we can see A has a value of five and B has a value of 15. Let's head back to the data tab here. Again, this kind of referencing always looks above in the list. It always looks up. If I were to swap position of A and B here, now B is above A. B is also referencing A. Because I've sorted them like this, parameter B here, is not going to be able to find the value of parameter A. If we switch over to the preview tab, we can see that A still has a value, but B is showing a null value. We can also see that I'm getting a data collection error, down below. Really, there are two important lessons here.

**03:06** [ 03:06 ]
                                    One, if there are any problems with any of your data, you'll see these data collection errors in the preview tab. Two, in some cases, the order of your data in the data tab might be important. But again, really only if you're doing the referencing that I showed you.

**03:23** [ 03:23 ]
                                    Let's head back to our data tab. I'll switch the order, here. Earlier, I showed you that parameters need unique names. That rule also applies to any of your data sources. If I were to add two named query data sources, real quick, they can't have the same name. To change the name of a data source, you generally just need to find the data key property and type in a new name. Now, I don't actually need these data sources. So to round up the video, we'll go ahead and we'll remove these two data sources with the remove button, which always removes whatever item in the list here you have selected.

</details>

---

### 3. Report Design Tab Video at Inductive University

:::tip Video Link
Watch the video: [Report Design Tab Video at Inductive University](https://inductiveuniversity.com/videos/report-design-tab/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at the design tab. The design tab, in the reporting module, is where we will be visualizing all of the data we've collected in the data tab. Starting on the right hand side, we have our component pallet. This works like other component pallets, you can simply drag and drop to create a component. Now if we switch over to the preview tab, we can get a visual preview of what our page is going to look like. Now in this case my chart isn't showing any data, but that's because I haven't tied a data source to it. Now, I'll head back to the design tab here, and if I select my chart, you'll see that the property inspector, in the lower left hand corner, shows me some charting specific properties. So we know we can select a component to view additional properties. If I select the bar code, we'll see that the property inspector shows the configure barcode tab. Now, many of the components in the reporting module actually feature two tabs down here. In the very least, all components will list all of their properties in the property inspector. In some cases, such as our chart or barcode here, the property inspector may be split up into multiple tabs containing the properties and any additional configuration areas. In some cases, such as the chart I'm using up here, there's a chart options tab, which allows me to do things like add pens, and change the axes. Later videos will examine these properties a little bit further. For right now, we can head up to the key browser. The key browser is where you take all of the data that you've collected from the data tab, and then can decide what to do with it on your page. So when you create a new report, in the very least, you should have two folders here. One for parameters, where we see our initial start date and end date parameters, and then there's a built in folder that contains a whole bunch of keys such as the current page, the current date, and so on. Now the term key here, basically references a placeholder for your data. The idea being that you place your keys on the page somewhere, and then when we run the report, we'll look up the value of your key, and place that on the page instead. So for example, if I take my start date, and drag that onto the report, I can switch over to the preview tab, and we can see that the text in there has been replaced by the current date. Now, I'm going to add an extra piece of data to my report. I'm going to head to the data tab, and I'm going to just real quickly create a static CSV data source, just so I have some data to work with. Now, if I head back to the design tab here, you'll see that the key browser now has a data source. So we do split up the two types of data. Now, when I drag the start date key onto the report, it created a text shape component, which is effectively a label. Now, if we go into data sources, and take static data, which is a data set with multiple columns, we can drag static data to an empty spot on our page here, and that'll create a table component. I'll resize this real quick, and then I'll start adding some columns. And if we head over to the preview tab, we can see that the table is now starting to populate with some values. So this tells us that keys with a single value will create a text shape, while keys with a data set will create a table. Now, I'll head back to the design tab here. In some cases, maybe you want to rotate the page, or change the margins here. In this case, you can head over to the project browser and click on the report object itself, and you'll see a whole bunch of settings, specifically for the entire report. So I could rotate the page, I could change the margins. And even here we see that there is a dedicated properties tab for the entire report. Now in some cases, you may want to add additional pages to design with. Perhaps you wanted to do a summary page at the end, or a cover page on the front. You can accomplish this by coming up to the menu bar at the top, and looking at the pages menu. For example, if I wanted to add a page in front of my current page, I could select add page previous. So when I click on this menu item, you'll see that now I can now pick from both of my pages. I could maybe add a text shape here and place some text inside of there. Now, if I switch over to the preview tab, you can see that we have our cover page, and I could switch over to our second page. So we can see that the design tab of the reporting module is very similar to other work spaces in Ignition, in that you can drag and drop a lot of objects onto the page, and easily preview your work.

</details>

---

### 4. Report Schedule Tab Video at Inductive University

:::tip Video Link
Watch the video: [Report Schedule Tab Video at Inductive University](https://inductiveuniversity.com/videos/report-schedule-tab/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at the schedule tab in the reporting module. So, when you're creating a report, and you're in the schedule section here, You have a bunch of tools that allow you to generate the report automatically. Now, in this case, creating a schedule means that you want to generate a separate document, such as a PDF or a CSV, and then distribute it somehow. Each report can have multiple schedules. Adding a schedule involves hitting the little plus button that's in the upper right hand corner here. And then we'll list all of the available schedules for this one report. Of course, you can have multiple, as I mentioned earlier. If you need to remove a schedule, simply hit the little trash can icon. It will delete whatever schedule you had selected. Now, when you have a schedule selected, you'll see that this second set of tabs down below will become enabled. The settings you make down here only apply to whatever schedule you have selected up above. So if I change the time down here, for example, you can see that the schedule that I've selected now has the new time. This means that the tabs down below will change the settings for whichever schedule we have selected in this top table. Now, looking at this lower set of tabs, the schedule tab allows you to determine when this schedule should execute. The schedule uses notation similar to crontab. If you're unfamiliar with what that is, don't worry about it. We have these drop downs here to fill in the notation for you. Additionally, you saw me click on it already, there's a common settings at the top to kind of get you started. I wanted to mention this little enable checkbox down here. This checkbox allows you to disable a schedule. This means the report is still around, just the one schedule you have selected won't automatically execute. Now, let's head over to the parameters tab. For every parameter you have on your report, you'll see it listed over here. Now you see I only have the default parameters. I haven't made any other changes to this report. But if I did add some extra parameters, you'd see them down below. So for example, if I head back to the data tab, and I just add a new parameter, without making any other changes, if I go to the schedule tab, you can see that the new parameter now exists. With a schedule, parameters use their default value, unless you opt out with the little default checkbox here. Doing so allows you to write an expression to override the value on the parameter, but just for this one schedule. Now, in some cases, you may want multiple instances of the same schedule to run, but with different parameter values. That's simply just creating separate schedules, each with their own parameter configuration. So instead of trying to configure one of your parameters to have a range of values, you would instead configure one schedule, and then right click on the schedule, to copy and then paste, then edit the newly created schedule. Heading back down to the tabs at the bottom, the last tab is the actions tab. This is where we determine what do we want to do on the schedule. If you hit the little plus button down here, you'll see that there's a list of actions available. For right now, I'll take a look at the save file action, and you'll see it appear it in the list. Each schedule can have multiple actions, including the same type of action. So I could add another save file action here. For each of your actions, you generally have the option to specify a file format for the report. Now, if I head back to the action list here, talking about the rest of the buttons, the trash can is familiar and allows you to remove whatever action you have selected here. That middle button there allows you to run the action immediately. This is perfect for testing. So if I were to press this button now, I can take a look at my C drive, there should be a folder called Path, another folder called ToFolder, and it should actually have the name of my report, as well as the current time. So if we take a look at that right now, here in my C drive, I have Path, ToFolder, and there's my report. Now, of course if we wanted to change the name, we could also just change the notation down here. So for example, I could put in the minutes. Now if we try executing this again, we can take a look back, and should see that there's a separate report now showing the minute. Now, there's a lot more going on with all these actions here, which is why we'll talk about them more in depth in later videos. Now, the last thing I wanted to mention was this folder Path. This is relative to the Gateway, so this Path is relative to wherever Ignition is installed. And again, this is because reports are generated on the Gateway. So again, we're aware reports are run on the Gateway. If I head back to the first scheduling tab down here, the time you specify for the schedule is relative to the Gateway system clock. So you want to be careful when setting up schedules. Make sure you're paying attention to the system clock on the Gateway.

</details>

---

### 5. Simple Report Video at Inductive University

:::tip Video Link
Watch the video: [Simple Report Video at Inductive University](https://inductiveuniversity.com/videos/simple-report/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    Now that we have a solid foundation of the report designer interface, let's take what we have learned and create a simple report. The objective is to create a daily inventory report outlining the quantity of fruit available at a mock facility doing frozen smoothly production. To start, I already have this report created named fruit inventory. Let's click on the data tab so we can review the data sources we'll incorporate into the report. Under my parameters, I have this date time parameter using an expression function, which provides the current date and time. I also have the default parameters for start and end date. Below these in my data sources, I have an SQL query that selects everything from the fruit inventory table. Let's start by designing our report by going to the design tab. The first thing we typically need when designing reports is adding a title, so I'll create one by first clicking on the text component under shapes, and then clicking towards the top of my report to add that in. I'll type in the text box Daily fruit inventory.

**[01:03]** [01:03]
                                    The text here is a bit too small to read, so we can adjust the font by going to the properties tab of the property inspector with the components selected. Next, we'll click on the font property and click this dropdown to access our font options. I'll leave the font the same and I'll adjust the size to 40. Then I'll enable the bold property to true, just so it stands out a little bit more. Finally, I'll click okay to apply the changes. With these changes, we'll need to resize and position our title so we can first select the report by clicking in any empty space and clicking on our text box again lets us resize it with the arrow handles. Let's drag it towards the center of the report as well. Since we have a title in place, let's start adding in our data. I think a table component will be good here, so I'll drag one in from under the components section. We don't need all of these columns here in our details, so we can adjust this by clicking where we see object details. Next, we'll adjust the column count property by setting it to two. To drive the table's data, we'll need the table's data key, so let's select our table, and then we'll expand the data sources folder and our query.

**[02:07]** [02:07]
                                    We'll drag our query down into the data key. In the first column, we'll drag in our fruit key, and in the second column our quantity key. I'd like to adjust the font on these columns as well. So we'll start by selecting our fruit cell. Let's give it a size of 20 and set it to bold. And then for quantity, let's give it a size of 20 as well. Next, let's go ahead and resize this whole table and center it below our title. We'll go to the preview tab to see how that looks. We can see it's looking pretty good. Now as you're designing reports, you'll want to make use of this preview tab during the process so you can get an idea of how everything is coming together. Now, I'd like to represent the percentage of each category of fruit out of our total amount of fruit. Let's go back to the design tab. To accomplish this, let's drag in a pie chart from the graphs and charts section, and we'll drop it below our table.

**[03:02]** [03:02]
                                    Again, we'll drag our query to the data key. For the label key will drag in fruit and we'll drag quantity into the value key. Let's change our segment colors as well since the default pie segment colors are a bit ambiguous. We'll move over to the properties tab. Let's set our label style to outset to represent our percentage. Next, I'll adjust this labels format just to give us the fruit and the percentage. If you're curious about how some of these components and their properties work, then I'd recommend watching the specific component videos throughout this course. Finally, let's add the current date time to this report. We can make use of the text box again, and let's s place that in the bottom right corner. Then we can expand our parameters folder. Let's drag in current date time to this text box, and then let's resize this text box a bit. Let's go to the preview tab to see how everything is looking. We can see the report is looking good, and we have a simple representation of our inventory. Now this report is supposed to run daily, so let's go ahead and configure its schedule.

**[04:04]** [04:04]
                                    We'll click on the schedule tab to add the schedule. We'll click on the add new schedule icon. We'll leave the schedule frequency at this once per day common setting. Finally, let's go to the actions tab and I'll create a new save file action. At this point, you would just paste the path to the folder you'd like to save this report in. You can see that once we had our data sources ready, it was very easy to create a simple report within the report designer interface.

</details>

---

### 6. Parameters Video at Inductive University

:::tip Video Link
Watch the video: [Parameters Video at Inductive University](https://inductiveuniversity.com/videos/parameters/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll go over creating report parameters and configuring their  default values. Parameters are similar to custom properties on prospective and vision  components and they evaluate whenever a report is executed. When you first create a report, you'll start with two parameters start date  and end date. If we look at the default value expressions. We can see the end date is simply pulling the current time. And start date is using date arithmetic on the current time. It defaults to now minus eight hours, but we  can modify the expression and change it to something like 10 days  ago. New parameters can be added by clicking the plus button and  selecting new parameter. I'll call this into value. And I'll change the type to a long. Now I could type in any literal value here. But instead  I'll bind the default value to a tag I  have.

**[01:09]** [01:09]
                                    I can click the tag icon. Select my integer tag. And click ok. When the report is executed the value of the  parameter will match the value of the integer tag. Let's add some more parameters. I'll create another one and call  it string value. I'm going to give this a default value of my default. Since this is using expression language syntax. I need to make sure my string  literal is wrapped in quotes. Another thing that you can do is create a parameter that references  another parameter. I'll create a new parameter and call it reference. There's nothing here to click to add a reference to another parameter.  So we'll have to manually type it inside of curly braces.

**[02:04]** [02:04]
                                    Be sure to match the spelling in case or else it won't evaluate. I'll add a curly brace. The name of the parameter that I want to reference in my case  string value. and the closing curly brace this will evaluate to whatever the value of string value is  when the report is executed. This allows us to do things like concatenate additional text like  so keep in mind that the ordering of the parameters matters a  parameter can only reference another parameter that is  already been defined above it. If I were to move the order of these parameters. The reference wouldn't work. Next thing we'll take a look at is adding our parameters to our report. Let's head over to the design tab. Over here in the key browser. There's a folder called  parameters.

**[03:03]** [03:03]
                                    I'll start clicking and dragging the parameters over to the report. You can see that this automatically creates a text shape with the parameter. This is what happens with any type of parameter when dragged and dropped. I'll add some additional text to these shapes to make them readable. And now we can go over to the preview Tab and test it out. As we can see the N value is pulling a value of 2,000 from  my integer tag in my default is  showing up within the reference parameter. It's important to note that the scheduled report and Report  viewer component parameters take precedence over  default parameters. So any default parameter values  can easily be overwritten? Now, let's take a look at these parameters in a vision report viewer  component. I'll click on the report viewer. I've already set up and we can take a look  at the property Editor to see the parameters. We can type in new values for these parameters and see the report update.

**[04:13]** [04:13]
                                    Additionally I can drag and drop a tag onto a parameter to  set up a binding and once the tag value changes the report  updates. Finally, you can also set up a property binding to Change Report  parameters for example with the state range  component.

</details>

---

### 7. Basic SQL Query Video at Inductive University

:::tip Video Link
Watch the video: [Basic SQL Query Video at Inductive University](https://inductiveuniversity.com/videos/basic-sql-query/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll create a basic SQL query data source. This data source is the common type typically seen through  much of Ignition before version 7.8. It might  look similar to a query binding you would see on a vision component. To start, on the report Data tab, we click on the plus icon  and click on basic SQL query. When we create this data source, you can see a placeholder  query here. Moving over to the right side of the screen, we can take a look at some of the properties  here. The Data Key is also the name of the data source. I'm going to change this to Fruit Report. We can also select the Query Type from the drop down here. One thing to note is if you change the Query Type, your query  will be wiped out. Make sure to create a copy if you're going to change the Query Type. We can also specify the Database and modify the Preview Limit. We'll come back to the Preview Limit a little later.

**[01:05]** [01:05]
                                    Finally, there's an area where you can build out Nested Queries. Let's take a look at the data that I want to bring in. I'll head over to the Database Query Browser. And you can see that I have 10 rows of data within this table here that holds  information about customers orders of fruit. I want to pull in each of these rows into my report. I'll close out of the Query Browser and head back over to my report and paste my query here. I'll go to the Preview tab and as you can see all of the rows of data are being pulled into my report. If I go back to the Data tab, we can take a look at that preview limit again. This property limits the number of rows returned by your data sources when  in the preview mode. Change this to 5, and if I head back to the Preview, you can see that there are only five rows now. This can be useful when you want to look at the raw data or perform  any troubleshooting.

**[02:03]** [02:03]
                                    Keep in mind that this limit will only be applied to the preview. Another thing that we can do is filter the results of this query based  on a parameter. I'll create a New Parameter and call it 'Customer Name.' I'll give it a default value of Mary. But remember,  this can be overridden. now in the query we can add another line with a where  clause I'll click the parameter icon and Customer Name and you can see that  it adds the parameter to the query. Now since this is a string it'll need quotes. Heading back to the preview, we can see that there are only rows for Mary's data now. Now, let's take a look at a Vision report viewer.

**[03:03]** [03:03]
                                    I'll head over to my window that I've already set up. It has a Report Viewer  component and a drop-down list with each of the customers names. I have a binding on the customer name parameter that links it to the drop-down selection. And you can see that when I choose a different customer, a new report is generated with rows pertaining to  that customer.

</details>

---

### 8. SQL Query Video at Inductive University

:::tip Video Link
Watch the video: [SQL Query Video at Inductive University](https://inductiveuniversity.com/videos/sql-query/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to set up a SQL query data sourcing  report, which allows you to easily create parameterized queries. First thing I'll do is I'll create the SQL query data source and  start typing out my query. If I want to use a parameter, I can type in a question mark You'll notice the parameter area that just popped up below the query. This allows you to write an expression and reference one of the report parameters or  tag value. You can add as many parameters as you like and if you  click inside one of these areas, you'll see it highlights the question mark that  it corresponds to. One thing to note is that these front is prepared statements. So they're more  resistant to SQL injection attacks than the basic SQL  queries. Another advantage of the SQL query data source is  the ability to use the SQL query Builder, which you can  get to by clicking Show Builder. Before you click the Show Builder button select your database from the translator  drop-down.

**[01:07]** [01:07]
                                    If you can't find your database you can always select Universal. We can see all the database tables that exist within the selected  database connection over here. If I double click on one, you can see that this window appears the table's columns, and there's  now a query in the window below. If I want to query specific columns, I can  start checking some of the boxes. And you'll see that additional rows are added to the table here. Each of the columns in this table provides another option for modifying the  query. The Output column specifies whether the row should appear in the resulting data. The Expression column allows you to select a column from the table  that this row represents. The Aggregate column is where you can calculate the average count max/min  or sum of the selected column. The Alias column lets you specify an alternative name for  the column.

**[02:01]** [02:01]
                                    The next two columns Sort Type and Sort Order let you  specify a column to sort on and sort in either an ascending  or descending order. The Grouping column allows you to group the results. Criteria lets you specify a where clause. Finally, the Orc columns allow you to add additional conditions to wear  clause. You can also right click on the background here and add a new object. I'll add one of my other tables. If I wanted to join these two tables, the Query Builder allows that. All I need to do is drag and drop in the two columns that they share. In my case, the ID and equip ID columns. If I wanted to remove this join, I could right click on the connection here. But I'll leave it. Now that I've selected the data I want, I'll test it out. If I copy the query down below and paste it into the Database  Query Browser, you can see that it built a query that returns all the data I want.

**[03:04]** [03:04]
                                    As you can see the Query Builder is a powerful tool that can be  leveraged via the SQL Query Data source.

</details>

---

### 9. Named Queries in Reports Video at Inductive University

:::tip Video Link
Watch the video: [Named Queries in Reports Video at Inductive University](https://inductiveuniversity.com/videos/named-queries-in-reports/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to use a named query as  a report data source. I'll start in the Data tab of my report and when I create a new  data source, I can choose Named Query. In order to use a named query, I'll need to select one from  the Path field here. I'll click the magnifying glass icon and choose my named query. You can see that automatically brings in the query in any parameters since  this is a named query, I can't modify the query  from the report section. I'd have to go into the named queries area  within the project browser. However, since I set up my named query with a parameter,  I can pass different values to it for my report. If I select the named query parameter and click the magnifying  glass icon, I can also select one of my report parameters to pass.   I'll select my site parameter. Moving over to the right side of the screen, I can specify the  data key for this data source in like most other data  sources named queries can be used as part of a nested  query system.

**[01:07]** [01:07]
                                    If I head over to the Preview tab, my report has data from my named query. As you can see it's very easy to use a named query in your  report and pass parameters to it.

</details>

---

### 10. Tag Historian Query Video at Inductive University

:::tip Video Link
Watch the video: [Tag Historian Query Video at Inductive University](https://inductiveuniversity.com/videos/tag-historian-query/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to pull tag historian data  into your report via the tag historian query data source.  To get started, you can create a new data  source and select Tag Historian Query. The list of available historical tags will be listed in  this window on the left. I have some historical tags measuring tank values. I'll expand historical providers and I can drag and  drop my tags into the selected historical tags window. This will auto-populate the Tag Path column and the   Data Key Alias. If I were to change the Data Key Alias to something like  'my tag data' that's what I would look for in the key browser. The properties on the right side of the screen allow you  to change the data key for the data source, modify the query type,  limit the number of rows when in the Preview tab, and  configure a nested query system. Towards the bottom, you'll see the properties that allow you to  configure the tag history request.

**[01:03]** [01:03]
                                    I won't go into each individual property in this video.  But, this functions the same as a tag history binding in vision.  If you'd like to see more info on these properties, you can  refer to that page in the user manual. For this query, I'll set it up so that it pulls  the latest value from these tags. The way this differs from a tag history binding is when  using indirection. My tanks are specified by their tank numbers.  So I have a report parameter to help point to the tank I'd like to  pull data on. My default value for this parameter is one. To use my parameter in the Tag Path, I'll remove  the number and insert my parameter name with curly braces. If I head over to the Design tab, we can take  a look at the report layout. I have a table configured to display data from the tag  history data source. And the columns are listing my tag values in timestamps. To see this in action, I'll head over to a Report Viewer  component in my vision window.

**[02:04]** [02:04]
                                    You can see the report pulling in data here and if  I change the tank number, I get data on the other tank. As you can see, adding tag history data to your report  is very easy, and you can also configure indirection for greater  flexibility.

</details>

---

### 11. Tag Calculation Query Video at Inductive University

:::tip Video Link
Watch the video: [Tag Calculation Query Video at Inductive University](https://inductiveuniversity.com/videos/tag-calculation-query/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to import aggregated tag  history data into your report with the tag calculation query  data source. From the Data tab, the first thing you'll need to do is create a new data  source and select Tag Calculation Query.  The available historical tags window will list your historical providers and  you can drill into them to find your historical tags. I'm storing tag history on some tags that generate random  values that I'd like to add to my report. Once I find my tags, I'll drag them over to the  selected historical tags window. Next thing you'll need to do is select the calculations to  run against these tags. I'm going to choose Time-weighted Average sum and maximum. Next you can either choose a historical date range that  uses start and end date bindings or you can choose a real-time  date range where you could specify the most recent number  of your time unit of choice.   For example, you could pull the most recent 12 hours or seven days, etc. I'll go with the historical day range that uses my start date  and end date parameters.

**[01:08]** [01:08]
                                    I'll move over to the Design tab to show you what it looks like to add this  data to your report. I have a table here that is configured for my tag_calc data  source, and that has a column set up for each of the calculations.  If we look at the data source in the key browser, you can  see the different keys that I have access to. You'll notice that there are keys for each calculation, but the  individual tags aren't listed. However, there is a tag path key here. When I drag this into one of the columns, this will be populated with  the tag path/alias value. This is  assigned on the data tab. I'll head over to the Preview tab and we can see what this looks like. Let's say that I don't like the tag path in the report here and  this value actually represents a temperature. I can head back over to the Data tab and modify this data source. I can change the Data Key Alias here to temperature and when I go back to the Preview tab, you can see that  it now lists the new alias.

</details>

---

### 12. Alarm Journal Query Video at Inductive University

:::tip Video Link
Watch the video: [Alarm Journal Query Video at Inductive University](https://inductiveuniversity.com/videos/alarm-journal-query/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to populate a report with either alarm  data from a database or live alarm events using the  Alarm Journal Query data source. From the Data tab, create a new data source and select  Alarm Journal Query. On the right side of the window, there are the data source properties,  you can change the Data Key and Query Type or you can  set up a Nested Query. There's also a drop-down for selecting the name of the journal  you'd like the query from. On the left side, you can configure a start date and end date  for your query. These checkboxes allow you to select which alarm events to return  in your query. I don't want to see system events, so I'll uncheck that. There's also a checkbox that allows you to use current alarm statuses  instead of history. If this were to be checked, the journal name property would be ignored. Below this, there's the different filters that you can search against. The Source filter allows you to filter against the source path which includes the tag provider,  tag path, and alarm name. The Provider Filter allows you to filter against the tag provider.   The Display path filter lets you filter against the display path, which can  be customized on each alarm.

**[01:10]** [01:10]
                                    Finally, the Search Filter will look for your given string in  both the display path and source path. Any of these filters can be given multiple strings by separating each  string with a comma. Below the filters are drop-downs that will also allow you to specify a  minimum or maximum priority for your alarms. Each of these filters can be passed a report parameter that will be evaluated  when the report executes. I have a parameter named search param and I'm  going to use it with the search filter. I'll click the magnifying glass and select my parameter. I'll head over to the Design tab and we can take a look at the key browser. As you can see, there are a lot of keys that are available with  the Alarm Journal Query. I've pulled the display path active duration and event  state keys in my table, which will show me how long the alarm was active. If I go over to the Preview tab, we can see what this looks like.

**[02:04]** [02:04]
                                    Now I'll take a look at a Report Viewer component I have  set up in a vision window and we can see the parameter in action. The default value for this parameter was just a blank  space. But if I try a couple other strings, we can see  that the report will filter records based on the display or source  paths that contain that string.

</details>

---

### 13. Static CSV Video at Inductive University

:::tip Video Link
Watch the video: [Static CSV Video at Inductive University](https://inductiveuniversity.com/videos/static-csv/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to quickly add data to  your report with a static CSV data source. From the Data tab, create a new data source and select Static CSV. You'll see that the Static CSV is created with preloaded data. There are three column headers here and then two rows of values. There's a string column, an integer, and a float column.  You'll notice that the string values are wrapped in quotation marks here but that isn't necessary. If I were to add another row of data here and didn't  include the quotation marks, this would be fine. The only caveat to this is if you want your string to contain a comma. Since the values are delimited by commas, you'll want to wrap the  string in quotes, so it doesn't think there are multiple values. I'll head over to the Design tab and we can look at using this data. If I expand the key browser, you'll see the three columns that were  defined at the top of the CSV. I've already placed these innotable component.   So I'll move over to the Preview tab.

**[01:04]** [01:04]
                                    Here are the values from the CSV including my string value without the  quotes. This data source can be useful when you want to quickly add data to  a report, especially when you're in the testing phase. For example, this can be used when you don't yet have a database connection.  You can build out what you want the report to look like  and then you can swap it out for the real database data once you get  access.

</details>

---

### 14. Scripting Data Source Video at Inductive University

:::tip Video Link
Watch the video: [Scripting Data Source Video at Inductive University](https://inductiveuniversity.com/videos/scripting-data-source/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll take a look at the scripting data source. Starting off in our Data tab of the report. I'll hit the little plus icon here and create a new Script data source. The Script data source allows you to return whatever data you want using a python script. Now, when we generate the report, we always call your scripting data source as a function here which means all of your code should be indented over. There are two built in arguments for the Script data source. We'll spend most of our time looking at the data argument. We see that there is a commented line down below. To begin, I'll just uncomment this line and we'll take a look at what this is doing. So the description up above states that data as a map, but functionally speaking you can treat it like a dictionary. This example here is creating a new data source called myKey and it's setting its value to the string Example. Let's head over to the Design tab so we can take a look at this new key. If I head on down to the Key Browser here we can take a look inside of our Data Sources folder and we see myKey, which of course I can drag and drop onto my page. This gives us a text shape because it's only returning a single value. And of course, if we go to preview it should say Example. Now, let's head back to the Data tab here and say we wanted to change the value of one of our pre-existing parameters up here. I'll add some new lines. So, we can type data, to reference the data argument, and then using normal dictionary notation we can reference the StartDate key. So each of our parameters and data sources are keys that are present inside of the data argument. If I want to change the value, I can simply assign a new value to this parameter. So in this case, I'm taking the value of our StartDate parameter, which by default is a date, and I'm replacing it with the integer value of 10. Let's head back to the Design tab and back in the Key Browser we know StartDate is a parameter so I'll go to the Parameters folder. I can drag and drop this key onto my page. And if we switch over to the preview tab we can see that its value has been replaced. I'll head back to the Data tab, and for this next example, I'm going to copy and paste a code snippet from the user manual. This example will be in the user manual under the system, dataset, toDataSet function in the appendix. But we're basically just creating a very simple one column data set with a couple of rows. Now, if I want to make this data source available as a key, I can simply reference the data argument. I'll create a new key, I'll call it myDataset. Then we'll pass in the variable we created on line 10. And you'll see in a moment that when we take a data set and assign it to a key in the data argument, that will create a result set for us instead of us a scalar value. Now if we head back to the Design tab here. Again, we can go back to the Key Browser, take a look under Data Sources, we'll see myDataset is listed here as a result set. So I can take this, drag, drop, which will create a table. Of course, we can do our normal column assignment here. Switch over to preview and it should show us one and two. Now for the last example here, let's head back to the Data tab. I want to create another data source and have my script data source reference the new data source in some way. So I'll simply hit the little plus icon here. I'll create a SQL Query. Now I'm going to type a quick little query here. I'm just going to have this query return the number 200 to us. So from my query data source here, I want to return 200 into my script data source. So let's switch back to the script data source. As a reminder for this whole section here, any sort of referencing from one data source to another or one parameter to another, always looks up. So in this case here, if I want my script data source to reference something under my query, I need to switch the position of these. The script data source needs to be at the bottom. So, I'll reorder, and now I can start referencing stuff inside of this query data source. So, we can come down below here. I'll add a couple lines. And again, we can type data. I'll create a new key, I'll call it fromQuery. Then let's reference our query data source. So I'll type data, and then the name query. Now again, normal dictionary rules apply here. So the capitalization here is important. The name of query here has to match the name of that data source. Now when you're trying to reference the value of a query data source, so if I look at my options here, all of those that end with the word query, they have a special little function you need to use to be able to get their underlying results set. I'll head back to that script we're working on, and the function is getCoreResults. This returns an Ignition data set. So now I can use my normal data set notation. So I could call getValueAt. Grab the first row and the first column. So now, we should have a new key called fromQuery which should have a value of 200. So we'll go back to the Design tab here. We see fromQuery which I'll just drag and drop onto the page, and if I go to preview it should give us 200. So, heading back to the Data tab here, see a couple different examples, but the main take away is that the scripting data source allows you to interact with your other data sources and parameters as well as create your own.

</details>

---

### 15. Nested Queries Video at Inductive University

:::tip Video Link
Watch the video: [Nested Queries Video at Inductive University](https://inductiveuniversity.com/videos/nested-queries/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to set up a nested query in  your report to use the results of one query to drive another. Let's first take a look at two example tables that I have in my database. First I have a table with records of equipment. It has ID name and description columns. Then there's a table that holds information about downtime events. This has a column for the ID of the downtime event, the  column with the ID of the equipment that went down, and then  columns for the cause of the downtime and the minutes it was  down. I want to include data from both of these tables in my report. We can see that they're related through the ID column on equipment_table and  equipment ID on downtime_table. What I'd like to do is run a query that returns data about  each piece of equipment and then I can use that to tell me about any  downtime for each piece of equipment. Luckily a nested query will help me do this. I'll start by creating a SQL query data source, and I'm  going to change the name of the data key to "equipment". I have a query already copied that I'll paste here  and we can quickly go over.

**[01:07]** [01:07]
                                    Basically, this query is returning each of the  columns from the equipment_table and assigning them aliases. ID becomes  equipment ID number, name becomes  equipment name and description becomes equipment description. This  will be my parent query. In order to add a child query. I'll go over to the  nested query section and click the plus icon. I only need one child for this example. But if you need more  in your nested query system, you can continue to click the plus icon  to add children to your child or you can also add peers as  well. I'll change the data key of my child query to equip downtime  and grab my other query. This query is returning the cause and minutes down columns  from the downtime table and assigning them aliases. It's  also using a "where" clause to filter the results on the  equipment_ID column. I want to filter the results of this query based on the results of the parent query  in order to do this. I'll need a parameter which uses  curly brace syntax. And then my parameter name is  going to be the name of the column from the first table that relates  to this table. If you remember that column is called  "id", but I gave it in Alias of "equipment ID Number" in  my query.

**[02:17]** [02:17]
                                    So I can use equipment ID number as my parameter if I  wasn't using an alias, I would just use ID here. It's a good idea to use aliases here because if I  didn't and I have a typo in the parameter field the child would  search every column of every parent query for a match and if  it didn't find one there it would look in the parameters for a  match as well. If it ends up finding something that's similarly named you might  get yourself into a situation where you're looking at the wrong data and it  could be difficult to identify why. So aliases can  be helpful here. So I have my nested query set up and I want to test this. I'll head over to the preview Tab and we can look at the results. I won't go over how I set this table up. If you'd  like, you can reference a table groups page of the user manual. All you  need to know is that the results of the parent query are gray and  the results of the child query are red.

**[03:04]** [03:04]
                                    The way that this works is the parent queries executed in returns a  certain number of rows. Then the child queries are run for every row returned by  the parent. It's important to note that a new query is run for each row  returned by a parent query. If you have additional nested children queries that run  for each row returned by the first set of children. The number  of queries can exponentially increase. It's important to be aware of runtime implications. System performance could drop as a result of a sufficiently complex  query system and you may have to wait a while  for your results. Now you may be thinking that this example could also be achieved  with the SQL join and you'd be right. However, nested queries are beneficial as they can be much easier to  write and maintain compared to complex join statements  and they allow for greater control. The biggest benefit is also that nested queries have much less restriction than  a SQL join would nested queries can be set up to relate data across different schemas databases  and even other data sources like the tag historian  which make them extremely powerful tool.

</details>

---

### 16. Keychain Expressions Video at Inductive University

:::tip Video Link
Watch the video: [Keychain Expressions Video at Inductive University](https://inductiveuniversity.com/videos/key-calculations/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will look at performing calculations on data keys with keychains. Keychains have their own expression language that is similar in syntax to Java. Key chain expressions are configured by using different operators or functions within "@"s. Let's take a look at a basic report I've already set up to see these in action. My report has a SQL Query data source that's pulling fruit order data, and I've set up a table to display that data. Right now my first column is displaying the fruit and the second column is displaying the order quantity. As a quick example, I'll use the third column to display the order quantity, but multiplied by 10. I can drag the quantity key into the third column and then use keychain expressions within the edit text window. I'll add the multiplication operator, and the number 10, and as long as these are within the "@"s, these operations will be applied to the key and the result will be displayed. I'll clear out the third column and replace it with the price per piece. Then I'll use another expression in the fourth column that multiplies the order quantity by the price per piece.

**[01:07]** [01:07]
                                    I'll drag each key into the column, remove the extra at signs, and then put a multiplication operator between the two keys. If I want to add text to the column that doesn't get evaluated in a keychain expression, I can add it outside of the "@"s. For example, I'll place a "$" before the first "@" so that the values are shown as a dollar amount. Then I can also quickly change the number format by going to the properties and I'll change it so that it always shows two decimal places. Now, I'll preview this and look at the fourth column to confirm that the quantity and price have been multiplied together and the amounts have dollar signs in front of them. Something to note, keychain expressions can be placed anywhere in the report and don't have to specifically be in a table component.

</details>

---

### 17. Use Dynamic Data Key Video at Inductive University

:::tip Video Link
Watch the video: [Use Dynamic Data Key Video at Inductive University](https://inductiveuniversity.com/videos/use-dynamic-data-key/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    With dynamic data keys, you can modify properties on report components such as the background color or width based on the value of a key. As an example, you can see I have this report viewer on my window, which is displaying my fruit inventory report. I'd like to set this window up so that the slider component can set the width of my quantity column, which is this column with the gray background. Additionally, I want to be able to use the checkbox to hide or display the column. You can see that any parameters we create on the report are exposed to the client, so that means we can make changes to the report from the runtime. Let's start adding the dynamic keys by navigating to the fruit inventory report in the project browser, and then going to the data tab. We'll add a new parameter here and let's name this is visible. We'll give it a parameter type of boolean and a default value of true. Let's create one more parameter and name it width.

**[01:09]** [01:09]
                                    We'll give it a type of long and a default value of 100. Now that we have our keys, let's move to the design tab and apply them to the correct properties. We can expand our parameters folder, and you can see our new parameters are there. Again, we want to control the properties on our quantity column, so let's select the quantity column and open up the properties tab in the property inspector. You'll notice a normal data key like this text property here is encapsulated with the at symbol. However, we'll scroll down to our basic properties where we see visible and width, and if I drag in is visible to our visible property, the at symbols are removed, letting us know this is a dynamic data key. The difference here is that a data key is meant to display the value of a key, such as the text property we saw earlier, whereas a dynamic data key lets you modify non string properties on reports. Instead of dragging in our width parameter we can also right click on the selected property and choose the used dynamic data key option.

**[02:07]** [02:07]
                                    Then you can click on the magnifying glass, where you'll be able to browse for the parameter you'll want, and of course we'll choose width here and click on okay. If you want to remove the dynamic key, you can right click on the property and choose to use the static value. If we go to the preview tab, we don't see much here. However, the column width is set to 100 pixels and it is visible as we would expect. Let's go back to our window to better view the column's behavior as we update the dynamic keys. We'll select our report viewer and go down to our report parameters. We can see the dynamic keys are here. I could override is visible and set it to false, and we'll see the column disappear so we know that it's working. Let's go ahead and bind these to our components. I'll click on the chain link icon for is visible and we'll choose a property binding. We'll expand the checkbox and bind to our selected property. We'll do a property binding on our width as well and bind it to the value of our slider.

**[03:05]** [03:05]
                                    So if we come to the preview mode, we can go ahead and adjust the slider and we can choose to hide or show, the column, so you see that when we run the report or when we just expose the report to the client, we can go ahead and make a lot of changes using dynamic data keys that will tailor the report to the specific need at that time.

</details>

---

### 18. Table Rows Video at Inductive University

:::tip Video Link
Watch the video: [Table Rows Video at Inductive University](https://inductiveuniversity.com/videos/table-rows/8.1)
:::

<details>
<summary>View Transcript (9 paragraphs)</summary>

**00:07** [ 00:07 ]
                                    In this lesson, we'll take a closer look at the rows in the reporting module's table component. You can see that I'm in the design tab of a report and to start with, just to show you what data I have, I'm gonna head over to the data tab and I am using a static csv data source, that's been slightly modified. It only contains a single column and 10 rows. Let's go to the design tab and we know we can come down on key browser, go to the data sources folder and then drag our data source to an empty spot on our page and before I drag my column over, let's talk about the word details here. This row in the table is the details row. We know that this row is repeated for every row in the underlying data source. This table should always give me right now, 10 rows if I had some content in there.

**00:59** [ 00:59 ]
                                    To demonstrate that, I'll simply type details. And of course if we go to preview, we know that it will just replicate the word details 10 times. Now let's go back to the design tab. If I select the table component by clicking on the light gray area here, we can head over to the property inspector and under configure table, we do see there's this row of check boxes down here. Right now we're drawing the details row, that's always on by default. But there's an optional header row which when I check this, draws it at the top and an optional summary row which is drawn below the details row. These are some extra rows we can add to our table. They work a little bit different than the details row. The header always gets repeated on every new page, but only at the top of the table. The summary row is not repeated, you only see it at the very end, after all your data has been printed on a page.

**01:56** [ 01:56 ]
                                    Following our first example, I'll type header into the first column here and summary in the summary row. If we switch over to preview, we can see it starts with header, does all of our details and then ends with summary. Now note, if I go back to the design tab here and say I were to resize my table, so if I just click on the body again, and I make this a little bit shorter. Now what I'm trying to do is make the table smaller, so that we have to create new pages on the report. Just so you can see how the header in the summary work, we'll go to the preview tab, so that we can see that we start with the header, we run out of room at some point, so have another page. We reprint the header, show the rest of our details and then we get our summary.

**02:46** [ 02:46 ]
                                    You can probably tell, the header row is great for headings, the summary row is great for summaries at the end. Let's make this slightly more useful, let's go back to the design tab and I'll go ahead and grab my column from the key browser and I'll drag that into my table on the details row. We'll type something into the headers, I'll just title it, My Column. I wanna get a total, or summary in the summary row. We know that we can go to the key browser, we can check, show calculations and then I can drill into my column key here, grab the total and let's place that into our table here. Just so I don't have to click around, I will resize my table here.

**03:27** [ 03:27 ]
                                    Let's go back to preview. We can see it starts at the top, counts all my rows and gives us a summary at the end. Now it is possible, if you didn't want the header to replicate onto the second page, if you did have multiple pages, we can come up to the design tab here and if I selected the header row by clicking where it says header, or you can just select it in the project browser. If you look down in the property inspector, under the pagination section, you can turn off reprint when wrapped. That's basically what allows the header row to replicate on the new pages. I'm not going to do that but just pointing out that you can do that if you prefer.

**04:06** [ 04:06 ]
                                    Now as I've been clicking around here, you've probably noticed that we have these little white boxes that have vertical lines in them. These boxes state that the row is considered structured. A structured row is basically any other tabular row you can think of. There are a bunch of columns and they're all horizontally adjacent to each other. I could make this row unstructured, which would allow me to reposition my text shapes wherever I want by clicking on the little white box. If I select the details row here, we can look in the property inspector. There's also a property called structured columns which when I re-enable this, does the exact same thing. Really two ways to make a row structured or unstructured.

**04:43** [ 04:43 ]
                                    Now when it's unstructured like this, I'm gonna make a little bit more room, I'm gonna drag the details row down a little bit. When its unstructured, I can reposition these individual columns which again they're just text shapes. They're just floating around inside of this one row. I could actually stack these instead if I wanted to and if we head over to preview, you can see that it's replicating the row with the white space that's putting the word details above whatever the actual count is. And it's doing that for every iteration of that details row. Now this is a little silly, you wouldn't wanna just normally do this. The reason why you care about this, I'll head back to the design tab here. Say you had a lot of columns and you're trying to fit onto this one document. So, instead of trying to fit them all horizontally, or rotating the page, you could just make your rows taller and then position all of your text shapes vertically.

**05:35** [ 05:35 ]
                                    You can also place other components in side of here. So, if I were to select this row, head over to the image component and drag and notice that when I drag inside of the unstructured row here, I get the little blue border, so I can drop that inside of the row. I put little images or icons next to my text shapes. You could also add tables and charts here if you want to, but in some cases it might be easier to use a peer table or a child table, which we'll take about in other videos.

**06:06** [ 06:06 ]
                                    Hopefully that gives you a good idea on the three types of rows, as well as what it means to be unstructured.

</details>

---

### 19. Table Row Versioning Video at Inductive University

:::tip Video Link
Watch the video: [Table Row Versioning Video at Inductive University](https://inductiveuniversity.com/videos/table-row-versioning/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    When using tables and reports, you can conditionally display rows of data in different formats. This is known as table row versioning. As you can see, I already have this report set up with a table component to represent my equipment downtime data. My table is making use of a few kinds of rows, which are the header details and summary. When we select any of these rows, let's choose our details row from our project browser for example, we'll see their version appear on the right hand side of the table. Currently, all of my rows are set to the default version, which is standard. If we click on the dropdown menu where we see standard, we are presented with all of the available row versions. Let's choose the add alternate option for our details row. The way alternate works is that the table will alternate between the standard row version and the alternate row version. This can be used to do things like a alternating the background color of our rows. So for example, we can change the background color by going to our property inspector and then enabling the fill property.

**[01:08]** [01:08]
                                    Let's then change our fill color to orange. When we go to the preview tab, we'll see our detailed rows alternate between the standard white color and our alternate orange color. Of course, we can apply more complex conditions to our rows, so let's take a look at that next. We'll head back to the design tab and we'll select our details row again. This time by double clicking where we see details. One important thing to keep in mind is whenever we navigate away from our design tab and then later come back to it, the rows version will start off with the standard row version selected. So if we wanted to make any changes to our alternate row, we do have to go back to the dropdown menu and select it. I actually want to remove the alternate version to keep things simple. However, you are able to configure multiple row versions. Since we already have alternate selected, we can simply go into the dropdown menu again and select the remove option this time. You are able to remove any row version except for the standard row version.

**[02:04]** [02:04]
                                    For the next example, let's take a look at my table's data. We'll head to the data tab. You can see I have five production lines with their downtime represented in minutes. For our table let's set this up so that any rows that have a downtime of over 40 minutes are displayed in red. This can help users better identify which production lines are having more trouble. We'll go back to the design tab and select our details row. Let's choose a new row version by opening the dropdown. In this use case, we're going to need to create a custom condition, so we'll select add custom. When creating a custom row version, we need to give it a label. Let's call this one high. After clicking on okay, you'll see that the high row version is currently selected. I'm going to make the property inspector floating just so it's a bit easier to see. To build our condition, we are going to make use of the version key property. The version key property is what's going to allow us to conditionally select which row version to use. So for example, I'm going to click into the property and we want to look at our downtime minutes, and if they're greater than 40.

**[03:07]** [03:07]
                                    If they're greater than 40, we want to use the high row versioning or our new one we just created. Otherwise, let's use the standard one and I'll hit enter to go ahead and commit that. With our condition in place let's update the fill color like we did before, however, we'll choose a red color this time. Now, if we come to the preview tab, we see it worked. So all the lines with the weekly downtime, less than 40, are using the standard row versioning and everything greater, all the lines with the weekly downtime, greater than 40 are using the high row versioning.

</details>

---

### 20. Dataset Grouping Video at Inductive University

:::tip Video Link
Watch the video: [Dataset Grouping Video at Inductive University](https://inductiveuniversity.com/videos/dataset-grouping/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Another important feature of tables is the ability to separate a single data set into different categories or groups. For instance, if we take a look at the report on my window, we see I'm utilizing a table component that's holding some equipment, downtime data, and if we take a look at the preview tab, we see data for different kinds of equipment, the cause of them going down along with the duration in minutes and the time they went down. At a glance we can tell this data is unstructured and it would benefit from additional formatting. One thing I would like to do is group all of this data by each piece of equipment. Let's go back to our design tab and select our table. In the configure table section, we can see the only grouping I have is this data grouping, which was generated with our data key. We can make use of this plus icon to group by a different key, and in this case, we want to choose equipment and then click on okay. Whenever we add a new grouping, we can see a new details row gets generated for the grouping.

**[01:01]** [01:01]
                                    So if we look at the preview tab now we can see our table is already grouping the data by piece of equipment. It might be better if our equipment was represented as a single category rather than being displayed on every row. So let's go back to our design tab. We can make use of our new equipment details row and we'll cut out the equipment key from our data details and paste it into our equipment details. If we go back to the preview tab, we can tell our report is a lot more clear after separating our equipment key into its own details row. The report could still benefit from some additions, like headers over our columns so users know what they're looking at and maybe some calculations of our downtime. Let's go back to our design tab and select our table. I'll make the property inspector floating, so it's a bit easier to see. Along with a details row being generated, you can also add header and summary rows to any groups you create. So let's go ahead and do that for our equipment group. We'll add these rows to our data group as well. Let's add the word equipment to our equipment header and we'll make this bold. We'll add the headings for cause, downtime and date to our data header row, and we'll make these bold as well.

**[02:08]** [02:08]
                                    I'll put the property inspector back so we can get the total calculations of our downtime. You can see I already have the show calculations box checked. We'll drill down the downtime key and find the total. Let's add a total downtime to our data summary so we can get the total downtime by each piece of equipment. Now to gather the total downtime of all equipment, we'll add the total to our equipment summary. I'll also give it a label of total. Let's go back to the preview tab. The report now is looking good. We can easily tell what each column represents, how much downtime occurred for every instance of equipment, as well as our total amount of downtime. One last thing I would like to mention is that you can add multiple groupings if needed. Say for example, I wanted to also group this report by each cause. Let's head back to the design tab and select our table. Like we did before, we'll click on the plus icon and we'll add the cause group this time. If we go to the preview tab, we can see our cause is now being grouped.

**[03:05]** [03:05]
                                    However, we have the separation behavior going on where our equipment is spread out across the pages in multiple instances. For example, our labeler equipment is shown twice on page one because our cause group has the highest order in our groups. So the order of how you are grouping things does matter. If we wanted all our cause categories or groups to be under one single piece of equipment, we do need to go back to the design tab and select our table. We then need to move our cause group down one with the arrow button. This ensures that everything will be grouped by each piece of equipment, and if we go to the preview tab, we can see this is now the case. So if you're using any unstructured data sources or if you would just like to improve the grouping of your reports data, then dataset grouping can be a powerful formatting tool.

</details>

---

### 21. Table Groups Video at Inductive University

:::tip Video Link
Watch the video: [Table Groups Video at Inductive University](https://inductiveuniversity.com/videos/table-groups/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll talk about table groups. So we can see that I have a report. I'm in the Data tab here. And I have two data sources. One called Numbers, with a bunch of numbers, one called Letters with a bunch of letters. If we head over to the design tab here, we can see that I have a table that's currently showing off our numbers and when I go to Preview it works just fine, so it just goes through all of our numbers. Great. Now when I head back to the design tab, I now want to do something in the key browser here under Data Sources, with this Letters data source. I want to show that on the page here. So I could just drag Letters onto the page, and create a separate table for that. But let's try something different. I'm going to delete this, and how about instead once we're done showing all of the data from our Numbers data source, let's then have this one table transition to our Letters data source. That's when you would use a table group. To make a table group, you simply select your table, and if you look in the Property Inspector on the Configure Table tab there's a Make Table Group button which you may need to resize this panel to see. Now when I press this button you'll notice the hierarchy in the project browser and the actual table changes just a little bit. I'll press the button here. You can see that there's now an icon on the table as well as in the project browser here. Our table is now nested under a new object. And of course the Property Inspector is showing us some new information. So a table group is a container for multiple tables. Let's add a new table into the group. Under the Configure Table Group tab here there's a plus button, which when I press it, gives me two options. For right now I'm going to create a peer table, which will appear right below my Numbers table. And notice that depending on which one of these two tables I have selected, the table on the page changes from my Numbers table to some new table. Now I need to assign this new table. It's showing that object's data source. Now I'm going to scroll down here in the property inspector and there's this little key setting down below. So the way the assignment works is I can drag my Letters data source to this key field here, which will then assign it. So if I scroll back up here I can switch back to Numbers, and now I can go to Letters. Let's go ahead and add some information to the columns here, so I'll drag my letter column from the Letters data source into the table, and if I go to preview, you can see that we go through all of our numbers. Once we run out of numbers, we then transition to the new Letters table, and then start showing all the letters. Now say I wanted to make a change to one of those tables. Maybe I wanted to add a header to the Letters table. So I can go back to the design tab here and I can click on the Table Group. Then I need to pick which of my tables I want to make some changes to. So in this case I'm going to select the Letters table. Now I could either dig into the project browser and find the table or start clicking on individual columns or pieces here. So I could double click on the body, which will select the table, of the Letters table, maybe add a header and then maybe type something in here. So this could be my Letter header. When I switch over to preview, we can see that it's going through all the data, shows the header, goes through the rest of the data, and if it runs out of room you can see that it ran out of one letter there, it'll work like a normal table and reprint on the next page. Now if I head back to design here, and I select my table group, so we created Letters as a peer table meaning it is a peer to the previous table so these two are peers to each other. So we'll finish with Numbers and then we'll show Letters. There are some buttons on the right hand side so you can reposition these, so if I wanted to start with the Letters table first, Now when I was adding a table you can see that there was something called a child table. Now I'm not going to add a new one. Instead I can make Letters a child by selecting Letters and then pressing the right arrow. So the right arrow indents Letters under Numbers which means that the Letters table is a child to the Numbers table. Being a child table means that for every row of, in this case, the Numbers table, we're going to reprint the entirety of the Letters table. So if I go to Preview, you can see that we get one number. We then get the entirety of our Letters table. We then get another number back from the Numbers table, and then back to our Letters, and we basically repeat that until we're out of data from the Numbers table. Now this isn't too useful, obviously. I'm simply repeating the exact same letters over and over again. However if you remember the video about nested queries, which I'll head over to this nested query report, up in the key browser under Data Sources I have a root query and then a nested query named child query. Child tables work great with this sort of structure here. So you could create, inside of a table group, a table for your root query, then add a child table to the table group that shows off child query which is exactly what I've done over here. So if I need to select the table group I can simply click on the little icon here, you can see that root query is my first table and then child query is assigned to a child table. So when I go to preview here, we see that I have one row from the first table, and then some number of rows from the child table. We then go back to the next row on our first table. We then show another instance of our child table but with slightly different data this time. And then we repeat that process until we finish showing all of our rows. So hopefully this gives you a good idea about what a table group is. Again peer tables are great if you wanted a single component on the page to show data from multiple data sources. Child tables are great if you're working with a nested query.

</details>

---

### 22. Timeseries Chart Video at Inductive University

:::tip Video Link
Watch the video: [Timeseries Chart Video at Inductive University](https://inductiveuniversity.com/videos/timeseries-chart/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll look at using the time series chart component in a report. On the screen you can see I'm currently within the design tab of the report designer interface for my report. To add a time series chart to my report, I can simply drag it from the component palette under the graphs and charts section. This chart looks similar in comparison to an XY chart, however we can clearly see it's using a date time value for its domain axis, whereas an XY chart would use a numerical value for this axis. Because of this, representing tag history data is a perfect use case for the timeseries chart and we'll see why in just a moment. Now, to represent any meaningful data we need to provide a data key, which you'll see with the chart selected we have an available data key property in the property inspector. If we check the data tab, we'll see I have a tag history query already for our chart to use. So let's go back to the design tab and select our chart. I'll go ahead and expand my data sources folder within the key browser to find my tag history query.

**[01:10]** [01:10]
                                    Then I'll drag and drop tag history to the data key. Next, we need to specify a domain key. When the time series chart is created the domain key is by default set to this t_stamp value, but you can set it to any sort of timestamp or time value column you'd like. Now since we're using a tag history query, if we drill down our tag history data source, you can see that t_stamps already a column being returned. So the domain key is already set. This is why the timeseries chart is great for representing tag history. The bare minimum last thing we need to do to show some tag history on the chart is to add our pens. Now there are two pens by default, but these are just placeholders. They don't really have any data associated with them, so I'm going to click on one of them and then click the remove icon a couple of times to remove both pens. When adding pens, there are two ways to do so.

**[02:04]** [02:04]
                                    First, you can click on the add icon and it will create a new pen for us. I will need to update my range key to represent the correct data. So I'll start by dragging in random double to this column. I'll go ahead and rename this pen to random double as well. Alternatively, we could just drag and drop our keys from our data source. I'll do so for both random integer and random long, and that's all we really need to do to show tag history. Let's see how the report is looking in the preview tab. You can see I already have some value showing up. The chart is showing I started getting values at around 3:00 AM today. Those values remained fairly static until about 10:30 AM this morning. Let's look at some of the properties that are available on the time series chart. To do so we'll go back to the design tab. I'll click on the chart and let's start with our pens here. To edit any of the pens we can first select one and then click on the edit icon. I'll do so for the random double pen. We can change some general options like the data key, the pen name, and the axis.

**[03:06]** [03:06]
                                    This is referring to the range axis, not the domain axis. There's also a number of options to alter the pen's style. You can change the color. Let's pick a green color for the pen. The style option alters the pen's form. Depending on which option is selected here, determines the availability of some of these additional options below. So while my style is set to a line, I'm able to adjust its weight. If I change the style to a shape, I can change which shape is represented. When I change the style to bar, you can see our values are represented like a bar graph would be, and we can also apply labels over the bars. I'll go ahead and turn these off for now. So there's quite a lot of ways that you can represent these values visually. When you're done configuring those options, you can always click this back arrow to return to our pens. And if we scroll down, we can take a look at the properties for the axes. So we'll click on the default axis and click on the edit icon.

**[04:03]** [04:03]
                                    You can change the name, label, the type and the position. For position we can set it to the left, right, or even to hidden. I'll leave it set to the right. If you scroll down here, you can disable auto range, and when you do, you can specify your lower and upper bound values. You can also specify if you want manual tick units. Clicking the back button will show that our axis has been updated, and of course we can add multiple of them where we can then give them new names and make them auto range or not directly from here. Now the last area of properties that you want to pay attention to is in this properties tab at the top here. Now these are properties specific to the chart, so we can change our data or domain key from here. And you see there's not that many properties. We very quickly go down our basic properties, but there is one important one, which is this date format. Now normally the format on a domain axis is dependent on the date range shown on the chart. So if we take a look at the preview tab, you can see I'm only seeing the hours for today.

**[05:05]** [05:05]
                                    If we go back to the design tab here and we select our chart one more time and head back to our properties, we can override this date format. So when there's no value in here, it'll automatically detect it. But if we put in say the year, month, and our day and hit enter, we'll see our domain range change. In conclusion, if you're trying to represent tag history, data or data with the time based domain axis, then the timeseries chart is perfect in this use case.

</details>

---

### 23. XY Chart Video at Inductive University

:::tip Video Link
Watch the video: [XY Chart Video at Inductive University](https://inductiveuniversity.com/videos/xy-chart/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's review how to use an XY chart. As mentioned in the previous video, the XY chart is similar to the timeseries chart, however it differs in that its domain axis is represented by a numerical value rather than a timestamp. So for the most part, this makes the XY chart ideal when trying to detail the relationship between two keys. Now, as far as the configuration of your pens and axes are concerned, they are about the same for both charts. So if you'd like a more in-depth look at the pens or axes configuration, please review the timeseries chart video. I'll drag an XY chart into my report to give you an example of how one works. For my data key, I'll drag in my tag history query, and we'll take our timestamp and assign it to the domain key. Let's remove these placeholder pens and we'll drag random double onto our chart. If we navigate to the preview tab, you'll see that our domain is showing a series of very large numbers here. That large number you're seeing is the literal value of the timestamp the history system is using.

**[01:06]** [01:06]
                                    So you can see that the XY chart doesn't convert your timestamp into something a little more human readable. Let's go ahead and change our charts data to make better use of it. If we head over to the data tab, you'll see I have this static CSV, and this is just some fictional data I created showing a temperature, and then an OEE value recorded at the same time. Now say I wanted to see if there was any relation between these two columns. We'll head back to the design tab and select the XY chart to configure this relationship. We'll minimize tag history, expand our temp versus OEE data source and drag and drop temp versus OEE to our data key. And then for the domain key, we'll go ahead and use temperature. Then we need to remove this random double pen. Now we can drag OEE down to our pens, and let's rename this since this isn't just straight OEE, this is also versus temp. Instead of representing this data as a line, I'd rather have some plot points, so I'll go ahead and open the editor for this pen, and then I'll update the style to a dot, and we'll increase the width or the weight of the dots as well.

**[02:08]** [02:08]
                                    We can click on the back arrow to head back to our chart options. Let's change the label on our range axis to OEE, and let's head to the properties tab for the XY chart. Now, if we scroll down, you'll see there's this x axis section. Many of these don't exist on the time series chart, but there are some similar properties. So for example, instead of a date format, we have a number format here. We'll leave that alone, but I would like to give my x axis a label. So let's put temp. If we look at the preview tab, now you can see that we visualized our data points here, so it looks like around 70 degrees to 90 degrees we're at optimal OEE. When it's colder or hotter than that, our operation seems to suffer. Maybe it's too cold for the operators or the machinery is having problems in colder temperatures. You can see that the XY chart allows you to very easily visualize data and their relationships.

</details>

---

### 24. Bar Chart Video at Inductive University

:::tip Video Link
Watch the video: [Bar Chart Video at Inductive University](https://inductiveuniversity.com/videos/bar-chart/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    The bar chart component helps to represent our data as bars. It's a fairly easy component to configure and it has many customization options. Just like the previous lessons, I'm here the design tab for my report. Let's start by dragging and dropping a bar chart component onto my report. The first thing we need to do is set the data key, so we'll take a look at our key browser. I have this bar chart data under data sources. I'll drag and drop it down in the data key. I'm going to do this one more time because I want to show you a very important property on the bar chart, that property being this extract order. I'm going to set the second chart to extract by column. My first chart is using the default option, which is row. Let's head over to the data tab to get an idea of what our data looks like. You'll see I have a static CSV here and there's three columns. The first is category, which list a couple of months, and then we have our values for our north and south areas. When we switch to the preview tab, you can see how these two extract orders differ. When you extract by row the category or the way the bars are grouped up is determined by the first column, which in this case would be my category column.

**[01:15]** [01:15]
                                    As you can see, this is why my items or bars are grouped by month. Each item is a separate column in my data source. So we have north area and south area. When the extract order is set to column, my items are grouped by the second and third column where each item is determined by that first column. Now let's take a look at some of the other properties on a bar chart. I'll head back to the design tab and I'll select my top bar chart. I'll head down to the property inspector and I'll make it floating just so it's easier to see everything. In the configure tab aside from extract order, you can make your bars 3D bars, or you can turn the chart into a Pareto chart. We'll take a look at some of the properties on that later. You can also change the rendering style. Instead of bars, you could do stacked or layered. We'll leave it at bars for now. You can change the segment colors or you can add additional segments for when you have a lot of bars on your chart.

**[02:06]** [02:06]
                                    There's also the scripting event down here that allows you to make any sort of modifications to the chart before it's rendered. Next we'll take a look at the properties tab. You'll see there are even more properties for us to tweak. We can change the category margin, which is the space between each category. So if we change it to 0.5, we'll see that the items did resize. They're a little bit skinnier now, but that's to make more room between each category. Additionally, we can add some space between each item with the item margin property. I'll set this back though. If we scroll down, you'll see a couple more options for a Pareto chart. So we can hide or show that 80% line, or we can change the label on the Pareto series. We'll set the Pareto option back to false for now though. Here's some axis options, so we can turn auto range on or off. We can change what the high and low is for when auto range is off. The bar labels property will put a number on top of each bar, so we can very easily see the value of each bar.

**[03:03]** [03:03]
                                    You can also change where the label appears on the bar, so if you want it a little bit lower, you could set it to negative 20, for example. And below the label options you'll see basic properties, so height, width of the chart, and so on. So as you can see, there are many different properties on the bar chart that greatly impact how the data is presented.

</details>

---

### 25. Pie Chart Video at Inductive University

:::tip Video Link
Watch the video: [Pie Chart Video at Inductive University](https://inductiveuniversity.com/videos/pie-chart/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's look at the last chart in this topic, the pie chart. I'm here again in the design tab for my report, and I'll drag and drop a pie chart onto it. Again, we'll need a data key to drive the charts data. You can see under the data sources within the key browser, I have this fruit data available. I'll drag that into my data key. Next, we need to specify a label key and a value key. The pie chart takes a data source with two keys, a label, which is typically a string and a corresponding value. Let's look at the data tab to see how my fruit data source is configured. We can see that fruit data is a simple static CSV with two columns, the fruit column being my label, which has strings of different fruits, and the quantity column, which has the amount or quantity of each fruit. Let's go back to the design tab and we'll select our pie chart. So I'll drag fruit into my label key, and then I'll drag quantity into my value key. We also have additional options in our configure section that we have seen before in the bar chart component video.

**[01:08]** [01:08]
                                    You can change the segment colors or add additional segments. There's also a scripting event available to make any modifications to the chart before rendering. We'll leave these options alone for now. Let's take a look at the preview tab to see what our chart looks like. We very quickly created a simple pie chart and we can see our fruit label keys populating our legend. Now let's take a look at some of the properties on the pie chart. We'll switch back to the design tab and select our chart. Then we'll click on properties in the property inspector. I'll make this panel floating so it's a bit easier to see everything. You'll see under the pie options, the keys that we just set are here as well, so if we needed to change them, we can do that from either the property tab or the configure tab. There's also this label style property. Now it's set to none by default, but we can change that to simple. Simple shows the label on each wedge of the pie, whereas outset shows the label outside of the pie. The text in these labels is determined by the label format property.

**[02:06]** [02:06]
                                    If you show the details of this property, you'll see an explanation of what exactly these numbers mean. Zero is the wedge name, or in this case, whatever the row or label key is showing us. One is the value for that row, and then two is the percentage of the overall value. So if you take a look at this in the preview tab, you can see that oranges equals 33 or 25% of this whole amount of fruit. Now let's make some changes to the text on the label. We'll go back to the design tab and select our chart and go back to the properties tab. And I have this label format already set. I'm going to paste that in. I want to say the wedge name makes up whatever percentage of all fruit. I'll confirm that by hitting enter on the keyboard and we see the labels on our chart updated. Let's take a look at our new label in the preview tab. So you can see we can put whatever text we want into those labels. Let's go back to the design tab and review the rest of our chart properties. Down a little bit further in the property inspector, you'll see that we can show or hide our legend as well as change its font from up here.

**[03:11]** [03:11]
                                    We can also change the font for our labels as well. The style option changes how the pie chart looks visually, so we can have a 3D pie or even a ring. Next, we have this section for stroke and fill. Stroke is hidden by default, but if you change the stroke style from hidden to, we'll say double, you'll see there's a border added to our chart, and we can expand the stroke property here. We can change the color of the border, the positioning, separation, and so on. And then below these are basic properties that you see in many of the other chart components. Again, we have height, width, scale, and so on. So the pie chart component, while being useful to represent data as a label and value pair, has many customization options as well to display that data.

</details>

---

### 26. Simple Table Video at Inductive University

:::tip Video Link
Watch the video: [Simple Table Video at Inductive University](https://inductiveuniversity.com/videos/simple-table/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at the simple table component. The simple table allows us to easily create a grid with either the rows or the columns being dynamic. Let's begin by taking the simple table and dropping it onto our report from the components section of the component palette. Like our other chart components, the simple table also has a data key. We need to specify a data source for it to use. So let's go to the key browser and we'll drag and drop Equipment_Downtime to the data key. Let's go to the data tab to see our Equipment_Downtime data source. You'll see I have two columns. The equipment column provides the name of the equipment for each occurrence of downtime, and the Duration_minutes column gives us the amount of time the machine was down in minutes. Let's go back to our design tab and select the simple table. Now, I'd like the simple table to show us each piece of equipment as well as the total amount of downtime occurrences and the average duration of each occurrence. To start we'll come up to our key browser. We'll take the equipment key and we'll drop it into the upper left hand cell.

**[01:04]** [01:04]
                                    It's important to note that this top row is a header row. It's a special type of row, and you can see in the property inspector there is currently one header row. The header row is special in that the simple table will add a new column for each value in the equipment key. Just to show you what that looks like, let's look at the preview tab and you'll see each piece of equipment has its own column. We also have two blank columns here. That's because the simple table has two blank columns without any data keys. We can go ahead and remove those. I'll go back to the design tab and select the simple table, and then we can set our column property down to one, and now we're just left with the equipment column. And then let's get rid of that last row as well. So we'll set the row property to two. Next, let's add in our count key. Remember, for count to show up here, we need to set show calculations to true. We'll drag that to the second row, and then we'll expand our duration key. We'll take the average and we'll drop that on the bottom row. If we take a look at this in the preview tab, it looks about right. It would be nice if we had a header on the side here just to say what each of these bottom two rows represent.

**[02:05]** [02:05]
                                    Let's do that next. We'll come back to the design tab and we'll select the simple table and we will come down to the header columns property. We'll set this to one. Let's put some text in here. We'll type DT Count into the first header, and then this one here we'll do DVG Duration. We can go ahead and format these a little bit too. If we select the cell, we get quite a number of available cell properties. Let's set the text to a red color here, and just to make this stand out a little bit more, let's add a gray background to the cell. We can do this by scrolling down to stroke and fill, which allows us to apply a fill color to the cell by setting the property to true. By default, it's already set at this light gray color. We'll do the same thing as well for our average duration cell. If we go back to the preview tab, we can see the table is better represented with those labels. However, it is starting to expand beyond our report. Let's go ahead and resize the table a bit. I'll go back to the design tab and select the simple table. We can use the arrow handles to squeeze that down.

**[03:03]** [03:03]
                                    We'll go to the preview tab one last time and you'll see everything is looking good. So with the simple table component, you can very quickly add a table inside of your report.

</details>

---

### 27. CrossTab Table Video at Inductive University

:::tip Video Link
Watch the video: [CrossTab Table Video at Inductive University](https://inductiveuniversity.com/videos/crosstab-table/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    The crosstab table allows you to very quickly show cross sections of data where the other table types are focused on a dynamic number of rows and columns. I'll drag one into my report from the components section to review how it works. I'll also resize this initial matrix of cells using the arrow handles, just so it's a bit easier to see everything. Just like the other chart components, we need to set the data key. So I'll drag in my Downtime_By_Site data source to this key. I'll switch over to the data tab so we can review that dataset. We can see Downtime_By_Site is a static CSV with three columns showing equipment, time in minutes and site. Now I want the crosstab to show you a count between the number of downtime events for each piece of equipment and each site. I have four different sites, site A, B, C, and D, and the four pieces of equipment we've used before In the simple table video. Let's go back to the design tab and select the table to configure it.

**[01:02]** [01:02]
                                    First, we'll click and drag the equipment key and drop it on the top row here. Then we'll grab site and place it in the first column. Lastly, we'll grab count and put it in the remaining cell. What this configuration is going to do is give us a count based off the equipment and the site of each row in our data source. If we take a look in the preview tab, you'll see each piece of equipment and each site. Now, let's compare this to the raw data. For example, our motor has two occurrences at site A. If we take a look at the data tab, we'll see we have two rows with motor and site A. Let's add another key to our table. We'll go back to the design tab and select the table. With our table selected, we could add in a new row by directly altering the rows property like we saw in the simple table video. This, however, can be accomplished using a cell function. So if I click into one of these cells in the bottom row, let's say count and right click, you'll see I have a number of available functions that we can perform. In this case, I would want to choose the add row below function.

**[02:04]** [02:04]
                                    This new row is a bit smaller than the others, so I'll drag it down by first clicking on this divider line and then dragging my mouse down. For our new section, I would like to look at the total time per piece of equipment. In the key browser we'll go ahead and expand our time key. Then we'll drag in our total time to this bottom right cell. Now, in this remaining empty cell, I'm not going to place another key. Rather, I'm going to provide a text label of total time. You can do this by simply clicking on the cell and then typing the text you want. If we take a look at the preview tab, you'll see we have this total time row now. Now this is only looking at the total time per piece of equipment. It's not grouping up against a site. It's only grouping against a single key, which is equipment in this case. We can go ahead and make sure that this is doing what we think it is. If we look at the total downtime of our palletizer, we can see it was down for a total of 90 minutes. When we switch back to our data tab, you'll see a total of three downtime occurrences.

**[03:02]** [03:02]
                                    For our palletizer, the sum of our downtime of 40, 30, and 20 would equal our total downtime of 90 minutes. So while the crosstab table does very quickly show cross relationships of data, it is also great at showing the aggregation of repetitious data.

</details>

---

### 28. Scripting Functions Video at Inductive University

:::tip Video Link
Watch the video: [Scripting Functions Video at Inductive University](https://inductiveuniversity.com/videos/scripting-functions/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at some of the scripting functions available for the reporting module. We have this very simple report named script report, which just shows this parameter, function name as a text field. If we take a look at the data tab, we'll see that function name is just an empty string. We're going to go ahead and use this report in a couple of scripting examples. To start we'll come to the execute report window in my project browser. Now, this window has an empty PDF view and this button. Let's open up the button script by right clicking into the scripting menu. You can see we're using system dot report dot execute report. This function executes a specified report and then it returns a byte array of the report. You can do all sorts of things with these bytes, like store them in your database or pass them directly into the PDF viewer, which is what I'm going to do here. When using this function, you need to specify the path, so this is the path in the project browser to the report.

**[01:04]** [01:04]
                                    Next, you pass the project name that the report resides in, and then you can override any parameters. In this case, we are overriding the function name parameter, and then you need to specify a format. The way we're getting the report into the PDF viewer is with this load bytes PDF function. Let's click okay and put the designer into preview mode. We'll click the button and there's the report. And as you can see, our parameter has been overridden and it's showing up on our report. Next, let's take the designer out of preview mode. We'll head over to my execute and distribute window, and we'll take a look at this execute and distribute button. We'll right click on it and take a look at the script. The script is using system dot report dot execute and distribute. Similar to the execute report function, execute and distribute does execute the report Additionally, it distributes the report so you can email, print, save to an FTP server or save the report locally.

**[02:07]** [02:07]
                                    Now this happens immediately so you can have your users run an action on a report without needing them to enter the designer. Now remember, reports run in the gateway, so when you call a save action like this, it's going to be relative to the gateway. So what we're doing here is specifying which report to execute, the script report again, and the project name for the project containing the report. I'm overriding my parameter, my function name parameter here. There's an action argument that's just saying I want to save this report. And then there's some action settings. Now the action settings are going to be different depending on whatever action you're using here. So the action settings for save would be the path to wherever I want the file to be saved, whatever I want the file to be named, and then what format I want to save it in. So let's see the button in action. We'll click okay. Let's move the designer out of the way a little bit so we can watch my reports folder, which is where I want the report to save.

**[03:08]** [03:08]
                                    Let's go into preview mode and click our button. We can see the report was saved, and we'll open this up and here's our report. Again, we can see our parameter was overridden. We'll close this out and maximize our designer. I'm going to take the designer out of preview mode. Let's move on to our last example in the get report names window. On this window we have an empty tree view component and a report viewer component. Let's right click into the scripting option. For our button, we see the function system dot report dot get report names as dataset. This function returns a data set of report paths and names for the specified project. So we see on line two, I'm gathering the project name and then I'm passing the project to the function. With this data set of report names, I could then use this on a number of components that are driven by a data set. In this case, I'm populating the tree view items with the data set of report names on line eight.

**[04:05]** [04:05]
                                    I'm also filtering the data set to only give the text and selected text columns. Let's go ahead and click on, okay, we'll go to preview mode and click on our button and we can see the tree view now has all of my projects reports listed, and I have these values bound to the report path on my report viewer, so they can all be viewed from the client. There's also a similar function available system.report, dot get report names as list, which instead of returning a dataset, returns a list of report paths for the project. One last function I would like to mention is on the report viewer itself, so we'll go back into design mode and right click into the scripting option. We see the extension function on report generated. This is triggered every time the report is generated, so changing the report path, for example, would trigger it. Changing a parameter on the report viewer component, that would trigger it too. So say for example, you wanted to use our message handlers to let everyone know our report's been generated or write to a tag when our report's been generated, or something to that effect, you can go ahead and do that right here.

</details>

---

### 29. Scheduling Actions - Save, Print and FTP Video at Inductive University

:::tip Video Link
Watch the video: [Scheduling Actions - Save, Print and FTP Video at Inductive University](https://inductiveuniversity.com/videos/scheduling-actions-save/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at some of the actions your scheduled reports can take. You can see I'm in the preview tab of this equipment downtime report I've created, and it's all set up so we are ready to use a schedule. We'll head over to the schedule tab and you can see I have a schedule all set up. This schedule is going to run every day at midnight. Let's go ahead and add a new action by switching over to the actions tab. Then we'll click on the add new action icon. Let's start by choosing a new print action. The print action is used to send a report to a printer that is accessible from a computer ignition is installed on. Looking at our properties, we are able to set both a primary printer and a backup printer in case the primary printer fails. The print mode lets us decide if we want the report printed with either vector or raster graphics. When we select raster, this DPI option lets us control the amount of dots or pixels per inch. We can increase the number of copies that are printed. Below this we have some options where we can choose how the printing is done.

**[01:06]** [01:06]
                                    Printing on both sides will attempt to print on both sides of a sheet of paper if supported by the printer. Collate orders the pages so that a complete report prints before the next copy prints if applicable. Finally, the auto landscape mode evaluates the page dimensions and determines portrait or landscape orientation. We can also set the page orientation to either portrait or landscape. Now, a nice feature of scheduled actions is that you can actually run multiple actions at the same time. So say we'd want to save a backup of this report to a file server. Let's add a new action and choose the new FTP action. With the FTP action, we can specify your server address, what port to use and user credentials ignition should be using, and then you can select if you need to use SSL or not. Next, you can specify a folder path, a file name, and what format you want to save the report in. The file name has an expression built by default, but you can alter it as you like and you can use any of your parameters or tags, and there's even some built-in parameters you can use here, such as report name, which is what the expression is using already.

**[02:11]** [02:11]
                                    If I click on format, you'll see we get a number of format options to choose from. It's important to note that the XLS and XLSX format options may return less than pixel perfect results. This is due to how many spreadsheet programs interpret the resulting file. As a result, the PDF format is recommended in most cases. If you're not using an FTP server to save your reports, you can also use a new save file action to save a copy of the report to any folder the ignition server has access to, such as a local folder or network shared drive. Again, we have to specify a folder path, so I'll save this report to my reports folder within my C drive. We also have the same option seen in the FTP action of the filename and format. Sometimes you might not want to wait for the report schedule to trigger an action. If you wanted to trigger an action on demand, you can use this run selected action immediately icon to execute the selected action.

**[03:06]** [03:06]
                                    In this case, clicking on the icon, will save the report to my reports folder. I'll go ahead and open the report and we can see it successfully exported as a PDF. So whether you want the report saved somewhere or just print it out, maybe even both, you can very easily create the desired actions you would like to run.

</details>

---

### 30. Scheduling Actions - Email Video at Inductive University

:::tip Video Link
Watch the video: [Scheduling Actions - Email Video at Inductive University](https://inductiveuniversity.com/videos/scheduling-actions-email/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at the email action. As the name implies, the email action distributes a report via email when the report is finished executing. You can see I already have a schedule created with an email action set. When creating an email action, you need to set the from address, so I went ahead and typed one out here, and then you need to specify a mail server. These are configured on the gateway webpage, and you can use the create new server link below to open this up. You can see we are brought to the email settings in the config section, and I have an SMTP server set up. If we edit this profile, we'll see that the configuration looks very similar to configuring an SMTP server for alarm notification. Additionally, I have linked below this video, the user manual page for email settings, if you wanted to use a configuration guide, I'll click back on my browser and let's use the more option to test the SMTP profile. I'll provide an email address this email is from, and then an email this is going to. We'll use the same addresses we're going to use in our email action, and then we'll click the send test email button.

**[01:09]** [01:09]
                                    Now you can see the email went through successfully. If there's some sort of problem, you'd see an error message down here and it would give you a little more information about what was wrong. Additionally, you'll see an error message in the gateway console. Now, since the SMTP server seems to be working, I'll close my browser here and let's take a look at the rest of the properties. On the email action, we can specify the format, how many retries should the email go through in case there is a problem. And then there's this address source property. There are two types of address sources. There's email addresses and user roles. The email action will only ever use the selected address source, so I can't use both an email address and user role address source on the same action. However, I could create an additional email action on my schedule if I wanted to use both. When using email addresses, you'll see this recipient and reply to emails table down below. There are two columns.

**[02:01]** [02:01]
                                    There's address, so wherever you want to send the report to. And then there's the method column, so you can specify to cc, blind cc and reply to. If you click the plus icon, you can add more rows. I'm going to go ahead and delete the extra rows. We can take a look at user roles. You can send your reports out to all of your users with specific roles using the recipient roles field. You also need to make sure you are selecting the correct user source. This will auto detect any roles that you have. So we have admin comma, we'll do operators. So now all my administrators and operators would get this report. You could also leave this field blank, which will send the email to all user roles in the selected user source. And down below you can use the reply to roles field to specify users that will be listed in the reply to of the email. We'll change this back to email addresses for now. Lastly, you can configure the subject of the email, the attached file name and the body of the email using expressions. Now, just like the other actions, you don't have to wait for the schedule to run.

**[03:03]** [03:03]
                                    You can run this immediately. So let's go ahead and do that right now. And let's take a look at our inbox. You can see there are two emails. There's one from me earlier, the test email, and then my report was just sent out. We could download the report and open that up and you'll see it with sent successfully.

</details>

---

### 31. Scheduling - Run Script Video at Inductive University

:::tip Video Link
Watch the video: [Scheduling - Run Script Video at Inductive University](https://inductiveuniversity.com/videos/scheduling-run-script/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    The run script action allows you to add python scripting to your reports. We'll begin in the schedule tab where I already have this schedule for my report, and we'll go down and click the add new action icon to add a new run script action. The run script action is a script that runs on reporting schedule. We can see it exposes the function handle finished report, which gives you a couple of parameters. We have the report name, which is the name of the report, the path to the report in your project, the data map, which lets you access all of your data sources and parameters for the report from a PI dictionary. And the report bytes, which is just a byte array that is the report itself in the file format specified in the format selection box. Now, there's a lot you can do with the run script action. Just to give you an example, I'll go ahead and paste in a script down here. So what I'm doing here is I'm actually creating a log of every time this schedule runs. So this way I always know when my reports went out. Additionally, I'm saving a copy of the report as well.

**[01:05]** [01:05]
                                    So if I ever need to retrieve it, I can just query my database for the byte array. So all of my database interactions are occurring up here and down below I'm just distributing the report. So in this case, I'm just saving it locally, but you could of course email this out or save it to an FTP server. Like the other actions, the run script can be executed immediately. So let's take a look at my database real quick. We'll open the database query browser tool, and we're looking at my report log table here. If I execute the select query, we see there's nothing here right now, but we'll go ahead and execute the report script. If we go back to the query tool and execute the select query, you can see my report saved to the database. So for those cases where you don't have an available scheduled action that suits your needs, like storing your report in a database, providing a special email code, or anything else you can think of, then you can use the run script action to develop your own custom actions for when the report runs.

</details>

---

### 32. Reports in Vision Clients Video at Inductive University

:::tip Video Link
Watch the video: [Reports in Vision Clients Video at Inductive University](https://inductiveuniversity.com/videos/reports-in-vision-clients/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at showing a Reporting Module Report on a screen in the Vision Module. You can see I am working on a report right now. I have a text shape that's actually utilizing a couple of different parameters. So if we head over to the Data tab here, we can see I have my StartDate and EndDate parameters that are there by default. And then I have this new parameter called MyParameter. And again, it's a very simple report, I go back to the Design tab. I'm simply showing off the value of those keys in that text shape. So I would like to show this off on one of my Vision Module windows. Let's head up to the Vision section of our Project Browser. And under Windows, I do have a main window ready to go. So the way you show off a report on a window in the Vision Module, if you head over to the Component Palette here, under the Reporting section, there's a component called the Report Viewer component. This component is used to visualize reports on Vision Windows. So I'll drag this onto my window here and you can see we get a little warning here, because we need to specify a Report Path. So with that component selected, if you take a look down at the Vision Property Editor here, under the Data category there's a Report Path property. This would be the path to the report you wanted to show including any folders that were in the path. Now, don't type here, instead, there's a little chevron you can click on. This property's actually a drop-down and it will show you all of the reports that are available to this one project. So we'll select My Simple Report there. And you can see that is actually loading my report. Now you may have noticed this as well when you're looking in the Property Editor. As soon as I pick my report, we gain these Report Parameter properties. So the way this component works is that if there's any parameters defined on a report, we'll show them here in the Property Editor. This allows you to bind these properties to other components or otherwise change them. Now you can see that I'm showing No Date and then my parameter's just coming up blank. When you see it like this, it means that it's using the default value for these parameters. So I could come over here and statically type in a number. And you see over here, that is now showing a number of 100. This also means that if I wanted to change the start date and the end date, I could simply add some sort of calendar component to the window. So if I were to head up to the Component Palette here, and if we were to take a look at the Calendar category, we can expand this and I'll grab a Date Range component, drag that onto my window here and with that component selected, this has a Start Date and an End Date. So we could actually just bind the properties on the Report Viewer, the Start Date and the End Date parameters, to my Date Ranges, Start Date and then Date Properties. So we'll select the Report Viewer component and I'll start with these Start Dates. Now be mindful here, the report parameters here are always in alphabetical order, whereas the Date Range component here, begins with the Start Dates. So you want to make sure you line the two properties up. So again, back to the Report Viewer components, the Start Date property, we'll Bind. We'll do a simply Property Binding here. And we're on the Report Viewer, so we want to select the Date Range or rather, expand the Date Range. Find it's Start Date property and hit OK. And then we'll do the same thing with the End Date parameter with the little binding icon. Again, we'll do a Property Binding to the Date Range components and we'll grab the End Date and hit OK. Now of course we can test this out. You can already see that it's showing different dates. But if I put this into Preview Mode here, I start moving that slider around, picking different dates, you'll notice that they're being updated automatically. And of course because our data sources can utilize parameters, this is a very easy way for you to place a report somewhere, allow your users to pick some parameters and then they can generate their own report. Lastly, this component, if you're in the Designer in Preview Mode or if you right-click on it from the client, it give you this little right-click menu, allowing you to generate a document out of your report. Additionally the component has some built-in Python functions you can call that also generate documents. For more information, take a look at the Report Viewer component in the User Manual.

</details>

---

### 33. Reports in Perspective Sessions Video at Inductive University

:::tip Video Link
Watch the video: [Reports in Perspective Sessions Video at Inductive University](https://inductiveuniversity.com/videos/reports-in-perspective-sessions/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at the prospective report viewer components. The report viewer is a component designed to render a reporting module report directly in a prospective session. We'll begin in the designer, I have an empty view in front of me. I'll head over to the component pallet here and under the reporting category of components I have a report viewer component, which I wall drag onto my view here. And we can tell from the warning here that we're missing a valid report for the source property. So the source property, right over here, represents a path that leads to a report that exists inside of this same project. Now, if I head over to the project browser we can use the component to render any of the reports that exist here under the reports workspace, including inherited reports. Now, I'm going to switch down to this downtime report here. So I'm going to select it once so the workspace changes. I'll give it a little double-click to open it up. We can see it's a pretty basic-looking report. It has some charts, a table, and a text shape. This same report has, if I head on over to the data tab here, a parameter called Title with a capital T. This title property is going to be important later when I show you how to change the value of parameters from the report for your component. I'm going to select this report in the project browser here. And I'm actually going to right-click on it and copy the path to it. We'll just paste this over into the source property on the Report Viewer component. So I'll copy the path, we'll head back to our Report Viewer in the perspective workspace here. And again, with the Report Viewer selected I'll head over to Source and I'll just right-click and paste and it'll load our report. I'm going to re-size this here. I'm going to Save my project. Off-camera here, I do have a browser open which I'll bring on over into view here. With this Report Viewer component, if you look down at the bottom of the component, we do have this little control bar here. Let's go over each of the little items in the bar here. To just quickly talk about each item in the bar here, on the left-hand side we do have the little drop-down here which effectively allows you to change the zoom level of the report here. So if you wanted your report to zoom out showing more of the available page on the report, that's a little too far out, we'll zoom in a bit more. We do have some pagination controls down below here allowing you to cycle two different pages in the report. And then we have these two buttons in the lower right-hand corner. So starting with the little cloud icon here, this is simply a download button. If you click on that, it'll generate a PDF copy of your report and then your browser will attempt to save or ask you what you want to do with it depending on how you have that configured in your browser. I'm going to x out of this. The last icon here will open a new tab in your browser. Basically it allows you to just show the entirety of the report in a separate tab. Now I'm going to move this back out of the way. Let's take a look at some properties on the component here. Again, with the components selected, we talked about Source, we'll come back to params here. A lot of the Control properties that I just talked about are actually represented as Properties on the component. So if you wanted to change the page, or the currently viewed page, you could do that as a property here. So you could have a script or binding, change the Current Page or component. We do have the Page Count property here which you might think is a little weird that this is actually an editable property. But realistically, even if you look at the tool tip here, it's actually just a read-only property. So the idea here with Page Count is if you needed other components on the view, to be mindful or aware of how many pages are on the report here you could simply reference Page Count. We just talked about the zoom level here which, of course, is represented as a property. So we could change it from here. And then we do have Allow Download and Allow Open a Tab which are basically just whether or not you want to see those little buttons in the lower right-hand corner. If you didn't want anyone downloading a copy of the report, you'd simply turn those off. Now heading up to Parems here, I talked about that title property that exists on this down-time report which of course right now is actually setting the title there on the report. So if you wanted to override the value of a report parameter using this component, all you need to do is come over to the Parems object here. I'm going to add a new object member. I'll add a value. You want the key to match the name of the parameter. I'm going to type in Title with a capital T here. If I tab over, hit Enter, you'll notice after a moment it does update and now it says value which just happens to match the value on this particular property. Of course if I change this to something else, you'll notice that it then updates on the report. So if you wanted to make a dynamic Ad Hoc report where the underlying data changes depending on user input, you would make a report that utilizes report parameters, add those parameters as members under this parems object here, and then use Bindings or Script to change the value of the members. And with that, now you have a solid idea how to add reports to your perspective sessions.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
