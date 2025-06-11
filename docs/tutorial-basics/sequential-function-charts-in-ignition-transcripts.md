---
sidebar_position: 22
---

# Sequential Function Charts In Ignition - Video Transcripts

This page contains transcripts from the sequential-function-charts-in-ignition video course.

## Overview

These transcripts are automatically generated from the [sequential-function-charts-in-ignition Course](https://inductiveuniversity.com/courses/ignition/sequential-function-charts-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 5:08:47 PM
Source URL: https://inductiveuniversity.com/courses/ignition/sequential-function-charts-in-ignition/8.1
:::

## Video Transcripts

### 1. Introduction to Sequential Function Charts Video at Inductive University

:::tip Video Link
Watch the video: [Introduction to Sequential Function Charts Video at Inductive University](https://inductiveuniversity.com/videos/introduction-to-sequential-function-charts/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Sequential Function Charts, often called SFCs, are a powerful way to perform visual programming using Ignition. When you install the SFC module and launch the Designer, you'll have a new node in the Project Browser of your Designer called Sequential Function Charts. It's important to understand that Sequential Function Charts don't belong to any specific project that you have installed on your Ignition gateway, rather they're gateway wide. So all of the projects that you have installed can access and start up all the same set of Sequential Function Charts. And just like other resources inside of Ignition, they're managed from inside of the Designer. So the Designer is where you're going to create, delete, and design all of your Sequential Function Charts. However, even though you're creating them in the Designer, Sequential Function Charts always execute on the Ignition gateway. Even if they're started by the action of a client, for example, the chart always executes on the gateway.

**[01:07]** [01:07]
                                    So here in the Designer we have our Sequential Function Charts node, and we can create new charts from here, or if we have existing charts, we can access them from here. So for example, here is an example chart we have that mimics a basic batch process, and you could sort of get a quick overview of what these charts are going to end up looking like. And of course, in later lessons, we'll go over all of these individual elements. But SFCs in general are a way to program using elements in a grid, and the logic flows through the elements as they are connected. So here in the Designer is where we do our design work and our programming for the Sequential Function Charts. When a Sequential Function Chart is started, we can also monitor it visually here in the Designer. So for example, if we open up this other SFC, if we start up this chart, we can watch this chart run here in the Designer, but of course, the chart is actually executing on the gateway.

**[02:12]** [02:12]
                                    And if we have the Vision module installed on the same gateway, we can also perform this sort of visual monitoring from an Ignition Vision client. So now we know some introductory basics of Sequential Function Charts.

</details>

---

### 2. Chart Rules Video at Inductive University

:::tip Video Link
Watch the video: [Chart Rules Video at Inductive University](https://inductiveuniversity.com/videos/chart-rules/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll discuss and demonstrate a number of rules that must be followed in order for any Sequential Function Chart to compile correctly. If a chart doesn't compile, we'll see this Chart Invalid indicator over on the right in the Chart Design section, and the chart won't be able to start executing. The first rule to keep in mind is that each element in your chart must have a valid connection to another element. Whenever there's an element that has dangling connections, that creates a compilation error. To make this chart valid, let's create a few Action Steps. We'll add an End Step, and then connect them all together from top to bottom. Now it shows that the chart is valid, because there are no elements awaiting a connection to another element. Another thing to make sure to always do is to ensure that all scripts and transition expressions don't have any syntax errors. If we drop a Transition element in between Action Steps S1 and S2, then in the condition for it, let's say we try to reference a variable, but forget we don't use a double equals in our Expression Language, it will show that the chart is now invalid.

**[01:17]** [01:17]
                                    And if we go up here and click Show Errors, it will show right where the error is, and if we mouse over it, it will tell us it's an invalid syntax and right where the error is. So if we go back and fix that, make it a single equals, instead, we see it once again becomes a valid chart. One other thing to be mindful of, Transition Elements, use the Expression Language syntax, whereas Action Step scripts use the Python-like syntax, or Jython. Another rule we need to follow is that whenever the chart branches into multiple directions, all of the branches must lead to a transition First. To demonstrate, let's first delete the transition Action Step S2 and its adjacent connection. Then add branching like so. Then if we add transitions on the left and in the middle, we can't add an Action Step on the right.

**[02:17]** [02:17]
                                    This will create a compilation error, because the chart can't execute an Action Step at the same time as waiting for the transitions to become true. And if we mouse over the error, it will remind us that the elements must lead to another element or a group of transitions. But if we delete the Action Step and replace it with another Transition, we see that the chart is valid once more. Another rule to know is that for any Parallel elements like this one, any parallel branches that we start must reach the bottom. So if we add one Action Step and connect it, this results in a valid chart, since this path reaches the bottom. But if we start a parallel branch, but leave it dangling, that will cause a compilation error.

**[03:08]** [03:08]
                                    We can fix this by simply adding a Transition to complete the path. Finally, the last thing that's good for us to know is, charts do not need an End Step. They can loop back upon themselves. So if we delete this End element, the chart is now invalid since the parallel section is awaiting a connection beneath it. But that connection can if we'd like loop back up to the top. So let's do that, using a combination of a Jump and an Anchor. Now our chart is valid again because now we have a closed loop path. So now we've seen the basic rules we need to keep in mind, in order to make sure our charts compile successfully.

</details>

---

### 3. Chart Properties Video at Inductive University

:::tip Video Link
Watch the video: [Chart Properties Video at Inductive University](https://inductiveuniversity.com/videos/chart-properties/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to look at the overall properties of a chart itself. Whenever you open up a chart, you can click on any empty space in the background and the Elements Property Editor will switch to editing the properties of the chart itself. Anytime you're editing a chart, you can just go ahead and click right on the background and get back to those chart properties. The first setting to look at is the execution mode of the chart. By default, all charts start in Callable execution mode. Callable execution mode means that any number of instances of the chart can be executed or called from anywhere. You might have 0 instances running or you might have 100 instances running of your chart. Run Always mode means that the Ignition system itself is going to automatically start a single instance of your chart. The idea here is that you always want just one instance of a chart running.

**[01:05]** [01:05]
                                    So for example, if we open this chart, we notice that when it's in Callable mode, it has no instances running. But if we switch it to Run Always mode, then save that change, the system is going to go ahead and start one instance of the chart. But if we try to start another instance, it'll tell us we can't because it's in Run Always mode. Whenever we start up a gateway, it's going to start one instance of all of its Run Always charts, but it's up to us to design each chart to stay running. So for example, this chart is designed to stay running forever. It will just loop around forever and ever. But if we had a chart that had an End Step on it and the chart reached that End Step, the instance would stop and the system's not going to start another instance for you. So it's up to us to design a chart that just runs continually.

**[02:05]** [02:05]
                                    Now that we've seen how this chart starts up, we'll go ahead and cancel execution of this chart. It may take a moment or two for it to halt execution. The last execution mode is Disabled, which means that no instances of that chart are going to be able to be started. The next property to discuss is Persist State. Persist State means that upon shutdown, the gateway is going to pause all of the charts that are in persist state mode, and then remember what they were doing. It will save the state of the chart to a file on disk so that when the gateway starts back up, it can try and start up all of those instances where they had left off. Now, in order for this to work well, you need to design your charts to be responsive, which is something we're going to cover in a later lesson about chart best practices. It's also important to understand that by having Persist State checked, obviously your chart isn't going to be running when the gateway is stopped, it's going to be paused, and then when the gateway is started again, it will be resumed.

**[03:10]** [03:10]
                                    Also, if the gateway stops for an unexpected reason like a power loss, it's not going to record the state in that case. So if you need a chart that's going to be running across unexpected shutdowns, you're going to want to set up a redundant system. The next property to discuss is Redundancy Sync. Its default setting is false, but if it is selected, the chart state and parameters will be synchronized across a redundant cluster, allowing a backup node to continue after chart execution. For more specifics, please refer to the user manual section on SFC chart properties. Finally, we have various events scripts. These are scripts that are specified on the chart that can respond to changes in the chart lifecycle. Let's expand this pane just a bit to examine them. We have an On Start script that of course runs when the chart is started.

**[04:08]** [04:08]
                                    On Stop is run when the chart stops, which means it has reached an end step. On Cancel is run when the chart is canceled. For example, if somebody were to click on a running chart in the Chart Control panel and then click its Cancel option, the On Cancel script would be invoked. On Abort is called if there's an unexpected error somewhere else in chart execution. In this script, you will see that there is a new variable in your chart scope called abortCause, and that's going to be the exception that caused the chart to abort. So using this event, you can detect why the chart aborted. Finally, for On Redundant failover, this script gets called once if the chart is activated due to a redundancy failover. So now we know a bit about the various chart properties available for Sequential Function charts. Again, for more specifics, please refer to the User Manual section on SFC chart properties.

</details>

---

### 4. Designing Charts Video at Inductive University

:::tip Video Link
Watch the video: [Designing Charts Video at Inductive University](https://inductiveuniversity.com/videos/designing-charts/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to learn how to create Sequential Function Charts, place elements on them, and configure and connect those elements. Along the way,  we'll also learn about how the Designer can give us error feedback about our charts. To create a new chart, we simply right click on Sequential Function Charts and select New Sequential Function Chart. We'll just accept the default name, New Chart, and click on Create Chart, and this creates a new blank chart with its one starting element, a Begin Step. But we'll notice a couple things right away about our new chart. The Chart Design pane says that this is an invalid chart. If we click Show Errors, it highlights in red any elements that have a problem, and if we mouse over the problem element, it tells us that there's a dead end. What this means is, if the chart were to start now, it would just fall out of the bottom of the Begin Step and have nowhere to go, which is not legal.

**[01:05]** [01:05]
                                    So let's start fixing this problem. For starters, we don't have to keep this Begin Step here where it was initially placed by default. Any step can be selected and moved around by dragging it. Another thing to notice is, when a new element is created, it will get this little connection arrow beneath it. We'll see these arrows appearing in the Designer whenever there's an element that's unconnected. That's a good cue that we should connect something in that location. We can click and drag those arrows to create links that can go to other elements. For example, we'll drag this connection down a bit and create a link. Then let's connect an Action Step at the end of this link. So we'll drag an Action Step from the element palette at the top and place it right underneath like so, and it connects automatically with that link. So now the Begin Step is happy, there's no longer a red marker on it because it's now connected to the Action Step S1. But now the Action Step has the same problem, the Begin Step used to have, it's unconnected to anything.

**[02:07]** [02:07]
                                    So to solve this, let's extend the connection again, and then place an End Step underneath it. Now in the Chart Design pane, it tells us our chart is now valid. This is a good indication that if we were to save this chart, we could start it up. However, this chart isn't going to do anything because we haven't yet configured our Action Step in any way. To configure an element like an Action Step, we can simply click on it and then over in the Element Properties panel, its configuration interface will appear. If for some reason we don't see the Element Properties panel, we can make it visible by heading up to our menu and selecting View, Panels, Element Properties, then clicking on the element of interest once more if needed. We'll get more into the details of how Action Steps work in a later lesson. For now, we will simply write a quick script that writes to a tag.

**[03:01]** [03:01]
                                    We've previously set up a string tag named Feedback here in the Tag Browser for that purpose. But before we go any further, let's first make sure that the read write mode is set up here in the Designer toolbar. So let's write a simple script for Action Step S1. We'll select Add, then On Start, and maybe make this panel a bit wider. Then we'll add the system library call system.tag. writeBlocking, which takes some specified text and writes it to the specified tag path. Ahead of this statement we'll add placeholders for both parameters. One thing to be aware of is that, because SFCs are a global resource and not part of any specific project, we need to ensure that a tag provider is part of the specified tag path. For example, here, the tag provider default is part of the project, but the SFC exists outside of the project.

**[04:08]** [04:08]
                                    When we do a Copy Path on our tag and paste it into our script, within quotes, we see that the default tag provider is part of the name. Then we'll also add some text to be written. So at this point, we can save our chart, and watch our tag. We'll go ahead and start our chart, and there we go. The S1 On Start script has written the specified text to our tag. So you can start to see how charts are pretty easy to configure. They use drag and drop, we connect links to anything that's unconnected, and when things aren't properly configured, the Designer will tell us that things are wrong until we fix them. Finally, let's look at how to create links that branch and loop. We'll start out by selecting this End Step and its preceding connections, and clicking delete.

**[05:07]** [05:07]
                                    No surprise, we've now got an invalid chart we need to fix. Now, let's say we want to branch this chart into three parallel directions. So we'll place three separate transition elements, connect the middle element, and then when we click that transition, we now have options to connect the left and right transitions off that original connection. Now we have some branched links, so we can have exclusive logic in our chart. We can also create looping connections. So for example, let's create a series of connections so that we have a feedback loop path ahead of the S1 Action Step. But our chart is still invalid because the other branches are unconnected. To remedy this, we'll add an End Step, connect to it from the middle transition, and then connect to it from the right transition.

**[06:04]** [06:04]
                                    Now our chart is valid again because there are no unconnected steps. So in summary, we've seen the basics of designing charts. To create elements, we simply drag them onto the chart. To connect elements, we use the connection arrows to draw links. And to configure elements, we make sure the element properties panel is visible, and then we just click on the element we'd like to configure. And we've also seen the basics of branching and looping structures.

</details>

---

### 5. Chart Scope Video at Inductive University

:::tip Video Link
Watch the video: [Chart Scope Video at Inductive University](https://inductiveuniversity.com/videos/chart-scope/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll define the concept of a chart scope and demonstrate the usage of one chart scope variable on a Sequential Function Chart. A chart scope is a place where variables can be stored for the lifespan of a chart instance. Each chart instance gets its own chart scope. Even if a single chart definition has many instances running, each one gets its own separate scope object. The variables inside the chart scope are accessed by the steps and transitions of the chart. Let's demonstrate this. We'll start by creating a new Action Step and connecting it. Then we'll create an On Start action. We can see that the new On Start action is given an input variable named chart. If we expand the Parameters pane and widen it a bit, we see that chart is a reference to the chart scope. A chart scope is stored as a Python dictionary object. Creating a new variable in it is very easy.

**[01:06]** [01:06]
                                    We can just type `chart.myValue = 5`. This defined a new variable, myValue in chart scope, and assigns it the value 5 in integer. However, the values inside of the chart scope don't have to be scalar values like integers or floats, they could be any complex types such as Python lists or Ignition datasets, really anything that you could store in a Python dictionary. So this is how we create a new variable in chart scope. Next, let's use this new variable to control the chart flow by referencing it in a Transition. We'll start by adding left and right Transition elements, connecting them from the Action Step S1, and connecting each branch to an End Step, giving us an initially valid chart. Then let's configure both transitions using our created variable. In transition expressions we can reference variables in chart scope directly using curly braces.

**[02:09]** [02:09]
                                    So for the left transition, we'll write `{myValue} != 5`. Then we will copy this expression so we can use it for the right transition, and for the right transition, we'll copy that over and update it to `{myValue} = 5`. As a side note, be aware that the curly braces are needed for Expression language syntax on transitions, but they are not needed for Python statements on Action Step functions. Finally, when we go ahead and save this chart, then head on over to the Chart Control pane to start it up, and monitor it, we see that it's followed the right side. `myValue = 5` branch because we initialized myValue to be 5 in Action Step S1. Down here in the Chart Monitoring panel, this shows us all of the variables available in chart scope, including our value of `myValue = 5`, as well as other values automatically in chart scope for us.

**[03:16]** [03:16]
                                    If we refer to the User Manual System Functions Reference for SFCs, the system library system.sfc, we will find a definition for all such available variables. So now we have seen what chart scope variables are and an example of how to use them on a Sequential Function Chart.

</details>

---

### 6. Action Step Best Practices Video at Inductive University

:::tip Video Link
Watch the video: [Action Step Best Practices Video at Inductive University](https://inductiveuniversity.com/videos/action-step-best-practices/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll discuss Sequential Function Chart best practices, and in particular, one of the most important rules to follow when designing our charts. When designing SFCs, we want to design our charts so that they are responsive. What this means is that our charts respond quickly to the Pause and Cancel commands. If we remember from earlier lessons, when we try to pause a chart, the chart goes into Pausing state and it waits for any currently executing steps to finish up what they're working on. So for the case of an Action Step, that means that any currently executing script needs to finish before the chart can go into Paused state. Likewise, for canceling, if we try to cancel a chart, it goes into Canceling state until the currently executing step has finished with any work that it's doing. The reason it's important to respond quickly to the Pause command is that when we shut down an Ignition gateway and it tries to persist the state of our chart so that it can be restarted upon startup, the gateway needs to pause our chart before it can save the state of the chart.

**[01:11]** [01:11]
                                    So we need to pause quickly because the operating system typically only gives the Ignition gateway a short time window in which to shut down before it will just kill the process. That's why it's important to design our charts to be paused quickly. A chart will not be responsive to the Pause and Cancel commands if it has a step that runs a script that takes a long time to finish. For example, let's say we have this very simple chart that has an Action Step Do_Work, which has an onStart action, which executes a loop that has a half second delay on each iteration. Since the script is going to loop 60 times waiting a half second each time, this is going to take 30 seconds or half a minute. There are a number of things that could cause a script to take a while to run: maybe a long running database query, maybe a lot of individual queries which take a half second each, or doing a whole bunch of I/O.

**[02:04]** [02:04]
                                    This is just a simulation of some action which consumes some time. But typically it's going to happen if we're trying to do lots of things, and oftentimes that involves a loop. If we now start this chart, we see that it's now in a Running state, but if we try to pause it, it goes to a Pausing state, but still remains Running, and it's going to remain there until the script finishes executing, which is gonna happen when the itemsCount is 60 and 30 seconds of runtime have elapsed. That's finally happened, so it's finally in the Paused state. So the remainder of this lesson will focus on strategies whereby we can do the same amount of work, but in a different structure that keeps our chart responsive.

**[03:05]** [03:05]
                                    We call this process refactoring. The first strategy to refactor loops and scripts is by using a loop in the chart itself. Here, this refactored chart has an Action Step called Loop_Init whose onStart action is going to initialize our counter to 0 as before. This is what will count up to 60 to process our 60 imaginary items. Then the second Action Step, Do_Work, again has an onStart action, which performs the same simulated work as before. It's just sleeping for a half second and incrementing our counter. The difference now is that instead of having the for loop in a Python script, now the loop has been implemented in the chart itself. Each time through the loop, it simply carries out these two simple statements. The chart loop now follows the left transition for itemCount less than 60, at which point the chart loop will end once the itemCount reaches 60.

**[04:04]** [04:04]
                                    Okay, let's run this chart and see how it works. We see that our Do_Work step is active. It's actually running over and over again in the loop. We can't see it directly, but we do see that our item counter is incrementing. This time, if we try to pause our chart, we see that it goes to Pausing state for a half a second, and then it successfully pauses, and then we are also able to resume its execution. That's the big difference between this chart and the last one, because we made the Do_Work action much more atomic, now this chart can break into the execution cycle to pause or resume. And then as before, after 30 seconds or 60 items counted, the chart will finish. It's done the exact same work in the exact same amount of time as the other chart, but this chart is now responsive.

**[05:04]** [05:04]
                                    There's one more way that we can refactor the same loop. This method doesn't have an advantage over the other method other than it's a bit more compact, and on a really busy chart, sometimes minimizing the amount of chart structure can be advantageous. In this case, we have a single Action Step Do_Work, and within it are two actions this time: the onStart action initializes our counter variable as before. Then there is a timer action at a 0 millisecond delay. So this timer action will run just as fast as possible, but within it, it's doing the inner part of the loop that is sleeping for a half a second. Then it increments the itemCount as before, and then the chart uses a transition that's just waiting for the count to reach 60, in order for the loop to stop. So this is a much more compact way to refactor our original loop than we had implemented scripting. Once again, let's run this chart and see how it behaves. So we'll go ahead and click Start, then Running.

**[06:06]** [06:06]
                                    As before the Action Step is shown as running, our itemCount is incrementing and our transition is waiting for the looping to be finished. Then once again, when we Pause the execution, we see that our chart pauses almost immediately. Our chart is nice and responsive due to the refactoring we performed. So to recap, the thing we want to keep in mind as a chart best practice is, instead of writing looping scripts in Action Steps, that might take a long time, it works a lot better to refactor such a script. Two ways we've seen of doing this are: implementing the looping using a chart structure loop instead, or using an Action Step timer with a 0 millisecond delay and a following transition. By using either of these approaches instead, our charts can remain responsive, and we can make sure that the Ignition gateway can stop in a timely manner.

</details>

---

### 7. Begin Step and Using Parameters Video at Inductive University

:::tip Video Link
Watch the video: [Begin Step and Using Parameters Video at Inductive University](https://inductiveuniversity.com/videos/begin-step-and-using-parameters/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    When you create a new sequential function chart, it starts with the begin step already on it. The begin step is where the chart will begin executing. You can't remove the begin step, and so there's no begin step up on the pallet because you won't ever need to add another one. In addition to being the charts starting point, the begin step is also where you can define your charts parameters. These parameters define default values for chart scope variables. If the parameters are received when a chart is started through, for example, the scripting function system dot sfc dot start chart. If those parameters are passed to a new instance, the default value won't be used. The value that was passed in as a parameter will be used instead. But if nobody passes a value for a parameter, its default value will be used. This chart here uses the parameters for two purposes. The loop total is expected to be received as a parameter and defines how many times this chart will execute a loop, whereas the count isn't expected to be passed as a parameter.

**[01:12]** [01:12]
                                    Rather it's just used here to define an initial value for the chart's scope variable count. It's important to remember that the default values are defined as expressions. So if I had made a new parameter here and I wanted it to be a string, I can't just type in something like this because that's not a valid expression, I would need to put in quotes in order to make this default value a valid expression. You can optionally pick one of your parameters to be what's known as the key parameter. The key parameter is used to identify a chart. So for example, if we take this chart here, it has no parameters at all. And if we start it up, a new instance starts, and the instance here you can see is identified by its instance id, which isn't very friendly to look at. But if we take our looper count chart, which does define a key parameter, and we start it up, it'll ask us for a value to use for the key parameter loop total.

**[02:05]** [02:05]
                                    So let's say we'll give it a value of five, and now you can see that this instance is identified by the value of its key parameter, which makes it easier for a chart that may have many instances running to be identified. So for example, suppose your chart was being used to process a batch. You could define the batch number as the key parameter, and then when you're looking at all of your instances, it would be clear which chart instance was processing which batch. The parameters aren't just useful for identifying instances. They are also very valuable for use in the chart's logic. So for example, this indirection demonstration chart, it uses the motor number as a key parameter, and then throughout the chart itself, it uses that motor number for indirection so that it can write to tags that represent the correct motor. For example, if you take a look at this action step, you can see that it's using motor number to build out an indirect tag path. So we may have many motors and each instance uses indirection to make sure that the chart instance is reading and writing to the correct set of tags.

**[03:06]** [03:06]
                                    So in summary, the begin step, while obviously crucial to mark the beginning of your chart, is also a very important place where you can define chart parameters, which can be used for instance identification, as well as chart indirections so that you can make one chart that can be used to control many similar things.

</details>

---

### 8. End Step Video at Inductive University

:::tip Video Link
Watch the video: [End Step Video at Inductive University](https://inductiveuniversity.com/videos/end-step/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate the use of a sequential function chart's end step. End steps mark the termination of a chart, and when a chart reaches the step, it stops executing. The end step can be grabbed from the pallet and dropped onto the chart like so. Now, after this chart executes, it will go through all the steps up to this point, and then it will enter the stopping state. And this is when any on stop event scripts would fire. Charts can also contain multiple end steps like this one. It has two separate branches, each with their own end steps. However, you're not limited to just two. You can add as many end steps as you'd like in your chart. Charts also don't need to contain any end steps at all. For example, this chart will continue to loop forever unless someone cancels it. The one restriction with end steps is that they cannot be placed in parallel sections. If I have a parallel section, I can't place my end step inside of it, but one can be placed outside.

</details>

---

### 9. Action Step Video at Inductive University

:::tip Video Link
Watch the video: [Action Step Video at Inductive University](https://inductiveuniversity.com/videos/action-step/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll introduce the "action step" SFC element. Action steps are one of the most important elements as they do the bulk of the work in SFCs. Action steps work by adding a certain number of actions to them. These actions allow you to write Python scripts to do things like write to tags or execute SQL queries. Depending on the action selected, they'll fire at specific times during the steps lifecycle. The first option here, OnStart will fire when the step first starts. It'll be the first script to run for this step and is guaranteed to run once. After adding the action, a Python function will be created for you and it's passed two parameters, chart and step. Chart is a reference to the chart scope, which lasts for the entire lifetime of the chart instance, and step is a reference to the step scope, which only lasts as long as the current step is running. The next option OnStop will fire as the step is stopping and just like the OnStart action is guaranteed to run once. Next is the Timer action.

**[01:02]** [01:02]
                                    Unlike the OnStart and Stop actions, the timer is not guaranteed to run. Timer actions will only fire if there's a transition step below this action step that's currently set to false. Then it needs to be false for a sufficient amount of time for the timer to run. That time will depend on the rate that you set for the timer action. You can add as many timers as you'd like, but be aware they will not run at the same time. If an action takes a long time to finish executing, it will block other actions from executing. If multiple actions need to be run at the same time, use a parallel section. Finally, there's the Error Handler action. This action will only run if any of the other actions throw an unexpected error. This provides an opportunity to perform your own error handling and gracefully handle those errors. Normally, if errors aren't caught in the other actions or if this script throws an error, a chart will abort. I'll set up a quick example chart to demonstrate the behavior of the action step. I'll add an OnStart script that initializes some chart variables. I'll add a message that says, "I started", and then a counter set to zero.

**[02:07]** [02:07]
                                    Next, I'll configure a timer script to fire every one second that increments the counter. Then I'll add an OnStop script that updates the chart message to say, "I'm done". Finally, I'll add a transition step below the action step that's true when the counter is greater than five. Now, if I start a chart instance, we can see the message be initialized, the counter increments, and then the message will let us know that the chart is done.

</details>

---

### 10. Transition Video at Inductive University

:::tip Video Link
Watch the video: [Transition Video at Inductive University](https://inductiveuniversity.com/videos/transition/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at the transition SFC element. Transitions use expressions to determine whether or not a chart will move forward and continue executing the elements below. The expression will be evaluated to a boolean, and if that boolean is true, the next step in the chart will start executing. Otherwise, the element above will continue to execute until the transition becomes true. If you'd like to refresh your memory on the expression language and its syntax, I'll link to a page in our user manual with more information. Let's take a look at some example charts. The first chart has two different branches, A and B, and transitions at the top of each that control whether or not the chart progresses. If there are multiple true transitions on the same level, then the leftmost transition that's true will be picked. So if both of these are true, when the chart gets to this point, then the A action is the one that will end up executing. If there are multiple false transitions, then the first one to become true will be the one that gets picked.

**[01:04]** [01:04]
                                    To demonstrate this, I'll use my "Shift" tag and set up the expression of each of these transitions so that they look for a specific value for my tag. For the A path, I'll check whether or not the tag is equal to "Day", and then for B, I'll check for "Night". I'll start the chart, and right now the tag isn't equal to either of those values, so the chart is waiting. If I change the value of the tag to "Night", then the B branch executes. Let's look at another example with three transitions. It can be helpful to think of these transitions as "if" statements. The way these would be evaluated is the same as saying, if this first condition is true, execute this branch, else if this statement is true, execute this branch, else if this is true, execute this. A catchall else can be added by making the last transition true.

**[02:07]** [02:07]
                                    The chart will pick the first statement going from left to right, so first it will check these two, and if they're false, it will move on. And if this is always true, then it will be the catchall. To expand on this. You can also add a timeout to transitions that allow you to specify a specific delay to wait for. If the delay time is reached, then it will set a flag that you can specify here. I'll add a timeout to this transition that waits five seconds and then sets a flag named "Other" to true. Then the last transition will evaluate the "Other" flag. What ends up happening here is the chart will start, none of the transitions will evaluate to true, so the chart waits. Then after five seconds, the "Other" flag is set to true which makes the final else branch true, and that section of the chart will execute. As you can see, transitions are a critical component of SFCs as they allow you to control the flow of a chart.

</details>

---

### 11. Enclosing Step Video at Inductive University

:::tip Video Link
Watch the video: [Enclosing Step Video at Inductive University](https://inductiveuniversity.com/videos/enclosing-step/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    The enclosing step is another kind of step available for use in an SFC. Unlike the action step, which runs scripts, the enclosing step actually runs another sequential function chart. This is really powerful because it allows you to use the concept of encapsulation while designing your sequential function charts. So you can design charts that act like reusable pieces that can get called like functions from other charts. The main piece of configuration that you need to understand about the enclosing step other than of course picking which chart you want to run as your enclosed chart is the difference between block execution mode and cancel execution mode. If you remember back to our lesson about steps and transitions, you'll remember that a chart will move on past the transition when the transition is true and the step is ready to be stopped. When an enclosing step is in cancel execution mode and the transition beneath it becomes true, the enclosed chart is simply canceled right away, and as soon as that canceling is finished, flow will move past.

**[01:05]** [01:05]
                                    If the enclosing step is in block execution mode, the step will refuse to move on until the enclosed chart is finished. For example, it would block the flow of this enclosing chart one until the enclosed chart that it's running has reached an end step. To see this in action, I have the charts transition set to this boolean tag named move on. We're going to use that to control whether or not this transition is true or false, and we're going to have our enclosing step run a chart I've made called delay chart. Delay chart simply waits for 15 seconds before reaching the end step. When I start enclosing chart one, we can see that it's running, and now our delay chart is running, but it will take 15 seconds to complete. I'm going to tell the transition to become true. This legend will remind us that the transition is now active and you can see that the enclosing step is still running, and this yellow indicates it's in the deactivating state. Now it's finished because the 15 seconds has elapsed. The important thing to realize here is that even though my transition became true, the enclosing step stayed in the deactivating state, which prevented the chart from moving to the end step until the enclosed chart was finished.

**[02:11]** [02:11]
                                    We can compare that to if we ran the enclosing step in cancel mode. Let's set the boolean tag to false and run the chart. Again we have the same situation where the delay chart is running, but if I toggle the transition now in cancel mode, it moves through instantaneously because the delay chart was canceled. Besides block versus cancel mode the other configuration on the enclosing step is configuring how information is passed through the enclosed chart and how information is collected from the enclosed chart. To explain this, I'm going to use another example. I have a chart here called write and wait. This is a very simple chart that on start simply writes to a tag and it writes to the tag that has been sent to this chart as a tag path parameter, and it writes whatever value was sent to the chart as well, and then it waits for the value at that tag path to be confirmed as the value that was written. The action step also uses an on stop action that records the amount of time that the write took by comparing the current time to the time the chart started.

**[03:06]** [03:06]
                                    Then it stores that as a string represented in milliseconds as a chart scope variable called write time. So I can use my enclosing chart two to call the write and wait chart. Within the enclosing step, it makes the most sense to use block execution mode since I want to wait for the write to be confirmed and read back from the device. I need to pass the tag path into this chart as a parameter. The tag path is an expression, so I need to use quotes and I need the value to write to the tag, So I'll set the value as three. I can take that write time variable that the write and wait chart is calculating and store it as a local chart variable called write time millis. All right, so let's go ahead and run this chart. You can see the chart has already finished. My example int tag has a value of three, and my right time millis is 10 milliseconds. So you can see how the concept of encapsulation can be used to create a series of utility charts that can be used at single steps from other charts that you have.

</details>

---

### 12. Parallel Element Video at Inductive University

:::tip Video Link
Watch the video: [Parallel Element Video at Inductive University](https://inductiveuniversity.com/videos/parallel-element/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    The parallel element is one of the most powerful constructs of sequential function charts. They allow you to contain other SFC elements and execute their logic in parallel. I'll drag one into my chart workspace from the above palette. You can see that it's got this rectangular shape with its bounds represented by the two sections of parallel lines. Additionally, it provides the opportunity to create different branches of logic with the available links. You can do anything that you would do outside of a parallel element, inside of a parallel element, except for using an end step. Also jumps in anchors have a separate namespace inside of a parallel element, so you cannot jump to get out of a parallel element. I'll switch over to my parallel demo chart to see how these work in action. We can see my chart utilizes this parallel element spanning across rows three through 16. Within it, we have three different branches and each of them simply runs for a specified amount of time. On each transition, we have the built-in chart scope, variable running time, setting our transition to true after the branch runs for 10 seconds, 15 seconds, and finally 20 seconds.

**[01:10]** [01:10]
                                    I'll start this chart up so we can review how it will flow. The flow of the chart won't move beyond the bottom of the parallel until all three sections or as many sections as you have, have reached the bottom of the parallel area. So in this case, we can see the first one reaches the bottom after 10 seconds, the second one after 15 and after 20 seconds, the chart will end as all logic within the parallel has been executed. Now, let's say you would like to end this chart maybe when one or two out of the three branches finish. If I select this parallel element, this can be achieved by making use of this cancel condition. By checking this off, we are telling the chart to cancel any currently running steps, once the condition becomes true. For example, I'll set the condition to be true when, let's say a parallel finish variable is greater than or equal to two. Then I'll define the parallel finish as a chart scope variable in my begin step, and I'll give it a default value of zero. Next, I'll add action steps to the bottom of each branch.

**[02:04]** [02:04]
                                    I'll give the first action step an OnStart action that increments the parallel finish variable by one. Then I'll copy this script over to the remaining action steps. Finally, I'll save the chart to apply the changes. When I start this chart up and we monitor its flow, you can see that all three charts are running again, and now our parallel finish variable increments as the first branch finishes. Then once the second branch finishes, the third one will cancel ending the chart, since our cancel condition became true. As we are able to run multiple charts like this, the parallel element stands out very distinctly from standard scripting. Using standard scripting, it's very hard to have multiple things running at once unless you get into multi-threaded programming, which is difficult to use as opposed to the parallel element, which is very easy to use.

</details>

---

### 13. Jump and Anchor Video at Inductive University

:::tip Video Link
Watch the video: [Jump and Anchor Video at Inductive University](https://inductiveuniversity.com/videos/jump-and-anchor/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    The jump and anchor SFC elements are a way to connect elements without having to draw the links between them. For example, instead of connecting these two action steps with the long link, I could use a jump and anchor. I'll place a jump by the transition at the top of this chart, and I'll place the corresponding anchor before this action step below. When I start this chart, you'll see that once it reaches the jump, it is able to move the flow to the anchor. Each jump, an anchor is identified by a label, which is a single character. Right now, my jump and anchor are represented by the default character, capital A. These are case sensitive and can be any alphanumeric character, so I could instead maybe represent each label as an exclamation point. Just keep in mind that in order to make use of a jump and anchor, they must share the same label. Additionally, jumps and anchors have a one-to-many relationship where you can have many jumps to a single anchor. For example, if I added another anchor to this chart and gave it the same label, you'll see an error produced for a duplicate anchor. Now, in this example, it would've been easy to draw the link, but take for example, a more complicated chart.

**[01:05]** [01:05]
                                    In this batch vessel chart, I have another anchor here labeled with the capital E that goes to an error handler, and then in numerous places on the chart, I have a jump with the same label. Now, drawing links from all these locations back to my error handler could be pretty cumbersome and in a very complicated and busy chart, you might have to cross over other elements, which isn't allowed. So in some cases, jumps and anchors are required to let you go to a place in the chart that you wouldn't be able to reach otherwise. When I start this chart, we can see that once an error jump was reached, we could seamlessly enter into the error handling logic. This provides us a great design tool for better managing complex charts.

</details>

---

### 14. Note Video at Inductive University

:::tip Video Link
Watch the video: [Note Video at Inductive University](https://inductiveuniversity.com/videos/note/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    The note element can be used to annotate sections of your chart to make them easier to understand. This is the only element that doesn't have to be connected to any other elements in the chart. They can be placed anywhere, however, they can't overlap anything else on the chart. You can see here in this batch vessel chart that the note element has been used to make the chart a little bit easier to read by showing the reader which sections of the chart are in charge of which ingredients. Documenting charts like this is always a good practice, as it will help anyone looking at the chart better understand the design of the chart.

</details>

---

### 15. Starting a Chart Video at Inductive University

:::tip Video Link
Watch the video: [Starting a Chart Video at Inductive University](https://inductiveuniversity.com/videos/starting-a-chart/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to learn all of the different ways in which you can start a sequential function chart. The first way is within the SFC designer interface. If you have a chart open and that chart is valid and the execution mode is set to callable, then you can start an instance of that chart using the chart control panels start button. So I can go ahead and start this looper chart up and you can see I've got a running instance of it. If I click start again, it starts a second instance. This method of starting a chart is also compatible with parameters to a limited extent. This looper count chart has two parameters, one of which the loop total is a key parameter. So you can pass this chart the total number of times in which to execute this loop, and then it also initializes an internal variable count. So if I start this chart, it's going to ask me to provide a value for the key parameter. I'll go ahead and give it a value of 100, and you can see that the loop total key parameter is 100 and that this chart is going to loop a hundred times after which point it simply ends.

**[01:07]** [01:07]
                                    Now let's see how to use scripting to start a chart. You can use the function  system.sfc.startChart() to start a chart via scripting. The chart needs to be in the callable execution mode and be aware that you're starting whatever chart you saved last. So if you have edits in the designer, those aren't going to take effect until you've saved them. You can call system.sfc.startChart from anywhere in the system. In this case, I'm just going to use the script console. So I'll call system.sfc.startChart, and then I'll pass the path to the chart looper count, and then you give it a Python dictionary with all the parameters you want to pass. In this case, I'm going to pass one parameter, my key parameter, which is loop total. The keys of your dictionary should be strings representing the parameter names, and the values can be whatever values you want to pass. So I'm going to go ahead and pass 50 to loop 50 times. Then I'll execute the script and we should see that we've got a new instance of looper count running and it's going to loop 50 times because that's what I passed for the key parameter.

**[02:06]** [02:06]
                                    A chart can also be started by the gateway itself. If the chart is set to the run always execution mode. To see this, I'll change over to the looper chart. Again, I'll cancel these instances I already started and set the execution mode to run always. When I save this chart, the system will start up one instance of this chart. Of course, with run always charts, it doesn't make any sense to have a key parameter because nobody is manually invoking an instance of the chart. So there's no parameters to be passed. The final method of starting a chart that we're going to look at is starting a chart with an enclosing step. I'll open up this enclosed looper count chart. If we look at its enclosing step, it's going to run looper count in block mode because we want to wait for all the loops to complete and it has to pass the loop total, which is set to 100. I'll start it up and here you can see that the chart is running. But if we go back to looper count, you can see that our instance of looper count with a loop total of 100 is also running.

**[03:02]** [03:02]
                                    And if you monitor this chart, you'll notice that the chart scope is pretty much the same as we saw before, except that now we have a parent entry for the parent value. This is a reference to the parent chart scope. And those are all the different ways that you can start a sequential function chart.

</details>

---

### 16. Monitoring Charts Video at Inductive University

:::tip Video Link
Watch the video: [Monitoring Charts Video at Inductive University](https://inductiveuniversity.com/videos/monitoring-charts/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    One benefit of using sequential function charts is that you can easily monitor their status and flow. The first method used to monitor a chart you may have seen a number of times throughout this course, and it's right here in the designer. If you have a chart instance running and you open up the definition for that chart, it will show you all the running instances for that chart. If you double click on one of the instances, it will turn your designer into monitoring mode where you can monitor that chart. While in monitoring mode, you'll view the current state of the chart elements. You can identify the state with this available legend in the top left of the design space. Additionally, you'll get access to this chart monitoring section, showing different chart and step scope variables and their values. You can also monitor a different chart from this mode, or you can return to the design view via this link up here. The other way to monitor charts is through a vision client. I'll go ahead and start up this LooperCount chart.

**[01:05]** [01:05]
                                    I'll let it run for a while, and then I'm going to go over to my vision windows where I have a window open and you'll find in the admin section of the component palette, there's a component called the SFC monitor. This is available if you have both the vision module and the sequential function chart module installed. When I drop it onto the root container, you'll see a component that lets you view the status of all your running charts. If I go into preview mode, I can choose which chart to monitor from this list on the left hand side. The chart, this component pulls into view, depends upon the instance ID property. We can make use of this ID in scripting in order to monitor a single chart. On this chart monitor two window we have a chart monitoring component and a button and this button has a script on it, which starts a new instance of the looper chart. And the start chart function returns the identifier for that chart. It then sets the instanceID property of our SFC monitor component to that instance ID.

**[02:04]** [02:04]
                                    So you can see if I press that start chart button, it starts a chart and sets the instance ID of our monitoring panel, which directly starts monitoring the status of that chart. And the way I set this up is simply by toggling the instance list visible and the scope table visible booleans, which lets me control just which parts of this component to make visible. And those are the different ways that you can monitor a sequential function chart, which is useful to know as it may help in better understanding how a chart is working or when you're trying to debug a chart.

</details>

---

### 17. Pause, Resume, and Cancel Video at Inductive University

:::tip Video Link
Watch the video: [Pause, Resume, and Cancel Video at Inductive University](https://inductiveuniversity.com/videos/pause-resume-and-cancel/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    After a chart has been started, we get access to additional chart controls, allowing us to pause, resume, and cancel a chart. On the screen I have this SFC named Looper and it has a running instance. I'll access the charts monitor so we can better see these controls. Let's start with seeing what happens when a chart is paused. When I click on pause here during the S two action step, the chart pauses very quickly and it enters the paused state, which is represented by this light blue fill color. When pausing a chart, the chart must wait for any currently executing actions to finish before becoming paused. So let me resume the chart here by clicking on resume. Once resumed, it will continue running as before. I'll pause the chart now on this S1 action step and you'll see it sits in the green active state for a few seconds before becoming paused. This is because the S1 action step contained some execution, whereas my S2 action step was empty. Canceling a chart also shares this functionality as it will allow for any currently executing actions to finish before becoming canceled.

**[01:07]** [01:07]
                                    So if I decide to cancel this chart during the S1 action step, we'll see it stay in the green active state again for a few seconds before the chart becomes canceled. Canceling a chart will also make the chart stop, but it stops in a slightly different way than if the chart had reached the end step. When a chart reaches an end step, the on stop event script will run, whereas if a chart was canceled, then the on cancel event script will run. One last thing to note about canceling is that you can cancel an SFC regardless if a chart is in a running or a paused state. Now let's look at the other ways that pausing, canceling and resuming can be achieved. So we've already seen one of them here in the designer. Under the chart control panel, we have pause, resume and cancel buttons, which take effect on the selected SFC instance, but that's not the only way. We can also use the SFC monitor component within a vision client to pause, resume and cancel. I'll go ahead and start up two instances of the Looper chart and tab over to my vision window chart monitor one.

**[02:04]** [02:04]
                                    When I go into preview mode, I can right click on a chart from the instance list, which provides me a context menu with the pause resume and cancel functions. I'll go ahead and pause this chart and we can see it come to a stop. I can open up the menu again and click on resume to continue the chart. And of course we always have the option to cancel the chart at any time. You can also pause, resume and cancel via scripting from anywhere in the system that you can run a script. In this case, I've mocked up a system that uses pause, resume and cancel scripts in a vision window named chart monitor two. On this window we see I have another SFC monitor component along with three buttons representing the pause resume and cancel functions. I'll go back into design mode to review the pause button script. I'll do so by right clicking into the scripting option for the button. The button's action perform script first gathers the instance ID from our SFC monitor component. The ID is pulled from whatever chart is currently being viewed by the component. That ID is then passed to the system function system.sfc.pauseChart(), which will pause the instance of the chart matching the instance ID.

**[03:11]** [03:11]
                                    And for my other buttons they gather the instance ID in the same way as the pause chart button, but they use their corresponding SFC system function. So the resume button passes the ID to  system.sfc.resumeChart(), and likewise the cancel button passes the ID to  system.sfc.cancelChart(). So if I go into preview mode and select this running chart, you can see I can use the buttons to pause the chart, resume the chart, and finally cancel the chart. If you want more detailed information on how these SFC functions are working, check out our user manual system functions page within the appendix, and those are all the different ways in which you can pause, resume, and cancel an SFC.

</details>

---

### 18. Vision Clients Interacting with SFCs Video at Inductive University

:::tip Video Link
Watch the video: [Vision Clients Interacting with SFCs Video at Inductive University](https://inductiveuniversity.com/videos/vision-clients-interacting-with-sfcs/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we're going to learn how we can use sequential function charts to interact with vision clients. Why would you need to do this? Imagine you have a chart that controls a process. An operator initiates the process from a client and at some point later the chart may need to confirm if something is in the correct position. It may also need the operator to manually add an ingredient or confirm another action. There's a number of reasons why a sequential function chart might need to communicate with the user interface. With sequential function charts however, they are executed on the gateway so they can't directly open up a vision window to send notifications or something like that. To achieve this, we can make use of a combination of techniques. I already have this set up in my project and there's a number of parts that have to work together. I'll walk you through all of them and then we'll see it in action. To start, I have this SFC named feedback. The chart expects that a client ID is sent into it. That's going to be the ID of the client that the chart is trying to communicate back with.

**[01:07]** [01:07]
                                    If the chart starts and the client ID isn't there, we log an error message to the system console. Otherwise we have a short two second delay and then we send a message down to the client. This is done using system.util.sendMessage(), which invokes a message handler on the client. So we specified the name of the project. In this case, I'm in a project called SFC. The message handler name, which is feedback prompt. The ID of the client session to invoke the message handler on which is the parameter that will be passed to this chart and a payload, which is whatever message I'm trying to send to the client. In this case, we're just sending the ID of the chart. So the chart is invoked with the ID of the client and then it sends a message to that client with the ID of the SFC instance. And then it waits for a chart scope variable named choice to become either A or B, at which point it just lights up one of these action steps that do nothing. Moving on, I am making use of some vision windows for the operator to use.

**[02:05]** [02:05]
                                    The main window which will open on startup has an SFC monitor component and a button to start the SFC. Let's review the buttons action performed script by right clicking into the scripting option. First it gathers the ID of our client with  system.util.getClientid(). It then starts an instance of the feedback SFC and sends it the expected client ID parameter using  system.sfc.startChart(). This also returns the unique identifier of the chart. And finally these last two lines set the SFC monitor components instance ID property to the charts id. This will pull the running chart into view on the component. My other window feedback popup is a popup window that the operator can use to make the choice between A or B. This window gets the chart ID passed into it as a root container parameter and it also has two buttons. Let's review the action perform script for the A button. Again, I'll right click into the scripting option.

**[03:04]** [03:04]
                                    The script first gathers the chart ID root container property. Next, it makes use of the system.sfc.setVariable() function. This function allows us to set a variable on a running sfc. It expects at least three parameters, which are the charts instance id, the name of the variable and the value we want to assign. In this case, we are using the single character capital A. If we move over to the B button script, it looks exactly the same. However it sets the choice variable to a capital B. It's useful to note here that there is an additional scripting function that can serve the purpose of setting SFC variables and that is system.sfc.setVariables(), which is used in cases where you would want to set many variables at once. Now the piece that brings this combination of techniques together is under client event scripts, then message. If we remember back to the prompt action step, it calls system.util.sendMessage(). It's invoking this client message handler named feedback prompt, which receives the payload, which was a dictionary parameters that just had the chart ID in it.

**[04:08]** [04:08]
                                    And this message handler simply opens the feedback popup and passes the chart ID of the chart that it received from the message payload to the feedback pop-up window. Let's go ahead and launch the project so we can see all these pieces in action from the client side. So we'll go ahead and start up our chart. And we didn't error out because we successfully sent it our client ID and now we're stuck here at the prompt step. So the prompt step executed. It invoked our client message handler, which opened our feedback pop-up window and now it's waiting. It's waiting for the choice to become either A or B. So we're going to go ahead and choose B. And you can see that B was chosen and there was a new variable in the chart scope called Choice whose value is B. And if we do start this all over again, you can see if you choose A, the A path will be followed. To summarize this lesson, we can use  system.util.sendMessage() to call a client message handler, which can then interact with the client in some way.

**[05:07]** [05:07]
                                    This may range from altering something on the window to requesting user input. The client can then call system.sfc.setVariable() to write back to the chart if necessary, allowing the chart to continue if it was waiting for the input. So that is how you can connect SFCs and client instances together.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
