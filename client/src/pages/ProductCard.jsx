import { useParams, useNavigate } from "react-router-dom";
import { GetBook, CreateReview, GetBookReviews } from "../api/info-list.api";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { toast } from "react-hot-toast";

export function ProductCard() {
  const params = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [reviews, setReviews] = useState([]); // 👈 reseñas del libro
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");

  // Cargar datos del libro
  useEffect(() => {
    async function LoadProduct() {
      if (params.id) {
        const res = await GetBook(params.id);
        setProducto(res);
      }
    }
    LoadProduct();
  }, [params.id]);

  // Cargar reseñas del libro
  useEffect(() => {
    async function LoadReviews() {
      if (params.id) {
        try {
          const res = await GetBookReviews(params.id);
          setReviews(res);
        } catch (err) {
          console.error("Error cargando reseñas:", err);
        }
      }
    }
    LoadReviews();
  }, [params.id]);

  // Guardar nueva reseña
  const onSubmit = handleSubmit(async (data) => {
    setError("");
    try {
      await toast.promise(
        CreateReview({
          book: params.id,
          rating: data.rating,
          comment: data.comment,
        }),
        {
          loading: "Registrando reseña...",
          success: "Reseña registrada correctamente",
          error: "Error al registrar reseña",
        },
        {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#14d5be",
          },
        }
      );
      reset(); // limpia el formulario
      // recargar reseñas al enviar
      const res = await GetBookReviews(params.id);
      setReviews(res);
    } catch (error) {
      setError(error.message || "Error al guardar reseña");
    }
  });

  if (!producto) {
    return (
      <div className="text-center text-white mt-8">Cargando producto...</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {producto.title}
      </h1>
      {producto.cover_image && (
        <img
          src={producto.cover_image}
          alt={producto.title}
          className="mx-auto my-4 rounded-lg w-full max-w-md object-cover"
        />
      )}
      <p className="text-gray-600 font-semibold text-center">
        {producto.author}
      </p>
      <p className="text-gray-600 mt-2">{producto.description}</p>

      {/* Formulario para nueva reseña */}
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <h3 className="text-2xl font-bold text-center">Escribe tu reseña</h3>

        <label className="font-bold">Puntuación</label>
        <select
          {...register("rating")}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecciona una puntuación</option>
          <option value="1">1 ⭐</option>
          <option value="2">2 ⭐</option>
          <option value="3">3 ⭐</option>
          <option value="4">4 ⭐</option>
          <option value="5">5 ⭐</option>
        </select>

        <label className="font-bold">Comentario</label>
        <textarea
          {...register("comment")}
          placeholder="Escribe tu comentario"
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer mt-4"
        >
          Guardar
          <FaSave />
        </button>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}

      {/* Listado de reseñas */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Reseñas recientes</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-600">Aún no hay reseñas.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-100 rounded-lg p-4 mb-3 shadow"
            >
              <p className="text-sm text-gray-500">
                {new Date(review.created_at).toLocaleString()}
              </p>
              <p className="font-semibold">⭐ {review.rating}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
