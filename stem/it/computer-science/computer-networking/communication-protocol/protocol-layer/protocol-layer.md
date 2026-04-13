# Application layer
- ### HTTP/HTTPS
    - ### [HyperText Transfer Protocol (HTTP)](http.md)
    - ### HTTP Secure (HTTPS) = [HTTP](http.md) + [TLS/SSL](#tlsssl)
- ### [Domain Name System (DNS)](dns.md)
- ### Secure Shell (SSH)
- ### File Transfer Protocol (FTP)
    - ### FTP Secure (FTPS) = [FTP](#file-transfer-protocol-ftp) + [TLS/SSL](#tlsssl)
- ### Email Protocols
    - ### Simple Mail Transfer Protocol (SMTP)
    - ### Internet Message Access Protocol (IMAP)
    - ### Post Office Protocol (POP)
        - POP version 3 (POP3)
- ### Multipurpose Internet Mail Extensions (MIME)
    - #### [MIME Type (Media Type)](../../computer-networking.md#mime-typemedia-type)
- ### Telnet：Remote login to hosts
- ### Remote Desktop

# Transport layer
- ### TCP/UDP
    ||Transmission Control Protocol (TCP)|User Datagram Protocol (UDP)|
    |:---:|:---:|:---:|
    |**Communication**|<img src="./image/tcp.png" width="70%">|<img src="./image/udp.png" width="70%">|
    |**Connection**|Connection-Oriented|Connectionless|
    |**Speed**|Slow|Fast|
    |**Reliability**|Reliable|Unreliable|
    |**Handshake**|Three-way Handshake|No Handshake|
    |**Application**|email, web, file transfer|Real-time applications (streaming media, game, [VoIP](ip.md#voice-over-internet-protocolvoip))|
    - ### [TCP/UDP Ports](../../computer-networking.md#tcpudp-ports)
- ### Datagram Congestion Control Protocol (DCCP)
- ### Point to Point Tunneling Protocol (PPTP)

# Network layer
- ### [Internet Protocol (IP)](ip.md)
    - #### [IPv4](ip.md#ipv4-address)
    - #### [IPv6](ip.md#ipv6-address)
- ### [Routing](../../routing.md)
- ### [Gateway](../../networking-hardware.md#gateway)
- ### Internet Control Message Protocol (ICMP)

# Data link layer
- ### Wi-Fi
- ### Ethernet
- ### [Switch](../../networking-hardware.md#switch)
- ### Point-to-Point Protocol (PPP)
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
- ### Automatic Repeat-reQuest(ARQ)
    - #### Layer：[Data link layer](#data-link-layer), [Transport layer](#transport-layer)
    - #### Stop-and-Wait ARQ
    - #### Go-Back-N ARQ
    - #### Selective Repeat ARQ

