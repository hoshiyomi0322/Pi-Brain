# SR Flip-Flop(Set-Reset)
- ### $`Q_{nett}=S+\overline{R}Q`$
- ### truth table
    |Action|$`S`$|$`R`$|$`Q_{nett}`$|
    |:---:|:---:|:---:|:---:|
    |Hold|0|0|$`Q`$|
    |Reset|0|1|0|
    |Set|1|0|1|
    |Not Allowed|1|1|✗|

# D Flip-Flop(Data)
- ### $`Q_{nett}=D`$
- ### truth table
    |Action|$`D`$|$`Q_{nett}`$|
    |:---:|:---:|:---:|
    |Hold|0|0|
    |Toggle|1|1|

# T Flip-Flop(Toggle)
- ### $`Q_{nett}=Q\oplus T=\overline{T}Q+T\overline{Q}`$
- ### truth table
    |Action|$`T`$|$`Q_{nett}`$|
    |:---:|:---:|:---:|
    |Hold|0|$`Q`$|
    |Toggle|1|$`\overline{Q}`$|

# JK Flip-Flop
- ### $`Q_{nett}=J\overline{Q}+\overline{K}Q`$
- ### truth table
    |Action|$`J`$|$`K`$|$`Q_{nett}`$|
    |:---:|:---:|:---:|:---:|
    |Hold|0|0|Q|
    |Reset|0|1|0|
    |Set|1|0|1|
    |Toggle|1|1|$`\overline{Q}`$|
