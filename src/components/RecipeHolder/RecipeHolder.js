import React from 'react'
import { useState }from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

const originalRecipes = [
    { id: 1, name: 'Chicken Curry', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { id: 2, name: 'Spicy Salmon', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { id: 3, name: 'Meatloaf', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { id: 4, name: 'Pinapple Fried Rice', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    { id: 5, name: 'Tuna Salad', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
]

const containerStyles = {
    padding: '1rem',
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
}

const RecipeHolder = () => {
  const [recipes, setRecipes] = useState(originalRecipes)  
  const recipeList = recipes.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ))  
  return (
    <div style={containerStyles}>
        {recipeList}
    </div>
  )
}

export default RecipeHolder