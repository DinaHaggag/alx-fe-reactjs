import create from 'zustand';

const useRecipeStore = create((set) => ({
  // Initial state
  recipes: [],
  searchTerm: '',

  // Function to set the search term
  setSearchTerm: (term) => set(() => ({ searchTerm: term })),

  // Function to get filtered recipes based on the search term
  filteredRecipes: () => set((state) => ({
    recipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  
  // Function to set the entire recipes array (e.g., loading from an API)
  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })),
  
  // Function to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
  
  // Function to update a recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  
  // Function to delete a recipe
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),
}));

export { useRecipeStore };
