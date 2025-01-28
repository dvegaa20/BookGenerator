declare interface GenerateBooksParams {
  seed: number;
  region: string;
  likes: number;
  reviews: number;
  page: number;
}

declare interface Book {
  index: number;
  isbn: string;
  title: string;
  authors: string[];
  publisher: string;
  likes: number;
  reviews: number;
}
