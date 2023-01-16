import React from "react";
import { useEffect } from "react";

function WordButton(props: { number: number; answer: (word: string) => void; word: string; }) {
    function keyPressListener(e: KeyboardEvent) {
        let keyNumber: number = parseInt(e.key);

        // return if key wasn't 1-4
        if (keyNumber < 1 || keyNumber > 4) {
            return;
        }
        if (keyNumber === (props.number + 1)) {
            props.answer(props.word);
        }
    }
    useEffect(() => {
        window.addEventListener("keypress", keyPressListener)

        return () => window.removeEventListener("keypress", keyPressListener)
    })

    return <button className="border-4 border-black dark:border-white grow m-2 flex p-2" onClick={() => props.answer(props.word)}>
        <span className="text-center text-4xl grow dark:text-white">{props.word}</span>
        <span className="hidden md:block dark:text-white">{props.number+1}</span>
    </button>;
}

export default WordButton;