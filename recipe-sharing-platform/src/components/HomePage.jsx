import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipe data from data.json
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">{recipe.title}</h3>
          <p className="text-gray-600 text-base mb-4">{recipe.summary}</p>
          <Link
            to={`/recipe/${recipe.id}`} // Link to the RecipeDetail page
            className="text-blue-500 hover:text-blue-700"
          >
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
