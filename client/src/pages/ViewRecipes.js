import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiEye, FiTrash2 } from "react-icons/fi";

function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const res = await axios.get("http://localhost:5000/api/recipes");
    setRecipes(res.data);
  };

  const deleteRecipe = async (id) => {
    await axios.delete(`http://localhost:5000/api/recipes/${id}`);
    fetchRecipes();
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-10 text-center">

        <h2 className="text-4xl font-bold text-green-700">
          All Recipes
        </h2>

        <div className="w-24 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-500 mt-3">
          Discover delicious creations shared by our community ✨
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-green-50 rounded-2xl shadow-md overflow-hidden 
                     hover:shadow-xl transition-all duration-300"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <div className="overflow-hidden">
                <img
                  src={`http://localhost:5000/uploads/${recipe.image}`}
                  alt={recipe.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Link>

            <div className="flex items-center justify-between px-4 py-3">

              <h3 className="text-lg font-semibold">
                {recipe.name}
              </h3>

              <div className="flex gap-2">

                <Link
                  to={`/recipe/${recipe.id}`}
                  className="w-9 h-9 flex items-center justify-center
                       bg-green-50 rounded-lg shadow-sm
                       hover:bg-green-600 hover:text-white
                       transition"
                >
                  <FiEye size={18} />
                </Link>

                <button
                  onClick={() => deleteRecipe(recipe.id)}
                  className="w-9 h-9 flex items-center justify-center
                       bg-green-50 rounded-lg shadow-sm
                       hover:bg-red-500 hover:text-white
                       transition"
                >
                  <FiTrash2 size={18} />
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewRecipes;
