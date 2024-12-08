import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset success and error messages
    setError('');
    setSuccess('');

    // Basic validation
    if (!title || !ingredients || !instructions || !image) {
      setError('All fields are required');
      return;
    }

    const ingredientsList = ingredients.split('\n').map((ingredient) => ingredient.trim()).filter(Boolean);
    if (ingredientsList.length < 2) {
      setError('Please provide at least two ingredients');
      return;
    }

    // Mock submission (you can replace this with actual form submission logic)
    setSuccess('Recipe added successfully!');
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImage('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {success && <div className="text-green-500 text-center mb-4">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter ingredients, each on a new line"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instructions" className="block text-sm font-semibold text-gray-700">Preparation Instructions</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter preparation steps"
            rows="6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-700">Recipe Image URL</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter image URL"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
