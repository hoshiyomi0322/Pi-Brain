# Operator


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
sudo
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

# Advanced Package Tool (APT)
```bash
sudo apt update
sudo apt upgrade
sudo apt install <package-name>
sudo apt remove <package-name>
```

# fdisk


# Networking
- ### [Networking](bash-networking.md)

# Linux Development Tools
- ### [Vi IMproved (Vim)](./linux-development-tools/vim.md)
- ### [Fastfetch](./linux-development-tools/fastfetch.md)
- ### [Git Command](../../it-tools/git/git-command.md)
- ### [GNU Compiler Collection (GCC)](./linux-development-tools/gcc.md)
