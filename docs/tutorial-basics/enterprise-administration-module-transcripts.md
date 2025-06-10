---
sidebar_position: 21
---

# Enterprise Administration Module - Video Transcripts

This page contains transcripts from the enterprise-administration-module video course.

## Overview

These transcripts are automatically generated from the [enterprise-administration-module Course](https://inductiveuniversity.com/courses/ignition/enterprise-administration-module/8.1) on Inductive University.

:::info
Generated on: 6/9/2025, 5:00:24 PM
Source URL: https://inductiveuniversity.com/courses/ignition/enterprise-administration-module/8.1
:::

## Video Transcripts

### 1. Introduction to Enterprise Administration Module Video at Inductive University

:::tip Video Link
Watch the video: [Introduction to Enterprise Administration Module Video at Inductive University](https://inductiveuniversity.com/videos/introduction-to-enterprise-administration-module/8.1)
:::

<details>
<summary>View Transcript (3 paragraphs)</summary>

**[00:00]** [00:00]
                                    The Enterprise Administration module, or EAM, allows users to control and monitor any number of Ignition gateways from a central Gateway via the Gateway Network. In this lesson, I'll provide an overview of the various features included with the module. I have two Ignition gateways on my machine, and I've already configured one as the controller and the other as an agent. On the controller gateway webpage, I can navigate to config, enterprise administration, agent management, and from here I can interact with the various agents connected to this controller. In my case, there's just one. From here I can delete agents, and then additional options will appear if I click the more button and then I can see details, visit the agent gateway webpage, or restart the agent. Clicking details takes me to another page that allows me to view more about the agent, such as saved gateway backups, license details, the list of installed modules, and project details. One of the main features of EAM is the ability to set up tasks for each agent. If I navigate to the agent tasks page, I can take a look at available tasks, tasks that are currently running or scheduled to run, and then a history of previously run tasks.

**[01:11]** [01:11]
                                    You can see that I already have a collect backup task scheduled for my agent and that it's set to repeat every day at midnight. To create a new task, I can click create new gateway task and choose from a variety of other tasks, including activating or unactivating licenses, installing modules, running a gateway upgrade, or sending resources to gateways. Once a task has been chosen, I can configure it to execute immediately, on demand, at a specific time, or I can set it to execute repeatedly on a custom schedule I create here. In addition to the config pages, there are also some EAM status pages for monitoring your agents and tasks. EAM agents will show all agents connected to the controller, their statuses, and any relevant logs so that you're aware of any potential errors coming from agent gateways. The EAM tasks page will provide an overview of the executing, scheduled, and recently completed tasks for all agents, and will also provide the ability to pause and resume tasks.

**[02:06]** [02:06]
                                    Some of the benefits of these features coming together is the ability to efficiently synchronize modules and resources between gateways, quickly recover from system failures, and monitor the health of agents.

</details>

---

### 2. Creating a Controller Video at Inductive University

:::tip Video Link
Watch the video: [Creating a Controller Video at Inductive University](https://inductiveuniversity.com/videos/creating-a-controller/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In order to set up EAM, you must first designate a machine as the controller. In this lesson, I'll demonstrate how to configure this. Before this can be done, a database connection needs to be set up on the soon to be controller gateway. I've already set up my database, so I'll get started with the controller setup. To do this, I'll navigate to Config, Enterprise Administration and Setup. I'll choose the controller option and then click next. First, I'll need to choose the default database, which in my case will be ControllerDB. It's required to have a database connection to set up controller as it's needed to store historical event data for the agents. If you don't have a database connection at this point, you can go to the Databases Connections page and take care of that, and then come back here later. Next, I'll move on to the Archiving settings. You'll need to specify a location for the controller to store archived files. The archive location dropdown can be set to automatic so that the system manages this location, or it can be set to manual to specify a location.

**[01:03]** [01:03]
                                    This location can be set to be on the machine or on a locally mounted network share, but keep in mind that the path will be relative to the controller gateway. It's recommended that you put a system into place to monitor the free size of the disk with the archive as gateway backups can potentially grow to be quite large, and with enough agents, quite a bit of space may be used up. The low disk space threshold can be configured so that the error messages will be thrown in this gateway when the archive disk drops below a certain number of megabytes. Furthermore, you can configure backups to be pruned based on either the number of backups, or their age, with the maximum retention count and maximum retention age settings. Once the specified count or age is reached, the oldest backups will be deleted while the newest will be retained. Having either setting at zero means that criteria will be ignored and won't affect the retention of the backups. I'm gonna leave the archiving settings on our default values and click finish, and then this gateway is now configured as a controller. If I scroll down to the Enterprise Administration section, the setup option has now disappeared and has been replaced with new options. To change any of the settings that were just configured, you can go to the new Controller Settings page and change the default database, the archiving settings, or uninstall the controller functionality from this gateway.

</details>

---

### 3. Adding an Agent Video at Inductive University

:::tip Video Link
Watch the video: [Adding an Agent Video at Inductive University](https://inductiveuniversity.com/videos/adding-an-agent/8.1)
:::

<details>
<summary>View Transcript (2 paragraphs)</summary>

**[00:00]** [00:00]
                                    In this lesson, I'll demonstrate how to configure an Ignition gateway as an EAM agent. To set up an EAM agent, you'll be required to have a gateway network connection set up between your controller and your agent. I've already set this up on my end, but if you'd like a refresher on how to set up a Gateway network connection, I'll include a link to our IU lesson below this video for your reference. Since I already have my connection set up, I'll go to my soon to be agent gateway webpage. To start this process, I'll navigate to the Config page and then Enterprise Administration and Setup. Then I'll select agent and click next. If you're reinstalling an existing agent that was already connected to this controller, you can choose the agent recovery option. This option gives an opportunity to perform a system recovery, which will restore the gateway backup, and reinstall missing modules and the license. However, since this is a new agent, I'll keep the new agent option selected and click next. Next, I'll need to choose my controller from the dropdown. If you're not seeing your controller as an option, make sure that you have a running gateway network connection between the two machines.

**[01:07]** [01:07]
                                    Once it's selected, we'll just need to click finish. The next screen here lets me know that the setup is complete, but I'll need to log into the controller gateway and approve the agent. This can be done by navigating to the controller's Agent Management Config page. I can see my IU_Agent gateway appear on the list here, and I just need to click the approve button to the right and then confirm. Then I'll see the status here change to connected. Now my gateway is set up as an agent. To configure the agent's settings, I can go to the Enterprise Administration Agent Settings page and change these values, or I can uninstall the agent functionality as well.

</details>

---

### 4. Adding an Agent

:::danger Error
Failed to retrieve transcript: Waiting for selector `#library-course-description` failed: Waiting failed: 10000ms exceeded
:::

---

## Additional Resources

- [Inductive University](https://inductiveuniversity.com/)
- [Ignition Documentation](https://docs.inductiveautomation.com/)
- [Ignition Downloads](https://inductiveautomation.com/downloads/)
