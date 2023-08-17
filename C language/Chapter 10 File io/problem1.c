#include<stdio.h>

int main()
{
    FILE *fptr;

    // Open file

    fptr = fopen("Test.txt","r");   // r ==> read
    // fptr = fopen("NewTest.txt","w");   // w ==> write

    // if(fptr == NULL)
    // {
    //     printf("File doesn't exist\n");
    // }
    // else
    // {
    //     // Close file
    //     fclose(fptr);
    // }

    
    // Read File

    char ch;
    fscanf(fptr, "%c", &ch);
    printf("Character = %c\n", ch);
    
    fscanf(fptr, "%c", &ch);
    printf("Character = %c\n", ch);
    
    fscanf(fptr, "%c", &ch);
    printf("Character = %c\n", ch);
    
    fscanf(fptr, "%c", &ch);
    printf("Character = %c\n", ch);
    
    fscanf(fptr, "%c", &ch);
    printf("Character = %c\n", ch);

    fclose(fptr);

    //////////////////////////////////
    //////////////////////////////////

    FILE *fptr2;

    // Open file

    // Write file
    fptr2 = fopen("NewTest.txt","w");   // w ==> write/overwrite
    
    // Append file
    // fptr2 = fopen("NewTest.txt","a");   // a ==> append(concat with previous data)

    // Write using 'fprintf' 
    // fprintf(fptr2,"%c", 'M');
    // fprintf(fptr2,"%c", 'A');
    // fprintf(fptr2,"%c", 'N');
    // fprintf(fptr2,"%c", 'G');
    // fprintf(fptr2,"%c", 'O');

    // Read using 'fgetc'   <== use read mode
    // printf("%c\n", fgetc(fptr));
    // printf("%c\n", fgetc(fptr));
    // printf("%c\n", fgetc(fptr));
    // printf("%c\n", fgetc(fptr));
    // printf("%c\n", fgetc(fptr));

    // Write using 'fputc'
    fputc('M', fptr);
    fputc('A', fptr);
    fputc('N', fptr);
    fputc('G', fptr);
    fputc('O', fptr);

    fclose(fptr2);

    printf("\nThank You!\n\n"); 

    return 0;
}
