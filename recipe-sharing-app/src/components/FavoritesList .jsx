
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore();

  const favoriteRecipes = favorites.map((recipeId) =>
    recipes.find((recipe) => recipe.id === recipeId)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;