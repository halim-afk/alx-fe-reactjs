// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>تطبيق مشاركة الوصفات</h1>

        {/* شريط البحث */}
        <SearchBar />

        {/* المفضلة والتوصيات */}
        <FavoritesList />
        <RecommendationsList />

        {/* التنقل بين الصفحات */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
