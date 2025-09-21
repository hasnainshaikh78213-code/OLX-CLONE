import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Top Navbar */}
        <Navbar />

        {/* Center content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlisting/:category" element={<ProductListing />} />
            <Route path="/Product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        {/* Bottom Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
