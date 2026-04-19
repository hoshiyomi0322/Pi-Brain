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
    |[Signal Assignment](#signal)|`<=`|`signal_name <= value`|
    |[Variable Assignment](#variable)|`:=`|`variable_name := value`|
    |[Initial Value](#declare-1)|`:=`|`object_class name : data_type := value`|
    |Association/Mapping|`=>`|`port map(signal_1 => signal_2)`|
    |Concatenation|`&`|`element & element`|
- ### Shift Operator
    |Operation|Operator|eg|
    |:---:|:---:|:---:|
    |Shift Left Logical|`sll`|
    |Shift Right Logical|`srl`|
    |Shift Left Arithmetic|`sla`|
    |Shift Right Arithmetic|`sra`|
    |Rotate Left|`rol`|
    |Rotate Right|`ror`|
- ### `:`
    |Operation|Format|eg|
    |:---:|:---:|:---:|
    |Label|`Label_name:`|`loop:`|
    |[Declare](#declare)|`name : data_type`|`signal sig_1 : std_logic`|

# Comment
```vhdl
--comment
```

# Declare
- ### Declare
    ```vhdl
    object_class name : data_type;
    object_class name : data_type := value; -- initialize
    ```
    - ### Range：$`min\le name\le max`$
        ```vhdl
        object_class name : data_type range min to max;
        object_class name : data_type range min to max := value;
        ```

# Object Class
- ### Signal
    ```vhdl
    -- Declare
    signal sig_1 : std_logic; -- signal signal_name:data type;
    signal sig_1 : std_logic := '0'; -- sig_1 <= '0'
    signal sig_1 : std_logic range 0 to 5 := '1';
    
    -- Signal Assignment
    sig_1 <= '1';
    ```
    - ### Declare Area：[architecture](#architecture),
    - ### Vector：`std_logic_vector(start downto stop);`
        ```vhdl
        -- Declare
        signal sig_1 : std_logic_vector(18 downto 0);
        signal sig_1 : std_logic_vector(3 downto 0) := "0001"; -- sig_1 <= "0001"
        
        -- Signal Assignment
        sig_1 <= "1001";
        sig_1(3) <= '0'; -- sig_1 <= "x…x0xxx"
        sig_1(2 downto 1) <= "10"; -- sig_1 <= "x…x10x"

        -- (others => 'value')
        signal sig_1 : std_logic_vector(3 downto 0) := (others => '0'); -- sig_1 <= "000"
        sig_1 <= (others => '1'); -- sig_1 <= "11…1"

        ```
- ### Variable
    ```vhdl
    -- Declare
    variable var_1 : integer; -- variable variable_name:data type;
    variable var_1 : integer := 0; -- var_1 <= 0
    variable var_1 : integer range 0 to 5 := 5;
    
    -- Variable Assignment
    var_1 := 67;
    ```
    - ### Declare Area：[process](#process),
- ### Constant：must initialize, can not be reassigned
    ```vhdl
    -- Declare
    constant con_1 : std_logic := '0';
    constant con_1 : std_logic_vector(2 downto 0) := "010";
    constant con_1 : integer := 67;
    ```
    - ### Declare Area：All

# Entity, Architecture
- ### Entity
    ```vhdl
    entity entity_name is
        port(
            sig_1 : in std_logic;
            sig_2 : out std_logic
        );
    end entity_name
    ```
- ### Port
    ```vhdl
    port(
        -- signal_name : mode data type;
        sig_1 : in std_logic;
        sig_2 : out std_logic_vector(4 downto 0)
    );
    ```
    - ### Mode：in, out, inout
- ### Architecture
    ```vhdl
    architecture arch_name of entity_name is
        -- signal declare area
        signal sig_1 : std_logic;
    
    begin
        -- statements
    end arch_name;
    ```

# Component
- ### Component
    ```vhdl
    component element_name
        port(
            sig_1 : in std_logic;
            sig_2 : out std_logic
        );
    end component;
    ```
- ### Port Map
    ```vhdl
    Label_name: element_name port map(
        sig_1 => sig_a,
        sig_2 => sig_b
    );
    
    -- relative position
    Label_name: element_name port map(sig_a,sig_b);
    ```
- ### eg
    ```vhdl
    -- component arch
    library ieee;
    use ieee.std_logic_1164.all;

    entity element_1
        port(
            sig_1 : in std_logic;
            sig_2 : out std_logic
        );
    end element_1;
    
    architecture arch_2 of element_1 is
        -- signal declare area
    begin
        -- statements
    end arch_2;

    --------------------------------------------------

    -- Main
    library ieee;
    use ieee.std_logic_1164.all;

    entity entity_1 is
        port(
            sig_a : in std_logic;
            sig_b : out std_logic
        );
    end entity_1;

    architecture arch_1 of entity_1 is
        component element_1 -- component
            port(
                sig_1 : in std_logic;
                sig_2 : out std_logic
            );
        end component;
        signal sig_c : std_logic;
    
    begin
        Label_1: element_1 port map(sig_a,sig_c); -- port map
        Label_2: element_1 port map(sig_c,sig_b); -- port map
        -- statements
    end arch_1;
    ```

# Statement
- ### Process
    ```vhdl
    [Label_name:] process(sig_1)
        -- declare area
        variable var_1 : integer;
    begin
        -- statements
    end process [Label_name:];
    ```
- ### When
    ```vhdl
    sig_1 when expression else sig_2
    ```
- ### If
    ```vhdl
    if expression then
        statement_1;
    elsif
        statement_2;
    else
        statement_3;
    end if;
    ```
- ### For
    ```vhdl
    for i in (start downto stop) loop
        statement;
    end loop;
     ```
- ### While
    ```vhdl
    while expression loop
        statement;
    end loop;
     ```
- ### Case
    ```vhdl
    case control_sig is
        when choice_1 =>
            statement_1;
        when choice_1 | choice_2 =>
            statement_2;
        when others =>
            statement_3;
    end case;
    ```
- ### With
    ```vhdl
    with control_sig select
        sig_1 <= value_a when value_1, -- sig_1<=value, when control_sig=value_1
        value_b when value_2,
        value_c when others;
    ```
- ### Loop
    ```vhdl
    Label_name: loop
        statement;
        next Label_name when expression;
        stop Label_name when expression;
    end loop;
    ```

# Function, Procedure, Package
- ### Function
- ### Procedure
- ### Package

