import {useState} from 'react';

const hunkBee = {
  a: 3,
  b: 8,
  c: 9
};

const rigsBee = {
  ... hunkBee,
  c: 45,
  d: "riggsBeetkle"
}
//const isBabel = !(class {}.toString().indexOf(rigsBee) === 0);
//console.log('isBabel =', isBabel);
console.log(rigsBee);
console.log(hunkBee);

const Recipes = () => {
  const [recipe, setRecipe] = useState({})
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(hunkBee)}>
        hunkBee Recipe
      </button>
      <button onClick={() => setRecipe(rigsBee)}>rigsBee Recipe</button>

      <ul>
        {Object.keys(recipe).map(material => (
          <li key={material}>
             {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes;
