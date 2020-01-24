import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  return (
    <div>
      <Counter />
      <FavoriteNumberList />
    </div>
  )
}

function Counter() {
  let dispatch = useDispatch()
  let count = useSelector(state => state.count)
  return (
    <div>
      <h1 onClick={() => dispatch({ type: 'INCREASE_COUNT' })}>
        {count}
      </h1>
    </div>
  );
}

function FavoriteNumberList() {
  let numbers = useSelector( state => state.favoriteNumbers )
  return (
    <div>
      <h3>Favorited Numbers:</h3>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  )
}



export default App;
