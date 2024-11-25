import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // Initial state
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set the search term and update filtered recipes
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  // Action to set initial recipes
  setRecipes: (newRecipes) =>
    set(() => ({
      recipes: newRecipes,
      filteredRecipes: newRecipes, // Initialize filteredRecipes with all recipes
    })),
}));
