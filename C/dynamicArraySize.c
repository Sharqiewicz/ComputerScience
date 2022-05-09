#include <stdio.h>
#include <stdlib.h>

int * make_array_bigger(int array[], int length, int size){
    int *tmp = malloc(size * sizeof(int));

    if(tmp == NULL){
        free(array);
        printf("No free space\n");
        return array;
    }

    for(int i = 0; i < length; i++ ){
        tmp[i] = array[i];
    }

    return tmp;
}

int main(void){

    // create an array in heap
    int *array = malloc(3 * sizeof(int));

    // If no free space
    if(array == NULL){
        free(array);
        printf("No free space\n");
        return 1;
    }

    array[0] = 1;
    array[1] = 2;
    array[2] = 3;

    array = make_array_bigger(array,3, 5);

    *(array + 3) = 4;
    *(array + 4) = 5;

    for(int i = 0; i < 5; i++){
        printf("%i\n", array[i]);
    }

    return 0;
}