import React from "react";
import "../styles/RecipeCard.css"; // Import the CSS file

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <img src={recipe.imgUrl} alt={recipe.name} className="recipe-image" />
    <h3 className="recipe-title">{recipe.name}</h3>
    <p className="recipe-chef">By {recipe.chef}</p>
    <p className="recipe-rating">⭐ {recipe.avgRating} ({recipe.totalRatings} Ratings)</p>
  </div>
);

export default RecipeCard;
