
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const { recommendations } = useRecipeStore();

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>We do not have any recommendations for you yet!</p>
      )}
    </div>
  );
};

export default RecommendationsList;