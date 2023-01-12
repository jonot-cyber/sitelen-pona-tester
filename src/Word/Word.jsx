import styles from "./Word.module.css"

function Word(props) {
    return (
        <div className={styles.center}><h1 className={styles.word}>{props.word}</h1></div>
    )
}

export default Word