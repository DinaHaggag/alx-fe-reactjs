import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');  // Rename instructions to steps
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {  // Check for the steps field
      setError('Please fill out all fields.');
      return;
    }

    // Handle the form submission logic
    setError('');
    console.log('Recipe submitted:', { title, ingredients, steps });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter recipe title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="List the ingredients"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Steps</label>  {/* Rename label */}
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}  // Update to setSteps
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter the cooking steps"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
