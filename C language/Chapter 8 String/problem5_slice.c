#include<stdio.h>
#include<string.h>

void slice(char str[], int n, int m);
int countVowels(char str[]);

int main()
{
    // slice a string from index 'n' to index 'm'
    char str[100] = "HelloWorld";
    int n, m;
    // printf("\nEnter a string : ");
    // scanf("%s", str);    

    // printf("\nEnter starting index : ");
    // scanf("%d", &n);    
    // printf("\nEnter ending index : ");
    // scanf("%d", &m);    
    n=2;
    m=6;

    printf("\nSliced String : ");
    slice(str,n,m);


    // count vowels (a,e,i,o,u)

    char str2[] = "HelloWorld";
    printf("Vowels are : %d", countVowels(str2));

    printf("\nThank You!\n\n"); 

    return 0;
}

void slice(char str[], int n, int m)
{
    char newStr[100];
    int j=0;
    for(int i=n; i<=m; i++,j++)
    {
        newStr[j] = str[i];
    }
    newStr[j] = '\0';
    puts(newStr);
}

int countVowels(char str[])
{
    int cnt = 0;
    for(int i=0; str[i] != '\0'; i++)
    {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
            cnt++;
        }
    }
    return cnt;
}


