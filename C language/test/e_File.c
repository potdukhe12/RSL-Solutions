#include<stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("Test.txt","r");
    printf("%c",fgetc(fptr));
    printf("%c",fgetc(fptr));
    printf("%c",fgetc(fptr));
    printf("%c",fgetc(fptr));
    printf("%c",fgetc(fptr));
    
    fclose(fptr);
    return 0;
}