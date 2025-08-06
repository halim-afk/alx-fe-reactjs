// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onCancel }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({
      ...recipe,
      title,
      description,
    });
    onCancel(); // إغلاق النموذج بعد التحديث
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>تعديل الوصفة</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="العنوان"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="الوصف"
      />
      <button type="submit">حفظ التعديلات</button>
      <button type="button" onClick={onCancel}>إلغاء</button>
    </form>
  );
};

export default EditRecipeForm;
