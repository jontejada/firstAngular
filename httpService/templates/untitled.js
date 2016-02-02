//a get request to http://www.omdbapi.com/?t=mars&y=&plot=full&r=json
//returns the following JSON:

{
    "Title": "Mars",
    "Year": "1997",
    "Rated": "N/A",
    "Released": "10 Mar 1998",
    "Runtime": "91 min",
    "Genre": "Action, Sci-Fi",
    "Director": "Jon Hess",
    "Writer": "Steven Hartov (screenplay), Patrick Highsmith (screenplay)",
    "Actors": "Olivier Gruner, Shari Belafonte, Gabriel Dell Jr., Alex Hyde-White",
    "Plot": "In the future, Mars has been colonized. A martial artist arrives to investigate what happened to his brother. A powerful mining company is the prime suspect.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "N/A",
    "Metascore": "N/A",
    "imdbRating": "3.6",
    "imdbVotes": "362",
    "imdbID": "tt0137094",
    "Type": "movie",
    "Response": "True"
}

//notes:
data.imdbID = 'tt0137094' //string

//a get request to http://www.omdbapi.com/?i=tt0137094&plot=short&r=json
// returns:
{
    "Title": "Mars",
    "Year": "1997",
    "Rated": "N/A",
    "Released": "10 Mar 1998",
    "Runtime": "91 min",
    "Genre": "Action, Sci-Fi",
    "Director": "Jon Hess",
    "Writer": "Steven Hartov (screenplay), Patrick Highsmith (screenplay)",
    "Actors": "Olivier Gruner, Shari Belafonte, Gabriel Dell Jr., Alex Hyde-White",
    "Plot": "In the future, Mars has been colonized. A martial artist arrives to investigate what happened to his brother. A powerful mining company is the prime suspect.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "N/A",
    "Metascore": "N/A",
    "imdbRating": "3.6",
    "imdbVotes": "362",
    "imdbID": "tt0137094",
    "Type": "movie",
    "Response": "True"
}
