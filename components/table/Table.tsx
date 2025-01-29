"use client";

import React, { useEffect, useState } from "react";
import LanguageSelector from "../LanguageSelector";
import SeedInput from "../SeedInput";
import { SliderLikes } from "../SliderLikes";
import { NumberReviews } from "../NumberReviews";
import { RegionOptions } from "@/constants";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { CollapsibleRow } from "./CollapsibleRow";
import { Loader } from "lucide-react";

export function CollapsibleTable() {
  const [selectedRegion, setSelectedRegion] = useState("en");
  const [seed, setSeed] = useState(42);
  const [likes, setLikes] = useState(500);
  const [reviews, setReviews] = useState(5);
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const generateRandomSeed = () => setSeed(Math.floor(Math.random() * 1000000));

  useEffect(() => {
    setBooks([]);
    setPage(0);
    fetchBooks();
  }, [selectedRegion, seed, likes, reviews]);

  useEffect(() => {
    if (page === 0) return;

    fetchBooks();
  }, [page]);

  const fetchBooks = async () => {
    if (loading) return;
    setLoading(true);

    const response = await fetch(
      `/api/books?region=${selectedRegion}&seed=${seed}&page=${page}&likes=${likes}&reviews=${reviews}`
    );
    const data = await response.json();

    setBooks((prevBooks) => [
      ...prevBooks,
      ...data.map((book: any) => ({
        title: book.title,
        author: book.author,
        index: book.index,
        isbn: book.isbn,
        authors: book.authors,
        publishedYear: book.publishedYear,
        publisher: book.publisher,
        likes: book.likes,
        rating: book.rating,
        reviews: book.reviews,
        reviewAuthors: book.reviewAuthors,
      })),
    ]);

    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 50 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center h-[100px]">
          <Loader className="animate-spin" size={150} />{" "}
        </div>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={6} className="p-4">
              <div className="flex w-full items-center justify-center space-x-24">
                <LanguageSelector
                  selectedRegion={selectedRegion}
                  onChange={setSelectedRegion}
                  regions={RegionOptions}
                />
                <SeedInput
                  seed={seed}
                  onChange={setSeed}
                  onGenerate={generateRandomSeed}
                />
                <SliderLikes likes={likes} onChange={setLikes} />
                <NumberReviews reviews={reviews} onChange={setReviews} />
              </div>
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead className="w-[250px]">ISBN</TableHead>
            <TableHead className="w-[250px]">Title</TableHead>
            <TableHead className="w-[250px]">Author(s)</TableHead>
            <TableHead className="w-[250px]">Publisher</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {books.map((book, index) => (
            <CollapsibleRow key={index} book={book} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
