import React from "react"

function Word(props: {word: string}) {
    return (
        <div className="grid justify-center content-center grow select-none">
            <h1 className="font-sitelen text-[48vh] leading-none md:text-[80vh] text-black dark:text-white">{props.word}</h1>
        </div>
    )
}

export default Word