import "./Word.css";

function Word(props) {
    return (
        <div>
            <h1 className="bigword">{props.word}</h1>
        </div>
    );
}

export default Word;