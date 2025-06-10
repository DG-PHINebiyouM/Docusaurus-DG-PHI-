---
sidebar_position: 15
---

# Scripting In Ignition - Video Transcripts

This page contains transcripts from the scripting-in-ignition video course.

## Overview

These transcripts are automatically generated from the [scripting-in-ignition Course](https://inductiveuniversity.com/courses/ignition/scripting-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 4:12:32 PM
Source URL: https://inductiveuniversity.com/courses/ignition/scripting-in-ignition/8.1
:::

## Video Transcripts

### 1. Basic Python - Variables and Comments Video at Inductive University

:::tip Video Link
Watch the video: [Basic Python - Variables and Comments Video at Inductive University](https://inductiveuniversity.com/videos/basic-python---variables-and-comments/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, I'd like to go over the basics of the Python scripting language, so that you can get an idea of how you can use it within Ignition. As you can see, I'm using the script console to go over some code that I've already written. The first thing you'll notice is that each of the lines of code here have a pound symbol at the front. These are called comments. Comments act like little messages within your code, they don't affect the code's outcome but they do provide a way of reminding either yourself or someone else how this code works. To add a comment to your code simple place the pound sign at the front of the line that you want to be a comment, like these first two lines here. You can use comments throughout all of your code as many times as you would like. You can also comment and uncomment multiple lines by pressing Control + forward slash, you'll notice when I do it, it removes the pound signs at the front of each line, pressing Control + forward slash again adds those pound signs back and makes them a comment again. Next we have variables. Variables allow us to assign a value to particular name. Variable names can be whatever you want. You'll notice on lines five and six, I have variables named X and Y and then I have on line seven a variable called user selection, and on line eight a variable called newVar. In Python you also don't have to declare the data type of the variable. The data type of the variable is determined by whatever value you assign to it. So in this case my variable X is an integer because I'm assigning an integer to it. Variables can also change date type really easily. For example my variable X, if I were to later on assign it a value of 5.5, it now becomes a float. Strings do need to be in quotes but you'll notice on line seven and eight, it doesn't matter which type of quotes I use either single or double quotes. So here on line seven I have a string that says, this is a string within double quotes and on line eight I have also a string in single quotes. Both of these are considered string values. Integer, floats and strings are some of the most basic data types within Python but there are other more complex data types that we'll go over in the next video.

</details>

---

### 2. Basic Python - Lists and Dictionaries Video at Inductive University

:::tip Video Link
Watch the video: [Basic Python - Lists and Dictionaries Video at Inductive University](https://inductiveuniversity.com/videos/basic-python---lists-and-dictionaries/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to be going over some of the more complex Python data types: lists and dictionaries. Lists are simply a comma-separated collection of items within square brackets. You'll notice here on line 15 I've created a variable called "myList" and I've assigned it a list value, which has values 1, 2, and 3 inside of it. To access a value in the list, you simply need to provide the variable name in this case, "myList", and then in square brackets at the end list the index of the object you want. Items in the list are zero-indexed, meaning by asking for the item in the list with index one I'm essentially asking for the second item within the list. I can use the print command to print out this value to the console on the right hand side. So when I hit the execute button down below, you should see that I get a value of 2, because 2 is the item at index location one within my list. If I wanted to I can change the index that I'm looking for to say two and it will now give me the third item in the list, in this case, a value of 3. Lists are simply collections of objects, meaning they don't have to be the same data type. You'll notice on line 18 I have a list with three different values again. However this time the first value is a string, "A", the second value is an integer, 15, and the last value is a float, .78. In addition to basic data types, list objects can be any other object including lists themselves. You'll notice on line 19 I have a final list here. This list also has three items in it. The first item is an integer of value 12, the second item is a list object, and the third item is the value 18. Another important data type is the dictionary. Dictionaries work much like lists do except they allow you to organize the data a little bit better. A Python dictionary is simply a unique list of items each of which has a definition. These item-definition combos are what's known as key-value pairs. Up here on line 26 I've made a dictionary variable. Like a real dictionary, the dictionaries in Python have items, and then each item also has a value. These items and values or keys and values, are separated by colons. Each key-value pairing is then separated by a comma, and then the entire dictionary is encapsulated in curly braces. So in my example here I have a dictionary with three items, or keys: A, B, and C. Each key then has a value. A has a value of 15, B has a value of test, and C has a value of 5.5. Accessing a value within a dictionary works much in the same way that we access the value within the list. Here on line 27 you can see I place the name of my dictionary, and then at the end I've placed square brackets, and within the square brackets, you place the key of the value that you want to access. In this case I've placed B in there, letting the system know that I want to access the value at key B. If I execute this code you'll notice over on the right hand side it gives me a value of test which is the value of the key B. In addition to the basic data types, dictionary values can also be the more complex types, like lists or dictionaries. Take my example on line 29. I have a dictionary here that has two items. The items "jdoe" and "jsmith". The value of each of those items is then a dictionary. Accessing items in the dictionary still works in the same way though. For example, on line 30 I'm trying to access the item within my dictionary called "jsmith". When we print that out, you'll notice it returns the value of "jsmith", which in this case is the entire dictionary. If I wanted to access a specific value within the inner dictionary, I simply need to place another set of square brackets and a new key like I've done on line 31. Here in my new dictionary I'm asking for the value of key "jsmith" and once I have that value I'm then asking for the value at the key age, which in this case is 44. The next video we'll go over some additional data types that may be useful to you.

</details>

---

### 3. Basic Python - Dates, Colors, and JSON Strings Video at Inductive University

:::tip Video Link
Watch the video: [Basic Python - Dates, Colors, and JSON Strings Video at Inductive University](https://inductiveuniversity.com/videos/basic-python-dates-colors-and-json-strings/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Dates are an important datatype that you can manipulate within scripting. While Python has a built-in way of handling date values, we actually find that it's easier to use Ignition's built-in functions to manage these date values within scripting. Typically, you can retrieve a date value from a component on a window but you can also create a date within scripting using one of those built-in functions. In this case I'm using system.date.now to create the current date. I can then print that current date using the print command and executing that script. The first value here corresponds to the current date and time. Other built-in functions allow me to manipulate that date to become a new value that I want. In this example, I'm calling two different functions that both do similar things. The first is system.date.addMinutes, and the second is system.date.addMonths. Both functions expecting date value that I want to manipulate and then more change it by either a positive or negative amount depending on what type of integer I put into the function. For the case of the add minutes function, I've passed at a 15, meaning I want to add 15 minutes to that date value that I passed in. And we can see that corresponds to the output that we got on the right. The second function is been passed value of negative three meaning I want to subtract three months from that date. Which we can see also corresponds to our output on the right. Other functions allows to compare date values which may be little bit easier to use, rather than these standard operators. In this case, I'm using the function system.date.isAfter which checks to see if the first date that I pass in is after the second date that I pass in. In this example right here, I'm trying to see if my current date that I created earlier is after this second date that I'm passing in right here. As you may have guessed, this first date is after the second date, so when I execute the script I get a value of true. A slight change to my script where I can now add ten minutes instead of subtract them and we get the opposite output. Another datatype that you might find useful is a color. Colors are used to change the color of things that you see on the screen. Again, ignition has some built-in functions that make handling colors little bit easier. In this first three examples on lines 56 through 58, we can see three different examples of the system.gui.color function. Which returns a color value from a string value that we passed in. The string value can take many forms. You'll notice in my first example here, I have the string red list in there which is the name of the color that I want to create. I can also pass it a hex code like in my second example here. Or even a string of RGB values like my third example here. In addition to this string values, I can also pass in three integers like I have done here in this fourth example. Even though each one of these examples is passing in a different value for the color, you'll notice when I execute them all of them return the same red color. In addition creating color values within scripting, I can also have the user generated color value, using the system.gui.chooseColor function. This function simply requires that I pass in a starting color. But when this script executes, you'll notice that it actually brings up a color picker. Here, the user can actually select a color and the script will return that value instead. While not necessarily a data type, JSON strings have become increasingly popular. A JSON string is simply formatted in certain way that makes it readily accessible by other systems, whereas different Python specific datatype might not be. Again, ignition has some built-in functions that we can use to help us with JSON. Here on line 71, I have a dictionary. In line 72, I then use the system.util.jsonEncode function to encode that dictionary into a string with JSON formatting. The five simply indicates the level of spacing that I want in that new JSON formatted string. When I execute this code, you'll notice that it takes the dictionary and simply makes it look little bit different. While all of the information seems to be the same, this function is actually done two things. First, it's taken that dictionary and changed it into a string. Second, it's then taken that string and formatted it to look like what you see in the output. This format can then be recognized by other systems outside of ignition, even if they don't use Python. In the next lesson, we're going to take a look at how we can use flow control to determine how our scripts run.

</details>

---

### 4. Basic Python - Flow Control Video at Inductive University

:::tip Video Link
Watch the video: [Basic Python - Flow Control Video at Inductive University](https://inductiveuniversity.com/videos/basic-python---flow-control/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Flow control allows you to determine what you code does by only running certain parts of the code, when certain conditions are met. One of the simplest ways we do this is with an if statement. You may already be familiar with if then, else then logic. Python's if statements work in a similar way. Here on line 86, I have some pseudo code of a simple if statement so we can learn how they work and what their syntax looks like. Python is known for being very human readable, and you can start to see that in the if statements. If the condition is true, then some code runs on line 87, and then it continues on, running more code on line 88. If the condition was not true, then it would actually skip over the code on line 87, and instead go straight to running more code on line 88. Notice that the if statement starts out with the word if, followed by a condition. At the end of the condition, we then need to place a colon, this signifies that what follows will be within our if statement. Then each line of code that is going to be run if the condition is true needs to be indented. To return to running code normally, instead of based on the condition, simply unindent the code like we have done here. Now you can also add an else to your code, like I've done here on line 93. Notice how the else doesn't check a condition, rather its code is run when the if condition is false, so if my condition on line 91 is false it would instead run the code underneath the else on line 94 before running more code on line 95. Finally, you can add multiple conditions to your if statement using the elif, also known as else if, like I have on line 100. The logic works the same as it did before, checking the condition and only running the code if the condition is true. Once it runs some code under one of the conditions, or the else statement, it then moves on to running more code on line 104. You can add as many conditions as you want to a logical if block, by simply adding more elifs. Let's take a look at the example I have down below. I have some simple logic, and two variables, X and Y. If I run the code right now, with Y being greater than X, then the condition on line 112 is true. So it will run that code, skip over the other conditions, and then continuing on at line 118. We can execute the code to double check, and make sure we get the right output. If I were to change one of the values, say making the two variables equal to one another, I can then execute that code again and you'll notice I get a different set of outputs. Another helpful flow control method is the for loop, the for loop allows us to loop through a block of code multiple times, one after another. I have some more pseudo code here, so we can learn how the for loop works. Again, with Python being very human readable, we have for item in list, I want to run some code. Now again, like the if statement, I start out my for loop with the word for. Next, item is simply the name of the variable that we want to assign to each value in the list, the variable name can be anything and can be used within the for loop script to help change the script in subtle ways with each iteration. Next comes the in keyword, followed by our list, and then at the end we place a colon to signify that everything underneath and indented is going to be run as part of the for loop. Let's take a look at this in action. Here on line 130, I have a for loop that is looping through my list with values four, five, and six, notice how the item variable I have is just called var. So the first time var is going to have a value of four, because that's the first value in my list. It's then going to get printed, because that's what my for loop is doing. Let's try executing that line of code. You'll see that it starts out printing a value of four, and then continues on with the value five, and then finishes up with six. Sometimes you might not have a list but still want to run a bit of code multiple times. We can still use a for loop and also use Python's built-in range function, which will build a list for you. Here in this example, I'm using the range function to build a list that has five items in it, because I want to run through this bit of code five times. We can try executing this code, and you'll notice I get my output printed five times. There are two things to note here. First, you don't have to use that variable within your loop script. Second, it's really easy to change how many times this script loops through, by changing the value within the range function. The last thing that I want to take a look at here is user defined functions. User defined functions allow you to define some bit of code with a function name, and then run that bit of code later by calling the name of the function. You can think of them like a template within a script. Functions are defined using the def keyword, and then the name of the function. In my case, I've made a function here called myFunc. Parameters can also be placed within parenthesis to signify that a value is going to be passed into this function, and the function can then use that value in some way. Just like with our flow control, we finish off the line with a colon, and then every line of code that lies within the function needs to be indented underneath it. Here, my function definition simple takes that variable, adds five to it, and then prints it out. You can see down below, I am then calling my function twice. First, passing in a value of five. And then again, passing in a value of ten. You'll notice when I execute this code I get the two different values outputted. Functions and flow control are very useful tools in any scripts, and will be very useful when we tackle data sets in the next lesson.

</details>

---

### 5. Working with Datasets Video at Inductive University

:::tip Video Link
Watch the video: [Working with Datasets Video at Inductive University](https://inductiveuniversity.com/videos/working-with-datasets/8.1)
:::

<details>
<summary>View Transcript (10 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll examine how to manipulate datasets through scripting. There will be many times when manipulating datasets becomes convenient or even necessary, so we'll show examples of how to do that. A dataset is a tabular data structure, much like this one, consisting of rows and columns. It mimics exactly what a SQL select query would return with a fixed number of columns with names and data types or database fields, and any number of rows or database records. Datasets are used heavily by ignition, especially in the vision module. They're commonly used for the information that tables and charts display, and by components to store their configuration information. Two things of note regarding datasets. First, datasets are not native to Python. They are built into ignition for their usefulness in handling database data. You can think of them as lists of lists. Second, datasets are immutable. They can't be changed once created, and aren't editable, but we'll see how to get around this later in this lesson.

**[01:04]** [01:04]
                                    In the example shown here in our designer, this is just a simple table component from the pallet filled with randomized data. Then there are six buttons here, each one backed by a small event script, demonstrating some typical usage of datasets. We can access an event script by right-clicking and selecting its scripting option, but to make this lesson a bit more efficient, we already have those six event scripts open but minimized here in the task bar. We'll refer to each one as we demonstrate each of the button actions. It's worth noting that all of the techniques to be shown would be identical whether we were using data in a table such as this one, data from a SQL database via select query, or getting at the configuration parameters of some component. So for starters, let's select the table component and examine its data parameters. We see it is indeed a dataset with a starting default size of 150 rows and three columns. But suppose we didn't know that, how would we get it size data names and data types programmatically? So now we'll select the preview mode and remain there for the rest of this lesson, and we'll press the show params button, and we see a bunch of data appear.

**[02:13]** [02:13]
                                    In this button script editor, these first few lines will be common to all our examples. So let's go over them just this one time. Event.source is the triggering source for this event or this button, .parent is its root container, and .get component gives us our table of interest. Knowing all this, we can then extract the table data into a standalone data set variable. And with that dataset, we'll just use dot notation along with some available data set functions. So get column count and get row count are how we got the three and the 150. Get column names gave us all of these column names, and get column name one gave us this one particular one, remembering that it's zero-based indexing, and get column types and get column type gives us these data types here.

**[03:06]** [03:06]
                                    And that shows the general pattern we'll be using here. So let's click okay to dismiss and clear the console window. In this next example, let's extract one specific value from the table, using the spinner inputs for the row and column indices. We'll treat those indices as user-facing one based inputs. So these are columns one, two and three as noted, and these rows begin at row one on downward. We'll handle the zero-based indexing needed internally in a moment. Let's start by extracting and printing the one, one element by pressing the show specific button. And there is the expected value. So we will extract the two, two element like so, and there it is. And then the three, three element like so. And you'll notice that the raw element isn't formatted like the table element is. To see how all this is done, let's open the next scripting window.

**[04:02]** [04:02]
                                    And we see that getting the table data is unchanged, that this time we get the column and the row indices from the spinner components, and then we need to offset them by one into zero-based indices. Once we've done all that, we can extract a single value of interest from the dataset by using its get value at function with these zero-based indices, of course. And each time we print the selected dataset cell with a script. Again, we'll click okay to dismiss and clear the console window. In our next example, we'll use the same get value add, except now we wanna see all the data in our table, row by row, then by each column. So we'll need to use looping. If we press the show all button, we see that every cell in the dataset has been printed out, one per line. At the top, we see the three elements of the first row individually, and then so on and so on. To see how this is done, we will just open the next scripting window. And at the bottom, we have two nested for loops.

**[05:03]** [05:03]
                                    First by row, and then by column. Each for loop is implemented using the Python range function, which sets up values from zero up to, but excluding the provided value. That limit value is obtained using the row and column count functions we've already seen. Then on line 11, we simply print one value each time using the get value add function. The only difference now is we do this for all values, not just one. This gives us the long repeating series of int, label, and double values we see output. Again, we'll click okay to dismiss and clear the console window. For the next example, let's look at the numerical averages for these first and third columns. This will again require for looping through all the rows, but we've already seen how that's done. So we'll click on the average button and we see these two average values printed. To see how this is done, let's open the next scripting window. We'll initialize two totals to zero, one int and one double one.

**[06:04]** [06:04]
                                    Then we'll loop over all the rows using get row count as before, and notice how as we increment each total using get value add, we can specify the desired column using either its numerical zero-based index value or its column named string. Finally, we'll compute the averages by dividing by the row counts once more, and we'll format the double column average to have two decimal places to match its column values. Again, we'll click okay to dismiss and clear the console window. For the next example, let's actually modify the dataset of the table by deleting a selected row. In the property editor, we see our starting dataset size is still 150 rows by three columns. So now let's select some random row and click the delete selected button. Each time we do this, we see that the dataset size is in fact going down. And we are in fact altering the size of our dataset by deleting rows.

**[07:05]** [07:05]
                                    To see how this is done, let's open the next scripting window. On line eight, we grabbed the table selected row. Of course, in real life, it'd be good to check that this wasn't minus one and something was actually selected. But for example purposes, we'll keep this really simple. Earlier, we said that datasets are immutable. They can't be changed once created, which is still true. So here on line 11, delete row takes the original dataset in a row number two delete, and then efficiently creates an entirely new dataset with the alteration applied, which we then use on line 14 to update the data for our table component. It's important to note that the original dataset was never changed, we just updated the component itself with a new smaller dataset size. That's what made it appear the original dataset in the table was slowly losing rows. And again, let's click okay to dismiss the scripting window. For the last example, let's consider the opposite of what we just did.

**[08:06]** [08:06]
                                    Let's add rows back to our table. Before we do that, we see that our property editor shows the current dataset size is now 148 rows. So now let's select some other random row, and we'll click the copy selected button twice. Each time we do this, we are now increasing the size of our dataset by copying the selected row into a new row. So we're back at 150 rows, and we've added two more copies of that row. To see how this is done, we'll open the final scripting window. Down to line eight where we got the selected row is identical to before. But now on row 11, we're creating a Python list with three elements in it, once again using get value at to retrieve individual values from the specified row. Once we have this added row copy, we use add row with the existing dataset, the specified row, and the list we just created to create a new dataset, which we then use to update the components data.

**[09:11]** [09:11]
                                    Once again, the original dataset did not change. We've once again updated the tables dataset on line 15 with a new dataset, this time a larger one. So it appears now that the tables dataset is adding rows. So in this lesson, we've shown various aspects of dataset usage and manipulation, retrieving row and column size info, column names and data types, looping through datasets, and updating a table's original dataset by adding or deleting rows.

</details>

---

### 6. Working with PyDatasets Video at Inductive University

:::tip Video Link
Watch the video: [Working with PyDatasets Video at Inductive University](https://inductiveuniversity.com/videos/working-with-pydatasets/8.1)
:::

<details>
<summary>View Transcript (9 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll examine how to manipulate PyDatasets through scripting. PyDatasets are very similar to regular datasets so we'll only emphasize some key differences between the two in this lesson. Datasets are built into ignition for their usefulness in handling data from databases as well as various parameter settings and components. The PyDataset is a wrapper type, more of a well made Python like data structure that can be used to make such datasets even more accessible in Python scripting. The key differences between PyDatasets and datasets have to do with looping, indexing and sizing methods. A general rule of thumb might be, if you're using lots of looping or iteration over something a PyDataset may make your life easier, otherwise you can just stick with a plain old dataset. The example shown here in the designer were already discussed in some detail in a prior lesson using datasets so we won't belabor all the details again here, instead we'll mostly emphasize the differences that arise from using PyDatasets instead.

**[01:07]** [01:07]
                                    Much of what we'll see here will be similar to or the same as last time so we'll assume the viewer has already reviewed that other lesson first. However, in most cases we'll leave the prior code present but just commented out so it's easier to compare and contrast the newer PyDatasets syntax versus the dataset syntax. As a quick summary, this example contains a table of random data stored as a dataset along with six buttons, each of which carry out some typical scripting actions as noted on the buttons. Finally, as in the other lesson the approach taken here will be to first demonstrate each buttons action, then show how it's carried out using scripting. To expedite the demo flow note that we've already got each of the scripting windows opened but minimized down here in the task bar. So, we'll remain in the preview mode for the duration of this lesson. Okay, let's get to it.

**[02:02]** [02:02]
                                    For this first example, we'll consider the show params button. As before when we run it, we see sizing info, column names, and data types displayed down here in the console. Now, if we open the updated script from down here in the task bar, we see one key difference and this will be common to all remaining examples so we'll examine it in detail only for this initial example. Here on line five, we extract the table's data as a dataset just as before but now, line six has been added and this time we convert that dataset into a PyDataset object using system.dataset.twopydataset but everything else about this script remains exactly the same and note that all of the API methods apply identically well to the data object here which is now a PyDataset object and no longer just a dataset. So the column and row counts, the column names and the data types all identical to before.

**[03:06]** [03:06]
                                    So even though now we're working with a PyDataset object, the script has remained nearly identical. For the next example let's consider the show specific button. As before, if we set this to say index three, two, the third column, second row so this value right here, and we run the script we see this selected value displayed down here in the console. So then when we open up the revised script from the task bar, again now we're working with a PyDataset object from line six onward and the spinner indices on these two lines remain the same as before but on this last line, note how much simpler element indexing has become using a PyDataset object. We're just using simple bracketed row column indices as opposed to the original get value add method call we had to use before.

**[04:02]** [04:02]
                                    This is one of the nice things about using PyDatasets, it allows for much simpler element indexing. For the next example, we'll look at the show all button and as in a prior lesson we see all the values printed out one per line. So when we open up the updated script, once again we're now working with a PyDataset object data after line six. But for the nested looping here at the bottom, look how much simpler the syntax has become using PyDatasets. We've got two very simple intuitive statements, line 15, four row in data and line 16 four value in row. Then we can simply print that value by name here on line 18 rather than having to use get value at in the row column indices as we did before on line 12. The syntax becomes much, much simpler using PyDatasets if we are looping. So that again is a nice advantage.

**[05:02]** [05:02]
                                    For the next example we'll look at the average button and again, as in a prior lesson we see the two average values for columns one and three printed out here in the console. When we open up the updated script, once again we're now working with a PyDataset object data after line six, and we initialized the two counters as before one int and one double but this time with a PyDataset object data notice how much simpler that's made the looping. We no longer need to use the range or get value at functions as before, the looping is now done with this one simple statement on line 20, for row in data and the data access has become much simpler. We can now use bracketed index notation into each successive row object when incrementing. And at the end we have replaced the former get row count here on lines 26 and 27 with a much simpler len data on lines 30 and 31.

**[06:11]** [06:11]
                                    For the next example let's consider this delete selected button. So recall from the prior lesson that we could take note of the current size of the dataset bound to this table which is right now 150 rows, then select some random row in the table and click delete, select it a couple times, I'll do that once, twice, three times and see that we have apparently deleted rows from the table and our dataset has in fact reduced down to 147 rows. So when we open up the updated script from the task bar, recall that because datasets are immutable what we had to do was delete a row from the original data to create a new dataset here on line 12, and then update the component with that smaller new dataset here on line 15. Well, we're doing all the same things as before this time, but notice that here on line 12 we're now using a PyDataset object data as interchangeable with the dataset that's really the main difference here, all else after line six is just the same.

**[07:20]** [07:20]
                                    And for the final example we'll take a look at this copy selected button. Again, recall from a prior lesson that we could take note of the updated size of this dataset that's bound to this table which is now 147 rows then select some other random row in the table and click the copy selected button a couple times. I'll do that once, twice, three times, and see we have apparently copied the selected row into the table which we can verify by seeing that we're now back up at 150 rows in the dataset. So when we open the updated script from the task bar, again because datasets are immutable we need to create a new row from the selected row as we're doing on line 15 now and then we add a new row to create a new dataset as we're doing here on line 18 just as before, before we update the component with that augmented dataset here on line 19.

**[08:19]** [08:19]
                                    The main difference now is here on line 15. Notice how much simpler the data access syntax is now. We can index into the PyDataset object data directly now using row and column indices no longer the get value add method as we had to do on line 12 before. And notice online 18 how we can use data as a PyDataset object interchangeably as we used a dataset before. So in this lesson we've seen how a dataset can be transformed into a PyDataset which is like a well made Python data structure. We've also seen how PyDatasets can streamline our scripting code considerably when using looping or indexing into data and how they can often be used interchangeably with datasets.

</details>

---

### 7. Scripting Scope Video at Inductive University

:::tip Video Link
Watch the video: [Scripting Scope Video at Inductive University](https://inductiveuniversity.com/videos/scripting-scope/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Script scope is an important part of scripting in Ignition. The scope of a script is determined by where it is being executed. This is important. As it determines which functions the script is able to run. As well as what the script is able to access. For example, here within my vision window I have placed a button. The button is calling a very simple function. The system.gui.message box function. That simply opens up a message box to the user. If I put my designer into preview mode and then click on my button, the message box appears. This is known as the client scope. And it allows the script to interact with the client and the computer that the client is running on. This differs from the gateway scope. The gateway scope can be found on Tag Event Scripts or Gateway Event Scripts. In the gateway scope, the script executes on the gateway. This means that the script has access to the gateway computer. As well as only being able to run gateway scoped functions. My previous example of the message box function won't work here in the gateway scope. Because there's no interface to display the message box on. When dealing with the new visualization system perspective the scope is a little unique. When running a script in a perspective session the scripts are executed on the gateway. This means that like our gateway scope we don't have access to things like the message box function. However, when running a script in perspective you do have access to some special scripting functions. You can see here that I'm using one of them. System.perspective.refresh. When run inside of a page in a perspective session it will simply refresh the session by telling the web browser to refresh that web page. If I go into my session that I have open now. And I click on that button, you can see that it refreshes the web page. When creating scripts within Ignition, it is important to keep these scopes in mind. As they may effect what you can do within your script.

</details>

---

### 8. Scripting Console Video at Inductive University

:::tip Video Link
Watch the video: [Scripting Console Video at Inductive University](https://inductiveuniversity.com/videos/scripting-console/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll examine the scripting console in the Ignition Designer. Before we dive too deeply into the Python language, we should get familiar with the location where we can run scripts independently of any components, as well as a place we can direct print command outputs to let us see what we're doing as we develop our scripts. Scripts can run in a lot of places, but the script console is only available in the designer, not in a client or anywhere else. It's a tool that allows you to run scripts on demand. How do we get to the script console? We simply go to the tools menu and select the script console option. In our script console, the left pane is a multiline buffer into which we can type our script commands. And the right pane is the interactive interpreter where our script output will be directed. Let's start with a very simple example, a print. A print statement just echoes any text to an output console. Any text strings in Python need to be enclosed within quotation marks.

**[01:03]** [01:03]
                                    You can use either double or single quotes. You just need to be consistent and not mix and match the two styles. Both the starting and ending quotes must match. So we'll simply type print followed by some text inside double quotes. How about the traditional, "Hello World," like so. Then when I click the execute at the bottom, we can see that the Hello World without the quotes is printed. Let's add a second copy of this, only this time with single quotes. So print in single quotes, 'Hello World.' Executing this again, now we see both outputs. This shows us that single quotes are just fine too. And also the scripts can be more than one line. The text isn't executed upon a simple carriage return. The whole left side is executed in its entirety. That's really useful as we incrementally develop larger scripts. It's very important to note that the right side pane here isn't just a console.

**[02:04]** [02:04]
                                    It's actually a live Python terminal. In it we can clear the output display or clear all variables from our workspace. Let's see that with our next examples. For example, here on the left side, we can clear the print statements and now do x = 10, simple assignment statement. We can execute that, of course, but since there's no print statement, nothing shows up on the right. But then we can clear the left side and do print x, then execute, and then we will see the value we assigned to x printed out. Next, suppose we've executed a few times and our output console is getting a bit cluttered. I can click on this clear icon at the upper right. I guess it's supposed to be an eraser and the output display is cleared, but our value for x is still present because if I do print x on the left side, it's still remembers what x was assigned from before. All we've done is cleared the previous output prints, not the underlying data.

**[03:06]** [03:06]
                                    However, if I want to start from scratch completely, I can click over here on the reset button. This actually clears out the variables workspace and restores the interpreter back to its startup state. Now, if I try to print x on the left side, I get this error message because x no longer exists in the workspace. As you can probably imagine, the script console is a great tool to use when learning how to write Python scripts or test them out in the Ignition Designer. However, it's important to keep the proper scope in mind, since that dictates where your output's gonna show up. For example, if we set x back equal to 10 and run these commands again on the left side of the script console, that output will get directed to the right side pane. However, if we've got a designer window open with some component on it, say a button, and that component was running a script with a print statement, that print output would be directed to the designer or perhaps client console, which I could access via the tools, console menu option.

**[04:09]** [04:09]
                                    And it would print down here. And if perhaps we had a tag change script on one of our tags, it was printing out some sort of statement or string, we wouldn't see that output in the output console of the designer or the client. Instead, we'd see that output in the gateway's output console, which in this case would be the wrapper log. So this concept of scope is very important to keep in mind when writing any scripts in Ignition. The type of the script determines the scope as well as where the output will be directed. So in this lesson, we saw the use of the script console to test out Python script commands as we write them. This can be a very useful tool when developing any component or other scripting in the Ignition Designer.

</details>

---

### 9. System Library Video at Inductive University

:::tip Video Link
Watch the video: [System Library Video at Inductive University](https://inductiveuniversity.com/videos/system-library/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take an introductory look at Ignition System Library, which can be used to extend and customize Ignition's core capabilities. Python is used inside of Ignition as its scripting language. Python has many powerful built-in functions, which are grouped into libraries and, collectively, these comprise the system library, which is Ignition scripting API. As you will see, when working with the Ignition designer, oftentimes, some of the most important functions you will need come from this system library. How do we access the functions of the system library? If we're in the designer and access the script editor of some component, as we'll do with this button here, by going to scripting, the action performed event handler, and the script editor, then if we type system, dot, and then control space, then expand this a bit, we'll see this auto-completion pop-up appear. And, in it will be the list of all available sections of the system API as these library folders.

**[01:07]** [01:07]
                                    As you can see, there are many, many different categories of system functions that can do all sorts of things. For example, system.tag has functions for reading and writing tags. System.DB allows you to interact with databases by running sequel queries. System.gooey and system.nav allow you to open, and close, and otherwise manipulate Windows. As you can see, there's a large array of capabilities here for your use. Throughout the rest of these scripting lessons, we're going to be using bits and pieces of the available scripting library, but, certainly, it's too big to cover in any one lesson. As you need to explore the system library in more detail, there are two good ways of doing so. First, you can use the indicated scripting dialogue itself. So, in any script editor, you can type system, dot, then control space, and you can click on any available library such as DB. Then, as you scroll over all the available functions, you'll see the function interface and explanation is given in a secondary pop-up auto-complete on the right.

**[02:10]** [02:10]
                                    A second way that will give even more detail is to use the Ignition user manual itself. So, to open that up, I will go to my task bar where I have it minimized and that'll take me to the homepage of the online user manual. Then, if I scroll down to the appendices and open up the system functions, here, we'll see the documentation for all available system scripting libraries. Just as a quick aside, you won't necessarily see all of these libraries in the scripting dialogue auto complete. If certain ones don't make sense in a particular context, if we select one, say system.DB, then we'll see documentation for all the available database related functions. So, suppose we wanted to learn how to run a database query, we could just select the function system.db.RunQuery, and review its documentation, and even try out some of the provided examples, down here at the bottom.

**[03:14]** [03:14]
                                    It's important to remember that this resource is always here for you as you're developing your scripts. Oftentimes, when you're encountering a new API for the first time, it's helpful to just kind of peruse the different functions available in it to get a clearer sense of what sorts of things are possible. So, to wrap up, we've seen that there's a richly featured system library available for your scripting needs, and two good ways to explore it, or by using the scripting window auto-complete popups, and by browsing through this online user manual.

</details>

---

### 10. Vision Event Scripts Overview Video at Inductive University

:::tip Video Link
Watch the video: [Vision Event Scripts Overview Video at Inductive University](https://inductiveuniversity.com/videos/vision-event-scripts-overview/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll take a look at how scripting and vision components is typically done using component event handlers. Events are things that may happen to a component such as a property changing or the component gaining focus. And an event handler allows you to write a script, to handle how to respond to that event. To access the event handlers on a component, simply right click on the component and go to scripting. Here in the scripting window, we can see a list of the event handlers for this component on the left. The event handlers that a component has, varies depending on the type of component. The event handlers are split up over these different categories and I'll open them up here. With each one responding to a different type of event. The event handlers are usually pretty self-explanatory as to when they fire, but if you select it, they also have an event description down here at the bottom of the window.

**[01:06]** [01:06]
                                    You'll notice I've selected the mouseenter event handler, which fires when the mouse enters the space over the source component. Once you have selected an event handler, you can then add a script that runs when that event fires. To make writing scripts a little bit easier, we have what's called script builders for some common actions that you can use to build the scripts for you. You can navigate between the different builders using these tabs up at the top. Things like navigation actions, setting a tag value, doing a SQL update or setting a property value. All available within these builders. The script editor tab over here on the right, will instead let you write your own scripts. If I take a look at one of the builders here, say set tag value, I can make it so that when the event handler for mouseenter fires, I want to set a particular tag and we'll go to our tag browser over here and navigate down to something maybe Ramp0, let's say, and we want to set that to a particular value.

**[02:19]** [02:19]
                                    Let's say five. Then one of the neat features of script builders is that, I can then navigate over to the script editor tab and the script that the builder has created, will be placed in here. You can then manipulate the script in any way you want providing you with a great tool to get some code started, or to learn more about scripting if you're new to it. For now, I'm going to do something really simple. I'm going to clear out this entire automatically generated script and replace it with a simple print statement, so we can easily see how this event handler works. So just a simple print test for right now. Then I'm going to go ahead and hit okay.

**[03:06]** [03:06]
                                    And in my console, which I can open if needed from the tools menu, I will be able to see the print commands coming from this particular component. Now keep in mind that the scripts only run within the runtime. So to have them execute here in the designer, I need to put my designer into preview mode for the script to actually fire. So now, you can see that when the mouse enters, the components bounce, the script fires, and I print out the word test in the console down below. And I can do this as many times as I feel like it. I mentioned earlier that different components have different event handlers, and there was one component in particular that I wanted to take a look at. So let's first exit preview mode and return to design mode like so. Now, I have here just a standard button and I'm going to go ahead and right click on it and go to scripting on this component.

**[04:07]** [04:07]
                                    The button component has a lot of the events we saw earlier on the text field. But it also has an action performed event. The action performed event fires when the action of the component occurs. In this case, when the button is being pressed. Now if you wanted to have a script fire when the user presses a button, you might initially place the script on an event, like mouse clicked or mouse pressed. While these would work in some instances, it is possible to press a button in ways other than using the mouse. For example, you can tab over to the button using the keyboard and then press it using the space bar. Or type in the mnemonic key for the button that has been set up. In those cases, the mouse events would not fire since the mouse was not involved in any way. The action performed event covers all methods of the button being pressed.

**[05:05]** [05:05]
                                    So it is advisable to use that dealing with buttons. One last thing with these mouse events. I have a text field here that has some scripting already set up on these three events. The mouse clicked, mouse pressed and mouse released events. It simply prints the name of the event that's firing it. And let me close out of this. If I were to test this out, by going back into the preview mode and clicking on the field, you'll notice that I got all three events to fire, mouse pressed, mouse released and mouse clicked. However, the mouse clicked event is special in that it requires a full click. Meaning of press and release in the exact same spot. So if I click again, but this time, move my mouse in between pressing and releasing, you'll notice that the mouse clicked event doesn't fire.

**[06:14]** [06:14]
                                    Only the mouse pressed and the mouse released events got fired. Since slight mouse movement during the click happens often, we actually recommend using a mouse press or release script over a mouse click script when the action performed event is not available. It's important to keep this in mind when deciding on an event to use, as you want to ensure that the script you have created fires at the appropriate time. So in wrapping up, in this lesson we've seen how simple event handler scripts work and how to add them to some common programs situations such as mouse actions and button presses.

</details>

---

### 11. Event Object Video at Inductive University

:::tip Video Link
Watch the video: [Event Object Video at Inductive University](https://inductiveuniversity.com/videos/event-object/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at the event object and how we can put it to use doing component event scripting in the designer. As we probably already know, there are many, many different kinds of components available to us in the designer. We can see a partial list of them here in the component palette on the right. When some action happens to one of them. For example, a button is pressed, mouse clicked, or a key typed, that triggers an event. And we can write an event handler script to respond to that event. Whenever you are doing component event scripting and writing an event handler script to respond to a specific event, there is a special variable available to your script called the event object. Every different kind of event has an event object associated with it, but the event objects for different events contain different kinds of information. How do we know what information is available to our event scripts? Let's take a look at this button component, which is labeled as button text.

**[01:03]** [01:03]
                                    And down here in the property editor has a name of, not unsurprisingly, button name. So we can right click on this button, select the scripting option, select the script editor tab on the right, and take a closer look at its component scripting window. Let's also select the action performed event here in the event handlers pane. The panel here on the lower right, the event object properties will always tell us what variables any event object will have on it. What we can always count on, however, is that any event object always has a variable on it called source, which is just the component itself. So for an action performed event on the button, we can do the following, print event.source, which grabs the source out of the event, the component that fired the event. And then once we have that, we can drill down a bit further and append any desired properties of the button using dot notation.

**[02:04]** [02:04]
                                    So to get the name of the button, let's just depend the following, .name, and let's copy paste all of this to one and two, like so. And if we wanted to get the label text as well, we'll just replace name with .text as so. To see the results of the script, we can go down here and apply our changes, then go to the preview mode in the designer up here. And each time we click this button, we see both the button's name and its labeling text appear down here in the console. Of course, the types of information available in the event object will vary with each specific event type. Let's go back into the scripting window to see some examples of this. So let's go from preview mode back to design mode, then we'll right click on the button again to get back to the scripting window. Then let's take a look at the key events. For example, the key typed event.

**[03:05]** [03:05]
                                    It will have properties such as a key code for the key that was typed, a key char for the key that was typed in case it was a character key, and the key location to differentiate between the left and right, Shift or Control keys, things like that. Similarly in the mouse events, any of the mouse events such as mouse clicked will have things like which button was pressed on the mouse, the x and y coordinates of the mouse when it was pushed. And whether other keys such as Alt or Control or Shift were also held down, things like that. Of particular interest is the property change event. So let's click on that event handler. It's especially important because it demonstrates two key things. The value that was changed, both the before and after values, and the actual property name that was changed. This event object often leads to a common mistake by those more inexperience with scripting.

**[04:07]** [04:07]
                                    For example, let's hit okay to close this window, and let's say we wanna work with a numeric text field. So we'll drag one over onto our window like so, and we might wanna write a script that runs each time the value of the numeric text field changes. So if we go down here and scroll down to its data section, let's say we wanna run in integer mode. So the property value we're interested in is called int value, which we can obtain by hovering over the data label like we're doing right here. Then the typical thought process might be, I wanna write a property change script for when my value changes. So let's open up our script window by right clicking on the component, selecting the property change event, and going to the script editor tab on the right. And there we'll simply print the new value, print event.new value, like so.

**[05:11]** [05:11]
                                    Seems reasonable, right? Well, the reality of this will be very different because when we run this in preview mode, so let's click okay, and go to preview mode. And we start interacting with this component, Backspace and put in another value, for example. We're gonna start seeing lots of strange and unnecessary things displayed in the console down here. There's some long initial object strings, couple of true false values, and multiple data type versions of the same data, apparently. Why does this happen? The reason for all this is that the property change event gets fired for lots of different properties, including things that really have nothing to do with user-facing workings in ignition. Instead it's important to first check if the change comes from a property we want to handle.

**[06:03]** [06:03]
                                    So going back to design mode and going back to our scripting window, we'll do this with an if and our script. So we'll preface the line we had before with the following. If events.property name, equal equal and then double quotes int value. And we'll space over a little bit like that. So now we're looking at the property name of the event. And if it's equal to int value, only then will we print the new value as we did before. So let's click apply to save these changes. Then when we go back to preview mode, and once again we interact with this numerical text box. Just to make it simpler, I'll clear out the console. So let's change this to something else, and change it to something else again.

**[07:05]** [07:05]
                                    So now we see only the changed values with none of the extra earlier stuff. So if you're writing a property change script, without a first-line like this, you know you're probably doing something wrong. So in this lesson, we've seen how to add event scripting to components using an event object, and how to properly trigger them using only the property name of interest.

</details>

---

### 12. Accessing Component Properties Video at Inductive University

:::tip Video Link
Watch the video: [Accessing Component Properties Video at Inductive University](https://inductiveuniversity.com/videos/accessing-component-properties/8.1)
:::

<details>
<summary>View Transcript (10 paragraphs)</summary>

**[00:00]** [00:00]
                                    One important thing to understand when scripting with the component event handlers is how to access properties from other components residing on the same window. In this lesson, we'll show how to navigate a component hierarchy and retrieve component values using scripting. So let's gen up a simple scenario showing all this here in our designer window. So we will drag a button from our palette and we'll drag an input spinner component right underneath it, like so. Note that we've got a couple of extra empty containers down here on the bottom, but we'll circle back around to these later, and finally, we will scroll down a bit to our writeable tags, expand that list, and scroll down to this WriteableInteger one. We'd like to use this button to trigger the read of a value on this spinner component, and then write that value to this WriteableInteger tag, pretty straightforward.

**[01:06]** [01:06]
                                    Let's start with the scripting for our button, so we will right-click on it and go to its scripting option, and then go to its action performed event handler. Now it's worth mentioning that for what we wanna do, we can certainly just use the set tag value builder and be done with it, but here we're trying to learn how to write the script ourselves. So instead we'll move on to the script editor tab on the right. So remember from the prior event object lesson, that event.source is just a pointer back to the source of the event, in this case, the button itself. Next, all components have a property on them also called .parent, which gives you access to the container a component is in. So here event.source.parent is pointing to the parent of the button, or here, the root container. Finally, containers then have a method on them called getcomponent, which takes a string as input and finds the child component you wanna find.

**[02:11]** [02:11]
                                    So event.source.parent.getComponent and in parentheses and double quotes, ("Spinner"), like so, is the child component of the root container which we are after. And that is how we traverse the component hierarchy by going up the tree from the button to the root container and then back down to the spinner like so. So now we can assign this entire expression for the spinner to a variable, so we can just do spinner equals all the stuff we've already got. Well, now this makes it easy to grab the value of the spinner. So now we can just say value = spinner, that entire expression on line one, .intValue, since we can simply use dot notation to pull any property out of any object in Python.

**[03:12]** [03:12]
                                    But wait a minute, how did we know that was the property value name we needed? There are two ways to find the specific scripting name of a property we need. For starters, we need to select the component and the designer to see its properties down here in the property editor. Then we will scroll down to the one we're interested in and here it's gonna be in the data section and it's gonna be this one, Value(Integer). So one way is to hover over it like so, and then this info pop-up appears and there we see that its property scripting name is intValue. Another way of doing the same thing is by selecting any property of interest like so, then clicking on this third property editor icon to show description area, then we can toggle this little information panel at the bottom, which also shows that its true scripting name is intValue, but I'll go ahead and close that up for right now.

**[04:10]** [04:10]
                                    Let's now return to our button scripting window by restoring it from the task bar like so. Now that we have our spinner value in our script, and we know now how to find it, remember that our end goal was to write it to our tag value. So to write to a tag, we can simply do this, system.tag.write, but we need the tag path to be able to do this, which we can get by right-clicking on the tag, going to its copy path, and then back in our scripting window, inside parentheses and double quotes, we will just paste that tag path, close it off, and then the second needed input is the value we wanna write, so simply the variable value. And so all this is how we'd write the value of the spinner to a tag from this button script.

**[05:04]** [05:04]
                                    This all looks good so far. Let's test it out. So we will click apply to save our changes, and then we'll go to the preview mode up here at the top. Then we'll set some value in the spinner. Let's say we'll set it to four and we'll click the button and we get an error. What this is telling us is we don't have the read/write mode set. Fair enough, so we'll close that and go back up here and go to read/write mode. Then let's try this again by clicking on the button, and then if we go down to our tag, we see that the value of the spinner was written to this tag upon the triggering event for the button press. It's worth noting at this point that if you have any custom properties on a component, they can be referenced in the same way, transparently, just like any other natural property. In that case, you'd simply use the name of the custom property instead of intValue back in the button scripting editor. Something we find often trips up newer scripters is how to navigate via scripting amongst multiple levels of containers.

**[06:10]** [06:10]
                                    So let's make some simple hierarchy changes to illustrate this. So we'll return to design mode up here at the top, and now I'll use these two containers from before. The left one is called BC for button container and the right one is named SC for spinner container. So we will relocate the two existing components. I will cut and paste the button into the left BC container, and then I'll cut and paste the spinner into the right SC container like so. So if we expand and look at our hierarchy in the project browser, we'll see that we've got a button inside a container inside the root container, and a spinner inside a container inside the root container, all the same as before, except with one new added container level, but we've also got a new problem now.

**[07:10]** [07:10]
                                    Let's open up our button's scripting option to see it. The script we had before isn't going to work anymore. Remember, event.source is the button, but now its parent is BC and BC doesn't have a child component spinner anymore. What we need to do now is go up one more parent level to the root container, so we will add one more .parent to our script. We can do this because, after all, containers are just special components and all components have a parent property. So now .parent.parent walks us up two levels in the hierarchy to the root container, and similarly, now we need to get components to get back down to the spinner. So what we'll add now is in between here, we will add a .getComponent("SC"), like so, and then its getcomponent leads us back to the spinner component.

**[08:14]** [08:14]
                                    Although this looks correct now, this can be kinda cumbersome to do. Now that we better understand the hierarchy as an alternate shortcut, what we can do to get the value is use the property reference button on the right. It lets us navigate the tree graphically, so we will go down to the spinner component and select the property intvalue, which is what we really wanted all along, and as you can see, it just does all of that work for us and yields the identical result so that we don't get lost as we try to walk up and down the component hierarchy. Let's quickly test out our changes by hitting apply to save our changes, and we'll go back to the preview mode and we'll set the spinner to a new value, maybe eight this time, and we hit the button and we see that our tag is indeed updated across the multiple levels as we expected to the new value, eight, from the spinner.

**[09:17]** [09:17]
                                    So in summary, what we've seen in this lesson is how to navigate a component hierarchy and scripting by using properties like .parent or methods like getcomponent.

</details>

---

### 13. Component Extension Functions Video at Inductive University

:::tip Video Link
Watch the video: [Component Extension Functions Video at Inductive University](https://inductiveuniversity.com/videos/component-extension-functions/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll learn about extension functions for ignition components. What they are, examples of how to use them, and why they can be so useful. An extension function is a specific type of scripting function on a component that is left up to you, the user, to implement. They allow for some more advanced customization of a component via scripting, and as such require a bit better understanding of Python. Extension functions are available on a number of vision components, though not on all of them, the components that do use them, each use them for different purposes. So as an initial example for discussion, let's consider the power table component. So we'll scroll down a bit to the table section, and we'll drag a power table component onto our editor window, and we see that it's empty of data. So just to make this a bit more relevant, let's populate it with some sample data. So in the property editor at the lower left, we will scroll down to the bottom and let's click on test data, to create some sample data.

**[01:11]** [01:11]
                                    That's more like it. So let's get to the extension functions by right-clicking on our power table and going to scripting and double clicking if needed on the extension functions folder, under the extension functions tree here on the left, we see a large list of functions, each such function gives you the proper place to put some scripting for a very specific purpose. Let's for example take a look at the on pop-up trigger method near the bottom. Notice that its starting default state is grayed out. So we'll click enabled up at the top. Let's take notice several things here, for each of these functions, there's already a fair amount of sample code provided. The first line is the prescribed interface, with its inputs predefined, note that the first input will always be self, a reference to the component itself, instead of an event firing, the component itself decides when it needs to be called.

**[02:06]** [02:06]
                                    And also notice that we can't even edit these inputs, which is probably a good thing. In this next section, inside triple quotes, this is just documentation, using what's called a Python doc string, and that's just a standard way of adding documentation to a function. Note that it can't be edited either. You can read what all these functions are about, by reading these doc strings. Here, we can see that the on pop-up trigger is called when the user right-clicks on a table cell. So the general idea with all these extension functions, is that you the user, are responsible for implementing the body of the function, whose interface and description are already defined. Let's see how to put one of these examples scripts to use. So let's select these last lines and we'll click control slash to uncomment them. And here we see that we have a defined function, within this function to create a pop-up message box and that pop-up message box will print the cells value and will use the function, as part of the creation of a pop-up menu item, when a cell is right-clicked, let's try it out.

**[03:16]** [03:16]
                                    Let's click OK to save our changes. We'll go to the preview mode up at the top. And then we'll right-click on the cell, to get the hello menu item and clicking on that, we get a pop-up with a sales value, whatever it may be. So now that we've seen the basics and how to use one, what are the advantages of an extension function? An extension function can save you a big amount of work to achieve the same functionality. Imagine you were trying to piece together a cell handler to do something like we just did from scratch, perhaps by using a mouse handler or something, there would be a massive amount of work needed for example, to translate the mouse coordinates to the coordinates of any one cell. And also you'd have to handle such things such as sorting or rearranging the columns, anything that user might've done.

**[04:05]** [04:05]
                                    There'd be a whole bunch of low level work needed for something as seemingly simple as a pop-up trigger, making it way too hard. So for an extension function, and we'll go back to design mode and the scripting window, an extension functions such as this one, lets the component do all that work for you. And then it calls your implementation at the correct time. You put the implementation in it, but the component decides when to call it, just to give you a little bit more flavor of this or other components that use extension functions for totally different purposes. Let's try out another extension function for this same component. How about configure cell? So first we'll enable the code at the top. Then we'll select and control slash to uncomment the example code and this one we'll just alternate the row colors. So we will apply our changes, and we see that now we've got alternating white and gray rows.

**[05:04]** [05:04]
                                    Don't like that, let's change the white to red and we'll apply our changes once more, and now we see red rose. As we said, other components have extension functions available too, for example, let's hit OK, and let's delete this power table, now that we're done with it. Yes, we can delete that. And let's drag over an easy chart component. So we will drag it over here and then do right-click scripting and we'll click on the configure chart function. And we will see that this allows you to provide extra configuration onto the chart itself. So let's get rid of this one by doing OK and deleting this one. Or maybe we can take a look at the alarm status component. So for that one, maybe we'll search for it and we'll pull one over, and have a look at it. Even though here in the property editor, there's a number of properties, that lets you define, which alarms in your system you wanna display.

**[06:11]** [06:11]
                                    At some point properties never give you the ultimate level of flexibility that scripting can give you. So for the available extension functions, right-click scripting, for example the filter alarm function, will let you have some fine grain control over which alarms are shown. This function will get called for each alarm that the alarm status table pulls out of the gateway and whether or not your script returns true or false, according to whatever criteria you wish to set up, will determine whether or not that alarm is displayed inside the table. So as we've seen, there's really a wide array of purposes that extension functions serve. Just a couple of last things to remember or be aware of, you can't change or even edit the function interface, that's fixed.

**[07:02]** [07:02]
                                    Same thing goes for the doc string fixed, make sure to use the nesting style of the existing code, which should be Tabs not doing this can lead to some little gotchas I've found. And whenever you wanna teach yourself whatever any extension function does, just review it's doc string. These functions are all self-documenting, which is really nice. So to summarize in this lesson we've seen, how extension functions provide us with fine-grain scripting customization for a number of components, how they provide us with a documented interface, and a starter code framework we can customize and how they're used for multiple purposes by the same or different components.

</details>

---

### 14. Component Custom Methods Video at Inductive University

:::tip Video Link
Watch the video: [Component Custom Methods Video at Inductive University](https://inductiveuniversity.com/videos/component-custom-methods/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll learn about custom methods for components. Custom methods are just methods added directly onto components, much like custom properties can also be added to components. To show how to access custom properties, let's simply drag a new label onto our designer window, and then we'll right click on it and go to scripting. And this part is important, we want to double click on the add method and here we wind up in this component scripting window. So we have the beginnings of a new method pre-populated for us. So here, let's turn this into our own custom method. We'll give it our own name, "foo" and one input parameter called "text". And notice how these both got auto-added to the starter script here, so all we're gonna do is something like... print text, we'll just print the input parameter text; just something simple to see that it's working properly. Next, let's link this function to an event.

**[01:04]** [01:04]
                                    So we will go to the mouse events folder and click on mouse clicked, and that takes us to the script editor. And there we can do event.source, which is the component itself, and then if we add .foo and in parentheses and double quotes some text, like the standard, "Hello World" for example; just any text to be printed. So here, the method "foo" now just appears like any other natural Python method of our label object. To try all this out, let's apply our changes, toggle over to the preview mode at the top, and then when we click on the label a few times, we see the specified text written out to the console just as we specified in our script editor. There are a couple reasons why custom methods are pretty handy; one reason is to have a common location for any repeated code.

**[02:05]** [02:05]
                                    For example, suppose you're trying to pop up a context menu, a pop-up menu arising from the right click of a component. It turns out that the right click action is supposed to happen on either a mouse up or mouse down differently, depending on what operating system you're running on. And so, as you'll notice if you read the documentation for system.gui.createpopupmenu, you'll see that it recommends putting any script actions in both the mouse pressed and the mouse released events. Just so you can catch this pop-up trigger boolean, this one right here, in both cases. However, that's really annoying, because you don't wanna have to copy and paste code across both of these methods and you don't wanna have to put that sort of code in a global script library, because it's so local to the component you're working on. So that's a great example of how it would be great to just be able to add a method called "showpopup" like so, and then you just call "showpopup" from both the mouse pressed and the mouse released events; so now there's no duplication of any code needed, it's all in this method right here.

**[03:17]** [03:17]
                                    Templates are another area where custom methods really shine. So imagine you're creating some sort of big, complicated template, like so, and the interior of your template needed to call a function. Well, you could put that function inside of maybe your project scripting library, but the problem with that idea is then you have the logic of your templates spread across multiple areas; you've got the template over here and it's logic someplace else. Then if you try to share it with somebody, they're not going to have the scripting unless you separately export the scripting. So by adding any custom methods to directly under the template, all of the interior components of that template can just call those methods directly from the template itself.

**[04:03]** [04:03]
                                    And you get to really encapsulate all of the logic, both bindings and scripting, all inside of the template master. So to summarize this lesson, we've seen what custom methods are and how they allow you to localize any scripting code, such as perhaps for common event actions or for templates.

</details>

---

### 15. Finding Components on Other Windows Video at Inductive University

:::tip Video Link
Watch the video: [Finding Components on Other Windows Video at Inductive University](https://inductiveuniversity.com/videos/finding-components-on-other-windows/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we're going to cover how to write vision components scripts that can access the properties from components found in other windows. This is particularly useful because you can not bind a components property directly to component properties in other windows. Here, I have a window named window1. I'll go ahead and place a button on it like so. I will then create a new window, let's call it window2. I will place a basic text field component here and with my designer in preview mode, I will type some texts into it. Our goal is to get the button in window1 to read the text from this text field here in window2. The first thing we have to do is grab the window2 object from our button in window1. Let's see what this is going to look like. First, we head to the buttons action performed script handler. And on the script editor, I will use a system function to obtain window2. There are actually a few ways to go about this depending on your application's requirements. But the most direct way is to use the system.gui.getWindow system function. So, I will call my function and assign as returning object to a variable named window. Let's print the variable window and see what we get. Putting the designer in preview mode, I can press my button and I see that my window2 object gets printed out. This is because window2 is open. If I were to close it like so and press my button once more, we will get a value error telling us that window2 is not open. So how do we get around this? For this example, I will simply use Python's exception handling. So we say try to get window2 and print it's window object. Then we cache the value error exception. And in the event of value error exception is thrown, we can just print out to the console a message that says hey, window2 is not open. We can try it out once more. Yap, this is a lot nicer than the ugly error we saw before. Now, I will open window2 back up to continue our example. We have correctly obtained our window2 object from our button in window1. We have also handled the event where window2 is not open. Now, we must configure a script to drill down our window2 object and grab the text fields text property. One thing to realize is that when you get the window object itself, the first thing you need to do to start walking down into the component hierarchy is grab the root container. And that's done simply by accessing the windows root container property. So we can just say window.rootContainer. Then, we have to grab our text field component from the container. So we'll use to get component function passing in our text fields name, which happens to be text field. Finally, once we have drilled down to our text field component, we can simply access its text property by ".text" like this. Let's go ahead and give our console a break from printing and put this text in a message box. I will go system.gui.messageBox. I will pass it in my text fields text property as the first argument and then pass in a title for my message box as the second argument. I will press my button once more in preview mode and I see my text fields text from window2, appear on my message box.

</details>

---

### 16. Navigation Functions Video at Inductive University

:::tip Video Link
Watch the video: [Navigation Functions Video at Inductive University](https://inductiveuniversity.com/videos/navigation-functions/8.1)
:::

<details>
<summary>View Transcript (9 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to examine the scripting functions available to manipulate and navigate between Windows and Vision. For starters, let's examine the project we'll be using. Here, in the designer, I've got three windows opened. This green main window, an orange main window, and a yellow popup window. Each of these windows has two or more buttons on it, which will trigger various underlying navigation script actions between the windows as noted on the button labels. So let's first take a look at a client to see how this project behaves and the underlying scripting which makes it happen. So we'll open this minimized client down here in the task bar, and we will log in as an admin user, like so. Then we see we start out in the green main window, which simply means that the window begins with its start maximized property equal to true. By pressing on the swap to orange button, or the swap to green button, we see we can swap back and forth at will between the green and orange windows.

**[01:09]** [01:09]
                                    And in the windows pull down menu at the upper left, note that we only have one main window open at a time. Then, when we click the open popup from either window, an added yellow popup window appears, and that popup knows exactly who opened it, in this case, green. And, in the pull down, we see that now we really do have two windows open. It added an additional popup window to the list. Then, from this popup window, we can also swap the main window behind it. And by clicking on Close, this popup window can close itself. And again, in the pull down, we see we really are back down to only one open window. Then, from this orange window, we can open the popup window once again, and again the popup knows it was opened by orange this time. This is all done with parameter passing, and we'll see how that's done shortly. Next, let's visually summarize what we've just seen. Here's a state chart, a high level visual summary of all the navigation transitions we just saw between the four possible states.

**[02:10]** [02:10]
                                    So we began in green, then we went back and forth between orange and green alone. And from either window, we could open the popup at the same time. That popup allowed us to swap back and forth between the background main windows, and then either popup could close itself, taking us back to one window alone. Next, let's go back to the designer to see how all of this was implemented in navigation script functions. If we examine the swap to buttons in either the greener orange windows, we'll see that they are actually very straightforward. Here, in the action perform script, we simply call system.nav.swapTo with a full path of the window to swap to. Here, in the green window pop up, it's the orange window, and in the other case, of course it would be the green window. Now, swapping inherently involves two windows, the window you're swapping from and the window you're swapping to, but you'll notice this function only requires the window we're swapping to.

**[03:07]** [03:07]
                                    It doesn't need to know the window we're swapping from. This is by design. Ignition expects most projects to be configured such that there's only ever one main window open at a time. The reason is that having multiple main windows open at once is really just a waste of resources. So if you ever wind up in a situation where you have more than one main window open, you can only see one window at a time anyway, so it's probably a mistake. So swapTo leverages the idea that there's only one main window open at a time. So when you try to swap to another window, it can detect the maximized window it should be swapping from by just looking at the window that's currently open. By contrast, let's consider the popup window, where we have two dedicated buttons to swap between the green and orange main windows. In this case, we use the system.nav.swapWindow function, which now takes two windows as its inputs, the window to swap from and the window to swap to.

**[04:09]** [04:09]
                                    Here, we're swapping from the green window to the orange window. For the orange window, of course, it'd be the opposite order of this. And this might be important for a number of reasons. We might have a dock north header window that's swapping out the main windows beneath it. We might be swapping popup windows. We might have some Wizard type setup that has a sequence of popup windows that need to blend into each other and appear like a seamless sequence of windows. In the end, swapping isn't inherently something that only main windows should do. Any window can swap into another window. All swapping is, is closing one window and opening another one in the exact same position as the original window. By the way, if we recall from the earlier client execution, this popup knows which main window opened it with some labeling text, which just isn't shown yet. But let's see how that's going to be done and how the popup window came to be opened in the first place.

**[05:04]** [05:04]
                                    Here, we're using the navigation builder, and we open and center the specified popup window. And here, note that we're also passing a parameter, called open by, whose value here is green, and in the other window, of course, it would be orange. All this results in the script editor code getting automatically written for us. You can use the navigation builder, but it's not required. You can also write this script by hand for simple actions. Here, we're now using system.nav.openWindow with the specified window to open, and on the next line we center that window, then we make use of the optional parameter passing input. This is in the form of a Python dictionary, where the keys are the names of root container properties on the target window, and the values are the values you'd like to pass for those parameters. Parameter passing is really an important concept for window navigation.

**[06:04]** [06:04]
                                    It's very common to create a parameterized window, where the same window is opened in multiple places throughout your project, but a different context based upon the past in parameters, like so. So here, the value green, the window from which the popup was opened, is passed along to the popup window's root container to its open by custom property down here at the bottom, which is also seen in the custom properties popup of the popup window root container. Now that we have green or orange window name available to consume here on the popup window, it's very easy to display that value, as we'll do on this hidden label. And we'll scroll down, or up rather, to its data section and look at the binding on the text property. And we've got an expression binding, like so. So we've got some labeling text, and this is where we consume that opened by property.

**[07:08]** [07:08]
                                    And all of this is how each popup window can know and display which main window invoked it, or maybe consume that, or any other parameters for other purposes. Finally, closing the popup window, or any other window, is actually very simple. All we need to do is use system.nav.closeWindow and give it the name of the window to be closed. That's it. We've just gone over lots of details. Let's see if we can summarize everything into one place. This is the same state transition diagram as before, except this time adding the functions we just used. All of these methods are found in the system.nav library. As you might imagine from context, O, G, and P stand for the orange, green, and popup windows. To swap between the main windows, we use swapTo and the desired windows name. To open the popup window and pass along a parameter, we used openWindow, the popup window name, and an optional dictionary input.

**[08:11]** [08:11]
                                    To swap between background main windows from the popup, we used swapWindow, along with a from and to windows, and to close the popup window, we simply used closeWindow and the popup name. So in summary, we've now seen how to implement some basic window navigation using methods of the system.nav library. If we ever need to implement some more elaborate navigation system, there are other useful functions available in there to do such things as opening additional instances of a window to have multiple copies, implementing back forward home navigation. There's lots of useful capability available to users of Ignition Navigation Scripting in the system.nav library.

</details>

---

### 17. Message Handlers Video at Inductive University

:::tip Video Link
Watch the video: [Message Handlers Video at Inductive University](https://inductiveuniversity.com/videos/message-handlers/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In Perspective, a message handler is a script that is typically placed on a component, and it can be called from just about anywhere from within the session, using the system.perspective.sendMessage function. To make a message handler, you need to find a component within your view. Right click on that component and go down to the Configure Scripts option. Once here, in the upper left hand corner, you can double click on the Add Handler option to add a new message handler. You then need to give your message handler a name. The name of the message handler is what the system function uses to invoke the message handler. You can also specify listen scopes. Listen scopes are where the message handler should listen for a call to execute from the send message function. This allows the send message function to call message handlers on other views, pages, or anywhere within the session. Finally, down below, you implement your message handler using the Python scripting language. There are two arguments available to you: the self argument, which is a reference to the component that the message handler is located on; and the second is the payload object, which is simply a collection of data that is passed in from the send message function. Now once you've created your message handler, like I mentioned earlier, you invoke the message handler by using the system function system.perspective.sendMessage. You simply need to pass the send message function the name of the message handler that you want to invoke. All message handlers that are listening in the scope that the send message function is run in will then execute. Let's take a look at an example of the message handlers in action. I have here on my buttons onClick event a script action that is running system.perspective.sendMessage, and it's looking for a message handler called refresh. Also on this view are two nearly identical tables. If I take a look at the bottom table, we can see that it has a binding on the data property. It's a query binding, looking at a table called Equipment in my database. I can also see that the query is set to poll at a one second rate, meaning the table will automatically update with new data as it's entered into the database. My other table has a similar binding on the data property, looking at the Equipment table in my database. However, the difference is that this binding is not set to poll, meaning it won't update when new data is inserted into the database. Lastly, this table has a message handler on it. If I take a look at it, it's a message handler called refresh. It simply calls the refresh binding function on the table component. The refresh binding function is a special function available to every component that simply refreshes the binding that you specify. In this case I am calling the refresh binding function on the self object, which is a reference to the table, and I am asking it to refresh the binding on the props.data property. This will tell the query binding to rerun its query and pull in new data. I already have a Perspective session open where we can try this out. Again, I have my two tables and the button that's going to refresh the upper table. I'm now going to insert some new data into my database, and you'll notice that when I do, the lower table immediately updates to show that new data, because its polling is turned on. However, no matter how long we wait, because the upper table is not polling, it's never going to pull in that new data from the database. I can click on my button, which is going to call that refresh message handler on the table, pulling in the new data from the database. Again, the real power of these message handlers is that they can be invoked from anywhere within the session. In theory, I can have a refresh message handler on every component, and so no matter where I am within the session, clicking a button that invokes the refresh message handler will call all instances of that message handler and cause every binding to refresh and pull in new data.

</details>

---

### 18. Component Paths Video at Inductive University

:::tip Video Link
Watch the video: [Component Paths Video at Inductive University](https://inductiveuniversity.com/videos/component-paths/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    When you want to manipulate the property of one component from a script running on a different component, you need to use what's known as component paths. Component paths allow us to trace out a route from my script to the property that we're trying to manipulate so that we can access it in some way. You can see here I have a simple view with some labels, containers and a button. I try to name my containers and labels appropriately but if you look in the Project Browser you can get a better idea as to what my component hierarchy looks like. Now the scripts are on my Button component so I'm going to go ahead and select my Button component and open up the Script Action. Like I said earlier a component path traces a route from my script to the property that I want to manipulate. So we need to have a starting point somewhere. This is why script actions on components have an argument called self which is a reference to the component that's invoking the function. self is typically used as the starting point in any component path and you can see I have done that on a line two of my code: self. Now at this point there are three major functions that we can use to help us build our component path. getSibling, parent and getChild. getSibling allows us to get a component that is on the same level as the component that I'm currently adding my component path. Since my Container Label is in the same level of my component hierarchy as my Button I can simply use the .getSibling and then the name of the component that I want to access, in this case Container Label. Now I'm not quite done with my component path yet. Remember I'm trying to access a property on one of my components. Since properties are grouped into categories I first need to list up a category that I want to access my property from. In this case we can figure out which category our property is in by looking at the Property Editor. Either PROPS, POSITION, CUSTOM or META. I know that my text property of my container label lies in the props category so that is the next part of my component path. Once in the props category, I can then reference my text property so I list out .text to grab that property. Now in this next line of code, I'm trying to access the Root Label component. If you take a look at my component hierarchy we can see that the Root Label component is actually a level above the Button component within my hierarchy. So after calling the self argument I need some way of going up within my component hierarchy. parent like it's name implies goes up one level in the component hierarchy and gives me the component that's parent to the component that I'm currently on. So the parent of my Button component is the Container component so I list out .parent to move to my Container. Container is now a sibling component to my Root Label so I can list out getSibling Root Label to grab my Root Label component and then of course .props.text to grab that text property. The last example that I have here is going down in the hierarchy. I want to try to access the text property on my Inner Container Label but because of lower in the hierarchy I need to use another new function. Again we start out just the same as we have before with a self argument. Next I need to move over to the component that I'm going to drill down into so because my Inner Container Label is within my Inner Container I need to move over to my Inner Container so I call .getSibling Inner Container. getChild like getSibling expects the name of the component we're trying to access. So in this case I can specify .getChild Inner Container Label and that's going to move me down in the hierarchy to my Inner Container Label where I can again list out .props and then .text to grab that text property. To learn more about these and other functions that deal with object reversal and component paths see our user manual on the page Perspective Component Methods.

</details>

---

### 19. Property Change Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Property Change Scripts Video at Inductive University](https://inductiveuniversity.com/videos/property-change-scripts/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Oftentimes, it may be useful to trigger a script based on a particular property change event. Perspective makes it really easy to add scripts to these particular events. To add a property change script to a particular property, you simply need to find the component that you want to add a property change script to, and then find the property that you want to add the property change script to. Right-click on that property, and in the popup menu, go down to Add Change Script. In Perspective, you have the ability to add these property change scripts to any property on any component. In here, we can write a script using the full power of the Python scripting language, as well as any of the arguments that are provided here for us. One thing to keep in mind is that the arguments for previousValue and currentValue are qualified value objects. As qualified values, they have a value quality and a time stamp, so if you're just looking for the value, then you need to make sure you call something like currentValue.value. Let's take a look at this property change script in action. I have here a simple view with a label and a text field, and on the text field's text property, I've placed a property change script. You can see to the right of the property, it's got this little icon that indicates that a property change script is present on the property. If we take a look at the property change script here, you can see that it's just a very simple script that simply writes the current value of the text field to the text property of the label component. I'll go ahead and hit OK, save my changes, and open up my Perspective session. When I enter in new text into the text field, the property change script fires immediately after every change, and writes to the label accordingly.

</details>

---

### 20. Tag Event Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Tag Event Scripts Video at Inductive University](https://inductiveuniversity.com/videos/tag-event-scripts/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In ignition sometimes we might want to configure some custom functionality when a tag changes in some way. Ignition offers many built-in ways of handling changes in tag values from alarming to transaction groups to tag history. But when nothing does quite what we need, we can configure a script on a tag that will run under certain conditions. These are known as tag event scripts, which are similar to many event handlers you would find on different components. So if I edit this total time active tag, for example, we can click into the scripting category where we see five events that can trigger a script. We can trigger a script when the value of a tag or the tag's quality changes using the value events. Below this, we have alarm events that trigger whenever an alarm reaches a new state. This could be active, cleared, or acknowledged. Let's close out of this editor and take a look at my window. Here we have a few things going on. I have this motor running with its temperature displayed.

**[01:04]** [01:04]
                                    Below this I have an alarm status table for an alarm set on the motor temperature tag. The alarm goes active when the motor's temperature rises over 100 degrees and the alarm will clear when it goes below that set point. What I'd like to do is use the alarms data to calculate the amount of time the alarm was active. Let's make use of the alarm event scripts on the motor temperature tag by first editing it and then going into the scripting category. We'll make use of an alarm cleared script. The alarm cleared function comes with a number of arguments that we'll see across many of the alarm events. We have the full path to the tag that triggers the alarm. The alarm's name. An object, alarm event that provides many alarm properties, the full path to the alarm, and a missed events flag that indicates when events have been skipped due to an event overflow. There's also this tag argument that gets used in every tag event, not just the alarm events. Let's calculate the total duration of our alarm. To start, I'll create a start time variable and I'll set this to alarm event dot active data dot get timestamp to give us the time our alarm when active.

**[02:11]** [02:11]
                                    Similarly, I'll need an end time variable and I'll set this to alarm event dot cleared data dot get timestamp to give us the time the alarm cleared. We'll calculate our duration by subtracting our start time from our end time. Finally, we will add an if condition here to evaluate when the alarm was active for a significant amount of time. We'll say when the alarm was active for more than five seconds. I'll write the value of our duration to the total time active tag, which already has tag history set up. With our scripts in place, let's click on, okay. We'll watch our motor here and we'll see our motor's temperature rise over 100 degrees. The alarm will remain active for about five seconds, and once it clears, we'll see the total time duration of our alarm be written to the total time active tag.

</details>

---

### 21. Gateway vs. Client Event Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Gateway vs. Client Event Scripts Video at Inductive University](https://inductiveuniversity.com/videos/gateway-vs-client-event-scripts/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll go over the differences between gateway and client event scripts. First of all, let's take a look at where you can find each of them from the designer. I'll look in the project browser for the scripting section. If I expand this, this is where I'll find the gateway events. Conversely, to find client event scripts, I'll find the Vision section and expand that, and they'll be found at client events. If I open client events, you'll see a list of the different client events that will trigger scripts to run. A quick example of this would be a client timer script. Adding a script to this event means that this script will fire based on some timer interval that I set, so if I set up a five second timer script, that script would run every five seconds. However, it's important to know that client event scripts are executing in the clients. That means that each client that opens will have its own timer and subsequent timer scripts that are running. If I were to launch 10 separate clients, that means that there are 10 separate scripts that execute for each client. That also means that if there are no clients running, then this script will not be firing.

**[01:03]** [01:03]
                                    Another note about this is that this is specific to launching Vision projects. As a reminder, Perspective runtimes are referred to as sessions and session event scripts are covered in another lesson. I'll open up gateway event scripts next. Gateway events are similar in concept to client events except they're executed on the gateway. That means if I were to create a gateway timer script that results in one execution of one timer script, regardless of the number of clients, I'll bring back the client events window and you may have noticed that there's no keystroke and menu bar events available for the gateway events. That's because those events don't really make sense in the context of a gateway script. Speaking of context, it's important to keep in mind where these scripts are executing and be aware of scoping. If I add a print statement to a client event script, then the output of this will be sent to the client console. However, if I were to add a print statement to a gateway event script, then the output will be sent to the wrapper logs. The wrapper logs are files on the gateway that are found within the Ignition install directory. Accessing the gateway server may not be easy for everyone, so we'd recommend using one of our system functions system.util.getLogger.

**[02:09]** [02:09]
                                    Instead, this function returns a logger object with whatever name I pass to it. And then I can use one of the available logging levels like info to log a message. When used from the gateway scope, this function will send messages to the diagnostics logs on the gateway webpage, and this is generally much easier to access for users. If a gateway script encounters an error, it will be thrown in the logs, but additionally, you can also visit the Gateway Scripts status page to see the current status and look at any of the error messages. You can find additional information about the getLogger function in the appendix of our user manual where we document every system function. These pages also reference the available scopes for each function, which will be useful when figuring out where certain scripts are called. For example, the system.gui.confirm function is a useful function for displaying a confirmation dialogue box to users. However, when looking at that user manual page, we'll see that it's only available in the Vision Client scope. If I were to try and use the function from a gateway event script, it won't display as an auto complete option and the script would error out.

**[03:09]** [03:09]
                                    So be sure to keep scoping in mind when writing these event scripts. Finally, although gateway event scripts run in the gateway, it's important to remember that these are resources tied to a project. If I were to create a script and disable the project, the script would no longer fire, and if I were to create a backup of this project and export it to another gateway or duplicate it on the same gateway, that could result in the same script firing multiple times on the same trigger or timer and could open up the door to numerous problems. To summarize, gateway event scripts execute on the gateway and fire regardless of the number of clients. Where client event scripts execute in the client for every client that gets launched. Also, keep in mind the scope when writing these scripts. The scope of each function can be found in the appendix of our user manual, and I'll include a link to the system functions page below the video for your reference.

</details>

---

### 22. Startup Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Startup Scripts Video at Inductive University](https://inductiveuniversity.com/videos/startup-scripts/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to perform any desired actions when a vision client starts up by using a client event startup script, The client's startup script runs every time a client is launched, logic is run right after login, so after a user logs in successfully, the startup script will run. We can access this by going to the project menu in our designer, selecting the client events option, and then the first option is startup, which is open here. One very simple demonstration might be to just display a gooey pop-up upon startup. Here on line two, we'll just use system.gooey.message box, to display a message that the client is starting up, like so. For now, we'll just click apply to save any changes and keep this window open. To see this in action, all we need to do is login to our vision client, which I'll bring to the foreground. And then upon any valid login, such as perhaps admin, we'll see the pop-up up here like so.

**[01:12]** [01:12]
                                    But this isn't particularly interesting since all we have right now is a simple empty client with no starting Windows yet. So let's dismiss this pop-up, the logout, minimize our client once again and show something a bit more useful. Another typical usage of the startup might be to open up a custom set of Windows. Maybe the opening Windows should differ based upon who has logged in. For example, you might customize the starting client Window based on a user's role or even by specific usernames. So let's first return to our client's startup Window. And now, let's comment out this first example, like so, and then uncomment this next example by selecting this range and clicking control slash to uncomment. Now, let's imagine we want our users to see different start-up Windows when they log into their shared vision client.

**[02:11]** [02:11]
                                    For example, over on the left in our project browser, in the main Windows, we have an admin start-up Window, and we can see we have various logins already defined based on roles and users already defined in our gateway. We've got an administrator account and operator named Bob, and a visitor role for a guest username. So maybe we'd want our admin to be able to manage all these user accounts. Then here's an operator start-up Window, and we can imagine wanting anyone who's an operator to do operator type things. And finally, here's a visitor start-up Window. We might just want any visitors to feel welcomed, stay safe, and acknowledge reading this disclaimer Window. The actual content of these three Windows is not all that important.

**[03:05]** [03:05]
                                    What matters is that they are all distinct and specific to different user roles. So what we wanna do is login with three different user credentials and see different Windows displayed based upon that user's role, is defined back in our gateway and was also shown in our admin Window here. So all these things can be handled by our start-ups script. Here on line five, we will get the username at login, and then we will use that on the next line to get the users roles, assuming a default user source as the first input here, user roles is a Python string sequence. So in these next lines, in the NFL's, using in, we can check if a certain role is assigned to a user. We'll open up the appropriate Window using system.nav.openwindow, based upon that user's role. Notice that we're checking the highest role first, for example, if a user has all of these roles assigned, we might want them to have the highest role possible by checking that first.

**[04:16]** [04:16]
                                    To see all of this in action, let's once again apply the changes, save here at the upper left to push our changes out to the gateway. And then we'll try logging into our vision client, which I'll bring back up again using three different users. So we're already logged out, and if we login as the admin like so, we'll be greeted by the admin Window, and if we logout and login as Bob, who is an operator, Bob will begin at the operator start-up Window. And if we logout one more time and log back in as the guest who is a visitor, we're then greeted by this startup Window for the visitor.

**[05:17]** [05:17]
                                    The only thing to really be aware of for the client's startup script, is that if you're trying to do something like, logging right back out or retargeting, which means switching over to an entirely new project, you should allow that action to complete first and then perform the specified start-up action using an invoke later. For example, let's say that under certain circumstances, I want it to log the user immediately back out. So, once again, we will comment out the prior example using control/once more. And then we'll uncomment this last example. In here, I'm going to use a system.security.logout, that I will put this system call into a defined function call like so, which I can call later on by name using system.util.invoke later.

**[06:15]** [06:15]
                                    The reason to do this is, because the startup script is run during the client's startup, it's better for the system to logout after all that startup stuff is finished. That's what invoke later does, it runs a function after the current event processing has finished. So to wrap up, in this lesson we've seen a couple different ways of putting a client startup script to practical use.

</details>

---

### 23. Shutdown Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Shutdown Scripts Video at Inductive University](https://inductiveuniversity.com/videos/shutdown-scripts/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    Similar to the startup scripts we've seen previously, we also have client event shutdown scripts available to us. In this lesson, we'll demonstrate how we might perform some desired actions when a vision client is logged out of or otherwise terminated. On the client shutdown side, we actually have two different versions of the shutdown script. Let's see how each of these scripts work. As usual, these are accessed by going to the project menu in our designer and selecting the client events option, and there we see both shutdown options. The regular shutdown variant is run whenever a client is shut down, such as by logging out. Then there is also a shutdown intercept variant which can be used to interact with the user and potentially give an opportunity to intercept an abrupt shutdown. Let's first consider a very simple example for the regular shutdown script. In this example, we'll use the command system.security.getusername to get the username of the current user.

**[01:08]** [01:08]
                                    Then we'll embed that into a larger string, and we'll display it in a gui popup using system.gui.messagebox. Let's click apply to save this change without closing the dialogue, then we'll save our changes to the gateway at the upper left. Then to see the result of the script, we need to simply log out as any user. So I will bring up a minimized vision client from the toolbar. And right now, we can see that we're logged in as the admin. So I'll click log out up here at the upper right. And we see our popup displayed with the name of the current user admin. And when we click, okay, we see that we are in fact now logged out. A bit more interesting is the shutdown intercept script, the other option, which can be used to interact with a user and perhaps intercept a shutdown event.

**[02:04]** [02:04]
                                    For example, if the user clicks the X at the upper right to close the client window or whatever the OS close indicator is for this client, the script can jump in with a chance to intercept that action. So returning to our script window, when this script on the left runs, at the top here, we see there's already a variable and scope called event, similar to client event handlers. Part of it is a Boolean which the user can alter. If a user sets that cancel flag to one, the client won't be able to shut down. The script could ask the user a question or check some sort of condition. And if it decides that now is not a great time to shut the client down, it can simply set this cancel option to one on that event object. To see how this might work, let's, this time, consider our shutdown intercept script. This one's a bit more involved, but here's what it does. Let's assume that only an admin can kill the window off using the X, not operators or any other role.

**[03:05]** [03:05]
                                    Remember that we have all our roles and user accounts defined back over on our gateway. So in line two, we'll use system.security.getusername to return the current logged in username. Then on line three, we'll use that login, along with the default user source back on our gateway, to return a user object, which is this portion right here. And from that, we'll extract the user's role or roles into user roles. Now we can check whether an administrator is one of that user's roles or not. If they are an admin, they can kill off the window and it will notify the user as such, but any other roles cannot kill the window, as we see on this last else branch. Instead, what we'll do is we'll set event cancel equal to one which will intercept the client shutdown event, like so. In either case, we're going to display a gui popup telling the user what's happening, although in the end, it's up to you whether to do it with such a notification or just silently.

**[04:15]** [04:15]
                                    To see all this working, we need to go back to our vision client. And we need to log in again, first as a non-admin user to see the rejection. So we'll log in as an operator named Bob, and we see that we're logged in as Bob. We'll try to kill the window, and we cannot. We get the expected warning popup that only administrators can do that. So we'll click, okay. Now let's switch user to admin. And we see that we're logged in as the admin. So now, we'll try to kill the window again with the X, and this time we get the notification popup that we are terminating as the administrator, and the notification from the other popup if we still want that.

**[05:14]** [05:14]
                                    Once we click, okay, the whole client window disappears as we originally intended. So in this lesson, we've seen how to put two kinds of shutdown scripts to use, and even potentially intercept an otherwise abrupt client window termination.

</details>

---

### 24. Keystroke Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Keystroke Scripts Video at Inductive University](https://inductiveuniversity.com/videos/keystroke-scripts/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In an Ignition Vision Client, you can have scripts run whenever a certain key combination is entered at the keyboard. In this lesson, we'll demonstrate how to use the client event scripts keystroke handlers to achieve this. To do this, we'll go to the project menu in our designer and select the client events pull down option. Then in the client event scripts popup, we'll select the keystroke option and here by pressing the plus icon at the bottom, we can add any number of keystroke handler combinations we want. We can specify various modifiers, such as shift, control or alt, whether you want your keystroke script to run when the key is pressed, when it's released or when a character is typed and various specific keys such as F1 or any others. Pressed and released are useful for any kind of character whereas typed is only useful for alphanumeric characters and that's going to happen after the key is typed.

**[01:03]** [01:03]
                                    So it's similar to released, except it cannot be used with special keys such as the F keys. So let's set up a couple of simple actions to be taken. How about if we set up shift F8 pressed? And we'll click okay here to get back to the prior screen. And then it will display a popup GUI window. For example, I'll type the initial system.gui and then control space bar to get the auto-complete. And we'll scroll down here to the message box and in parentheses and double quotes, I'll add a message such as shift F8 pressed and then we'll close out the statement like so. And we'll hit apply down here at the bottom which applies the change but leaves this dialogue open.

**[02:03]** [02:03]
                                    And then for one more, we'll click the plus once more, then let's say we type the letter P and click okay once more. And this time we'll display an existing pop up window, test popup. I'll open it here on the left in the project browser and we can see it's just a simple message window like so. Then I'll grab the path to this window by right clicking on it in the project browser on the left, selecting copy path and then we'll restore our keyboard scripts window from the task bar and then we'll use it in the statement as follows, system.nav and control space bar and that'll give me a list of our available methods. So I'll go to open window and again in parentheses and double quotes, this time I'll copy paste the window that we copied and we'll close it out again like so.

**[03:13]** [03:13]
                                    So now that we've got two keystroke scripts set up, this time we'll click okay instead of apply to both apply the changes and dismiss the window, then we'll save our changes to the gateway. And then let's see both of these in action. To see these actions take place, we'll have to open up a vision client. And I conveniently happened to have one minimized in my toolbar, so I'll open it up like so. And when we type P, we see the specified window popup in the client and when we click shift F8, we see this popup GUI dialogue appear. So with simple client event scripts such as these, we can run whatever actions we want to and your Ignition Client will execute the specified script actions upon a particular keystroke combination.

</details>

---

### 25. Timer Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Timer Scripts Video at Inductive University](https://inductiveuniversity.com/videos/timer-scripts/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at timer scripts. Timer scripts execute periodically at some configurable rate and are well suited for repetitive tasks. Timer scripts can be set up in gateway or client events, but I'll focus on client timer scripts for this video. I already have a timer script, so I'll double click it to open up the settings. It's currently disabled, so I'll go ahead and click the checkbox to enable it for testing. The delay setting is the interval for the script, and that along with the delay type determines when the script will be executed. The default is fixed delay, and this means that it will wait for the given delay before executing the script again. This also means that the rate will actually be the time it takes to execute the script plus the delay. If my timer script took 500 milliseconds to execute and the delay was set to 1000 milliseconds, the next script would actually execute one and a half seconds after the previous one started its execution. Fixed rate, on the other hand, will attempt to run the script at the rate relative to the first execution. However, because it doesn't take the execution time of the script into consideration, it is possible that an execution could be missed with a sufficiently long execution time.

**[01:08]** [01:08]
                                    Threading determines which thread this script will run in. When it's set to shared, all other timer scripts on shared will be run in the same thread. This is preferable as it's not creating lots of unnecessary threads and less resources are used. However, if any of the scripts take a long time to run, it could block the other timer tasks that are set to run on the shared thread. Alternatively, setting this to dedicated means that a separate thread will be created specifically for the timer script to use. This would be the preferred option if script executions need to be as consistent as possible, or if this is a long running script. This way, it won't affect any other scripts and they won't affect it. A good general rule for threading would be to place quick executing scripts on shared and longer executing scripts on their own dedicated threads. I'll click Okay to enable the script, and then the script itself is just a simple print statement. I'll make sure my project is saved and open up the client to test it. These print statements will be sent to the client console, which can be found in the diagnostics window.

**[02:04]** [02:04]
                                    Once I open that tab, I'll start seeing my print statements fire at the rate I specified for the timer script. I'll head back to the script and modify it to show what happens when there's an error. Now if I go back to the client console, I'll see the error message. It also tells me that any future messages regarding this error will be thrown as debug messages, so by default, this error won't continue to fill the console logs unless I were to modify that logger's logging levels. If I had any long running scripts, I could also open up the scripts tab here and see those scripts listed. I'd also get the option to terminate them if I wanted. That's an overview of how to configure and troubleshoot client event scripts. As a reminder, these are scripts that execute on every client and only if there are open clients scripts that need to run, regardless of whether a client is open or scripts that might only need to run once, like some sort of database action, might be better suited for gateway event scripts.

</details>

---

### 26. Tag Change Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Tag Change Scripts Video at Inductive University](https://inductiveuniversity.com/videos/tag-change-scripts/8.1)
:::

<details>
<summary>View Transcript (9 paragraphs)</summary>

**[00:00]** [00:00]
                                    Tag change scripts allow tag data changes in your application to trigger the execution of specified script actions. In this lesson, we'll learn how to use tag change scripts with a simple demo example. So, let's set the stage for this with the following. In our Ignition Designer, we've got these three elements: a main window, tag change main, which has a checkbox. And this checkbox writes to this predefined memory tag named open the window, which is a type Boolean, and a popup window named tag change popup with a couple of simple display labels. As you might've guessed already, the idea here will be to check the check box, which has a binding to the tag and updates its value, which we can demonstrate by going into preview mode and checking the check box, and seeing that the tag updates and updating the tag, and seeing that the checkbox updates also.

**[01:07]** [01:07]
                                    So going back to design mode. And then finally, we want the update of this tag to initiate a popup of this popup window. So how do we access tag chain scripts? They're found in the same place as all other client scripts, in the designer project menu, in the client events option, and then here in the tag change option of the client events scripts popup. Mine just happens to be here already since this was the option I was working in when I last saved my project. Just click on tag change here if that's not the case for you. Let's take a closer look at this client tag change scripts dialogue. The first thing we wanna do is create a name script. So we'll click on this plus icon down here at the bottom and give it a name. How about window opener. And note that we can have many such name scripts defined. Of course, we'll leave this one enabled here at the right.

**[02:05]** [02:05]
                                    Next, let's consider which attributes of tag changes we want to trigger our script. We can trigger our script to run if any of these tag attributes change, the tag quality, or the timestamp also, but for now, we'll just use a value change. And we'll unselect these first two and focus on value changes. Next, let's specify which tags will trigger our script to run. In this tag paths pane, we can add multiple tags which will trigger the script, one per line. And when any of these tags change, it will trigger the script to run. So for our example, we'll click on the tag icon at the right, navigate to our tags folder, select our open the window tag, click, okay, and we see the tag of interest in our tag path pane. So whenever there's any change to the value of the open the window tag, the window opener tag change script will be executed.

**[03:08]** [03:08]
                                    Next, let's write the script actions which will take place. When the script runs, it will be given three variables, and we'll print each one of them out. The first one we'll print is called event, and it's a tag change event object. The most important part of it is that it has a tag path property. So in the case where your tag chain script can be triggered by multiple tags, you can check which tag has changed by looking at its event.tag path property, like so. The second one we'll print is the initial change flag, which is zero or one, based on whether or not the script was triggered by subscribing to the tag or not. Whenever you first start up a system and it subscribes to all the tags, it gets an initial change event which says, hey, the tag didn't really change right now, but since you just subscribed, we figured we might wanna let you know what the initial value is.

**[04:15]** [04:15]
                                    Sometimes that's really useful for a tag change script, and sometimes it's not. If you want to consume that initial value, you don't have to worry about this initial change. But if you do want to ignore the initial startup value, you may not wanna run your script if the initial change flag is set to true. It gives you the option to decide for yourself. And finally, we also have the new value variable. New value is itself a qualified variable, which means it contains not only a value, but also a quality and a timestamp. So this variable will tell us what value the tag changed to, and will print it out like so. In our case, new value is the one we really care about because we'll only display our popup window if it's value has become true, since it's bound to our Boolean tag.

**[05:08]** [05:08]
                                    So to check that, we can do something like this. If newvalue.value, and that's all we need, since it itself is a Boolean. So if that's true, we'll open the popup window, like so. system.nav.openwindow, and in parentheses and double quotes, we need the actual full path to the popup window, which we can get by right-clicking on the popup window in the project browser, selecting copy path, and returning to our scripts window, and copy pasting it like so, and we'll terminate the entry. And for bonus points, what we'll do is we'll copy that statement, like so, and we'll change the open window to center window to center it on the screen.

**[06:18]** [06:18]
                                    So let's see our script in action now. We'll first click okay here at the bottom to save our changes. And then at the upper left, we'll save our changes to the gateway. And we'll also need to open a vision client to see our script in action. So I'll open up one I have minimized in my toolbar. And I'll log in as a user. Let's say admin, like so. You'll notice that our window appears on start-up. This is because we had it set that way in the project browser to open on start-up. And we see that our tag currently has a false unchecked value in the tag browser. So we'll click the check box, and we see that the tag's value updated, and we see the popup appear.

**[07:10]** [07:10]
                                    Ta da! But at this point, you might be saying, hey, wait, what about that data we also printed out? To see it, let's open up our console window by selecting help, diagnostics and the console tab. If we scroll up, or down rather, in our console just a little bit, we'll see our data. As a reminder of what all this data means, the first one is the tag which triggered the script to run, in this case, open the window. The second one is the initial value. And this first one means that it's being triggered by the initial subscribe. And the third one is the value, quality and timestamp of the tag. Note that the initial values are one and false. If we click the check box a few more times after closing that popup, we'll see that the value of the tag toggles between false and true, and back to false, as we expect.

**[08:18]** [08:18]
                                    And we see that the initial value remains at zero since it's past the initial subscribe. So with this example, we've seen how to write and use a simple tag change script that gets triggered whenever a specified tag's value changes.

</details>

---

### 27. Menubar Video at Inductive University

:::tip Video Link
Watch the video: [Menubar Video at Inductive University](https://inductiveuniversity.com/videos/menubar/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    The Ignition designer gives you the ability to tailor your Vision applications using custom menus and various enhancements to them. In this lesson, we'll show some examples of custom menus and also demonstrate how to set these up from scratch. Let's first take a look at some custom menus in an existing Vision application. Here, both the command and navigation menus are completely custom, added in the designer. We can see that each one also has some child sub options underneath and as well as some refinements such as icons, keyboard shortcut letters, tool tip text, and accelerator shortcut keys such as F1 or F2. You aren't required to make use of all these features, but they are here for your customization as desired. The command menu options aren't implemented yet, as we can see here, but the navigation ones are and they navigate between the three windows as shown below, or by using the accelerator keys F1, F2, and F3 at the keyboard, as I'm doing now, we can do the same thing.

**[01:21]** [01:21]
                                    Let's next see how all this is done in the designer. In the designer, the menu customizations are accessed by going to the project menu, then the client events option, and finally to the client event scripts menu bar option, which is already selected here. In the menu structure pane here on the left, we can see that all the menu options are represented in a tree structure, each one having its own set of properties and each one potentially running its own script actions here in the scripting pane. For example, here, all we're doing is using system.nav.swapTo to display a specified existing window.

**[02:05]** [02:05]
                                    For each menu element, you can potentially customize it further by adding a small icon, some tool tip text, an accelerator key such as one of the F keys, and the mnemonic character which will appear underlined in the menu option. Again, you aren't required to fill all of these out, they're just here for your applications use if desired. Now that we've seen the basics, let's set up a brand new menu item from scratch and customize it a bit. For starters, let's add a new top level menu item at the same level as the others on the client. So, we will click on the existing menu item command, and let's click add sibling, and we will click on it, give it a new name. How about new menu? And then, while it's still selected, we will add the child.

**[03:06]** [03:06]
                                    And again, let's click on it and give it our own name. How about new child? Like so. And let's add a simple action, maybe just a simple pop-up message. So, system.gui. messagebox, and in parentheses and double quotes, maybe new child action here. We'll close it up like so, and then let's move this parent menu up in the order to the first spot with this up arrow, then we'll click, at the bottom, apply. And in the upper left, we will click save it to the gateway. And then when we go back to our minimized Vision client, we see the new menu in the first spot and new child underneath it.

**[04:06]** [04:06]
                                    And when we select it, we see the message pop up we added, and everything is good. Of course, if we wanted to make our menu nicer, we could also add various customizations as we saw earlier. Let's see how this is done and how it will update our menu. So, for starters, let's dismiss our pop-up and restore a client event scripts dialog, and we'll put it alongside our client like so. Then let's select the new child for some customizations. Let's first add a small icon by clicking on this folder on the right and drilling down into the built-in icons, size 16, perhaps. And we'll just pick one that suits our fancy. How about this light bulb? We'll double-click on it. And we see it up here.

**[05:03]** [05:03]
                                    By the way, we can also use our own icons for this too, if we want to. And let's add some simple tool tip text. How about new child tool tip text? Like so. The next- The difference between an accelerator and an mnemonic is that an accelerator is a key or key combination that can be pressed anywhere in the client to initiate a certain menu items action, whereas a mnemonic provides a keyboard based alternative to navigating a menu, but only when a particular menu is visible, and for us, also using the ALT key. So, let's add the following to the new menu. Let's add a N mnemonic. And to the new child, let's add a W mnemonic since the C is already spoken for for a command.

**[06:01]** [06:01]
                                    And to the new child, let's add a... Oh, I don't know, let's add an F5 accelerator. Then what we'll do is we will apply our changes, then save to the gateway. So to see our changes, let's first bring the client event scripts back to the foreground and let's restore our client to have them side by side, then we can navigate in the client using ALT + N and then ALT + W to show the pop-up. Or dismissing the pop-up, we can do the same thing directly using F5 alone. So using all these options, we can configure our menu structure as much as we'd like to. You might notice a couple other menu options, windows and help.

**[07:01]** [07:01]
                                    These are two standard menus added by the Vision client itself. We can hide the windows menu, but not the help one, or we can hide this menu bar entirely. However, the caveat is that we have to restart our client for such changes to take hold. So in this lesson, we've seen how to customize our Vision client menu bar with added menu items and various other refinements as our user needs dictate.

</details>

---

### 28. Script Messaging Video at Inductive University

:::tip Video Link
Watch the video: [Script Messaging Video at Inductive University](https://inductiveuniversity.com/videos/script-messaging/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how message handlers work. Message handlers allow you to write a script that can then be invoked from another window, project, or gateway. This gives you the ability to send messages between projects or gateways, or even execute code that alters your project. Message handlers can be set up for Vision clients, Perspective sessions, or gateways, but in this video I'll focus on showing client message handlers. I can access client message handlers via the client events window in the project browser. To create a message handler, I'll need to give it a name and then choose between shared, dedicated, or EDT threading. I'll include a link to our user manual below the video if you'd like a refresher on shared and dedicated threading, but client event scripts include the extra EDT option. Picking EDT will run the message handler on the event dispatch thread, which updates the GUI. This is helpful when your message handler will be interacting with the GUI in some way, such as window navigation, getting or setting component properties, or showing message popups. Once it's created, the script can be written to decide what logic is executed when it's invoked. You'll notice that the parameters box above the script tells us about the payload that's passed to this message handler and if you wanna access any specific object in the payload dictionary, it can be accessed with a key for that argument name.

**[01:18]** [01:18]
                                    Then once the script is written, it can be called with one of three functions from the system util library. sendMessage, sendRequest, and sendRequestAsync. I'll provide a link to the appendix of our user manual If you'd like to learn more about these functions. In short though, sendMessage, will only call the message handler, but sendRequest and sendRequestAsync will call the message handlers, but will also expect a return value. It's important that your message handler script returns something if you're gonna use one of those two functions. Because these are client event scripts, the message handlers will be called on all open clients. However, the system functions have optional parameters that allow you to specify users or roles so that you can filter which clients will actually run the scripts. I'll demonstrate a client message handler with two different projects I've created. My first project, test, has a window with a text area and a button.

**[02:05]** [02:05]
                                    The script on the button calls the sendMessage function and passes an argument for the name of the project I'm testing, the name of the message handler I'm trying to call in that project, and then I'm passing it a payload containing the contents of the text area. As a reminder, the payload is a dictionary and I'm calling the key to the text area value "message". Then if I open the message handler project, I'll find the "Message Test" message handler, and this is calling system.gui.messageBox to open up pop-up message with the text area contents, and I'm accessing that via the "message" key of the payload dictionary. So I'll open up my clients, click the button, and test. And then any clients that currently have MessageHandlerProject open, will see the popup and the contents of the text area from the test project. And with that, I was able to send a message and pass information from one project to another.

</details>

---

### 29. Startup and Shutdown Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Startup and Shutdown Scripts Video at Inductive University](https://inductiveuniversity.com/videos/startup-and-shutdown-scripts/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In Perspective, we have the option of configuring scripts that run on a gateway whenever a session starts or ends. These scripts have a variety of use cases. Maybe we want to log an entry in a database, indicating that a session was launched or closed, or maybe we want to pass a value into our newly opened session. To configure a Session Event from the designer, we are going to go into our project browser and find session events under Perspective, and then we're going to double click. And now we can select a Session Event script to configure. So if I wanted to configure an On-Shutdown event, I can click shutdown. And if I wanted to configure an On-Startup event, I could click Startup. The structure of these two events are very similar. Both scripts simply take a session object as a parameter and allow you to configure any script that you like. To see the structure of this session object, I'm going to click cancel and then I'm going to come down and click the gear icon here. And on the right hand side, you can see all of our session's properties.

**[01:04]** [01:04]
                                    All of these properties will be available from the session object. Noticeably, this includes any custom properties we configured. I, for an example, configured a sessionNum property. Now, I have already configure a view that uses this custom property called View. And if I click on my label here, and I drill into the binding of this text property, we can see that I'm referencing my session known property in this expression binding. My goal from here is just to use a Session Startup script to populate the custom property. So that it will be feed through to this view. To do that, I am going to cancel out of this. And I'm going to go back into my Session Events, and I am going to configure a very basic Session Startup script. Session .custom .sessionNum = 5 To see this in action, I am going to click okay and I'm going to save the project. And then I'm going to run a session by clicking on tools. Coming down and clicking launch Perspective and launch Session.

**[02:11]** [02:11]
                                    And as we can see the session started with the parameter value I specified.

</details>

---

### 30. Page Startup Video at Inductive University

:::tip Video Link
Watch the video: [Page Startup Video at Inductive University](https://inductiveuniversity.com/videos/page-startup/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to go over the new perspective session event called page startup. It is located in the session events of perspective page startup. This particular script is fired whenever a new page is opened up in your web browser, either in a new tab or a new window. It can also be fired when a current page is refreshed by reloading the window in your browser. It will not run when navigating to different pages within the same tab. However, it will not run when navigating to different pages within the same window or tab. The event has a couple of arguments available to us. You'll notice we have a page object, as well as page ID and path properties. I have used these properties to create a very simple script, which simply prints them out to the console. It is important to note that to access the properties of the page object, you must use the props keyword first. So page.props.path to access that path property. I have also put together a simple set of views. Two of them are being used for two different pages and simply say this is page one, and this is page two. My third view is being used as a docked view and will provide some ways to navigate. Let's go ahead and launch my session. If I open the console by hitting the F12 key, you can see that my print did work on startup, giving me the page ID of this tab, as well as the path of the current page. If you use the navigation links on the left-hand side here it will actually open up a new tab. And if I again open up my console, I can see that again, my script ran. You will notice that while my page path is the same between the two tabs, my page ID is different, signifying that this is a new page that I have created. This will work regardless of which page I open to. The page path is now my new path, but the page ID is also different from the other pages that I've opened. Lastly, it is important to remember that navigating between pages within the same tab or window will not trigger this script to run. For example, if I switch over to page one within this same tab, you'll notice my script does not run again, regardless of which page I navigate to. I can, however, force the script to run by reloading the page. Now I have a new page path, because I am on page one, but my page ID is the same as it was before.

</details>

---

### 31. Project Scripts Video at Inductive University

:::tip Video Link
Watch the video: [Project Scripts Video at Inductive University](https://inductiveuniversity.com/videos/project-scripts/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to be taking a look at custom built scripting libraries that you can configure as project resources. The end result is going to be something akin to a script template, meaning a chunk of code that you can use repeatedly throughout your project or share with many projects as an inherited resource. So to get us started, I'm going to find my way into the scripting section of the project browser. Expand it. Then, right click on project library. From there, I'll have two options. One is to create a new script, which is basically like making a new custom group of scripting functions or I can select new package, which is effectively just a folder that holds some number of scripts. To keep things simple I'm going to select a new script and then we'll be prompted to name our script. So I'll go ahead and call it message since I'll be using it to show a message in just a second. Now, once we click create script, we'll be given a large empty work area here. And in that work area, we just need to define one or more Python functions.

**[01:06]** [01:06]
                                    So I'll just put one function in here. And the way that I do that is by saying d-e-f and then the name of my functions so maybe something like, sayHello, and then in parentheses we'll put any arguments we want our function to take so maybe I'll do something like name so that will say hello to a specific user based on their name and then I'll close off the line with a colon character. Then on the next line, I'll tab over and now we're ready to specify what this function actually does. So I'll say system dot and then hit control space to open up our interactive menu and say gui and then message box, which is going to open up a little dialogue box for the user. Now I'll have to tell the function what to say. So I'll do a parenthesis and then say hello in quotes plus name, which will incorporate that name parameter we're passing in. And that's it.

**[02:01]** [02:01]
                                    I'm ready to test out my project script. Now system.gui.messageBox is a Vision function. So this project script is really only going to work in Vision, but I do want to emphasize that more generally project scripts can be called throughout the project, including in perspective environments, alarm pipelines reports and so on. That said, I'm going to go into a Vision window with a button on it that I've set up already. And then on that window, I'm going to right click on the button, go to scripting, go into the action performed event handler and click on these script editor tab. And from here, all I need to do to invoke that product script code is give my script a name. So message followed by the function name so say hello and then a name parameter. So how about Jane. Now one final note before we move on here if I had put my script inside of a package, I would need to include that before the script name. So something like mypackage.message.sayHello. The other note here is that if you're running Ignition 7 instead of Ignition 8, you would say project.message.sayHello more on that in a minute.

**[03:12]** [03:12]
                                    So with that, let's go ahead and click okay. Go into preview mode and when we click on the button, it tells us hello Jane, which is great. Now just a final note on how Ignition 7 and Ignition 8 handle project scripts. So in Ignition 7 we have the concept of a shared script, which is a script that can be used across all projects in any gateway scope, like on a tag event script. We phased out shared scripts on Ignition 8 and replaced them with project inheritance meaning that if you want to have shared scripts, you can simply put project scripts in a parent project and inherit from that parent project across your other projects. For more info, check out the project inheritance video. Additionally, if you would like to have project scripts run in a gateway scope, like on a tag, you can find the gateway setting section of the gateway webpage and scroll down until you find the gateway scripting hitter, where you just need to set a project with those gateway scope scripts as the gateway scripting project.

**[04:06]** [04:06]
                                    So that about wraps up our project script system. It's a convenient way to take a script that you repeatedly used throughout your project and configure it in a single easy to find place.

</details>

---

### 32. Third Party Python Modules Video at Inductive University

:::tip Video Link
Watch the video: [Third Party Python Modules Video at Inductive University](https://inductiveuniversity.com/videos/third-party-python-modules/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Sometimes when working with Ignition scripts it can be useful to import Python libraries from outside of Ignition. Ignition allows you to use a wide variety of libraries that come standard with Python too, but it also allows you write and include your own Python libraries. Let's start by looking at how to import a Python library into an Ignition script. So in the designer here I'm going to click on tools and then click on script console. Now I'm going to use the script console for this example, but we import code here in the same way we'd import it anywhere else in Ignition. Importing libraries in Python is pretty straight forward. Let's try importing the random library. This is a built-in Python library for handling random number generation. To import it I simply need to type import random. That's actually all it takes, so now let's try calling a function in random. So let's print random.randint 0,10. This will print a number between zero and 10. So if I click execute we get the number two. I'll just click execute a few more times. We see we're getting different numbers every time. Now Python syntax also allows us to import libraries in a slightly different way. Here I imported the entirety of the random library, but if I wanted to I could instead type from random import randint. Then when I print the number instead of calling random.randint I can simply type randint. This is all out of the box Python functionality and it allows us to use many kinds of useful Python functions that aren't otherwise available. In addition to this we can import our own Python libraries. To do this I'm just going to pull up my file browser here. And I've already taken us to the directory we need to use. Inside your ignition program files directory. So let's go to ignition, we can find user lib, and then we can select pylib and any Python files, that is files with the .py extension, that we put in this folder in the Ignition installation directory will be importable within Ignition scripts. So for instance that's where my random library comes from. It's available because it's from this pylib directory. So that about wraps up importing Python libraries using built-in Python libraries as well as building our own can help streamline and simplify the Ignition development process.

</details>

---

### 33. Reading and Writing Tags Video at Inductive University

:::tip Video Link
Watch the video: [Reading and Writing Tags Video at Inductive University](https://inductiveuniversity.com/videos/reading-and-writing-tags/8.1)
:::

<details>
<summary>View Transcript (9 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to learn how to read from and write to tags in Ignition using component event scripts. Before we get started on that, here are some initial considerations we might wanna ask ourselves. What are the specific tags we wanna read and write? Are there one or many such tags? And do we have all the needed tag paths available to us? What tag read and write mode is to be used? Are we gonna do synchronous or blocking reads and writes, or do we wanna use asynchronous or non-blocking reads and writes? Let's consider a simple example which exercises all of these options. Here in our designer, we've got four buttons representing the four possible read and write cases. And each of these buttons is simply a nice, neat user interface to an underlying action performed event handler script as we'll see in a moment. There are two reads and two writes, two of them blocking, and two of them non-blocking. Next in our tag browser, let's expand the writeable tags, and note that we've set a few of these to non-zero or non empty initial default values.

**[01:13]** [01:13]
                                    These writeable tags just come from the generic simulator of the default ignition OPCUA server, which is really helpful as a source of sample test data. All of these example cases will have a lot in common. So let's look at this first example in some detail, and then the others will be quite similar. For this first example, let's keep this real simple. We're just going to read one tag's known value. We're going to use system.tag.read blocking, which is a synchronous read, which just means the function isn't going to return until the read has actually been issued. Its one input is the desired tag path, which we see a placeholder for here on line two. We can get the needed value in two ways. We can right click on the value of interest and select copy path. But the easier way is simply to use the tag button, then navigate down to the tag of interest like so, it's this writable double one, and we'll click okay to insert it.

**[02:16]** [02:16]
                                    Both of these will give us the same tag path we see here. So on line five, we see the actual read using read blocking. In general, its input will be a list of tag paths. So this is just like a list with just one element. But when you call this, the value you get back is not directly the value of the tag. Rather, it's a list of what are called qualified value objects. So two things to note here. First, we have to index into that list, even if it's only for one element. So that's why we need the zero index here. Second, a qualified value has three different things inside of it, which we have to dereference. So here it has a value which is dot value, and this is the part we're really after, but it also has a quality.

**[03:02]** [03:02]
                                    This is the data quality of whatever tag you read it from. And it has a timestamp. This is the timestamp of when the tag last changed. So to run this, we will click apply to save any changes. Then we'll go to the preview mode up here and click the read tag synchronous button, and let's bring back the scripting window. We see the quality and the value and the timestamp as noted. So remember that it's usually the dot value portion that we're really after. Let's now look at the other examples, which will be variations on the same pattern. For our next example, we're going to do the same thing, but in reverse. Now we wanna write one value to one tag, specifically the second string one down here. So on line two, just as before, we need the full tag path to be written to. Note that it's string two this time.

**[04:02]** [04:02]
                                    As we saw before, we know there's two ways to get this. And on line five, we also need the value to be written. On line eight, we do the actual write using write blocking or a synchronous write. Here we need to input values, the tag to be written to, and the value to be written. And again, note that in the general case, these would be lists of values. So a list of tags and a list of values. To run this, let's go to preview mode up here and click the write tag synchronous button, and bring back our scripting window. We can see that the value world got written to the specified tag. And so that is all that there is to this one. For our next two examples, note that there will be two key differences. First, we'll show how to read and write multiple tags at once, not just one at a time. To do this, all we need to do is use lists of tag paths and values, not just individual ones. This is important from a program performance standpoint. If you need to read from or write to large groups of tags, say 100 tags or so, calling individual reads or writes 100 times in a row is very inefficient because each one needs to communicate separately with a gateway.

**[05:15]** [05:15]
                                    Whereas if you group these into lists and make one single communication, the efficiency goes way up, and thus the performance of your application will go way up. Secondly, our first two examples were synchronous or blocking reads and writes, meaning the functions don't return until they've actually been issued. By contrast, asynchronous or non-blocking reads and writes return immediately, but the actual operation will take place sometime later. Soon afterwards, but we don't know exactly when that will be. So these functions will also need to provide a callback function to take care of these results when available. Beyond this, it's important to take into account whether a value has actually made its way to its final destination. For example, suppose you're writing a value down to a PLC through an OPC server.

**[06:04]** [06:04]
                                    Write blocking will only return once the write has actually been communicated to the OPC server. But it may take some time for a write to get all the way down to the PLC, and for a value to be read back from the PLC, just something to keep in mind. For our next example, we're going to read from multiple tags asynchronously. So on lines eight to 10, we have individual tags of interest, this time grouped together into a list of tags. And for this example, we also need this callback function at the head of the file. Its required one input is a return list of qualified values. And what we'll do is simply loop over that list and print each return value field. So on line 14, we'll call the asynchronous read function, read async. Its first input is what tags are to be read from. And its second input is what to do with those values, ie the name of our function.

**[07:04]** [07:04]
                                    As stated, this will take place at some indefinite time in the future, a fire and forget deal. So if we go to the preview mode and run this example, we see the three tag values that we intended to read back. And for our final example, it's going to be very similar to the prior example, except now we're going to write to multiple tags asynchronously. So on lines 11 to 13, we have the individual tags of interest grouped together into a list of tags. And just for the clear contrast, note that we're writing to the second of each such tag. On line 17, we see the values to be written, also this time in a list. And again, we have a callback function at the head of this file. This time, the required one input is a list of quality codes. And again, we're going to loop over that list. And for now we'll just print out whether or not that quality code is good.

**[08:06]** [08:06]
                                    On line 18, we have the asynchronous write function, write async, and this time it needs three inputs, the tags to write to, the values to be written, and the function which acts upon the return quality codes. Again, this will take place sometime in the indefinite future. So if we go to the preview mode and run the write tags asynchronous example, we see that the three tags were written, and we see that they were all good writes. So in this lesson, we've seen how to read or write tags, either singly or multiply, and to do so either synchronously or asynchronously, or in a blocking or non-blocking manner.

</details>

---

### 34. Exporting Data to CSV Video at Inductive University

:::tip Video Link
Watch the video: [Exporting Data to CSV Video at Inductive University](https://inductiveuniversity.com/videos/exporting-data-to-csv/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll look at how to export a data set to a CSV, a comma-separated values file. This can be very useful for offline processing or visualization of data and fortunately, it doesn't take too much scripting to do, just a couple of lines. So here in the designer, we've got a table with some random data and a button which will trigger the CSV write using an event-handler script. As we can see by scrolling down in the property editor for the table, the data in this table is indeed the dataset with the indicated 150 rows by three column size. So, let's open up the script and let's take a look at it. For starters on line two, we'll extract the data from the table component into a dataset where event.source is the button itself. Dot parent is its root container. Get component leads us back down to the table component and dot data is the desire data itself and by the way, this example would work equally well for any data set that came from anywhere, data sets or data sets, whatever their source, be it a table like here, the system.db.run query database query, or perhaps some component parameters.

**[01:18]** [01:18]
                                    Then let's look at these next three simple statements using various system functions. Line five converts the dataset into a multiline string representing the CSV values using dataset dot two CSV. Line eight prompts for the user for a desired file name with export one dot CSV as an initial suggestion using file dot save file. Then assuming the user didn't hit cancel, which is checked here on line 11. Finally, line 12 writes the CSV data into the specified file name path using file dot right file. Note that each of the previous three functions have other options but we're just using the most simple function forms which do what we need.

**[02:04]** [02:04]
                                    If you wanna see those other options, just see the system functions API in the user manual appendix. Okay, let's run this in preview mode and let's try this out. Here's the file prompt dialogue with the initial export one dot CSV file name suggestion going to my downloads directory and we'll hit save then open up my minimize downloads folder and there is the file. If we open it up, we'll see it's the same table data in multiline CSV format as expected. And we can see that the first three lines of the table match up exactly to the first three lines here. Well, now that we've seen how to write a data set to a CSV file and a couple of simple steps, it turns out we can even do it all in one step. So let's bring back the script editor from the task bar, and then we will uncomment this last line using control slash and then we will comment out these earlier statements leaving the first line enabled of course, like so, and we'll apply all the changes.

**[03:07]** [03:07]
                                    So we can do the same thing in one statement, using data set dot export CSV by providing three inputs. Again, a suggested file name. And this time I had a row flag saying, yeah, we want headers in the file and the data set to export. So if we run the CSV script again and we'll write to a different file export two this time and save it and then open up the downloads folder, we see the second file and opening it up, we see all the same CSV data. All done in one step this time. So to wrap up. In this lesson, we've seen how to export an entire ignition dataset to a CSV file using a script with as little as two lines of Python.

</details>

---

### 35. Retargeting Video at Inductive University

:::tip Video Link
Watch the video: [Retargeting Video at Inductive University](https://inductiveuniversity.com/videos/retargeting/8.1)
:::

<details>
<summary>View Transcript (10 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to discuss and demonstrate the idea of retargeting. Retargeting is really one of the most powerful capabilities of the Vision module, but it's one that a lot of people are not aware of. Retargeting means swapping between running Vision applications, potentially in different gateways on the same running Vision Client. Using retargeting, you can break up your larger application into separate projects by logical grouping on a single gateway, which can be great for maintenance. But it also lets you create a seamless SCADA system across gateways by having clients retarget amongst multiple gateways, even if cross WANs into different facilities. Retargeting is a very powerful capability, but one that's achieved through some fairly simple scripting. So let's dive into it. On this busy desktop, we have two separate Ignition projects side by side, each one a clone of the other.

**[01:04]** [01:04]
                                    Each one is simply displaying a current random tag value to an LED display. The tag values used are shown on these two random double tags. And we can see that each one is distinct. Project A uses double one and Project B uses double two. Then each project has a button allowing us to swap between the executing projects in a client, or in other words, retarget from one project to the other. Let's see this run in a client window and see what it looks like. For starters, we'll go down to our taskbar and restore this minimized client. As you can see, it's going to start out with Project A. Then we'll log in with some user credentials. How about as an admin user? And we can see that we're now in Project A. Then if we click on the retarget button we now find ourselves over in Project B.

**[02:07]** [02:07]
                                    And if we click on the retarget button again we now find ourselves back in Project A. We've now retargeted between the two running projects and we can go back and forth at will now, as we'll show right here. You may have noticed however that we didn't have to log into Project B for the initial retargeting or either project for any subsequent retargeting. That's because projects A and B both share the same user profile in the gateway. The retargeting feature seamlessly forwards our credentials for logging into Project A over to Project B. Of course, if those credentials didn't match or if Project B was using a different authentication profile the retargeting would make you log back in to the target project. Next, let's our attention back to the two designers to see how all of this is done.

**[03:03]** [03:03]
                                    For starters, let's open the scripting windows for each of the buttons, like so. And on line two we can see that simple basic retargeting can be done with one single line of script. We'll use system.util.retarget along with the name of the target window. And obviously, the other one will be very similar with a different window name. Now this works simply because we had a very plain simple scenario. Of course, if we were trying to do something a bit more elaborate, such as retargeting to a project on a different gateway, other optional parameters would come into play. For example, we might need to specify a different gateway address, so we might need to specify an alternate IP address and port number combo. Or we might wanna specify an optional sequence of startup windows. Normally when you retarget to a new project, it will start up the project's standard set of startup windows. But if you give it another list of startup windows as input, those windows will be opened instead.

**[04:03]** [04:03]
                                    More details on these options are given in the user manual, along with some good examples. However, let's next consider one specific enhanced example. The case of passing some arbitrary information over to the target project. For example, let's say that when we retarget to the other project we want to pass along the current LED tag value from this project over to the target project. So for starters in each project, we will begin by disabling the simple starting target retarget example, like so. And we'll enable the parameter passing example. In each case, we're simply highlighting the code of interest and using Control + slash to enable or disable the code of interest. And then we will apply both sets of changes and we will push out the changes out to both running projects on our common gateway in this case.

**[05:09]** [05:09]
                                    So to pass the data over to the other project we'll make use of dictionary key value pairs. Here we have a parameter called TestParam whose value will get set to the current value of LED component as has been extracted on this prior line. And note that also here we have to use positional notation with the optional input params, since this is actually the third possible input per the function's interface. So on this A side, we see how to obtain and pass the desired value on a retarget. The value is going to get transmitted using global scripting variables. So next, let's see how to consume that value on the other side. To do this, we need to add an event script at the window level for system B, not at its root container level, since it has a Vision window open target event.

**[06:11]** [06:11]
                                    We want these steps to be fired upon the first opening of the window upon a retarget, so that's why they are here. I'll move this down outta the way a little bit. So in the Vision window open event script we opened the globals dictionary using system.util.getGlobals, like so. And to avoid any first time startup problems, let's first make sure that there is some global data to work with. Which is why this if on line seven. If we haven't retargeted yet to this application maybe there won't be any global data just yet to drill down into. Next, on line eight, let's also check that there is in fact a global var called TestParam. Assuming that there is, we will index by name to obtain it. Then we'll round it to two decimal places to match the LED display.

**[07:06]** [07:06]
                                    And now we have the past value on hand rounded. Then we need some place to display this data. So in our project browser, that will be the purpose of this label component, which at the moment is invisible to the user because it's not displaying any text on it yet. So next, back on line 13, we'll obtain the component we're after. Here, event.source represents the window which fired this event script. Then, .rootContainer is the container which holds the component we want, which we can get using getComponent and the component name of interest. So now that we have the component name on line 14, we will update its text property using some labeling text and the string equivalent of the numerical global value. So all of this taken together when the window is opened will pull and display the global parameter we sent from Project A over to Project B through the retargeting mechanism.

**[08:13]** [08:13]
                                    So finally, let's see the end result of the parameter passing we've just described. So we will save all our changes, and we'll make sure to push those changes out to the gateway. And let's display the other designer. And then we will restore our client window from the taskbar. And since we've got some project updates available, we'll accept those. So then when we retarget to Project A, when the LED shows 61.46, we see that we've retargeted over to Project B with a value 61.46. And we can go back to the A project when the value is 20.03. And we pass that value back over to the A project side.

**[09:12]** [09:12]
                                    So in this lesson we've seen how simple it is to do a simple retarget from one client application to another. And we've also seen how to pass parameters back and forth between running client applications using retargeting.

</details>

---

### 36. Demonstrating CSV to Database Import Video at Inductive University

:::tip Video Link
Watch the video: [Demonstrating CSV to Database Import Video at Inductive University](https://inductiveuniversity.com/videos/demonstrating-csv-to-database-import/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll discuss the use case of how to import CSV data into a database using Ignition scripting. Our approach will be, define the problem we're trying to solve, demonstrate a solution, then in the following lessons, show step-by-step how that solution is implemented. These lessons compromise a short four-part series. This lesson will define the use case and demonstrate a solution. In the next two lessons, we'll demonstrate the step-by-step creation of two utility scripting functions, then in the final lesson we'll demonstrate how to integrate those functions into a solution and tie all the pieces together. This diagram shows the overall intent of this use case. We have some application whose data can be exported in CSV format, and we'd like to import it into some database. Here we'll use Excel as a general stand-in for some CSV producing application.

**[01:04]** [01:04]
                                    We will assume that a database and a table already exists. However, there's one problem. In a production setting, it may not be possible to directly access that database due to permissions or other security concerns. However, Ignition offers the solution. Since it is already connected to the database using a named database connection, now Ignition provides a pathway to transfer the CSV data into the database. Now we've achieved our ultimate intent, which is to use that database data from some Ignition application using some named database connection. So, the process begins with exporting application data to a CSV file. Then using Ignition, we will insert data into the database via a short script invoked by pressing a button component. The script only needs to know the table name and database connection name. Both are assumed to already exist. The actions of that short script will draw upon resources found in a project library. Two specific functions are present in the project library.

**[02:09]** [02:09]
                                    One to prompt for the CSV file name and read its data into a PyDataset. Then a second one to consume that PyDataset data and insert it into the database. The development of both these scripts will be the subject of the next two lessons in this series. Then the last lesson will show how to tie all the pieces together into a full solution. Then once the data has been inserted into the database, Ignition can interact with it for HMI display, reporting and so forth. At this point, all Ignition needs to know is the pertinent database connection name. The solution which follows assumes the following database prerequisites. First, we need to have a database installed and configured. That database could be MSSQL, MySQL, or any other type of database Ignition supports. For this course, we'll use MSSQL. For more details on database installation, please refer to the videos found in the Inductive University course databases and ignition. The database name we'll use is test, however yours will likely differ. Next, within that database, there should be a database table with its data structure already defined.

**[03:21]** [03:21]
                                    The database table we'll use is products. Again, yours will likely differ. Finally, we'll need to have a database connection already created in Ignition to that database. For more details on creating a database connection, once again, please refer to the videos found in the Inductive University course Databases in Ignition. We will assume a database connection name of db_csv_data, but yours will likely vary. Let's demonstrate what the solution will look like in advance of diving into the details. We have an Excel worksheet with one record and five data fields, and a simple Ignition window with an empty table. We'll start by exporting this worksheet to a CSV file by selecting File, Export, Change File Type, CSV, Save as, We'll save it over an existing file called products.csv, confirm the overwrite, and say, okay, only save the active sheet.

**[04:25]** [04:25]
                                    Then we'll return to the Vision window and make sure that the bidirectional mode is set in the toolbar, switch over to Preview mode, and when we click on the Update DB button and select the created CSV file and open it, some underlying scripting is carried out, which reads the exported CSV data, and inserts it into the database so that it can be displayed in the Ignition table component, which is bound to that database table. Let's repeat that process with one more data record. We will save our changes with a Ctrl S. Then once more, do File, Export, Change File Type, CSV, Save As, save over the existing CSV file, acknowledge the overwrite, acknowledge the active sheet only, and once again, click the Update DB button, select the exported CSV file again.

**[05:36]** [05:36]
                                    The Ignition table component is updated to match our most current CSV file export. So in this lesson, we've defined the use case of importing CSV data into a database using scripting, described an approach to be taken, and demonstrated a working solution for this use case. In the coming lessons, we'll take a closer look at the scripting and Ignition elements needed to implement the details of this solution.

</details>

---

### 37. Reading a CSV File into a PyDataset Video at Inductive University

:::tip Video Link
Watch the video: [Reading a CSV File into a PyDataset Video at Inductive University](https://inductiveuniversity.com/videos/reading-a-csv-file-into-a-pydataset/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to create a new Python function in Ignition to prompt for and read a CSV file into a PyDataset. This function will be an initial step in the larger process of reading CSV data into a database using scripting, as we saw demonstrated in a prior lesson. The ultimate destination for this function will be a reusable project scripting library. This allows for reuse of the code for other purposes. However, we'll use the script console as a development workspace in which to iteratively write and test our code. So let's invoke it by clicking Tools, Script Console. Let's start by defining the needed function interface. We'll call our function read_csv_to_pydataset. It will prompt for a filename internally so it needs no inputs, but all following lines must be tab indented. Let's rough out the general execution flow as comments and add that next. We will prompt for a CSV filename, read its data, transform that data into a dataset, convert the dataset into a PyDataset for easier iteration, and then return the data and do any cleanup. Okay, let's flesh out this outline with the actual code. To read the CSV data, we'll start by prompting for the intended CSV file name. Ignition has a system function which does just that.

**[01:34]** [01:34]
                                    So we'll use it and specify a CSV file type. Then when we have that file path, we'll open it using a Python system function and read it into a file object. Let's back up just a bit. Python has an existing module which handles CSV actions, so let's import that upfront. Then we can read the file object into a reader object.

**[02:09]** [02:09]
                                    Let's remind ourselves of what our CSV data looks like. Our data has an initial header line, so we need to grab this, but exclude it from our data reading. So we'll use another Python system function and read the headers, then move ahead to the next line. Now we'll set up an empty data list, and now we're ready to loop over all rows in the reader object, where we'll append each row of data. And when finished, we're going to create a dataset using data headers and another Ignition system function. This might actually be a good point to spot check what we've written so far. Below this function, let's add a function call to the code above it. And internally, let's print the dataset we've just created. When we execute this, we are prompted for the CSV filename. We'll select the products CSV file, and in the right pane we see we've just read a 2 by 5 dataset, which is just what we expected. Only a few small steps remain.

**[03:14]** [03:14]
                                    Let's convert the created dataset into a PyDataset, which is simply a wrapper which makes looping and indexing on a dataset a bit easier to perform. For this, we'll use another Ignition system function. And lastly, let's close the file, and return the PyDataset we've created. Our script console code looks complete now. So we can remove the internal print statement. Let's relocate the function to a scripting library. We will cut all lines except the last one, and create a new project script called toolbox. Then we'll paste our new function and save it. Then to do a final test of our function, let's return to our Script Console, clear the outputs, and reset the workspace.

**[04:10]** [04:10]
                                    Now we'll need to call the function with a leading toolbox scope, and let's print the PyDataset and its first element using indexing. When we now execute this function, we are once more prompted for the CSV filename, and we return a 2 by 5 PyDataset and its first element that corresponds to our raw CSV file. So to recap this lesson, we've shown the steps to creating a reusable project library script, which prompts for a CSV filename, reads the data into a dataset, and then returns it as a PyDataset for ease of use. This can now be used as a standalone utility function, but we're going to make use of it to create the next needed function.

</details>

---

### 38. Inserting PyDataset Records into a Database Video at Inductive University

:::tip Video Link
Watch the video: [Inserting PyDataset Records into a Database Video at Inductive University](https://inductiveuniversity.com/videos/inserting-pydataset-records-into-a-database/8.1)
:::

<details>
<summary>View Transcript (13 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll demonstrate how to create a new Python function in Ignition to insert the contents of a PyDataset into an existing database table. For our purposes, this PyDataset will be the output of another function created in the prior lesson. This function will be an additional step in the larger process of reading CSV data into a database using scripting as demonstrated in a prior lesson. Since this function involves a database, we'll make use of the Database Query Browser to iteratively develop and test our function. So let's invoke that now by clicking Tools, Database Query Browser. The ultimate destination for our function will be a reusable project scripting library. This allows for reuse of the code in other places. However, we'll use the Script Console as a development workspace to write and test our code. So let's invoke it by clicking Tools, Script Console, and let's also maximize it since we'll be needing some screen space for this function.

**[01:13]** [01:13]
                                    Let's start by defining the function interface. We'll call our function populate_db_table_from_ PyDataset. We'll make our font a bit bigger also. The function inputs assume we know these three things to start with: a PyDataset, the data records we're trying to insert, the destination database table, assumed to already exist, and a database connection name. Next, let's plan out the execution flow. Note that all following lines must be indented. We'll want to clear the table each time, set up a basic query string, And loop over all PyDataset records, and do the inserts. We want to clear the table contents each time so that it tracks the input PyDataset. Also, because the first column primary key must be kept unique and we want to fully update the table, not just append to it.

**[02:19]** [02:19]
                                    Let's create the query statement using Python string formatting syntax to embed the database table input. Then the system library call to execute this statement. Next, let's create the basic insert query, which is central to this function. Here the question marks are data value placeholders, and we'll return to these shortly.

**[03:15]** [03:15]
                                    We'll get our data by looping over the entire PyDataset. Then to execute the query, we'll use another system library function with a query, data, and database connection name. Though this would work, it'd be hugely inefficient, since we are inserting one row at a time over and over. Let's improve upon this basic structure. First, some initial refinements. For starters, let's carve out the placeholders and replace them in the query string. We won't always have exactly 5 parameters, so let's generalize this.

**[04:07]** [04:07]
                                    We can use the bottom of the Script Editor to do some experimenting and testing. The code above it won't execute unless called since it's just a function definition. Let's use our prior function to get some data to work with and find how many data fields we do have. Here is one placeholder. Then here are any number of them. Then to comma separate them, we can use Python's join syntax. and to enclose all that in parentheses. Let's print these to make sure they're correct. Looks good. Since it all works, let's combine these into one compact statement and move this new expression back into our function, as well as the actual count of parameters.

**[05:29]** [05:29]
                                    Then finally, we can remove most of these test expressions at this point. Next, to make the database insertions more efficient, let's aggregate all data and do one insert at the end. First in the query string, add one more level of indirection. In this context, pholders is now no longer the variable, but instead a named argument. Next, ahead of the for loop, define two empty lists to hold data and placeholder arguments. Then inside the loop, for the data, use extend to create one long list, and for the placeholders, inserts are already grouped, so append them. Then move the update query outside and after the loop, and use the aggregate query data in the insert.

**[06:29]** [06:29]
                                    Then finally, update the original query string to use the named argument. This might be a good place to spot test what we have so far. We'll set up the needed two database parameters, but here it should be noted that the database table name should not be allowed to be specified as direct user input text, to help ensure database security. Then call the function above using them.

**[07:10]** [07:10]
                                    When we return to the Database Query Browser, if we select the database connection, double click the products table, and execute the select all query, our script changes seem to run without any issue so far, so let's move on. What we have so far is a bulk insertion of all PyDataset records at once. While this is fine for reasonably sized sets of data. If we try to insert a massive number of records all at once, this might not be desirable or efficient from a database standpoint. So as a final update, let's batch up the inserts into fixed size groupings to allow for user tuning. For example, maybe we want to insert in groups of 10 or a hundred or a thousand at a time. We'll add one more method input for this, and also down below for testing. Next, we need to know how many records we are working with.

**[08:06]** [08:06]
                                    We'll add that alongside the columns count near the beginning. Finally, let's use this as a check to do no inserts if there is no data. We'll add this for all lines after the truncate, but we will clear the table, since we wanted to reflect the state of the input PyDataset. So instead of all records, we'll do them in fixed size batches. So we'll work with specific slices of a PyDataset instead. Let's plan out the updates. We'll add indices for the first N records. Update an earlier comment to reflect N sized batches. Insert those N rows. Advance the indices for the next N records. And finally, address any remaining records.

**[09:09]** [09:09]
                                    So making the noted updates, we'll start with the index bounds of the first insert. We'll add an outer while loop, tab over all contained lines, but not including leftover records. Adjust the actual four looping indices. And advance both indices to the next N records. Finally, we need to handle any leftover records. All we need to do is, advance the max index to the actual number of records. Then simply copy the steps we already have above, and outdent as required. Now we do need to differentiate between versions of the query string.

**[10:11]** [10:11]
                                    The first modified one becomes queryStr1 in two places, and the copied one becomes queryStr2 in two places. Finally, we'll update the last insert to reflect a partial insert. Let's once again spot test what we have created. In particular, let's confirm the batched inserts into the database. If we reopen our CSV file, let's add two more lines. The data can be random, but the primary key, the first field, must be unique, so we can just copy paste these first two lines, and edit only the first two values. We'll save our changes and minimize this window. Then let's add prints of the queryArgs and queryData ahead of each of the inserts.

**[11:17]** [11:17]
                                    If at the bottom we set the maxRecs to 3, we should see one insert of three records and a remainder insert of one record, which is just what we see when we execute. Our function now looks complete. The only remaining step is to relocate it into the project library. So remove the print statements, cut all lines of the function, restore our Designer, open the toolbox project library, paste the function, and save the changes. Then for a final test, we can reopen the Script Console, reset the maxRecs to say maybe 1000, and replace the last function call with its toolbox version.

**[12:24]** [12:24]
                                    And notice it's very easy to script this method now, since we chose input parameter names that align with the function input names. Now we can execute the script, and go back to our Query Browser, rerun the Select All query and inspect the product table contents in the Query Browser against the contents of our CSV file. We've now shown the entire process of creating a reusable utility function, which inserts the contents of an input PyDataset into a database, in user specified insert batches.

</details>

---

### 39. Implementing CSV to Database Import Video at Inductive University

:::tip Video Link
Watch the video: [Implementing CSV to Database Import Video at Inductive University](https://inductiveuniversity.com/videos/implementing-csv-to-database-import/8.1)
:::

<details>
<summary>View Transcript (8 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll show how to implement CSV data import into a database using Ignition scripting. We'll use the two project library scripts developed in prior lessons. Along with two Vision components and some minimal backend configuration and scripting, we'll show how to initiate the import and display of CSV data. Let's review our starting configuration and overall objectives. We have an empty Excel spreadsheet in the products tab. Here Excel is the origin for the CSV data will be importing. No data is defined yet, but the column labels represent the structure of an existing database table. We're trying to move CSV data from here into the database. As for the database, we're starting with a database connection named db_csv_data in our gateway Tt encompasses a destination table named products, with the indicated database fields as defined.

**[01:07]** [01:07]
                                    We've said nothing about the specific type of database used. We are using MSSQL, but it could be MySQL, Oracle, or any other database type Ignition supports. Use of a database connection abstracts away this detail, and makes the solution database independent. Up in the Tools menu, if we invoke the Database Query Browser and specify the db_csv_data database connection, we see the products table. When we double click, we see the database structure corresponding to the Excel worksheet. If we execute the Select All query, we see we're starting from an empty table. Our goal is to populate this table. We have an empty Vision window, where we'll want to display the table data. Finally, our project library script file, toolbox, contains two utility functions we'll use to read the CSV data and insert it into the database.

**[02:11]** [02:11]
                                    We'll just need to create a button script to invoke them. First, let's create a couple records of made up data. Here the first column is the primary key and must be unique, but the other columns can be any random values. Notice that the dates got auto formatted into the expected SQL date format. Let's save this data with a Ctrl-S, then set this file aside. Next, we'll need some way to display our data. In our Component Palette, we'll scroll down a bit, and drag a table component onto our window. We'll reposition it, and resize it to take up most of the window.

**[03:06]** [03:06]
                                    Then we need to bind this table's data to our database, even though it's empty for the moment. So in the Property Editor, we'll scroll down a bit and click on its data binding. Then select the SQL Query binding type. We'll replace this default with a very basic query, SELECT * FROM products. For a more general solution, we might read the table name from some other component, but note that for security purposes, we wouldn't want this to be arbitrary user input text, but instead some list of allowable options, such as a dropdown component. But here we'll keep things very simple. Then we'll specify our database connection, set the polling mode to absolute, and keep the polling rate at 5 seconds and click OK. We are now connected to the underlying database table, so we can at least see the table field names. Next, we need a way to initiate the data read and insert. Let's use a button.

**[04:09]** [04:09]
                                    We'll scroll back up in the palette a bit, and drag a button onto the window, under our table. We'll give it a meaningful text label, make it a bit more readable, and resize and reposition it. Next, we need to define the actions taken when this button is pressed. This is where we'll use our two project library functions. So we'll right click on the button, select Scripting, action, actionPerformed, then the Script Editor tab on the right. Let's outline the couple lines of scripting required. We'll specify a couple parameters, read a CSV file, and write its data to the database. We'll specify three parameters. For a more general solution, we would prefer to read these from various window components, but for now we'll just specify them as follows: The database table name, the database connection name, and the maximum number of records that we'll insert at one time. Again, we could take the database table name from some component, but for security purposes, it should be something like a fixed options dropdown component, and not arbitrary user input text. Next, we'll use the first of our two project library functions to prompt for a file name and read its CSV data into a PyDataset, and the second one to write the data into the database.

**[05:57]** [05:57]
                                    Notice how it was very easy to invoke these because of the way we defined our variables and method interfaces. That's it. We're done.

**[06:07]** [06:07]
                                    So let's save our changes. Now we're ready to test this out. First, let's export the Excel data to a CSV file, and let's maximize this window for a moment to make that easier. Then we'll click File, Export, Change File Type, CSV, Save As. We'll save it as products.csv, Click OK, Save only the current sheet. Then restore the window size and minimize it again. Now let's import that CSV file. So we'll make sure that bidirectional mode is set. Select Preview mode. Click the Update button we created, select the CSV file we saved, products.csv, and click Open. And after a moment, we see the empty table update with the CSV data we just read in.

**[07:07]** [07:07]
                                    Furthermore, if we execute the Select query in the Database Query Browser, we also confirm the database update. Finally, we'll restore our original CSV data source, to show the entire path our CSV data has taken. So in this lesson, we've shown how to import CSV data into a database using Ignition scripting. We needed to know the destination database table and its database connection name. The database specifics are encompassed within the database connection, so these steps will be database independent. We use two scripting functions in a project library. One to read a CSV file into a PyDataset, and a second one to import that PyDataset into a database. Then we integrated everything using some simple button scripting, and displayed the data to a table with a simple query binding.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
