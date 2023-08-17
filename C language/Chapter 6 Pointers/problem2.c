#include<stdio.h>

int main()
{
    // Pointer to pointer ==> pptr

    float price = 100.00;
    float *ptr = &price;
    float **pptr = &ptr;

    printf("\n%f\n",price);
    printf("%f\n",*ptr);
    printf("%f\n",**pptr);

    printf("\nThank You!\n\n"); 

    return 0;
}
