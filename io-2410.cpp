#include <iostream>
#include <string>
#include <fstream>

using namespace std;

class Klient {
	string Imie;
	string Nazwisko;
	string email;
	int nr_biletu;
public:
	Klient() {};
	Klient(string Im, string Naz, string em, int bilet) : Imie(Im), Nazwisko(Naz), email(em), nr_biletu(bilet) {};
};

void Drukuj() {
	int wybor;
	fstream formatka;
	formatka.open("formatka.txt", ios::in | ios::out);
	cout << "Wybierz opcje: " << endl << "1. Drukuj" << endl << "2. Wyjdz";
	cin >> wybor;
	if (wybor==1)
	{

	}
}

