import { useEffect, useState } from 'react'
import DropdownInput from './components/dropdownInput/DropdownInput';
import OrdersItem from './components/ordersItem/OrdersItem';
import UnitInput from './components/unitInput/UnitInput';
import styles from './orderForm.module.scss'

const OrderForm = ({ points, setResult }) => {

    // States
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || [])
    const [formValues, setFormValues] = useState(JSON.parse(localStorage.getItem('formValues')) || { pointName: '', gramm: '' });
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [editing, setEditing] = useState(JSON.parse(localStorage.getItem('editing')) || null);
    const [isPointPicked, setIsPointPicked] = useState(JSON.parse(localStorage.getItem('isPointPicked')) || false);

    // Action handlers
    const handleSubmit = (event) => {
        event.preventDefault();
        if (submitDisabled) {
            setFormValues({ pointName: '', gramm: '' });
            return;
        }

        const newDate = new Date().toLocaleString("hu-HU", { year: 'numeric', month: 'numeric', day: 'numeric' })
            + ' - ' + new Date().toLocaleString("hu-HU", { hour: 'numeric', minute: 'numeric' });

        const newOrder = {
            date: newDate,
            pointName: formValues.pointName,
            gramm: formValues.gramm
        }

        if (editing !== null) {
            setOrders(orders.map((order, index) => (
                index === editing ? newOrder : order
            )));
            setEditing(null);
        } else {
            setOrders([...orders, newOrder]);
        }
        setFormValues({ pointName: '', gramm: '' });
    }

    const handleInput = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
        if (event.target.name === 'pointName') {
            setIsPointPicked(false);
        }
    }

    const handleDelete = (index) => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    const handleEdit = (index) => {
        if (editing === index) {
            setEditing(null);
            setFormValues({ pointName: '', gramm: '' });
            setIsPointPicked(false);
        } else {
            setEditing(index);
            setFormValues({ pointName: orders[index].pointName, gramm: orders[index].gramm });
            setIsPointPicked(true);
        }
    }

    // Effects
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('formValues', JSON.stringify(formValues));
        localStorage.setItem('editing', JSON.stringify(editing));
        localStorage.setItem('isPointPicked', JSON.stringify(isPointPicked));
    }, [orders, formValues, submitDisabled, editing, isPointPicked]);

    useEffect(() => {
        if (isPointPicked && formValues.gramm !== '' && formValues.gramm > 0) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }, [formValues, isPointPicked]);

    useEffect(() => {
        setResult?.(orders);
    }, [orders, setResult]);

    return (
        <div className={styles.content}>
            <h1 className={styles["title-main"]}>Megrendelő űrlap</h1>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <h2 className={styles["title-secondary"]}>Küldemény Súlya</h2>
                    <UnitInput unitText={"gramm"} handleInput={handleInput} value={formValues.gramm} />
                    <h2 className={styles["title-secondary"]}>Csomagpont</h2>
                    <DropdownInput points={points ?? []} handleInput={handleInput} value={formValues.pointName}
                        isPointPicked={isPointPicked} setIsPointPicked={setIsPointPicked} />
                    <button className={styles.btn} disabled={submitDisabled} type='submit'>Mentés</button>
                </form>
            </div>
            <h1 className={styles["title-main"]}>Megrendelések</h1>
            {orders.map((order, index) => (<OrdersItem key={index} order={order} index={index}
                handleDelete={handleDelete} handleEdit={handleEdit} />))}
        </div>
    )
}

export default OrderForm;
