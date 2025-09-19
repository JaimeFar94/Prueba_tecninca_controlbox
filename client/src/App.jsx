import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navegation} from "./components/Navegation"
import { HomePage } from "./pages/HomePage";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Menu } from "./pages/Menu";
import { ProductCard } from "./pages/ProductCard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    
    <BrowserRouter>
      <div className="container mx-auto">
        <Toaster position="bottom-right" />
        <Navegation/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/productCard/:id" element={<ProductCard/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App