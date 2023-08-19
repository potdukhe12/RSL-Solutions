#include<iostream>

using namespace std;

int main()
{
    int i = 5;
    cout << "Compare the i value" << endl;

    if(i < 3)
    {
    	cout << "Value is less than 3" << endl;
    }
    else if(i > 3)
    {
    	cout << "Value is greater than 3" << endl;
    }
    else if(i == 3)
    {
    	cout << "Value is equal to 3" << endl; 
    }
    return 0;
}
