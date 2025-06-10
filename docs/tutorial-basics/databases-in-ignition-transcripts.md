---
sidebar_position: 5
---

# Databases In Ignition - Video Transcripts

This page contains transcripts from the databases-in-ignition video course.

## Overview

These transcripts are automatically generated from the [databases-in-ignition Course](https://inductiveuniversity.com/courses/ignition/databases-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 2:02:31 PM
Source URL: https://inductiveuniversity.com/courses/ignition/databases-in-ignition/8.1
:::

## Video Transcripts

### 1. Connecting to MySQL Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to MySQL Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-mysql/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at how to connect Ignition to a MySQL database. MySQL is one of the more popular database offerings, and one that Ignition can connect to without too much trouble. So to connect to MySQL, I'm in the config section of my gateway web page and from here in the sidebar, I'll go ahead and find databases and then go to connections. Now currently, I don't have any database connections at all. So to change that, I can click Create new Database Connection here. And once I click that, I'll be given a couple of different connection types to choose from based on the JDBC drivers I have installed on this system. In layman's terms, a JDBC driver is basically a bridge between Ignition's Java based platform and a database server. And the one that I'd like to use is MySQL because I'm going to be connecting to a MySQL database. However, I am going to run into a bit of trouble here when I click Next. I'm getting a banner up at the top here that says the MySQL driver is missing required files. Now you may or may not be seeing this error when you try this out on your own system. The reason I'm seeing this error here is because as of Ignition 8.0 we cannot ship Ignition with the MySQL JDBC driver pre-installed. However, if you're running Ignition seven nine or below, or you've upgraded to Ignition 8 rather than using a fresh Ignition eight install, you likely won't encounter this problem. Since we only have this limitation on fresh installs of Ignition 8.0 and above. Still I'll need to fix this error before moving on. We can see that the banner is directing me to a help page that includes information about installing the necessary files. So I'll go ahead and open that. And if I go to that browser tab, it's actually a user manual page on JDBC drivers and translators, which helps to explain why we're running into trouble here. Now ultimately, all that I have to do to fix the problem I'm encountering is install the necessary JDBC driver file on the gateway. And I can get that file by finding MySQL in this table here, and then clicking on this download link. This will take me to MySQL's official website and to the download page for our JDBC driver. So on here, I just need to select an operating system and here I select platform independent. And then I'll go ahead and download the second one here, which is the ZIP archive. And I'll say No thanks, just start my download. So that ZIP file I just downloaded contains the necessary files. And now I can go back to my gateway web page and fix my MySQL JDBC driver. To do that, I have to briefly leave this databases connections page and go to the databases drivers page right below it in the sidebar. And here we can see immediately that there's a problem with our MySQL JDBC driver. So to fix that, I'll click Edit. And in fact this driver interface is 99% set up already. The only thing that I need to address is this JAR files property here. This is going to expect a file from the ZIP folder I've just downloaded. So I'll say Choose File. And then I'll go into my downloads. I'll right click on that ZIP folder to extract. And then I'll pull over the dialog and then click Extract. Close out of that, go back into the folder. And there we go. Now I'm inside of that zipped folder. And in here, the only thing that I need is this MySQL connector Java.jar file. So once I found that, I'll say open, and then I'll scroll down and hit Save Changes. And there we go. Now we've repaired our MySQL JDBC driver. So once more, it's very possible you would not have had to go through these steps. But if you're installing Ignition eight for the first time, this is something you'll have to do when you first create a MySQL database connection. So now that we've repaired our JDBC driver, I'll go back into databases connections, and then click Create new Database Connection again, select my MySQL JDBC driver, and then click Next. And now we're ready to set up our database connection properties. So first, I'll give my database connection a name. So how about MySQL, I'm going to scroll down just a little bit and find the connector URL property here. This is a very important property for us because it dictates exactly how we're going to be connecting to a database server. And specifically, this Connect URL is a string that the JDBC driver is using to actually configure the database connection. So this connect URL is a JDBC driver specific string. And we have little helpers at the bottom here for what we need to pass in on that string. So in this case, the string calls for a host name or IP address, and then a port. And then finally a database name or a schema to connect to. Because I have MySQL running on the same box that Ignition is installed on, I can just leave my host name as localhost. But if Ignition is connecting to your database remotely, you'll probably need to specify a hostname or IP address. Next, we need to specify a username and password. So I'm going to connect to my database as the root user. And then I'll enter in my root user's password, and I'll enter it in twice. So next, if I scroll down just a little bit more, I have some extra connection properties. If we need to change some connection settings, this is the place to do it. I'm happy leaving everything at the default though. A couple other settings too, I have a Failover Datasource. This allows me to use some other database connection as a backup database connection in case this one fails. I'll leave that property alone as well. But if I scroll down to the very bottom here, there is a checkbox for Show Advanced properties. And if I scroll down again, here we have some more nitty gritty settings for how our database connection should work. So for example, I could mess with the connection pooling to allow more or fewer concurrent connections to our database, or I could change something like the validation query to dictate how Ignition should decide whether our database connection is valid. So we've explored a couple of the settings down here, but I don't need to change anything. So I'll just scroll down to the very bottom and say Create New Database Connection. Once I'm here, my database connection will briefly show as reconnecting and then say valid. And once it says valid, that's how I know that the connection has been made successfully. If for any reason the status said faulted instead of valid. We have a handy link here to the database connection status page, which can give you more info on what went wrong.

</details>

---

### 2. Connecting to Microsoft SQL Server Express Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Microsoft SQL Server Express Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-microsoft-sql-server-express/8.1)
:::

<details>
<summary>View Transcript (7 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we will take a look at how to connect ignition to Microsoft SQL server. Now, before I attempt to create a new database connection in Ignition, there are a couple of configuration changes that I need to make in SQL server. To do so, I'll need to open up the SQL server configuration manager in Windows. You can just click on the start menu and start typing SQL Server configuration manager and this should appear in the list. Once you have this open, the first area you're going to want to take a look at is the SQL server services and when you're here you will want to make sure that the SQL server browser is up and running. This mechanism allows Ignition to connect to SQL server by translating the database instance name to a TCP/IP Port Ignition can connect to. So if it says running, you're in a good state. If not, then we need to actually make sure it's running. This can be done by right clicking and telling it to start.

**[01:06]** [01:06]
                                    In a production environment, you're most likely going to want this SQL server browser to start up a automatically whenever the computer starts. This can be done by making sure the start mode says automatic. If yours does not have an automatic start, you can come down on this right click menu here, select properties, and on this window here, come over to the service tab. Here you can find the start mode and change it to automatic. Then you go ahead and click okay, I'm just going to X out, since mine's already set up. With the running browser, we'll want to enable TCP IP on our database so Ignition can connect to it. To enable this property, you will come down to this SQL server network configuration section here and there should be a protocols for and some instance name. This will be the instance name you chose when installing SQL server. I didn't change mine, so I am using the default instance name, SQLEXPRESS. Double clicking on the protocols will open up the TCP IP settings.

**[02:06]** [02:06]
                                    By default, TCP/IP is set to disabled, so all you have to do is right click or double click on it and set the enabled property to yes. When making a change to this property, you will see a message stating to restart SQL server for the change to take effect. A simple way to restart the SQL server is from this same window you would navigate back to the SQL server services and right click on your SQL server instance. This will provide the restart option. Once you've restarted, you get the TCP/IP enabled. A quick mention as we are here on the services screen, you don't need SQL server agent to run, this can be stopped. That's all we have to do from here, so I'm going to minimize this configuration manager window. Let's go ahead and create the database connection. I'm here on my gateway and I'm in the database connections page. Within the config tab, I'm going to create a new database connection by clicking on this link here.

**[03:04]** [03:04]
                                    I'll select the Microsoft SQL server, JDBC driver and I'll click next. Let's go ahead and give this new connection a name. I'll just call mine SQL server. We need to specify a connect URL property to tell ignition where the database is. Now I have Ignition and SQL server installed on the same computer, so I can leave the host name parameter here alone. I could type in an IP address or a host name, but local host works just fine. With SQL server's, JDBC driver, we actually have an option for the rest of the parameters here, so I could either use the instance name or I could use the port instead. If you wanted to use the port, all you have to do is select the default instance name and backslash that's listed on the property here and delete or backspace. In most cases it's port 1433 unless we change it during the installation process. Once you're done, it should look something like this. Now I actually want to use my instance name here, so I'm going to delete the colon and the port number.

**[04:06]** [04:06]
                                    I'll type backslash and my instance name. As you saw earlier, it was SQLEXPRESS all caps just like this. That's all we have to do for the Connect URL property. Now down a little bit more, we can specify a username and password. With SQL server, we have a few authentication methods. The simplest option is passing a username and password in here. This is called SQL authentication. We are going to go ahead and authenticate directly against the database. We simply type in the user that's configured into the database, so in my case I'm going to use SA and their password. There's also Windows authentication. Windows authentication is usually preferable and more secure. This basically means that the username and password used to connect comes from ignition's Windows service log on. This typically involves setting the ignition service to run as a certain user instead of a system.

**[05:04]** [05:04]
                                    To use Windows authentication, you actually don't have to type in the username and password. Instead, what you do is come down to this extra connections property section. On this property you would leave the database name alone and place a semicolon at the end. I'm going to paste the rest in, but you would then type in integrated security equals true, spelled exactly like this capitalization and all. Now there is actually a little more to Windows authentication. There is an additional DLL file that you need to download and place into ignitions installation directory. For more details, take a look at the connecting to SQL server page. In the Ignition user manual. I have added a link to this user manual below the video. Now, like I said, I'm going to use SQL server authentication, so I'm going to go ahead and remove this extra line here. I'm going to to leave it just as the database name and this specifies which of the databases within SQL server this connection should connect to.

**[06:05]** [06:05]
                                    We'll finish creating the connection by scrolling all the way down and clicking the create new database connection button and that's it. I got a valid status, so i'm good. Now of course, if you're seeing a fault message at all, take a look at this database connection status page. Here, you'll find any errors returned by the database as a result of the configuration we just attempted and that should be a pretty good start for troubleshooting.

</details>

---

### 3. Creating a SQLite Connection Video at Inductive University

:::tip Video Link
Watch the video: [Creating a SQLite Connection Video at Inductive University](https://inductiveuniversity.com/videos/creating-a-sqlite-connection/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll take a look at creating SQLite database connections. SQLite is a lightweight self-contained SQL Database. It's designed to be embedded into other programs. This differs from Client-Server Database Management Systems like Postgres and MariaDB, which are standalone programs. What's nice about SQLite is that you don't need to install any separate software to use it with your Gateway. Once you have Ignition installed, you can create a connection and get started. Speaking of getting started, I'm looking at my Gateway. I am under the config section here, under databases and connections. I do have a MySQL database connection, but we're going to ignore that. And instead, I'm going to create a SQLite Database. So I'll click on the create new database connection link. And from my list of options here, I'm going to select the SQLite option. I'll click next. And let's give this connection a name here, much like other database connection types and ignition. We need to provide a connect URL. Unlike other connection types, we simply need to provide a file path to either an existing SQLite Database file or provide a path to a nonexistent file, which will cause this connection to create the database for us. Now off-screen here, I have a folder I created inside of my Ignition Installation Directory. I simply called it My Databases. It's empty right now, but I'm going to have the SQLite Database Connection, create the database inside of this folder. Now I'm going to select this path and copy. We can move this out of the way for now. I'll head back to the connect URL and I'm going to replace everything after the 'JDBC:SQLite' part here. Just got a backspace so that you can see what I did, and I'm going to paste that path I just copied. Now you'll notice the backslashes here. I'm using a Windows Operating System, obviously. So backslashes are used in between folders and files, but the driver would work here with forward slashes as well. As long as the folders along the path exist. Now we do need to point this URL to a file. So I'm going to add a backslash and then type in the name of the file I want to create. So how about Test.DB. Looking at the username and password here, we don't use any authentication for SQLite, so I'll leave those blank. Be mindful of storing sensitive information here in these connections. Let's scroll down and create the connection. And we can see it's valid and it's up and running. If we head back to our directory, we can see that the database was created. So now we can use the SQLite Database Connection to start storing things. It works just like any other SQLite Database Connection, in that you can create tables in here, and start writing queries. We can also use this alongside other Ignition features such as named queries or the alarm journal. Now let's try that one more time. I'm going to create another database connection and just like last time I'll select a SQLite. We'll hit next again. And you may have noticed under these examples here, there's this memory example. Let's take a look at that. So first of all, let's give this a name here. So how about in-memory? So one of the things you can do because SQLite is such a lightweight database, is that instead of creating the database as a file that sits on the file system, the gateway can actually create the database and keep it in-memory. So we can simply select this example here. I'll go and copy that. And I'm going to replace what I have up here, with what I just copied. Now in this version of the software I'm using there's a slight typo in the example. We need a colon at the end, which I'll just add here. And of course we'll take care of that example in future versions. But I'll go ahead and scroll down now. I'll create the connection. And now we have yet another valid database connection. This time, no file. The database just lives in the gateway's memory. Now as you've probably guessed by creating a database that sits only in-memory. Once you shut down your gateway or restart your gateway, all of the entries inside of that database will be gone. So you'd really only want to use this in-memory option for temporary things. You wouldn't store a longterm records inside of this. Now let's end with a caveat here, talking about the SQLite connection options. SQLite isn't really designed to compete with Client Server Style Databases. It's more designed for smaller scale interactions and applications. If you're just getting started with ignition or you're working on a demonstration or proof of concept, then it's a fine database to use. However, in a production environment, we don't recommend you use this as a historian database. Lots of simultaneous queries, such as those generated by our historian systems, our alarm journals and our audit profiles end up straining the SQLite Connection quite a bit. In those cases, you're going to want to use a stand-alone Client-Server Style SQL Database. Instead this option is ideal if you want it to store non-production data. Things like user preferences or configurations made during runtime. Say you have an application where users can enter values in, and you needed to store those temporarily. Instead of writing those values into tags, you could insert the values into a table, that's just sitting in a SQLite Database.

</details>

---

### 4. Installing MySQL Video at Inductive University

:::tip Video Link
Watch the video: [Installing MySQL Video at Inductive University](https://inductiveuniversity.com/videos/installing-mysql/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, I'll show you how to install MySQL and set it up, so that's ready to connect to Ignition. Let's start by heading to the download page for the community version of MySQL. The community version is a free downloadable version, supported by open source developers and enthusiasts. I'll include the URL on the screen now. I'm on a Windows machine, so I'll run through the steps to get set up in Windows, but there are installers available for Linux and Mac OS as well. We'll download the MSI file. So, let's click the go-to download page button. From here, there are multiple options. Both will allow you to install MySQL, so I'll choose the top one. You'll notice the installers are 32-bit, but they will allow you to install the 64-bit version of MySQL. Click download. The next page will ask if we wanna log in with an existing account or sign up for an Oracle web account. We can click, no, thanks, just start my download. Once the file is downloaded, we can run it and begin the installation process.

**[01:08]** [01:08]
                                    After running the installer, you'll be taken to the choosing a setup type window. Select custom and click next. Now, we can choose the products and features to install. We'll expand the MySQL's servers, and choose a MySQL server eight version to install. Once a version is selected, click the arrow to move it to the to be installed section. We'll also add MySQL Workbench to the to be installed section, so that we can manage our database via a graphical user interface. We'll expand applications, MySQL Workbench, MySQL Workbench 8.0, click our version, click the arrow, click next. We'll click execute. Now, that the products are installed, we can go ahead and click next. On the product configuration page, click next.

**[02:06]** [02:06]
                                    We'll leave the default settings on the type and networking page and click next. On the authentication method page, click the use strong password encryption for authentication method, and click next. On the accounts and roles page, we'll need to enter a password for the root account. After we've entered a strong password, we'll click next. We'll leave the default settings on the Windows service page and click next, and we can click execute on the apply configuration page. Once configuration is complete you should see a confirmation message notifying you that configuration was successful. Click finish. On the product configuration page, go ahead and click next, and we'll see a message saying the installation's complete. Let's keep the start MySQL Workbench after setup box checked and click finish. Now, the MySQL Workbench window will be displayed.

**[03:06]** [03:06]
                                    Let's click on the local instance of MySQL. So, from here we'll be prompted to enter that password that we entered for the root user in the installation process. After hitting okay, we'll be logged into our database instance. Once logged in you could administer your database instance. On the left side of the window, you'll see the navigator pane. Towards the bottom of the pane, you'll see some tabs, one that says administration, and one that says schemas. Click the schema's tab. Within the schema section, right click some blank space and we'll click create schema. The default MySQL connection in Ignition assumes a schema named test. So, that's what we'll name the new schema. After entering the name test, go ahead and click apply. You'll see the apply SQL script to database window.

**[04:04]** [04:04]
                                    Go ahead and click apply again. Next page here, we'll go ahead and click finish. You should be able to see the test schema within the navigator. Now, MySQL is installed and ready to be connected with Ignition.

</details>

---

### 5. Installing Microsoft SQL Server Express Video at Inductive University

:::tip Video Link
Watch the video: [Installing Microsoft SQL Server Express Video at Inductive University](https://inductiveuniversity.com/videos/installing-microsoft-sql-server-express/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this video, I'll show you how to install Microsoft SQL Server Express so that it's ready to connect to Ignition. Specifically, I'll be installing SQL Server Express 2019 on a PC with Windows 10. To start, head over to the download page. I'll show the URL on the screen now. Once on the downloads page, scroll down to the Express section and click Download now. Once the download's complete, run the installer. The installer will prompt you to choose an installation type, click Custom. On the next window here, you can leave the default location and click Install. Now we wait for it to download the install packages. The SQL Server Installation Center window should appear.

**[01:15]** [01:15]
                                    Click the option for a new SQL Server standalone installation. Click the I accept check box, and click Next. Click Next on the Microsoft Update window. Click Next once more. At this point, it should start installing setup files. Once that's complete, the setup will identify any potential problems that may occur during the setup process. Mine is warning me that I may need to configure Windows Firewall to accept remote connections. As long as nothing has failed, click Next. You can choose the features to install on this next window.

**[02:04]** [02:04]
                                    Some of these other ones aren't necessary, so I'm gonna uncheck the Machine Learning Services and Language extensions. You can rerun the installer in the future to add or remove features. Once you're finished with this window, click Next. I'm gonna leave the default name of SQL Express for the instance, but be aware that this may be different for you if you're installing a different version. Go ahead and click Next. On the Server Configuration window, you'll see a service named SQL Server Browser. This will need to be running when connecting to Ignition. So to make things simple, click the dropdown menu and change it to startup automatically. Once done, you can click Next. In the next window, you can specify the authentication mode for this instance. We can use either method when connecting from Ignition.

**[03:04]** [03:04]
                                    However, authenticating from a Windows account requires some additional steps. Choose Mixed Mode to set the instance for Windows authentication and SQL authentication. You'll need to enter a strong password for the system administrator account. To learn more about strong password requirements, you can refer to Microsoft's documentation online. Search for Database Engine Configuration, Account Provisioning. After entering a password, click Next. The next window will display the installation progress, which I'll fast forward through. Once the installation's complete, you can close out of the window and go back to the SQL Server Installation Center. The next piece of software you'll wanna install is the SQL Server Management Studio, which is a graphical user interface for SQL Server administration. Click Install SQL Server Management Tools. This will open the downloads page in your web browser.

**[04:06]** [04:06]
                                    Click the free download link under the Download SSMS section. Once the download's complete, run the installer. A window should open up asking you where you'd like to install your files. Go ahead and click Install here. Once the installer's finished loading packages, you'll be asked to reboot in order to finish the installation. I'll go ahead and skip through this. Okay, I've rebooted my machine and open SQL Server Management Studio. Change your authentication method to SQL Server Authentication, and enter in the system administrator credentials from the installation process. Once entered, click Connect. Once connected, you'll see your instance in the Object Explorer pane on the left side of the window. I don't have any databases yet, so I'll right click the Databases folder and click New Database.

**[05:11]** [05:11]
                                    A default connection from Ignition expects a database named Test. This can be changed, but I'm gonna go ahead and name mine test and click Okay. SQL Server Express is now installed and ready to be connected to Ignition.

</details>

---

### 6. Installing Oracle Express Video at Inductive University

:::tip Video Link
Watch the video: [Installing Oracle Express Video at Inductive University](https://inductiveuniversity.com/videos/installing-oracle-express/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll show you how to install Oracle Express. We're going to install the 11 G version here, which is the latest locally hosted version of Oracle Express. The download is available in this prior release directory on oracle.com, and in order to download the software, you do need to sign in with an Oracle account. I have included links for both the downloads page and the account creation page below. To start, I'll click on this download option for the 64 bit Windows version of 11 G. This will download a zip file containing the installer. I already have it here on my machine, so I will extract the file contents. Then I'll go into this disc one folder and run the setup. On the welcome screen, i'll go ahead and hit next on this license agreement page. I'll go ahead and accept it and hit next.

**[01:06]** [01:06]
                                    Then we are presented with a choice for the install location. I'll leave it in the C drive and go to the next page. Now we have the option to set a password for the sys and system database account. I'll go ahead and set the password and hit next. Finally, we have the installation summary, which details our file locations and the necessary port that will be used. If everything is looking good here, go ahead and hit install. It may take a few minutes to complete the installation process, but once it does go ahead and hit finish. Now, before we open the applications front end, we'll need to start up the database. This can be done by going to the start menu and hitting start database. Now that it's up and running, I'll navigate to the front end by going to local host port 80 80, and if I click on storage here, I can sign in with the password I set during installation. And on this screen you can see all the different databases we have.

</details>

---

### 7. Connecting to Oracle Express Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to Oracle Express Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-oracle-express/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we're going to take a look at how we can connect to an Oracle Express database. I'm here on the connections page, located in the databases section of the config tab. To create a new database connection, I'll click on the create new database connection link. We then have a choice of what type of database we want to connect to. You'll notice if we select the Oracle database option and hit next an error appears letting us know that the driver is missing files. Ignition doesn't currently come with the Oracle JDBC driver. We need to install that for this database connection to work. To install the driver, we need to go to the driver's page under databases. Here we can see our list of installed JDBC drivers, and you'll notice that the Oracle database option is errored, letting us know that it's missing some files. We simply need to edit this Oracle database option and find the JAR files property, where we can choose the JAR file for our JDBC driver.

**[01:10]** [01:10]
                                    I've already downloaded the JAR file here, so I'll go ahead and select that below this video. I have included a link to Oracle's website where you can gather the JAR file. Once we've selected that JAR file, we can scroll down and hit save changes. Now that our JDBC driver is installed, I can go back to my connections page and create my new database connection. I'll select Oracle database again and hit next here on the configuration screen. The first thing that we need to set is the connect to URL property. My database is installed locally, so I can leave the host as local host and it's using the Port 1 5 2 1, which is the default port, so I can leave that alone as well. Since we are connecting to an Oracle Express database, the SID or system ID that I need to use here is XE. Once I have that set, I can then type in my username and password.

**[02:08]** [02:08]
                                    I'm going to connect to the database using the system user, and I'll type in the password for that user. Once I've entered this information, that's all I really need to do. I can scroll down to the bottom of the page and hit the create new database connection button. You will see that we now have our new database connection with the status of valid indicating that we've successfully connected to the database. If you ever have any trouble connecting to the database, don't forget that, you can always click on this link here, database connection status, which will take you to the status page. This should give you information about why your connection is errored.

</details>

---

### 8. Installing MariaDB Video at Inductive University

:::tip Video Link
Watch the video: [Installing MariaDB Video at Inductive University](https://inductiveuniversity.com/videos/installing-mariadb/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll install a MariaDB. So here I have an installer for MariaDB on Windows, which I obtained from MariaDB's download page. In this case, I'm just using the community server edition. For more details on installing or using the other versions of the database, Take a look at MariaDB's docs. Now, since I already have the installer downloaded, I'm just going to double click on it to get it running. And I'll click around here and that should start the wizard. So we'll go ahead and click Next to move forward. Take a look through the licensing agreements. I'm just going to hit Accept here and then click Next. And here we can see all of the various features that are going to be installed. I do wanna call out HeidiSQL here, which is an additional tool that we can use to modify or manipulate content within the database. Technically it's optional, but I'm going to leave it alone since you might find it useful later on. I'll click Next here. And we do need to specify a password for our root user so the database is going to have an initial user, and we wanna give that user a password here.

**[01:07]** [01:07]
                                    So I'll just type something in. It goes without saying, but make sure you remember this password. You'll need it later. Now I'll click the Next button. I'm going to leave the service name alone, MariaDB is fine. On my local system here, I actually have a MySQL database that's using port 3306. So I'm just going to change this to 3307 and click Next. And we'll click the Install button to begin. We'll let the installer do its work. And we can see in the upper left-hand corner, HeidiSQL now has a desktop icon, which we'll reference in a moment. All right and we're finished. So I'll click the Finish button. So the database was installed and is running on my local system. However, let's go ahead and use HeidiSQL there to take a look at it. So I'm going to double click this icon here. So HeidiSQL is actually a tool that can be used to connect to different types of databases. So in this case, we need to tell Heidi which database to connect to.

**[02:05]** [02:05]
                                    So we can start with this initial session name here, which is basically credentials and information for our particular database instance we're going to connect to. I can leave the host name alone, that's fine. For the user, we'll use the root user that was created during the MariaDB installation process. We'll type in the password for them. And I'm going to change my port, again, I used port 3307. If you didn't change your port, then just leave it alone. We can click Save down here, which basically saves this information so that we can reconnect to this database again later. And I'll go ahead and click Open. And then we should see something like this. Now, when you install MariaDB, it gives you a bunch of different databases that are called, which are basically collections of tables. If I click on one of these, we can see all the contents. And actually, I guess it's more than tables. It's different objects too. So there's a couple of different databases. These ones that are here are generally used by the database in some way.

**[03:03]** [03:03]
                                    It's usually a good practice to not use those for things like Ignition or third-party applications. It's usually a good idea to add a dedicated database for those applications. So what I'm gonna do is because I didn't give it a name, it's titled Unnamed, I'm going to right click on it, I'm going to create new database. And this is just for testing and playing around. So I'm just gonna call this test, but of course we could give this a more useful name if we want to. You can call it Ignition or what have you. Whatever you end up calling this later on, when you're creating a connection from Ignition to this database, this is the name we'll use. But I'll leave it with test for now and I'll click OK. And there we are, we have our test database here. It doesn't really have too much inside of it right now, but that's fine. Later on when we connect Ignition to this database here, Ignition will be able to automatically start creating tables and populating content inside of here. Okay, that about wraps up this video here. We now have a running copy of MariaDB running on our local system.

</details>

---

### 9. Connecting to MariaDB Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to MariaDB Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-mariadb/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll connect Ignition to MariaDB database. So we'll start on our gateway here. Under the config section, under data bases and connections. So I do have an existing database connection. That is a SQLLite type but I do want to create a MariaDB connection. Now I already installed a MariaDB. You can check out the installing MariaDB video for more information there. But once it's installed, we can connect Ignition to it. So I'll start by clicking the create new database connection link here. I will select the MariaDB driver and I'll click next. Let's give this connection to name here. So how about just MariaDB. We can type a description if we want. And we need to specify in the connect URL where this database is located. As I mentioned earlier, I do have an instance of MariaDB running locally. In this case on the same system that my gateway is installed. So I can leave the IP address here, or the host part of the name here, with the local host.

**[01:06]** [01:06]
                                    For the port, I did change the port on MariaDB. I did use port 3307 because I'm already using 3306 for something else. So I will change the port here. But if you're using the default port for Maria DB, you don't need to change that. And then you do need to specify the name of the database. So you can create within MariaDB different databases. In the installation video, I created a new database called the test. So you'll want to just change the name or the word test here to match whatever the name of the database you're trying to connect to is. So I don't have to actually change this. Next we can type in a username and password to connect. Now it's usually a good idea within the database to create a specific Ignition user. So that way all of the user management and permissions can be handled from the database side of things. However, if you're just testing and trying things out, we can use the root user. So I'll just use the root user. Not something we generally recommend you do in production, but for testing and learning and developing, it's fine.

**[02:05]** [02:05]
                                    And then I'll type in my password for my root user. Now we can scroll on down this page here and create the new database connection. Oh and of course, make sure you're actually typing the same password over and over again. Try that again. Scroll on down. There we go. And it looks like we have a valid connection. So now elsewhere in Ignition, when we start doing things like trying to record data or query data out of a database, we can use this MariaDB database connection.

</details>

---

### 10. Installing PostgreSQL Video at Inductive University

:::tip Video Link
Watch the video: [Installing PostgreSQL Video at Inductive University](https://inductiveuniversity.com/videos/installing-postgresql/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll install PostgreSQL. To begin with, we'll need an installer. In my browser here, I'm looking postgresql.org. We'll head over to their downloads page. We'll select our operating system. And they provide us a lovely table, with supported versions and platforms. From here, I can download the installer, or download a zip archive full of binaries. I'm going to take the graphical approach here and download the installer, which I have already done, so I'll close my browser here. And I'll go ahead and run this installer. All right. And here we are in the wizard. I'll go ahead and click Next to get started. I'll use the default installation directory. And here are the things that this installer is going to install. Now, really, we only need two things. We need the server, and then we need this pgAdmin 4. These two things are gonna be pretty useful for us.

**[01:03]** [01:03]
                                    These other tools, I'll go ahead and leave there, and click Next. I'll use the default data directory. I'll click Next again. Now for the database server, there's going to be a super user, named Postgres. We need to give that user a password. So go ahead and type in something that you'll remember. And again, this is to kind of help us administrate the database server later on. I'll click Next. I'll use the default port. And I'll use the default locale. Here's all the stuff it's gonna do, I'll click Next. And we'll let the installer run. All right. And that finishes the installation portion. We can go ahead and finish, before we do, I'm going to uncheck this launch stack builder. Don't actually need it to open at the end here, but we can, you can always play around with that later, if you like. I'm gonna click Finish. Now, technically we have the database running on the local system here, so we could go ahead and start connecting to Ignition. But before we do, there's one little thing I would like to do, which is create an Ignition database, for Ignition to connect to later on.

**[02:06]** [02:06]
                                    PostgreSQL is a database server, which can have multiple databases inside of it. So we're going to create one specifically for Ignition to use later on, which is a, generally speaking, a good practice. Now you can do this through the command line, but you can also use that pgAdmin tool, I was talking about earlier. So the next step is to find pgAdmin. If you installed on Linux, pgAdmin is available under programming, in the application menu. On Mac, it's available in the applications folder, as an application. And on Windows, if you open up the start menu. Look down your list of programs here. Under postgres here, you should have pgadmin 4, which I'll go ahead and launch. All right. So when pgAdmin opens, it's likely going to prompt you about a master password. Now, in my case, it's asking me to enter the master password, but in your case, it might be asking you to create the master password. So this master password is different than the password we created earlier during the installation.

**[03:05]** [03:05]
                                    This is specifically for pgAdmin. So again, pgAdmin is a separate program from the database server we installed. So, go ahead and type in a password, again, something you'll remember. In my case, I just need to type in the password I typed in earlier. And I'll click Okay. And once you're here, we can actually go ahead and browse our servers, in the upper left-hand corner here. By default, when you install Postgres, it will go ahead and add an entry for whatever Postgres version you installed. So this PostgreSQL 13 here, is the one I just installed. So let's go ahead and enter the password. And this is for the Postgres user. This is the user we created during the installation. Not the pgAdmin password we just typed a moment ago. I'll click Okay. And we're now connected to the local database server. So, Postgres is a database server, which can have multiple databases inside of it. By default, it does create this Postgres database, that we can start creating tables and running queries against, but let's create our own.

**[04:05]** [04:05]
                                    So I'm going to collapse that. I'm going to right-click on Databases. I'm going to hit Create database. I'll type in Ignition. The name we type in here, we'll need to remember for later on, because when we try to connect Ignition to a database inside of Postgres, we'll need the name of that database. I'll leave the other options alone, and I'll click Save. And if we look in the upper left-hand corner, we can see that there is this Ignition database. If I click on it. Just took a moment there to refresh. We can see it's now up and running. And we're connected to it with pgAdmin 4. Cool. So now we have this other Ignition database we can connect to, which means we're ready to go ahead and move to the connecting video. So in the next video, we'll create a database connection from Ignition, to this Ignition database we just created inside of Postgres.

</details>

---

### 11. Connecting to PostgreSQL Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to PostgreSQL Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-postgresql/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll connect Ignition to a PostgreSQL Database. In the previous lesson, we installed PostgreSQL, and we created this Ignition, with a capital I, database, using pgAdmin. Now we're ready to connect our gateway to this Ignition database. I'm going to, in my browser, head over to My Gateway's Web interface. I'll switch over to the Config section. Let's go ahead and sign in here. We'll want to head over to databases and connections. From here, I'll click on the Create new Database Connection link. We will select the PostgreSQL driver. I'll click Next. Let's give this connection a name here. Since I'm very creative, we'll just call it PostgreSQL.

**[01:04]** [01:04]
                                    For the description, we'll just type in a quick note. We need to play around with this Connect URL down here. We just need to tell this configuration where the database is located. In my case, the database is actually installed on the same server as my Ignition gateway. Local host is technically fine here, but obviously we would replace that parameter with either another host name or IP address. I did use the default port for PostgreS during the installation, so I don't need to change that. We do have this little database parameter at the end here. This needs to match the database we created in the last video. As I pointed out, it was Ignition with capital I. We'll scroll on down here. We need to type in a username and password. For here, I'm going to use the PostgreS user that was first created when we installed PostgreS. In a production environment, I would not recommend you do this. You'd want to instead head back to PostgreS or pgAdmin, create an Ignition user, and give them the capability to create tables and write queries within the Ignition database.

**[02:10]** [02:10]
                                    However, this is just for testing. This is just to get you up and running. For more information on creating users, you can check out the PostgreS documentation. Once you have the credentials typed in, we can scroll on down. I'll click the Create New Database Connection button. It looks like we have a valid status. Now we're connected, and we can start using this database connection.

</details>

---

### 12. Connecting to SQL Server with Windows Login Video at Inductive University

:::tip Video Link
Watch the video: [Connecting to SQL Server with Windows Login Video at Inductive University](https://inductiveuniversity.com/videos/connecting-to-sql-server-with-windows-login/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to connect to a Microsoft SQL Server database using Windows authentication instead of SQL authentication. In my setup, I already have SQL Server Express installed on the same machine I have Ignition installed on. The first thing you'll need to do is import a DLL file that will allow you to use Windows authentication with SQL Server. You can get this DLL file by downloading the JDBC driver from Microsoft's website. I'll include a link below the video to the JDBC support matrix that's currently on the screen. You can figure out which version of the JRE is used for your version of Ignition by navigating to the Ignition install directory and then going into the user-lib and then the jdbc folders. Here's my MSSQL JDBC driver and I can see that it's for version 9.4.0 and it's for JRE11. If I go back to the support matrix and click on 9.4, I can find the version I need and I'll download the ZIP file. Once that's downloaded, extract the files and find the auth folder. Open the folder that's relevant for your OS version.

**[01:07]** [01:07]
                                    Since I'm running 64-bit Windows, I'll open the x64 folder and in here will be the DLL file. Copy the DLL and then open up your Ignition install directory again and copy the DLL into the lib\core\gateway folder. After we have the DLL file, we'll need to tell Ignition to log on using the Windows account that we're trying to authenticate to SQL Server with. To do this, open up Services, which you can get to from the search bar or you can find it in the Control Panel Administrative tools. Scroll down till you see the Ignition service and right click on it and click Properties. Click the Log On tab and select the "This account" radio button. Once you've provided the Windows username and password, click OK. Then you'll need to restart the Ignition service. Note that this will temporarily bring the gateway down. Before we can create the connection we need to do one last thing.

**[02:05]** [02:05]
                                    Open up the SQL Server Configuration Manager. If you followed along with our installation video, your SQL Server Browser service should be set to automatically start up, but just in case it isn't started or it's not set to automatic, you can change that here. Expand the SQL Server Network Configuration node and open the protocols. You'll need to change the TCP/IP protocol to enabled. It'll tell you that this won't take effect until the service is restarted. The easiest way to do that from here is to go back to SQL Server Services. Find your instance name, mine is SQLEXPRESS, and right click and restart. Now we can create the actual database connection from Ignition. Go to the gateway webpage's Config page and then go down to Database Connections. Create a new database connection with the Microsoft SQL Server JDBC driver, and then this will look pretty similar to creating a connection using SQL authentication. You can give the connection a name, point this to your database host, which is localhost for me, and pass the instance name.

**[03:19]** [03:19]
                                    The main difference is that we're gonna leave the username and password fields blank, and then in the extra connection properties we'll add a new property called Integrated Security that we'll set to true. With that, we can create the connection and it should eventually say that it's valid, and now we have a Microsoft SQL Server connection that's set up to use Windows authentication.

</details>

---

### 13. Using Store and Forward Video at Inductive University

:::tip Video Link
Watch the video: [Using Store and Forward Video at Inductive University](https://inductiveuniversity.com/videos/using-store-forward/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    The store and forward system provides a reliable way for ignition to store data to the database. When Ignition attempts to run a query that would modify a database table in some way, the query will first enter the store and forward system. Once in the system, the records remain until we receive confirmation from the database that the query has been executed successfully. This allows Ignition to keep track of what records were entered successfully into the database and which records failed to forward, either due to an error in the connection or the data itself. We'll start off in the status section of my gateway here. I'll click on store and forward. Within the connection section, the screen presents me with some data trackers for the data points per second entering the system and which records errored out along with those that have been dropped. Additionally, there is this store and forward engine for my My SQL database. When creating a database connection in Ignition, we automatically create one of these store and forward engines for the connection to use.

**[01:07]** [01:07]
                                    Earlier, I created some tags that are recording to a MYSQL database connection at a one second rate. Let's take a closer look at the store and forward engine to see how it's behaving. I'm going to click on the details button here. There are two areas the engines keep records, the memory buffer, and the local cache. When data is generated, the records will first be placed into the memory buffer. You can see that my memory buffer here is able to keep up with demand, so as historical records are being collected, they're entering the system and very quickly being shipped off to the database. If the records were not removed from the memory buffer in some time, or if a certain amount of data accumulates, it will be placed into the local cache. Now let's simulate a loss of connection. I'm going to shut down my database. Since Ignition can no longer communicate with the database, it will hold onto the records. You can see here that records are being moved over to the local cache.

**[02:02]** [02:02]
                                    While I'm waiting for the local cache to grow a bit more, I wanted to mention that the store and forward system uses a first in first out method. So even when a connection is down like this, it will maintain the order the queries were submitted. This means if a process requires some queries run before others, the system will respect that. Now that we have some records in our local cache here, I'm going to start my database back up. I've started the database, but the store and forward system will still collect records until the database is fully up and running. While we're waiting for that, another benefit of the system is that Ignition can optimize the queries before sending them to the database. This results in a smaller impact on network bandwidth as opposed to directly writing to the database. Now that Ignition has detected the databases back up, it will start taking records from local cache and send them off to the database. And just like that, our local cache is empty. All my records have been safely inserted into my database.

</details>

---

### 14. Configuring Store and Forward Video at Inductive University

:::tip Video Link
Watch the video: [Configuring Store and Forward Video at Inductive University](https://inductiveuniversity.com/videos/configuring-store-forward/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Let's take a look at the settings for a store and forward engine. I'm on the Gateway and I'm in the configure section under databases and store and forward. Here you can see I already have a store and forward engine for a MySQL database. You'll notice this note down below, stating a store and forward engine is automatically created for each database connection. So as soon as I added this database, the engine was created. Now before moving on, it's important to know that many objects and subsystems and ignition utilize the store and forward system such as the alarm journal. Some of these systems also have settings to skip or completely bypass the store and forward system. Now let's take a look at some of the settings here. All created engines, will have the same settings, so don't worry if you are utilizing a different kind of database.

**[01:02]** [01:02]
                                    I'll click on the edit button here to access those properties. The memory buffer size here dictates how many records can be held within the memory buffer. The store settings dictate when we should take records from the memory buffer and move them to the disc buffer. First, we have the disc cache enabled setting. If disabled Ignition will no longer store records onto the hard drive, and if the memory buffer becomes full, you could lose records. While the disc cache is enabled, the max records property here dictates the maximum number of records that will be saved to the hard drive. Then we have the right size and right time properties. These are used to determine when to move records from the memory buffer to the disc buffer. With the default settings, we'll wait until there are 25 records or at least 5,000 milliseconds have passed, whichever one of these two becomes true first. Finally, we have the only forward from cache option, which forces all records to go through the disc cache before being forwarded.

**[02:03]** [02:03]
                                    Otherwise, the system will pull from either buffer or both to try to satisfy the forward right settings. If we scroll down a little bit further here, we can take a look at these forward settings. These control how often we take records from either buffer and move them to the database. We have another write size and write time, which work in a very similar fashion to the store settings above. So again, we'll wait until there are at least 25 records in a buffer or until we've had items in the buffer for at least one second. Once these are true, then the records are pushed to the database, and again, this is for both buffers. If you look down a little bit further, you can enable a schedule and then define when you want to have that schedule run. This means that Ignition will not write anything to the database until the scheduled time. This gives you an opportunity to control when you're pushing data into your database.

</details>

---

### 15. Controlling Quarantine Data Video at Inductive University

:::tip Video Link
Watch the video: [Controlling Quarantine Data Video at Inductive University](https://inductiveuniversity.com/videos/controlling-quarantine-data/8.1)
:::

<details>
<summary>View Transcript (5 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at quarantined items and see what we can do with them. I'm in the status section of my gateway under connections and stored forward. You can see I have a quarantined item that was generated in a MySQL store forward engine. When a record is placed into the quarantine, it means that the query was unable to execute successfully. Instead of repeatedly trying to run the query, it is placed aside in the quarantine, providing an opportunity to correct or remove the record. Let's see what's going on with this record. I'll do so by clicking on the details button. You can see we have something listed under our quarantine items table. Here we have an id., the system gave the quarantined item as well as a count. If the same query is running multiple times, the system considers them all the same item, but different instances. We have a description of what the item is as well as the reason that it failed.

**[01:07]** [01:07]
                                    Now, I intentionally caused this item to become quarantined. I have a transaction group that's running and it's trying to write to a table called fridge status. I renamed the table in my database to something else, but the transaction group executed before I could update the table name in the group settings. Because of this, I now have a quarantined item. I could retry the query by clicking on the retry button, but in this case it would fail again, since fridge status still doesn't exist. The engine would not drop items from the quarantine either, regardless of how many times you retry them. I could remove them but then the data would be lost forever. So what I could do instead is I could click on this export button over here. I'm going to try to fix this record so I can insert it back into my database. I'm going to click on export. This will download an XML file.

**[02:04]** [02:04]
                                    I'm going to open it up here. You can use a text editor of your choice, and here we can see all my data as well as the database table that this is trying to write to. In my case, all I have to do is modify the name of the table, the record is attempting to insert to. So i'm just going to change the name of this table to match the new table name. I'm going to save my file and I'll use this import quarantine file section to add the updated record. I'll go ahead and select the file and submit. The page will reload, and you will now see I have two different items. So after importing a slightly different item into my quarantine, the system did not remove the old item. This gives me an opportunity to try pushing my corrected items into my database and then verify that they went where I wanted them to go. If not, I can take another export and try again. So for this top item here, the newly created item, I'm going to click the retry button.

**[03:04]** [03:04]
                                    This is going to inject this back into one of the buffers and attempt to store into my database. So I'll click retry, and in just a moment you can see that the record went in. Now that my updated record has been inserted, I could go ahead and delete my old records here. However, if you wanted to save it for any reason, you could archive this record. To archive the record, we can go to the store and forward section of our config tab. If I click more here on the My SQL engine, I have an option to archive disk cache. Choosing this option would shut down the disk cache and the archive data would move to an installation folder. Using the database name and the timestamp as the folder name. I'll go ahead and archive. Here, we can archive by checking the warning off and hitting archive. If I navigate back to the store and forward under my status tab, you'll see my quarantine items are empty. I could load the records back into the quarantine using the load option instead of the archive option, this time. Again, I would go back to the store and forward under the config tab.

**[04:11]** [04:11]
                                    I get another warning this time that the disk cache will be overwritten with my selection here. I'll choose the archive folder and check off the warning and hit load. I'll go back to the status section one more time to show my records were inserted. Since I have no use for this record anymore, I'll go ahead and delete it with the delete button. So if there ever is a problem in the store and forward with any of your data, you can always check the quarantine to see what the issue is and then make your corrections.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
