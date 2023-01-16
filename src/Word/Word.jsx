function Word(props) {
    return (
        <div className="grid justify-center align-center grow">
            <h1 className="font-sitelen text-[80vh] leading-none">{props.word}</h1>
        </div>
    )
}

export default Word