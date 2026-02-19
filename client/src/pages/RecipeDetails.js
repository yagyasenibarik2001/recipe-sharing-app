// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function RecipeDetails() {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   const fetchRecipe = async () => {
//     const res = await axios.get(`http://localhost:5000/api/recipes/${id}`);
//     setRecipe(res.data);
//   };

//   useEffect(() => {
//     fetchRecipe();
//   }, [id]);

//   if (!recipe) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <div className="bg-white rounded-2xl shadow-md overflow-hidden">
//         <img
//           src={`http://localhost:5000/uploads/${recipe.image}`}
//           alt={recipe.name}
//           className="w-full h-80 object-cover"
//         />

//         <div className="p-6">
//           <h2 className="text-3xl font-bold mb-4">{recipe.name}</h2>
//           <p className="text-gray-700 leading-relaxed">
//             {recipe.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeDetails;

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    const res = await axios.get(`http://localhost:5000/api/recipes/${id}`);
    setRecipe(res.data);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (!recipe)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading recipe...
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={`http://localhost:5000/uploads/${recipe.image}`}
              alt={recipe.name}
              className="w-full h-96 object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* CONTENT */}
          <div className="p-8">

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {recipe.name}
            </h1>

            <div className="w-16 h-1 bg-green-600 rounded-full mb-6"></div>

            <p className="text-gray-600 leading-relaxed text-lg">
              {recipe.description}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;

