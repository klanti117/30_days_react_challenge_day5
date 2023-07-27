import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <div style={{border:'2px solid black'}}>
        <h3>{recipe.name}</h3>
        <p>{recipe.ingredient}</p>
        <button>Not tonight</button>
    </div>
  )
}

export default RecipeCard