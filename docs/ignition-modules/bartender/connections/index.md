# Creating and Configuring Connections

BarTender provides many ways to integrate with other business systems.
This module supports the following integration formats:


| Connection | Description |
|---|---|
| **Web Services** | Runs actions by posting a web service request to a URL. |
| **TCP Socket** | Runs actions by sending data over a TCP socket connection. |

For more detailed information about BarTender integrations, consult [Integrating with
BarTender Integration Builder](https://www.seagullscientific.com/media/1373/bartender-integration-builder.pdf).

## Connecting to BarTender
1. On the Gateway Webpage, go to the Gateway **Config** tab.
Scroll down to the **Bartender > Connections** section.
1. On the BarTender Connections page, click on the **Create new BarTender Connection...** link at the bottom of the table.
1. The next step is to choose a BarTender Connection Driver.
The connection driver used must match the integration type configured on the BarTender server.
Pick the driver for your integration, and click on the **Next** button.

*Configure the Connection*

After selecting the driver, you'll configure the settings for the connection.
Some settings are specific to the driver that you're using.

| Property | Description |
|---|---|
| **Name** | Each BarTender connection needs a unique name, which consists of letters, numbers and underscores. |
| **Description** | A brief description of the connection. |
| **Enabled** | Lets you to enable or disable a BarTender connection. |
| **Data Format** | Data format used by the BarTender integration. This should match the *Input Data Format* configured in your BarTender integration. |

### Web Service Connections

.Web Service Connection Properties
[%header, cols="1, 3"]
|===
|Property
|Description

|URL Path
|A string that instructs the driver how to connect to BarTender.
This string is the server address including the port and integration endpoint.
The URL path for an integration can be found in the BarTender Integration Builder in menu:Integration[Service > URL Path]

|Username
|The username to use when connecting.

|Change Password
|Check the box to change the existing password.

|Password
|Enter password.

|Password
|Re-type password for verification.

|Maximum Connections
|The maximum number of concurrent connections allowed to the BarTender server.
Requests are added to a queue once the maximum number of connections is reached.
Setting this value to *0* removes the maximum connection limit.

|===

### TCP Socket Connections

.TCP Socket Connection Properties
[%header, cols="1, 3"]
|===
|Property
|Description

|Hostname
|The hostname or IP address of the BarTender server.

|Port
|The port configured for the BarTender integration.

|Maximum Connections
|The maximum number of concurrent connections allowed to the BarTender server.
Requests are added to a queue once the maximum number of connections is reached.
Setting this value to *0* removes the maximum connection limit.

|===