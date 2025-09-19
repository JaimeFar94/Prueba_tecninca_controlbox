import { useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

export function Books({book}) {
    const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:scale-110 transition-transform">

              <img
        src={book.cover_image}
        className="mx-auto my-4 rounded-lg w-full max-w-md object-cover"
      />
      <p className="text-gray-600">{book.title}</p>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-gray-600">{book.published_date}</p>
            <button
        className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
        onClick={() => {
          navigate(`/productCard/${book.id}/`);
        }}
      >
        <FaPencilAlt />
        Reseña
      </button>
    </div>
  )
}

 