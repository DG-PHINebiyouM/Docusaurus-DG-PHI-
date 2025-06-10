---
sidebar_position: 12
---

# Vision Components And Property Bindings - Video Transcripts

This page contains transcripts from the vision-components-and-property-bindings video course.

## Overview

These transcripts are automatically generated from the [vision-components-and-property-bindings Course](https://inductiveuniversity.com/courses/ignition/vision-components-and-property-bindings/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 3:19:19 PM
Source URL: https://inductiveuniversity.com/courses/ignition/vision-components-and-property-bindings/8.1
:::

## Video Transcripts

### 1. Creating Components Video at Inductive University

:::tip Video Link
Watch the video: [Creating Components Video at Inductive University](https://inductiveuniversity.com/videos/creating-components/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at creating components in the vision module. In front of me, I have my designer, and I have a blank window where we're going to create some components. Now, the right-hand side of the screen has the component palette. From here, we list all of the well, most of the components that are available to the vision module. There are some additional things like the symbol factory library, drawing tools, and a couple of other things that we'll cover in later videos. The component palette itself does have the components categorized by different categories, which we can collapse and expand individually. We can collapse all of them with these buttons at the top. We can also expand all of them and even search for individual ones. So I could, for example, search for a label component. And there, we see a couple of suggestions based off of the name of the component and the description, or the text inside of the description, of the component. Now to create a component, we simply drag and drop into our container. And you'll notice that there is this little yellow border that's going around the container, here.

**[01:04]** [01:04]
                                    That's just highlighting which container the component is going to be created inside of. Since we only have one, there's really only one option. So I'll let go of my mouse button, and it will create the component right there. Now we can also, if we head over to the component palette, if I click and release on top of the component over here, we get this little crosshair icon. But more importantly, if we head back to one of our containers, if I click and drag, I would create a component of whatever size we resize this little box to when I let go, it creates a component. Now we can always resize components later on, too. So I could, with this component selected, just kind of drag these arrows and resize it or reposition it. And that does actually go for the first component, as well. Now, if you want it to be very peculiar about how big your components are, you can always right click on one, go down to size and position, and from this little menu here, you can specify where in the container the component should be positioned, and its dimension. So maybe I want this to be 100 by 100 pixels.

**[02:03]** [02:03]
                                    I'll go ahead and click okay. And it will be resized, just like that. Now, some of these components are also designed to be interacted with, from the client. So if we head back to the palette over here, I clear out the search. I do see that we have this little slider component. So I'm going to drag this onto our window here and drop it. Now this slider component does have a little dial in it. So, if you wanted to, from the designer, test out a screen, test out some of the interactions you can. In the designer, we have a preview mode that you can use to interact with your screens. There's a little play button in the toolbar here, but you can also just go up to project and preview mode, which toggles the preview mode. Now, while we're in preview mode, I can't create new components. You'll notice that these are all grayed out, but we can interact with components on our screen, as if we were in a client. So this little dial I can actually grab and drag now changing the position of it. And when I'm done, I can exit preview mode by pressing the button up here. Of course, you can always go back to the project menu, and leave preview mode from here.

**[03:07]** [03:07]
                                    Once we're back in design mode, we can again, reposition components and create new ones. Now, there's another way to create components. That's actually from the Tag browser. So I have some tags here that were created by the quick start workflow when you first install Ignition, but you can always just create your own tags, if you need to. From the Tag browser, if we find a tag, so I have this little ramp zero tag here, I can actually select it and then press and hold my mouse button, drag it onto a container and let go, and it'll give me this little pop-up here. And from here, I can basically select what type of component I want to create. And the suggestions that are populated here are based on the data type of the tag we dragged over. So this is a floating point tag. So it's giving me numeric options. So if I were to select the LED Display, it will create that component for us. Now, technically it does something a little extra. It created what's called a tag binding. So the value that's on the display is synchronized with that one tag.

**[04:03]** [04:03]
                                    We're not really at a point to really examine bindings further. We'll talk about those in lessons later on, but the point is, that you can drag tags from the Tag browser and create components. Now in earlier lessons, we did see that the designer has a concept of a communication mode. Basically, the designer is able to read values from things like tags and databases. It's also able to write back to those things, but only if you allow it to do so. So for example, if I were to get a different tag here, I do have some writeable tags that basically just, they're not automatically updating all the time. If I were to grab a, how about this, a writeable double one out to drag that onto my window here. And I create a controlled opponent. Let's do a numeric text field. So it's like a text field we can basically type into from the preview mode and the client. Now, if we were to go into preview mode, this is in fact a live preview, right? So tag bindings are components that are set to interact with other things can do so from preview mode. Normally.

**[05:04]** [05:04]
                                    Now, if I were to try to type something in here, there is a fail safe. So I'll hit the enter key here and we do get a little error. And that's because the communication mode for my designer, which we talked about earlier, is in read only mode. So it was when I was typing into this component, the component was trying to send a write request to that tag there. So something to keep in mind with that preview is it's technically a live preview. So if you're you're in a production environment, you probably want to keep things in read only mode, but just for the purposes of example today, we'll go ahead and switch over to read-write. We'll try that again, hit enter, and we can see that it went ahead and wrote directly to the tag, but again, that kind of touches upon tag bindings. We'll play around those a little bit later. Just for now, I'll go ahead and go back to read only mode and I'll exit preview mode, but that's really it. Creating components is fairly simplistic. I guess the last thing I would touch upon here is we should probably talk about containers, real quick. So there is in fact a container component, which I will drag into my root container here.

**[06:09]** [06:09]
                                    And when you try to move the container component around, you'll notice that just does kind of some selection mechanism. So that's because while you can drag other components in there. So I could grab a label component and I can drag that into this container, here. Right? So as far as the hierarchy is concerned, we have the root container. We have our newly added container, and then we added a label inside of there. So you can have components that are kind of nested like that. If you needed to reposition the container, you want to select the, the container, which you can do by just clicking on where it is in the window here. Or if that's kind of tricky, you can always just come up to the project browser and select it. And then from here, you can actually hold the alt key down, and then left click and drag, and then you can reposition the container and move it wherever you want. So again, the idea of where you place the component more appropriately in which container you place the component is very important, when you're starting to build these screens.

</details>

---

### 2. Component Properties Video at Inductive University

:::tip Video Link
Watch the video: [Component Properties Video at Inductive University](https://inductiveuniversity.com/videos/component-properties/8.1)
:::

<details>
<summary>View Transcript (9 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at component properties. So we saw how to create components in the last video, but let's talk about those properties. Now in the lower left hand corner, by default, you'll find the vision property editor. And to make this a little bit easier to see for this one lesson, I'm actually going to drag on the title bar, and I'm actually going to just dock it over here just so we can kinda see what's going on. Now the way this thing works is that whatever component you have selected, so if I were to select my slider here, you can see that the property editor updated with properties for the slider. If I were to click on my LED display here, we now have properties for the LED display. So the contents of this panel is determined by whatever is selected. From this panel here, if we go and start changing the value on some of these properties, we can actually see those changes impacted on the component. So in the last video, we played around with the dial on the slider here by going into preview mode. But we could also, from the designer, simply type in a new value for the dial.

**[01:02]** [01:02]
                                    So I could set this to 25, hit enter, and we can see that the slider's now at a value of 25. We can also change the maximum value, right? So instead of 100, it can be set to 200. And it has a whole bunch of tick marks as a result. Now, this isn't the entirety of properties on the component. Towards the top of the property editor here, the right most icon is actually a dropdown, which is a filter. If you click on the dropdown there, you can see a list of options. If I select all, it will then show all properties on whatever component I have selected. So we're not filtering or hiding any properties anymore. And there's a bunch of additional properties. For example, under behavior, there is an inverted property. So if we check that, then we can see that the dial goes in the opposite direction. Now beyond your numeric and Boolean properties, there are more complex properties. For example, if I were to select this label here, say I wanted to feel in the background on this label. So we could check the fill background setting here, and then pick a background color.

**[02:05]** [02:05]
                                    So for the background color property, we can click this little dropdown over here, which allows us to pick from a selection of colors. We can also click the little icon just to the right of the dropdown, which gives us a color wheel of sorts. So we can actually go and pick individual colors, play with the alpha, or use any of these other tabs up here to select a color. Now in the property editor here, you'll notice that there is a little chain link icon on the right of most of these properties. That opens up the binding window. We talked about bindings a little bit in the last lesson when we created this LED display. We won't talk about these too much. Again, we'll look at bindings in a later lesson, but that's what the little chain link icon does. Now, sometimes, a value for a property is a little bit harder for us to give you a way to edit or show. So what we do in those cases is we usually give you an additional tool or piece of UI that allows you to do that. For example, if I were to create a list component, you can drag that onto our window here.

**[03:04]** [03:04]
                                    So the point of the list is it basically just lists off a bunch of things. It's almost like a single column table. So how do I add data in here? Well, for the list component under the data and category properties, there's a data property which is a data set type. Because of this notation, I know it's a dataset type property. On the right hand side here, not the binding icon, but there's this little table with a magnifying glass. If I click on that, that opens up this data set editor where basically, I can configure what the contents of this more complex property has. So in this case, I could add a new column to this dataset. We give it a name. Select a data type. Click add column. And then I can add a couple of rows with this top button here. So let's just do 1, 2, 3, and then I'll click okay. And we got three rows, one column. And we now see it on our component. So again, if there's a more complex property, there's usually an editor or a way to manipulate that.

**[04:06]** [04:06]
                                    Now you can also create your own properties on components. So if we go back to this label, it doesn't really matter which one we go to. If I were to right click on a component, I can go down to customizers, and there is this custom properties option. So if I select that, it gives me another little window here. And this basically allows you to define a property that will sit on the selected component and be available in the property editor. So if I hit the plus button here to add a new row, this will be foo. And for the type, we can actually double click on type. It's a dropdown. You can pick whatever type you'll want. You can type in a description if you want and hit enter. I'll click okay here. And we can see that it created foo as a custom property on this component. We can also see in the tool tip there that it's showing the description. So what's the point of creating custom property? Why would you wanna do this? Well, as you saw, the other properties directly impact what the component does. Whereas, custom properties don't. They're just an additional property you create that allows you to store information for later on.

**[05:06]** [05:06]
                                    So you could store some number over here, or later on, you can add a binding, or add a script that changes the value of this and then reference it later from other components. So it's just kind of a way for you to store information on a component. Now, a common practice is actually, on the root container, add custom properties here. So I could, same rules, I could actually right click on the root container in the window over here. Go down to customizers and custom properties. And yeah, you can actually add custom properties to the root container. Later on, when we start talking about create our own navigation, this approach of adding custom properties to the root container is not only common, but we actually have some additional tools that allow you to pass information from the old window to the new window by using a custom property. But I'll just close that for now. And we should also talk a little bit about customizers. So I'm going to grab a multi-state button here. I'm going to drag that into our container.

**[06:02]** [06:02]
                                    So this button here, if you haven't it seen before, it's just multiple buttons. Each button has a numerical state associated with it. Now you can actually add more buttons to it, but instead of showing that as a property in the property editor here, if you right click on the components, you go down to customizers, there will be, in some cases, for some components, usually the more complex components, there's a dedicated customizer for them. So if we select this, it gives us an additional window, which basically allows us to make modifications to this one component. So you won't find this on like the label or the slider. You'll only find it on this one component. But then components like tables, for example, or charts, will have their own customizers too. So from here, we can add a whole bunch of extra buttons with different states. We could change the text and the font on all the buttons and play around it there too. So the main takeaway is that some components do have additional customizers that you can find by right clicking. Now lastly, since we're talking about component properties, as a newer user, you might not know what a lot of these properties do.

**[07:04]** [07:04]
                                    So you can actually hover over the name of a component. We saw that there's a tool tip. There's also a little description area. That's the third button from the left at the top of the property editor there. So if you toggle that, it has a little panel towards the bottom of it. And then if you left click on the name of a property, it'll show you some information, basically the tool tip for that component. So really useful. It saves you a step of having to go to the user manual though. The user manual usually has additional examples and information, but it's kind of just a nice little reminder or understanding of what exactly a property does, especially if you haven't seen it before. I should also mention too, especially for components that are a little bit larger in scope, when you have all these, when you have the filter set to all, you can actually sort these alphabetically. Sometimes, if you're looking for a certain thing, it's a little bit easier to just sort them alphabetically, instead of by category. And then kinda look through and just kinda skim by name. Now that's gonna about wrap up this video. I'm just kind of examining component properties here. Let's go ahead and I'm gonna reset this back to categorize. I'm gonna turn off the description here. We can leave the filter.

**[08:01]** [08:01]
                                    And I will move this back to the lower left hand corner just because the other videos, we do typically leave the property editor in the lower left hand corner. But leave it wherever you'd like.

</details>

---

### 3. HTML in Vision Video at Inductive University

:::tip Video Link
Watch the video: [HTML in Vision Video at Inductive University](https://inductiveuniversity.com/videos/html-in-vision/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will explore Ignitions ability to integrate HTML code into your vision projects. One of the more common places where people like to use HTML, is in a labels text. With my label selected, I'm gonna head over to its text property and I'll click on this little pencil so I can edit it. Now I can begin typing my HTML code directly into my labels text to modify its appearance. I'm gonna say something like here is some text. And if I wanted, for example, the word some to be underlined, all I have to do is put in my underline tag like so. And if I wanted the word text to be bolded, I could just put it in my bolded tag like so. And now when I click out of my text area, I will notice that my labels text became here is some text, but more importantly, the word sum is underlined and the word text is bolded.

**[01:07]** [01:07]
                                    Another common place where people like to put HTML code is in a buttons text property. Now with my button selected, I'm gonna head over to its text property, and I'll click on the little pencil again to modify it. Here, I'm gonna type in HTML once more. And I'm going to say save to disk. But maybe I want the word disk to be in its own line and I want this to be multi line text. All I have to do is add a line break. And maybe I want this whole text to be centered. All I have to do is type in center and add my center tag. And now when I click out of my text area, I notice that my text is centered and I notice the line break was respected as well. One interesting place where HTML can also be used is in a components mouse over text. A components mouse over text is the text that appears when you hover your mouse over that specific component.

**[02:05]** [02:05]
                                    With my label selected here, I'm gonna head over to it's mouse over text property, and I'll click on the little pencil here to configure it. Here I'm going to say HTML. Here are some instructions. Here I'm going to start an unordered list where my first list item is going to be step one. Then I'm going to add another list item that is going to be. Then finally, I'll end my unordered list. And now when I click out of my text area, I can put my designer in preview mode. And when I hover my mouse over my label, I see my nicely formatted mouse over text.

**[03:07]** [03:07]
                                    I can also put HTML code on a specific cell on a table. Here on this table, I'm gonna head over to its data property, which is essentially the property that drives the underlying data of the table. I'm going to click on the data set button here, and I can directly double click on one of these cells and I can start typing HTML into here as well. If I wanted, for example, the word row to be bolded, all I have to do is add my bold tag, like so. Now you'll notice that the word row becomes bolded here in the data set editor. And if I hit, okay, the word row becomes bolded directly on the table component as well. So in conclusion, you can use HTML pretty much anywhere in your vision project to modify the appearance of its text.

</details>

---

### 4. Introduction to Bindings Video at Inductive University

:::tip Video Link
Watch the video: [Introduction to Bindings Video at Inductive University](https://inductiveuniversity.com/videos/introduction-to-bindings/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will explore the overlays associated with a binding on a vision component. I'm currently in my designer with the vision window open. I can drag and drop a single tag or many tags onto my vision window like so. Now I am given the option to choose whether I want to display or control my tags value. Each selection will give you different component options to either display or control your selected tags. You can also select from any templates with parameters configure to be dropped targets. I will go ahead and select LED displays. You will notice that my LED displays automatically bound to tags that were dragged in. I know that because if I select one of my LED displays, I can hit to its properties and you see that some of them are bolded and have a chain link icon next to them telling you that these properties are bound.

**[01:09]** [01:09]
                                    I'm going to go ahead and check the value property binding configuration by clicking on the chain link icon here. And I can immediately tell that it is directly bound to the tag Ramp 1, which was one of the items I dragged initially. A binding in this case, allows us to link the value in the LED display to a tag. Now I binding is not limited to tags. You could also link or bind this LED displays value to anything from a SQL query to a component property, or even an expression. Now in the event that my tags were to go missing or become bad quality, we will see an overlay over the component, down to our tag. I will simply go ahead and rename one of the tags here. I will immediately see an overlay telling me that my tag was not found. These overlays serve as a good indication about the overall state of your bindings.

**[02:06]** [02:06]
                                    For a full list of all the possible overlays and what they mean, you can visit the quality codes and overlays page in our user manual. If I wanted to, I could disable overlays directly in my bindings configuration. All I have to do is click on this overlay opt-out setting. Once this is done, the overlay for this specific binding will be disabled and no longer appear, even if there was an issue with my binding.

</details>

---

### 5. Selecting Components Video at Inductive University

:::tip Video Link
Watch the video: [Selecting Components Video at Inductive University](https://inductiveuniversity.com/videos/selecting-components/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate several ways to select one or more components on a Vision window. In order to configure any component in Ignition, we must first select it, and there are several ways to do that. In this Vision window, we have a handful of random components from the Component Palette. The first way to select a component is by simply clicking on it, as we see here. When we do this, we can then modify its properties as well as change its size and position, but only for the one component selected. We can also select multiple components by selecting an initial component, then holding down the Ctrl key as we click on multiple additional components. When we do this, we can move and resize the selected components, as well as update parameters that are common to all components selected. For example, let's toggle this Visible setting. Notice how when we select multiple components, the Property Editor has filtered to only the subset of properties that are common to all selected components.

**[01:06]** [01:06]
                                    And while it might appear that we are selecting all components within a select region, a simple movement action shows that this is not the case. By the way, notice if we happen to have started out with a Ctrl key pressed, notice how the selection appearance differs. This is because we have added the root container to our selection. To de-select the Root container, we can click one more time in the open area, or alternately de-select the Root container in the Project Browser. Another way of selecting multiple components is by drawing a box. If we click anywhere on the window, hold the mouse down, and start drawing a box left and up, we can select multiple components. We only need to go over the edge of any component to select it, the yellow outline tells us it's been selected. The same thing is true if we go to the left and down. Again, we only need to touch the edge of any component to select it if dragging to the left, either up or down. By contrast, if we instead drag from left to right, going either up or down, now we need to select the entire component.

**[02:23]** [02:23]
                                    So dragging right to left, we select by merely touching a component, whereas dragging left to right, we must select the entire component. The final way to select a component is by drawing a path on the window. If we hold down Alt, then click and drag our mouse, we begin drawing a visible path. Any components on that path will be selected, as we see here. So as we've seen, there are multiple ways to select Ignition components. Single clicking on individual components, Ctrl clicking to select multiple components, dragging right to left and only needing to touch components, dragging left to right and fully enclosing components, and Alt drawing a path over desired components. So there are lots of ways to select, depending on your needs and design preferences.

</details>

---

### 6. Manipulating Components Video at Inductive University

:::tip Video Link
Watch the video: [Manipulating Components Video at Inductive University](https://inductiveuniversity.com/videos/manipulating-components/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate several different ways of manipulating components in Ignition. By manipulating, we mean performing any of the following actions, moving resizing and rotating components. We'll start out with this Vision window populated with several components. First, there are several ways of moving a single component. Let's select this cylindrical tank by clicking on it. Then by holding our mouse down, we can drag it and change its position on the screen. We can also use the arrow keys to move a component. While the tank is still selected. We can change its position by one pixel at a time by using the up, down, left, and right arrow keys, or we can change its position by 10 pixels at a time by holding down the Alt key and using the same up, down, left, and right arrow keys. We can also move around multiple components at a time as one group. Let's use Ctrl click to select both the cylindrical tank and the Meter components.

**[01:10]** [01:10]
                                    Then as before, we can move both components together by dragging them. Rr move them one pixel at a time by using the up, down, left, and right arrow keys. Or move them 10 pixels at a time by holding down the Alt key, then using the up, down, left, and right arrow keys. Next, let's see how we can resize a single component. If we select the Tank component, it now shows resize handles around the perimeter. We can change to the width by clicking and dragging the left or right handles, or height by clicking and dragging the top or bottom handles, or we can change the width and height proportionally at the same time by clicking and dragging one of the corner handles. And similar to before, we can also use the arrow keys to resize a component. If we hold down the Shift key, we change the height by one pixel by using the up or down arrow keys, or the width by one pixel by using the left or right arrow keys.

**[02:19]** [02:19]
                                    Or if we hold down the Shift and Alt keys, we change the height by 10 pixels by using the up or down arrow keys, or the width by 10 pixels by using the left or the right arrow keys. And similar to before, we can also resize multiple components at the same time. We will Ctrl click to select both the Tank and the Meter components. We can change the widths by clicking and dragging the left or right handles, or the heights by clicking and dragging the top or bottom handles, or the width and height proportionally by clicking and dragging one of the corner handles. And like before, we can use the arrow keys to resize multiple components at a time.

**[03:10]** [03:10]
                                    If we hold down the Shift key, we change the heights by one pixel by using the up or down arrow keys, or the widths by one pixel by using the left or right arrow keys. Or if we hold down both the Shift and the Alt keys, we change the height by 10 pixels by using the up or down arrow keys, or the width by 10 pixels by using the left or right arrow keys. Another way to achieve precise placement and sizing is by right clicking on a component and selecting its Size & Position dialog. Here we are prompted to enter the position and/or the size in pixel units. Two things to note about the position. It represents the component's upper left corner, and it's measured from the 0,0 origin at the upper left corner of the window, then X and Y are positive downward and to the right.

**[04:06]** [04:06]
                                    Let's say we want our tanks upper left corner to be placed exactly at the 50 50 coordinates, and we want it to have a width of 200 and a height of 300 pixels. When we click OK, we see that our tank is placed exactly as specified, and sized accordingly. Another useful manipulation of components involves a aligning them in a stack or a row. For this, we can use the alignment tool icons we have at the top. We'll start by selecting the 4 buttons we have. Then some things we can do are: align the left edges, align the right edges, or align the center lines. Another useful thing we can do is align stack and normalize. This allows us to specify the padding between components, so we'll use maybe 10 pixels. We see that the buttons are now neatly aligned with uniform widths and the specified padding between them. Furthermore, we can also move these buttons as one grouping, or resize them as we've seen previously. Finally, certain components such as drawing tool SVG shapes or Symbol Factory graphics can be rotated. For example, if we click once on this Motor graphic, we can move it or resize it as we've already seen. But if we click a second time, we add rotate handles around the perimeter, and then we can drag one and rotate the motor, as we see here.

**[05:42]** [05:42]
                                    We see the same thing for this ellipse shape. One click allows us to move it or resize it. The second click enables us to rotate it on the window. So now we've seen several ways of manipulating Vision components, such as moving resizing, and rotating.

</details>

---

### 7. Component Grouping Video at Inductive University

:::tip Video Link
Watch the video: [Component Grouping Video at Inductive University](https://inductiveuniversity.com/videos/component-grouping/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll discuss the concept of grouping components on a Vision window. Grouping components so they can be moved around as one logical unit is a common action when you're developing windows in Ignition. So we'll see how that is done. Let's start out by dragging a cylindrical tank and a linear scale component onto our empty Vision window. Right now, they're two separate components. We can move them around, resize them, or configure them independently of one another. Of course, we can select both of them together, and then we can move them around as one unit. But, then we need to remember to select them both every time. Suppose we decide that some components really do need to belong together in some logical grouping or arrangement. For example, let's position this linear scale directly aside the cylindrical tank like so. We'd like to maintain this pairing at all times. What we can do is select both components, then right click and select Group, which groups these components into one logical unit. Over in our Project Browser, now we see a new group container added, and both components are in it.

**[01:20]** [01:20]
                                    Now we can move around both components together as one logical unit. Next, suppose we need to configure one of the components. There are two ways to select one specific component inside such a grouping. The first way is to head over to the Project Browser and simply select one of the grouped components. The second way is to click on the group to select it. Then double click to get a red outline. Now we can go inside the group and select one of the individual components. Either way, now we can configure the selected component down in the Property Editor. If we want to, we can reverse the grouping by simply clicking on our component group to select it, then right clicking Ungroup. Our components are now separate again, and we see in the Project Browser that the added hierarchy level is removed.

**[02:10]** [02:10]
                                    Both components are back under the root container again. So of course we can include as many components in a group as we wish. Let's drag a few more components onto the screen. How about a label and a numeric label, and maybe an LED display, like so. Then once again, we can select them all, right click and select group. And we see again that they can be moved around as one grouping. And the new group appears in the Project Browser. Next, let's consider resizing behavior. If we select a group and resize it, we see that all the contained components are going to resize at a relative rate, just like any other component on the pallette would. But maybe this isn't what we want, and also we can add more components to the group. But what we'd have to do is go back into the group by double clicking, then resize a few components to make room for some more.

**[03:12]** [03:12]
                                    Then we can drag in some more new components from the palette into our group. So instead, we could convert this group into a container. We'll simply select the group, right click and select Convert to Container. Now the resizing behavior changes. If we resize the outer container, now nothing inside of it will resize. So a group and a container are both the same concept. All the components inside are grouped together as one logical unit, but a container doesn't resize the components inside it like a group does, which is ideal if we want to add more components into it. For example, now we could directly drag a Meter component into our container. A couple fine points about a container. First, when we converted our group to a container, the name of the Project Browser didn't change, but it's easy enough to rename it to something more useful by right clicking on it and giving it a name such as New Container. And we'll expand it back out like so. Second, if we right click on the container itself, we notice there is no converse operation to convert back into a group, but this can be done by cutting components out of the container, pasting them elsewhere, and then regrouping them. And third, to move a container, we first need to hold down the Alt key, then click and drag to move the entire container. Otherwise, if you don't hold down Alt first, one of two things will happen.

**[04:46]** [04:46]
                                    If you're in an open area, you'll see something like this, which means that nothing is happening, or else if you're on a component, it will select and move that instead of the entire container as intended. So a group and a container are both similar concepts. Each one takes multiple components and groups them together as one logical unit, separate from other components, that can be manipulated as one entity. The main difference is in their resizing behavior: a group resizes its internal components, whereas a container only resizes its outer boundary.

</details>

---

### 8. Component Layout Video at Inductive University

:::tip Video Link
Watch the video: [Component Layout Video at Inductive University](https://inductiveuniversity.com/videos/component-layout/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll discuss the concept of component layout for Vision clients, and demonstrate the two types of layout along with possible variations upon them. Layout is the idea that a component's size and position, which are relative to their parent container size, can be dynamic on a client display. This allows for HMI displays which resize gracefully and responsibly, for any screen resolution. Your Designer display might be for a specific resolution, such as 1024 by 768, but you can open a client with pretty much any resolution. As that client gets smaller or larger, tts components will automatically resize based upon the layout chosen for them. Here we see a Vision window in the Designer with an assortment of components displayed. Its starting size is 800 by 600 pixels. Next here is its Vision client having the same starting size. As we grow or shrink this client window, the components on it resize accordingly. This layout behavior is specified on a by component basis back in the Designer, and if we select multiple components, we can specify the layout for all of them together.

**[01:12]** [01:12]
                                    Let's see how this layout is specified. We access the layout settings by right clicking on any component and selecting Layout. There are two layout modes: Relative and Anchored, and each one also has its own set of suboptions. The default layout settings for new components can be specified in the Project Properties, in the Vision > Design options. R elative is the default layout mode. It's based on the ratio of the component size to the window size, and it's going to maintain that ratio at all times. So when the client window gets larger or smaller, the components will resize at the same rate. There's also a setting here to maintain the aspect ratio of the component. So for example, if a component is 200 by 150 pixels or a 4:3 ratio, it will maintain that 4:3 ratio so it never looks skewed. For starters, let's look at proportional resizing.

**[02:10]** [02:10]
                                    All these screen components are set to Relative layout and Maintain Aspect Ratio. So when we enlarge this client window, all the components resize accordingly. The same thing happens when we shrink the client, the components shrink accordingly, but only to a certain point. When we cross a certain client size threshold, like so, the resizing ends and scroll bars appear instead. This client threshold, the minimum size, is specified by settings in the Project Properties Vision > User Interface. Next, if we change the client width only and not the height, the aspect ratio of the components isn't changing, so the sizes are maintained and the components remain centered on the client window. Back in the Designer component layout settings, there are settings to center or constrain to the left or right edges if maintaining the aspect ratio. Next, let's consider padding or dead space in a layout.

**[03:15]** [03:15]
                                    Since relative layout is based upon a ratio of component size to the size of the entire window, if a window is large, there may be a fair amount of padding around components, and this gets taken into account in the overall layout. Typically, we'd want to make sure that such padding is removed, so let's resize the window borders and the Designer so that they're right up against the components. We've now changed the ratio of component space to window space. When we save this new layout, we see that the client components have suddenly gotten bigger to fill their space. However, the aspect ratio of each component is still maintained. Finally, let's see what happens when we relax the Maintain Aspect Ratio constraint. We'll first select all of the components in the Designer, then right click and select Layout. We'll still keep the Relative layout, but this time unselect the Maintain Aspect Ratio, which now allows the components to skew a little bit. Once we save those settings, now, if we resize our client window, the components still resize to fill the available space, but now the aspect ratio is not maintained and the components will appear to skew or distort at times.

**[04:35]** [04:35]
                                    The other primary layout style for any component is Anchored. Since we still have all components selected, we can right click, select Layout, and this time we'll select Anchored. This type of layout allows us to anchor or fix a component to various sides of a window: the top and bottom left or right or centered vertically or horizontally. So for starters, let's say we want to anchor all components to the top left of the client window. We want to keep the same fixed distance from those edges at all times.

**[05:05]** [05:05]
                                    So we will click the left and the top anchors, actually the west and the north ones, and click OK. When we save our window changes, then resize our client window, now we see all components stay in their upper left fixed positions on the window with no resizing. Let's change the anchoring to be upper right instead. So we've still got all the components selected. We'll right click choose Layout > Anchored. Then this time we'll click the top and the right anchors, OK, then save to commit the changes. And now when we resize our client, we'll see the components anchored at fixed positions from the top and the right sides. again, with no change in size. Now suppose we anchor a component to two opposite sides, which will cause it to to resize in that dimension. So for example, let's select this tank component alone and change its layout to anchor it on both the left and right sides, as well as retaining the top anchor. As we resize the client window again, since the tank is now anchored to both left and right sides, it still remains in the top left corner of the components, but its width changes to fill the available space as the window size changes.

**[06:29]** [06:29]
                                    It just changes in width, the height remains constant. Finally, let's anchor the tank component to all four sides of the client window. Now it will change in both width and height when the window is changed. So we will right click and select Layout once more, then add the bottom anchor, click OK, and save. Now, when we resize the client window, it's trying to maintain those fixed distances to all four sides, and therefore the tank height and width changes in response. So in summary, there are two different layout managers you can use for components: Relative and Anchored Layout.

**[07:06]** [07:06]
                                    Layout allows a component size and placement to be dynamic when a client window is resized. Relative layout is good for situations when you want to scale uniformly without distortion: For example, for a P&ID, or Piping and Instrumentation Diagram, while Anchored layout is good when you want components to fill all available space, for example, forms or tables on screens,

</details>

---

### 9. Images (PNG, JPG, GIF) Video at Inductive University

:::tip Video Link
Watch the video: [Images (PNG, JPG, GIF) Video at Inductive University](https://inductiveuniversity.com/videos/images-png-jpg-gif/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    While it is recommended that you use SVGs as  they will scale better, you may find yourself in a situation where you  don't have an SVG file for the image you'd like to add to your project  in this lesson. I'll demonstrate how to add a PNG, JPEG  or GIF to a Vision window. I'm currently looking at a Vision window in my designer in order to  add an image. The first thing I'll do is add an image component. I'll drag and drop from the component palette straight to my window here. Underneath the data properties for this component. There's an  Image Path property. You can click the folder search icon  to open up the image management tool and find your image  to automatically fill in the image path. I have the option to choose from some built-in icons in  this folder here, or I can upload one of my own images. I have  an image saved as a PNG on my local machine  that I'd like to upload. So I'll click the upload button select  my image and click open. Now my  image appears in the image management tool and I can double click it  to add its path to my image component.

**[01:05]** [01:05]
                                    This same process can be done for PNGs JPEGs or  GIFs.

</details>

---

### 10. Scalable Vector Graphics Video at Inductive University

:::tip Video Link
Watch the video: [Scalable Vector Graphics Video at Inductive University](https://inductiveuniversity.com/videos/scalable-vector-graphics/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    When importing images into Ignition it's recommended to  import svgs or scalable vector graphics. The  reason being as the name suggests they're scalable. In this lesson, I'll show you how to import an SVG into  a Vision project and how to easily manipulate them to  fit your needs. To easily import an SVG into your project you can  use this Symbol Factory module, which is a library of high quality  industrial vector graphics that come included with  the Vision and Perspective modules. Symbol Factory can be accessed via the tools menu in  your designer. I'll find a motor symbol that I like and I can simply drag it onto my  window to use it. If I click and drag the arrows around the image, you can see that  it resizes gracefully and continues to look crisp after  doing so unlike a JPEG or PNG that will  start to look pixelated. This is beneficial if you have multiple screen sizes, as you can ensure that  your image quality will be retained no matter where it's viewed. When you import an SVG, you can see in the project browser  that it's actually a group of components.

**[01:06]** [01:06]
                                    If I expand the group we can take a look at the components that  make it up. I can choose to color individual parts of the image or  even animate them if I want. If I ungroup the motor I can move or remove pieces as well. If you can't find the graphic that you need in Symbol Factory, you can  import your own SVGs that are created outside of ignition. You  can even take AutoCAD drawings and Export them as  SVGs using certain utility programs. I have an SVG on my local machine that I can import  by simply dragging it onto my window and you can see that  I can manipulate it in the same way. Using SVGs in Ignition is very simple and they can be colored  animated or scaled to your desired size.

</details>

---

### 11. Adding Icons to Labels and Buttons Video at Inductive University

:::tip Video Link
Watch the video: [Adding Icons to Labels and Buttons Video at Inductive University](https://inductiveuniversity.com/videos/adding-icons-to-labels-and-buttons/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to add icons to labels and  buttons within your Vision project. Now, one option is to add an image component and position  that to the side of your label or button, but there's another  option that doesn't require adding additional components to your window. If we take a look at the properties on this label, I have here we  can see that there's an Image Path property that allows us to add  an icon straight to the label. I'll click the folder search  icon and go to Built-in, Icons, 16,  and I'll select the help icon. You can also modify the text alignment on this label and this  will decide where the text is relative to the icon. If I switch the Horizontal Text Position property to  left and that will move the text to the left of the icon. If we look at the button's properties, there's the same Image  Path property that we can use here. I'll click the folder search icon go to Built-in, Icons,  16, and this time  I'll pick the stop icon.

**[01:03]** [01:03]
                                    As you can see adding icons to your labels and buttons in  a vision window is a simple way to spruce up your windows and add visual  cues for your users.

</details>

---

### 12. Color SVG Dynamically Video at Inductive University

:::tip Video Link
Watch the video: [Color SVG Dynamically Video at Inductive University](https://inductiveuniversity.com/videos/color-svg-dynamically/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to dynamically color part  of an SVG in Vision to give a visual indication to users  of a changed state. I'll start by pulling in an SVG  from the Symbol Factory. I'll demonstrate this with a motor. So I'll find one I like from the motor  section and go ahead and drag it into my window. To review, SVGs are made up of several individual components.  I can double click the motor and drill into  the components within each group. Once I select the path that I want to color I can go down to the Property Editor  and create a binding on the Fill Paint property. You could  set up any type of binding here, but for my example, I have  an OPC tag that will represent the state of my motor. I'll select  a tag binding and I can pick my tag. You'll notice that there's a number to color translation area below the  tag picker and this can be used to pick which tag values correspond  to which colors. I can add or remove cases here and also select a fallback color. For value of 0 I'll pick red.

**[01:08]** [01:08]
                                    Or one, I'll pick green. And then I'll add another row for a value of 2 and I'll select yellow and  then make it blink orange. I'll hit OK here and then I can start changing the value of my tag. You can see my tag in the tag browser here. It currently  has a value of zero in the motor is red. If I change it  to 1 the color will change to green finally if  I change it to two it will blink yellow and orange.

</details>

---

### 13. Tint SVG Video at Inductive University

:::tip Video Link
Watch the video: [Tint SVG Video at Inductive University](https://inductiveuniversity.com/videos/tint-svg/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    SVGs are made up of several paths and coloring  an individual path is fairly straightforward. However, if  we want to color the entire image setting up bindings on  each of these paths could end up being pretty time-consuming. In this lesson, I'll demonstrate an alternative method that we  can refer to as tinting the SVG. I'll start with an SVG of a motor that I've pulled in  from the symbol Factory, but you can do this with any SVG you  might be using in your project. Instead of drilling into the paths, I'm  going to select my entire SVG and then I'm going to  duplicate it. If I drag it to the side, you can see that there are  in fact two Motors. I'll put this back on top of the other one because we'll  need them to be directly on top of each other to proceed. The next thing I'll do is flatten the top SVG and I'll  do that by going to the menu bar expanding Shape and I  can click Union. Now I'm left with a flattened outline of the motor SVG with  the original still underneath. I'm going to remove the outline by going to the property editor  finding the Stroke Paint property and I'll click  the pen icon.

**[01:06]** [01:06]
                                    I'll click the first square here from the top which sets  No Paint on the outline. Now I can set up a tag binding on the Fill Paint property. I'll click The binding icon select my OPC tag,  and now I'm ready to set up the colors. I'll make  it so that when the value is zero the color is red. I'll pick my color but then I'll click the paint can  which will open up the color wheel this bar with the a next  to it is the alpha value and allows me to change the transparency.  I'll set this to 35 and we  can see the fill color is now semi-transparent. I'll repeat this process with tag values of 1 and 2 a value  of 1 will show the color green and I'll change the transparency. For value of 2 the color will be yellow and it'll blink orange and  I'll change the transparency for both those colors as  well. Now the top motor SVG acts as a sort of  tint that I can place on top of the previous motor to change the color  of the entire thing.

**[02:10]** [02:10]
                                    I'll change the value of my tag and you can see the color changing. One useful tip is to select your tint and your base SVG and  right-click and group them together. Now you can move both of them together as one whole piece. As you can see creating an SVG tint is a nice way to  color an entire SVG without having to create bindings on  the fill paint properties for each path.

</details>

---

### 14. Tank Cutaway Video at Inductive University

:::tip Video Link
Watch the video: [Tank Cutaway Video at Inductive University](https://inductiveuniversity.com/videos/tank-cutaway/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to use a tank cutaway in  your Vision project to make your level indicators more visually appealing. I'll start by pulling in a tank SVG from the Symbol Factory. After I find a tank that I like I'll find a tank  cutaway. If you're not seeing any on your system, try clicking the  basic radio button and the bottom left corner of Symbol Factory. I'll find one. I like and drag it onto my window. Next all in the tank cutaway on top of my tank and  I'll make sure it fits. From here. I'll first click the tank and then hold the  control button on the keyboard and click the tank cutaway. Once they're selected I'll go to the designer menu bar and click shape  and then difference. This will subtract the tank cutaway shape from the tank and it's  why it's important to pick them in the right order. Now my tank has a transparent cut out in the middle and I can add  a level indicator to my window.

**[01:05]** [01:05]
                                    I'll drag one in from the component palette and I'll resize it so that it fits  on my tank. I'll quickly bind the value property to my OPC tag. Now I'll move the level indicator so that it's behind the tank. In order to do this, I'll make sure the level indicator is selected and  click alignment and then move to back. Now we can see it's behind the tank and we can see the tank level  through the cutaway. If you want you can group these components together so that they could be moved  together as one piece. Now I have a tank with a cutaway portion that displays the  level inside.

</details>

---

### 15. Component Animation Video at Inductive University

:::tip Video Link
Watch the video: [Component Animation Video at Inductive University](https://inductiveuniversity.com/videos/component-animation/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to animate a component which is a  useful way to visualize whether a machine is running or not with a quick  glance. For a basic example, I'll start by creating a basic shape with  the drawing tools and vision. Once I click my shape you can see that there are these position properties here  which include the X Y width height and angle. In order to animate something we can bind these to something Dynamic like a  tag or an expression. For example, I have these tags my tag browser that I can bind to  these properties and you'll see that when the tags change the property  values change and the component will move around the screen. Normally, we'd want to animate an SVG. So I'll  pull one in from the simple Factory. I'll look for a fan like this one and I'll drag it  onto my window. We wouldn't expect a tag the represents the angle of our fan  blades. But instead we might expect some sort of tag that tells  us our fan is on like my fan status tag here  in the tag browser.

**[01:07]** [01:07]
                                    So, how are we going to spin these blades when the fan status is  one? I'll do this with a timer component that can be  found towards the bottom of the component palette. I'll drag this onto my  window and this component has a running property that I can bind to  my fan status tag, when the running property is  true. It will increase the value up to the Bound in an  increments by the step by property. So we'll quickly set up these properties for my fan. A shapes angle property is some value from 0 to 360  since there are 360 degrees in a circle. So I'll  set the bound to 360 and I'll make it increment by  let's say 30. Also going to set the delay to 250 milliseconds and  I'll remove the initial delay. Now I only want to animate the blades on this fan. So we'll  have to drill into the SVG until I find that group we can  see it's here. It's called group impeller blades. All I have to do is bind the angle property to the timer's value  property and set the fan status to one. And now I have spinning fan blades.

**[02:07]** [02:07]
                                    If you'd like to see the blades spin a different speeds you can play around  with the delay and step by properties until you find something you like.

</details>

---

### 16. Drawing Tools Overview Video at Inductive University

:::tip Video Link
Watch the video: [Drawing Tools Overview Video at Inductive University](https://inductiveuniversity.com/videos/drawing-tools-overview/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll give a quick introduction to the set of drawing tools available in the Vision Designer These tools allow users to draw their own vector graphics on a window. They're available in a toolbar on the right hand side of the Designer The selection tool is the top most one on the toolbar, and it's active by default until another tool is selected. It allows us to select and manipulate specific components on a window. For example, we can select this label, or the filled rectangle behind it, and move or resize these components as we wish, as well as configure their properties in the Property Editor. The group of tools below the selection tool are the ones which actually draw graphics. The next one is the rectangle tool. Once this tool is selected, we can draw one or more rectangles. By dragging one of the square handles, we can resize those rectangles. By dragging the circle handle at the top right, we can round the corners as desired, and by holding down control, then dragging, we can draw squares.

**[01:17]** [01:17]
                                    Also note that while any one of the tools is still selected, if we want to select or manipulate one or more shapes, we first need to go back and reselect the selection tool. For example, now we can go back and select all the components and clear them off of our window. Next is the circle tool. Once selected, this tool lets us draw one or more ellipses, which we can then resize by dragging one of the handles. And by holding down control and then drawing, we can draw circles. And once again, we will reselect the selection tool first to be able to delete all of the components. Next is the polygon tool, which when selected allows us to draw any kind of polygon we wish. Up in the toolbar are a couple of default settings we can change.

**[02:12]** [02:12]
                                    The default is three corners, but we can increase that by using the dropdown. We can also transform it into a starlike shape, then click and drag one of these inner vertex handles to reconfigure the shape as desired. And once again, we'll select the selection tool first to select any components and delete them from our workspace. Next is the arrow tool, which allows us to draw one or more arrows. Up in the toolbar is a setting to make the arrows single or double-sided. So we can make one of these arrows double-sided, and by dragging the appropriate handle, we can adjust the overall arrow length, the thickness of the arrow body, and the width of the arrowhead alone. And once again, we will reselect the selection tool first to be able to clear our workspace of all components.

**[03:15]** [03:15]
                                    The next drawing tool is the pencil tool. This is used to draw any freehand graphic shape using our mouse alone. So we can draw some random curved line here, or connect it into a closed shape that we can work with. And up in the toolbar, there are some settings for how we can simplify or smooth out our graphic. The final drawing tool is the line tool, which allows us to draw straight lines, perpendicular lines, or curved lines, based on which drawing mode is selected. For example, let's select straight line segments. Then we simply click a series of points to define the line's path or even make it a closed shape.

**[04:08]** [04:08]
                                    Or if we select perpendicular line segments, we can draw strictly horizontal and vertical perpendicular lines. There is also an option for curved line segments, which will be covered in a coming lesson. Finally, following the primary shape or line drawing tools, there are three more options to modify existing shapes: the path tool, which adds handles and tangent lines, so we can modify an existing shape; the gradient tool, which lets us manipulate the color gradient of some existing shape; and the eyedropper tool, which lets us transfer fill and stroke colors between existing components. These three will each be covered in more detail in coming lessons. So with the drawing tools, there are multiple ways to create any needed shapes, lines, or curves for your project.

</details>

---

### 17. Drawing a Line Video at Inductive University

:::tip Video Link
Watch the video: [Drawing a Line Video at Inductive University](https://inductiveuniversity.com/videos/drawing-a-line/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    A common use case of the drawing tools in ignition is to draw a line on your window. To accomplish this, we will use the line tool, which is located on the right hand side of the designer. We can use the line tool by clicking on the designated icon. This will trigger three line variants to appear at the top of your screen. Those are straight line segments, perpendicular line segments, and curved line segments. Let's go ahead and create a simple line. The straight line segments option is applied by default, and we can draw one by clicking anywhere on the window. Letting go of our mouse button, we will simply mouse to our desired segment length and clicking our mouse again will lock in the segment indicated by the green coloring. Finally, we'll complete our line by hitting the enter key. You can also complete a line by double clicking on your end point. We are not limited to simple lines. We can create a line with multiple segments. Let's do this by starting a new line segment, and from here we can see our new red line segment lets us continue and add multiple segments.

**[01:07]** [01:07]
                                    Additionally, we can snap a line segment to any 15 degree increment. Let's click on the window again to see this and hold our control key. If I mouse around, we'll see our next segment is snapping to the nearest angle. We can also edit the properties of the line on our window. To do this, we first need to click on the selection tool. Clicking on the selection tool will allow us to change the line size using the arrow handles and move it around our window. Located on the left hand side, we will find additional properties in the property editor of this line. For example, let's alter the stroke style property. By clicking on the pencil icon, we can increase its width to five pixels and transform our solid line to a dash line. To recap, we learned how to use the line tool to draw simple lines, lines with multiple segments and how to edit their properties.

</details>

---

### 18. Fill and Stroke Video at Inductive University

:::tip Video Link
Watch the video: [Fill and Stroke Video at Inductive University](https://inductiveuniversity.com/videos/fill-and-stroke/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    All components created with the drawing tools will have fill and stroke properties we can configure. To demonstrate this, I have already created a rectangle component on my window, and it is currently selected by my selection tool, which will give us access to the fill and stroke properties. These properties are available in our vision property editor on the left hand side of the designer. Let's begin working with the fill paint property, by clicking on the pencil icon. A pop-up menu appears allowing us to choose the background color for the rectangle. We can use the wheel to set our background color to a dark green by dragging the marker on the outer circle and setting it to our desired color, and we can confirm the shade by clicking within the triangle. Additionally, we have access to change the background color with the palette tab or by specifying RGB and HSL values. Let's close the popup and take a look at the stroke style property, which can be used to alter the border of the rectangle. First, we will click on the pencil icon and increase its width to 40 pixels.

**[01:03]** [01:03]
                                    Next, let's change our solid border to a dash pattern. The cap style will change the appearance of each dash. The join style changes the appearance of a dash wrapping around the corner. And finally, the miter limit lets us control the sharp angle join. Let's click off the popup and review the stroke paint property. Again, we'll click on the pencil icon. The stroke paint property will update the color of our rectangles border and it's configured in the same way as the fill paint property. Let's go back to our wheel and choose a blue coloring for our border. Now we know how to access and use stroke and fill properties available for our components made with the drawing tools.

</details>

---

### 19. Gradients Video at Inductive University

:::tip Video Link
Watch the video: [Gradients Video at Inductive University](https://inductiveuniversity.com/videos/gradients/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    As we saw in the previous lesson, shapes created with the drawing tools have a fill paint property we can configure. In today's lesson, we will learn how to apply a gradient to our shapes fill. To demonstrate this, I have created a rectangle component on my window. Again, we will access the fill paint property by clicking on the pencil icon in the property editor panel. We are familiar with this popup that allows us to apply a color of our choice or no fill at all. In addition to those options the third tab on the popup menu allows us to configure a linear gradient. A gradient is defined as a range of position dependent colors. We can see our rectangle now has a gradient ranging from a white to a darker gray. This gradient is being configured by the gradient bar within the pop-up menu. We have two available color stops or positions on our range. We can change the color of each by clicking on the stop and choosing a color. Additionally, we can add more stops to our range by right clicking on the gradient bar and choosing the add stop option. You can see this stop applied a white color to the middle of our range.

**[01:05]** [01:05]
                                    However, we still have the option to change this stops color as well. In addition to changing the gradient from the fill paint property, we also have access to the gradient tool located on the right hand side of the designer. If I click on the gradient tool, you will see the rectangle now has two handles along a line. By clicking and dragging one of the handles, we can manipulate the position of the gradient. Let's go back to the fill paint property to view some additional configurations. If we right click on the gradient bar, we can change the pattern of the gradient. The reflect pattern will show colors reflected and drawn in reverse. The repeat pattern will repeat the pattern forever. Let's move on to the fourth tab on the popup menu and apply a radial gradient. The rectangle now has a gradient that has colors emanating from a point, creating an ellipse of each hue. Radial gradients still have access to the gradient tool as well, and we can manipulate the gradients position. Finally, let's review the final tab on the popup to apply a pattern paint to the rectangle. On this tab, we can choose from many patterns to fill our rectangle and change both the foreground and background colors.

**[02:05]** [02:05]
                                    To recap this lesson, we have learned how to configure a shapes fill with a linear and radial gradient or a specific pattern.

</details>

---

### 20. Eyedropper Tool Video at Inductive University

:::tip Video Link
Watch the video: [Eyedropper Tool Video at Inductive University](https://inductiveuniversity.com/videos/eyedropper-tool/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll learn how to use the Eyedropper Tool in Ignition. It provides an easy way to transfer colors for the foreground and background, or stroke and fill, from one Vision component to another. The Eyedropper Tool is found on the Drawing Tools palette in the Designer. For a first scenario, let's say we have these top two filled shapes, a yellow circle and a blue rectangle. Let's create one more shape, a new triangle. We'll make sure to complete that operation by clicking on the Selection Tool once more, then we can reposition and resize this triangle however we wish. Now, let's say we want to change the triangle's fill color to the yellow of the circle, and its stroke or border color to the blue of the rectangle. We could do this in the Property Editor, but we prefer to have the Eyedropper Tool do this for us. What we can do instead is, first we'll click to select the component we want to alter, in this case the triangle.

**[01:09]** [01:09]
                                    Next, we'll head over to our Drawing Tools palette and click the Eyedropper Tool to enable it. Then we'll move our arrow cursor over the component we'd like to transfer a color from. In this case, it's the yellow circle, and in the bottom border we see the hex value of the current color displayed. Then when we click the circle, its fill color is transferred to the selected triangle. One important thing to note here is that as long as the Eyedropper Tool remains selected, further clicks will continue to transfer new colors. For example, if we click on the rectangle or even the window background, those colors get transferred instead. Once we have the yellow background we want, we'll complete the action by reselecting the Selection Tool. Then with the triangle still selected, let's also update its stroke color. Once again, we'll click the Eyedropper Tool to enable it, place our arrow cursor over the rectangle, the component we want to transfer the color from, and this time do a right click to transfer the blue color to the triangle's border, and then complete the Eyedropper action by clicking on the Selection Tool.

**[02:22]** [02:22]
                                    Since it's a bit hard to see like this, let's head over to our Property Editor and widen the triangle's stroke style a bit, maybe to 2.5 or so. Now we can see the blue border clearly. Then for a second scenario, we have a button at lower left with a light blue background and red labeling text. Suppose we create a new button, and we'll put it alongside this existing one, and we'll make it roughly the same size. Let's say we want to transfer the colors from this existing button over to this new one. With a new button selected, let's once again do the following.

**[03:05]** [03:05]
                                    We'll click the Eyedropper Tool to enable it. Then we'll place our arrow cursor over the light blue fill portion of the original button. We can confirm this by looking at the currently specified color at the bottom. Then we can click to transfer the background color. Then we'll move the cursor over the text portion of the original button. Make sure the currently specified color is indeed the red that we want, then if we right click, we transfer the red text color over to the new button component. And then of course, we'll complete the action by clicking on the Selection Tool once more. So in this lesson, we have shown how to use the Eyedropper Tool to easily transfer colors between components depending on the click used. Use the left click to transfer, fill or background colors and use a right click to transfer stroke or foreground colors.

</details>

---

### 21. Shape Geometry Video at Inductive University

:::tip Video Link
Watch the video: [Shape Geometry Video at Inductive University](https://inductiveuniversity.com/videos/shape-geometry/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll show how to use the Ignition Drawing Tools to create more complex composite shapes out of basic shapes like rectangles, circles, and triangles, using shape geometry. Let's say that we want to make a simple graphic element representing a pump. We can do this by combining simple shapes such as the circle, triangle, and rectangle we see here. We'll start with a circle at the bottom, and layer the triangle and the rectangle on top of it. We'll align and resize these until they're just so, till we see the outline of a simple pump graphic. Then we'll select all of our components. Now if we head up to the Shape menu, we see the five available shape geometries. We'll select the first one, the Union. A Union combines all selected shapes into one composite shape. So now we see one graphic that has the general appearance of a pump.

**[01:02]** [01:02]
                                    We can now move this around, or resize this, as one element, and we can change its fill color again as one element. So that's the behavior of a Union. By contrast, a Difference is the opposite of a Union, a Difference subtracts one shape from another. To demonstrate this, let's create a rectangle shape. Then we'll place an arrow shape on top of it. If we select the rectangle shape first, then select the arrow second using the Ctrl key, then select Shape, Difference. We have cut out the arrow portion and effectively created a cutout or a stencil. The arrow color we see now is that of the window background since it's been cut out. To see this even more clearly, we can move our new shape over the earlier colored pump graphic. Next is the Intersection shape geometry.

**[02:05]** [02:05]
                                    An Intersection gives us the region that is common to two overlapping shapes. To demonstrate, let's create a circle, and then create a triangle. Then overlap the two like so, and then if we select both shapes, then select Shape Intersection, we get the smaller shape that is the intersection, the common area between both original shapes. By contrast, an Exclusion shape geometry is the opposite of an Intersection. An Exclusion yields the region of two overlapping shapes that's outside of their intersection, the area that belongs to one original shape OR to the other. To demonstrate, let's once again create a circle, and then create another triangle. Then we'll overlap the two as before, and select both shapes.

**[03:07]** [03:07]
                                    This time, if we select Shape Exclusion, we get an overall shape that excludes the intersection between the two shapes. We can see that there is a missing area, by once again moving the new shape over the colored pump graphic. Finally, we have the Division shape geometry, which divides the first selected shape along the boundary of the second selected shape. To better demonstrate that, this time let's create two rectangles, and two circles side by side with them. Then we'll overlap them like so. This time there is an ordering dependence to the resulting Division shapes. So for the upper one, we'll select the rectangle first and then the circle. Then select Shape Division, and for the lower one, we'll select the circle first, then the rectangle.

**[04:09]** [04:09]
                                    Then again, select Shape Division. Then for the upper division, the rectangle is split up along the circle's boundary, and for the lower division, the circle is split up along the rectangle's boundary. So now we've seen the five available shape geometries, which allow us to create more complicated shapes out of simpler basic shapes. A Union with which we created a composite pump graphic from more basic shapes; a Difference, which is like a cutout or a stencil; an Intersection; and its opposite, an Exclusion; and a Division, which splits one shape along the boundaries of another shape.

</details>

---

### 22. Editing Shape Paths Video at Inductive University

:::tip Video Link
Watch the video: [Editing Shape Paths Video at Inductive University](https://inductiveuniversity.com/videos/editing-shape-paths/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Once we've created shapes using the Drawing Tools, we can then edit and reshape them. In this lesson, we'll learn how to alter the appearance of existing shapes using Ignition's Path Tool. The Path Tool is found in the Drawing Tools palette at the right side of the Designer window. Let's demonstrate use of the Path Tool with these existing three simple shapes: a five pointed star, a straight lined closed polygon, and this curved-sided tooth shape. Let's start with a star shape. We'll select the shape, then click on the Path Tool. Now that it's enabled, we see a small graphics handle appear on each of the star's vertices. Now we can simply click on any one of these handles, and drag it to a new position to reshape the star into some other shape. We'll do this for a couple other ones. Or if we'd like precise placement of any vertices, we can select its handle, then head up to the toolbar and specify exact (x,y) coordinates for it.

**[01:12]** [01:12]
                                    We can similarly manipulate the polygon shape. Once again, we'll select the shape. Then click on the Path Tool to enable it, and again, the graphics handles appear on the vertices. Then as before, we can select any of the handles and drag them to reshape the polygon. Or to do precise vertex placement, we can select one of the handles and then specify exact (x,y) coordinates for it up in the toolbar. We can also alter shapes created from curved line segments. Let's next consider this tooth shaped object by selecting it, then clicking on the Path Tool. This time we see not only graphics handles, but also two additional handles for each one, which represent tangents on each side of the center handle. Now, we can not only change points on the curves, we can also change the curvatures, on both sides of those points.

**[02:08]** [02:08]
                                    We can do all kinds of curve shaping or flattening. We can turn this into any kind of curve shape we wish. Finally, for our straight line shapes, we can also alter their shape by adding or removing vertices. To demonstrate, let's once again select the closed polygon, then select the Path Tool. If we select one graphic handle, we can flatten the shape by heading up to our toolbar and selecting the Remove Point icon. Or if we select two adjacent handles, we can augment the shape by selecting the Add Point icon. Now, an additional vertex is added to the shape, which we can move around as before, by dragging its handle. So by using the Path Tool, we can reconfigure existing Drawing Tools shapes by moving around the graphics handles of their vertices. This lets us reshape vertices, add or remove vertices, or change the curvature of curved segments.

</details>

---

### 23. Bezier Curves Video at Inductive University

:::tip Video Link
Watch the video: [Bezier Curves Video at Inductive University](https://inductiveuniversity.com/videos/bezier-curves/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to create Bezier curves using the Line Tool. When working with the Line Tool, we aren't limited to straight line segments. We can also draw curved shapes. Bezier curves, sometimes called quadratic curves, let us draw smooth continuous shapes using a series of control points. To demonstrate, let's begin by heading over to our Drawing Tools palette on the right and selecting the Line Tool. Then we'll move up to our toolbar where we see three available options: straight lines, perpendicular lines, and curved line segments. We'll select the curved lines option. Let's start by creating a simple curve. We will click on our Designer window and trace out a few points on some curved path, perhaps 1, 2, 3, 4, 5, and 6.

**[01:04]** [01:04]
                                    Then as noted in the bottom message toolbar, we'll make sure to press enter to terminate path creation, and then also click to re-enable the Pointer Tool. Now we have this simple sinusoid shape. If we then click on the Path Tool, we see graphics handles for each point we clicked, along with tangent handles, one for each endpoint, and two for each interior point. We can now change some of the point placements and adjust the shape curvatures as we wish. Next, let's draw a bit more elaborate closed shape, perhaps a tooth shaped object. Once again, we'll click the Line Tool, go up to the top menu, and click the curved lines option if it's not already selected, and then start drawing our graphical object by placing a series of points. Since we created a closed shape, this time we don't need to click enter at the end, but we do need to re-enable the Selection Tool to terminate the points placement.

**[02:17]** [02:17]
                                    We now have this curved tooth shape. When we click on the Path Tool again, we see a graphics handle for each point on the curve we placed, along with tangent line handles on both sides. As before, we can smooth or alter the shape by moving around some of its points, or by changing the curvatures about those points. So now, we've seen how to create curved shapes using the Line Tool and its Bezier Curves option, and how to shape them using the Path Tool.

</details>

---

### 24. Tag Binding Video at Inductive University

:::tip Video Link
Watch the video: [Tag Binding Video at Inductive University](https://inductiveuniversity.com/videos/tag-binding/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to link vision components to tags in my system. In order to do this, I'll use tag bindings. If you look at my tag browser, you can see that I already have some tags and I'd like to display one in my project. For example, Randomdouble1. First, I'll add a cylindrical tank component to my vision window. The vision property editor is where I can manage all the different properties that control the appearance and behavior of the component. I can bind any one of these properties to one of these tags in the tag browser. If I want to bind a tag to the value property, I can click this little chain link icon to the right of the property. I'll bind this to a tag, and I can choose from any of the tags in my system. So I'll drill into my simulator folder, into random, and here's my Randomdouble1 tag. I'll select it and then hit okay. Now the value property is bound to the tag, and any time the tag changes, the property changes and the component updates.

**[01:02]** [01:02]
                                    You can set up tag bindings on any property of any component. So you can set them up on values of LED displays meters, or you can bind to text properties on buttons and labels as well, whatever you want. Once a tag binding is set up, there are a couple visual indicators to let you know. First, the property name will be bolded in the property editor, and if you look in the project browser, you'll see that there's a tag icon next to the component. It's useful to know that tag bindings work by having a specific tag path that points to your selected tag. This tag path is just a string that contains the tag provider, any number of folders the tag may be nested in, and then the name of the tag. If you were to change any part of this tag path, your binding will no longer work. If I rename this tag real quick, you'll see an overlay appear on the component because the binding broke. If I run diagnostics on the component, it lets me know that the tag at the given path can't be found. Then if I change the name back, the binding will start working again, and the overlay disappears.

**[02:06]** [02:06]
                                    Because of this it's best to start setting up bindings after your tag structure has been set up.

</details>

---

### 25. Tag Binding – Drag and Drop Video at Inductive University

:::tip Video Link
Watch the video: [Tag Binding – Drag and Drop Video at Inductive University](https://inductiveuniversity.com/videos/tag-binding-drag-and-drop/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to easily set up tag bindings in vision by dragging and dropping. I already have some simulated tags in my tag browser that I'd like to add to my window here. I could create a component, find the property I want the bind to, click the binding icon, find my tag, and set up the binding that way. But that can be a lot of clicks. A much faster way to do it is to simply click and drag the tag and drop it directly onto my window. This will automatically create a component that's bound to this tag, so I can choose from the available display options and pick something like an LED display. And you can see that it's already bound to my tag and it updates whenever the tag updates. I can keep doing this and quickly set up a window that displays multiple tag values. You can also choose the control options to allow end users to interact with the tags. I'll drag this integer tag onto the window, and I can choose a slider that users can move to change the tag value. Depending on the tag type, the available components might change.

**[01:04]** [01:04]
                                    So if I drag a boolean onto the window, I'll see some different options and I can choose something like a checkbox. If you have any templates set up in your project, you can also drag and drop to quickly instantiate a custom template, which can have multiple components grouped together. Another thing that you can do is create a component from the component palette and drag and drop a tag directly onto the component to automatically create the binding. And finally, if you want some more control, you can add a component to your window and then drag a tag onto a specific property. And you can do this to any property you choose. These are the several different methods that you can use to drag and drop tags onto windows to quickly set up vision projects.

</details>

---

### 26. Tag Binding – Bidirectional Video at Inductive University

:::tip Video Link
Watch the video: [Tag Binding – Bidirectional Video at Inductive University](https://inductiveuniversity.com/videos/tag-binding-bidirectional/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to set up tag bindings so the values can be written back to tags. When manually setting up a tag binding, the default behavior will be that the property's updated when the tag updates, but not the other way around. In order to make the tag update when the property updates, we need to make the binding bidirectional. If I were to drag and drop one of my tags onto a window and create a control component, the bindings would automatically be set up for me. So I can go into preview mode, click the button, and see the tag value update. If I manually set up a tag binding, let's say on a spinner and change the spinner value, the tag won't update. To understand why, I can go into the binding on the two-state toggle and see that this bidirectional box has been checked. This is what controls whether the operator can write back to a tag.

**[01:05]** [01:05]
                                    I'll go back and open up the spinner binding and check that box, and now if I go in a preview mode and update the spinner, the tag value updates as well. If you notice while the tag write is happening, there are some dashed lines that appear around the component. This is a write pending overlay that lets us know that a tag write is occurring. It's a nice visual indicator that this component is writing to a tag. Again, if you wanna have a tag binding that also writes back to a tag, make sure that the bidirectional box is checked in the binding window.

</details>

---

### 27. Indirect Tag Binding Video at Inductive University

:::tip Video Link
Watch the video: [Indirect Tag Binding Video at Inductive University](https://inductiveuniversity.com/videos/indirect-tag-binding/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to create an indirect tag binding to dynamically build a tag path in the runtime. If you look at my tag browser, you can see that I've already created some tank UDTs and I'd like to display these in my vision project. However, if I were to make a window for each instance, that could be time consuming and repetitive. Because of my current tag structure, the paths of each of these tags are very similar except for minor differences. I'll copy a couple of these paths to show you. Notice, that the only difference between the level tags of Tank 1 and 2 is the number of each tank. So I can take advantage of this and I can use an indirect tag binding to insert a parameter into the bindings tag path and select which tank I wanna view with a control component. I'll demonstrate this with a numeric text field and start with tank 1. Let's say that I wanna display the tank levels, so I'll add a cylindrical tank to display this. I'll add a binding to the tank's value property, and instead of a tag binding, I'll select an indirect tag binding.

**[01:08]** [01:08]
                                    This will allow me to dynamically build a tag path that will resolve in the runtime. I'll start by selecting the tag icon to the right of the tag path field and selecting one of the tank level tags. Once I have an example tag path as my starting point, I can replace any part of this tag path with a parameter. In my case, the tag paths for each of the level_PV tags will only differ by the tank number. So I'll select the number here, delete it, and click the property icon to select a property on the window to substitute into the tag path. I'll find the numeric text field I just added, and then I wanna use the value (integer) property as my parameter. I'll click OK, and then you'll see that there are now some curly braces in the tag path that signify there's a parameter there, and if we look down at the references, we can see that reference 1 is linked to the numeric text field's value. I'll click OK to finish building this binding. Now my tank is showing a value of 30. Since the numeric text field has the number one in it, we should be seeing the level tag of tank 1, so I'll check to confirm, and sure enough, tank 1's, level_PV tag is 30. Now if I set this to two, I should see the value of tank 2's level_PV tag.

**[02:17]** [02:17]
                                    And there we go, It's correctly pointing to tank two. And I can keep changing this and pointing to other tank numbers and continue to see the values that I want. That was a quick and easy way to set up a window that can dynamically point to any of my desired tanks, instead of manually building out a window for each individual tank. You can expand this idea to replace even more parts of the tag path and add as many parameters as you'd like if you wanted to dynamically point to different tags and different folders as well.

</details>

---

### 28. Tag Historian Binding Video at Inductive University

:::tip Video Link
Watch the video: [Tag Historian Binding Video at Inductive University](https://inductiveuniversity.com/videos/tag-historian-binding/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to create a tag history binding in Vision to visualize data from the historian. I have some simulated tags that I've been storing tag history on, and I'd like to display the historical data for these tags on my window. I'll select my Sparkline chart and then I can add a tag history binding to any dataset type properties. I can see that the data property is a dataset as it has multiple rows and columns, and I can also hover over the property name to see the data type. I'll add a binding and then select tag history. I'll drill into my available historical tags and choose my Randomdouble1 tag, and then I can drag that over to the selected historical tags box. Next, I'll need to choose a date range for the data. If I choose a historical date range, I'll need to bind the start and end dates to properties on the window, so I'll switch this to a realtime date range and pull historical data for the most recent 60 seconds. I'll leave the aggregation mode, return format, and sample size properties alone and ignore the advanced properties at this time. If you'd like more information about these properties, we have some videos on tag history, and I'll also provide a link to our user manual page below the video.

**[01:13]** [01:13]
                                    One other setting that I'd like to change is the polling mode. It's currently set to off, so the data isn't set to update. I'll set this to absolute instead and make the sparkline chart update every 30 seconds. With that, I can click OK and close the window. Now I have historian data displayed in my chart. I also have a table on my window, and I'd like to use it to display data for multiple historical tags. I'll select my table and add a tag history binding to the data property. This time, I can click and drag multiple tags over to the selected historical tags box. Just like before, I'll make this pull data from the most recent 60 seconds. I'll leave the aggregation mode, return format, and sample size, and I'll leave polling off and click OK. Now I have both a chart and a text representation of historian data that I can quickly reference from within my Vision project.

</details>

---

### 29. Property Binding Video at Inductive University

:::tip Video Link
Watch the video: [Property Binding Video at Inductive University](https://inductiveuniversity.com/videos/property-binding/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to dynamically update a  vision window with a property binding. A property binding is one of the most important concepts to understand when  designing a project in Vision. I have a cylindrical tank on my window and as you know components  have properties that decide how they look and behave. If I change the value property of the tank, we see that the  appearance of the tank level changes to reflect that property. If we want this property to dynamically update we'll have to set up  a binding. In order to do this, I can click the binding icon that can  be found to the right of each property down here in the property editor. Bindings can be set up to update the value based on  a tag and expression another property on the same window or a  SQL query. Let's say I want to update this value based on another component. I'll close out the window and drag a slider onto the window underneath my  tank. Now we can go back to add a binding to the Tank's value and choose  a property binding.

**[01:03]** [01:03]
                                    I'll find the slider component expand its properties and  I can click the value property. It's important to make sure that you choose a similar data type. Otherwise,  you can run into problems. I'll hit OK and add  the binding. Now that I've added the binding you can see that the name of the properties bolded  and there's a link icon next to it. If you have multiple components with multiple property bindings on  your window a useful tip to visualize these bindings is  to go to the designer's menu bar and click view go to  dependencies and click show all this will connect bound components with a line so you can quickly see what's linked  to what I'll set this back to show none real quick. Now that the binding is set up I can test it by putting  the designer in a preview mode. And when I change the slider value  the tank level changes with it. On top of linking to another component's properties we can set  up property bindings on UDT properties as well. On my root container. I have a custom property for a UDT type called  tank and it has a level property. I'll go back to the binding on the tank and I can expand the  tank UDT and bind to the level PV property.

</details>

---

### 30. Property Binding – Bidirectional Video at Inductive University

:::tip Video Link
Watch the video: [Property Binding – Bidirectional Video at Inductive University](https://inductiveuniversity.com/videos/property-binding-bidirectional/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to bidirectionally bind one  property to another in Vision. I have two components on this window, a numeric text field  and a slider. If I create a binding on the slider's value property and  bind it to the numeric text fields value, the two properties are now linked. So I can change the numeric text field value and then the slider value  changes. However, if I change the slider value, the numeric  text field doesn't change. If I want the binding to also work the other way and change  the source, I need to set it up to be bidirectional. In order to do this, I can open the binding window and in the  bottom left corner, I can check the box that says bidirectional. Now when I change the slider, the numeric text field  also changes. An example application of this could be with UDT property  bindings. For example, I have a tank UDT property that  I've added to the root container of this window.

**[01:04]** [01:04]
                                    If I create a multistate button, I can create a  bidirectional binding on its control value and bind it  to the udt's HOA property. I'll quickly bind the indicator value as well, so the appearance changes. Now if I go into preview mode and click the hand, off, or  auto buttons, the UDT property will change. My UDT property is bidirectionally bound to a UDT  instance, so an operator now has the ability to write back to  a tag through the binding on this button.

</details>

---

### 31. Expression Binding Video at Inductive University

:::tip Video Link
Watch the video: [Expression Binding Video at Inductive University](https://inductiveuniversity.com/videos/expression-binding/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate one of the most powerful kinds of property  bindings, the expression binding. In my Vision project. I have a window with an LED display that's  currently bound to an OPC tag that's pulling in a  temperature value. This tag is currently displaying the temperature in Fahrenheit, but  I want to show the temperature in Celsius. I can accomplish this with an expression binding. I'll open the binding window and you can see that it's currently set up as a  tag binding. Under the property category bindings on the left side of the window.  I'll click expression. Expression bindings use the expression language to calculate and  return a single value. Within the expression binding window I can use the helper buttons  on the right to help build my expression. These two buttons can be used to insert references to  properties or tags. And for example, I can click this button and  select my temperature tag and a reference would  automatically be inserted into the expression with the proper syntax. I can then use the rest of the buttons to massage or manipulate  my values.

**[01:04]** [01:04]
                                    This button with the plus and equal signs will show the  different mathematical, logical, and bitwise operations that I can  use. Finally this button at the bottom will list the expression functions that  are available. I want to convert this tag value to Celsius so I can take the  value that's returned from the tag reference and subtract 32 from  it and then multiply that difference by 5/9 and  this will convert the temperature from Fahrenheit to Celsius. I'll hit OK and you can see that the value will now change  based on the calculations in the binding. I have another window in my project that takes the same idea one step  further. I have an LED display and then these two radio buttons labeled Fahrenheit  and Celsius. I'll open up the binding on my  LED displays value to show the expression function I'm  using. I have the syntax for this function commented out on the first line. If is the name of the function and then there's a set of parentheses after  the name that shows it's a function and this function  takes three parameters.

**[02:04]** [02:04]
                                    First is the condition that it will check next is the value  that will be returned if that condition is true and finally  the value that will be returned if the condition is false. Below this, I've typed out the function, but added a  new line after each parameter to make it more readable. So I'm checking the "Radio Button Fahrenheit" component's "Selected" property.  If that property is true, I display  the temperature in Fahrenheit. If that condition is false, then  the value will be returned after being converted to Celsius. I'll close out of this window and quickly show you the bindings on the selected property  of each radio button and you can see that they check the  other radio button's "Selected" property and then negate that. In other words, if the other component is selected this one will  not be selected and vice versa. When I put the designer into preview mode, you can  see that selecting a radio button unselects the other and converts  the temperature to the corresponding unit all with the  help of expression bindings.

</details>

---

### 32. Expression Binding – Concat Strings Video at Inductive University

:::tip Video Link
Watch the video: [Expression Binding – Concat Strings Video at Inductive University](https://inductiveuniversity.com/videos/expression-binding-concat-strings/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to concatenate two strings in an expression binding. I have a window in my Vision project with two labels that tell the user who they're logged in as. One of them has some hardcoded text and the other is bound to the username tag that's found in the System provider under Client and User. I can drag a new label onto the window and add a binding and accomplish the same thing with only one label. I'll add an expression binding to the text property and I can add the same text "logged in as" with double quotes to denote a string. In order to concatenate this with another string, I'm gonna add a plus sign, and then I wanna pull in the value of that tag. So I'll click the tag button, drill into the tag, and hit okay. A reference to this tag value will automatically be added to the expression. Now I'll hit okay on the binding window. And this label now concatenates the "logged in as" string as well as the result of the username tag value.

</details>

---

### 33. Expression Binding – Format Date Video at Inductive University

:::tip Video Link
Watch the video: [Expression Binding – Format Date Video at Inductive University](https://inductiveuniversity.com/videos/expression-binding-format-date/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to use an expression binding to format a date. I'll drag a label onto my Vision window and I'll create a binding on the text property. I want to not only return a date, but have it formatted a specific way so that it's easy for operators to read. I'll make this binding an expression. I can view the available expression functions by clicking the function button on the right. I'll go to the Date and Time category and then find the function dateFormat. This function will return a date formatted in whatever way I specify. You can see that the function takes two arguments, a date and a pattern. I'll go ahead and click the function and it'll get added to the expression. The first argument is the date that needs to be formatted. I want to display the current time, so I use the now function and return the current time. I'll go into the date and time functions and find it. Now takes one argument and it's the poll rate.

**[01:05]** [01:05]
                                    I'll click the function to add it to my expression. The poll rate argument decides how often the date will be pulled or refreshed. It expects a number of milliseconds. I want this to refresh every second, so I'll put 1000. I have the date argument filled out, so I'll add a comma and move on to the format argument. I already have my format copied in my clipboard so I'll paste it into the expression. I'll add a link to our user manual page if you'd like to reference the date, format table, but I'll quickly explain my format. A capital M signifies the month, and since there's three M's, this is asking for a three letter abbreviation of the month. Next is the day, then the full year. Next we have the hour, which is in an AM/PM 12 hour format. Then we have the minutes, then the seconds, and finally the AM/PM marker. I'll add the closing parenthesis to finish the function and hit okay. Now I have a label on my window that retrieves the current date every second and formats it the way that I want.

</details>

---

### 34. Expression Binding – Date Manipulations Video at Inductive University

:::tip Video Link
Watch the video: [Expression Binding – Date Manipulations Video at Inductive University](https://inductiveuniversity.com/videos/expression-binding-date-manipulations/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to add an expression binding that manipulates a date. I have a Vision window in my project that displays some tag history data in a Power Table. The Power Table is set up with a historical tag history binding where the start and end dates are bound to these two pop-up calendars. If I save the window as it currently is, anytime someone launches a client and opens up this window, the popup calendars will display the currently selected dates. That means that in a couple days, or even in a couple months from now, they'll open up this window and see tag history data for this time period, which will be in the past. I'd like to change this so that the initial timeframe reflects the current date whenever it's opened. To make this dynamic, I'll add an expression binding. I'll start with the calendar for the end date. I want this to load with the current date, so we use the now expression function. Since I want the operator to be able to change this, I don't want it to poll and refresh, so I'm gonna make the poll rate zero so it only loads the first time when the windows opened.

**[01:07]** [01:07]
                                    I'll click okay and then add another expression to the start date calendar. For this one, I want it to load so that the table reflects tag history data for the last 15 minutes. I'll use the date arithmetic expression function. To accomplish this, I'll find the function from the date and time list, and we can see that it takes three parameters. The first will be the date that's being manipulated, so I use the property selector to select the end date. Then the other parameters control how the date is manipulated. The second parameter is the number of units I'm going to manipulate the date by, and the third parameter is a string of what unit that will be. For example, I want the start date to be 15 minutes earlier than the end date, so negative 15 will be the second parameter, and then the third parameter will be minutes in quotes. I'll add my closing parentheses and click okay. Now, whenever this window is opened in the client, the table will automatically show data for the last 15 minutes and can then be modified if necessary. Right now, the start date will update automatically if the end date is changed, but if I didn't want them to be linked, I could change the expression so that the now expression is used instead of the end date reference.

**[02:34]** [02:34]
                                    Now I have a dynamic date selection on my window that I was able to quickly set up with the help of an expression binding.

</details>

---

### 35. Expression Binding – Bit Functions Video at Inductive University

:::tip Video Link
Watch the video: [Expression Binding – Bit Functions Video at Inductive University](https://inductiveuniversity.com/videos/expression-binding-bit-functions/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate the expression language's bit functions by using an expression binding to check the value of a specific bit of a tag. I have this "Writeable Integer 1" tag that is currently set to a value of five. I'm using it as a bit field where each bit represents a different flag that I wanna visualize for operators. First, I'll drag a multi-state indicator onto my window and I'll add a binding to the state property. I'll make this an expression binding and go to the list of functions. There are a couple bit functions available here, such as the binary encoder and binary enumeration functions, but I want to use getBit. This function takes an integer value and a position and returns the value of the bit at that position. In this case, I'll use the value of my "Writeable Integer 1" tag as the number, and I wanna return the value of the first or least significant bit. So I'll pass a position of zero. I'll hit okay to close out of this window and add the binding.

**[01:04]** [01:04]
                                    And you can see that the multi-state indicator is on letting me know that the first bit of my tag is one, or on. If I change the tag value to something like four, which will turn off the first bit, the multi-state indicator now turns off to reflect that.

</details>

---

### 36. Expression Binding – Switch Video at Inductive University

:::tip Video Link
Watch the video: [Expression Binding – Switch Video at Inductive University](https://inductiveuniversity.com/videos/expression-binding-switch/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to translate an integer value into a string using an expression binding with a switch function. I have an integer tag that I'd like to display on my screen, but I want the integer values to be changed to strings that show the state represented by each value. In order to do this, I've set up a label component and I could add a binding to the label's text property. I can use the expression language and find what I'm looking for in the logic section. Now, I could set this up with some nested if statements where each false return contains another if statement. However, the switch expression is much easier to write. This function can have a variable number of arguments. The first argument takes the value we want to check. Then the next set of arguments will be the cases or the different values it could possibly be. Then the final set of arguments will be the return values. I'll copy over a commented version of the syntax that makes it easier for me to fill out.

**[01:05]** [01:05]
                                    I'll also add some new lines to make this more readable and divide those arguments into groups. So for this situation, I want to use my integer tag as the value. Then I know that the numbers 0, 1, 2, and 3 represent some state. So those will be my cases. And then I can add the return values. These are gonna be the strings, and I'll fill them out in the same order that the cases were listed. So if the tag is zero, that means that it's "Off". One means "Running", two means "Manual" and three means "Faulted". Then the function needs one last argument for the default return, and this will be the fallback if none of the other conditions are met. So I'll make this "Unknown".

**[02:07]** [02:07]
                                    Now that my binding is set up, I can change the tag value. This is a quick and easy way to translate integer values into strings using the expression language.

</details>

---

### 37. Expression Binding – Checking Conditions Video at Inductive University

:::tip Video Link
Watch the video: [Expression Binding – Checking Conditions Video at Inductive University](https://inductiveuniversity.com/videos/expression-binding-checking-conditions/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to display a specific graphic on a Vision window depending on a value from a tag. I have a tag named Machine State, and depending on its value, I wanna display one of these switch graphics for off, on, and manual. If the value is zero, I want to show the first one. If it's one, I'll show the second one, and if it's two, I'll show the third one. I can accomplish this by binding the visible property of these switches to a value of the machine state. The first switch, the off switch, will only be shown if the value is zero. So we'll add an expression binding. It will say the value of this tag is equal to zero. If the tag evaluates the zero, then this statement becomes true, and the value of this property will be true. If the tag is something other than zero, then the statement will be false, so the visible property will be false. The expressions on the other switches are gonna look very similar to this, so I'll go ahead and copy it.

**[01:07]** [01:07]
                                    The second switch is the on switch, so it's expression will check if the tag value is equal to one. I'll add an expression to the manual switch so that it checks up the tag is equal to two. Now that the expressions are set up, I want it to look like this is one switch that's turning, so I can select all of these and place them right on top of each other. Now all I need to do is change the value of my tag, and the corresponding switch becomes visible, and now it appears that the switch is changing.

</details>

---

### 38. Named Query Binding Video at Inductive University

:::tip Video Link
Watch the video: [Named Query Binding Video at Inductive University](https://inductiveuniversity.com/videos/named-query-binding/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll show how to set up and use  a named query binding in ignition which allows you to  use one of your pre-configured queries and pass parameters  into it using values from either tags or other  components on the window. Let's see how to set up a  named query binding to some existing named query. Starting  from an empty window will add a simple  table component for our data and then expand  it a bit. And then scrolling up. We'll add  a numeric text field beneath it  for our parameter value next. We'll set up  the needed bindings. We'll select the table then find  its data property and click on The Binding icon in  the property binding dialogue in the SQL  section. We'll set up a new named query binding.  Setting up a new named query is the subject of  another lesson. Assuming our name query already exists, setting  up the desired binding is really simple.  We start by selecting the path to the named  query. I only have one here, so I'll select it.

**[01:06]** [01:06]
                                    This displays our selected query as read-only  along with any needed parameters. Our query  selects all records from the storage table  where the "baynum" parameter equals a  specified value. So next we need a value  or an expression for that parameter. You'll  notice on the right, we have both a property binding icon  and a tag binding icon to bind either  some component property on a window or a  tag value. Since we'll be taking the value from the other  component we added, I'll go ahead and select the value  parameter and open the property binding window.  Then we'll navigate to the numeric text  field and then, to its integer value property, and we'll use  that as our parameter. You'll notice that the full path to that parameter is  added here if we expand this a bit. Finally. I'm going  to leave the polling mode off since any time  I change the parameter it'll automatically re-query the  database with a new parameter value. So I'm just going to  select the OK button to save my changes. Right  now my query is returning no rows into  the table. Though it has auto-populated the  column names. This is because the "where" clause can't find any  records corresponding to a parameter value of  zero. However, if I put the designer into  preview mode and enter say 2 into the numeric text field, now the query  returns all rows with a bay number of  2. And if I enter a a 1 or a 3 like so, changing the  parameter value automatically updates the query  results. So that's about all there is to setting  up a simple named query binding with a parameter.

</details>

---

### 39. DB Browse Binding Video at Inductive University

:::tip Video Link
Watch the video: [DB Browse Binding Video at Inductive University](https://inductiveuniversity.com/videos/db-browse-binding/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate the use of  DB browse binding which is functionally equivalent to SQL  query binding in that you can bring back specified data  from a database. However, DB browse binding  lets you visually select the database info of  interest. You can pick the table you want to pull information from  and you can see the query which gets dynamically generated  this binding type can be really helpful. If you  are trying to learn how to write SQL queries. So starting  with this label component, I can select it's  text property binding and select  the SQL DB browse binding type  this lets us see all Ignition database connections  that exist. Selecting the db_iu database, I can see all tables that exist and I can  select the customers table to preview. What it's data looks like for starters, let's  display one specific table value back in  our label. How about this first name in  row 1, Matteo. If I select that  DB element, you can see that the DB browse  binding created the needed query for us select first  name from customers where customer_id  equals one in the  first row. We'll go ahead and press OK and we  see that Matteo is displayed on our label.

**[01:27]** [01:27]
                                    Next, let's do likewise for a table. This time  we'll select the table, go to its data property binding once again select the DB browse binding type The db_iu database and the customers  table again here. I can select one or  more values that I want to bring back and notice that  in all cases. The auto-created query  is updated accordingly. However notice  that any data selection is limited to  one particular row or DB record, I  can't select multiple rows of data. This is because of  this key column field here, which is like a  filter on one specific customer ID. If we  expand the customer's table, we see this little  key icon on the customer_id to  remove this as a key column. We simply select the  customer ID field then press the icon with  a key and tiny slash to remove  the key icon since now we have no key columns.

**[02:30]** [02:30]
                                    Now, we can retrieve multiple records for  multiple columns of data. So suppose we  want to return all customers the first name the  last name and the email address. We can simply select all records and notice that  the needed query is auto-generated as always: select  first name, last name, email from  customers. If we then press OK we  see that all the specified data is  returned to our table. DB browse binding also  allows us to do ordering of data.

**[03:02]** [03:02]
                                    Let's select the table once more then  select its data binding. And right now we have three fields selected  but let's say now we want to sort by first  name A to Z. We'll select the first name  then on the right. We have this sort icon where  we can sort off ascending, descending, and no  sort at all. So note that the generated query  is updated each time to reflect  our selection. We'll click this one more time to sort  ascending A to Z. Now, we  can also select the first name, last name,  and email columns again. Click OK  and we see the same data as before  only this time sorted A to Z  on the first name. So, wrapping up, it's quite easy  to use the DB browse binding type to visually  pick and choose data to return from database  tables as well as dynamically create the needed  SQL queries.

</details>

---

### 40. DB Browse Binding - Dynamic Filters Video at Inductive University

:::tip Video Link
Watch the video: [DB Browse Binding - Dynamic Filters Video at Inductive University](https://inductiveuniversity.com/videos/db-browse-binding-dynamic-filters/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to apply dynamic  filtering to the results returned by a DB  Browse Binding. To recap the prior lesson, we  use DB Browse Binding to return all 40  records for first name, last name, and  email into this table. The data was sorted A  to Z on first name that was no filtering of  the data done. We achieved this data retrieval by selecting the  table clicking on its data binding  and selecting the DB Browse Binding here.  We selected the first name, last name, and email for  display. The DB browse binding type also allows  us to do filtering of data. Whereby we can  add one or more key columns to search for particular records  meeting some criteria. In this case, we're going  to make use of this store_id column where the values  are either one or two. We have customers in store  one and customers in store two. We're going to make use of  this data back on our Designer view. We've added  a drop-down list to our view and in Preview Mode, we can see that its options are  going to be store one and store two. Now, behind  the scenes, of course.

**[01:15]** [01:15]
                                    If we go to the data, we'll see that  the customer ID values of one or two are what  will actually use in the query. So let's return to  our table's DB Browse  Binding. Here we'll select the store ID  and click on this little key icon. Now we see the store ID added as  a key column with a specified value for filtering  data. We can change the value to something  else and we see that the select query is  updated accordingly. But remember we still want to return the  first name, last name, and email. So we will reselect  those three columns and see  that the query is updated accordingly where once  again returning the first name, last name, and  email for a specified store ID value. So  finally rather than hard coding a value like  this we prefer to set up a binding between this  key column back to the drop-downs selected  value on the screen this way the drop-down  value gets used in the query making it  dynamic. Note that if we wanted to we could use multiple selection  criteria in our query bound to  multiple screen components. So we'll click on  this property binding icon, navigate down  to the drop-down component. Then its Selected Value property and click  OK and OK again for the  DB Browse Binding. Once we do that, we see a subset  of 23 records returned for store  one and then if we go to Preview Mode and select  store two we see the other 17 rows out of the original 40  records. So to recap this lesson we've seen  how to add some dynamic filtering on a DB Browse  Binding to a database table.

</details>

---

### 41. SQL Query Binding Video at Inductive University

:::tip Video Link
Watch the video: [SQL Query Binding Video at Inductive University](https://inductiveuniversity.com/videos/sql-query-binding/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate the use of a simple  SQL query binding. This is a polling binding  type that runs a SQL query against any database connections  configured in the ignition Gateway with it.  We can bind any property to a SQL query to  retrieve data from a database. So here I  have an empty table and I can select  its data property binding and click  on the SQL query binding type to open  up this query window. Now, you do need to  know the SQL language in order to use this binding type.  Otherwise, you can do a DB browse binding  to help you visually interactively build the  needed SQL query. But instead we'll use this field to enter our query. I've got a simple example query written in this text  editor, which I will copy/paste into  this window. So we're going to select the first name  last name and email from our customers  table and order it by first name in ascending  A to Z order on the right side notice that  we have icons to bring in any component property  value or any tag value making this  query potentially dynamic though we won't  use those for this simple exercise beneath the  query editor we can specify which database connection  to use if this is left blank Ignition will  use the default database connection set for  this project and that property is found up here  in the Project Properties under the Project menu. We'll  instead set a database connection directly. So we'll  specify the db_iu connection.

**[01:44]** [01:44]
                                    Finally beneath that we can set the polling mode,  which is how often we want this query to be run. We're  going to look at the Relative mode in another lesson. So  for now we're going to leave this set to  off. Once the query is set up as desired we  can press OK and see the specified  data return from the database into the table. So  those have been the basic steps needed to set up  a simple SQL query binding to a database table.

</details>

---

### 42. SQL Query Binding - Polling Video at Inductive University

:::tip Video Link
Watch the video: [SQL Query Binding - Polling Video at Inductive University](https://inductiveuniversity.com/videos/sql-query-binding-polling/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at polling modes  for SQL query binding. A polling mode dictates how  often the underlying SQL query is going to  execute. Let's consider this very simple example demonstrating  polling. We have a label and we'll bind its Text property  to an SQL query. We'll replace  this template query with a very simple one to  select the current time. So, select current_timestamp like so. We'll also specify the database  connection to use rather than relying on  the project default. So in our case we'll select db_iu. Polling modes exist for all database binding types.  So for named query and DB browse  binding types also as well as for  SQL query. There are three polling mode types; off,  relative, and absolute. Off means the query will run only  once when the window is opened.

**[01:07]** [01:07]
                                    Relative means the query will pull at a  project's base rate, which is five seconds by default. But you  can also adjust that polling rate by adding or subtracting  some fixed number of seconds to that base  rate. An absolute means you can  specify any polling rate be it 5, 10, 30,  seconds, whatever you wish. Let's first look  at polling mode off, which is going to run one time only  if we select off and click OK  we see the current date and time  returned. It's now six minutes and seven seconds, but  it is not updating. It only runs once if  we close this window in the Designer. And then reopen it from the  Project Browser. We see that it's now six minutes  and 33 seconds it ran again  when the window was reopened, but it is not updating beyond  that next. Let's look at relative polling mode. Which will update? At the Project's base rate which is five seconds by default  if we select the relative mode and click  OK.

**[02:13]** [02:13]
                                    We now see the date update every five seconds. It just turned to 10 seconds and in a moment. It's going  to be 15 seconds. And so on we can see that it's pulling every  five seconds as expected. Where would we change that base rate if we wanted to? We can go up to the Designer menu to Project. Project Properties Vision Timing and change the polling base rate, which  is in milliseconds. So here 5,000 is  the default five-second base rate. So the nice thing  about the relative polling mode is that you can change that rate  in one place for all queries using the  relative polling rate. The last option will take a look at is the  absolute polling mode where we can  specify the rate to be anything we want.

**[03:09]** [03:09]
                                    So if we select absolute then specify  a rate of one second. Then click OK we can see that the  query returns an updated label value every one  second. One important polling consideration to note if we have lots of  such polling queries. Let's say we have a hundred  clients open that have the same window open at the same  time and they're pulling it. Let's say every one  second. We're going to have a hundred queries hitting our  database every second. So be really cautious about  all the polling queries we put in there. Although there  are times when we do want that screen to update automatically from  values in the database. All right  that wraps up our demonstration of the three database polling  modes off relative and absolute.

</details>

---

### 43. SQL Query Binding - Dynamic Filters Video at Inductive University

:::tip Video Link
Watch the video: [SQL Query Binding - Dynamic Filters Video at Inductive University](https://inductiveuniversity.com/videos/sql-query-binding-dynamic-filters/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to dynamically  filter data that's been returned into a table from  a database. In a prior lesson we showed how to use  a SQL query binding to bring back data from a database onto  a table. If we select this table and then  scroll down to its data property binding  we see that it's bound to a SQL query which returns  first name last name and email from a  customer's table. All such records are returned since this  query has no where clause, but it's also possible to   make this query Dynamic, whereby we can bring in  some external search patterns from screen components or even  as tag values to filter for particular records. So  back in our table, let's say we want  the user to be able to search for a last  name We'll add a text field component above the  table make it a little bit bigger like so where the  user can specify some search criterion, then we'll  incorporate this value into our query to make  it Dynamic. So if we reselect our table and And click on its data binding to return to its  backend SQL query. Let's add one line to  filter the return database records. After the from  customers we'll add where last name like and then we'll add this wild card search  pattern placeholder.

**[01:28]** [01:28]
                                    Like so. Within single quotes. Then right in  the middle of that search pattern placeholder, we will  insert the value of the text field using the  property value icon here at the top. Right we can  navigate down to the text field and expand  it and select its text property. Once  we click OK we can see that our query is  now Dynamic and now it relies on a search pattern path  provided from the screen down near  the bottom. We'll leave the polling mode set to off which  means it will only run once but the special thing about polling  off is if the text field value ever  changes the query will run again, but only once so  to test our changes, let's go  to preview mode, you know the top and by  entering various search patterns such as AR or ER or even some specific last name we can see the search returns.

**[02:25]** [02:25]
                                    Just those last names containing that pattern. By  the way note also that the searches are case  insensitive. Finally if we want to see all the records again.  We can just search on an empty string. So  summarizing this lesson. We've shown how to  make a SQL query binding Dynamic by adding a where  clause which uses a parameter binding back to some  screen component for a filtering pattern.

</details>

---

### 44. SQL Query Binding – Scalar Query and Fallback Video at Inductive University

:::tip Video Link
Watch the video: [SQL Query Binding – Scalar Query and Fallback Video at Inductive University](https://inductiveuniversity.com/videos/sql-query-binding-scalar-query-and-fallback/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll show how to set up a safe  default or fallback value for SQL query bindings  where there would otherwise be no result returned. You can bind  any component property to a SQL query in ignition,  but it's important that your query returns an appropriate  value based on the data type of the property that you're  binding to. For example, if you're binding a label's text  property your query needs to return a single  string. If you're binding a numeric text field's value property your query needs to return some single  numerical value. Let's look at a simple database table  using the database query browser to do some  examples. We've selected all data from our recipes  table and we have a recipe name which  is text and two numerical parameters SP1 and  SP2 for a total of three records.  So going back to our designer. Let's say  that on our label.

**[01:01]** [01:01]
                                    We want to bind its text property to a  SQL query which will bring back a single  string value. So we'll replace this simple query with  one that reads select name from recipes where ID equals 1. Of course, we'll need to specify our  database connection which for us will be  db_iu and we'll leave the polling mode  is off. So it will run only once finally there's  also a fallback value here which can have an  important role if your query does not return any result you  can enable this parameter and specify some  safe default to return as opposed to  Simply erroring out. In our example query. We know  that there's a record with ID equal one. So the  query will return a value and so there's really no  need to make use of the fallback value. When we press  Okay, we see that recipe 1 was returned  to the label as the name of the recipe with ID  equal one. Now, let's consider an example where the query doesn't  return a result. Let's select the numeric text  field.

**[02:09]** [02:09]
                                    Then select its value double binding. And finally a new SQL query. We need a  query which returns a single floating Point result. So  let's do this. select sp1 from recipes where ID equals 10. Obviously that  record with ID equal 10 does not exist in the database.  So no result will be returned and we  expect some sort of error. Once more we will specify the  database connection as db_iu leaving  the polling mode off. And for now, we will  leave the fallback value disabled when we click ok, we see that our query returns an error  message about no rows returned since there is  no 10th record and our component is displayed with  an error overlay. It's important that we either notify the  operator that something's wrong as we've done here or provide  some fallback value.

**[03:11]** [03:11]
                                    So let's return to the value binding once again, but  this time let's enable the fallback value  and return a safe default of minus  one. If our query returns no result when  we click. Ok. Now we see that no  errors are displayed in the fallback value of  minus 1 is returned since there is no ID equal  10 recipe. So to summarize this lesson. We've seen  how to use a fallback value on a SQL query binding  to avoid errors when the query returns no scalar  result.

</details>

---

### 45. SQL Query Binding - Scalar Query and Update Video at Inductive University

:::tip Video Link
Watch the video: [SQL Query Binding - Scalar Query and Update Video at Inductive University](https://inductiveuniversity.com/videos/sql-query-binding-scalar-query-and-update/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll show how to bind an input  component to a database by directionally as we might  also do for a tag. We'll show how to retrieve and display a  database value and also how to write a value back into the  database. So here's a numeric text field component  and below is the database query browser with  our recipes table. We'd like to view and update setpoint  one for recipe one in  this recipe's table. Let's get the needed binding on  the input component set up for starters since  sp1 is a floating point value. We're going  to scroll down and change its number type to  double next. We'll bind the  value double property. To a SQL query in this binding on  the top we can specify the select query that  will bring back a value from the database but on the  bottom we can also enable the update query to

**[01:02]** [01:02]
                                    write a value back. Once the user changes it  on the component. We're going to make use of both parts for starters  in the top select query. Let's update  this placeholder query to bring back sp1 from  the recipes table for the first recipe that  query is going to be select sp1 from recipes where ID equals 1  we'll also let this query pull at the relative default  rate of five seconds, so that it always updates on  the screen and we need to make sure to set the database  to use. So for us we're going to use dbiu then  here on the bottom update query we want to  enable it so that when we change the value in  the component, it will go in the other direction and update  that same database value the SP  one for recipe one.

**[01:54]** [01:54]
                                    Let's update this placeholder query to write to SP  one. So that will be update. recipes set Sp1 and for the unknown value,  we'll use this here on the  right as a component value placeholder. Where ID equals one  now that both queries are set up. When we  press OK we see the value coming back from  the database 1.18 is the  SP one for recipe one for the next  part. Let's make sure we set up two little gotchas first.  We'll set the bidirectional communication in  the designer and also the auto  Refresh on the database query browser then  if we go into preview mode. when we modify the input value and hit enter we see the database value updated.  So to review in this lesson, we've  shown how to set up a bidirectional binding between  a component and a database using  both the select and update portions of  a SQL query binding.

</details>

---

### 46. Cell Update Binding Video at Inductive University

:::tip Video Link
Watch the video: [Cell Update Binding Video at Inductive University](https://inductiveuniversity.com/videos/cell-update-binding/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate the use of cell update binding. Cell update binding is applicable to components such as a Linear Scale or an Easy Chart, which stores some of their configuration information as datasets. For such dataset parameters, cell update binding makes it possible to reference and bind to individual cell elements of a dataset, thereby making them dynamic. We'll begin with these two default components from the palette, a Linear Scale and a Slider. Note that by resizing the Linear Scale to make it wide rather than tall. Then resizing it again a little bit. We can turn this into a horizontal element. If we right click on the Linear Scale and select Customizers > Scale Indicators, we'll see that we have a green low indicator at a value of 15, and a red high indicator at a value of 85, as well as other customizations that we can configure. Let's add one more indicator, perhaps an arrow to indicate some current value.

**[01:06]** [01:06]
                                    So we'll click add, then we'll specify an arrow with a value of maybe 55 and a length of 50, and we'll color it blue, and then we'll click OK. And we've added an arrow just as specified. Next down here in the Property Editor, we see a property called Indicators. We see that it's now a 3x9 dataset. If we click on the dataset to inspect it, and widen this window a little bit, we see that there's a row for each of the 3 indicators, and each of its properties occupies one cell. in this dataset. What we want to do is bind some of these individual elements in the dataset to some tags or component properties. We can do this using cell update bindings, and again, this binding type only exists for datasets, such as this one. To create some cell update bindings, this time we'll click on the Indicators property, its binding icon, then select the cell update binding type.

**[02:10]** [02:10]
                                    The top portion is the dataset we already saw. We want to add bindings for the three cells in the value field to a couple existing tags and to a component property. Let's start with the indicator low value setpoint. We will click on the desired dataset cell. Then in the cell binding section, we'll click on add, and a row is added with a selected row and column specified. Then the value cell is where we can create an individual binding to a property or a tag. We wanna bind to a tag, so we will click the Insert Tag button, then navigate to our scale low setpoint tag and click OK. Now this one specific dataset cell has a cell update binding to a desired tag. Let's repeat the process for the indicator high value setpoint. Once again, we'll click on the dataset cell of interest, the value. Then we'll click add and the value binding.

**[03:07]** [03:07]
                                    We'll click on Insert Tag. Then we'll navigate to the tags and select the scale high setpoint tag, and click OK. Then as for the arrow indicator, let's do a sell update binding to a slider instead. So again, we'll click on the dataset cell of interest, the value, we'll click add, click on the value binding. This time we'll click on the property value button instead. Then we'll navigate down to the Slider and select its value property, and click OK. And at this point we've created all three desired cell update bindings. So we'll click okay. Now let's test out our cell update bindings. First we'll head to the top toolbar and set the tags to read-write, then toggle into Preview Mode. Then down in the Tag Browser, we'll set the low setpoint to let's say 25, and we see the green indicator reset.

**[04:05]** [04:05]
                                    And we'll set the high setpoint to 75, and we see the red indicator reset. And we'll move this slider around a little bit, and we see that the blue arrow indicator is tracking it as expected. So in this lesson, we've seen how to use cell update binding to make the parameters of a linear scale component dynamic. Cell update binding is specific to datasets. It's useful when trying to bind to specific component parameters when they're stored as part of a dataset, if there is no other way to bind to such parameters as individual scalar values.

</details>

---

### 47. Component Styles Video at Inductive University

:::tip Video Link
Watch the video: [Component Styles Video at Inductive University](https://inductiveuniversity.com/videos/component-styles/8.1)
:::

<details>
<summary>View Transcript (11 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll learn about the Style Customizer feature, which many Vision components use. The Style Customizer is useful because it allows one to define a set of visual styles that will change based upon one single driving property, rather than having to set up multiple individual property bindings to that one same value. For a first simple example, let's consider as our data source the simple memory tag named data. Of course, in general, this could be any type of dynamically updating tag. We've also toggled the toolbar icon to allow bidirectional read-write to tags. We want to bind this tag to the numeric text field, so we will scroll down in its properties a bit, and then drag the data tag down to its integer value property to bind it. Now we can change the tag value to whatever we want, let's say 45, and it will be reflected in the component display. Now suppose we want to style this component based on the current value of the data tag. For example, let's say we want to update the Foreground and Background Colors, the Border, and the Font, all based on the same tag value. Without the Style Customizer, what we'd have to do is individually bind the Border, Foreground Color and Background to an expression or some binding type involving the data tag. And as far as the Font goes, it doesn't even offer us a binding option, so we'd have to configure that manually as desired.

**[01:33]** [01:33]
                                    Four separate properties individually bound or configured. It would work like this, but that's not very efficient. By contrast, with the Style Customizer, we can configure all these properties in a single location. So we'll head up to our component of interest, t he numeric text field, since it supports styling, we'll right click and select Customizers > Style Customizer. The first thing we'll do is select the Driving Property. This is the one single value which will determine all the styling. We'll select the Value (Integer) property, since that's the one we've already bound to our tag of interest. Next, we'll select one or more of the Styled Properties and using the right arrow,  transfer them from the Available Properties into the Used Properties pane.

**[02:17]** [02:17]
                                    So we'll select the Background, the Border, the Font, and the Foreground Color as the four properties we'd like to style based on the Value driving property. Finally, at the bottom in the Styles section, we can add one or more value ranges for the driving property. So we will click A dd three times to add three such ranges. When the driving property is greater than or equal to each value, the component will be styled as specified. You can think of these as a series of if-elseif conditions. Finally, let's set up the desired styling for various ranges of the driving property, the integer value. For starters, let's define some ranges of interest. How about perhaps >= 0 is some normal operation style, >= 60 is some early warning style, and >= 90 is maybe some error case style. Then we can expand each of these cases using its dropdown and add the desired styling. So for normal operation, we'll maybe set the Background to green, the Foreground Color will leave as its default black, we'll set the border to No Border, and maybe we will bump up the Font a little bit to 14.

**[03:42]** [03:42]
                                    Then notice how there's this helpful preview to show what our styling will look like. Then for the early warning case, maybe we'll set the Background to yellow, the Foreground Color to red, we'll set the border to maybe bevel lowered and the font, maybe we'll bump it up to 16 and make it italic.

**[04:07]** [04:07]
                                    And finally, for the error case, maybe we'll make the Background red. we'll set the Foreground Color to a nice white contrast, set the Border to maybe bevel raised, and for the Font, let's bump that up to maybe an 18 point font and bold italic. Okay, so now we've defined all of our styles. Let's test our styling changes. We can already see the component has updated to reflect the normal operation styling, since the tag value is >=0. So we'll change the tag value to maybe 65 to see the early warning styling for >= 60. And then we'll change it to say 92 to see the error case styling for >= 90. So all four style properties for this component are being controlled by the one value of the driving property, Value, which in turn is bound to this data tag. Down in the Property Editor, we can see which properties these are by the bolding and the presence of this little style icon, here on the Border, and then farther down, on the Font, Foreground Color, and Background.

**[05:22]** [05:22]
                                    And as a general good practice. now you probably won't want to individually bind any of these properties, so as to avoid any conflicts or overrides. For a second example, let's consider the example of a Label component. As before we'll do Customizers > Style Customizer. A label doesn't allow for a good numerical driving property like the numeric text field did, although it does allow for using the text value itself. But we can create our own custom property and use that instead. So we will right click again and this time select Customizers > Custom Properties. Here we'll add a property and use the default type Integer, and we'll give it the name state to correspond to our second tag.

**[06:08]** [06:08]
                                    We're done, so we can click OK. Then over in its Property Editor, if we scroll down to the bottom, we see the new custom property state, and we can drag the state tag down to it to bind the label's custom property to the state tag. Then as we did with the other component, now we can style this label component off of this one custom property we just added. So let's go up and right click Customizers > Style Customizer again. And now we see our added custom property state added as a driving property. So we'll select it, then add some properties we want to style, such as the Background Color, the Border, the Fill, Background, Font, Foreground, Color, and the Text. And finally, in the Style section, let's add three possible states we want to style for. We'll say that 0 is off, 1 is on, and 2 is faulted. Now we can style each of these states.

**[07:12]** [07:12]
                                    So for the off state, let's make the Background Color red, and we'll check the Fill Background just to enable it. We'll make the Foreground Color, actually, we'll leave it at its default of black. We'll change the Text to off. We'll set the Border to maybe bevel lowered, and we'll make the Font bold. And since the driving property is bound to a tag whose value is already 0, we can see right away how this will look. Then for the on state, we'll set the Background Color this time to green, check the Fill Background, leave the Foreground Color at its default black, we'll change the text to on. we'll make the border bevel lowered also. And again, we will bold the Font. And finally, for the faulted state, this time we'll make the Background Color, let's say black.

**[08:11]** [08:11]
                                    We'll check the Fill Background, we'll make the Foreground Color white, We'll change the Text to faulted, and this time maybe we'll do the Border as no border and will make the Font bold, but maybe bump it up to 16 point. Finally, one more neat feature about this Style Customizer is that it supports animation, which just means going between different styles on a fixed interval for a specific state. So for this last faulted state will click Animate, and now we can add one or more animation style rows. So we'll add one, and then we'll add a contrasting style, maybe as follows. For the Background Color, we'll set it to yellow, then leave the Foreground Color as a contrasting black. We'll check the Fill Background as for the others. For the Text, we'll set that to faulted also.

**[09:13]** [09:13]
                                    And then we'll use the same no border style, and the same 16 point bold font. And now we also have a Step Duration parameter in milliseconds. We'll leave it as 1000 for a uniform 1-second blinking, but it can differ if we want. But we can already see what this is gonna look like in the preview. So we'll close this Style Customizer by clicking OK. As before, let's test our styling changes by using the state tag. The state is 0, so we already see our off-state style. We'll change the state tag to 1 to see the on style. And then we'll change the stay tag to 2 to see the blinking faulted style. And as before, we see the driven styles, they are bolded and have the styling icon. And in this case, we can even see the two colors alternating values in the Property Editor.

**[10:07]** [10:07]
                                    So in this lesson, we've seen how we can use the Style Customizer to specify one driving property, which will then format multiple attributes all at once, such style attributes as colors, fonts, and borders, for example, or even other properties such as text.

</details>

---

### 48. Control Components Video at Inductive University

:::tip Video Link
Watch the video: [Control Components Video at Inductive University](https://inductiveuniversity.com/videos/control-components/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    When creating real-time status and control screens, we often want operators to use control components to write values to PLCs. Control components are the core of data entry in ignition and we will cover the most commonly used ones in this lesson. You can find the control components that come with ignition under the input and button tabs in the component palette of the designer. Let's start with the numeric text field. This component allows us to write a numeric value to a PLC and the value we can write is dependent upon the number type property. The type can be an integer, double, long or float so it's important to select the appropriate number type to match the value property binding. If I bind writeable integer one to the component, you'll see the correct value integer binding was created to match the integer number type. If I look at the binding, it is marked as bi-directional, so I can write integer values to the PLC tag with the component.

**[01:02]** [01:02]
                                    For example, I'll go into preview mode and update the value to 25. However, if I try to enter a decimal value like 25.5, it does not get written because the value does not match the current number type property. We also have control over the value entered with the used bounds property. Enabling this property would enforce our value to be between the maximum and minimum properties. Additionally, enabling the error on out of bounds property would produce an error message when we are out of bounds. Looking at the rest of our components properties, we have other notable options. The defer updates property makes it so our numeric value is updated after hitting the enter key. Otherwise, the update would occur with each keystroke. Additionally, we can enable or disable editing on this component or disable it entirely with the protected mode. Let's move on to the spinner component. The spinner component allows you to modify a numeric value like a numeric text field would, and it allows you to spin the value up or down by some step size. The type of value that can be used is dependent upon the spinner mode property, which can be an integer, double, or date.

**[02:08]** [02:08]
                                    For example, I can drag writeable double one to the component, and I can set the numeric step size to five. If I go into preview mode, I can actually spin this up by five every time, and you can see it's writing that value to the PLC. Let's move on to the next input component, which is the slider. This component allows the user to drag an indicator along a scale to choose a specific value within a given range and write back to the PLC. It uses only an integer type for its value and it's very easy to use. I can drag writeable integer two onto the component and go into preview mode to drag my indicator along the scale. You can see the value of the PLC will update once I stop moving the slider. This is because the defer updates property is also enabled on this component. The scale or range of the slider can be changed by altering the minimum and maximum values. If a value for the PLC is outside these bounds, an overlay will be applied to the component.

**[03:03]** [03:03]
                                    The slider also has a few appearance properties we can change. Namely, we have disabling the horizontal slider property. Disabling the horizontal slider property will change the slider to a vertical orientation, and we can change the colors for the foreground and background and adjust the tick spacing. The final input component we will go over is the formatted text field. This component is a specialized text field used for alphanumeric text input that matches a specific pattern or format in a specific way. The format of the text depends on the validation mode, which can either be a regular expression or a formatted mask. A formatted mask user input is automatically formatted and restricted to a pattern. There are several commonly used formatted mask patterns to choose from, such as phone number percent or date. I will set the formatted mask pattern to a phone number and I can bind the committed value of the text field to writeable string one. If I go into preview mode, the formatted text field restricts my input to integers and it automatically formats my input around the special characters.

**[04:08]** [04:08]
                                    This will write the formatted text to our writeable string one. Let's try a regular expression pattern next. First, I will assign the validation mode to a regular expression. The regular expression user input is validated against a special string that defines a set of allowed strings. There are several commonly used regular expression patterns like email address, IP address, HTTPURL, and more. Input that matches the regular expression is allowed and input that doesn't match is restricted. Regular expression is very complicated, so don't worry if you don't understand each of the sample patterns. I can set the pattern to a last, first name expression to see this in action. I'll provide incorrect input like some numbers and the tag value won't update because the regular expression is not looking for those numbers. Now, if I provide accepted input, then the writeable string one tag will update. We also have additional properties to allow invalid text and to commit values while typing rather than after hitting the enter key.

**[05:04]** [05:04]
                                    Now that we've covered the common input components, let's move on to the control component buttons. The first button we will discuss is the two state toggle button. This component can be used to toggle a value between two states on a machine like on and off. It makes use of four values, control value, indicator value, and the two values that define the different states; state one and state two. Each time the two state toggle button is pressed, one of the state values is written to the control value. The indicator value property determines which state the machine is currently in. For example, I can take the writeable integer three tag and drop it onto the component. It's going to bind the control and indicator value properties to the tag for me. If I look at the control value binding, it is set as bi-directional, so if I toggle the button to an on state, the control value will update from a zero to a one. If I set the state one value to say 10 and the state two value to 20, then I'm going to toggle between 10 and 20. And we can configure what we want this button to look like by right clicking into the style customizer. We can specify how we want the colors and the text to look for those different states.

**[06:11]** [06:11]
                                    The next button is the multi-state button, which lets you toggle between more than two states. You can right click on the component and go down to the customizers, then multi button state customizer to add the states you want. This shows three states for hand, off and auto with available configurations for their text and styling, and we can add more states with this plus button. If I bind writeable integer four to the button, we can see the state changes are written to the control value. Another button we have is the one shot button. This button allows the operator to only press the button once to write a value to the PLC, and then it waits for the PLC to reset the value before becoming available again. For example, I can drag this writeable boolean one tag into the button. And if I go into preview mode and click on the button, it will write a value of one to our tag setting this boolean to true. It will stay in the waiting or writing state until I reset the tag.

**[07:06]** [07:06]
                                    The last button we'll look at is the momentary button. This button sets the value in the PLC for a specified number of seconds or however long the button remains held down, whichever is longer. The button uses a min hold time property that resets the value after a minimum number of seconds, which you can specify. Let's drag on writeable integer five to see this. I can set the min hold time to five seconds and go into preview mode to write to the tag. You can see after clicking the button, the control value that reads, our on value state was written to the tag for five seconds. Holding the momentary button longer than the min hold time will keep our value written to the tag and we can ensure our value is held for a maximum amount of time using the max hold time. So there's quite a few different components that you can work with to write values to PLCs.

</details>

---

### 49. Dropdown Video at Inductive University

:::tip Video Link
Watch the video: [Dropdown Video at Inductive University](https://inductiveuniversity.com/videos/dropdown/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at how we can configure and use a dropdown list component in Ignition. This component allows users to choose an option from a list of options. It can be found in the designer nder the input section of the component palette, I will drag one into the window to demonstrate how it works. The data property of the dropdown list is the most important as it defines the dataset containing the list of choices in the dropdown. We can configure the dataset by clicking on the dataset editor icon next to the data property, which opens up the dataset editor. The dataset editor initially presents us with a two column dataset with the columns value and label. The value column is defined with the integer type and the label column is defined with the string type. I will add a new row to the dataset with the add row icon. The value column now has an integer zero as our dataset is zero indexed. The label column has an empty cell. I'll add the string apples to the label column that represents the zero value.

**[01:03]** [01:03]
                                    I'll add one more row and update the value to one and our label to oranges, and if I hit okay, I can go into preview mode and choose the apples option or row from the dataset we just defined. The value from our row is hidden and sits behind the scenes, so our option only shows the label. The selected value represents the zero integer we defined in the first column, and the selected string value represents the apple string we defined in the second column. The selected label represents the label option we selected. If I choose the oranges option or row the selected value updates to one and our selected string value and selected label update to oranges. This example showed an integer and string column dataset. It's possible to represent both columns in the dataset as strings. To do so, I can access the dataset editor again. Then I will delete the value column by first selecting into the column and choosing the delete selected column icon. Next, I will add a new column with the add column icon. Finally, I will give it the name color, the type of string, and the position or index of zero.

**[02:03]** [02:03]
                                    With the new column added, I will add strings to the empty cells representing the color of our label strings. When I hit okay and go into preview mode, I can choose our apples option or row again. Now the selected value is undefined. The selected string value represents the value from the first column, and the selected label represents the value from the second column. The final dataset that can be configured is a single string column. Let's delete the label column in our dataset to see this. Since we deleted our label column, our selected string value and label represent the value from the first and only remaining column, which is color, and our selected value is still undefined. To summarize, we have covered the three orientations for configuring the first and second columns in the dataset. Those can be integer and string, a singular string or two strings. Every dataset you create on the dropdown list must use one of these orientations for the first and second columns, and you can continue adding new columns as long as the first one or two are configured accurately. If I go back into the dataset editor, I can add a second and third column to the dataset.

**[03:03]** [03:03]
                                    I will make the second column with the name of make and the type of string, and I'll make the third column with the name of model and the type of string as well. For my values, I'll enter Honda and Toyota under the make column and for the model column, I'll put in Civic and Tundra and hit okay to apply the changes. And I can set the display mode property to table to see all our additional columns when making the dropdown selection. As you can see, continuing to add options to our dataset can become tedious. We can make use of an SQL query to build out a dataset. To do so, I will open up the binding on our components data property and then choose an SQL query. Here I'll paste in a query which selects both the category ID and name from our category table. Then the results are displayed in ascending order. I can choose my database connection and run the query once to generate a new data set. If I choose the action option from the dropdown, my category ID or the first column is representing our selected value with the integer of one. The name of action represents the selected string value and the selected label.

**[04:02]** [04:02]
                                    I can also display the category ID by removing the zero column value of our dataset from the hide table column property. To recap this lesson, we have learned how to use a dropdown list component and configure its dataset.

</details>

---

### 50. Tree View Video at Inductive University

:::tip Video Link
Watch the video: [Tree View Video at Inductive University](https://inductiveuniversity.com/videos/tree-view/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Ignition projects that are large in scope can benefit from using a tree view component for their navigation strategy. The tree view component is listed under the tables tab in the component palette of the designer. Let's take a look at one. By dragging the component onto the window. We can see the tree view is populated with a sample tree hierarchy. If I go into preview mode, I can expand the east area and west area folders of the tree. The current tree is defined by the items property, which is the underlying dataset. The items dataset can be configured by going back into design mode and right clicking into the tree view customizer of the component. Every row in the items dataset must have a path and text value configured in order to display in the tree. The path determines the location of each node in the tree, and the folders in the path must be separated with the separation character property of the component. By default, the separation character is the forward slash. We can see the first item has a path of east area forward slash refrigeration and the text of compressor one.

**[01:07]** [01:07]
                                    If we look at the tree, the compressor one text or node does show up under the refrigeration folder within the east area folder. The additional properties or columns in the customizer are optional, but they can enhance the tree view for users. I can change from the default icon to another icon by first closing out of the customizer and copying the path of a different icon. From the image management tool, the path can be copied by right clicking on the image. Then you can paste this path into the icon cell for the icon you want to change. When I hit okay the new icon will display for the compressor one node in the east area refrigeration folder. Tool tips can be added our nodes by simply adding the desired text to the tool tip cell. I will type in some text in the tool tip in the first row of the dataset. Then I will go into preview mode and hover over this node to see the tool tip appear. Finally, the colors of the background and foreground for the nodes can be changed when they are in selected or unselected states.

**[02:06]** [02:06]
                                    So I can set the unselected background to black and foreground to white. For selected I'll choose a red background and a green foreground. When I go into preview mode, we can see these color changes. I can add a new row to the dataset by clicking on the plus button within the tree view customizer. I'll give this row a path of north area forward slash refrigeration with the text of compressor one. When I hit okay the folders north area and refrigeration are added to the tree. The dataset can also be configured through a binding like an SQL query by clicking on the chain link icon next to the items property and choosing the SQL query tab. There are additional properties like auto sort, which sorts the tree alphabetically. If disabled, it will use the datasets layout and auto expand, which expands our entire tree when the window is opened. So there's quite a few ways to configure a tree view component for your project's navigation needs.

</details>

---

### 51. Table Video at Inductive University

:::tip Video Link
Watch the video: [Table Video at Inductive University](https://inductiveuniversity.com/videos/table/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    The table component allows you to display tabular data in a variety of ways. I can drag one on my window from the tables tab in the component pallet of the designer. Right now, the table has no data because the data property, which is the table's underlying data set, currently holds no data. I can bind this data set to the results of an SQL query by clicking on the chain link icon and choosing the SQL query tab. Then I will paste in a query to select the data I want and choose my database connection. Finally, I will hit okay to populate the table. Now that the table data is populated, let's cover some of the important features. Right now my table data is displayed with the default order of the data set. However, I can go into preview mode and sort any column. For example, I can sort the column col three in ascending or descending order by clicking on the columns header.

**[01:06]** [01:06]
                                    Additionally, we have many properties available in our vision property editor, to alter the table's appearance, we can change the fonts of all the text. The foreground color, which is the color of the text, the table's background color, and similarly the font and foreground color of our column headers. These can also be hidden by disabling the header visible property. The size of the rows can be altered by changing the pixel amount in our row height property. If I set this to 25 pixels, then the rows will appear thicker and we can control the display of the background color with the background mode. Right now, this is set to a constant. However, we could have alternating rows with the alternating selection. Doing so provides an option to change the background of every other row. The mapped background mode makes it so our background can be mapped to the values within the table. The mappings are configured in the table customizer.

**[02:04]** [02:04]
                                    This can be accessed by going back into design mode and right clicking into the customizers option of the table, and then selecting the background color mapping tab. The mapping is set on a particular columns value, so I will choose mapping column col five and set the value of zero to red and the value of one to green. Finally, I'll add a value two mapping with the plus button and set its background to yellow. The table's background colors are now represented by the mapping we did for the values in col five. Let's go back to the table customizer to see what else can be altered. The customizer works by providing a number of options that can be applied to one or many of our tables columns. The header option allows us to change our header's text from its original value to anything else we want represented. Enabling the hide option will hide the entire column from our windows view.

**[03:03]** [03:03]
                                    Enabling the editable option will allow our table cells to be edited by the user. We can also disable the sorting we saw earlier with the sortable option. There are a few ways to change the vertical and horizontal alignment of our values, and we can add a prefix or a suffix character to our values, like a percent symbol to represent percentage values. The formatting of numbers and dates can also be configured. I can ensure col three always has two decimal places and maybe I want to represent the value as a progress bar. By enabling the progress bar option, I can then make the progress bar color to green. I will hit okay to see the changes. To recap the changes, the column col one, had the header changed to the text temperature col four was hidden. from our view. Col three is now represented by a progress bar and a percent suffix where the values must have two decimal places and call five is now editable to the user.

**[04:07]** [04:07]
                                    We can also set up additional mappings on our table. For example, we could translate numeric values to strings using col five with the translation list option. Here I can add a mapping for the value of zero to translate to the string off the value of one to the string on and the value of two to the string manual. There are also mappings for images, colors, and fonts. We can also create a mapping based on another columns value. For example, I can set up the col one or temperature column to have its background color change based on the value in col five. By typing in col five to the background color column cell and opening up the list below it. Then I'll add the three options for zero one and two, where zero will be blue, one will be pink, and two will be orange.

**[05:06]** [05:06]
                                    Then I will hit okay to see the mapping changes. To recap, the table component is an excellent way to view tabular data in a variety of formats.

</details>

---

### 52. Power Table Video at Inductive University

:::tip Video Link
Watch the video: [Power Table Video at Inductive University](https://inductiveuniversity.com/videos/power-table/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at the power table component. The power table offers similar functionality as the standard table component, but has a wealth of additional features. I'm here in my designer, and I'll come to the table section of the component palette to drag and drop a power table on my window. I'll need some data to work with so I can utilize the test data property to populate the table data. Now, just like the standard table, the power table has a customizer that allows us to make some changes to the columns in the table. So if I right click, go down to customizers and go to table customizer, we'll see a lot of the same options here, such as hiding specific columns, making them editable and so on and so forth. Now, where the power table differs from the standard table is there are quite a few features that are available from the runtime. So I'll put my designer to preview mode and I can right click on the header row here and I can actually hide specific columns, so maybe I want to hide the date and the boolean column. I can also reorder the columns. So I can take my string column and move that over, and I can do this as many times as I like and order the columns in whatever order I choose.

**[01:07]** [01:07]
                                    I can also sort the columns by ascending and then descending order. Additionally, I can hold the control key and left click on other columns, and now I'm sorting by multiple columns. Now if I come down here, I can select individual rows. I can also click and drag to select multiple rows. If I hit the control and c key to copy, I can copy these selected rows and now I can paste them anywhere I want. These selected rows can also be dragged and dropped into other ignition components. To do this, I can enable the row dragging enabled property under the behavior section. I'll drag and drop the selected rows within the same power table component. Doing so produces an error telling me that the on rows dropped extension function is not implemented. To make use of this drag and drop functionality, I need to enable an extension function that tells the target component what to do with the data. I'll close out of the error and go back into design mode and right click into the scripting option for the power table. And you can see there are quite a few functions available, including that on rows dropped.

**[02:04]** [02:04]
                                    So if I wanted to do something when I dropped rows from any power table onto this power table, I would configure that script right here. Now, I'm not going to go over every function, but we will take a look at one example. I'll come to this configure cell extension function. This allows you to make changes to individual cells on the table. You can do things such as modify the background color, the border, the font, the foreground color, and so on. If I enable this, you'll see there's an example script commented out here. I'll go ahead and un-comment. Looking at the script we can see that when a row is selected, it uses the color of the selection background property of the component. If a row is not selected, alternate between white and this gray color. I'll click okay and we can see that it's alternating between gray and white. Another feature of the power table is that we can have individual cells span across multiple rows and columns. To do this, I can come down to the property editor again and go down to the data section here. There's the cell span data property. We can specify which cell and how large we want to make it.

**[03:05]** [03:05]
                                    To give you an example, we'll add a new row here. We'll focus on the very first row and column, and I'll do so by specifying row zero and column zero, with a height of two columns in a width of two rows. When I click on okay we can see that one cell is now expanded two columns and two rows. Lastly, we'll discuss the view dataset property down below. This property represents the current visible state and configuration of the table made by the user, versus the full underlying dataset that's driving the table. So you can see here I have my three columns in order as they are on the table, and that is very different from the data properties dataset. The dataset still has all five columns on the table technically, so you can do things like run a script whenever a user hides a column or reorders the columns in the table and so on.

</details>

---

### 53. User, Schedule and Roster Management Video at Inductive University

:::tip Video Link
Watch the video: [User, Schedule and Roster Management Video at Inductive University](https://inductiveuniversity.com/videos/user-schedule-and-roster-management/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    While we typically manage users, rosters, and schedules within the gateway webpage, it is possible to do all of this from the client. The easiest way is to use the built-in components that we've provided for you. The user management component, the roster management component, and the schedule management component. All three of these components can be found in the admin section of the component pallet. Each of these components can be dragged onto the window and then used like any other component. Let's start with looking at the user management component. This component allows you to add, edit, or delete user and role information. I could edit this admin user here and add some contact information. Then I'll hit the save button to save the changes. However, doing so produces an error stating you are not authorized to modify the gateway system user source. To get around this, we need to enable the gateway setting, allow user admin under the general settings. This allows the user management component to make changes to the user source on the gateway.

**[01:07]** [01:07]
                                    The components mode, user source, and username properties determine which user source or specific users to manage. The manage users mode makes it so all the users and roles in the specified user source can be added, removed, or edited in edit single mode. The component only edits a single user, which user is being edited, is controlled by the user source and username properties, so I could edit only the guest user by typing in guest to the username property. Finally, the edit current mode looks at the user who is currently logged into the project, allowing them to edit their own user. We need to consider if an identity provider is used in this project as it would not allow me to use the component in edit current mode. We can see the error message here is produced because we are using an identity provider. The authentication strategy could be changed under our project's vision login properties.

**[02:05]** [02:05]
                                    When I switch back into edit current, the error message will go away. One other configuration that is necessary for our management components is with the schedule manager. In order to use this component, we need to ensure the user management project permission is enabled. Now we can add, edit, or delete schedules with the component. I'll add a new schedule. Schedules can be defined by specifying which days of the week and which times of the day they are active on. The times of day are defined using a string of time ranges where the times are specified in 24 hour format with dashes between the beginning and the end. Multiple ranges can be specified by separating them with commas. For example, I could have 8:00 AM to 12:00 PM and 12:45 to 2:00 PM for a set of time ranges. Schedules that alternate weekly or daily can be specified using the repetition settings.

**[03:04]** [03:04]
                                    Finally, the on-call roster component works very similarly to the gateway roster settings. You can add, edit, or delete any rosters and it doesn't need any additional configurations to work. In addition to these components, you can also use scripting to modify your users rosters and schedules. If I go to my script console, you'll notice I have a scripting function listed here. The function system dot user remove schedule will allow me to remove the schedule that i've called example. There are many functions similar to this in the system user section of our functions, allowing you to modify users schedules and rosters. If you would like to learn more about each of these components or any of the scripting functions available to you, check out our user manual where you can find all the information in the appendix section.

</details>

---

### 54. Row Selector Video at Inductive University

:::tip Video Link
Watch the video: [Row Selector Video at Inductive University](https://inductiveuniversity.com/videos/row-selector/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    The row selector component acts like a visual filter for datasets. It is located in the reporting section of the component palette. I have one on my window here on the left hand side along with two table components. This raw data table here contains some query data from my database. I can filter the dataset with the row selector. To do so, we need to make use of the data in and data out properties of the row selector. The component will filter the data in dataset and push the filter results to the data out property. The data in property provides the input for our row selection tree, so I'll bind it to the data property for the raw data table. Next, I'll bind the data property of our filtered table below to our row selector's data out property. Now, if I go into preview mode, we'll see the row selector tree has our dataset filtered by month and year.

**[01:05]** [01:05]
                                    Clicking on the folder places the entire data out dataset onto my filtered table, which would be the results for the month of January. If I expand the folder, the filtering drills down by each day and even down to the hour, we can see my filtered table results are updating based on the filter selection within the row selector. The results represent the specific combination of our day and year filtering. Let's take a look at how the data is being filtered. I'll go back into design mode and right click on the row selector. Then go down to customizers and row selector tree customizer. Within the customizer, we have the available filters that we can apply to the data in dataset. Currently the component is filtering with the timestamp column, I can reorder how the filters are being applied. Additionally, I can change the icon path, so instead of having a folder, I can click on this folder and drill down to another icon like a calendar.

**[02:06]** [02:06]
                                    The timestamp display string can be changed with the format string option. I can choose a built-in format by clicking on the pencil icon, or I can type it in directly. I could add the rest of the year so the filter matches up with the table results. I'll click okay to see the changes. It's important to note that you don't have to filter by the timestamp. I'll go back to the customizer to see this. I can just delete all these filters and filter Instead by equipment, I can move the equipment string over by clicking on the arrow, and I'll filter by the cause as well. I'll click on okay to see the new filters being applied. The row selectors grouping our data by piece of equipment. Now going back to preview mode, I can drill down to each cause for the piece of equipment or by the equipment itself. Lastly, I wanted to note that you don't need both tables on the window here. The raw data tables really just show you what the data looks like before it's filtered.

**[03:03]** [03:03]
                                    Really. You could take the query that's on the data binding for the raw table and just move it to the data in property on the row selector.

</details>

---

### 55. Column Selector Video at Inductive University

:::tip Video Link
Watch the video: [Column Selector Video at Inductive University](https://inductiveuniversity.com/videos/column-selector/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    The column selector component is similar to the row selector, except that instead of filtering rows, it filters columns from its output dataset. The component is listed as the third option under the reporting section of the component palette. I'll drag one onto my window here so I can filter my existing data sets. Those are currently populating the tables raw data one and raw data two on my window. I'll start by binding my column selector's data in property to raw data one's data property. You can see the column headers are now displayed in the column selector component. Next, I'll bind my filtered data tables dataset to the data out property of my column selector. All of the columns that are checked off here pull into my filtered data table. I can go into preview mode to uncheck a column. I'll uncheck the duration column and this will hide the column from my table. Additionally, I could customize the column selector's filtering by going back into design mode and right clicking into the components column selector customizer, under customizers.

**[01:12]** [01:12]
                                    If I select my dataset, I have an option to exclude certain columns from selection. I'll check off the timestamp column here and hit okay. This made it so I can no longer filter the timestamp column's, visibility from the column selector. Our column does still remain on the filterd table. Finally, the column selector does allow for filtering on multiple data sets. To do this, I'll go back into the customizer. If I hit the plus button, I can actually add a new data set. I'll name this one, data two and hit okay. I can rearrange which data set is displayed first in the component with these green arrows. So I'll move data two to the top and I'll hit okay on the customizer to apply the changes. You can see the data two dataset was added to the component. However, no data in property is bound to it, so no columns exist.

**[02:04]** [02:04]
                                    If I scroll down in the property editor here, you'll see some new custom properties, were added. Data two in and data two out. I'll bind my data two in property to the data property of raw data two, and I can add a new table here to capture the data out property of our data two data. If I go into preview mode, I can filter both data sets from the one component. This makes the column selector a useful filtering tool when working with one or multiple data sets.

</details>

---

### 56. File Explorer and PDF Viewer Video at Inductive University

:::tip Video Link
Watch the video: [File Explorer and PDF Viewer Video at Inductive University](https://inductiveuniversity.com/videos/file-explorer-and-pdf-viewer/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's look at the last two components included within the reporting section of the component palette, the file explorer and the PDF viewer. The File Explorer component displays a file system tree that users can search through. The root directory property of the component acts as the root folder. We can see it's using this reports file path here within my C Drive. I can click on this pencil icon to edit the root directory and I'll append the daily reports folder to the path. When I close the text editor, you can see only the daily reports folder is now shown within the file explorer. I can also filter this tree by the file extension. Say I only want to show PDFs in the file explorer. I can come to this file extension filter property and set it to PDF. Now, only PDF files are shown within the component. Additionally, when changes are made to the directory, we can actually refresh the file explorer from the client.

**[01:05]** [01:05]
                                    This feature was introduced in Ignition 8.1.14. For example, let's say this downtime report gets deleted. If I go into preview mode and right click on my file explorer, I can click on an option to refresh. We can see the refresh took out the deleted report. Now since I'm in preview mode, i'll click on this simple report. Here you'll see there is this selected path property that shows us the exact path to the file that is selected. Since the path is exposed, we can use it with the PDF viewer. The PDF viewer works by passing in a file path to a PDF. I'll go back into design mode and make use of the file path property on the PDF viewer. This is what determines which PDF we see in the component. So I can go ahead and bind this to the File Explorer selected path property. I'll do so by clicking on the chain link icon and selecting a property binding.

**[02:03]** [02:03]
                                    Then the selected path property of my file explorer. Finally, I'll hit okay to apply the binding. You can see now the simple report is displayed in the PDF viewer. There are a couple of properties that drive the appearance of the PDF viewer. There's the page fit mode, page view mode, toolbar and utility visibility that you use to hide or show the toolbar and or the utility bar. There's a large number of customization options you can make from within the reports. Some notable ones being going to the next page, page rotations, text select, and printing. To recap a project utilizing the PDF viewer, along with the file explorer component makes it very easy to look through all your saved reports.

</details>

---

### 57. Template Overview Video at Inductive University

:::tip Video Link
Watch the video: [Template Overview Video at Inductive University](https://inductiveuniversity.com/videos/template-overview/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    HMI SCADA applications generally have a fair amount of repetition in their screens. In any given application, it is common to have many identical sets of components repeated several times over with a different source driving the data in each set. In ignition, these sets of components are called templates. Templates mean you can define a graphical display called the master template. You can then create instances of this master template anywhere across your projects. If you choose to make a change to the master template, this change will then be reflected in all of its instances. For this reason, using templates early in your projects development for any repeating graphical displays can save a significant amount of time. Templates are created from the ignition designer where I am currently. From the project browsers vision section, we can access all the templates available for this project to use. I've created two folders for this example.

**[00:00]** [00:00]
                                    [01:00]         One with templates to find locally in this project and templates that are being inherited from this project's parent project. You can learn more about inheritance in the project inheritance lesson in Inductive University. For this lesson, we just have to keep in mind that the grayed out templates are inherited templates from a different project. And that these templates can only be edited from their project of origin. As with any inherited resource, I can right click on it and I can override it creating a local copy of this template here. Since this is a local template override, it is no longer grayed out. I do not want to do this so I will simply delete this newly created local copy to see the inherited template tickets place. Again, I can only override this template from this project since it is inherited. To change this template, I will have to go back to its project of origin. Local templates are not grayed out. And since this is their project of origin, they can be edited right here on the spot.

**[01:59]** [01:59]
                                    Regardless of which template type you are looking at local or inherited, I can right click in the template section of the project browser and choose to create a new template. I can also create folders for template organization and I can also export templates to be shared across multiple projects or ignition gateways even. Creating a template instance is as easy as dragging and dropping. I can take my motor B template and drag it onto my vision window and just like that, I have created an instance of motor B's master template on this window. This is very similar to dragging and dropping one of our existing vision components like an easy chart or a power table. This is because the template itself is a user defined component which will have its own properties and settings associated with it. Since templates are user defined you can create your own custom properties on your templates similar to custom properties on standard vision components. With one of my template instances selected, I can head down to the property editor here to see all of its properties.

**[03:00]** [03:00]
                                    And at the bottom, you will see this templates custom properties highlighted in blue. In my case, my custom property is a motor's number. Meaning that whatever number this property is set to that will be the motor that my template will display information for. I can set it to one to see motor one data, two to see motor two data and so on. When I set this value to zero, you will know that some of the components in my template show error overlays. This is because as you can see from my type browser, motor zero does not exist. In addition, UDT's can be tied to templates. What do I mean by this exactly? You can actually tell your templates which UDT they are associated with. This ultimately allows you to create template instances by dragging and dropping UDT instances into your vision windows. I will do that by dragging one of my valve UDT instances here onto my vision window. And as you can see, I can create a vision screen that shows information for all my valves in a matter of seconds once my templates are created and configured.

**[04:06]** [04:06]
                                    I can also double click on any template instance and I will be immediately taken to its definition like so. From the template definition, I can do something like add a second valve to the template by duplicating the existing valve symbol. Once I close my template window and select to save my changes, I will see this change propagate to all my existing valve template instances. The fast deployment of changes to all template instances from their template master and the ability to efficiently repeat visualization components makes templates a fundamental part of HMI SCADA design using ignition. In future lessons, we will dive deeper into template configuration and further explore how they can be used in an ignition application.

</details>

---

### 58. Creating a Vision Template Video at Inductive University

:::tip Video Link
Watch the video: [Creating a Vision Template Video at Inductive University](https://inductiveuniversity.com/videos/creating-a-vision-template/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will cover how to create a basic template in Ignition. Templates give us the flexibility to create custom graphics to be used as components across Ignition projects. Here on my designer I have a vision window open with a scale graphic I want to turn into a template. This scale graphic is actually composed of three different components, a low-profile drum scale from the symbol factory, a numeric label to act as the scale screen and a progress bar to add additional visualization to the scale. When I put these components together, it really does look like I've created a custom scale component. Let us now imagine that I have 100 scales on my plant floor. I could very easily copy and paste these three components 100 times over to visualize all of my scales. However, if I wanted to add something to my scale I would have to make the same change to all 100 copies of my scale which is not exactly practical.

**[01:06]** [01:06]
                                    Using templates, I can define my scale graphic in one place. I can then create as many instances of this scale graphic template as I require. Then if my scale needs to be modified, I can make this modification to my scale template definition and this modification will automatically propagate to every scale template instance. Now that we understand why we need a template, let's create one. Templates are created in the Ignition designer, from the vision section of the project browser I can right click on the template section and choose to create a new template. I will name it scale and create it. The first thing you will notice about the template design area is the checkered background. This is because templates have a transparent background by default which of course can be changed if required. Templates must also have a template parameter. Template parameters are used to pass information to templates. In the case of our scale, it would make sense to pass it a weight value to display on my numeric label and the progress bar.

**[02:09]** [02:09]
                                    To create a parameter, right click on the dark gray background here, go to customizers, custom properties to bring up the custom properties window. Here, you will see the template parameters table. Templates also have internal properties, unlike template parameters which are exposed and are used to pass information to the template, internal properties are not exposed and can only be referenced from within the template itself. I will click on this plus sign here to create my template parameter. I will name it, weightValue and make it standard type float. And while I will not give it a description I will set a strong target property to true. I will explain why a little bit later. I will click okay and now my template parameter is created. You can tell it was created because with my scale templates selected in the project browser I can scroll down my templates properties and I will see my new template parameter in blue font.

**[03:07]** [03:07]
                                    I will now hit back to my main window, copy my scale graphics and paste them onto my template design area. Notice how I have not left any empty space in my templates design. This empty space will exist for every template instance you create so you want your components to occupy the entire space in your templates design area. Again, the scale template will get its weight from the weightValue parameter. Since I want this weight to be displayed on by numeric label, I will head to its value property and do a direct property binding to my weightValue parameter. I want my progress bar to also display this weight. So I will also select it and also bind this property to the weightValue parameter. That's it. I have a way to pass a weightValue to my template and I also have a way to display this weightValue.

**[04:04]** [04:04]
                                    Let's create an instance of this template now. I will save my changes and go back to the vision window. I will now simply select my scale template from the project browser and drag it onto my window like I would any component from the vision component pallet. Every time I do this a new scale template instance is created. I can also drill down into one of my template instances properties and I will see the weightValue property exposed in each. Again this is the weightValue parameter in my template. If I set this value to say 80, both my scales, numeric label and progress bar will reflect this value. This weightValue property acts like any normal property so it can be bound to a tag, expression, property, query, et cetera. Earlier, we talked about the drop target check box for the float type weightValue template parameter. The drop target checkbox and template parameters allows you to link a template to all the tags of the same data type as the template parameter with drop target enabled.

**[05:09]** [05:09]
                                    What does this mean? Well, weightValue is a float type template parameter and it has the drop target setting enabled. This means I can grab a float type tag drag it into my vision window and see the scale template as an option in this template menu. Once selected a scale template instance will be created and its weightValue property will be automatically bound to the tag I dragged onto the window. This makes it very easy to go from a tag in your tag browser to having a graphic to visualize this tag on your visual projects. With a use of drawing tools, the symbol factory library and the existing vision components you can create almost any type of custom template you can imagine.

</details>

---

### 59. Templates and Layout Video at Inductive University

:::tip Video Link
Watch the video: [Templates and Layout Video at Inductive University](https://inductiveuniversity.com/videos/template-resizing-and-enable-layout/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    When a Vision template is added to a window like so, this new template instance will be the exact same size as its definition. With the template instance selected, I can resize it and we see the components within the template get larger or smaller. I can right click on the template instance and revert its size back to the master template size. Now, as with every component you place on a Vision window, you can configure the layout of your template instances by right-clicking, and going to the layout menu. Here, I can configure my template instance to have a relative or anchored layout. We can learn more about component layouts in the component layout lesson. By default, the relative layout is used, which means this template instance and all of its components will auto-scale based on the size of the container it is in, our pop-up window in this case.

**[01:04]** [01:04]
                                    What if instead of having all the template's components follow the same relative layout, I wanted them to behave differently. Every Vision template will have one or more components in it. These individual components can have their own custom layout settings. By default, these layout settings are ignored due to a template property called "enable layout". With this property set to false, ignition will ignore whatever layout configuration is on the components and they will all be set to relative and will not maintain aspect ratio. This is why my valve here looks skewed, as it is not maintaining the aspect ratio. It is just getting larger or smaller as its container changes size. If I go back to my valve template definition, I can enable its layout. Now all of the layout settings of my templates components will be respected. My valve graphic here, just like all the other components in my template have a relative layout and we'll maintain aspect ratio.

**[02:07]** [02:07]
                                    Going back to my template instance I can see that my valve graphic grows or shrinks as I resize my instance, but it's aspect ratio is maintained and it is no longer skewed. Now, these same rules apply to all of my templates. This other template I have here has its layout setting disabled so as before, all of its components will gracefully auto-scale as I resize my template instance. What if I just wanted my text field here to grow? And I wanted my label to just remain the same size? I could go to its template definition, I can enable layout, and then I can set my label to have an anchored layout, North and West. I can now set my text fields layout to be anchored and I will anchor it to all four sides like so. Now heading back to my pop-up, I can see that my text field will resize gracefully and will stretch to all four sides while my label remains in the upper left hand corner per my layout configuration.

**[03:12]** [03:12]
                                    It is important to note that these layout settings will be respected on my Vision client. If I save my changes and head to my client, I can resize the popup where my templates are and I will see them behave just like I did in my designer.

</details>

---

### 60. Embedding Vision Templates Video at Inductive University

:::tip Video Link
Watch the video: [Embedding Vision Templates Video at Inductive University](https://inductiveuniversity.com/videos/embedding-vision-templates/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In previous lessons we showed how templates can be used to gracefully repeat graphics across vision projects. We covered how to define a template and how to create instances of a template definition. It is also possible to nest templates inside other templates. Here for example, I have a tank template instance that shows me my tank's level and temperature. The LED display showing the temperature looks a bit basic, so I will change it to show its temperature using my gauge template here. To do this, I will double click on my tank template instance to bring up its definition. Once my template definition opens I will make it a bit larger to accommodate for the new gauge I want to put in here. I will simply drag my temperature gauge template in like I would any component from my vision component pallet. I will now resize my template to get rid of any empty space.

**[00:59]** [00:59]
                                    Since I want my new gauge here to show the same temperature value my LED was displaying, I have to make sure that it's temp property is bound to the same thing my LED display is bound to. In this case, my LED display is bound to a template parameter named temperature. So I will bind my new gauges temp property value to this same template parameter like this. I can then delete my LED display and save my changes. Now if I go back to my vision window you will see my two template instances now showing my tank temperature using my gauge template. Nesting templates like this is common practice in Ignition. Users will often nest templates several layers deep. It is important to note, however, that as templates become more and more nested, they also become more and more complex, which can make working with them difficult. Ignition's ability to nest templates gives users infinite possibilities for custom template creation.

</details>

---

### 61. Changing Template Path Video at Inductive University

:::tip Video Link
Watch the video: [Changing Template Path Video at Inductive University](https://inductiveuniversity.com/videos/changing-template-path/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    Whenever you drag a template onto a window you are dragging a template holder or a template instance onto the window. My vision window here has various template instances. I can select any of them and I will see a property named template path in the property editor. The template path property allows us to point this template instance to any template this project has access to from the designer. It is possible to make this path dynamic, meaning that you can bind it to something to change this template path on the fly. My dropdown menu here on the right has three selections associated with it, motor, scale, and valve. Putting my designer in preview mode using the F5 shortcut, I can click on my dropdown and see my same list. Every time I select something different, the dropdown menu exposes my selection in the form of the selected string value property. I have chosen these options in my dropdown for a reason.

**[01:01]** [01:01]
                                    These are actually the paths to all three templates here. If I select one of my template instances I'm binding this path property to my dropdown selected string value property like this. Any template I select from my dropdown will be displayed for this template instance. You have to be careful when doing this. Generally, different template definitions will have different parameter names. Changing between templates like we are doing here can and will change the template parameters exposed in your template instances properties. As we saw here, a template instance can be used as a template container to display any template you want using its template path property. This functionality adds even further versatility to templates in ignition.

</details>

---

### 62. Template – Indirect Binding Video at Inductive University

:::tip Video Link
Watch the video: [Template – Indirect Binding Video at Inductive University](https://inductiveuniversity.com/videos/template-indirect-binding/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at how we can make an indirect template using a simple standard type of parameter, like an integer for our indirection. Now, you'll notice I've already put together a simple template called motor and I've given it three components, a label, a simple motor graphic and an LED display which I'm going to use to display the name HOA and amped value of my motor respectively. This is based off of the motor UDT that I have created within my tag browser. You'll notice in my tag browser, I have multiple motors each of which has an amps and HOA value associated with it. You'll notice that the only difference between each of these motor UDT instances is the number at the end of the name there . Motor two, motor three, motor four and so on. Because my motors are set up in this way, I can use a simple integer parameter to represent a motor number that I can use for indirection in all of my bindings.

**[01:12]** [01:12]
                                    The first thing that we need to do is make a new parameter and we can do that by right clicking on the background of the template and going to customizers and custom properties. Here, we can create a new template parameter. I'll go ahead and click the plus sign and give my parameter a name. I'll call it motor number and the type is already set to integer. Once I've got that set, I can go ahead and hit okay and I should see my template parameter appear in the property editor for the template. I'm going to go ahead and give my parameter a default value of one. So that way, it makes it a little bit easier to test. Now that we have our parameters, we just need to set up our bindings. I'll start with the label at the top. I want to put a binding on the text property of the label. And in this case, we'll do an expression binding where I can combine the word motor and a space with my parameter that I created earlier, motor number.

**[02:18]** [02:18]
                                    I'll go ahead and hit okay and we can see that now my label has changed to motor one. For my motor graphic, I'll go ahead and change the color of this little square here within the graphic. I'll set up a binding on the fill paint property. And in this case, we want to do an indirect tag binding. For our indirect tag binding, we'll go ahead and start by grabbing an example of a tag we're looking for. In this case, I want this to be bound to an HOA tag and then we will make it indirect by removing the part where we want to replace it with the parameter. In this, the one in the path there is going to be replaced by our parameter motor number.

**[03:06]** [03:06]
                                    Lastly, because this binding is not a color, we need to set up our number to color translator down at the bottom of the binding here. My values can be zero one or two. So I'll say zero is maybe a red color. One is maybe a green color and two I'll have it be a yellow. Once I have that set, I can go ahead and hit okay. And I can see that my square immediately changes to red because my HOA for motor one is zero. The last binding here is the binding on the LED display. I'll set up the binding on the value property. And again, this will be an indirect tag binding. Again, we'll start out by grabbing an example of a tag that we want to bind to. This time, we want to grab the amps tag. And again, we'll delete that number that we want to replace with our parameter, motor number.

**[04:08]** [04:08]
                                    This time there's no number to color translations. So we'll go ahead and hit okay. And we can see our value for motor one represented in our LED display. Now that we've got all of our bindings set up, I can now use my template on one of my windows. I've already got a motor display windows set up here and I can just drag my template onto the screen a couple of times to get a couple of instances of it. Drag a couple more here. You'll notice they all start out at motor one because that's what I set the default value of the parameter to be. However, if I select any one of these instances and look in the property editor, we'll find our parameter motor number, and you'll find that I can change that to be something else, say a two. And we now seen motor two within our template. I can go to these other motors and change them as well and we can get some different motors displayed on our screen very easily using these indirect templates.

**[05:14]** [05:14]
                                    Keep in mind that making a template indirect using a simple standard parameter type like an integer is only one method of making a template indirect and we will explore another type using a UDT in another video.

</details>

---

### 63. Template - UDT Parameter Video at Inductive University

:::tip Video Link
Watch the video: [Template - UDT Parameter Video at Inductive University](https://inductiveuniversity.com/videos/template-udt-parameter/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at how we can make a template indirect by using a UDT Parameter. You'll notice I already have a simple Motor template created with a label up at the top, a graphic of a Motor in the middle and an LED display down at the bottom. I want these to represent the name, the HOA value and Amps value of the Motor respectively. You'll notice I've also created a Motor UDT and have created a few Motor instances as well, with each instance containing an Amps and HOA value. I want to use these UDT instances to make the template indirect, by passing in the instance as a parameter to the template, so that the components of the template could then bind directly to the values of the instance. To start, we need to make a new parameter, by right clicking on the background, going down to Customizers and selecting Custom Properties.

**[01:10]** [01:10]
                                    Here we'll make a new parameter by clicking on the plus button in the upper right. I'll give it a name of Motor, but this time I want to go to the type, and change it down to User Defined, go into my Tags folder. And you'll notice there's an option for my Motor UDT that I've created. I'll go ahead and select that, and hit okay. You'll notice in the property editor for my template, we now have a new property, the Motor parameter that we just created. Now unlike the standard type of parameter, where we could provide a default value, we actually can't provide a default value for a UDT parameter type. This means that when we start to set up our bindings, we won't see any values appear within the template. It won't be until we add an instance of the template to a window, and then pass in a UDT instance into that template instance, where we will see the values in action.

**[02:09]** [02:09]
                                    With that in mind, let's go ahead and set up our bindings. I'll start with the Label right up at the top. We'll do a binding on the text property, but this time I want to do a property binding because the parameter is going to be an instance of the UDT. I have all of the values of the UDT at my disposal, as well as a few extra values. Here on the property binding, I can find my Motor parameter, and you'll notice it can be expanded. Here I see my Amps and HOA values, which are a part of the UDT, but there's also this Meta folder that I can expand, and I'm going to find the TagName. Since all of my Motor instance tags are named appropriately, I can just bind the Label to this name property. Once we've got that, we can go ahead and hit OK.

**[03:04]** [03:04]
                                    And again, because we can't set a default value for our parameter, you'll notice the binding makes the Label blank, and that's because there's no value being passed into that parameter at this point. Moving on to our Motor graphic, I'm going to make this square here on the Motor a different color, depending on the value of the HOA. I'll go ahead and set up a binding on the Fill Paint property. And again, we want to do a property binding. Once again, I'm going to find my UDT property, Motor. We'll expand that. And because the HOA is going to be represented on my Motor graphic here, I'm going to set up my binding to the HOA property. Of course because we're setting up a binding on a Fill Paint property, we do need to set up the number to Color Translator down below. I'll go ahead and assign zero to a color of red, one to a color of green, and two to a color of yellow.

**[04:10]** [04:10]
                                    Once I have that set, I can go ahead and hit OK. And we'll finish off with the binding on the LED display. We'll find the Value property, and set up a binding. Again, it's going to just be a property binding. We'll find that Motor UDT property and expand it, and this time select the Amps property from the list of UDT values. Once we've got that set, we can go ahead and hit OK. Now that all of our bindings are set up, we're ready to use this template on our window. I've already got a Motor display window set up where we can add some template instances. Go ahead and find my template here and just drag a few instances onto the screen. Now because they don't have default values, they don't immediately show up with some good data.

**[05:03]** [05:03]
                                    I have to first provide a parameter value for them to use. Now because our parameter type is a UDT, the parameter is actually expecting a whole UDT instance to be passed into here. And we can do that with a Tag binding. So I'll go ahead and bind one of these instances to one of my Motor tags. I'll say this one will be bound to Motor five, and maybe this one on the left will be bound to Motor eight. As you can see, once the bindings are set up, it pulls in that whole instance of the Motor into the template, and then all of those bindings to that parameter that we set up can pull in the proper values into the components. Now, one last thing that we can do when using a UDT type of parameter, is enable the Drop Target property. The Drop Target property is something that we set on our parameter.

**[06:02]** [06:02]
                                    So I'm going to go back to my template, and go back to my parameter by right clicking on the background, and going to Customizers Custom Property. Now you'll notice for our Motor parameter on the right hand side, we've got an option to make this a Drop Target. What this does, is it makes this template with this particular parameter, a Drop Target for the Motor UDT instances that we may drag onto the window. This is very similar to dragging a standard type of tag on the window. Say an integer memory tag, that provides you with a couple of options for components that you can create. In this case, the component that would get created would be an instance of the template. I'll go ahead and enable Drop Target here. And we can demonstrate that in action. Go ahead and hit OK. Go back to our Motor display. And now, rather than dragging an instance of the template onto the screen and binding it to the tag, I'm just going to drag one of my Motor instances directly onto the screen.

**[07:08]** [07:08]
                                    And when I do that, you'll notice it automatically creates an instance of the template for me. And if I look down at the Motor parameter, we can see that it's already got a binding setup on it. Opening up the binding, I can see that it is bound to Motor three, the UDT instance that I dragged onto the screen. With Drop Target enabled, it makes it really easy to drag and drop additional instances of your UDT onto the screen, to create more instances of your template. It's important to note that this is only one method of making a template indirect. And we go over another method of making a template indirect by using a standard type of parameter and indirect bindings, in another video.

</details>

---

### 64. Template Repeater Video at Inductive University

:::tip Video Link
Watch the video: [Template Repeater Video at Inductive University](https://inductiveuniversity.com/videos/template-repeater/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to take a look at the template repeater component. The template repeater is a powerful component that allows us to quickly and easily repeat a template multiple times on a window. I'll go ahead and add a template repeater component to the window. And as I expand it, you'll notice that it actually starts out blank. To use the template repeater component, we first need to set a few properties. We'll start with the template path property, where we need to select a template that we want to repeat within this component. I'll go ahead and click on the dropdown here, and select my motor template that I made earlier in the templates indirect bindings video. The next property that we need to configure is the repeat behavior property, which by default is set to count. While set to count, the behavior of the template repeater is that it will repeat the template the number of times specified in the repeat count property.

**[01:07]** [01:07]
                                    So if I set this repeat count property to five, it repeats my template five times. It may look a little stretch now, but if I put my designer into preview mode and scroll down with the scroll bar, we can see that indeed there are five instances of the template within the template repeater component. Now, rather than having the template instances inside the repeater be all stretched out like they are right now, if we scroll down in the property editor for the template repeater, you'll notice there is a layout style property which by default is set to vertical. The vertical layout style will stretch the template instances horizontally, and then repeat them in a vertical line. There are a few different options that we can choose from including horizontal, which does sort of the opposite, stretches them vertically and repeats them in a horizontal line, flow, which will allow them to flow with their natural size that you created the template in, and best fit, which will fit the template instances within the bounds of the template repeater component as best it can.

**[02:14]** [02:14]
                                    I typically like to use flow because it keeps the original size of my template intact, and then repeats it as many times as necessary. If I had too many instances to display or the template repeater was not large enough, then flow mode will offer a scroll bar in those cases. Now, if we take a look at the instances of the motor that are being repeated within the template repeater component, you'll notice they're all looking at motor one because that's the default value of my parameter motor number within my template. Now, it is possible to pass a parameter value into a template using the template repeater. While the repeat behavior is set to count, it's only possible to pass in a single parameter value into the template instances. And it's based off of the index parameter name property. This property needs to be set to the name of the parameter within your template.

**[03:06]** [03:06]
                                    So in my case, the name of my parameter is motor number. So if I set this property to motor number, you'll see that I actually get some different instances of my motor within the template repeater. Now, you may notice that one of my motors here isn't quite working, motor zero. You'll notice if we look at my motor tags, I actually don't have a motor zero. And so this motor is not finding the corresponding tags to show any values. Now, the reason why I have a motor zero being displayed in my template repeater is because in repeat behavior of count, when we pass a parameter in, we always start with a parameter value of zero and go up to one less than your repeat count. So because I have a repeat count of five, I actually pass in a value of zero through four respectively, into the motor number parameter in my template.

**[04:06]** [04:06]
                                    Because I don't have a motor zero, this isn't ideal. But luckily for us, there is another way that the template repeater repeats templates and passes in parameters. If we go back into our property list and change that repeat behavior property to dataset instead, you'll first notice that all of our template instances disappear. This is because the instances within the template repeater are no longer based off of the repeat count property. So even though this was set to five, it's not going to display five templates anymore. Instead, the template repeater's behavior is based off of the template parameters property. Now, you'll notice the template parameters property is a dataset. Let's go ahead and open up our dataset viewer. We currently have no rows or columns. The way this dataset works is that new column that we add needs to correspond to one of the parameters within our template.

**[05:05]** [05:05]
                                    So if we have three parameters that the template is expecting, then we would add three columns here. Each column needs to have the same name as the name of the parameter within the template, and it needs to be the same data type. Now, since my template only has one parameter, I'm only going to need one column. So I'll go ahead and add a new column. Again, it needs to have the same name, so I'll call it motor number, and I'll select a data type of integer before adding that column. Each row corresponds to an instance of the template that will get displayed within the template repeater. So if I add three rows here and hit okay, I get three instances of the template displayed within the repeater. Going back into the dataset for template parameters, each value in the row, also corresponds to the parameter value that gets passed into the template.

**[06:04]** [06:04]
                                    So if I have values here of two, three and six, and hit okay, you'll notice that now these instances are looking at motors two, three, and six. So if we wanted to display more template instances within our repeater, within the repeat behavior of dataset, all we need to do is go back into that dataset and add some new rows and give them some values. One, we'll say four and eight. Now, there's something important to remember when you pass parameter values in using a template repeater, and it's that the template repeater will really only work with templates that use standard types of parameters. So regardless of what repeat behavior you use on your template repeater, you cannot use a UDT data type on your template. So with most templates, template repeaters can be a great way to really easily display a lot of instances of a template on a screen very quickly.

</details>

---

### 65. Template Canvas Video at Inductive University

:::tip Video Link
Watch the video: [Template Canvas Video at Inductive University](https://inductiveuniversity.com/videos/template-canvas/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to take a look at the Template Canvas. The Template Canvas is similar to the Template Repeater in that it allows you to generate multiple instances of a template. However, it does offer some additional features. Most notably the ability to display multiple instances of multiple different templates. Here in myDESIGNER, I have two templates to work with. I have a numeric display template, which just has a numeric label, and a display num template parameter that the numeric label is bound to. I also have a text display template, which has a label component as well as a display text parameter that the label is bound to. The value of these parameters, determine what value the instances will show. So, I'll head back to my window and we'll drop a Template Canvas component onto it.

**[01:06]** [01:06]
                                    Now there's two ways to get template instances inside the Template Canvas. The first is to use the Template Canvas customizer. If you right, click on the Template Canvas, go down to customizers, Template Canvas Customizer, you'll see the Template Canvas Customizer window appear. Here, we can add a new template instance and specify some of its properties. First, I can give it a name. I'll call it, test 1. There is this Z index property that will determine the Z order of the instances within the canvas. Instances with a lower number, will sit in front of instances with higher numbers. Instances with the same Z index value, will use the order that they are in the Canvas to determine which one is on top. If left blank, the instance will automatically be assigned a Z index of zero.

**[02:03]** [02:03]
                                    We can then specify which template to use. So I'll use text display. You'll see when I did that, the parameter section down here appeared, and it lists our display text parameter as well as any other template parameters that the template has. I will go ahead and just type in hello as my parameter. Finally, there are these two different positioning options. I'll talk about absolute first for the display text template. This allows you to specify the X and Y coordinates of the template instance, as well as its width and height inside the Canvas. It's important to note that the X and Y positions are relative to the Canvas not the window. And they correspond to the upper left-hand corner of the template. So I'll say my X is zero, Y is zero. I'll give my template a width of 100 and a height of 50. Now, if I click add, it'll give me a little preview here without filling in the display text parameter.

**[03:07]** [03:07]
                                    But if I go ahead and click OK, we can see it up here in my Template Canvas. Let's go ahead and add an instance of my other template. I'm going to right click and go back to that customizer. I'll call this test 2, and we'll use the numeric display template this time. I'll give the display num parameter, a value of 50, and then this time I'm going to use the layout positioning. I'll click on the little radio button there to switch to layout positioning. Layout positioning uses something called MigLayout. MigLayout is a layout manager used in Java Swing. It can easily determine the layout of components or in this case, template instances within a container. Now I'm not gonna talk too much about MigLayout, but there are a lot of resources online that describe all of the options you can use. I'm going to paste in an example here.

**[04:04]** [04:04]
                                    Gaptop means I wanna gap between the current row where this instance I'm going to create is, and the row above it, where my previous instance is, and I'm specifying a hundred pixels. Dock west means dock this to the west side of the Canvas, and H 50% or height 50% here is actually a dynamic height meaning that it will change depending on the templates that are within the Canvas. I'll go ahead and click add to see the preview, and then we can see it within our Template Canvas. So we can see there's a gap between the top of the first template and the top of my new template, that's exactly a hundred pixels. The new template is docked to the west hand side, and its height is exactly half of the entire workspace that's being used within the Canvas, a hundred pixels out of the total 200. Now I did mention there's a second way to add template instances to the Template Canvas component.

**[05:07]** [05:07]
                                    If you take a look in the property editor under data, there's this templates property here. If you look at the dataset viewer, you can see that both of our template instances are listed here. So when we add a new instance using the customizer, all we're really doing is adding a new row to this dataset, as well as specifying which position style the instance should use. We can see our test 1 instance, which is the text display template is using X, Y width and height columns, whereas the test two instance, which is our numeric display template is using this layout column but it's ignoring the X, Y width and height columns. You can also see that there's a column that holds the Z index, as well as a parameters column that lists all of the template parameters being passed into that particular instance in the form of a dictionary. Lastly, I want to mention the layout constraints property on the Template Canvas.

**[06:06]** [06:06]
                                    Now the values listed here are MigLayout values, and this allows you to apply some sort of constraint or properties to the entire container itself. Now, again, if you're curious to learn more about MigLayout, there's plenty of documentation online. One resource I'm pretty fond of, is this MigLayout cheat sheet. It's at miglayout.com/cheatsheet.html. If I scroll down here just a little bit, we can take a quick look and you can see there's plenty of documentation on the constraints, their descriptions, and then examples on how to use them.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
