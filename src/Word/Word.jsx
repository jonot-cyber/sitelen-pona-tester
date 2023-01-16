function Word(props) {
    return (
        <div className="grid justify-center content-center grow">
            <h1 className="font-sitelen text-[48vh] leading-none md:text-[80vh] text-black dark:text-white">{props.word}</h1>
        </div>
    )
}

export default Word