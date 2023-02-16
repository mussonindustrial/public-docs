# BarTender Drivers Module

**Musson Industrial's** BarTender Drivers Modules offers a quick and easy way to integrate the printing power of BarTender with the flexibility of the Ignition Platform.

:::important
Connections to BarTender servers are handled on the gateway, making it easy to trigger prints from both **Vision** and **Perspective**.
:::


## Background 
**Integrations** are a concept in BarTender that allows outside systems to trigger actions on the BarTender server.
This module allows Ignition to trigger a BarTender integration through a **simple scripting interface**.

### Input Format
This module handles all data formatting that takes place between Ignition and the BarTender integration, greatly simplifying the time-to-market for developers.
Simply select the **data format** required for the integration (*XML Variables*, *JSON Variables*, *CVS*, *etc.*) and the module handles the rest.

#### BTXML
This ease of use doesn't incur any drawbacks for power users.
A fully featured **BTXML generator** allows power users to utilize the **complete feature-set of BarTender** to solve any unique printing challenge.

### Response
In addition to making it simple to trigger BarTender integrations, this module also makes it simple to **utilize responses** returned from the BarTender server.
Return **print results**, **server status information**, or **print preview images**, all with minimal parsing required at the script level.

:::note
Certain BarTender integrations have limited response options. **Web Service** integrations allows for the most response data through the use of response *headers*.
:::

## Trial
The BarTender Drivers Modules utilizes Ignition's **2 hour trial mode**, allowing you to *Try Before You Buy* and to aid in development/deployment. [Download](https://mussonindustrial.com/ignition/downloads) and start your trial today!


```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```