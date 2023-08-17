#include<stdio.h>

void printHello();
void goodBye();

int main()
{
    printHello();
    printHello();
    printHello();

    goodBye();
    goodBye();
    
    printf("\nThank You!"); 

    return 0;
}

void printHello()
{
    printf("Hello World!!!\n");
}

void goodBye()
{
    printf("Good Bye\n");
}