import { useRecipeStore } from './recipeStore';
// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // إعادة التوجيه إلى الصفحة الرئيسية بعد الحذف
  };

  return (
    <button onClick={handleDelete}>
      حذف الوصفة
    </button>
  );
};




export default DeleteRecipeButton;
