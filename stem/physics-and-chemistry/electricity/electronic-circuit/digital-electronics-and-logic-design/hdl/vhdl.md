# Operator
- ### Logical Operator

# Data Type
- ### Signal
    ```vhdl
    -- signal signal_a:data type;
    signal signal_1:std_logic;
    signal signal_1:std_logic_vector(7 downto 0);
    
    -- signal signal_a:data type:=value;
    signal signal_1:std_logic:=`0`;
    signal signal_1:std_logic range 0 to 5:=0;
    
    -- signal_a<=value;
    signal_1<=`0`;
    ```
- ### Variable
    ```vhdl
    -- variable var_a:data type;
    variable var_1:integer;

    -- variable var_a:data type:=value;
    variable var_1:integer:=`0`;
    variable var_1:integer range 0 to 5:=0;

    -- var_a:=value;
    var_1:=`0`;
    ```
- ### Array

# Entity, Architecture
- ### Entity
    ```vhdl
    entity entity_name is
        port(
            -- signal_a:mode data type;
            signal_1:in std_logic;
            signal_2:out std_logic);
    end entity_name
    ```
- ### Architecture
    ```vhdl
    architecture arch_name of entity_name is
        -- declare area
        signal signal_1:std_logic;
    begin
        statements;
    end arch_name;
    ```

# Component
- ### Component
    ```vhdl
    component element_name
        port(
            -- signal_a:mode data type;
            signal_1:in std_logic;
            signal_2:out std_logic);
    end element_name;
    ```
- ### Port Map
    ```vhdl
    heading: element_name port map(
        signal_1=>signal_a,
        signal_2=>signal_b);
    
    -- relative position
    heading: element_name port map(signal_a,signal_b);
    ```

# Statement
- ### Process
    ```vhdl
    [name:] process(signal_1)
        -- declare area
        variable var_1:integer;
    begin
        statements;
    end process [name:];
    ```
- ### when
    ```vhdl
    signal_1 when expression else
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
    case signal_1 is
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


