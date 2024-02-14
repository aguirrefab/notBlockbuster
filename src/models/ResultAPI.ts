interface MovieAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ResultAPI {
  Search: MovieAPI[];
  totalResults: string;
  response: string;
}
