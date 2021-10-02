import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({recipes}) {
    const {handleRecipeAdd} = useContext(RecipeContext)

    return (
        <div className="recipeList">
        <div>
            {recipes.map(recipe => {
           return (
            <Recipe 
            key={recipe.id} 
            {...recipe} 
            />
           )  
        })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd} >Add Recipe</button>
        </div>
        </div>
    )
}












//notes
////{...recipe} spreads all the recipe info onto the Recipe Component
//components need unique keys to know what components to rerender 
///multiple elements must be returned in a empty fragment <> </>
