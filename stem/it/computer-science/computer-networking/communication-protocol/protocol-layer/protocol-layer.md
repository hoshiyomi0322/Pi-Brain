# Application layer
- ### HTTP/HTTPS
    - ### [HyperText Transfer Protocol (HTTP)](application-layer/http.md)
    - ### HTTP Secure (HTTPS) = [HTTP](application-layer/http.md) + [TLS/SSL](#tlsssl)
- ### [Domain Name System (DNS)](application-layer/dns.md)
- ### Secure Shell (SSH)
- ### File Transfer Protocol (FTP)
    - ### FTP Secure (FTPS) = [FTP](#file-transfer-protocol-ftp) + [TLS/SSL](#tlsssl)
- ### Email Protocols
    - ### Simple Mail Transfer Protocol (SMTP)
    - ### Internet Message Access Protocol (IMAP)
    - ### Post Office Protocol (POP)
        - POP version 3 (POP3)
- ### [Network Management Protocol](application-layer/network-management-protocol.md)
    - ### [Simple Network Management Protocol (SNMP)](application-layer/network-management-protocol.md#simple-network-management-protocol-snmp)
    - ### [Network Configuration Protocol (NETCONF)](application-layer/network-management-protocol.md#network-configuration-protocol-netconf)
    - ### [RESTful Configuration Protocol (RESTCONF)](application-layer/network-management-protocol.md#restful-configuration-protocol-restconf)
- ### Multipurpose Internet Mail Extensions (MIME)
    - #### [MIME Type (Media Type)](../../computer-networking.md#mime-typemedia-type)
- ### Dynamic Host Configuration Protocol (DHCP)
- ### Network Time Protocol (NTP)
- ### Telnet：Remote login to hosts
- ### Remote Desktop

# Transport layer
- ### [TCP](transport-layer/tcp.md), [UDP](transport-layer/udp.md)
    ||[Transmission Control Protocol (TCP)](transport-layer/tcp.md)|[User Datagram Protocol (UDP)](transport-layer/udp.md)|
    |:---:|:---:|:---:|
    |**Communication**|<img src="./image/tcp.png" width="70%">|<img src="./image/udp.png" width="70%">|
    |**Connection**|Connection-Oriented|Connectionless|
    |**Speed**|Slow|Fast|
    |**Reliability**|Reliable|Unreliable|
    |**Handshake**|Three-way Handshake|No Handshake|
    |**Application**|email, web, file transfer|Real-time applications (streaming media, game, [VoIP](ip.md#voice-over-internet-protocolvoip))|
    - ### [TCP/UDP Ports](../../computer-networking.md#tcpudp-ports)
- ### QUIC
    <img src="./image/quic.png" width="55%">
- ### Datagram Congestion Control Protocol (DCCP)
- ### Point to Point Tunneling Protocol (PPTP)

# Network layer
- ### [Internet Protocol (IP)](network-layer/ip.md)
    - #### [IPv4](network-layer/ip.md#ipv4-address)
    - #### [IPv6](network-layer/ip.md#ipv6-address)
- ### [Routing](../../routing.md)
- ### [Gateway](../../networking-hardware.md#gateway)
- ### Internet Control Message Protocol (ICMP)

# Data link layer
- ### Wi-Fi
- ### Ethernet
- ### [Switch](../../networking-hardware.md#switch)
- ### Spanning Tree Protocol (STP)
    - ### Rapid Spanning Tree Protocol (RSTP)
    - ### Multiple Spanning Tree Protocol (MSTP)
- ### Point-to-Point Protocol (PPP)
- ### Layer Two Tunneling Protocol (L2TP)
- ### Asynchronous Transfer Mode (ATM)

# Physical layer
- ### [Modem](../../networking-hardware.md#modulator-demodulator-modem)
- ### [Transmission Medium](../../networking-hardware.md#transmission-medium)

# Other Protocol
- ### TLS/SSL
    - #### Evolution：Secure Sockets Layer (SSL) → Transport Layer Security (TLS)
    - #### Layer：[Transport layer](#transport-layer) < TLS/SSL < [Application layer](#application-layer)
    - #### Workflow：TCP Three-way Handshake → TLS Handshake → Encrypted Data Transfer
    - #### Protocol + S = Protocol Secure (Protocol over TLS/SSL) = Protocol + [TLS/SSL](#tlsssl)
- ### Automatic Repeat-reQuest (ARQ)
    - #### Layer：[Data link layer](#data-link-layer), [Transport layer](#transport-layer)
    - #### Stop-and-Wait ARQ
    - #### Go-Back-N ARQ
    - #### Selective Repeat ARQ
- ### Tunneling Protocol
    - ### [Point to Point Tunneling Protocol (PPTP)](#point-to-point-tunneling-protocol-pptp)
    - ### [Layer Two Tunneling Protocol (L2TP)](#layer-two-tunneling-protocol-l2tp)
