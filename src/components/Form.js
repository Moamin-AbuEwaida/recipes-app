import React,{useState} from 'react'
import Axios from 'axios';
import RecipeTitle from './RecipeTitle';

const Form = () => {
    const [query, setQuery]= useState('');
    const [recipes, setRecipes] = useState([]);
    const [healthLabels, setHealthLabels] = useState('vegan');

    const app_id= '3f349090';
    const app_key= 'db731fc2a28e36fe075e2964f9ede943';
    const url =`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&health=${healthLabels}`;
  
    const getRecipes= async () =>{
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    // console.log(result.data.hits);
    }

    const submit = (e)=>{
        e.preventDefault();
        getRecipes();
    };
    return (
        <>
            <form className="add__searchFrom" onSubmit={submit}>
                <input
                className="app__input"
                type="text" 
                placeholder="Enter ingridient"
                value={query}onChange={(e)=>{ setQuery(e.target.value)}} 
                />
                <input className='app__submit' type="submit" value="Search"/> 
                <select className='app__healthLabels'>
                    <option onClick={()=> setHealthLabels('vegan')}>vegan</option>
                    <option onClick={()=> setHealthLabels('vegetarian')}>vegetarian</option>
                    <option onClick={()=> setHealthLabels('paleo')}>paleo</option>
                    <option onClick={()=> setHealthLabels('gluten-free')}>gluten-free</option>
                    <option onClick={()=> setHealthLabels('fish-free')}>fish-free</option>
                    <option onClick={()=> setHealthLabels('egg-free')}>egg-free</option>
                    <option onClick={()=> setHealthLabels('wheat-free')}>wheat-free</option>
                    <option onClick={()=> setHealthLabels('low-sugar')}>low-sugar</option>
                    <option onClick={()=> setHealthLabels('dairy-free')}>dairy-free</option>
                    <option onClick={()=> setHealthLabels('soy-free')}>soy-free</option>
                    <option onClick={()=> setHealthLabels('peanut-free')}>peanut-free</option>
                </select>
            </form>
            <div className="app__recipes">
                {recipes.map(recipe => {
                   return <RecipeTitle recipe={recipe} key= {recipe['recipe']['totalWeight']}/>
                })}
            </div>
        </>
    )
}

export default Form