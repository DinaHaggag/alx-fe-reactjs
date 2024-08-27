import create from 'zustand';

const useRecipeStore = create((set) => ({
  // Initial state
  recipes: [],

  // Function to set the entire recipes array (e.g., loading from an API)
  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })),

  // Function to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // Other functions (e.g., updateRecipe, deleteRecipe) would go here
}));

export { useRecipeStore };
