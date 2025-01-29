import { faker, fakerEN_US, fakerDE, fakerFR } from "@faker-js/faker";

const locales: Record<string, any> = {
  en: fakerEN_US,
  de: fakerDE,
  fr: fakerFR,
};

export function generateBooks({
  seed,
  region,
  likes,
  reviews,
  page,
}: GenerateBooksParams): Book[] {
  faker.seed(seed + page);

  const localizedFaker = locales[region] || locales["en"];

  return Array.from({ length: 20 }, (_, index) => {
    const book: Book = {
      index: index + 1 + page * 10,
      isbn: localizedFaker.commerce.isbn(),
      title: localizedFaker.word.words(2),
      authors: localizedFaker.person.fullName(),
      publishedYear: localizedFaker.date
        .between({ from: "1930-01-01", to: "2025-12-31" })
        .getFullYear(),
      publisher: localizedFaker.company.name(),
      likes: localizedFaker.number.int({ min: likes, max: likes + 50 }),
      rating: reviews,
      reviews: Array.from({ length: 3 }, () => ({
        author: localizedFaker.person.fullName(),
        text: localizedFaker.lorem.sentence(),
      })),
    };

    return book;
  });
}
