# Fastfetch
|Command|Description|Example|
|:---:|:---:|:---:|
|`fastfetch`|Display current system information||
|`fastfetch -s <module>[:<module>...]`|Displays the Structure using the specified information modules|`fastfetch -s os`, `fastfetch -s cpu:gpu:memory`|

# Configuration
|Command|Description|Example|
|:---:|:---:|:---:|
|`fastfetch -c <config_name>`|Loads a configuration|`fastfetch -c all`, `fastfetch -c neofetch`|
|`fastfetch --list-presets`|List all available built-in preset configurations||
|`fastfetch --gen-config`|Generates a default custom JSONC config file in the user directory|

# Logo
|Command|Description|Example|
|:---:|:---:|:---:|
|`fastfetch --logo`|Changes the ASCII Logo|`fastfetch --logo windows`, `fastfetch --logo android`|
|`fastfetch --logo none`|Hides the ASCII Logo|
|`fastfetch --print-logos`|Prints all supported built-in ASCII logos|

