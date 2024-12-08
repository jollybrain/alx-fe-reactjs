import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe details from data.json
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          navigate('/'); // Redirect to Home if recipe not found
        }
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id, navigate]);

  if (!recipe) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5 space-y-1">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
        <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
