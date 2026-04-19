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
        -- statements;
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
        -- statements;
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
        -- statements;
    end arch_1;
    ```

# Statement
- ### Process
    ```vhdl
    [Label_name:] process(sig_1)
        -- declare area
        variable var_1 : integer;
    begin
        -- statements;
    end process [Label_name:];
    ```
- ### When
    ```vhdl
    sig_1 when expression else sig_2
    ```
- ### If
    ```vhdl
    if expression then
        -- statements_1;
    elsif
        -- statements_2;
    else
        -- statements_3;
    end if;
    ```
- ### For
    ```vhdl
    for i in (start downto stop) loop
        -- statements;
    end loop;
     ```
- ### While
    ```vhdl
    while expression loop
        -- statements;
    end loop;
     ```
- ### Case
    ```vhdl
    case control_sig is
        when choice_1 =>
            -- statements_1;
        when choice_1 | choice_2 =>
            -- statements_2;
        when others =>
            -- statements_3;
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

# Library, Package
- ### Library
    ```vhdl
    library library_name;
    
    -- eg
    library ieee;
    ```
- ### Package
    ```vhdl
    package pack_name is
        -- declare area
    end pack_name;
    
    package body pack_name is
        -- statements;
    end pack_name;
    ```
    - ### Use
        ```vhdl
        use library_name.pack_name.item;
        use library_name.pack_name.all; --all
        
        -- eg
        library ieee;
        use ieee.std_logic_1164.all;
        use ieee.std_logic_unsigned.all;
        ```

# Function, Procedure
- ### Function
- ### Procedure

# Ripple Carry Adder
```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity full_adder is
    port(
        a, b, cin : in std_logic;
        sum, cout : out std_logic
    );
end full_adder;

architecture dataflow of full_adder is
begin
    sum <= a xor b xor cin;
    cout <= (a and b) or ((a xor b) and cin);
end dataflow;
------------------------------------
library ieee;
use ieee.std_logic_1164.all;

entity rca is
    port(
        a3, a2, a1, a0 : in std_logic;
        b3, b2, b1, b0 : in std_logic;
        cin : in std_logic;
        sum3, sum2, sum1, sum0 : out std_logic;
        cout : out std_logic
    );
end rca;

architecture dataflow_2 of rca is

    component full_adder
        port(
            a, b, cin : in std_logic;
            sum, cout : out std_logic
        );
    end component;

    signal c1, c2, c3 : std_logic;

begin
    FA0: full_adder
		port map(a0, b0, cin, sum0, c1);
    FA1: full_adder
		port map(a1, b1, c1, sum1, c2);
    FA2: full_adder
		port map(a2, b2, c2, sum2, c3);
    FA3: full_adder
		port map(a3, b3, c3, sum3, cout);

end dataflow_2;
```

