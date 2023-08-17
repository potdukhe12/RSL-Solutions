#include<stdio.h>

void square(int n);
void _square(int* n);
void swap(int* a, int* b);

int main()
{
    int num = 4;
    square(num);        // sending a copy parameter
    printf("number = %d\n\n", num);

    _square(&num);      // sending address as parameter
    printf("number = %d\n", num);  


    // Swap 2 numbers

    int x=3, y=5;
    printf("\nx = %d & y = %d\n", x, y);
    swap(&x,&y);
    printf("x = %d & y = %d\n", x, y);

    // sum, product, avg

    int a=3, b=5;
    int sum, prod, avg;
    doWork(a, b, &sum, &prod, &avg);

    printf("sum = %d, product = %d, avg = %d\n", sum, prod, avg);

    printf("\nThank You!\n\n"); 

    return 0;
}


// call by value
void square(int n)
{
    n = n * n;
    printf("\nsquare = %d\n", n);
}


// call by referance
void _square(int* n)
{
    *n = (*n) * (*n);
    printf("_square = %d\n", *n);
}

void swap(int* a, int* b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

void doWork(int a, int b, int *sum, int *prod, int *avg)
{
    *sum = a+b;
    *prod = a*b;
    *avg = (a+b)/2;
}