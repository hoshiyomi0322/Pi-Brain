# Change Directory (cd)
|Command|Description|
|:---:|:---:|
|`cd <path>`|Move to `path`|
|`cd -`|Move back to the previous directory|

# Print Working Directory (pwd)
|Command|Description|Example|
|:---:|:---:|:---:|
|`pwd [options...]`|Print the working directory||
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# List (ls)
|Command|Description|Example|
|:---:|:---:|:---:|
|`ls [options...]`|Lists files in the current directory||
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-a`||
    |`-l`||

# List Open Files (lsof)
|Command|Description|Example|
|:---:|:---:|:---:|
|`lsof [options]`||
- ### Options
    |Options|Description|Example|
    |:---:|:---:|:---:|
    |`-i`||
    |`-p`||
    |`-u`||


# Move (mv)
|Command|Description|Example|
|:---:|:---:|:---:|
|`mv [options...] <files\|folders...> <destination_folder>`|Move files or folders to `destination_folder`|`mv a.txt src/`, `mv a/ b.png src/dir/`, `mv *.c cpp/`|
|`mv [options...] <file\|folders> <new_name>`|Rename a file or folder to `new_name`|`mv old.txt new.txt`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-i`||
    |`-n`||
    |`-f`||
    |`-v`||
    |`-u`||

# Copy (cp)
|Command|Description|Example|
|:---:|:---:|:---:|
|`cp [options...] <files...> <destination_folder>`|Copy files to `destination_folder`|`cp a.txt src/`, `cp a.jpg b.png src/dir/`, `cp *.c cpp/`|
|`cp [options...] <file> <new_name>`|Copy a file with a `new_name`|`cp old.txt new.txt`|
|`cp -r [options...] <folders...> <destination_folder>`|Recursively copy folders to `destination_folder`|`cp a/ src/`, `cp a/ b/ src/dir/`, `cp **/ f/`|
|`cp -r [options...] <folder> <new_name>`|Recursively copy a folder with a `new_name`|`cp old/ new/`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Remove (rm)
|Command|Description|Example|
|:---:|:---:|:---:|
|`rm [options...] <files...>`|Remove files|`rm sui.jpg`, `rm -f a.txt`|
|`rm -r [options...] <folder>`|Recursively remove a folder|`rm -r a/`, `rm -rf a/b/`, `rm -rf /`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-f`|Force remove|
    |`-i`||

# Make Directory (mkdir)
|Command|Description|Example|
|:---:|:---:|:---:|
|`mkdir [options...] <folders...>`|Create empty folders|`mkdir a/`, `mkdir a/ b/c/ d/`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-p`||

# Remove Directory (rmdir)
|Command|Description|Example|
|:---:|:---:|:---:|
|`rmdir [options...] <folders...>`|Remove folders, which must be empty|`rmdir a/`, `rmdir a/ b/c/ d/`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-p`||

# Touch
|Command|Description|Example|
|:---:|:---:|:---:|
|`touch [options...] <files...>`|Create empty files or change file timestamps if it exists|`touch a.txt`, `touch a.txt sui.jpg`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Link (ln)
|Command|Description|Example|
|:---:|:---:|:---:|
|`ln [options...] <source_file> <target_file>`|Link `source_file` to `target_file`||
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-s`|Symlink|
- ### Hard Link
- ### Symbolic Link (Soft Link, Symlink)

# Find
|Command|Description|Example|
|:---:|:---:|:---:|
|`find <search_path> [search_criteria...] [actions]`|Searches for files and directories in `search_path` based on [search criteria](#search-criteria) and performs [actions](#actions)|`find . -name "*.log" -delete`|
- ### Search Criteria
    |Search Criteria|Description|Example|
    |:---:|:---:|:---:|
    |`-maxdepth <levels>`|Search up to `<levels>` of directories below the `<search_path>`|`-maxdepth 1` (current directory only)|
    |`-mindepth <levels>`|Search at least `<levels>` of directories below the `<search_path>`|`-mindepth 2` (skips top-level files)|
    |`-name <"filename">`|Search by file name, case-sensitive|`-name "a*.log"`|
    |`-iname <"filename">`|Search by file name, case-insensitive|`-name "index*"`|
    |`-type <f\|d\|l>`|Search by file type<br>File (`f`), Directory (`d`), Link (`l`)|`-type d`|
    |`-mtime <-n\|n\|+n>`|Search by file modification time in days<br>less than n (`-n`), exactly n (`n`), greater than n (`+n`)|`-mtime -7` (modified within last 7 days)|
    |`-size <-n\|+n><unit>`|Search by file size<br>units：`k`(kB), `M`(MB), `G`(GB)<br>smaller than n (`-n`), larger than n (`+n`)|`-size +100M` (larger than 100MB)|
    |`-perm <octal_mode>`|Search by [octal mode (permission mode)](/stem/it/computer-science/operating-system/linux/linux-file-system.md#octal-mode)|`-perm 755`|
    |`-user <username>`|Search for files owned by a specific username or UID|`-user root`|
- ### Actions
    |Actions|Description|Example|
    |:---:|:---:|:---:|
    |`-print`|Default action. Prints the full file name|`-print`|
    |`-delete`|Delete matched files|`-delete`|
    |`-quit`|Exit immediately|`-quit`|
    |`-exec <command_name> {} \;`|Execute an external command on each matched file<br>(`{}` is replaced by the matched file path)|`-exec chmod 644 {} \;`, `-exec rm {} \;`|

# Locate
|Command|Description|Example|
|:---:|:---:|:---:|
|`locate [options] <filename>`|||
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Tree
|Command|Description|Example|
|:---:|:---:|:---:|
|`tree [options...]`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# Data Definition (dd)
|Command|Description|Example|
|:---:|:---:|:---:|
|`dd [options...]`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`if=<input_file>`||
    |`of=<output_file>`||
