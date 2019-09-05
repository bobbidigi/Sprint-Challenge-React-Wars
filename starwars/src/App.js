import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import SWCard from './components/Card';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let people = "https://swapi.co/api/people/"
  const [data, setData] = useState([{}]); 
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(people)
    .then(function (response) {
      // handle success
      console.log(response.data.results);
      setData(response.data.results)
    })
  }, [people]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map(function(item, index){
       return <SWCard name={item.name} DOB={item.birth_year} gender={item.gender} key={index}/>
      })}
      
    </div>

  );
}

export default App;
