import { ReactComponent as EditButton } from '../../icons/edit.svg';
import { ReactComponent as DeleteButton } from '../../icons/delete.svg';
import styles from './ordersItem.module.scss'

const OrdersItem = ({ order, index, handleDelete, handleEdit }) => {
    return (
        <div className={styles.container}>

            <div className={styles["grid-container"]}>
                <div className={styles["grid-head"]}>
                    Dátum
                </div>
                <div className={styles["grid-head"]}>
                    Csomagpont neve
                </div>
                <div className={styles["grid-head"]}>
                    Küldemény Súlya
                </div>
                <div className={styles["grid-item"]}>
                    {order.date}
                </div>
                <div className={styles["grid-item"]}>
                    {order.pointName}
                </div>
                <div className={styles["grid-item"]}>
                    {order.gramm} gramm
                </div>
                <div className={styles["grid-delete"]}>
                    <DeleteButton className={styles.deleteButton} onClick={() => handleDelete(index)} />
                </div>
                <div className={styles["grid-edit"]}>
                    <EditButton className={styles.editButton} onClick={() => handleEdit(index)} />
                </div>
            </div>

        </div>
    )
}

export default OrdersItem;
