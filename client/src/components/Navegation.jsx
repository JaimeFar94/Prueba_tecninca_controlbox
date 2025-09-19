import { Link, useNavigate } from "react-router-dom";

export function Navegation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem("token");


    navigate("/");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="mx-auto w-full px-4 py-4 bg-white shadow-md rounded-md mb-6 flex flex-wrap justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-extrabold text-red-700 hover:text-red-900 transition"
      >
        Book Review
      </Link>

      <div className="flex space-x-6 text-base font-semibold text-red-700">
        {!isLoggedIn ? (
          <>
            <Link
              to="/register"
              className="hover:text-red-900 hover:underline transition"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="hover:text-red-900 hover:underline transition"
            >
              Login
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:text-red-900 hover:underline transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
