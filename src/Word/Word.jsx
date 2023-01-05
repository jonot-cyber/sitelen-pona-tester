import "./Word.css"

function Word(props) {
    return (
        <h1 className="word">{props.word}</h1>
    )
}

export default Word