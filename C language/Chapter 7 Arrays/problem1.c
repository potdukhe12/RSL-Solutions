#include<stdio.h>

int main()
{
    float price[5] = {100.0, 200.0, 300.0, 400.0};

    printf("Enter 5th price : ");
    scanf("%f", &price[4]);

    // Array + Pointer

    float *ptr = &price[0];   
    //  *ptr = &price;  // it will take value of 0th index

    for(int i = 0; i<sizeof(price)/4; i++)  //since array length is equal to size of data type.
    {
        printf("Price %d : %f\n", i+1, *(ptr+i));
    }

    // calculate price with gst

    for(int i = 0; i<sizeof(price)/4; i++)  //since array length is equal to size of data type.
    {
        price[i] += price[i] * 0.18;    // 18% gst
        printf("Price %d : %f\n", i+1, price[i]);
    }


    printf("\nThank You!\n\n"); 

    return 0;
}