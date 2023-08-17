#include<stdio.h>

int main()
{
    // char is capital or small

    char ch;
    printf("Enter a character : ");
    scanf("%c", &ch);

    if(ch >= 'A' && ch <= 'Z')
        printf("Capital");
    else if(ch >= 'a' && ch <= 'z')
        printf("Small");
    else
        printf("Invalid");    
    
    printf("\n");

    return 0;
}