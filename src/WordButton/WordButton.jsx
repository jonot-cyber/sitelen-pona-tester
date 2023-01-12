import { useEffect } from "react";

function WordButton(props) {
    function keyPressListener(e) {
        // return if key wasn't 1-4
        if (e.key < 1 || e.key > 4) {
            return;
        }
        if (e.key === (props.number + 1).toString()) {
            props.answer(props.word);
        }
    }
    useEffect(() => {
        window.addEventListener("keypress", keyPressListener)

        return () => window.removeEventListener("keypress", keyPressListener)
    })

    return <button onClick={() => props.answer(props.word)}>{props.word}</button>;
}

export default WordButton;