declare interface Region {
  label: string;
  value: string;
}

declare interface Review {
  author: string;
  text: string;
}

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
  authors: string;
  publishedYear: number;
  publisher: string;
  likes: number;
  rating: number;
  reviews: Review[];
}

declare interface LanguageProps {
  selectedRegion: string;
  onChange: (region: string) => void;
  regions: Region[];
}

declare interface SeedProps {
  seed: number;
  onChange: (seed: number) => void;
  onGenerate: () => void;
}

declare type SliderProps = React.ComponentProps<typeof Slider>;

declare interface NumberReviewsProps {
  reviews: number;
  onChange: (value: number) => void;
}
