#include<stdio.h>

void printString(char arr[]);

int main()
{
    // character array ==> %c

    // char name[] = {'S','a','u','r','a','b','h','\0'};
    // char name2[] = "Potdukhe";

    // char name3[] = {'S','a','u','r','a','b','h',' ','P','o','t','d','u','k','h','e','\0'};
    // char name4[] = "Saurabh Potdukhe";

    char fName[] = "Saurabh";
    char lName[] = "Potdukhe";

    printString(fName);
    printString(lName);

    // string format specifier ==> %s

    // char name[50];
    // printf("\nEnter your first name : ");
    // scanf("%s",name);                   // i/p ==> Saurabh
    // printf("Your name is : %s",name);   // o/p ==> Saurabh
    
            // char fullname[50];
            // printf("\nEnter your full name : ");
            // scanf("%s",fullname);              // i/p ==> Saurabh Potdukhe
            // printf("Your name is : %s",name);  // o/p ==> Saurabh   <== only takes 1st word

    // in this case use gets() & puts()

    char fullname[50];
    printf("\nEnter your full name : ");
    gets(fullname);                     // i/p ==> Saurabh Potdukhe
    printf("Your full name is : ");     // o/p ==> Saurabh Potdukhe
    puts(fullname); 

    // this function gets(str) & puts(str) is not safe, so no longer used today
    // instead use fgets(str,n,file)
    // to use fgets ==> use 'stdin' in file's place

    char str[100];
    printf("\n\nEnter a string : ");
    fgets(str,100,stdin);
    printf("Your string is : ");     // o/p ==> Saurabh Potdukhe
    puts(str);


    printf("\nThank You!\n\n"); 

    return 0;
}


void printString(char arr[])
{
    for(int i=0; arr[i] != '\0'; i++)
    {
        printf("%c",arr[i]);
    }
    printf("\n");
}

