#include<iostream>
#include<string>

using namespace std;

int main()
{
    string friends[5] {"Ram", "Sham", "Om", "Rahul", "Shanti"} ;
    for (int i = 0; i < 5; i++)
    {
       cout << friends[i] << endl;
    }

    int map[5][5] { {0,1,2,3,8}, 
                    {4,5,6,7,6}, 
                    {0,2,3,5,4}, 
                    {1,0,1,4,5}, 
                    {4,4,4,4,4} };

    for (int y = 0; y<5; y++)
    {
        for (int x = 0; x < 5; x++)
        {
            cout << map[y][x];
        }
        cout << endl;
    }
    
    return 0;
}