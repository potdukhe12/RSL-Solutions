#include<stdio.h>
#include<string.h>

int main()
{
    // Length of string

    char name[100] = "Saurabh";
    // printf("Length is : %d", countString(name));

    int length = strlen(name)-1;
    printf("Length is : %d\n", length);

    // Copy String

    char newStr[] = "New";
    char oldStr[] = "Old";
    
    strcpy(newStr,oldStr);
    puts(newStr);
    puts(oldStr);
    
    // String concat

    char firstStr[100] = "Hello ";   // max size of string should be given before concatination 
    char secondStr[] = "World";
    
    strcat(firstStr,secondStr);
    puts(firstStr);

    // String compare

    char firstStr1[] = "Banana";    
    char secondStr1[] = "Apple";
    
    printf("Comparision : %d",strcmp(firstStr1,secondStr1)); 
        // ascii value of 'B' - 'A' ==> 1


    // Take string input using %c

    char str2[100];
    char ch;
    int i=0;

    printf("\n\nEnter some characters(press enter to stop) : ");
    while(ch != '\n')
    {
        scanf("%c",&ch);
        str2[i] = ch;
        i++;
    }
    str2[i] = '\0';
    printf("Output : ");
    puts(str2);


    printf("\nThank You!\n\n"); 

    return 0;
}


