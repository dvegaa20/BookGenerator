import { Faker, en, de, fr } from "@faker-js/faker";

const locales: Record<string, any> = { en, de, fr };

export function generateBooks({
  seed,
  region,
  likes,
  reviews,
  page,
}: GenerateBooksParams): Book[] {
  const localizedFaker = new Faker({ locale: locales[region] });

  localizedFaker.seed(seed + page);

  return Array.from({ length: 40 }, (_, index) => {
    const titleLength = localizedFaker.number.int({ min: 2, max: 5 });
    const book: Book = {
      index: index + 1 + page * 20,
      isbn: localizedFaker.string.numeric(13),
      title: localizedFaker.lorem.words(titleLength),
      authors: [localizedFaker.person.fullName()],
      publisher: localizedFaker.company.name(),
      likes: Math.random() < likes / 10 ? Math.ceil(likes) : 0,
      reviews: Math.random() < reviews / 10 ? Math.ceil(reviews) : 0,
    };

    return book;
  });
}
