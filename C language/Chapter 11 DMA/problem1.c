#include<stdio.h>
#include<stdlib.h>

int main()
{

// 'malloc()' ==> memory allocation

    int *ptr;
    ptr = (int *) malloc(5 * sizeof(int));
        // memory is getting allocated during runtime

    ptr[0] = 1;
    ptr[1] = 3;
    ptr[2] = 5;
    ptr[3] = 7;
    ptr[4] = 9;

    for(int i=0; i<5; i++)
    {
        printf("%d\n", ptr[i]);
    }


// 'calloc()' ==> continuos & by default 0

    float *ptr2;
    ptr2 = (float *) calloc(5, sizeof(float));

    // ptr[0] = 1;
    // ptr[1] = 3;
    // ptr[2] = 5;
    // ptr[3] = 7;
    // ptr[4] = 9;

    for(int i=0; i<5; i++)
    {
        printf("%f\n", ptr2[i]);
    }


// 'free()' ==> free memory that is used by 'malloc' & 'calloc'

    free(ptr2);

// 'realloc()' ==> inc or dec memory using same pointer & size

    int *ptr3;
    ptr3 = (int *) calloc(5, sizeof(int));

    printf("Enter numbers(5) : ");
    for(int i=0; i<5; i++)
    {
        scanf("%d", &ptr3[i]);
    }

    ptr3 = realloc(ptr3, 8);
    printf("Enter numbers(8) : ");
    for(int i=0; i<8; i++)
    {
        scanf("%d", &ptr3[i]);
    }

    //print
    for(int i=0; i<8; i++)
    {
        printf("Number %d is %d\n", i, ptr3[i]);
    }

    return 0;
}