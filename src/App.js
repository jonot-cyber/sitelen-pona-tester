import "./App.css"
import Word from "./Word/Word";
import WordButtonList from "./WordButtonList/WordButtonList";
import wordlist from "./wordlist";
import { useState } from "react";

function getWord() {
  // get random word from the word list
  return wordlist[Math.floor(Math.random() * wordlist.length)];
}

function App() {
  const [word, setWord] = useState(getWord());

  return (
    <div>
      <Word word={word}/>
      <WordButtonList word={word}/>
    </div>
  )
}

export default App;