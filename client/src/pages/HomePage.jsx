import { Social } from "../components/Social";

export function HomePage() {
  return (
    <div>
      <h2 className="font-bold text-2xl text-white">Sacale el jugo a la </h2>
      <h1 className="font-bold text-9xl text-white mb-2">LECTURA</h1>
      <div className="flex items-center justify-center h-screen ">
        <img
          src="https://www.semana.com/resizer/v2/ZXM4XQQNVZBDJFXTKL3XG4JRGU.jpg?auth=71748cbfd07336416ebe4403904c0dae3230ddeb0d1ab1432f2121ee99b939f6&smart=true&quality=75&width=1280&height=720"
          alt="libros"
          className="rounded shadow-lg w-full max-w-7xl"
        />
      </div>

        <p className="text-white font-style: italic ">
         Contamos con un
        catálogo en línea , donde encontrarás un
        repositorio con bases de datos y libros electrónicos hechos con
        softwares como Scielo, Redalyc, Doaj, Mendeley, Ebook Collection
        (Ebscohost), Digitalia, Amazon, Dialnet, Latindex, entre otros.Donde podras dar tu opinión y compartirlo con los demás usuarios.
      </p>

        <div>
            <Social/>
        </div>
    </div>
  );
}
