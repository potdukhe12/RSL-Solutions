#include<stdio.h>

void printString(char arr[]);
int countString(char arr[]);

int main()
{
    // String using pointer
    //  use --> value of pointer can be changed
    
    char *str = "Hello World";
    printf("\nBefore : ");
    puts(str);

    str = "Welcome";
    printf("\nAfter : ");
    puts(str);

    // Char array cannot be modified

        // char str2[] = "Hello World";
        // printf("\nBefore : ");
        // puts(str2);

        // str2 = "Welcome";     // it gives error
        // printf("\nAfter : ");
        // puts(str2);

    // Length of string

    char name[100];
    printf("\nEnter name : ");
    fgets(name,100,stdin);
    printf("Length is : %d", countString(name));

    printf("\nThank You!\n\n"); 

    return 0;
}

int countString(char arr[])
{
    int cnt = 0;
    for(int i=0; arr[i] != '\0'; i++)
    {
        cnt++;
    }
    return cnt-1;
}