# Down Counter and 7-Segment
```vhdl
library ieee;
use ieee.std_logic_1164.all;
use ieee.std_logic_unsigned.all;

entity Divider is
    port(
        clk_in  : in std_logic; -- clock in
        rst : in std_logic;
        btn : in std_logic;
        seg_out : out std_logic_vector(6 downto 0); -- Seven-Segment Display(seg)
        sel_out : out std_logic_vector(2 downto 0); -- 3-to-8 decoder select
        led_out : out std_logic_vector(11 downto 0) -- LED
    );
end Divider;

architecture arch of Divider is
    -- Counters for different frequencies (9 down to 0)
    signal bcd_1hz, bcd_2hz, bcd_4hz : std_logic_vector(3 downto 0) := "1001"; -- initial value=9
    
    -- Multiplexing signals for the 7-segment display
    signal mux_cnt   : std_logic_vector(15 downto 0) := (others => '0');
    signal current_val : std_logic_vector(3 downto 0);
begin

    -- Frequency Dividers and Down-Counters
    process(clk_in) -- down-counter variable(cnt)
        variable cnt_1hz : integer range 0 to 24000000 := 0; -- 1Hz
        variable cnt_2hz : integer range 0 to 12000000 := 0; -- 2Hz (24000000/12000000=2)
        variable cnt_4hz : integer range 0 to 6000000  := 0; -- 4Hz (24000000/6000000=4)
    begin
		if rst='0' then
			bcd_1hz <= "1001";
			bcd_2hz <= "1001";
			bcd_4hz <= "1001";
			cnt_1hz := 0;
			cnt_2hz := 0;
			cnt_4hz := 0;
        elsif rising_edge(clk_in) then
            -- 1Hz
            if cnt_1hz >= 24000000 and btn = '1' then
                cnt_1hz := 0; --return to zero
                if bcd_1hz = "0000" then bcd_1hz <= "1001"; -- 0→9
					 else bcd_1hz <= bcd_1hz - 1; -- countdown
					 end if;
            else cnt_1hz := cnt_1hz + 1;
				end if;

            -- 2Hz
            if cnt_2hz >= 12000000 and btn = '1' then
                cnt_2hz := 0;
                if bcd_2hz = "0000" then bcd_2hz <= "1001";
					 else bcd_2hz <= bcd_2hz - 1;
					 end if;
            else cnt_2hz := cnt_2hz + 1;
				end if;

            -- 4Hz
            if cnt_4hz >= 6000000 and btn = '1' then
                cnt_4hz := 0;
                if bcd_4hz = "0000" then bcd_4hz <= "1001";
					 else bcd_4hz <= bcd_4hz - 1;
					 end if;
            else cnt_4hz := cnt_4hz + 1;
				end if;
            
            -- High-speed counter for Display Multiplexing (Scanning)
            mux_cnt <= mux_cnt + 1;
        end if;
    end process;

    -- LED Output (4 LEDs per frequency group)
    led_out <= bcd_1hz & bcd_2hz & bcd_4hz;

    -- Display Multiplexing (The 3-to-8 Decoder Logic)
    -- We switch between the three counters very fast so they appear "simultaneously"
    process(mux_cnt(15 downto 14)) -- Using upper bits of a fast counter
    begin
        case mux_cnt(15 downto 14) is
            when "00" => 
                current_val <= bcd_1hz;
                sel_out <= "000"; -- Select first digit
            when "01" => 
                current_val <= bcd_2hz;
                sel_out <= "001"; -- Select second digit
            when "10" => 
                current_val <= bcd_4hz;
                sel_out <= "010"; -- Select third digit
            when others => 
                current_val <= "1111"; -- Off
                sel_out <= "111";
        end case;
    end process;

    -- 7-Segment Decoder
    with current_val select
        seg_out <= "1111110" when "0000", -- 0
                   "0110000" when "0001", -- 1
                   "1101101" when "0010", -- 2
                   "1111001" when "0011", -- 3
                   "0110011" when "0100", -- 4
                   "1011011" when "0101", -- 5
                   "1011111" when "0110", -- 6
                   "1110000" when "0111", -- 7
                   "1111111" when "1000", -- 8
                   "1111011" when "1001", -- 9
                   "0000000" when others;
end arch;
```

