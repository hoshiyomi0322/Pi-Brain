# Change Directory (cd)
- ### Command
    |Command|Description|
    |:---:|:---:|
    |`cd <path>`|Move to `path`|
    |`cd -`|Move back to the previous directory|

# Print Working Directory (pwd)：print the working directory
- ### Command：`pwd [options...]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# List (ls)：lists files in the current directory
- ### Command：`ls [options...]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-a`||
    |`-l`||

# Move (mv)
- ### Command
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`mv [options...] [files\|folders...] [destination_folder]`|Move files or folders to `destination_folder`|`mv a.txt src/`, `mv a/ b.png src/dir/`, `mv *.c cpp/`|
    |`mv [options...] [file\|folders] [new_name]`|Rename a file or folder to `new_name`|`mv old.txt new.txt`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-i`||
    |`-n`||
    |`-f`||
    |`-v`||
    |`-u`||

# Copy (cp)
- ### Command
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`cp [options...] [files...] [destination_folder]`|Copy files to `destination_folder`|`cp a.txt src/`, `cp a.jpg b.png src/dir/`, `cp *.c cpp/`|
    |`cp [options...] [file] [new_name]`|Copy a file with a `new_name`|`cp old.txt new.txt`|
    |`cp -r [options...] [folders...] [destination_folder]`|Recursively copy folders to `destination_folder`|`cp a/ src/`, `cp a/ b/ src/dir/`, `cp **/ f/`|
    |`cp -r [options...] [folder] [new_name]`|Recursively copy a folder folder a `new_name`|`cp old/ new/`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Remove (rm)
- ### Command
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`rm [options...] [files...]`|Remove files|`rm -f a.txt`|
    |`rm -r [options...] [folder]`|Recursively remove a folder|`rm -rf a/`, `rm -rf a/b/`, `rm -rf /`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-f`|Force remove|
    |`-i`||

# Make Directory (mkdir)
- ### Command：`mkdir [options...] [folder]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Remove Directory (rmdir)
- ### Command：`rmdir [options...]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-p`||

# Touch
- ### Command：`touch [options...] [files...]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Tree
- ### Command：`tree [options...]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Concatenate (cat)
- ### Command：`cat [options...]`
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||
