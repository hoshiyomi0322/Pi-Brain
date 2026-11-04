# Entity-Relationship Diagram (ER Diagram)
<div align="center"><img src="./image/er-diagram.png" width="80%"></div>

- ### [Element](../../database-system.md#element)
    |Element|Figure|
    |:---:|:---:|
    |**[Entity](#entity)**|<img src="./image/entity.png" width="30%"><br>Rectangle|
    |**[Attribute](#attribute)**|<img src="./image/attribute.png" width="30%"><br>Ellipse|
    |**[Relationship](#relationship)**|<img src="./image/relationship.png" width="30%"><br>Diamond|

# Entity
|Entity|Definition|Figure|
|:---:|:---:|:---:|
|**Strong Entity**|An entity that can exist independently of other entities and has its own key attribute|<img src="./image/entity.png" width="30%"><br>Rectangle|
|**Owner Entity**|A strong entity that provides the key attribute necessary to uniquely identify a dependent weak entity|<img src="./image/entity.png" width="30%"><br>Rectangle|
|**Weak Entity**|An entity that cannot exist independently and relies on an owner entity for its identification|<img src="./image/weak-entity.png" width="30%"><br>Double-lined rectangle|
- ### Entity Roles
    |Entity|Definition|
    |:---:|:---:|
    |Parent Entity|An entity that provides its key attribute to another entity|
    |Child Entity|An entity that contains a key attribute referencing a parent entity|

# Attribute
|Attribute|Definition|Figure|
|:---:|:---:|:---:|
|**Key Attribute**|An attribute that uniquely identifies each entity|<img src="./image/key-attribute.png" width="30%"><br>Ellipse with underline|
|**Composite Attribute**|An attribute that can be divided into smaller sub-attributes with independent meanings|<img src="./image/composite-attribute.png" width="30%"><br>Ellipse branched into sub-ellipses|
|**Derived Attribute**|An attribute whose value is calculated or deduced from other attributes|<img src="./image/derived-attribute.png" width="30%"><br>Dashed ellipse|
|**Multivalued Attribute**|An attribute that has more than one value for a single entity|<img src="./image/multivalued-attribute.png" width="30%"><br>Double-lined ellipse|

# Relationship
|Relationship|Definition|Figure|
|:---:|:---:|:---:|
|**Non-Identifying Relationship**|A relationship that connects strong entities|<img src="./image/relationship.png" width="30%"><br>Diamond|
|**Identifying Relationship**|A relationship that connects a weak entity to its owner entity|<img src="./image/identifying-relationship.png" width="30%"><br>Double-lined Diamond|

# Notation
- ### Chen Notation
- ### Crow's Foot Notation

# Cardinality Constraint
- ### One-to-One (1:1)
- ### One-to-Many (1:M)
- ### Many-to-One (M:1)
- ### Many-to-Many (M:N)