# Random Number Generator
```vhdl
library ieee;
use ieee.std_logic_1164.all;
use ieee.std_logic_unsigned.all;

entity Divider is
    port(
        clk_in  : in std_logic; -- clock in
        rst : in std_logic;
        btn : in std_logic;
        seg_out : out std_logic_vector(6 downto 0); -- Seven-Segment Display(seg)
        sel_out : out std_logic_vector(2 downto 0); -- 3-to-8 decoder select
        led_out : out std_logic_vector(11 downto 0) -- LED
    );
end Divider;

architecture arch of Divider is
    -- Counters for different frequencies (9 down to 0)
    signal bcd1, bcd2 : std_logic_vector(3 downto 0) := "1001"; -- initial value=9
	 signal bcd4 : std_logic_vector(3 downto 0) := "1000"; -- initial value=8
    
    -- Multiplexing signals for the 7-segment display
    signal mux_cnt   : std_logic_vector(15 downto 0) := (others => '0');
    signal current_val : std_logic_vector(3 downto 0);
begin

    -- Frequency Dividers and Down-Counters
    process(clk_in) -- down-counter variable(cnt)
        variable cnt1 : integer range 0 to 240000 := 0; -- 1000Hz
        variable cnt2 : integer range 0 to 120000 := 0; -- 200Hz
        variable cnt4 : integer range 0 to 60000  := 0; -- 400Hz
	 begin
		  if rst='0' then
			  bcd1 <= "1001";
			  bcd2 <= "1001";
			  bcd4 <= "1001";
			  cnt1 := 0;
			  cnt2 := 0;
			  cnt4 := 0;
        elsif rising_edge(clk_in) then
            -- 1Hz
            if cnt1 >= 240000 and btn = '1' then -- 100Hz
                cnt1 := 0; --return to zero
                if bcd1 = "0000" then bcd1 <= "1001";
					 else bcd1 <= bcd1 - 1; -- countdown
					 end if;
            else cnt1 := cnt1 + 1;
				end if;

            -- 2Hz
            if cnt2 >= 120000 and btn = '1' then -- 200Hz
                cnt2 := 0;
                if bcd2 = "0001" then bcd2 <= "1001";
					 else bcd2 <= bcd2 - 2;
					 end if;
            else cnt2 := cnt2 + 1;
				end if;

            -- 4Hz
            if cnt4 >= 60000 and btn = '1' then -- 400Hz
                cnt4 := 0;
                if bcd4 = "0000" then bcd4 <= "1000";
					 else bcd4 <= bcd4 - 2;
					 end if;
            else cnt4 := cnt4 + 1;
				end if;
            
            -- High-speed counter for Display Multiplexing (Scanning)
            mux_cnt <= mux_cnt + 1;
        end if;
    end process;

    -- LED Output (4 LEDs per frequency group)
    led_out <= bcd1 & bcd2 & bcd4;

    -- Display Multiplexing (The 3-to-8 Decoder Logic)
    -- We switch between the three counters very fast so they appear "simultaneously"
    process(mux_cnt(1 downto 0)) -- Using upper bits of a fast counter
    begin
        case mux_cnt(1 downto 0) is
            when "00" => 
                current_val <= bcd1;
                sel_out <= "000"; -- Select first digit
            when "01" => 
                current_val <= bcd2;
                sel_out <= "001"; -- Select second digit
            when "10" => 
                current_val <= bcd4;
                sel_out <= "010"; -- Select third digit
            when others => 
                current_val <= "1111"; -- Off
                sel_out <= "111";
        end case;
    end process;

    -- 7-Segment Decoder
    with current_val select
        seg_out <= "1111110" when "0000", -- 0
                   "0110000" when "0001", -- 1
                   "1101101" when "0010", -- 2
                   "1111001" when "0011", -- 3
                   "0110011" when "0100", -- 4
                   "1011011" when "0101", -- 5
                   "1011111" when "0110", -- 6
                   "1110000" when "0111", -- 7
                   "1111111" when "1000", -- 8
                   "1111011" when "1001", -- 9
                   "0000000" when others;
end arch;
```

