---
sidebar_position: 16
---

# Sql In Ignition - Video Transcripts

This page contains transcripts from the sql-in-ignition video course.

## Overview

These transcripts are automatically generated from the [sql-in-ignition Course](https://inductiveuniversity.com/courses/ignition/sql-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 4:18:07 PM
Source URL: https://inductiveuniversity.com/courses/ignition/sql-in-ignition/8.1
:::

## Video Transcripts

### 1. Named Query Introduction Video at Inductive University

:::tip Video Link
Watch the video: [Named Query Introduction Video at Inductive University](https://inductiveuniversity.com/videos/named-query-introduction/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    Named queries are predefined queries that may be invoked somewhere in a project. They're conceptually very similar to project scripts in the sense that they are defined in a single location and then referenced in multiple places throughout a project. When executing a named query, parameters may be passed to return a dynamic result set. This way, it may be written once and then called from multiple locations throughout the project. We will visit named query parameters in a later video, but for now let's create a simple named query and let's take a look at some of the features related to the named query design space. From the project browser tree, there's a section for named quarries. I will simply right click on it to create a new query named My Query. Once it is created, the named query design space appears. In the settings tab, you're able to control the query security, description, as well as controlling its caching behavior. The authoring tab allows users to design their query. Users can control what database connection their query points to, its type, as well as what parameters it takes in.

**[01:07]** [01:07]
                                    I will set my database connection setting to point to my DB database and will leave it's query type as query. Once I select my database, notice how all my databases tables are listed in the table browser. Now, let's write a simple query that returns all the data inside my databases inventory table. My query takes no parameters, so I will simply delete the pre-configured parameters. I will then head over to the testing tab to test my query for functionality. Pressing the execute query button, we see that the query executes and I'm able to see its results in real time. I am also able to limit its sample size and export its results into a CSV file.

</details>

---

### 2. Named Query Parameters Video at Inductive University

:::tip Video Link
Watch the video: [Named Query Parameters Video at Inductive University](https://inductiveuniversity.com/videos/named-query-parameters/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In a previous video, we showed how to create a simple named query that did not use any parameters. When executing a named query, parameters may be passed to it to return a dynamic results set. Here we have a simple query that returns all the data from an inventory table, which is inside my database named DB. Go into the testing tab and executing my query, I see that it returns five columns. What if I only want this query to return inventory data for a specific flavor? To do this, I will need to modify the query to take in a flavor parameter and use it in a sequel where clause to filter data specific to the flavor I pass onto my named query. Let's see what this will look like. In the authoring tab, I will first create a parameter named My Flavor. I will set its parameter type to value. The value of parameter type should be used whenever a named query needs a dynamic WHERE clause, the idea being that we pass a value to the WHERE clause condition to make it dynamic.

**[01:05]** [01:05]
                                    The flavor column in my database is of type string, so I will select my parameter's data type to also be a string. Once my parameter is created, I will modify my query to have a where clause to make the query only return inventory data that has a flavor that matches my parameter's value. Notice how I referenced my parameter using a colon followed by my parameter name. You can also right click on the query and select insert parameter and the parameter will be automatically added to the query with the correct syntax. Going back to the testing tab, we see that the parameter, My Flavor, appears in the test parameters table. If I type chocolate in the value field and execute my query, I see that only the data for chocolate gets returned. Similarly, typing vanilla and executing the query only the data for vanilla will be returned. Currently, our named query is returning all the columns in the inventory table. Let's say that we want to dynamically choose what column our query returns.

**[02:02]** [02:02]
                                    To do this, we go back to the authoring tab and we create an additional parameter named My Column. I will set this parameter type to query string and set its data type to string. Query strings are more flexible than the value type in that they can be used to parametrize column and table names. However, their values are never sanitized, which causes them to be more susceptible to SQL injection attacks. When using query strings, it is best to avoid situations where the user can manually type in the value that will be passed to the named query. Now that my parameter has been created, I will add it to my query select statement so I can tell the query to select a dynamic column from the inventory table. Now that my query has been updated, we go back to the testing tab and we see that the parameters table now list the parameter, My Column. If I pass a column named flavor to the My Column parameter and execute the query, we see that the query only returns the flavor column. Similarly, if I pass a column named Count to the My Column parameter and execute the query, we see that the query only returns the Count column.

</details>

---

### 3. Creating a Table Video at Inductive University

:::tip Video Link
Watch the video: [Creating a Table Video at Inductive University](https://inductiveuniversity.com/videos/creating-a-table/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    The purpose of this topic series is to interact with data within our database using a query. Using this data in components within an ignition project will be discussed in a later topic. The purpose of this lesson is to go over how to create a table in a database. We can create a table in our database using a specific type of query. Now we can run this query from our database query browser in the tools menu, or we can go to the database management software and run our query there, but I'm going to be running all of the queries in this topic series using a named query. I am going to create a new named query by right-clicking and selecting new query, and I'm going to name this query create table.

**[01:00]** [01:00]
                                    I'll then go ahead and click the create button and navigate over to the authoring tab. The first thing that I want to do is set the database connection that I'm going to use for this named query, so I'll go into the database connection dropdown and select my database connection InternalDB. I do want to point out that the database that I'm using here is the built-in SQLite database that you can set up. For more information on setting up database connections, you can see other videos within Inductive University or go to our user manual. Next I need to specify the type of query that I want to run. In this case I'm not going to be pulling data out of the database but I am going to be creating a new table, which is similar to inserting or updating the database. So I'm going to change my query type to update query. In this particular instance, I don't need any parameters, so I can actually delete the two parameters that I have right now.

**[02:00]** [02:00]
                                    Finally, I am going to paste my query into the query area here. To create a table in the database, we start out with the command create table, followed by the name of the table that we want to create. In this case, my table will be called inventory. Next, within parentheses, we list out the names of the columns that we want to create within our table, as well as their data types. So you can see I have three columns here, name, location, and quantity, with data types of text, text, and integer, respectively. I do want to note that this syntax may differ depending on what type of database you're using. Keep in mind we're using the internal SQLite database connection. Your table can have any number of columns and the columns can have a number of different data types, again, the data type names differing depending on what type of database you're using.

**[03:02]** [03:02]
                                    With our query entered, we can now run our query by simply going to the testing tab and hitting the execute query button. We weren't expecting any data, so I wouldn't expect to see anything in this results list here, but if I go back to the authoring tab, we should see that now, in my table browser, I have the inventory table listed and if we expand it, I can see the three columns that I added to that table, name, location, and quantity.

</details>

---

### 4. Inserting Data into a Table Video at Inductive University

:::tip Video Link
Watch the video: [Inserting Data into a Table Video at Inductive University](https://inductiveuniversity.com/videos/inserting-data-into-a-table/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're go take a look at how to insert data into a table in the database. I'm going to start by creating a new named query and I'm going to call it Insert Data and then go ahead and click on the create named query button. Here in my named query, I want to start by setting my database connection to internal DB and because we are going to insert new data into the database and update that table, we want to change the query type to update query. My query will not have any parameters, so if I wanted to, I can get rid of both of these parameters. I can then paste my query down below. You can see with an insert query, we start out with the command insert into and then list the table that we want to insert data into. In this case, inventory.

**[01:03]** [01:03]
                                    Next, in parentheses, I list out column names. These are the columns that I'm providing data for that will be inserted as a new row. Finally, we use the keyword values and then in parentheses again, we list the values that we want to insert into the specified columns. The values do need to be listed in the order of the columns that we set earlier, so in this case, I have a name of workstations, a location of marketing, and a quantity of 15. I can go over to my testing tab and try executing this query. Because I'm inserting data, I'm not expecting it to give me data back, but what it does return is the number of rows that were affected by my query. In this case, we see a result set of one, meaning I inserted one new row into my table. I want to go back and take a look at the query and take a note of two things.

**[02:04]** [02:04]
                                    First, it is possible to insert dynamic values by creating parameters for each value that you want to make dynamic. So in this case, I could make a parameter for name, a parameter for location, and a parameter for quantity. I can then replace the hard-coded values with those parameters instead. This would allow me to insert new values when I run the query. The second thing that I wanted to note is that it is possible to insert multiple rows of data with a single insert query. I'm going to paste some additional values in here and you can see that all we need to do is simply list out additional sets of values separated by commas. If I go to my testing tab and try to execute this query, you can see that my result set is now seven, indicating that I inserted seven new rows into my table.

</details>

---

### 5. Selecting Data from a Table Video at Inductive University

:::tip Video Link
Watch the video: [Selecting Data from a Table Video at Inductive University](https://inductiveuniversity.com/videos/selecting-data-from-a-table/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to take a look at how to select data out of a table in the database. To start, I'm going to create a new named query and I'm going to call it "Select." I'll go ahead and click the Create button and go to my Authoring tab. As always, I will set my database connection to internal DB, and I'm going to leave my query type at query because I do want to select data out of the database table. I am not going to be using any parameters in this query so I can delete them. I can then paste my query in the query area. To select data out of a table, we first use the command select followed by the names of the columns that we want to select a data out for.

**[01:01]** [01:01]
                                    So in this case, I am selecting out the name column and the location column and they're separated by a comma. Once I've listed out all of my columns, I then use the from keyword and after that, I put the name of the table that I want to select data from. In this case, inventory. Now that I have my query, I can go to the testing tab and click execute query to test it out. As you can see, I pull out all of the rows of data from the name and location columns out of the inventory table. I can list out whatever combination of columns I want as long as they exist within the table. Finally, if I want to select out the data from all of the columns in the table, then I can use a special symbol instead. Back to my query, rather than listing out the name of every single column within my table, I can simply use the star symbol.

**[02:04]** [02:04]
                                    When I use the star symbol, instead of naming out columns, the query will automatically grab all columns. To test this out, I'm going to go back to my testing tab and execute my query again. And we can see here that I've now grabbed all three columns: name, location, and quantity, even though I haven't listed them all out.

</details>

---

### 6. Filtering Select Results Video at Inductive University

:::tip Video Link
Watch the video: [Filtering Select Results Video at Inductive University](https://inductiveuniversity.com/videos/filtering-select-results/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to take a look at how we can filter our select query, so that only certain rows are returned from the table. As you can see, I have copied the query from my previous lesson into a new named query called filtered select. With my filtered select query, I still want to select all of the data from the inventory table, but this time I'm going to add a little bit to it like so. To filter the data that's returned from a select statement we need to use the where clause. The where clause allows us to list a condition that needs to be true for that row in order for it to be returned. In this case, I am checking to see if the rows name column is equal to the string work stations.

**[01:05]** [01:05]
                                    Any rows that match that condition will be returned, and any rows that do not will not be returned. We can go to our testing tab and click on the execute query button to test this out. You can see here that each of the rows returned has a name of work stations. A few things to note about the where clause. The condition can use any of the columns in the table. So rather than name, I could have made my condition about the quantity, instead. Additionally, the column that is being used in my where clause does not actually have to be selected with my select query. So for example, I can select name and location, but my where clause will utilize the quantity column. There are also a handful of operators that I could use to create my condition, rather than just equals, I can use things like not equals, greater than, less than, even like to match to a subset.

**[02:11]** [02:11]
                                    I can also specify multiple conditions that need to be met for the row to be returned. I simply need to separate these conditions with either the or or the and keywords. Two conditions separated by and requires that both of them be true, whereas two conditions separated by or require that only one of them be true. Finally, I can have the value part of my condition be dynamic. Rather than hard coding in a name like workstations, I can add a parameter. In this case, I want the data type to be a string and the name to be name. I'll drag my parameter down into my where clause, and now the value of the parameter is going to help determine the condition that's needed for the row to be returned. I can go to my testing tab to try this out. I'll look for a value of printers and execute the query and you can see now only the rows where the name is printers gets returned.

</details>

---

### 7. Conditional Where Clause Video at Inductive University

:::tip Video Link
Watch the video: [Conditional Where Clause Video at Inductive University](https://inductiveuniversity.com/videos/conditional-where-clause/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we are going to take a look at a Conditional WHERE clause. To start, I have copied the Filtered Select Query from before and created a new named query called Conditional Filtered Select. Here, we have our Select Query with the WHERE clause that requires the name column, be a certain value provided by a parameter. However, in this case, I want my WHERE clause to be conditional applying sometimes but other times I don't want to have a WHERE Clause and I simply want to select all of the rows out of the database. Your initial thought might be to simply not provide a parameter value. But if we were to test that out, we can see that providing no parameter value is not going to return any rows.

**[01:01]** [01:01]
                                    This is because none of my rows have a name column value of null, which is essentially what I'm providing it. To accomplish what we're after, we can use a simple bit of logic in our query. I'd like to add another condition to our WHERE clause and I'm going to separate it from my original with or, my condition is then going to look something like this. All =, and then my parameter value. Now what I've done here may not initially be obvious. I don't have any name values in my table called all, but in this case, I'm not checking the value of all against the table. I'm simply checking the hard-coded value of all to the parameter value. So in this case, if my parameter value is the string all, technically the string all is going to be equal to the parameter all for every single row in the table.

**[02:04]** [02:04]
                                    So even though the word all will not match up to any of the values in the name column, according to my first condition, it will return true for every single row based on my second condition, let's go try it out. I'm going to go to the testing tab, type in my parameter value of all. And when I execute the query, you can see that I return all of the rows in the table. Of course the first condition can still act like a filter. I simply need to provide a value that I want to filter by and execute my query, and only those rows will be returned. The trick to the Conditional WHERE clause is to ensure that the second condition uses a value that's not going to show up within your regular table.

**[03:04]** [03:04]
                                    In this case, I don't expect to have a name of all. So I can use that. Similarly, if I was using quantity within the WHERE clause, instead of all, I would need a numeric value. So I could use something like negative one in the secondary condition to denote that I want to see all of them because I know my quantities are never going to be below zero.

</details>

---

### 8. Updating Records in a Table Video at Inductive University

:::tip Video Link
Watch the video: [Updating Records in a Table Video at Inductive University](https://inductiveuniversity.com/videos/updating-records-in-a-table/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to take a look at how to update data that already exists within the database table. I've queried all the records from my database table here using my select query and I just got some new inventory. I want to update the workstations in my support department, to 23 instead of 22. We can do this using an update query. So to start, I'm going to make a new named query and I'm going to call it update inventory. In the offering tab, I will of course first set my database connection to internal DB and I need to make sure I set my query type to update query since I'm going to be updating data. I don't need any parameters right now, so I'm going to delete both of them and then I will paste my query into the query area.

**[01:06]** [01:06]
                                    To update data in the database, we start with the command update and then list out the table that we want to update. In this case, the inventory table. We then use the set keyword followed by a column name equal to a value to set the column to a certain value. In this case, I want to update the quantity to be 23. If I ended my query there, this would set the value of the quantity column to 23 for every single row and I don't necessarily want that to happen. I only want to set the quantity to 23 for a specific row. So the last part of my update query needs to be a where clause, where I specify conditions to filter down the row that I want to update until I just have the row that I want selected. In this case, the row that I wanted to update had a name of workstations and a location of support.

**[02:06]** [02:06]
                                    So I list both of those conditions separated by an and in my where clause. I can go to my testing tab and execute my query to test this out. You can see, we get a result set back of one, indicating that one row was updated. To confirm this worked, I can go back to my select query. My original row had a value of 22 and if I execute this again, I can see that now, it has a value of 23. A few things to note about the update query. First, rather than specifying a hard-coded value of 23 or a name of workstations or a location of support, I can make these dynamic by using parameters. This will allow me to dynamically specify the row that I want to update as well as what the new quantity is. Additionally, I can update multiple columns in a single query by listing out more column names equal of value underneath the set keyword and separating them all with commas.

</details>

---

### 9. Deleting Records from a Table Video at Inductive University

:::tip Video Link
Watch the video: [Deleting Records from a Table Video at Inductive University](https://inductiveuniversity.com/videos/deleting-records-from-a-table/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I want to take a look at how we can delete records out of a table in our database. I have all of the rows from my table selected here using my select named query and I want to delete one of these records. Maybe I've gotten rid of the projectors in the support department. So I would like to remove that record from my table entirely. We're going to start by making a new named query and I'm going to call it Delete Records. And we're going to go to the Authoring tab, specify our database connection to internal DB and the query type to update query since we're going to be updating our table. For this example, I don't need parameters, so I'm going to delete both of them out and then I'm going to paste in my query.

**[01:04]** [01:04]
                                    To delete a row from our table, we first start with the command delete from followed by the name of the table that we want to delete a record from, so in this case inventory. Technically you could end your query there, but it is usually advised to add a where clause to your delete query. The where clause helps narrow down the rows so that you're just deleting the rows you want. In this case, my where clause has a name of projectors and a location of support. As with previous queries, you can substitute parameters in for the values for the name and location columns to dynamically delete rows rather than having hard-coded values. We can test this out by going to the testing tab and hitting execute query. We can see my result set is one, indicating that one record was deleted, which is what I expected.

**[02:04]** [02:04]
                                    I can go back and check on my table by going back to my select query and executing it again and you'll notice that the support projectors row has been deleted. If your where clause matches multiple rows, then all rows that match that where clause will be deleted. I also want to emphasize the importance of a where clause. If I don't specify a where clause in my delete query, then all rows will match to this delete query and if I were to execute and run this, you can see that now it's deleted seven rows and if I check my table now, you can see that it has deleted all of the records in that table.

</details>

---

### 10. Using Named Queries in Perspective Video at Inductive University

:::tip Video Link
Watch the video: [Using Named Queries in Perspective Video at Inductive University](https://inductiveuniversity.com/videos/using-named-queries-in-perspective/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, we are going to look at using named queries on perspective components. I'm going to be using some of the named queries and the table that was created in the sequel basics Inductive University topic. If you want to follow along, you can download the queries from the Ignition Exchange. Now in this perspective view, I'm going to add a table component. The first thing we will take a look at is using a named query in a binding. I'm going to set up a binding on the data property of the table and select the query binding type. Here we can select the path to the query that we want to run. I'll use the query select. As you may recall, this query selects all data from our inventory table. We see the query here and can turn on polling or having the query automatically rerun to get updates to the data here.

**[01:08]** [01:08]
                                    Polling occurs on a timer which you can adjust to meet how often you want to get updated data. It can even take an expression which allows you to define the polling rate based on an expression. After clicking okay, we can see our data in the table. Next, let's look at running a named query from a script. I'm going to add a button to run my script, go to its action performed event and add a script action. Here I am going to call a system function, system.db.runNamedQuery which we can pass the path of the query we want to run as a string. I'm going to call the query update inventory. This will run the update query which will change the quantity of the workstations in support from 22 to 23.

**[02:09]** [02:09]
                                    However, because I did not set the binding on my table to pull, my table component will not reflect the change until the query is rerun, usually when the view is navigated to. So in a script where we update data in the database, it is usually a good idea to refresh any bindings that are selecting that data out. To do this, we need to grab the table component and call refresh binding on it, passing in the property that we want to refresh as a string which in this case is props.data. Testing this out, we can see that the quantity does indeed change from 22 to 23. Next, let's take a look at named queries that use parameters.

**[03:06]** [03:06]
                                    I'll start by adding a text field to the view and then opening up the binding on my table again. I want to change the query that is being run from select to filtered select. The filtered select allows us to pull data out of the table, but only rows that match a name we provide will be returned. You will notice now, not only do we see the query, but the query accepts a parameter which we can provide a value for up above here. I can type in a static value or I can click on the function symbol on the right which will let me create an expression that will result in a value instead. I'm simply going to grab the text property of my text field. When I hit okay, you will notice all of the data disappears. This is because it is currently looking for a name that is simply an empty string because that is all I have in my text field.

**[04:08]** [04:08]
                                    Of course I don't have any blank names in my table so let's type a name into my text field. As you can see, as soon as the value was entered, the query returned the appropriate data. Finally, let's take a look at using a query with parameters in a script. I'm going to add another button and another table to my view. I will add a script action to the action performed event just as before. Here, I will again add the system function system.db.runNamedQuery and call the query filtered select. In addition to the path to the query, I also need to specify any parameters that should be passed into the query in the form of a dictionary.

**[05:05]** [05:05]
                                    I just have the one parameter called name. So I will create a dictionary entry called name and provide it with the text value from my text field. I then need to put the return data into the second table since I did not set up any bindings. I will store the return data in a variable and then set my table data equal to the data in the variable. Unlike the binding, the script will not run until I execute it by pressing the button regardless of if I change the name in the text field. However, clicking the button will pull in the text value of the text field to use as a parameter in the named query.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
