import "./App.css";
import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import { Routes, Route} from "react-router-dom";
import Cart from "./page/Cart/Cart";
import Contact from "./page/Contact/Contact"
import About from "./page/About/About"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
