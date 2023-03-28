import logo from './logo.svg';
import './App.css';
import Joke from "./Joke";

function App() {
  let jokes = [
    {
      id:1,
      joke:"this is a joke 1",
      rating:4,
    },
    {
      id:2,
      joke:"this is a joke 2",
      rating:1,
    },
    {
      id:3,
      joke:"this is a joke 3",
      rating:2,
    },
    {
      id:4,
      joke:"this is a joke 4",
      rating:3,
    },
  ]

  let jokeArray =[];

  for(let joke of jokes){
    if(joke.rating>2){
      jokeArray.push( <Joke key={joke.id} joke={joke.joke} rating={joke.rating}/>)
    }
  }

  return (
    <div className="App">
      {
          jokes.filter(({rating})=>{
            return rating>2;
          }).map(({id,joke,rating})=>{
            return(
              <Joke key={id} joke={joke} rating={rating}/>
            )
          })
      }

      {jokeArray}
        
    </div>
  );
}

export default App;
