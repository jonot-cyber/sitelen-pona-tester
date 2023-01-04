import './App.css';
import Word from './Word';
import { useState } from 'react';
import wordlist from './wordlist';

function generateWord(exclude = "") {
  // get random item from wordlist
  let word = wordlist.filter(w => w != exclude)[Math.floor(Math.random() * wordlist.length)];
  return word;
}

function showCorrect(guess, correctWord) {
  if (guess == correctWord) {
    alert("Correct!");
  } else {
    alert(`Incorrect. The correct word was "${correctWord}"`);
  }
}

function generateButtons(correctWord) {
  let buttons = [];
  buttons.push(correctWord);
  for (let i = 0; i < 3; i++) {
    buttons.push(generateWord(correctWord));
  }
  // shuffle array
  for (let i = buttons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
  }
  return buttons;
}

function App() {
  const [word, setWord] = useState(generateWord())

  return (
    <div id="app">
      <Word word={word} />
      <div id="buttons">
        {generateButtons(word).map((w, i) => <button key={i} onClick={() => {showCorrect(w, word); setWord(generateWord())}}>{w}</button>)}
      </div>
    </div>
  );
}

export default App;
