import React from "react";
import WordButton from "./WordButton";
import wordlist from "./wordlist";

function generateButtons(correctWord: string) {
    const possibleIncorrectWords = wordlist.filter(
        (word) => word !== correctWord
    );
    let buttonWords: string[] = [];
    buttonWords.push(correctWord);
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(
            Math.random() * possibleIncorrectWords.length
        );
        buttonWords.push(possibleIncorrectWords[randomIndex]);
    }

    // shuffle the list so the order is random
    for (let i = buttonWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttonWords[i], buttonWords[j]] = [buttonWords[j], buttonWords[i]];
    }

    return buttonWords;
}

function WordButtonList(props: { word: string; answer: () => void; }) {
    function answer(anAnswer: string) {
        if (anAnswer === props.word) {
            alert("Correct!")
        } else {
            alert(`Incorrect! The correct answer was ${props.word}.`)
        }
        props.answer()
    }
    
    return (
        <div className="flex w-screen flex-col md:flex-row">
            {generateButtons(props.word).map((word, i) => (
                <WordButton number={i} word={word} answer={(a: string) => {answer(a)}} />
            ))}
        </div>
    );
}

export default WordButtonList;