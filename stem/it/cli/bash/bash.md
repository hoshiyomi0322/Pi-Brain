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
- ### IP
    ```bash
    ip
    ip\ addr
    ip\ route
    ip\ link
    ```
- ### Ping
    ```bash
    ping
    ping -t
    ping -n count
    ping -l
    ```
- ### Address Resolution Protocol(ARP)
    ```bash
    arp
    ```

- ### Client URL(cURL)
    ```bash
    curl
    ```
- ### Socket Statistics(ss)
    ```bash
    ss
    ss -t # TCP
    ss -u # UDP
    ss -l # Listening
    ss -p #
    ss -n #
    ```

```bash
route
traceroute
wget
dirb
```

# Others
- ### [Git Command](../../it-tools/git/git-command.md)
- ### [Vi IMproved (Vim)](vim.md)
- ### [GNU Compiler Collection (GCC)](gcc.md)