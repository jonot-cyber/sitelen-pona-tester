import "./Word.css"

function Word(props) {
    return (
        <div class="word-center"><h1 className="word">{props.word}</h1></div>
    )
}

export default Word