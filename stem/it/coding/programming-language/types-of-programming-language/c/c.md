# Operator

# Escape Character
- ### [Escape Character](../../computer-science/data-representation/data-representation.md#escape-character)

# Format

# Pointer

# Selection
- ### If else
- ### Switch

# Loop
- ### For
- ### While

# User-defined Data Types
- ### [Struct](./c-user-defined-data-types.md/c-struct.md)
- ### [Union](./c-user-defined-data-types.md/c-union.md)
- ### [Enum](./c-user-defined-data-types.md/c-enum.md)

# Header File
- ### `<stdio.h>` (standard input/output)
    - #### [File Handling](./c-header-file/c-file-handling.md)
- ### `<stdlib.h>` (standard library)
- ### `<stdbool.h>` (standard boolean)
- ### `<math.h>`
- ### `<string.h>`
- ### `<ctype.h>`

# Data Structures and Algorithms in C
- ### Singly Linked List
    ```c
    struct Node{
        int data;
        struct Node *next;
    };
    
    // insertBack
    void insertBack(struct Node **head, int value){
        struct Node *newNode=malloc(sizeof(struct Node));
        newNode->data=value;
        newNode->next=NULL;
        if (*head==NULL){
            *head=newNode;
        }
        else{
            struct Node *ptr=*head;
            while (ptr->next!=NULL){
                ptr=ptr->next;
            }
            ptr->next=newNode;
        }
    }
    
    // showall
    void showall(struct Node *p){
        while(p!=NULL){
            printf("%d\n",p->data);
            p=p->next;
        }
    }
    
    int main(){
        struct Node *head=NULL;
        insertBack(&head,35);
        insertBack(&head,69);
        showall(head);
        return 0;
    }
    ```
