// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
target.value

function AddRecipeForm() {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        steps: '', // Updated from 'instructions' to 'steps'
        image: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.title) newErrors.title = "Recipe title is required.";
        if (!formData.ingredients) newErrors.ingredients = "Ingredients are required.";
        if (!formData.steps) newErrors.steps = "Steps are required."; // Updated for 'steps'
        if (!formData.image) newErrors.image = "Image URL is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted successfully:', formData);
            setSubmitted(true);
            setFormData({
                title: '',
                ingredients: '',
                steps: '',
                image: ''
            });
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add a New Recipe</h1>
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 max-w-2xl mx-auto">
                {submitted && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        Recipe submitted successfully!
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`} />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients (comma-separated)</label>
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            rows="4"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
                        ></textarea>
                        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
                        <textarea
                            id="steps" // Updated from 'instructions' to 'steps'
                            name="steps"
                            value={formData.steps}
                            onChange={handleChange}
                            rows="6"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
                        ></textarea>
                        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image URL</label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.image ? 'border-red-500' : 'border-gray-300'}`} />
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                    >
                        Add Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddRecipeForm;