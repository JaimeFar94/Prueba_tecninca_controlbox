import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export function Social() {
  return (
     <div className="text-center mt-8">
        <h1 className="text-white text-4xl font-sans font-bold mb-6">
          REDES SOCIALES
        </h1>
        <div className="flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </div>
  )
}

 