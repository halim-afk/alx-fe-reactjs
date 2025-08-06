import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
    </Router>
    
  );
}





export default App;
