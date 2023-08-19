#include <stdio.h>
#include <string.h>
 
int main()
{
    char s[1000] = "Aloha@1234Technology"; 
    int i,alphabets=0,digits=0,specialcharacters=0;
 
    printf("\nYour string : ");
    puts(s);

    for(i=0;s[i];i++)  
    {
        if((s[i]>=65 && s[i]<=90)|| (s[i]>=97 && s[i]<=122) )
          alphabets++;

        else if(s[i]>=48 && s[i]<=57)
         digits++;

        else
         specialcharacters++;
 	}
 	
    printf("\nCounts are : \n");
    printf("Alphabets = %d\n",alphabets);
    printf("Digits = %d\n",digits);
    printf("Special characters = %d", specialcharacters);
 
    return 0;
}