//Na załadowaniu strony
    document.addEventListener("DOMContentLoaded", async () =>
    {
        //Div do którego będzie zapisywana lista filmów
        const movieList = document.querySelector("main");

        //Pobierz liste, zaczekaj na odpowiedz i konwertuj do JSON'a
        const response = await fetch("https://ioapi.azurewebsites.net/api/movies");
        const movies = await response.json();

        if (response.status == 500) {
            console.log(movies.message);
            return;
        }

        //Dla każdego obiektu w tablicy (w tym przypadku to filmy) dodaj h1 z nazwą filmu
        movies.forEach(async movie => {
            movieList.innerHTML += `<div class="movie"><h1>${movie.Title}</h1><div class="screening"></div></div>`;

            //Dla każdego filmu pobierz z bazy daty wyświetlania i konwetruj do JSON'a
            const response = await fetch(`https://ioapi.azurewebsites.net/api/screening/${movie.ID}`);
            const screenings = await response.json();

            //Wyświetl każdą datę wyświetlania dla danego filmu
            screenings.forEach(screening => {
                const movieDiv = document.querySelectorAll("div.movie .screening")[movie.ID - 1];
                const screeningDate = new Date(screening.ScreeningDate);
                movieDiv.innerHTML += `<p>${screeningDate.toLocaleString()}</p>`;
            });
        });
    })