import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import UploadRecipe from "./pages/UploadRecipe";
import ViewRecipes from "./pages/ViewRecipes";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<ViewRecipes />} />
        <Route path="/upload" element={<UploadRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;