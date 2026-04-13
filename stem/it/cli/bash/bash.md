# Path
```bash
/ # Root Directory or Path Separator
. # Current Directory
.. # Parent Directory
```
- ### eg
    ```bash
    # Current Path：/Root/1/2/3/4/4-1.txt
    
    / # /Root
    
    . # /Root/1/2/3/4
    ./4-2.txt # /Root/1/2/3/4/4-2.txt
    
    .. # /Root/1/2/3
    ../.. # /Root/1/2
    ../../.. # /Root/1
    ../3-1.txt # /Root/1/2/3/3-1.txt
    ../../../1-1.txt # /Root/1/1-1.txt
    ```

# Basic
```bash
help
exit
read
timeout
clear
echo
```

# System
```bash
shutdown
top
htop
ps
kill
free
```

# File
```bash
cd
ls # List
mv # Move
rm # Remove
cp # Copy
```

# Networking
- ### IP：`ip`
    |Command|Description|
    |:---:|:---:|
    |`ip addr`|Show/manage IP addresses|
    |`ip route`|Show/manage IP routing table|
    |`ip link`|Show/manage IP network interfaces|
- ### Ping：`ping` + Destination + option
    |Options|Description|
    |:---:|:---:|
    |`-c <count>`|Send a specific number of ping requests|
    |`-W <timeout>`|Time to Wait for a response|
    |`-i <interval>`|Interval between packets (seconds)|
    |`-s <size>`|Packet Size|
- ### Address Resolution Protocol (ARP)：`arp` + option
    |Options|Description|
    |:---:|:---:|
    |`-a`||
- ### Client URL (cURL)：`curl` + option + [URL](../../computer-science/computer-networking/computer-networking.md#uniform-resource-locator-url)
    |Options|Description|
    |:---:|:---:|
    |`-o <file name>`|Download file|
    |`-O`|Download file|
    |`-L`|Follow the redirects (Location header)|
    |`-X [GET\|POST\|PUT\|DELETE\|PATCH]`|Specify [http request method](../../computer-science/computer-networking/communication-protocol/protocol-layer/http.md#http-method)|
    |`-H`|Header|
    |`-i`|include|
    |`-d`|data|
    |`-v`|verbose|
    |`-u`|user|
    |`-b`|Send Cookies to server|
    |`-c`|Save Cookies from response|
    - Fetch content from URL
- ### Netcat (nc)：`nc`
    |Options|Description|
    |:---:|:---:|
    |`nc <host> <port>`|Connect to a host|
    |`nc -l <port>`|Listen on a port|
- ### Socket Statistics (ss)：`ss` + option
    |Options|Description|
    |:---:|:---:|
    |`-t`|TCP|
    |`-u`|UDP|
    |`-l`|Listening|
    |`-p`|Process|
    |`-n`|No DNS|
    |`-a`|All|

```bash
route
traceroute
wget
dirb
```

# Others
- ### [Vi IMproved (Vim)](vim.md)
- ### [GNU Compiler Collection (GCC)](gcc.md)
- ### [Git Command](../../it-tools/git/git-command.md)