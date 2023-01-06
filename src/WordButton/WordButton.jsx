import { useEffect } from "react";

function WordButton(props) {
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === props.number.toString()) {
                props.answer(props.word);
            }
        })
    })

    return <button onClick={() => props.answer(props.word)}>{props.word}</button>;
}

export default WordButton;