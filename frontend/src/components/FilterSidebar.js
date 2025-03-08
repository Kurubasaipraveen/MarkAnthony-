import React from "react";
import "../styles/FilterSidebar.css";

const FilterSidebar = ({ filters = {}, setFilters, setSortBy }) => {
  // Handle filter checkbox selection
  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev?.[category]?.includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...(prev[category] || []), value],
    }));
  };

  // Handle boolean filters (true/false toggles)
  const handleBooleanFilterChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev?.[category] ? [] : [true], // Toggle true/false
    }));
  };

  return (
    <div className="filter-sidebar">
      <h2 className="filter-title">Filters</h2>

      {/* Clear Filters Button */}
      <button className="clear-filters" onClick={() => setFilters({})}>
        Clear Filters
      </button>

      {/* Sorting Options */}
      <div className="filter-section">
        <h3 className="filter-heading">Sort By</h3>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="newest">Upload Date: Newest</option>
          <option value="oldest">Upload Date: Oldest</option>
          <option value="highest">Average Rating: Highest</option>
          <option value="lowest">Average Rating: Lowest</option>
        </select>
      </div>

      {/* Boolean Filters */}
      <div className="filter-section">
        <h3 className="filter-heading">Attributes</h3>
        {["contestWinner", "featured", "testKitchenApproved"].map((attribute) => (
          <label key={attribute} className="filter-label">
            <input
              type="checkbox"
              checked={filters?.[attribute]?.length > 0}
              onChange={() => handleBooleanFilterChange(attribute)}
              className="filter-checkbox"
            />
            {attribute.replace(/([A-Z])/g, " $1")}
          </label>
        ))}
      </div>

      {/* Meal Type Filters */}
      <div className="filter-section">
        <h3 className="filter-heading">Meal Type</h3>
        {["Dinner", "Lunch", "Dessert", "Breakfast"].map((mealType) => (
          <label key={mealType} className="filter-label">
            <input
              type="checkbox"
              checked={filters?.mealType?.includes(mealType) || false}
              onChange={() => handleFilterChange("mealType", mealType)}
              className="filter-checkbox"
            />
            {mealType}
          </label>
        ))}
      </div>

      {/* Dish Type Filters */}
      <div className="filter-section">
        <h3 className="filter-heading">Dish Type</h3>
        {["Curry", "Pizza", "Seafood", "Soup", "Mexican", "Smoothie"].map((dishType) => (
          <label key={dishType} className="filter-label">
            <input
              type="checkbox"
              checked={filters?.dishType?.includes(dishType) || false}
              onChange={() => handleFilterChange("dishType", dishType)}
              className="filter-checkbox"
            />
            {dishType}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
