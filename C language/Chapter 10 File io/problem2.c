#include<stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("Test.txt","r");

    char ch;
    ch = fgetc(fptr);

    // EOF ==> End of File
    while(ch != EOF)
    {
        printf("%c", ch);
        ch = fgetc(fptr);
    }
    printf("\n");

    fclose(fptr);

    printf("\nThank You!\n\n"); 

    return 0;
}
