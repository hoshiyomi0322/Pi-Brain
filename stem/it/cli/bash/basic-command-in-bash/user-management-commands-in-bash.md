# User Add (useradd)
|Command|Description|
|:---:|:---:|
|`useradd`|

# User Delete (userdel)
|Command|Description|
|:---:|:---:|
|`userdel`|

# User Modification (usermod)
|Command|Description|
|:---:|:---:|
|`usermod`|

# Passwords (passwd)
|Command|Description|
|:---:|:---:|
|`passwd`|

# Viewing User Information
- ### Who am I (whoami)
    |Command|Description|
    |:---:|:---:|
    |`whoami`|print the username of the current user|
- ### users
    |Command|Description|
    |:---:|:---:|
    |`users`|
- ### id
    |Command|Description|
    |:---:|:---:|
    |`id`|

# Switch User (su)
|Command|Description|
|:---:|:---:|
|`su`|

# Change Mode (chmod)
|Command|Description|Example|
|:---:|:---:|:---:|
|`chmod [options] <permission_mode> <files...>`|Change [permission mode](/stem/it/computer-science/operating-system/linux/linux-file-system.md#permission-mode) for specific files|`chmod 644 1.txt 2.jpg`, `chmod u+x *.md`|
|`chmod -R [options] <permission_mode> <folder>`|Recursively change [permission mode](/stem/it/computer-science/operating-system/linux/linux-file-system.md#permission-mode) for specific folder|`chmod -R 755 a/b/`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Change Owner (chown)
|Command|Description|
|:---:|:---:|
|`chown`|
- ### [User Classes](/stem/it/computer-science/operating-system/linux/linux-file-system.md#user-classes)
