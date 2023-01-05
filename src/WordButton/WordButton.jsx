function WordButton(props) {
    return <button onClick={() => props.answer(props.word)}>{props.word}</button>;
}

export default WordButton;