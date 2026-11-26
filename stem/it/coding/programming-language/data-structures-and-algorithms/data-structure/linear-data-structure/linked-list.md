# Linked List
- ### head
- ### `insert(item)`
- ### `delete(item)`
- ### `search(item)`

# Singly Linked List
- ### Singly Linked List in [C](/stem/it/coding/programming-language/types-of-programming-language/c-cpp/c/c.md)
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

# Doubly Linked List

# Circular Linked List
