# Synchronous Sequential Circuit Design Procedure
1. ### [State Diagram](../finite-state-machine/representations-of-finite-state-machine.md#state-diagram-state-graph)
2. ### [State Transition Table](../finite-state-machine/representations-of-finite-state-machine.md#state-transition-table)
3. ### [State Assignment](#state-assignment-1)
4. ### [Excitation Table](#excitation-table-1)
5. ### [K-Maps](#k-maps-1)
6. ### [Logic Diagram](../../../digital-electronics-and-logic-design.md#logic-diagram) Realization

# State Assignment
- ### Types of State Assignment
    |State Assignment|Number of [Flip-Flops](../memory-element/flip-flop.md)<br>($m$ = Number of States)|
    |:---:|:---:|
    |[Binary](../../../digital-electronics-and-logic-design.md#binary-encoding) Assignment|$\lceil \log_2 m \rceil$|
    |[Gray Code](../../../digital-electronics-and-logic-design.md#gray-code) Assignment|$\lceil \log_2 m \rceil$|
    |[One-Hot](../../../digital-electronics-and-logic-design.md#one-hot) Assignment|$m$|
- ### State Assignment Rules
    - Assign adjacent binary codes (differing by 1 bit) to states in the following priority
    1. **Same Next State**：States that transition to the same next state under the same input condition
    2. **Common Present State**：Next states of the same present state
    3. **Same Output**：States that have the same output under the same input condition
- ### Example：Consider a 4-state [Mealy Machine](../finite-state-machine/types-of-finite-state-machine/finite-state-transducer.md#mealy-machine)
    <table border="1">
            <thead>
                <tr>
                    <th align="center" rowspan="2">Present State</th>
                    <th align="center" colspan="2">Next State</th>
                    <th align="center" colspan="2">Output</th>
                </tr>
                <tr>
                    <td align="center">$x=0$</td>
                    <td align="center">$x=1$</td>
                    <td align="center">$x=0$</td>
                    <td align="center">$x=1$</td>
                </tr>
            </thead>
            <tr>
                <th align="center">$S_0$</th>
                <td align="center">$S_0$</td>
                <td align="center">$S_1$</td>
                <td align="center">$0$</td>
                <td align="center">$1$</td>
            </tr>
            <tr>
                <th align="center">$S_1$</th>
                <td align="center">$S_2$</td>
                <td align="center">$S_3$</td>
                <td align="center">$0$</td>
                <td align="center">$0$</td>
            </tr>
            <tr>
                <th align="center">$S_2$</th>
                <td align="center">$S_0$</td>
                <td align="center">$S_3$</td>
                <td align="center">$0$</td>
                <td align="center">$1$</td>
            </tr>
            <tr>
                <th align="center">$S_3$</th>
                <td align="center">$S_2$</td>
                <td align="center">$S_1$</td>
                <td align="center">$0$</td>
                <td align="center">$1$</td>
            </tr>
        </table>

    - #### Number of [Flip-Flops](../memory-element/flip-flop.md)：$\lceil \log_2 4 \rceil = 2,~Q_1 Q_0$
    - #### State Assignment Rules
       - Same Next State：$(S_0,~S_2),~(S_1,~S_3),~(S_1,~S_2),~(S_0,~S_3)$
       - Common Present State：$(S_0,~S_1),~(S_2,~S_3)$
       - Same Output：$(S_0,~S_1),~(S_2,~S_3)$.
    - #### State Assignment
       - $S_0 = 00,~S_1 = 01,~S_2 = 10,~S_3 = 11$

# Excitation Table
- ### [SR Flip-Flop](../memory-element/flip-flop.md#sr-flip-flop-set-reset) Excitation Table
    <table border="1">
        <thead>
            <tr>
                <th align="center" colspan="2">State Transition</th>
                <th align="center" colspan="2">Flip-Flop Input</th>
            </tr>
            <tr>
                <th align="center">Present State</th>
                <th align="center">Next State</th>
                <th align="center">S</th>
                <th align="center">R</th>
            </tr>
        </thead>
        <tr>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
            <td align="center">X</td>
        </tr>
        <tr>
            <td align="center">$0$</td>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
            <td align="center">$0$</td>
        </tr>
        <tr>
            <td align="center">$1$</td>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
            <td align="center">$1$</td>
        </tr>
        <tr>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
            <td align="center">X</td>
            <td align="center">$0$</td>
        </tr>
    </table>
- ### [D Flip-Flop](../memory-element/flip-flop.md#d-flip-flop-data) Excitation Table
    <table border="1">
        <thead>
            <tr>
                <th align="center" colspan="2">State Transition</th>
                <th align="center">Flip-Flop Input</th>
            </tr>
            <tr>
                <th align="center">Present State</th>
                <th align="center">Next State</th>
                <th align="center">D</th>
            </tr>
        </thead>
        <tr>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
        </tr>
        <tr>
            <td align="center">$0$</td>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
        </tr>
        <tr>
            <td align="center">$1$</td>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
        </tr>
        <tr>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
        </tr>
    </table>
- ### [T Flip-Flop](../memory-element/flip-flop.md#t-flip-flop-toggle) Excitation Table
    <table border="1">
        <thead>
            <tr>
                <th align="center" colspan="2">State Transition</th>
                <th align="center">Flip-Flop Input</th>
            </tr>
            <tr>
                <th align="center">Present State</th>
                <th align="center">Next State</th>
                <th align="center">T</th>
            </tr>
        </thead>
        <tr>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
        </tr>
        <tr>
            <td align="center">$0$</td>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
        </tr>
        <tr>
            <td align="center">$1$</td>
            <td align="center">$0$</td>
            <td align="center">$1$</td>
        </tr>
        <tr>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
            <td align="center">$0$</td>
        </tr>
    </table>
- ### [JK Flip-Flop](../memory-element/flip-flop.md#jk-flip-flop) Excitation Table
    <table border="1">
        <thead>
            <tr>
                <th align="center" colspan="2">State Transition</th>
                <th align="center" colspan="2">Flip-Flop Input</th>
            </tr>
            <tr>
                <th align="center">Present State</th>
                <th align="center">Next State</th>
                <th align="center">J</th>
                <th align="center">K</th>
            </tr>
        </thead>
        <tr>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
            <td align="center">$0$</td>
            <td align="center">X</td>
        </tr>
        <tr>
            <td align="center">$0$</td>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
            <td align="center">X</td>
        </tr>
        <tr>
            <td align="center">$1$</td>
            <td align="center">$0$</td>
            <td align="center">X</td>
            <td align="center">$1$</td>
        </tr>
        <tr>
            <td align="center">$1$</td>
            <td align="center">$1$</td>
            <td align="center">X</td>
            <td align="center">$0$</td>
        </tr>
    </table>

# K-Maps
- Simplify [Flip-Flop](../memory-element/flip-flop.md) inputs and output using [K-Maps](../../../minimization-of-boolean-expressions.md#karnaugh-map-k-map)
