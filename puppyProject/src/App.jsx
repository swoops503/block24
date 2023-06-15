import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList)
 console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p key={puppy.id}>{puppy.name}</p>;
           })
       }
    </div>
  );
}

export default App
