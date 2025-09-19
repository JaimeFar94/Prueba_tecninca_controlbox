import { useEffect, useState } from "react";
import { GetAllBooks } from "../api/info-list.api";
import { Books } from "../components/Books";

export function BookCard() {
  const [booklist, Setbook] = useState([]);

  useEffect(() => {
    async function LoadEvent() {
      const res = await GetAllBooks();
     Setbook(res);
    }
    LoadEvent();
  }, []);
  return (
    <div className="container">
      <h1 className="text-4xl font-extrabold text-center text-white mb-4">
        {" "}
        Listado de Libros{" "}
      </h1>
      <div className="grid grid-cols-3 gap-3 ">
        {booklist.map((book) => (
          <Books key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
