import React from 'react'
import { originalRecipes } from '../RecipeHolder/RecipeHolder'

function removeList (id){
    alert(`Calling from RecipeHolder: card ${id} clicked`)
    const newRecipes = originalRecipes.filter((item)=>item.id !== id)
    return newRecipes
}

const RecipeCard = ({recipe}) => {
  return (
    <div style={{border:'2px solid black'}}>
        <h3>{recipe.name}</h3>
        <p>{recipe.ingredient}</p>
        <button onClick={()=> removeList(recipe.id)}>Not tonight</button>
    </div>
  )
}

export default RecipeCard