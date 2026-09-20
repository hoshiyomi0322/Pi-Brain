# Fully Qualified Domain Name (FQDN)
- ### \<[Hostname](#hostname)>.\<[Domain Name](#domain-name-domain)>.\<[TLD](#top-level-domain-tld)>
    <img src="./image/fqdn.png" width="60%">
- ### eg：www.google.com、suichan.servegame.com

# Hostname
|Hostname|Entity|
|:---:|:---:|
|www|World Wide Web|
|localhost|Local Computer|

# Domain Name (Domain)
- ### Internationalized Domain Name (IDN)
- ### Cybersquatting (Domain squatting)

# Top-level Domain (TLD)
- ### Generic TLD (gTLD)
    |gTLD|Entity|
    |:---:|:---:|
    |.com|Company|
    |.net|Network|
    |.org|Organization|
    |.info|Information|
    |.biz|Business|
    |.pro|Professional|
    |.name|Name|
- ### Sponsored TLD (sTLD)
    |sTLD|Entity|
    |:---:|:---:|
    |.edu|Education|
    |.gov|Government|
    |.mil|Military|
    |.asia|Asia|
    |.xxx|Internet Pornography|
- ### Country Code TLD (ccTLD)
    |ccTLD|Entity|
    |:---:|:---:|
    |.us|United States|
    |.uk|United Kingdom|
    |.eu|European Union|
    |.jp|Japan|
    |.tw|Taiwan|

# DNS Message Format
<div align="center"><img src="./image/dns-message-format.png" width="70%"></div>

- ### Header
    - #### Transaction ID
    - #### Flags
        - Query/Response (QR)
        - Operation code (OpCode)
        - Authoritative Answer (AA)
        - Truncation (TC)
        - Recursion Desired (RD)
        - Recursion Available (RA)
        - Reserved
        - Return code (RCode)
    - #### Question Resource Record count (QDCOUNT)
    - #### Answer Resource Record count (ANCOUNT)
    - #### Authority Resource Record count (NSCOUNT)
    - #### Additional Resource Record count (ARCOUNT)
- ### Question Section
- ### Answer Section
- ### Authority Section
- ### Additional Section


# Service record (SRV record)
