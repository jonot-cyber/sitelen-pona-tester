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

    return <button className="border-2 border-black grow m-2 flex p-2" onClick={() => props.answer(props.word)}>
        <span className="text-center text-4xl grow">{props.word}</span>
        <span className="text-sm hidden md:block">{props.number+1}</span>
    </button>;
}

export default WordButton;