#include <iostream>
#include <vector>
#include <map>

#include "Database.h"

std::vector<std::map<std::string, std::string>> getMovies(Database db, std::string parms = "")
{
    std::vector res = db.sendRequest("SELECT * from Movies");
}


int main()
{
    std::cout << "Hello World!\n";
}

/*
{
    code: 200,
    status: "succesfull",
    data:
    [
        {
            ID: 1,
            name: "Movie1",
            licenseSince: "01-01-2023",
            licenseTo: "31-12-2023",
            dates:
            {
                "12-12-2023": {sala: 1, seatsTaken: [1, 2, 3, 44, 50]},
                "13-12-2023": {sala: 2, seatsTaken: [1, 20, 31, 44, 50]},
                "14-12-2023": {sala: 3, seatsTaken: [1, 2, 30, 44, 50]}
            }
        }
    ]
}

*/