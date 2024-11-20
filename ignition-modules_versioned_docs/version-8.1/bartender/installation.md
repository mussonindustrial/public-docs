---
sidebar_position: 1
---

# Installation

The following section is an excerpt from the official Ignition documentation.
For more details, visit [Installing or Upgrading a Module.](https://docs.inductiveautomation.com/display/DOC81/Installing+or+Upgrading+a+Module)

## Module Configuration
All module configuration is done from Gateway Webpage in the **Config > Modules** section.
From here you can add, remove, and restart modules. 

![Module Configuration Page](https://docs.inductiveautomation.com/download/attachments/58591882/2019-03-18_11-11-08.png?version=1&modificationDate=1598286568000&api=v2 "Module Configuration Page")

## Install or Update a Module
:::note
Installing a module will require connected Vision Clients and Designers to restart. Perspective Sessions will not require a restart.
Production systems using either Clients or Designers should wait for downtime before installing a module. 
:::

1. On the Gateway Webpage, select **Config  > Modules** to open the **Module Configuration** page. 
1. Scroll to the bottom on the list, find the blue arrow, and click the Install or Upgrade a Module link.  

    ![Installation Prompt](https://docs.inductiveautomation.com/download/attachments/58591882/2019-03-18_11-27-04.png?version=1&modificationDate=1598286567000&api=v2 "Installation Prompt")

1. Click **Choose File**, select a `.modl` file that you have previously downloaded.
1. Click **Install**.  When the page reloads you can now see the module you installed in the list of modules.
 
## Uninstall a Module

:::note
Uninstalling  a module will require connected Vision Clients and Designers to restart. Perspective Sessions will not require a restart.
Production systems using either Clients or Designers should wait for downtime before uninstalling a module. 
:::

1. On the Gateway Webpage, select **Config > Modules** to open the **Module Configuration** page.
1. Scroll to the the module you want to uninstall.
1. To the right of module name, click the **More button** and select uninstall. 
    A confirmation message appears.

    ![Un-installation Prompt](https://docs.inductiveautomation.com/download/attachments/58591882/2019-03-18_11-32-09.png?version=1&modificationDate=1598286567000&api=v2 "Un-installation Prompt")

1. Click **Confirm**. The module is no longer installed and is removed form the list.

## Restart a Module
Because of the isolated nature of modules, the other modules are not affected by the restart (unless they depend on that particular module).

1. On the Gateway Webpage, select **Config  > Modules** to open the **Module Configuration** page. 
1. Scroll to the the module you want to restart.
1. To the right of module name, click the **restart** button.  

    ![Restart Module Button](https://docs.inductiveautomation.com/download/attachments/58591882/2019-08-15_15-19-47.png?version=1&modificationDate=1598286567000&api=v2 "Restart Module Button")

1. Click Confirm at the confirmation message. 

    ![Restart Confirmation](https://docs.inductiveautomation.com/download/attachments/58591882/2019-08-15_15-21-09.png?version=1&modificationDate=1598286567000&api=v2 "Restart Confirmation")

    Ignition will give you a confirmation message when the module has restarted.

    ![Restart Finished](https://docs.inductiveautomation.com/download/attachments/58591882/2019-08-15_15-22-26.png?version=1&modificationDate=1598286567000&api=v2 "Restart Finished")

## Module Status
The installed module list on the **Module Configuration** page also provides some basic information about the **State** of the module. 
The **Version**, **License**, and **State** columns are all displayed in the list. 
Module licensing is performed centrally in **System > Licensing**, so the values here are only for information purposes.

The module State can be either Running or Loaded:

- Running indicates the module programs are actively performing tasks, for example, the Alarm Notification modules shows as Running because it is continually checking for condition changes that need to set the alarm on or off. 
- Loaded indicates the module program or resources are available but nothing is running, for example, the Symbol Factory module makes all the symbol images available for your use.