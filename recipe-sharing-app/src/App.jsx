import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Route to the main Recipe List */}
          <Route path="/" element={<RecipeList />} />
          {/* Route to add a new recipe */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          {/* Route to view details of a specific recipe */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
