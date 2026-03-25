# Operator
- ### Logical Operator
    |Operation|Operator|
    |:---:|:---:|
    |NOT|`not`、`!`|
    |AND|`and`、`&&`|
    |OR|`or`、`\|\|`|
    |XOR|`xor`、`^^`|
- ### Relational Operator
    |Operation|Operator|
    |:---:|:---:|
    |Equal|`==`|
    |Not Equal|`!=`|
    |Less than|`<`|
    |Greater than|`>`|
    |Less than or Equal to|`<=`|
    |Greater than or Equal to|`>=`|
- ### Arithmetic Operator
    |Operation|Operator|eg|
    |:---:|:---:|:---:|
    |Plus|`+`|`a+b`|
    |Minus|`-`|`a-b`|
    |Multiply|`*`|`a*b`|
    |Divide|`/`|`a/b`|
    |Modulo|`%`|`a % b`|
- ### Specialized Operators
    |Operation|Operator|eg|
    |:---:|:---:|:---:|
    |If the protocol/field/slice contain a value|`contains`|`http contains "https://www.google.com"`|
    |If the string match the given case|`matches`|`wsp.header.user_agent matches "sus"`|
    |If the value exists within a set|`in`|`tcp.port in {80,443,8080}`|
- ### Slice Operator
    |Meaning|Operator|
    |:---:|:---:|
    |`Start`~`Start+Length`|`[Start:Length]`|
    |`Start`~`End`|`[Start-End]`|
    |`Start`~`Start+1`|`[Start]`|
    |`Start`~|`[Start:]`|
    |`0`~`Length`|`[:Length]`|

# Display Filter
- ### `http`
    - `http.request`
    - `http.response`
    - `http.response.code == 200`
- `ip.addr == 128.119.245.12`
