#include<iostream>

using namespace std;

int main()
{
    int i=2;
    cout << "Compare the i value" << endl;

    switch (i)
    {
        case 1:
            cout << "Value is 1" << endl ;
            break;

        case 2:
            cout << "Value is 2" << endl ;
            break;

        case 3:
            cout << "Value is 3" << endl ;
            break; 


        default:
            cout << "Value is between 1 to 10" << endl ;
    }
   
    return 0;
}
