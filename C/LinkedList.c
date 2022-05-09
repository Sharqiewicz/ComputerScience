#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int number;
    struct node *next;
}node;

node * create_node(int value){
    node *n = malloc(sizeof(node));
    if( n == NULL){
        printf("No free space\n");
        exit(1);
    }
    n->number = value;
    n->next = NULL;

    // printf("%p \n", n);
    // printf("%i \n", n->number);
    // printf("%p \n", n->next);
    return n;
}

void add_node_to_linked_list(node *list, node *n){
    node *current = list;
    if(current->next == NULL){
        list->next = n;
        return;
    }
    while(current->next != NULL){
        printf("----------- \n");
        printf("%i \n", current->number);
        printf("%p \n", current->next);
        current = current->next;
    }
    current->next = n;
}

int main(void){


    node *list = NULL;

    node *n = create_node(1);

    // (*n).number = 1;
    // n->number = 2;
    // n->next = NULL;

    list = n;

    n = create_node(2);
    add_node_to_linked_list(list, n);

    n = create_node(3);
    add_node_to_linked_list(list, n);

    n = create_node(4);
    add_node_to_linked_list(list, n);

    n = create_node(5);
    add_node_to_linked_list(list, n);

    n = create_node(6);
    add_node_to_linked_list(list, n);


    for(node *tmp = list; tmp != NULL; tmp = tmp->next){
        printf("%i\n", tmp->number);
    }


    // Free every node in linked list
    while(list != NULL){
        node *tmp = list->next;
        free(list);
        list = tmp;
    }
    return 0;
}