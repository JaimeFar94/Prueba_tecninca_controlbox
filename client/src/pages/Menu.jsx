import { BookCard } from "../components/BookCard";

export function Menu() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-white mb-4">
        Menu
      </h1>
        <p className="text-center text-gray-200 mb-6 italic">
        sea bienvenido aqui puedes realizar tus opiniones de los libros que tenemos dentro de nuestra base de datos y podras compartirlo para que las demás personas puedan verlas.
      </p>

        <div>
            <BookCard/>
        </div>
    </div>
  );
}
