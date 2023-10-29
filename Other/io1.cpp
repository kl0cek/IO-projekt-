#include <iostream>
using namespace std;

int main() {
	int AA[10];	
	int n=0;
	for (int i = 0; i < 10; i++)
	{
		cin >> AA[i];
		if (AA[i] < 0) {
			n++;
		}
	}
	cout << "Liczba liczb ujemnych: " << n << endl;
	int* BB = new int[n];
	int y = 0;
	for (int i = 0; i < 10; i++)
	{
		if (AA[i] < 0) {
			BB[y] = AA[i];
			y++;
		}
	}
	cout << "Tablica liczb ujemnych: " << endl;
	for (int i = 0; i < n; i++)
	{
		cout << i << ". " << BB[i] << endl;
	}
	int wynik = 10 - y;
	cout << "Liczba liczb pominietych: " << wynik << endl;
	delete[] BB;
	return 0;
}

