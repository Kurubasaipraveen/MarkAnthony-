import React, { useState } from "react";
import recipesData from "./components/recipesData";
import RecipeCard from "./components/RecipeCard";
import FilterSidebar from "./components/FilterSidebar";
import SearchBar from "./components/SearchBar";
import "./App.css"; // Import CSS

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Manage search term state
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("newest");

  // ✅ Filtering Logic
  const filteredRecipes = recipesData.filter((recipe) => {
    // ✅ Search filter
    if (searchTerm && !recipe.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // ✅ Meal Type Filter
    if (filters.mealType && filters.mealType.length > 0) {
      if (!filters.mealType.includes(recipe.mealType)) return false;
    }

    // ✅ Dish Type Filter
    if (filters.dishType && filters.dishType.length > 0) {
      if (!filters.dishType.includes(recipe.dishType)) return false;
    }

    // ✅ Boolean Filters (Featured, Contest Winner, etc.)
    for (const key of ["contestWinner", "featured", "testKitchenApproved"]) {
      if (filters[key] && filters[key].length > 0 && !recipe[key]) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <FilterSidebar filters={filters} setFilters={setFilters} setSortBy={setSortBy} />
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="search-container">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Recipe Grid */}
        <div className="recipe-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => <RecipeCard key={recipe.name} recipe={recipe} />)
          ) : (
            <p>No recipes found!</p> // ✅ Show message when no recipes match filters
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
