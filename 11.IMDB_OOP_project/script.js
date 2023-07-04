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
    this.validatePremiere(premiere)
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

  arrayValidation(prop, value){
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

  validatePremiere(premiere){
    if (this.numberValidation("ano de estreno", premiere)) {
      if (!/^([0-9]){4}$/.test(premiere)) {
        return console.error(
          `The premiere: ${premiere} is not valid, it should be a number of 4 digits`
        )}
    }
  }
}

const rocky = new Movie({
  id: "tt0439572",
  title: "Titulo de la peli",
  director: "Roger Acosta",
  premiere: 2020,
});

/*
Barbie ID = ls520251784
The Flash = tt0439572
oppenheimer = tt15398776

*/
