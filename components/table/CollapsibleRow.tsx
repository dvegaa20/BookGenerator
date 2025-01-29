import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Star,
  ThumbsUp,
  MessageSquare,
  Calendar,
} from "lucide-react";

export const CollapsibleRow: React.FC<{ book: Book }> = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(book.reviews);

  return (
    <>
      <TableRow>
        <TableCell>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </TableCell>
        <TableCell>{book.index}</TableCell>
        <TableCell>{book.isbn}</TableCell>
        <TableCell className="capitalize">{book.title}</TableCell>
        <TableCell>{book.authors}</TableCell>
        <TableCell>{book.publisher}</TableCell>
      </TableRow>
      {isOpen && (
        <TableRow>
          <TableCell colSpan={6} className="bg-muted/100">
            <h4 className="capitalize text-2xl font-semibold mt-6 ml-4 text-gray-800">
              {book.title}
            </h4>
            <div className="flex gap-6">
              <div className="w-[40%]">
                <Image
                  src="https://covers.openlibrary.org/b/isbn/9780385533225-S.jpg"
                  alt="Book cover"
                  width={280}
                  height={280}
                  className="rounded-md shadow-sm m-4"
                />
              </div>
              <div className="w-[85%] space-y-4">
                <p className="text-lg">Additional Details</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="text-sm">
                      Published: {book.publishedYear}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ThumbsUp className="w-5 h-5 mr-2" />
                    <span className="text-sm">{book.likes} likes</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    <span className="text-sm">
                      {book.reviews.length} reviews
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    <span className="text-sm">
                      {book.rating} average rating
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h5 className="text-lg font-semibold mb-2 text-gray-700">
                    Reviews
                  </h5>
                  <div className="space-y-4">
                    {book.reviews && book.reviews.length > 0 ? (
                      book.reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-md">
                          <p className="text-sm text-gray-600 mb-1">
                            Review by {review.author}
                          </p>
                          <p className="text-sm italic">{review.text}</p>
                        </div>
                      ))
                    ) : (
                      <p>No reviews available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
