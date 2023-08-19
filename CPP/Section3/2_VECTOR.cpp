#include<iostream>
#include<string>
#include<vector>

using namespace std;

int main()
{
    vector <string> friends;

    friends.push_back("Sanket");
    friends.push_back("Anket");
    friends.push_back("Saket");
    friends.push_back("Nket");

    for (int i = 0; i < friends.size(); i++)
    {
        cout << friends[i] << endl;
    }
    
    swap(friends[1], friends.back());
    friends.pop_back();
    
    for (int i = 0; i < friends.size(); i++)
    {
        cout << friends[i] << endl;
    }
    
    return 0;
}