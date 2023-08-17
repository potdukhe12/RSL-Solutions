#include<stdio.h>

int main()
{
    // program to replace two numbers a & b with there sum
    
    // Read 2 numbers
    FILE *fptr;
    fptr = fopen("Sum.txt","r");

    int a;
    fscanf(fptr, "%d", &a);
    int b;
    fscanf(fptr, "%d", &b);
    
    fclose(fptr);

    // Write Sum
    fptr = fopen("Sum.txt","w");
    fprintf(fptr, "%d", a+b);

    fclose(fptr);

    printf("\nThank You!\n\n"); 

    return 0;
}
