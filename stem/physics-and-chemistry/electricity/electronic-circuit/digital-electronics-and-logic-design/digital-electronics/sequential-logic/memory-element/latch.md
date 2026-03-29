# SR Latch(Set-Reset)
- ### logic diagram
    - ### logic diagram(NAND)
    - ### logic diagram(NOR)
- ### truth table
    |Action|$`S`$|$`R`$|$`Q_{nett}`$|
    |:---:|:---:|:---:|:---:|
    |Hold|0|0|$`Q`$|
    |Reset|0|1|0|
    |Set|1|0|1|
    |Not Allowed|1|1|✗|

# D Latch(Data)
- ### input/output
    - input：$`E,~D,~Q`$
    - Output：$`Q_{next}`$
- ### logic diagram(NAND)
- ### logic diagram(NAND、NOR)
- ### truth table
    |Action|$`E`$|$`Q_{nett}`$|
    |:---:|:---:|:---:|
    |Hold|0|$`Q`$|
    |Data|1|$`D`$|

