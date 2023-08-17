#include<stdio.h>
#include<string.h>

void salting(char password[]);

int main()
{
    // take password from user and add salt '123' at the end
    char password[100];
    printf("\nEnter Password : ");
    scanf("%s", password);    

    printf("\nSalted Password : ");
    salting(password);

    printf("\nThank You!\n\n"); 

    return 0;
}

void salting(char password[])
{
    char salt[] = "123";
    char newPassword[100];

    strcpy(newPassword,password);   // newPass = "test"
    strcat(newPassword,salt);       // newPass = "test" + "123"
    
    puts(newPassword);
}


