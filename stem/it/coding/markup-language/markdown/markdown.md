# Heading
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

# Text
- ### Bold Text
    **text**
    ```md
    **text** (ctrl+b)
    ```
- ### Italic Text
    *text*
    ```md
    *text* (ctrl+i)
    ```
- ### Strikethrough
    ~~text~~
    ```md
    ~~text~~
    ```


# Horizontal Rule
---
```md
---
```

# List
- ### Unordered List
    - text
    ```md
    - text
    ```
- ### Ordered List
    1. text
    2. text
    ```md
    1. text
    2. text
    ```

# Todo
- [ ] task
- [x] task
```md
- [ ] task
- [x] task
```

# Link
- ### Link：`<link>`
    <https://google.com>
    ```md
    <https://google.com>
    ```
- ### Link Text：`[link text](link)`
    [Google](https://google.com)
    ```md
    [Google](https://google.com)
    (select the text and paste link(ctrl+v))
    ```
    - #### File：`[link text](file path)`
        [LaTex](../latex.md)
        ```md
        [LaTex](../latex.md)
        ```
    - #### Heading：`[link text](#heading name)`
        [Link](#link)
        ```md
        [Link](#link)
        ```
        [Operator](../latex.md#operator)
        ```md
        [Operator](../latex.md#operator)
        ```

# Image：`![alt text](link)`
![alt text](https://yt3.googleusercontent.com/ytc/AIdro_kLDBK5ksSvk5-XJ6S8e0kWfjy7mVl3jyUkgDeMQ7rlCpU=s160-c-k-c0x00ffffff-no-rj)
```md
![alt text](https://yt3.googleusercontent.com/ytc/AIdro_kLDBK5ksSvk5-XJ6S8e0kWfjy7mVl3jyUkgDeMQ7rlCpU=s160-c-k-c0x00ffffff-no-rj)
(paste image)
```
- ### File：`![alt text](file path)`
    ![alt text](image.jpg)
    ```md
    ![alt text](image.jpg)
    ```

# Quote
> Quote
```md
> Quote
```

# Table
- ### Table
    |heading|heading|
    |---|---|
    |text|text|
    ```md
    |heading|heading|
    |---|---|
    |text|text|
    ```
- ### Align
    |heading|heading|heading|
    |:---|:---:|---:|
    |left|center|right|
    ```md
    |heading|heading|heading|
    |:---|:---:|---:|
    |left|center|right|
    ```

# Code
- ### Inline
    `print("Hello World")`
    ```md
    `print("Hello World")`
    ```
- ### Block
    ```
    print("Hello World")
    ```    
    ````md
    ```
    print("Hello World")
    ```
    ````
- ### Block(syntax highlighting)
    ```py
    print("Hello World")
    ```
    ````md
    ```py
    print("Hello World")
    ```
    ````

# Escape Character
- eg
    
    \# heading
    ```md
    \# heading
    ```

# HTML
- ### Markdown supports HTML
- ### LaTex
    <h3>text</h>
    
    ```md
    <h1>text</h1>
    ```

# LaTex
- ### Markdown supports LaTex
- ### Inline：`$ $`、``$` `$``
    Formula：$`E=mc^2`$、$`E=mc^2`$
    ```md
    Formula：$E=mc^2$、$`E=mc^2`$
    ```
- ### Block：`$$ $$`
    $$E=mc^2$$
    ```md
    $$E=mc^2$$
    ```
