import { useState } from "react";
import axios from "axios";

function UploadRecipe() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !image) {
      alert("All fields are mandatory!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    await axios.post("http://localhost:5000/api/recipes", formData);

    alert("Recipe Uploaded Successfully!");
    setName("");
    setDescription("");
    setImage(null);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* FORM SECTION */}
        <div className="flex items-center justify-center px-4 py-12">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl border border-gray-200">

            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Upload Recipe
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Recipe Name
                </label>
                <input
                  type="text"
                  placeholder="Enter recipe name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Write recipe description..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Recipe Image
                </label>
                <input
                  type="file"
                  className="w-full text-sm text-gray-600 
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-lg file:border-0
                           file:text-sm file:font-medium
                           file:bg-green-50 file:text-green-600
                           hover:file:bg-green-100"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <button
                className="w-full bg-green-600 hover:bg-green-700 
                         text-white font-medium py-3 rounded-lg
                         transition-all duration-300 shadow-md"
              >
                Upload Recipe
              </button>

            </form>
          </div>
        </div>



      </div>
      <div className="mt-20">
        

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "insta1.jpg",
            "insta2.jpg",
            "insta3.jpg",
            "insta4.jpg",
            "insta5.jpg",
            "insta6.jpg",
            "insta7.jpg",
          ].map((img, index) => (

            <div
              key={index}
              className="w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={`/img/bg-img/${img}`}
                alt="Instagram Feed"
                className="w-full h-full object-cover 
                     hover:scale-110 
                     transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}

        </div>
      </div>

    </>
  );
}

export default UploadRecipe;
