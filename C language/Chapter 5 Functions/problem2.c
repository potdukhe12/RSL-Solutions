#include<stdio.h>

void namaste();
void bonjour();

int main()
{
    printf("Enter country(i -> indian /f -> french) : ");
    char ch;
    scanf("%c", &ch);
    
    if( ch == 'i' || ch == 'I' )
        namaste();
    else
        bonjour();    

    printf("\nThank You!"); 

    return 0;
}

void namaste()
{
    printf("Namaste!!!\n");
}

void bonjour()
{
    printf("Bonjour...\n");
}