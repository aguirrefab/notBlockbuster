export class Movie {
  id: string;
  title: string;
  year: string;
  type: string;
  image: string;

  constructor(
    id: string,
    title: string,
    year: string,
    type: string,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.type = type;
    this.image = image;
  }
}
