# Operator
- ### Logical Operator
    |Operation|Operator|
    |:---:|:---:|
    |NOT|`not`|
    |AND|`and`|
    |OR|`or`|
    |XOR|`xor`|
    |NAND|`nand`|
    |NOR|`nor`|
    |XNOR|`xnor`|
- ### Relational Operator
    |Operation|Operator|
    |:---:|:---:|
    |Equal|`=`|
    |Not Equal|`/=`|
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
    |Power|`**`|`a**b`|
    |Modulo|`mod`|`a mod b`|
    |Remainder|`rem`|`a rem b`|
    |Absolute Value|`abs`|`abs a`|
- ### Assignment Operator
    |Operation|Operator|eg|
    |:---:|:---:|:---:|
    |Signal Assignment|`<=`|`signal_name<=value`|
    |Value Assignment|`:=`|`variable_name:=value`|
    |Association/Mapping|`=>`|`port map(signal_1=>signal_2)`|
    |Concatenation|`&`|`element&element`|
- ### Shift Operator
    |Operation|Operator|eg|
    |:---:|:---:|:---:|
    |Shift Left Logical|`sll`|
    |Shift Right Logical|`srl`|
    |Shift Left Arithmetic|`sla`|
    |Shift Right Arithmetic|`sra`|
    |Rotate Left|`rol`|
    |Rotate Right|`ror`|

# Data Type
- ### Declare
    ```vhdl
    name:data_type
    ```
- ### Signal
    ```vhdl
    -- signal signal_name:data type;
    signal sig_1:std_logic;
    signal sig_1:std_logic_vector(7 downto 0);
    
    -- signal signal_name:data type:=value;
    signal sig_1:std_logic:=`0`;
    signal sig_1:std_logic range 0 to 5:=0;
- ### Variable
    ```vhdl
    -- variable variable_name:data type;
    variable var_1:integer;

    -- variable variable_name:data type:=value;
    variable var_1:integer:=`0`;
    variable var_1:integer range 0 to 5:=0;
- ### Vector
    ```vhdl
    std_logic_vector(start downto stop);
    ```
- ### Array

# Entity, Architecture
- ### Entity
    ```vhdl
    entity entity_name is
        port(
            -- signal_name:mode data type;
            sig_1:in std_logic;
            sig_2:out std_logic);
    end entity_name
    ```
- ### Architecture
    ```vhdl
    architecture arch_name of entity_name is
        -- declare area
        signal sig_1:std_logic;
    begin
        statements;
    end arch_name;
    ```

# Component
- ### Component
    ```vhdl
    component element_name
        port(
            -- signal_name:mode data type;
            sig_1:in std_logic;
            sig_2:out std_logic);
    end element_name;
    ```
- ### Port Map
    ```vhdl
    heading: element_name port map(
        sig_1=>sig_a,
        sig_2=>sig_b);
    
    -- relative position
    heading: element_name port map(sig_a,sig_b);
    ```

# Statement
- ### Process
    ```vhdl
    [name:] process(sig_1)
        -- declare area
        variable var_1:integer;
    begin
        statements;
    end process [name:];
    ```
- ### when
    ```vhdl
    sig_1 when expression else
    ```- ### if
    ```vhdl
    if expression then
        statement_1;
    elsif
        statement_2;
    else
        statement_3;
    end if;
    ```
- ### for
    ```vhdl
    for i in (start downto stop) loop
        statement;
    end loop;
     ```
- ### while
    ```vhdl
    while expression loop
        statement;
    end loop;
     ```
- ### case
    ```vhdl
    case sig_1 is
        when choice_1 =>
            statement_1;
        when choice_1|choice_2 =>
            statement_2;
        when others =>
            statement_3;
    end case;
    ```
- ### loop
    ```vhdl
    loop_name: loop
        statement;
        next loop_name when expression;
        stop loop_name when expression;
    end loop;
    ```


