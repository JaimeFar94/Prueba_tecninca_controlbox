import axios from "axios";

const BookApi = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
});

BookApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Registrar un usuario

export const register = async (userData) => {
  try {
    const response = await BookApi.post("/register/", userData);
    return response.data;
  } catch (error) {
    console.error("Error en registro:", error.response?.data || error.message);
  }
};

// Procedimiento para login

export const login = async ({ username, password }) => {
  const response = await BookApi.post("/login/", { username, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

// Consultar todos los libros
export const GetAllBooks = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No hay token de autenticación");
    }

    const response = await BookApi.get("/book_api/api/v1/book/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error obteniendo libros:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Consultar un libro

export const GetBook = async (id) => {
  try {
    const token = localStorage.getItem("token"); 
    if (!token) {
      throw new Error("No hay token de autenticación");
    }

    const response = await BookApi.get(`/book_api/api/v1/book/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,  
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error obteniendo libro:",
      error.response?.data || error.message
    );
    throw error;
  }
};


//Realizar una reseña

export const CreateReview = async (review) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No hay token de autenticación");
    }

    const response = await BookApi.post("/book_api/api/v1/review/", review, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error creando una Review:",
      error.response?.data || error.message
    );
    throw error;
  }
};


// Ver Reseña
export const GetBookReviews = async (bookid) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No hay token de autenticación");
    }

    const response = await BookApi.get(`/book_api/api/v1/review/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        ordering: "-created_at", 
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error obteniendo reseñas:",
      error.response?.data || error.message
    );
    throw error;
  }
};
