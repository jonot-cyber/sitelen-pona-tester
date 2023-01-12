import WordButton from "../WordButton/WordButton";
import wordlist from "../wordlist";
import styles from "./WordButtonList.module.css"

function generateButtons(correctWord) {
    const possibleIncorrectWords = wordlist.filter(
        (word) => word !== correctWord
    );
    let buttonWords = [];
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

function WordButtonList(props) {
    function answer(anAnswer) {
        if (anAnswer === props.word) {
            alert("Correct!")
        } else {
            alert(`Incorrect! The correct answer was ${props.word}.`)
        }
        props.answer()
    }
    
    return (
        <div className={styles.container}>
            {generateButtons(props.word).map((word, i) => (
                <WordButton number={i} word={word} answer={(a) => {answer(a)}} />
            ))}
        </div>
    );
}

export default WordButtonList;