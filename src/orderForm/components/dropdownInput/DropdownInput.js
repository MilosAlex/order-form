import { useState, useEffect } from 'react';
import { ReactComponent as DownButton } from '../../icons/arrow-down.svg';
import styles from './dropdownInput.module.scss'

const DropdownInput = ({ points, handleInput, value, isPointPicked, setIsPointPicked }) => {

    // States
    const [isOpen, setIsOpen] = useState(false);

    // Action handlers
    const handleDropdownOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleDropdownItemClick = (point) => {
        handleInput({ target: { name: 'pointName', value: point.title } });
        setIsPointPicked(true);
        setIsOpen(false);
    }

    // Effects
    useEffect(() => {
        if (!isPointPicked && value !== '') {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [value, isPointPicked])

    // Predicate functions
    const filterElements = (element) => {
        return element.title.toLowerCase().includes(value.toLowerCase()) ||
            element.address.toLowerCase().includes(value.toLowerCase()) ||
            element.city.toLowerCase().includes(value.toLowerCase()) ||
            element.zip.toLowerCase().includes(value.toLowerCase());
    }

    return (
        <div className={styles["dropdown-input"]}>
            <input name='pointName' type="text" onInput={handleInput} value={value} />
            <DownButton onClick={handleDropdownOpen} className={`${styles["down-button"]} ${isOpen ? styles.opened : ""}`} />
            {isOpen && <div className={styles["dropdown-list"]}>

                {points.filter(filterElements).slice(0, 5).map((point, index) => {
                    return (
                        <div key={index} className={styles["dropdown-item"]} onClick={() => handleDropdownItemClick(point)}>
                            <div>{`${point.title} (${point.city})`}</div>
                        </div>
                    )
                })}

            </div>}
        </div>
    )
}

export default DropdownInput;
