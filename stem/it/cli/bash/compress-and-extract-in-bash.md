# tar
- ### Compress
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`tar cf [options...] <filename.tar> <files...>`|Compress files to a compressed file with `filename.tar`|`tar cf sui.tar a.txt b.jpg`|
    |`tar cf [options...] <filename.tar> <folder>`|Compress folder to a compressed file with `filename.tar`|`tar cf sui.tar a/`|
- ### Extract
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`tar xf <compressed_file>`|Extract compressed file|`tar xf sui.tar`, `tar xf sui.zip`, `tar xf sui.7z`|
    |`tar xf <compressed_file> -C <directory>`|Extracts compressed file to a specified Directory|`tar xf sui.tar -C /path/d`|
- #### Options
    |Options|Description|
    |:---:|:---:|
    |`-c`|Compress|
    |`-x`|Extract|
    |`-f <filname>`|Specified compressed filename|
    |`-v`|Verbose|

# 7z
- ### Compress
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`7z a [options...] <filename> <files...>`|Compress and Add files to a compressed file with `filename`|`7z a sui.7z a.txt b.jpg`, `7z a sui.zip a.txt`|
    |`7z a [options...] <filename> <folder>`|Compress and Add folder to a compressed file with `filename`|`7z a sui.7z a/`|
    - #### Options
        |Options|Description|
        |:---:|:---:|
        |`-p`|Password|
- ### Extract
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`7z x <compressed_file>`|Extract compressed file|`7z x sui.7z`, `7z x sui.zip`, `7z x sui.tar`|
    |`7z x <compressed_file> -o <directory>`|Extracts compressed file to a specified Directory|`7z x sui.7z -o /path/d`|

# ZIP
- ### Compress
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`zip [options...] <filename.zip> <files...>`|Compress files into `filename.zip`|`zip sui.zip a.txt b.jpg`|
    |`zip -r [options...] <filename.zip> <folder>`|Recursively compress folder into `filename.zip`|`zip -r sui.zip a/`|
    - #### Options
        |Options|Description|
        |:---:|:---:|
        |`-e`|Encrypt|
- ### Extract
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`unzip [options...] <zip_file>`|Extract ZIP file|`unzip sui.zip`|
    |`unzip [options...] <zip_file> -d <directory>`|Extracts ZIP file to a specified Directory|`unzip sui.zip -d /path/d`|
    - #### Options
        |Options|Description|Example|
        |:---:|:---:|:---:|
        |`-l`|Lists all the files in the ZIP file without extracting them|`unzip -l sui.zip`|

