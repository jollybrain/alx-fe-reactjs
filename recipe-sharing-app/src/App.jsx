import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Simulate fetching recipes from an API
    const fetchedRecipes = [
      { id: 1, title: 'Spaghetti Bolognese', description: 'A classic Italian dish.' },
      { id: 2, title: 'Chicken Curry', description: 'Spicy and delicious.' },
      { id: 3, title: 'Vegan Salad', description: 'Healthy and fresh.' },
    ];
    setRecipes(fetchedRecipes);
  }, [setRecipes]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
