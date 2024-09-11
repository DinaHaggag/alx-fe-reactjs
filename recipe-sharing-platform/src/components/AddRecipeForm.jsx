import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});  // Initialize errors state

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = 'Recipe title is required';
    }
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    }
    if (!steps) {
      newErrors.steps = 'Steps are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);  // Set errors if validation fails
      return;
    }

    // If no validation errors, handle form submission
    setErrors({});
    console.log('Recipe submitted:', { title, ingredients, steps });

    // Reset form after successful submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Display validation errors */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>} {/* Show title error */}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="List the ingredients"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>} {/* Show ingredients error */}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter the cooking steps"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>} {/* Show steps error */}
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
