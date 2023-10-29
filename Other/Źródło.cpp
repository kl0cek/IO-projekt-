#include <iostream>
using namespace std;
int main() {
	cout << "Podaj 10 licz: " << endl;
	int AA[10];
	int ujemne=0;
	for (int i = 0; i < 10; i++) {
		cin >> AA[i];


		if (AA[i] < 0) {
			ujemne++;
		}
		
	}
	int *BB = new int[ujemne];


	for (int i = 0; i > ujemne; i++) {
		if (AA[i] < 0) {
			AA[i] = BB[i];
			
		}
		
	}
	cout << "Liczb ujemnych jest: " << ujemne;
	for (int i = 0; i < 10; i++) {
		cout << "Podana liczba ujemna" << BB[i] << endl;
	}
	delete[] BB;
	return 0;
}