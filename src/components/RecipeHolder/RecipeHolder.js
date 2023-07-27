import React, { useState } from 'react'

const containerStyles = {
    padding: '1rem',
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
}
  
const RecipeHolder = () => {
    const [recipes, setRecipes] = useState([
        { id: 1, name: 'Chicken Curry', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 2, name: 'Spicy Salmon', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 3, name: 'Meatloaf', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 4, name: 'Pinapple Fried Rice', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { id: 5, name: 'Tuna Salad', ingredient: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    ])  

    const removeItemFromList = (id) => {
        // alert(`Calling from RecipeHolder: card ${id} clicked`)
        const newRecipes = recipes.filter((item)=>item.id !== id)
        setRecipes(newRecipes)
    }

    const recipeList = recipes.map((recipe)=>(
        <div style={{border:'2px solid black'}}>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredient}</p>
            <button onClick={()=> removeItemFromList(recipe.id)}>Not tonight</button>
        </div>
    )) 

    return (
        <div style={containerStyles}>
            {recipeList.length>0? recipeList : 'Lets Order food!!!'}
        </div>
    )
}

export default RecipeHolder