#include<stdio.h>

int main()
{
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