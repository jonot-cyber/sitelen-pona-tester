import WordButton from "../WordButton/WordButton";
import wordlist from "../wordlist";

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
    return (
        <div>
            {generateButtons(props.word).map((word) => (
                <WordButton word={word} />
            ))}
        </div>
    );
}

export default WordButtonList;