# IP
|Command|Description|
|:---:|:---:|
|`ip addr`|Show/manage IP addresses|
|`ip route`|Show/manage IP routing table|
|`ip link`|Show/manage IP network interfaces|

# Ping
- ### Command：`ping <Destination> [options...]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-c <count>`|Send a specific number of ping requests|
    |`-W <timeout>`|Time to Wait for a response|
    |`-i <interval>`|Interval between packets (seconds)|
    |`-s <size>`|Packet Size|

# [Address Resolution Protocol (ARP)](/stem/it/computer-science/computer-networking/communication-protocol/protocol-layer/other-protocol/arp.md) Command
|Command|Description|
|:---:|:---:|
|`arp -a`||
|`arp -s <IP> <MAC>`||
|`arp -d <IP>`||

# Client URL (cURL)：Fetch content from URL
- ### Command：`curl [options...] <URL>`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-o <file name>`|Download file|
    |`-O`|Download file|
    |`-L`|Follow the redirects (Location header)|
    |`-X {GET\|POST\|PUT\|DELETE\|PATCH}`|Specify [http request method](../../computer-science/computer-networking/communication-protocol/protocol-layer/application-layer/http.md#http-method)|
    |`-H`|Header|
    |`-i`|include|
    |`-d`|data|
    |`-v`|verbose|
    |`-u`|user|
    |`-b`|Send Cookies to server|
    |`-c`|Save Cookies from response|

# Web get (Wget)
- ### Command：`wget`

# Netcat (nc)
|Command|Description|
|:---:|:---:|
|`nc <host> <port>`|Connect to a host|
|`nc -l <port>`|Listen on a port|

# Socket Statistics (ss)
- ### Command：`ss [options...]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-t`|TCP|
    |`-u`|UDP|
    |`-l`|Listening|
    |`-p`|Process|
    |`-n`|No DNS|
    |`-a`|All|
- ### eg
    ```bash
    ss -tulpn # View all listening TCP/UDP ports with process names
    ```

# Route
- ### Command：`route`

# Traceroute
- ### Command：`traceroute`

# Name Server Lookup (nslookup)
- ### Command：`nslookup`

# DIRB (Web Content Scanner)
- ### Command：`dirb`

