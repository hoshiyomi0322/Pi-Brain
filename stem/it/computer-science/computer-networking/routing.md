# Routing
- ### Routing Algorithm
    |Routing|Link State Routing|Distance Vector Routing|
    |:---:|:---:|:---:|
    |**Algorithm**|Dijkstra's Algorithm|Bellman-Ford Algorithm|
    |**Topology View**|Global View|Routing by Rumor|
    |**What is sent**|Link State Advertisements (LSA)|Routing Table|
    |**To Whom**|Flooding|Neighbors Only|
    |**Update**|Triggered/Event-driven Update|Periodic Update|
    |**Convergence Speed**|Fast|Slow|
    |**Resource Usage (CPU/Memory)**|High|Low|
    |**Count to Infinity**|不會發生（因為每台路由器都有全景圖）|可能發生 (Need Split Horizon、Route Poisoning)|
    |**Protocols**|OSPF, IS-IS|RIP, IGRP|
    - ### Routing Table
- ### [Router](networking-hardware.md#router)
- ### Traceroute (tracert)
    <img src="./image/tracert.png" width="60%">

# Routing Protocol
- #### Open Shortest Path First (OSPF)
- #### Intermediate System to Intermediate System (IS-IS)
- #### Routing Information Protocol (RIP)
- #### Interior Gateway Routing Protocol (IGRP)

# Autonomous System (AS)
- ### Types of AS
    - #### Stub AS
    - #### Multihomed AS
    - #### Transit AS
- ### Routing Domain
    - #### Inter-AS
    - #### Intra-AS
- ### Border Gateway Protocol (BGP)
    - #### Internal BGP (iBGP)
    - #### External BGP (eBGP)
