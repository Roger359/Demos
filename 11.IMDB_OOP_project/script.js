class Movie {
  constructor({ id, title, director, premiere, country, genre, rating }) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.premiere = premiere;
    this.country = country;
    this.genre = genre;
    this.rating = rating;
    this.validateIMDBID(id);
    this.validateTitle(title);
    this.validateDirector(director);
    this.validatePremiere(premiere);
    this.validateCountry(country);
    this.validateGenre(genre);
    this.validateRating(rating);
  }

  static get genreList() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film",
      "Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static aceptedGenres() {
    return console.info(
      `the acepted genres are: ${Movie.genreList.join(", ")}`
    );
  }

  stringValidation(prop, value) {
    if (!value) return console.warn(`${prop}: "${value}" is empty`);

    if (typeof value !== "string")
      return console.error(`${prop}: "${value}" entered, It's not a string`);

    return true;
  }

  numberValidation(prop, value) {
    if (!value) return console.warn(`${prop}: "${value}" is empty`);
    if (typeof value !== "number")
      return console.error(`${prop}: "${value}" entered, It's not a number`);

    return true;
  }

  arrayValidation(prop, value) {
    if (!value) return console.warn(`${prop}: "${value}" is empty`);
    if (typeof value !== "number")
      return console.error(`${prop}: "${value}" entered, It's not a number`);

    return true;
  }

  lengthValidation(prop, value, length) {
    if (value.length > length)
      return console.error(
        `${prop} ${value} excede el numero de caracteres permitidos ${length}`
      );
    return true;
  }

  validateArray(prop, value) {
    if (!value) return console.warn(`${prop} "${value}" is empty`);
    if (!(value instanceof Array))
      return console.error(`${prop} "${value}" inserted, Its not an Array`);

    if (value.length === 0)
      return console.error(`${prop} "${value}" dosent have data`);

    for (let string of value) {
      if (typeof string !== "string")
        return console.error(
          `The value "${string}}" inserted, Its not a string`
        );
    }
    return true;
  }

  validateIMDBID(id) {
    if (this.stringValidation("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `the IMDB id: ${id} is not valid, it should have 9 characteres, the 2 first letters and the other 7 numbers`
        );
      }
    }
  }

  validateTitle(title) {
    if (this.stringValidation("title", title)) {
      this.lengthValidation("Title", title, 100);
    }
  }

  validateDirector(director) {
    if (this.stringValidation("Director", director)) {
      this.lengthValidation("Director", director, 50);
    }
  }

  validatePremiere(premiere) {
    if (this.numberValidation("ano de estreno", premiere)) {
      if (!/^([0-9]){4}$/.test(premiere)) {
        return console.error(
          `The premiere: ${premiere} is not valid, it should be a number of 4 digits`
        );
      }
    }
  }

  validateCountry(country) {
    this.validateArray("Country", country);
  }

  validateGenre(genre) {
    if (this.validateArray("Genre", genre)) {
      for (let string of genre) {
        if (!Movie.genreList.includes(string)) {
          console.error(`genres incorrects "${genre.join(", ")}"`);
          Movie.aceptedGenres();
        }

        // console.log(genre, Movie.genreList.includes(genre))
      }
    }
  }

  validateRating(rating) {
    if (this.numberValidation("Rating", rating)) {
      return rating < 0 || rating > 10
        ? console.error(`Rating will be between 0 and 10`)
        : (this.rating = rating.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info(
      `Ficha tecnica \n Title: "${this.title}"\n Director: "${
        this.director
      }"\n Premiere: "${this.premiere}"\n Country: "${this.country.join(
        "-"
      )}"\n Genres: "${this.genre.join(", ")}"\n Rating: "${
        this.rating
      }"\n IMDB Id: "${this.id}"`
    );
  }
}

// Movie.aceptedGenres()
// const rocky = new Movie({
//   id: "tt0439572",
//   title: "Titulo de la peli",
//   director: "Roger Acosta",
//   premiere: 2020,
//   country: ["Colombia", "Francia"],
//   genre: ["War", "Sport"],
//   rating: 7.78,
// });

// rocky.fichaTecnica();

const myMovies = [
  {
    id: "tt0758758",
    title: 'Into the Wild',
    director: 'Sean Penn',
    premiere: 2007,
    country: ['USA'],
    genre: ['Adventure', 'Biography', 'Drama'],
    rating: 8.1
  },
  {
    id: "tt0479143",
    title: 'Rocky Balboa',
    director: 'Sylvester Stallone',
    premiere: 2006,
    country: ['USA'],
    genre: ['Action', 'Drama', 'Sport'],
    rating: 7.1
  },
  {
    id: "tt0468569",
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    premiere: 2008,
    country: ['USA', 'UK'],
    genre: ['Adventure', 'Crime', 'Drama'],
    rating: 9.0
  }
];

myMovies.forEach(el => new Movie(el).fichaTecnica())

/*
Barbie ID = ls520251784
The Flash = tt0439572
oppenheimer = tt15398776

*/