# step-motor(一相)
```vhdl
library ieee;
use ieee.std_logic_1164.all;
use ieee.std_logic_unsigned.all;

entity Divider is
    port(
        clk_in  : in std_logic; -- clock in
        btn : in std_logic; -- stop
        dir : in std_logic;  -- direction
        sep_out : out std_logic_vector(3 downto 0); -- step motor
        led_out : out std_logic_vector(11 downto 0) -- LED

        
    );
end Divider;

architecture arch of Divider is
    -- Counters for different frequencies (9 down to 0)
    signal bcd: std_logic_vector(3 downto 0) := "0000"; -- initial value=9
    
    signal buf: std_logic_vector(3 downto 0);
    
    
begin

    -- Frequency Dividers and Down-Counters
    process(clk_in) -- down-counter variable(cnt)
        variable cnt : integer range 0 to 400000 := 0; -- 40Hz
        variable count: integer := 0;
    begin

        if rising_edge(clk_in) then
            -- 1Hz
            if cnt >= 400000 and btn = '1' and count <48 then
                cnt := 0; --return to zero
				if dir='1' then
					count := count +1;
					if bcd = "0011" then bcd <= "0000";
					else 
						bcd <= bcd + 1; -- countdown
					end if;
				else
					count := count +1;
					if bcd = "0000" then bcd <= "0011";
					else
						bcd <= bcd - 1; -- countdown
					end if;
				end if;
			else cnt := cnt + 1;
			end if;
			
        end if;
        
    end process;
    
process(bcd)
begin
	case bcd is
		when "0000" => buf<= "1000"; --0
		when "0001" => buf<= "0100"; --1
		when "0010" => buf<= "0010"; --2
		when "0011" => buf<= "0001"; --3
		
		when others => buf<= "0001";
	end case;
end process;
    -- step motor
    led_out <= buf & "00000000";
    sep_out <=buf;
    
end arch;
```

# step-motor(一二相)
```vhdl
library ieee;
use ieee.std_logic_1164.all;
use ieee.std_logic_unsigned.all;

entity Divider is
    port(
        clk_in  : in std_logic; -- clock in
        rst : in std_logic; -- reset
        btn : in std_logic; -- stop
        dir : in std_logic;  -- direction
        sep_out : out std_logic_vector(3 downto 0); -- step motor
        led_out : out std_logic_vector(11 downto 0); -- LED
        sel_out : out std_logic_vector(2 downto 0); -- 3-to-8 decoder select
        seg_out : out std_logic_vector(6 downto 0) -- Seven-Segment Display(seg)
        
    );
end Divider;

architecture arch of Divider is
    -- Counters for different frequencies (9 down to 0)
    signal bcd: std_logic_vector(3 downto 0) := "0000"; -- initial value=9
    signal bcd2: std_logic_vector(3 downto 0) := "0000"; -- initial value=9
    signal buf: std_logic_vector(3 downto 0) := "0001";
    signal mux_cnt   : std_logic_vector(15 downto 0) := (others => '0');
    signal current_val : std_logic_vector(3 downto 0);
    signal running : std_logic_vector(1 downto 0):= "01";
begin

    -- Frequency Dividers and Down-Counters
    process(clk_in) -- down-counter variable(cnt)
        variable cnt : integer range 0 to 2400000 := 0; -- 40Hz
        variable count: integer range 0 to 96:= 0;
    begin

        if rising_edge(clk_in) then
            if btn = '0' then running<="00";
			end if;
			if count = 96 then
				running <= "00";
				count := 0;
			end if;
            if cnt >= 2400000 and running = "01" then
                cnt := 0; --return to zero
				if dir='1' then
					count := count +1;
					if bcd = "0111" then bcd <= "0000";
					else 
						bcd <= bcd + 1; -- countdown
						
					end if;
				else
					count := count +1;
					if bcd = "0000" then bcd <= "0111";
					else
						bcd <= bcd - 1; -- countdown
						count := count +1;
					end if;
				end if;
			else cnt := cnt + 1;
			end if;
			mux_cnt <= mux_cnt + 1;
        end if;
        
    end process;
    
process(bcd)
begin
	case bcd is
		when "0000" => buf<= "1000"; --0
		when "0001" => buf<= "1100"; --1
		when "0010" => buf<= "0100"; --2
		when "0011" => buf<= "0110"; --3
		when "0100" => buf<= "0010"; --4
		when "0101" => buf<= "0011"; --5
		when "0110" => buf<= "0001"; --6
		--when "0111" => buf<= "1001"; --7
		when others => buf<= "1001";
	end case;
end process;
    -- step motor
    led_out <= buf & "00000000";
    sep_out <=buf;
    
end arch;
```

