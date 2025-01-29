import { NextApiRequest, NextApiResponse } from "next";
import { generateBooks } from "@/utils/generateBooks";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { seed, region, likes, reviews, page } = req.query;

  if (!region || !seed || !likes || !reviews || !page) {
    return res.status(400).json({ error: "Faltan parámetros requeridos" });
  }

  const books = generateBooks({
    seed: parseInt(seed as string),
    region: region as string,
    likes: parseFloat(likes as string),
    reviews: parseFloat(reviews as string),
    page: parseInt(page as string),
  });

  res.status(200).json(books);
}
