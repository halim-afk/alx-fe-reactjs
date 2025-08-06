import { useRecipeStore } from '../store/recipeStore';


import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) return <p>لم يتم العثور على الوصفة.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* هنا يمكنك إضافة نموذج التعديل وزر الحذف */}
    </div>
  );
};



function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}


export default RecipeList;
