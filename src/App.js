import Word from "./Word.tsx";
import WordButtonList from "./WordButtonList.tsx";
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
      <div className="flex flex-col h-screen dark:bg-black">
        <Word word={word}/>
        <WordButtonList word={word} answer={() => setWord(getWord())}/>
      </div>
    </div>
  )
}

export default App;