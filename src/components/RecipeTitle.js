import React from 'react'
import './RecipeTitle.css'
const RecipeTitle = ({recipe}) => {
  return (
    //   recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)$/)
    //   != null && (
    <div className="recipe-title" >
        <img className="recipe__img" src={recipe['recipe']['image']} alt=''/>
        <p className="recipe__name">{recipe["recipe"]["label"]}</p>
    </div>
      
  )
}

export default RecipeTitle