
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore();

  const favoriteRecipes = favorites.map((recipeId) =>
    recipes.find((recipe) => recipe.id === recipeId)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>You have not favorited any recipes yet!</p>
      )}
    </div>
  );
};

export default FavoritesList;