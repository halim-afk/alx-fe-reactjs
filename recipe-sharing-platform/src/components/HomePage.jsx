// src/components/HomePage.jsx
import { useState, useEffect } from 'react';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the recipe data from the imported JSON file
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 my-8">Recipe Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{recipe.title}</h2>
              <p className="mt-2 text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;