import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
const recipes = [
    { name: 'Chicken Curry', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { name: 'Spicy Salmon', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { name: 'Meatloaf', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { name: 'Pinapple Fried Rice', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { name: 'Tuna Salad', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
]

const containerStyles = {
    padding: '1rem',
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
}

const RecipeHolder = () => {
  const recipeList = recipes.map((recipe)=>(
    <RecipeCard key={recipe.name} recipe={recipe}/>
  ))  
  return (
    <div style={containerStyles}>
        {recipeList}
    </div>
  )
}

export default RecipeHolder