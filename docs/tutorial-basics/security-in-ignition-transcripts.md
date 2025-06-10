---
sidebar_position: 17
---

# Security In Ignition - Video Transcripts

This page contains transcripts from the security-in-ignition video course.

## Overview

These transcripts are automatically generated from the [security-in-ignition Course](https://inductiveuniversity.com/courses/ignition/security-in-ignition/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 4:32:27 PM
Source URL: https://inductiveuniversity.com/courses/ignition/security-in-ignition/8.1
:::

## Video Transcripts

### 1. Role-based Access Video at Inductive University

:::tip Video Link
Watch the video: [Role-based Access Video at Inductive University](https://inductiveuniversity.com/videos/role-based-access/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Security in Ignition is primarily role-based, meaning your users will have roles assigned to them, and we can check those roles at many different locations. To understand that better, let's take a look at where users and roles can be created. So I'm in the Configure section of my gateway, under Security and Users Roles, and I'm going to take a closer look at my default user sources here. So I click the 'manage users' button on the right and I'm going to head over to the Roles tab at the top here. I'll scroll down here, and you can see that I have three roles configured. Now, it's important to understand that there isn't really any structure to roles. There are no sub-roles or child roles that inherit some other settings from a parent role. Each role stands independently of all the other roles within the user source. Once you have a role created, then you can assign it to one or more users. So I head back to my Users tab here. You can see I've added a couple of users to my system here. The first thing I want to point out is that my Admin user here now has all three roles. So it is possible to give each user multiple roles. Additionally, I have a guest user here without any roles at all. So you could create a guest account or have a restricted user by withholding roles from that user. The way security normally works in Ignition, is that you can restrict some resource. So for example, maybe an entire window in one of my clients here. I can say that only operator should have access to that. So I can place a restriction, checking for the operator role. In that scenario, my admin user and my operator user would have access to it, while maintenance, or maint and guest, would not have access. This is one of two models you can use to restrict access to resources. By model, I mean "How do you want to handle your higher level users" here? In this scenario, I have given my admin user all of the roles possible. So that way my admin user always has access to everything in the entire system. This is certainly the easier model. The alternative model, though, if I switch over to this tab here - another user source I have - involves giving the least amount of roles to any user. In that same scenario, if I wanted to limit access to a window except for my administrators, and my operators, what I'd need to do is check for both roles on that resource. So I could have my window, when it opens, check for either the administrator role or the operator role. If the user has either one of those, they have access. Both models work great. Decide which one you want to use early on, and stick with it. It'll make your life a lot easier as you're adding more users and roles to the system.

</details>

---

### 2. Internal Authentication Video at Inductive University

:::tip Video Link
Watch the video: [Internal Authentication Video at Inductive University](https://inductiveuniversity.com/videos/internal-authentication/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Internal user sources are a collections of users that are stored internally on the gateway. So alongside all of your gateway configurations and projects we store information on your users and how they can log in. I'm here in the gateway under Configure. Security and Users, Roles. And you see I have two user sources created. These were both generated automatically when I installed Ignition. You can see both of these user sources are of Type internal. The opcua-module user source is how Ignition connects to its own OPC UA server, so I'm going to leave this user source alone and we'll focus on default instead. So I'm going to click the manage user button on the right. You can see that we have the admin user that we used to first get into the gateway and that user has the Administrator role. Now if I needed to add a new role or new user, that's actually really easy to do. I'm going to start by adding a new role. I'll click the Roles tab here at the top. You can see the Administrator role exists. I'll click the Add Role link down below. And let's create a new role here. So how about we call this Operator. So I'll click the Add Role button down below and the new role exists inside of the user source. Next, how about we create a new user and assign this role to them? So I'll click on the Users tab at the top and see a list of my users. And I'll click the Add User link down below. So let's create a user for Operators. I'll call this oper, as the user. And just to match the notation on the admin user. In the very least we have to give them a password so I'll type one in. And I'll scroll down here. Now there are a bunch of additional properties we could pass in here too, such as First Name, Last Name, Schedule, preferred language, some notes on the user and so on. But the area I want to focus on is the Roles property down below here. I stated earlier that I wanted to give this user the Operator role, so I'll check that Operator role. However, it is entirely possible to have user without any roles at all. You commonly see this when you have a guest account or a guest user. Additionally, I could have users with many roles potentially. So I could assign the Administrator role to this user if I wanted to as well. However, I'm going to keep this user as just a Operator so I'll uncheck the Administrator role, I'll scroll down here and I'll click Add User down below. And you can see, we added my oper user and they have the Operator role. So it's fairly straight forward to create new roles and new users. Now there are a couple of important properties on the internal User Source so let's take a look at those next. So I'm going to head over to the left and under Security, I'm just going to click on Users and Roles again. It should take me back to the User Source page here. And this time for default I'm going to click on the Edit button. Now if we scroll down this list here, you'll see that there's a Main section and it has a list of properties that are available to all user sources, such as the Failover Source and Schedule Restriction and so on. So I'll just slide right past those. And I want to take a look at the Password Policy section. These properties are unique to internal user sources. As the name suggests, they provide an opportunity for you to implement some sort of password policy. So for example, the Password Max Age property here will expire each user's password after a certain number of days. So if you wanted your users to have to change their passwords every so often, you'd want to look at this property. You can also specify the minimum number of characters that a password can contain. Password Complexity allows you to specify a number of character types that are required. So what I mean by that is, there are four character types here. There are lowercase letters, uppercase letters, digits and punctuation. So for example, if I were to change this to 2, then when my users create new passwords for themselves, they have to use any two of these. So they can use lowercase letters and digits or uppercase letters and punctuation, for example. If I wanted to make it very, very secure, I could bump this up to 4 and they have to use all four character types. And last would be the Password History. This property determines if your users should be able to reuse the same password and after how many changes should they be able to reuse those passwords. So if you're going to apply a maximum age to your users' passwords and have their passwords expire, it is typically a good idea to make sure that they can't just reuse the same password again and again. So you would definitely want to change the Password History to something other than zero.

</details>

---

### 3. Database Authentication Video at Inductive University

:::tip Video Link
Watch the video: [Database Authentication Video at Inductive University](https://inductiveuniversity.com/videos/database-authentication/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    A user source that uses database authentication allows you to store user information in an external database, instead of internally within Ignition. A benefit of using database authentication is that you can connect multiple Ignition gateways to the same database, and use the same user source information across all of the different gateways. Let's take a look at how a database authentication user source works. We start in the configure section of the gateway webpage in the users and roles section under Security. Here you should see a list of your already configured user sources. We want to go ahead and click on the link Create new User Source, and in the list of possible user sources, we want to select the database option. Once that's selected, you can go and scroll down and click the Next button to begin configuring our user source. We can first give it a name, I'm just going to leave mine at NewProfile, and then we can take a look at some of the other properties listed here. Some of them may seem familiar, while some of them are completely unique to the database user source. For example, here we can select to make this user source schedule restricted, we can setup a failover user source, and we can set the failover mode, just like we can with other user sources. We scroll down a little further, we can see some new properties. Here under main properties, we have the database property. This allows us to choose a database connection that we want to store this user source in. You can choose any one of your configured data sources, but since I only have one, I'm going to leave it at that. Next we need to choose the mode, either automatic or manual. This property is very important, because it will determine how your user source works. In automatic mode, the tables are automatically created for you and all interaction with the database is handled automatically. All relevant tables that get created for this user source will have a prefix that you can set right here, under the automatic mode properties. To make it unique, I can change this to whatever I want. Such as dbusersource, with an underscore. So, if I were to create my user source now, it would start with the prefix dbusersource, and then it would have an underscore, and then it would have the rest of the name of the table. If, however, you were to set the mode to manual, then you would need to manually create not only the queries, but the tables that the user source is going to use in the database. For the tables, you should probably go into your database manager and set them up there. But for the queries, you can set them right here in the manual mode properties down below. Each one of these properties takes a single query that has a very specific function. In addition, most of the properties have example queries that you can use if needed. Manual mode allows you to really fine tune how your user source works. Since I'm leaving mine at automatic, I can just leave all of these blank and click the Create New User Source button down at the bottom of the page. We can now see my new user source on the list, and it has a type of database. If I go over to the right here and click on the More button and go to manage users, you'll notice that not only are there no users listed here, but there's also no roles. Now even though all of this user source data is stored in the database, I can still manage it from here in my Ignition gateway. For example, I can click the Add Role link to add a role, and then give my role a name, such as User. When I click the Add Role button at the bottom of the page, you'll see it successfully added the User role. Likewise, I can go back to the Users tab and click the Add User link to add a user. I'll give my user a username of Joe, and a password. And I can even give him the role that I just created of User. Once I have that done, I can click the Add User button down at the bottom of the screen. You can see I now have my user Joe in here, and he has a role of User. Now if I were to switch over to a Designer here, go into the Tools menu and open the database query browser, we can see that I now have some new tables in my database that start with the prefix dbusersource. These tables are all being used by the new user source that I just setup. If I take a look inside the roles table, you can see I have my one role that I setup of User. If I switch over to my users table, I can instead see the user that I setup, Joe, his hashed password, as well as things like first and last name, and the schedule that I may have set for him. All of that is located here in the users table. Then you may have noticed that Joe here doesn't have any roles listed. This is because the user-specific roles are setup in a separate role mapping table. You'll notice Joe has an ID of one, and my users role had an ID of one as well. If I go down to my list of tables and look in the user_rl table, you can see we have one entry, a user ID of one, that corresponds to a role ID of one. Our user one is Joe and our role one is User, so this let's us know that Joe has a role of User. To learn more about the rest of the tables used in the database user source, you can check out our user manual, where you can find out how they work and interact with each other.

</details>

---

### 4. AD Database Hybrid Video at Inductive University

:::tip Video Link
Watch the video: [AD Database Hybrid Video at Inductive University](https://inductiveuniversity.com/videos/ad-database-hybrid/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    An Active Directory database hybrid user source gives you the benefit of using your Active Directory system for authentication and the flexibility of using your database to store user information. Let's take a look at how we would set up one of these Active Directory database hybrid user sources. We start off in the configure section of the Gateway webpage and we need to go to the users and roles page under security. Here we can see a list of all of our current user sources and we need to click the link that says create new user source. We then want to select the AD database hybrid option and scroll down to the bottom of the page and click the next button. Here's where we can configure our user source. We start off with the properties that are standard to most user sources, such as the name, the schedule restriction, as well as the failover source. We can then set our main Active Directory properties down a little further. Here's where we set things like the domain, the host name of the primary domain controller, as well as the username and password. These settings all work similar to the settings in an Active Directory user source. Next we can configure certain database properties. For each of these properties, we need to specify a query that will return specific data for each of these functions. There are some sample queries provided to help get you started. These settings work very similarly to the manual settings in a database user source. In addition, if you don't feel like setting up all of the database tables and queries on your own, you can instead first set up a database authentication user source, set it to automatic mode, and let that user source automatically create all of the appropriate tables for you. You can then delete that user source and keep your tables in the database that it created. You can also opt to manually create all the tables and queries yourself, really customizing how your user source works. Finally, if we scroll down a little further, we can click the check box to show advanced properties. Here we have some advanced Active Directory properties that allow you to really customize how your connecting to your Active Directory system. After entering in all the appropriate settings, you can simply hit the button at the bottom to create the new user source.

</details>

---

### 5. AD Internal Hybrid Video at Inductive University

:::tip Video Link
Watch the video: [AD Internal Hybrid Video at Inductive University](https://inductiveuniversity.com/videos/ad-internal-hybrid/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    The active directory internal hybrid user source provides security by authenticating through active director, yet still gives the flexibility of storing the user information internally in Ignition. Let's take a look at how we might set up an active directory internal hybrid user source. We need to start out on the configure section of the gateway webpage by going to the users and roles page. Here, we can see a list of all of our current user sources, and we need to click on the link create new user source. We can then select the AD internal hybrid option and scroll all the way down and hit the next button. Now we can configure out user source. First, we can set some basic properties, like a name for our user source, as well as a failover source. These properties work the same as they do in other user sources. Next, we need to configure our active directory properties. These properties work in much the same way that the properties of the pure active directory and active directory database hybrid user sources work. You simply need to fill out the information pertaining to your active directory system. Once we have all that information filled in, we can then scroll down to the bottom and click the create new user source button. Unlike the active directory database hybrid user source, we don't need to fill in any database information here. This is because instead of storing user information in a database, it's going to be stored internally within Ignition.

</details>

---

### 6. Creating an Identity Provider Video at Inductive University

:::tip Video Link
Watch the video: [Creating an Identity Provider Video at Inductive University](https://inductiveuniversity.com/videos/creating-an-identity-provider/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Identity Providers are the security system new to Ignition 8. Each Identity Provider that you set up within Ignition can point to a Federated Identity Provider, allowing that system to handle authentication of users. Perspective Sessions can use Identity Providers to authenticate users within the session. To add a new Identity Provider to your Gateway, we first need to come in to the Configure section of the Gateway Webpage. Once here, over on the left hand side under the Security heading, we're going to find the Identity Providers page. Here we see a list of our Identity Providers. To add a new Identity Provider, we simply need to click the Create New Identity Provider link. Here we determine which Identity Provider we want to make where the type of the Identity Provider is used to determine where the user is going to authenticate against. The first type of Identity Provider is the Ignition Identity Provider. I'm going to go ahead and click on the Next button, and we can take a look at its properties. Up at the top, you have some basic properties which are present in every Identity Provider. We can give the provider a name and a brief description. Once we have that configured, the only unique property that the Ignition Identity Provider has is the user source property which we need to point at an existing user source. A user source is set up within the gateway and we've looked at creating them in a previous topic. The user source that we select here will be the user source that the Identity Provider authenticates users against. To save your changes, you simply need to hit the Save button in the lower right hand corner. Let's go back and take a look at some of the other Identity Provider types. The next type is the OpenID Connect provider which allows us to authenticate against an OpenID Connect system. Again, up at the top we have some basic details where we can provide a name and description for this Identity Provider. Down below, we then have a number of properties that we can use to associate this Identity Provider to our OpenID Connect system. The values of these properties are all going to be unique to your system and they allow Ignition to authenticate users against it. To make this process just a little bit easier, we do have the ability to import this information here in the middle of the page. You can import the information either through a URL or a JSON document. Running the import will then fill in the configuration properties for you, making it easier to obtain this information. The last type of Identity Provider is the Security Assertion Markup Language, or SAML. Setting up a SAML Identity Provider works very much like setting up the OpenID Connect provider. We can configure a name and description for this Identity Provider, and then at the bottom of the page we have a number of configuration properties that we use to tie the Identity Provider to our SAML system. Again, the values of these properties are going to be unique to your Identity Provider, so you will need to look at your configuration document to figure out what the values of these properties need to be. Just like the OpenID Connect provider, we do provide you the ability to import this information either from a URL or an XML document.

</details>

---

### 7. User Attribute Mapping Video at Inductive University

:::tip Video Link
Watch the video: [User Attribute Mapping Video at Inductive University](https://inductiveuniversity.com/videos/user-attribute-mapping/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    When a user authenticates against an Identity Provider, the Identity Provider returns what's known as a response document which contains information about that user. With each Identity Provider, you have that ability to map user attributes to certain parts of that response document. To do so, we first need to come into the Identity Provider's page in the Configure section of the Gateway Webpage. Here, we need to find the Identity Provider that we want to manage the user attribute mapping for. Click on the more button on the right hand side and go to User Attribute Mapping. On this page, we're provided with a list of user attributes that we can map to certain parts of the response document. In most cases you're going to use a direct path like you see here in these examples. However for each attribute, you can also choose to do an expression type mapping. This allows you to use the expression language to map the attribute to a part of the response document. This can allow for dynamic attribute mapping depending on what you have in the expression. To find out what the paths are to map attributes within your response document, you would need to look in the documentation for your federated Identity Provider.

</details>

---

### 8. Security Levels Video at Inductive University

:::tip Video Link
Watch the video: [Security Levels Video at Inductive University](https://inductiveuniversity.com/videos/security-levels/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Security levels are new to Ignition 8 and are used to determine what level of access a user has within the system. Security Levels are set up for the entire Gateway and Identity Providers can provide information that places users into certain levels. To manage our Security Levels, we first to come into the Gateway Webpage and go to the Configure section. Once here, we then need to find the Security Levels page on the left underneath the Security heading. On this page, we see all of our Security Levels listed out in a tree format. If we wanted to add a new Security Level, we simply need to click on the Add Security Level button in the lower right. If we wanted to edit or remove a Security Level, we first need to click on the Security Level and then on the right-hand side we can make changes to it or click on the Delete button to remove the level altogether. Once we've made all of our changes to the Security Levels, we then need to scroll down and click on the Save button to save our changes to the Security Levels. When managing your Security Levels, it is important to keep track of where the level is located, as this will determine when a user is assigned that level or not. There are few prebuilt Security Levels that help us place our Security Levels into categories. For example, at the very top of our list of Security Levels, we have the Public level. The Public level is actually available to everyone, even if you haven't authenticated against an Identity Provider yet. This means that if a component in a project was designated as having a public access level, anybody that accesses that project, even if they haven't logged in, can use that component. From here, drilling down further generally means a more secure level. One of the next levels down is the Authenticated level. A user is assigned the Authenticated level if they have authenticated against an Identity Provider. At this point, the Authenticated Security Level doesn't care who the user is, what roles they might have, or which Identity Provider they authenticated against. All that matters is that the user did authenticate against an Identity Provider. If they did, they are granted this Security Level. So, designated a component as requiring the Authenticated Security Level means that the user needs to log in before they can use that component. Now as I mentioned earlier, where the Security Level is placed within this list is very important and that's because it determines what type of Security Level we're going to be dealing with. There are three main types of Security Levels. Security levels that correspond to roles, Security Levels that correspond to Security Zones, and then custom Security Levels. For the most part, like the Public and Authenticated levels, each Security Level has some logic behind it that determines when that user is granted that level. The logic running behind each level is determined by the type of Security Level. For example, the first type of Security Level is the Security Level tied to a role. If we drill down into the Authenticated section, we find the Roles section. The Roles section itself doesn't have any logic behind it, but it contains a list of Security Levels that are driven by the roles that the user has. The roles that the user has is determined by the Identity Provider. So if a user authenticates against an Identity Provider and the Identity Provider returns to us that the user has a role called Maintenance and a role called Manager, then it's going to assign them those appropriate levels. Because all Identity Providers use these same Security Levels and because we don't know the roles that are within the Identity Provider before we authenticate, you do have to manually enter in all of the roles for each of your Identity Providers here. You do need to ensure a name of the Security Level that you create in this Roles section matches up to the name of the role that the user might have within the Identity Provider. Because each of the Security Levels within the Roles section corresponds to a user role, you'll notice that we can't nest these levels within one another. If I select one of my Security Levels corresponding to a role, I can't add a new one underneath it. The second type of Security Level are the Security Levels that correspond to Security Zones. Like the Security Levels tied to roles, the security tied to Security Zones has logic that's determined for us. If the user falls into a particular Security Zone, they get the get the corresponding Security Level for that zone. However, unlike the levels tied to roles, the Security Levels for Security Zones are actually created for us. Meaning, when I create a new Security Zone, a corresponding Security Level is automatically created for me. Additionally, you'll notice that I can't even add a new Security Level into the Security Zone section. Finally, the last type of Security Level is the Custom Security Level. The Custom Security Levels are unique in that we can actually build the logic behind them that determines when a user is assigned to that level. In my list here, I actually have two Custom Security Levels, Upper Management and Night Shift. Both of them work a little bit differently from one another. You'll notice the Upper Management level lies outside of the Roles section, but inside of the Authenticated section. This means that in addition to whatever logic I put behind it that will determine whether a user falls into that level or not, the user also needs to be authenticated. Typically, these Security Levels are used to group users more effectively than the roles that we get from the Identity Provider. Like the Upper Management level, the Night Shift Security Level allows me to place custom logic behind it that determines when a user is granted that level. However, unlike the Upper Management Security Level, Night Shift falls under the Public Security Level. Because it is outside of the Authenticated level, a user does not need to have authenticated against an Identity Provider to be granted this level. This means that any user, even if they haven't authenticated, can be granted this level, as long as they meet the requirements set forth by the logic behind the level. One thing to keep in mind for the Custom levels outside of the Authenticated level is that because users may not have authenticated yet, we can't check user-based information within these levels' logic. We can only use information available publicly. Now when you set up these Custom Security Levels, the next thing that you need to do is set up the logic that determines when a user falls into those levels. We will take a look at how to set up that logic in the next video, Security Level Rules.

</details>

---

### 9. Security Level Rules Video at Inductive University

:::tip Video Link
Watch the video: [Security Level Rules Video at Inductive University](https://inductiveuniversity.com/videos/security-level-rules/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    When setting up Security Levels, you may set up some custom Security Levels that need special logic behind them that determine when a user falls into that level. That logic is called Security Level Rules. In my list of Security Levels here I have two custom Security Levels: Upper management and night shift, and both of them have Security Level Rules that determine when users fall into those levels. To configure the Security Level Rules, you first need to go to the Identity Providers page. So on the left hand side, I'm going to click on the Identity Providers page under the security heading. Here we see a list of all of our Identity Providers. Each Identity Provider can have its own set of Security Level Rules. I need to find the provider that I want to set up rules for, and click on the more button and then go to Security Level Rules. Here we see a list of all the Security Levels that can have a logic added to them as well as their parent levels. You'll notice the public and authenticated levels are listed here, but I can't actually add any logic behind them, because their logic is already determined. To add Security Level Rules to a Security Level, you simply need to click on the Security Level that you want to add some rules to. And then on the right hand side, provide the rules in the form of an expression. Once you've made your changes, you can hit the save changes button down at the bottom right to save the Security Level Rules. Now as I mentioned, the Security Level Rules are built using the expression language. Which means you have all of the expression functions available to you. You can also pull in any Tag values that you might need, to set up your rule. My night shift Security Level is using the timeBetween expression function to check whether the current time is between the hours of 6:00 p.m. and 6:00 a.m. If the current time is between those two times, then the user will be granted the night shift level. Note that because the night shift level is outside of the authenticated level, the user doesn't need to be logged in to be granted this level. I can use this to provide some special functionality to any of my users who work during the night shift. The upper management Security Level is using two special pieces in its expression. First, because the upper management level is underneath the authenticated level, that means that we can pull information from the Identity Provider related to the user. You'll notice I've done that here, using the special reference idp-attributes: the name of the attribute that I want to reference, in this case roles. This will provide me with a list of all of the roles that the user has. The second special thing is the expression function containsAny. containsAny and its counterpart containsAll, check to see whether any or all of a number of values are contained within a list of values. So in this example here, I am first grabbing the list of roles that the user has assigned to them by the Identity Provider. I am then checking to see if the manager role, supervisor role, administrator role or director role is present within their list of roles. If any of those roles are present for the user, then that user is granted the upper management Security Level. This can make it easy to assign functionality to a large group of users. Instead of assigning all role levels that might be able to use a certain component, I can simply allow the upper management level to use that component and provide that level for users that fall in that category.

</details>

---

### 10. User Grants Video at Inductive University

:::tip Video Link
Watch the video: [User Grants Video at Inductive University](https://inductiveuniversity.com/videos/user-grants/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    Security Levels grant access to different parts of the Ignition system, where each Security Level has its own set of rules that govern when a user is granted that level. However, it is possible to override the default behavior of a level and grant it to a user regardless of whether they meet the requirements set forth in the rules or not. These overrides are called User Grants, and they are set up per Identity Provider. To create these User Grants, we're going to come into the Gateway webpage in the Configure section and navigate to the Identity Providers page underneath the Security heading. Once here we're going to find the Identity Provider that we want to add User Grants to, and click on the more button on the right and go down to User Grants. Here we have the ability to add, edit, or remove User Grants. I currently don't have any but I can easily add one by clicking on the plus button up near the top of the middle of the page.

**[01:08]** [01:08]
                                    I'm going to get a popup that asks me identify the user that I want to add to the User Grant system. I can either identify them based on the unique ID that they have within the Identity Provider or I can identify them based on their username. I'm going to go ahead and use the username option and identify my user called John. Once I have that set I can go ahead and click on the confirm button and with John selected we now see our Security Levels tree on the right. I have a Security Level here called Upper Management. It's requirements are that a user has at least one of the roles that pertain to an Upper Management level position. Even if John doesn't meet those requirements, by checking Upper Management I tell the system that I want John to be granted the Upper Management Security Level no matter what. I do want to point out that you don't see any custom Security Levels that lie outside of the Authenticated level.

**[02:09]** [02:09]
                                    This is because for levels outside of the Authenticated level they don't have access to user information since users can be granted those levels without logging in. If the user hasn't logged in, then we're not sure who that user is so it makes it impossible to give them User Grants when they haven't logged in. Once you've configured your User Grants the way you want, you can click the save button, down in the bottom right-hand corner of the screen to save your changes.

</details>

---

### 11. Requiring SSL Video at Inductive University

:::tip Video Link
Watch the video: [Requiring SSL Video at Inductive University](https://inductiveuniversity.com/videos/requiring-ssl/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    To enhance Security in Ignition, you may opt to enable SSL encryption. The Ignition Gateway is a web server that serves information to web clients such as, your web browser. The use of SSL allows for the data the Gateway shares with web browsers to be encrypted and therefore, more secure. Additionally, the communication between the Gateway and the designer sessions, vision clients, and perspective sessions will also be encrypted, making them more secure. Enabling SSL is simple. All we have to do is to go over to the configure section of the Gateway and select "Web Server" under "Networking". Here, we will see the setup SSL/TLS button. And when we press it, we will begin the SSL/TLS setup wizard. First, we are asked for a list of requirements to be able to setup SSL. The list includes, a private key, as well as a list of certificates, which should be provided to you by your CA, or Certificate Authority. The concept here is that Ignition will generate a Certificate Signing Request, or CSR, to be sent to a Certificate Authority, who reviews a request, and grants users signed certificates to be installed on their Ignition Gateway web server. By doing so, if a web client, such as your web browser, connects to the Ignition Gateway web server, the server will present it's certificate to the client. The client will see that it is a signed certificate, by a valid Certificate Authority, and it will trust the server, and proceed to securely transact with it. If I have all the items on this list, I can simply click on this option here, where I will be prompted to upload any and all relevant files. I don't have any signed certificates, so I will hit "Cancel". If you do not have any of the items listed, you can click on this option, where you will be asked to fill out some basic information such as, your organization name, domain, location, et cetera. Upon completion of this form, Ignition will automatically generate a CSR to be sent to a CA for review. The CA will then provide you with the necessary signed certificates, to be installed on the Ignition server. Users also have the option to have a self signed certificate. If we head down to the "Advanced properties" here, you will see the option to install a self signed certificate. If I select it, we see that a warning is presented to me by my web browser. Clicking "Advanced" and then selecting to proceed, I am able to go to my Gateway's web interface, which now has SSL/TLS enabled. At this point, you might be wondering, what is a self signed certificate? Well, we previously explained how a certificate must be signed by a valid Certificate Authority. What we did instead, was have Ignition sign it's own certificate, which allows for the enabling of the SSL/TLS without a CA getting involved. The only drawback is that, since this certificate is not signed by a valid CA, your browser will not trust the Ignition web server, and therefore, you will see warnings telling you the connection is not secure. It is worth mentioning, that these warnings will only be visible in your web browser, meaning they will appear on your perspective sessions. Your vision clients and designer sessions, will not see any security warnings. Also, if you look at the address bar at the top here, we're using HTTPS S for Secure connection. And we're using Ignition's default SSL port, 8043. Heading back to the web server settings, we can configure the ports, ACTP and ACTPS traffic we'll use. We also have the freedom to force or direct, all HTTP traffic to it's HTTPS counterpart. Additionally, you can include or exclude cipher suites for clients connecting to Ignition, using SSL/TLS.

</details>

---

### 12. Security Zones and Service Security Video at Inductive University

:::tip Video Link
Watch the video: [Security Zones and Service Security Video at Inductive University](https://inductiveuniversity.com/videos/security-zones-and-service-security/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Security zones are groups of gateways, computers and I.P addresses that can have a security policy applied to them. This allows you to configure security restrictions to incoming connections based on the source of the connection. You can see, I have my designer open here. This was launched from a remote gateway. On my gateway, I've created a remote tag provider, and just looking at my looking at my local systems, site A tag A provider. If I tried to write to one of these writable tags. I get a little error message. This is because the security zone is restricting write access to these tags. So let's see if we can modify this. I'm going to close this error and I'm going to head over to my gateway. Now this is my local gateway, which houses the tag provider I just tried to write to remotely. You see, I have two security zones already created. Zone one and default. Default is always present and it can't be modified. You see there isn't a delete or edit button over here. The reason for this is because of a incoming connection does not cleanly fall into one of my other zones. We will place it in my default zone. But let's take a look at what I've done with zone one. So I'm going to click the edit button here. And I'm scroll down my list. And there are two main sections you're going to want to be aware of. The identifiers and the qualifiers. Identifiers are a list of checks about the locations of the incoming connection. When someone tries to connect to my local system here, we'll check each three of these properties to see if atleast one of these configured values matches the incoming connection. So in this case, I have the IP address and the gateway name defined. You can have multiple identifiers configured, but to be placed into this security zone, the incoming connection only has to match one of the identifiers. Each identifier takes comma separated values so you can specify multiple values for each property. Additionally, you can use the asterisk as a wildcard character. So if at least one of the identifiers match, we have the checked qualifiers. All of the qualifiers have to match for the connection to be placed within the security zone. So for example, in this security zone, if I only wanted direct connections, I didn't want to use a proxy gateway at all, I can toggle my direct connections required. So I am going to use the same settings. I am going to scroll back up. And under security, I am going to go to the service security page. So once you've created your security zone, the next step is to define a policy on each one. You can see both of the security zones here. You can see that I have policies defined on both of them. And you'll also notice that I can change the order at which they are listed here. The reason for this is, if an incoming connection potentially falls into multiple security zones, when you look at this list here, start at the top and work your way down. Whichever security zones the connections falls into first, is the one we use. So the order does matter here. Now, I know my zone one policy is what's preventing the tag, right. So let's edit this policy. And if I scroll down, you'll see a list of subsystems that I can figure my security policy for. Under each sub system, there's a service access property here which basically allows us to turn off the subsystem to any remote connections. This allows me to protect my subsystems from any remote connections placed into the security zone. Now I can deny access to my local alarm notification subsystem. Now scroll down here a little bit more. Let's take a look at history provider access and tag access. Both of these subsystems have a default access level of some sort. They also list each individual provider within their subsystem here. So by default, all of the providers will use the default access level. Which, in this case, from my tag providers, is read only. But I can also specify individual providers to have a different access level. So I know I want to write to my site from A provider here. So I am going to change this from inherited to readwrite. So my default and system tag providers will still inherit the only read only access level. Where as my site A will now use readwrite. So I'm going to scroll down here a little bit further. I'm going to click save. Let's switch back to the designer so we can test this out. With the changes to the security zone in place, I can try and write to the tag one more time. And this time, the write went through. So security zones, you have a great way to completely deny or allow access to some subsystem without opening the entire system up to another remote connection. I'll head back to the gateway for one more point. The default security zone does not have a policy to find automatically. This policy here was added at an earlier date. As stated earlier, connections that do not fall into another policy, will fall back to the default security zone. Because of this, it is recommended to add a policy to the default zone and make it as restrictive as allowable.

</details>

---

### 13. Restricting Gateway Access Video at Inductive University

:::tip Video Link
Watch the video: [Restricting Gateway Access Video at Inductive University](https://inductiveuniversity.com/videos/restricting-gateway-access/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll discuss how we can secure our gateway webpage from unwanted access. Now, before we get started it's worth noting that the strongest form of security we have is network security, so keeping unwanted users from accessing the gateway webpage at all might be a good start. But in terms of restricting access within your gateways network, there are some simple steps we can take to control who can log in to different sections of the gateway webpage. To get started, I'm on my gateway webpage here and I just need to go into the config section of the webpage, then find the security section, and select general. The first thing to know about securing the gateway webpage is that logging into the gateway webpage is done against an identity provider, so the most important property in here will be the system identity provider setting. The identity provider we choose will be used for the gateway webpage, as well as the designer, if our designer authentication strategy is set to identity provider. So, with an identity provider specified, the only other piece here is setting required security levels for accessing the gateway config section, the status page, and potentially the homepage, too. Entering security levels here will restrict those areas of the gateway or designer to users that have been granted these specified levels. When we specify these levels, it's important that we use the full security level path and we can use commas to specify multiple security levels. If we do, we have the ability to choose between requiring all of them or just one of them. Here we're seeing effectively the default values for everything, but breaking out different features into different levels could be a good idea. For example, allowing managers to access the status page, where they can see details about the running gateway, but not the config page, where they can potentially break something important, might be a good idea. It's also worth keeping in mind that someone with access to the config page could come in and change all these settings, so generally speaking, the config page should be the most locked down part of your gateway. In any case, however you'd like to organize or restrict access to your gateway, this security page is here to help.

</details>

---

### 14. Project Permissions Video at Inductive University

:::tip Video Link
Watch the video: [Project Permissions Video at Inductive University](https://inductiveuniversity.com/videos/project-permissions/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    The Designer gives users the flexibility to configure a list of required roles, to be able to delete, protect, save and view project resources. Here in my Designer, I have a window open with a user management component. You can see all the users and roles associated with my default user source tied to this project. More specifically, I have delete, protect, save and view roles. If I go up here to project, project properties, under project permissions, I can configure this project to require roles to perform project related actions. Here, with the view section in focus, I can press the space key or begin typing and I will see a list of roles to choose from. I will select view. So now you need to have that view role in order to be able to view this project's resources. Similarly for the save action, I will select the save role which means you need to have the save role to save project resources. I will do the same and tie the delete and protect resources actions to their corresponding roles. If I wanted to require more than one role for a specific action, I can simply separate each with a comma. Of course, for any of this to take effect, I have to save my changes. Then, in order to do any of these actions, your users will have to have those specific roles. This allows you to fine tune your project security.

</details>

---

### 15. Locking Project Resources Video at Inductive University

:::tip Video Link
Watch the video: [Locking Project Resources Video at Inductive University](https://inductiveuniversity.com/videos/locking-project-resources/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Individual resources inside of an ignition project can be locked. Here I have a vision project open in my designer. Specifically, my window here is open. I can right click on my window and I can select to protect it. Doing so will now show a little lock on my windows icon. What does this mean exactly? Protector resources or resources that can only be edited by selected users who have the required roles. This basically means that you can prevent a resource from being edited, but users will have access to your designer. You can select which user roles are required to modify a protected resource by heading to project, project properties. And under the project permissions, you will see a protect resources section. This means that users with the roles listed here will be able to modify the resources in the project marked as protected. This is often used in scenarios where development work is finished on a window and no further changes should be made to it. Other projects like vision templates or alarm pipelines are often protected so they may be used, but not modified. Users with a required role are allowed to modify the resource but, a message will appear informing them that the resource is protected and will be asked how to proceed. What if I do not have the required roles to be able to edit a protector resource. Let's log in with a different user to see what this will look like. I am now logged in with a user with operator roles, meaning that I do not have the required roles to edit protector resources. If I try and open my protected window here, you will get an error telling you that you do not have the permissions to edit the resource.

</details>

---

### 16. Component and Window Security Video at Inductive University

:::tip Video Link
Watch the video: [Component and Window Security Video at Inductive University](https://inductiveuniversity.com/videos/component-and-window-security/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson we'll be taking a look at restricting access to individual components and windows in the Vision Module based on user roles. Vision gives us a handy interface for configuring this kind of security. So to see what I mean I've built a little testing interface here, and in this interface I've added four buttons that all just say Click me. On each button I'm going to be configuring a different kind of security restriction, and I'm going to be locking down the resource to specific users based on their role. Let's start with our first button. So I'm going to select my button, and then if I right-click on that button, I'm going to search down in this menu here until I find Security. So what that's done is it's opened up my Security interface on the left-hand side here, on top of where my Property Editor used to be. Now, I don't want just anyone to be able to click this button, and this interface gives us an easy way of configuring that. Currently I have this Inherit Permissions checkbox checked. What that means is that rather than using any of the security settings below, we'll simply defer our restrictions to those of the parent, which in this case is the root container of my window. But, if I uncheck that Inherit Permissions checkbox, now I can configure security restrictions for this component specifically. The way that this works is in the top half here I specify some number of restrictions I'd like to place on the component. I can choose between putting an action denied overlay over it, or I can simply disable the components, or I can hide it altogether. For now I'll leave this button's restrictions alone. Underneath that Restrictions box is an Exempt Roles box. This is where we configure which users should be able to circumvent the restrictions we've just placed. I don't want to disable my button for everyone, I want to make sure that administrators can still use my button. So I'm going to add Administrator as an exempt role here. So now if you're an administrator you'll be able to use the components, otherwise it will be disabled for you. One additional note, this disable events checkbox prevents any scripts on this button from firing. So if I had an actionPerformed event handler on this button it would not work. Let's play around with some of our other buttons here, now that I've configured this first one. So I'll click my second button here, and I left the Security panel up so it's already here where we left it. But now it's showing the security restrictions for my second button. So once more I'll uncheck Inherit Permissions, and this time, as per the notes that I've left above the button, I'm going to set my restrictions to Hide, and my exempt roles to Operator. So this will hide the button if you do not have the operator role. Next, I'll go ahead and click on my third button here, come back over to my Security panel, and uncheck Inherit Permissions, and then on this one, I'll put an Access Denied Overlay, and I'll put two exempt roles, both Administrator and Operator. What we're going to find when we test this out, is that the user only has to have one of these roles in order to access the button. So as long as the user is either an administrator or an operator, they'll be able to use the component just fine. Finally, I'll leave the fourth button alone, it'll be my control button, just to see what a standard button looks like. So now that I've set up some basic security restrictions on my buttons, I'm going to go ahead and save my project, and then let's go ahead and test this out in a client. So I'm going to go to Tools, Launch Project, and then Launch windowed. And I'll go ahead and drag over my client. And I'll start by logging in as an admin user. So I'll type admin, password. This is just a user that I've set up that has an administrator role. So for our first and third buttons nothing has happened because the administrator role is exempted, and that's a role that we currently have. For the fourth button nothing has happened because there are no restrictions on the button in the first place. But our second button is now invisible. Because I only exempted the operator role, this hide restriction is being enforced. It's worth noting that there is no hierarchy to our role structure in Vision. So even if it might seem that an administrator should be able to do everything that operators can do, you will have to give administrators the necessary permissions explicitly. So how about I sign out, and this time I'll log in as Bob. Bob is an operator. He does not have an administrator role but he does have that operator role. And this time when we look in here, the second, third, and fourth buttons are functioning normally because the operator role was explicitly granted, or there were no restrictions in the first place. But this time our first button is disabled. That means that I cannot click on the button, no matter how hard I try, and no events on that button will fire, since I do not have the administrator role. So finally I'll sign out again, and this time I'll sign in as guest who has no roles whatsoever. This time we'll be subject to all of the security restrictions in our window. Because we have no roles, the first button is disabled, just like it was for our operator. The second button is hidden, just like it was for our administrator. And the third button has an access denied overlay, which will restrict access to the component as well. One useful thing to note here, if you disable the component, or put an overlay on it, that will immediately let the user know that there is a resource present, but they don't have access to it, whereas using a hide restriction here, might keep a user from knowing about a feature at all, which might be problematic, if it's associated with a role they were supposed to have. So it's worth keeping that in mind, when you're designing security restrictions for your system. So now that we've played around a little bit with component restrictions, I'm going to go back into my Designer, and it's worth noting that different objects in Vision will have different available options in our Security interface. So I've been configuring security on components directly but if I select the dark gray background, that selects my window's Root Container, and we can see that that has security restrictions of its own. Finally, if I select the window itself in the Project Browser, so the security window in this case, I can even configure security on that. So we have this Do Not Open restriction. So if I wanted to, I could make it so only administrators could use this window. So effectively, this interface can be used for pretty much any object in Vision.

</details>

---

### 17. Project Security Video at Inductive University

:::tip Video Link
Watch the video: [Project Security Video at Inductive University](https://inductiveuniversity.com/videos/project-security/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Every project in Ignition is going to have authentication associated with it. Projects can use a classic or an identity provider authentication strategy. Here in our designer, we have a project open name Security. If I head down to its project properties, we can see all the settings associated with this project. We will focus on the identity provider and user source settings. Whatever User Source I configure here will be used to verify my login credentials when my vision project is launched. Additionally, you can add any required client roles. And depending on what roles you put in here, only users with those particular roles will be able to log in to the client. Similarly, whatever Identity Provider I choose here will be used for authentication purposes when the vision project is launched. The authentication strategy setting under vision, login is what allows users to configure what authentication mechanism is used for the security of the project. In classic mode, the ignition user source configured for this project will be referenced for authentication. What I mean by this is that you will be prompted for login credentials when launching your project and the set of credentials you provide will be verified against a User Source defined in your gateway. Currently, this project is set to classical authentication strategy. So, launching a client by pressing the F10 shortcut key, I will be greeted by the basic login screen to authenticate against the default user source for this project. When using an identity provider authentication strategy. After having saved my changes, the user will again be prompted for login credentials when launching the project. However, they will be redirected to a web browser window where they will be able to authenticate against the identity provider configured for the project. Once authentication is successful, users will be able to go back and access their vision client.

</details>

---

### 18. Securing Event Handlers Video at Inductive University

:::tip Video Link
Watch the video: [Securing Event Handlers Video at Inductive University](https://inductiveuniversity.com/videos/securing-event-handlers/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Security can be added to any of the event handlers in Ignition. To demonstrate that, we're going to drag a button onto my window from the component palette. Right-clicking on the button, and selecting "scripting," will bring up the button's scripting editor window. On the left here, we see a list of all the event handlers associated with this button. We go over these event handlers in more detail in the scripting section of Inductive University. But for this lesson, we will use the action perform event handler. I will configure a navigation script. I'm going to tell the button to open and center my window named, "Pop-up." On the bottom here, we will see a section for action qualifiers. Clicking on the security button brings up a menu that allows you to select the set of rules to be required for this navigation action to work. I will configure this to require an administrator role for my navigation action to work. Heading over to the script editor tab, we see that Ignition has generated our navigation script for us. Diving into the code, you'll see that line six uses the, "getRoles," system security function. This function will return the roles of the currently logged-in user. All line six is doing is checking if administrator role is part of the list of roles the currently logged-in user belongs to. If the logged-in user does, in fact, have the administrator role, then the open window function and the center window function will be executed. If they user does not have the administrator as its role, an error box will appear notifying the user they have insufficient privileges. Any of your scripts can use this exact same system. If my security condition is met, then go ahead and execute the script.

</details>

---

### 19. Client Permissions Video at Inductive University

:::tip Video Link
Watch the video: [Client Permissions Video at Inductive University](https://inductiveuniversity.com/videos/client-permissions/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    Ignition has a security mechanism called vision permissions, these permission rules can be found by going up to the project properties and go into the permissions section under vision. Here we have a list of actions that can be done from the client that interact with the gateway in some way. Because these can interact with the gateway, they can be seen as harmful to the security of your system. If the checkbox next to the action is not checked, then this permission is disabled, what this means is that an user will not be able to do this particular action within the client, so for example, the tag editing permission allows you to add, remove, or modify a tag when you're in the client. Disabling this action will block any client side tag modifications. One of the most important things to understand about these permissions is that by default, all of them will be disabled in a new project, this means that when making a new project, certain things that you're used to doing on a regular basis might not be allowed, until you come into this window and enable its security permission. In addition to enabling one of these actions, you can also set up required client roles here in the text field next to the action itself. Leaving the field blank, will allow anyone to perform that specific action. Or I can start entering in one of my user roles and select it from the drop down here, the user must have this role to be able to perform this action. In addition to listing user roles, I can also list a user role, and pair it with a security zone using the syntax user role name,@, and the security zone name. If I needed to, I can also select multiple user role and security zone combinations, by separating each one with a comma, this allows you to fine tune exactly how the security in your client, is going to work for these particular actions. Let's take a look at an example of how we might use the legacy database access permission. The legacy database access allows you to run standard SQL queries, for both bindings and scripting, while it's disabled, the only SQL queries that are allowed to run are those from transaction groups and those that use name queries. I'm going to leave it disabled for now, and go ahead and cancel out of here and open up a window that I have created already, you'll notice that I have a table, and if I go to the property editor on the data property, we'll see that it's just using a standard SQL query. Now, even though legacy database access was disabled, it still works here in the designer, because those permissions only affect the client, not the designer, this allows you to configure security, and still work freely within the designer. If I close this and go over to my client, once I log in, you'll notice that when you take a look at the table, it'll have a red overlay, this lets us know that we don't have permission to actually run that type of SQL query, this is because when legacy database access is disabled, nobody's allowed to use legacy database access of standard SQL query bindings from a client, however, if I were to go back into my designer, and go into the project properties once more, and enable legacy database access, after saving my project, I can come back to my client, update it, and you'll notice that now the SQL query binding works as intended. These client permissions allow you to finely tune what actions users can do from the client that affect the gateway, giving you more control over the security of your system.

</details>

---

### 20. Setting Client Read-Only Video at Inductive University

:::tip Video Link
Watch the video: [Setting Client Read-Only Video at Inductive University](https://inductiveuniversity.com/videos/setting-client-read-only/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    The client's read write mode can be set using a script, and here you can see I have a couple buttons, and a numeric text field. The numeric text field is linked to this New Tag, it's bidirectionally bound, so if I type into it, it should modify that tag. Now by default, all of your clients are going to be in read write mode, but I have two buttons here, I'm going to go and look at the scripting for my read only. And it's a pretty simple script, all we have to do is call system dot util dot set connection mode, and here, if you look at the description of it, you can see that one is disconnected, two is read-only, and three is read write. So that means I am sending it for read-only to two, and for read write to three. Now I can go into the client here. Once I'm in the client, you can see that if I type in some value here, we can write, changes the value to 50. If I change it to a read only mode, now when I try to write a new value, we get an error message saying that my tag can not be written to, because the Comm Mode is not read write. I can click on my read write again, and go back to some of the value, and this is useful because you can have this scripting based on anything that you want. So based on certain people logging in, or going to certain screens, or however you want to set it.

</details>

---

### 21. View Security Video at Inductive University

:::tip Video Link
Watch the video: [View Security Video at Inductive University](https://inductiveuniversity.com/videos/view-security/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to set up security to restrict which users have access to a view in Perspective. To add security to a view, I'll need to make sure that it's open. Once it's open, I can right click the view in the project browser and click configure view permissions. On this window, I have access to the security levels, including roles, that have been configured for this gateway. If I want to use one of the security levels, I can click on the checkbox next to it and I can include as many as I'd like. Then I can select whether or not the user must match all the selected security levels or at least one of them. I'll switch over to a Perspective session to show this in action. This project contains two different views, View 1 and View 2. I can navigate between the views by clicking on the navigation buttons I've set up, and you can see that I can clearly navigate back and forth without issue. I'll go back to my Designer and add some security to one of the views. I'll click configure view permissions for View 2, and then I just wanna add the "Authenticated" security level.

**[01:04]** [01:04]
                                    This will make it so the user must be authenticated if they want to access the view. I'll click OK to submit my changes and I'll save my project. Back in my session, I'll try to navigate to View 2 again. However, this time I see a message that I don't have the permissions to load this view. If I navigate back to View 1, I'll click the login button to authenticate. I'll enter the credentials for my admin user and login. To confirm I'm logged in, I can expand the session app bar at the bottom of the screen and then view my session status popup to confirm that I'm currently authenticated as "admin". Now when I click the button to navigate to View 2, I no longer see the access denied message because I have the required permissions.

</details>

---

### 22. Script Action Security Video at Inductive University

:::tip Video Link
Watch the video: [Script Action Security Video at Inductive University](https://inductiveuniversity.com/videos/script-action-security/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to add security to a Perspective script action to restrict which users can run the script. This can be done by opening the Event Configuration window, selecting a script action, and then by clicking the Security Settings button at the bottom of the window. This will open a popup with the available security levels that have been configured on the gateway. I can click the checkbox next to a security level to select it, and I can also select multiple levels at once. The two radio buttons at the bottom will let me configure whether or not a user must have all of the selected levels to perform this action or just one of them. I'll switch to one of my sessions to show what this looks like in action. I already created a view that has a button with the script action we were just looking at. The script will take whatever value is in the text field below and assign it to the label's text property. Then there's an additional button for logging in. I'll type some text into the text field, and then when I click the script action button, you'll see that the script executes, and the label changes.

**[01:03]** [01:03]
                                    Now I'll go back to my Designer and add some security to the script action. I want users to have to log in before they can run the script, so I'll just add the "Authenticated" security level, click OK, and then I'll save my changes. Back in my session, I'll try changing the label's value again, but this time I see a notification that the action was denied. I'll use my other button to log in. Now that I'm logged in, I can continue to use the script action to change the label's text value.

</details>

---

### 23. Requiring Authentication Video at Inductive University

:::tip Video Link
Watch the video: [Requiring Authentication Video at Inductive University](https://inductiveuniversity.com/videos/requiring-authentication/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to require users to authenticate before accessing a Perspective project. By default Perspective will be set up with the public security level selected so that anyone has access to it. However, this can be changed to require users to log in. To do this, I'll go to my Designer and I'll open the project properties. On the project general page, I'll find the security settings. From here, I'll need to set an identity provider for the project. Security in Perspective is managed through identity providers, which are configured in the gateway. I'll include a link to our user manual page on identity providers if you need a refresher on them. Once I have an identity provider selected, I'll go down to the Perspective Permissions page. This will show the available security levels on my gateway. I can click next to a checkbox to select a security level, and I can select multiple levels if desired. Then I can use the radio buttons at the bottom to declare whether or not users must have all the selected levels or just one of them to launch a Perspective session.

**[01:05]** [01:05]
                                    I'm just gonna select the authenticated security level and click OK. Then I'll save my project. Now, when I launch a Perspective session, I'll be prompted to log in. Then once I've logged in, I can start interacting with the project.

</details>

---

### 24. Perspective Component Restrictions Video at Inductive University

:::tip Video Link
Watch the video: [Perspective Component Restrictions Video at Inductive University](https://inductiveuniversity.com/videos/perspective-component-restrictions/8.1)
:::

<details>
<summary>View Transcript (4 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at some ways to restrict Perspective component access. I have my designer open and I'm currently looking at a view I've created that contains a super important button that does some potentially scary things. I wanna ensure that not just anyone can use this button. The way to do this in Perspective is to manipulate one or more of the components properties. For example, many components will have an enabled property. If I set this property to false and go into my preview mode, I'll find that the button can't be pressed and it even changes the cursor to indicate that. You can find this enabled property on many of the input components in Perspective. Next, all Perspective components will have a visible property, which can be found in the meta section. Setting this to false will prevent the component from being drawn. If I toggle it, you'll see it disappear and then reappear. So if it doesn't get drawn, that's one way of preventing someone from clicking it and using it. There's one more property that's somewhat similar to visible, and that's the display property under position. This one's showing up because I'm using a flex container.

**[01:06]** [01:06]
                                    If I go back and toggle the visible property, the component becomes invisible, but there's an empty space where it used to be. By comparison, If I set display to false, the component disappears, but there isn't an empty space anymore and it's as if the component doesn't exist. Something to keep in mind when you're using flex containers while designing a project. Now that we've covered the relevant component properties, let's see how we can utilize these and dynamically restrict access based on user permissions. Perspective security is managed through identity providers and security levels, which are configured in the gateway webpage. I'll take a look at my security levels by opening up the project properties and going to the Perspective Permissions window. I'll expand the levels so I can see the roles that I've configured. I wanna set up the restrictions on my button so that a user either has the administrators security level or the operator role. So seeing the path to these levels is going to come in handy. I'll close out of this window and go back to my view to implement one of the restrictions on my button. I want the buttons enabled property to change depending on the user's security levels, so the way I can do that is with a binding.

**[02:08]** [02:08]
                                    Then I'll need to make this an expression binding. I'm going to need to use a specific expression function to help me in this scenario, and I can access the functions by clicking the sigma icon and going to the User section. The function I need is isAuthorized. Make sure to use this one and not the hasRole function as that one is for roles and user sources, which aren't used in Perspective. The first parameter of this function is a boolean, isAll, which you set the true if you want the user to have all of the given security levels, or you set to false, if the user must have at least one. I'll set this to false. Next, I can add any number of securityLevel parameters, which are string paths to security level nodes. I'll bring up the permissions page we looked at earlier to see how to build my paths. The first security level I want is Administrators. The path to that starts with the Authenticated node, and then I'll add a forward slash, and then Administrators is on the next level. The next one I want is the Operator role, and the path for that will be Authenticated slash Roles slash Operator.

**[03:09]** [03:09]
                                    That's all I need for my expression, so I'll add the closing parentheses and click OK. Then I'll save my changes in the project. Now I can test out the functionality to make sure it works by launching a Perspective session. I'll start by logging in as a user that has administrator access. This user is able to use the button just like I want. Next, I'll switch to another user, which doesn't have either of the security levels I defined in the expression, and now the button is disabled.

</details>

---

### 25. Tag Read and Write Permissions Video at Inductive University

:::tip Video Link
Watch the video: [Tag Read and Write Permissions Video at Inductive University](https://inductiveuniversity.com/videos/tag-permissions/8.1)
:::

<details>
<summary>View Transcript (6 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, we'll take a look at restricting read and write access to our tags. Now if you're making use of a visualization system like vision or perspective, then there are a couple of ways to prevent read and write access by implementing component restrictions. But those component restrictions are on a per project and per screen basis. What I want to do here is show you how to control, read and write access to individual tags independently from a project. The way you would do that is by applying restrictions directly on the tag. In the designer, if I edit a tag and we head down under the security section here, we notice that there are three properties. The easiest one to talk about is read only. If we don't want anyone to write to this tag ever from ignition, then set read only to true. You'll notice that the write permissions property disappeared. That's because we don't need it. We're not allowed to write to this tag anymore. Now, if I hit okay and I make sure my designer is set to read write mode, I can try writing to the value on this tag here.

**[01:02]** [01:02]
                                    And we're greeted with a little error message because the tag is set to read only. So it doesn't matter how a write is attempted, be it from the designer or a script in a runtime somewhere, the tag will reject writes, and of course this translates to component bindings. So if I were to open this window here, I have some components and this little checkbox here has a tag binding configured to my writeable boolean one tag. And we can see from the project browser that the component doesn't have a little shield icon, implying that there isn't any sort of custom component security applied. So if I put my designer into preview mode and I try to write to the check box, we get the same error message. As an important side note, you may have noticed that I had to opt in to making the tag read only implying that by default, newly created tags are configured to allow writes. Now I have this writeable boolean two tag here that I would like to apply restrictions to. So I'm going to double click on writeable boolean two and go back to the security tab. We also have the read permissions and write permissions properties. You've probably guessed by the names, these properties determine the requirements for read and write access respectively to this tag.

**[02:07]** [02:07]
                                    Now, based on the labels I put on this window here, I only want administrator users to be able to write to this writeable boolean two tag. So because I'm trying to control who can write to the tag, I'll make use of the write permissions. On the right hand side here we see an interface that might look familiar to you. If you've dabbled with identity providers and security levels before, our tags use a permission model that integrates with security levels. So you can apply restrictions based on security zones mapped to roles, or really any criteria you can come up with when configuring a security level. Again, I only want users with the administrator role to be able to write to this tag. So I'll go down under authenticated, I'll go down under roles. We have our administrator role, which I can check, and that will apply the restriction I'm looking for. Now if I drill down under the role, you'll see that I have access to some security zones. This allows us to get a little more specific with our roles in that we can require certain zones in addition to the role.

**[03:05]** [03:05]
                                    So if I wanted my administrator users to only be able to have write access while they're in zone A, I would select zone A under administrator. Alternatively, say I don't care where the administrator is and I just want them to always have write access. And for my non-administrative users, I only want them to be able to write to this tag if they're in zone B. In that case, I would also want to check zone B under security zones here, however, we're not done. You may notice those radio buttons down below. By default, this interface requires that when our write comes through all of the checked security levels up above in the tree are met. So if I don't change the selection on these radio buttons here, my permission settings are saying that the write has to come from an administrator and they have to be in Zone B, which is similar to just selecting zone B directly under the administrator role. So if I only care if either one of those options are true, I'd want to select the second radio button stating that at least one of the security levels on the user has to match what I selected in the tree.

**[04:05]** [04:05]
                                    Now I really don't care about the zone for this example, so I'll uncheck zone B, I'll leave administrator checked and I'll press okay, and because that was applied to the tag, I actually don't need to save my project. Those restrictions are in place right now. Now off to the side, I have a client running that I can use to demonstrate the restrictions we just applied. So you can see I'm logged in as Bob, who is an operator. So they are not an administrator. So if I try to write to this tag here, we can see that I get an insufficient write permissions error. So Bob doesn't have the administrator role. Now if I go back to my designer, we can see that the user I'm logged into is an administrator. So technically I should be able to write to this tag, which we can see has applied to the tag itself in the tag browser. And of course, because I'm in the designer logged in as an administrator user, I can freely write to these tags from the tag browser. So of course these read and write permissions are actually applied even when you are in the designer session. Lastly, you probably noticed that on our tags we now have some icons.

**[05:03]** [05:03]
                                    These just signify that there are some custom security settings on these tags and that's it. Now you know how to apply, read and write restrictions to individual tags.

</details>

---

### 26. Tag Editing Permissions Video at Inductive University

:::tip Video Link
Watch the video: [Tag Editing Permissions Video at Inductive University](https://inductiveuniversity.com/videos/tag-editing-permissions/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    Security levels to find a hierarchy for access inside ignition. Tag editing access can be limited using security levels. Through this real time tag providers configuration, tag editing permissions can be configured to include a comma separated list of security levels a user must be granted to be able to edit, create, or delete a tag inside this specific tag provider. This setting allows you to choose if you want users to belong to all, or at least one of the security levels listed. Let's take a look at how this works. I will configure the tag editing permission setting to have the following list of security levels. With this configuration, a user editing a tag in this tag provider must be logged in and must belong to the administrator and operator security levels. To test this rule we just configured, I will go to my designer, which is configured to point to my default tag provider. I am currently logged in as a user who belongs to the administrator security level, but not the operator security level. When I try to edit my tags name here, I get a permissions error since I do not belong to the operator security level.

**[01:07]** [01:07]
                                    If I try to create a new tag by copying and pasting my existing tag, I see a similar error. Finally, if I tried to leaving the tag, I will also not be able to do so, because again, I am not granted the required security levels. Let's go back to our gateway and change our configuration to only require at least one of the lists of security levels for tag edits. Going back to my designer, since I now belong to one of the security levels listed in the tag editing permissions list, I will now be able to edit my tag, create a new tag and delete a tag from this tag provider.

</details>

---

### 27. Creating an Audit Profile Video at Inductive University

:::tip Video Link
Watch the video: [Creating an Audit Profile Video at Inductive University](https://inductiveuniversity.com/videos/creating-an-audit-profile/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    An Ignition audit profile automatically logs certain actions that occur in the system. Audit profile data can be logged to a SQL database, an internal database, or it can be a remote reference to an audit profile coming from another Ignition Gateway. A few examples of the items that an audit profile records are tag writes, user logins, project save events, and report executions. When an audit profile is created, Ignition will automatically create a database table, named Audit Events, and it will use this table to begin logging user actions. To create an audit profile, we simply head to our Ignition Gateway's web interface, we go to the Configure tab, then we head to Security and select Auditing. We then click on the Create New Audit Profile option, and since this is a database type audit profile, we select Database and click Next. I will name this audit profile and I will point it to an already existing database connection. I then press the Create New Audit Profile button to finish the configuration. Now that we have the profile, we'll need to make some configuration changes elsewhere in the system based on what we want to record, but we'll take a look at those configurations in the following videos.

</details>

---

### 28. Project Auditing Video at Inductive University

:::tip Video Link
Watch the video: [Project Auditing Video at Inductive University](https://inductiveuniversity.com/videos/project-auditing/8.1)
:::

<details>
<summary>View Transcript (1 paragraphs)</summary>

**[00:00]** [00:00]
                                    In a previous lesson, we showed how to create and how to view audit profile data. In order for profile-level actions to be logged to the audit profile we have configured here, we must first enable auditing for each project we want to audit. To do this, let's go to our Designer, where we have a project named Auditing opened. We then go to Project, Properties to open the Project Properties window. Once here, we head to the General project section and we enable auditing in the Auditing Settings. We want to make sure that our project is looking at the correct audit profile, so we select it from the dropdown menu. We only have one audit profile configured, so it is the only one listed. We then click OK to finish the configuration and we save our changes. Once we do this, events from the auditing project will begin to be logged into the audit events database table. Our audit profile is configured to use. To verify it is working, let's use the Database Query Browser to see live audit events as they are logged. First, let's write to a tag. From the Tag Browser, we have a memory tag named Tag1 with a current value of five. If I write a 10 to it and then query for all the entries in the audit events table, we see that the tag write I just performed was caught by the auditing system. Similarly, if I create a window named Main Window, and then save my project, we can query the audit events table once more and we will find entries for both the window creation and the project save event. Since the audit profile is also capable of detecting user login events, if I launch a vision client for my auditing project and simply log in, we see that the login event and the logout event triggered by me closing the vision client are also listed in the audit events table.

</details>

---

### 29. View Audit Information Video at Inductive University

:::tip Video Link
Watch the video: [View Audit Information Video at Inductive University](https://inductiveuniversity.com/videos/view-audit-information/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    With an audit profile configured, audit events can be viewed a various ways. First, audit events can be viewed through the gateway's web interface by going to the configure tab. Then under security, we select auditing to bring up the list of all audit profiles configured on your gateway. To view audit events for any profile, we simply go to more and select view log. What we see here is a list of all the audit events recorded by this audit profile. This interface allows users to filter events by event actor, action, and target. Users can also filter for events in a desired date range using the start and end date filters here. As an example, if I type report in the target field and press search, we see that all events with a report target are returned. Now that we have seen how to view our profile events in the gateway, let's go to our designer. Audit profile data can also be viewed through the designer's database query browser. To do this, simply go to tools and click on database query browser.

**[01:09]** [01:09]
                                    Once the database query browser is open, we can see that there's an audit events database table present. This database table is where all audit events are stored. As any regular database table, it can be queried as such, so running this query should return all the events associated with this auto profile. To view auto profile data from a vision window, we simply create a new window and we drag in a power table from our vision component palette. We then bind the power table's data property to a SQL query that returns all the information in the audit event's SQL table. After doing so, we see that our power table now displays all the data in our audit profile. To view audit profile data from a perspective view, we simply create a new view and drag in a table from our prospective component pallet. We then bind the table's data property to a name query that returns all the information in the audit event's SQL table. After doing so, we see that our table now displays all the data in our audit profile.

</details>

---

### 30. Gateway Auditing Video at Inductive University

:::tip Video Link
Watch the video: [Gateway Auditing Video at Inductive University](https://inductiveuniversity.com/videos/gateway-auditing/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In a previous video, we showed how an audit profile can be configured to log events for specific projects. An ignition gateway can also be pointed to an audit profile to keep an audit trail of gateway specific events. An audit profile auditing a gateway will track things like database connection creation, device connection creation, module restarts, just to name a few. To configure a gateway to be audited, we must first go to the Gateway Web Interface like we have here. We then go to the Configure tab. Then we go over to System, Gateway Settings. Once we're on the Gateway Settings window, we scroll down to the Gateway Audit Profile Setting. Here, we must specify the name of the audit profile that gateway-scoped actions will log to. We have a single audit profile configured on this gateway named Audit One, so I will type Audit One, then scroll down to the bottom and save my changes. Now that my gateway is being audited, let's call some events to be logged so we can see how it works.

**[01:08]** [01:08]
                                    First, I will delete a device connection by going to Device Connections from the gateway's Configure page and simply deleting the device. Once the connection is deleted, let's view our Audit Profile Data from the gateway. We go to Security, Auditing, we click More for our Audit One profile, then View Log to bring up our Audit Profiles data. Here, we can see the logged event for my device deletion. Restarting an ignition module will also cause an event to be logged. We can verify this by going to Modules, then restarting any module. Going back to our Audit Profiles View Log, we can see the module restart was logged by the audit profile as expected.

</details>

---

### 31. Alarm Notification Auditing Video at Inductive University

:::tip Video Link
Watch the video: [Alarm Notification Auditing Video at Inductive University](https://inductiveuniversity.com/videos/alarm-notification-auditing/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    Alarm notification profiles are able to leverage Ignition's audit profile system to log notification related information to a SQL database. By default, a notification profile is not configured to send its data to an audit profile. We can easily change that in the gateway by going over to the Configure tab. Scrolling down to the Notification section under Alarming. Here, I can add or configure my notification profiles. I will select to edit any one of my notification profiles. I will scroll down to the bottom to find the Auditing section. If you have an audit profile configured like I do here, you can have any alarm notification events going through this profile log all of their information to the SQL database the audit profile is configured to use. If I had two way enabled for this notification profile, the auditing system will also record alarm acknowledgements to the database.

**[01:10]** [01:10]
                                    All I have to do to get this to work is scroll down and press the Save Changes button.

</details>

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
