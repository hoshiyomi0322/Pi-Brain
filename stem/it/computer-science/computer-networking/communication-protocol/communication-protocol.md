# Communication Protocol
- ### [Types of Communication Protocol](#types-of-communication-protocol-1)
- ### [Protocol Stack (Protocol Suite)](#protocol-stack-protocol-suite-1)
    - ### [Protocol Layer](./protocol-layer/protocol-layer.md)
- ### [Encapsulation](#encapsulation-1)

# Types of Communication Protocol
- ### Open Protocol, Proprietary Protocol
    - ### Open Protocol
        - [OSI model](#open-system-interconnection-model-osi-model)
        - [TCP/IP Protocol Suite](#tcpip-protocol-suite-internet-protocol-suite-dod-model)
        - [Wireless Application Protocol Stack](#wireless-application-protocol-stack-wap-stack)
    - ### Proprietary Protocol
        - eg：Skype protocol, PlayStation Network(PSN), Nintendo Wi-Fi Connection(Nintendo WFC)
- ### Stateful Protocol, Stateless Protocol
    ||Stateful Protocol|Stateless Protocol
    |:---:|:---:|:---:|
    |**Session**|Stored by Server|Not stored by Server<br>(Stored by Client)|
    |**Resource usage**|High|Low|
    |**Fault Tolerance**|Low|High|
    |**Scalability**|Difficult|Easy|
    |**eg**|[FTP](./protocol-layer/protocol-layer.md#file-transfer-protocol-ftp), [SSH](./protocol-layer/protocol-layer.md#secure-shell-ssh), [TCP](./protocol-layer/transport-layer/tcp.md)|[HTTP](./protocol-layer/application-layer/http.md), [DNS](./protocol-layer/application-layer/dns.md), [UDP](./protocol-layer/transport-layer/udp.md), [IP](./protocol-layer/network-layer/ip.md)|

# Protocol Stack (Protocol Suite)
<div align="center"><img src="./image/protocol-stack.png" width="60%"></div>

- ### Open System Interconnection model (OSI model)
    <img src="./image/osi-model.png" width="50%">

    - Mnemonic：A Pretty Sexy Teacher Never Dates Physicists (APSTNDP)
- ### TCP/IP Protocol Suite (Internet Protocol Suite, DoD model)
    <img src="./image/tcp-ip.png" width="50%">
- ### Wireless Application Protocol Stack (WAP Stack)
    <img src="./image/wap-stack.png" width="60%">

    - Wireless Application Environment (WAE)
    - Wireless Session Protocol (WSP)
    - Wireless Transaction Protocol (WTP)
    - Wireless Transport Layer Security (WTLS)
    - Wireless Datagram Protocol (WDP)

# Encapsulation
- ### [Packet](../packet.md)：Encapsulation → Transmission → Decapsulation
    <img src="./image/encapsulation.png" width="70%">

    - ### Encapsulation：Add Header to Packet
    - ### Decapsulation：Remove Header from Packet
- ### Encapsulation of [Intermediary Network Devices](../networking-hardware.md)
    <img src="./image/encapsulation-intermediary.png" width="70%">

# Web Tracking
- ### Methods
    - #### [HTTP Cookie](./protocol-layer/application-layer/http.md#http-cookie-cookie)
    - #### [HTTP ETag](./protocol-layer/application-layer/http.md#http-etag)
    - #### [IP Address](./protocol-layer/network-layer/ip.md#ip-address)
- ### Browser Fingerprinting
    - #### Canvas Fingerprinting
- ### Web Beacon
- ### Retargeting
    <img src="./image/retargeting.png" width="60%">
