import styles from './unitInput.module.scss'

const UnitInput = ({ unitText, handleInput, value }) => {
    return (
        <div className={styles["unit-input"]}>
            <input name={unitText} type="number" onInput={handleInput} value={value} />
            <span>{unitText}</span>
        </div>
    )
}

export default UnitInput;
