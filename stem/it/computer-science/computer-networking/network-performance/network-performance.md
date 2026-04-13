# Network Performance
- ### [Data Transfer Rate](data-transfer-rate.md)
- ### [Latency](#latency-1)
    - ### [Delay](#delay-2)
- ### [Traffic Intensity](#traffic-intensity-1)
- ### Quality of Service (QoS)

# Latency
- ### ping
    <img src=".././image/ping.png" width="60%">
- ### [Delay](#delay-2)

# Delay
- ### Total Delay = $`D_{proc}+D_{que}+D_{tran}+D_{prop}`$
- ### Types of Delay：[Processing Delay](#processing-delay-) → [Queuing Delay](#queuing-delay-) → [Transmission Delay](#transmission-delay) → [Propagation Delay](#propagation-delay)
    - ### Processing Delay ($D_{proc}$)
    - ### Queuing Delay ($D_{que}$)
    - ### Transmission Delay：$`D_{tran}=\frac{L}{R}`$
        - $L$ = Packet Length (bits)
        - $R$ = [Data Transfer Rate](data-transfer-rate.md) (bps)
    - ### Propagation Delay：$`D_{prop}=\frac{d}{s}`$
        - $d$ = distance of link
        - $s$ = propagation speed
- ### Round-Trip Time (RTT)：the total time from a source to a destination and back

# Traffic Intensity
- ### Traffic Intensity：$`\frac{\text{Average Arrival Rate of bits (bps)}}{\text{Data Transfer Rate (bps)}}=\frac{aL}{R}=a\times D_{tran}`$
- #### Average Arrival Rate of bits (bps) = $aL$
    - $a$ = Average Arrival Rate of packet (packets per second)
    - $L$ = Average Packet Length (bits)
- #### [Data Transfer Rate](data-transfer-rate.md) (bps)：$R=\frac{L}{D_{tran}}$
    - [Average Transmission Delay](#transmission-delay) (s)：$D_{tran}=\frac{L}{R}$

