#include<stdio.h>

void max(int* a, int* b);

int main()
{
    // max of 2 numbers

    int x=3, y=5, max;
    int *ptr1 = &x, *ptr2 = &y;

    if( *ptr1 > *ptr2)
        max = *ptr1;
    else
        max = *ptr2;

    printf("Max = %d\n", max);

    // Print all letters in alphabet

    char ch = 'A';
    char *ptr = &ch;

    for(int i = 0; i<26; i++)
    {
        printf("%c\n", *ptr);
        ch++;
    }

    printf("\nThank You!\n\n"); 

    return 0;
}

// call by referance
void _square(int* n)
{
    *n = (*n) * (*n);
    printf("_square = %d\n", *n);
}
