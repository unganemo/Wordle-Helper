import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const [alph, setAlph] = useState(alphabet.split(''))
  const [word, setWord] = useState([])
  const [yellow, setYellow] = useState([])
  const [grey, setGrey] = useState([])
  const length = 5

  const setInitWord = () => {
    for(let i = 0; i < length; i++) {
      word.push({
        letter: alph[Math.floor(Math.random() * alph.length)],
        green: false,
        position: i
      }) 
      console.log("hej " + word[i].letter + word[i].green)
    }
  }

  const updateWord = (index, letter) => {

  }

  useEffect(() => {
    setInitWord()
  }, [])

  return (
    <div className="App">
      <input placeholder='Yellow letters' onChange={(event) => setYellow(event.target.value)}></input>
      <input placeholder='Grey letters' onChange={(event) => setGrey(event.target.value)}></input>
      <p>{alph}</p>
      <p>{grey}</p>
      <div>
        {word.map(obj => {
          return(
            <div>
              <p>Position {obj.position}</p>
              <input value={obj.letter} onChange={(event) => updateWord(obj.position, event.target.value)}></input>
            </div>
          )
          
        })}
      </div>
    </div>
  );
}

export default App;
