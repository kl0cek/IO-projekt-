class Movies {
    constructor() {
        this.ID = 0;
        this.Title = "";
        this.Director = "";
        this.LicenseSince = new Date();
        this.LicenseTo = new Date();
        this.Length = 0;
    }

    async GetMovie() {
        try {
            let pool = await sql.connect(config);
            let data = await pool.request().execute('GetMovie');
            return json(data.recordset);
        } catch (error) {
            fs.appendFile('log.txt', `[${Date.now()}]: ${error.originalError.message}`, (err) => {if (err) {console.log(err)}});
            return json({message: "Could not get movies list from database. Connect your server administrator"});
        }
    }
    PostMovie(movie) {
        let status;
        //wyslij movie do bazy
        return status;
    }
    UpdateMovie(movie) {
        let status;
        //zmien dane dla podanego filmu w bazie
        return status;
    }
    DeleteMovie(movieID) {
        let status;
        //usun film o podanym id z bazy
        return status;
    }

}