import styles from './ExpenseForm.module.css';
import React, {useState} from 'react';

const ExpenseForm = () => {
    const formInitialValues = {"item":"", "price":""};
    const [formData, setFormData] = useState(formInitialValues);

    console.log(formData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.cross}></div>
            <h2 className={`${styles.formheader} ${styles.formItem}`}>New Expense</h2>
            <div className={styles.formfields}>
                <div className={`${styles.field} ${styles.formItem}`}>
                    <label>Item</label>
                    <input 
                        type='text' 
                        name='item' 
                        placeholder='New Item' 
                        value={formData.item} 
                        onChange={handleChange}
                    />
                </div>
                <div className={`${styles.field} ${styles.formItem}`}>
                    <label>Price</label>
                    <input 
                        type='text' 
                        name='price' 
                        placeholder='Price' 
                        value={formData.price} 
                        onChange={handleChange}
                    />
                </div>
                <button className={`${styles.formButton} ${styles.formItem}`}>Add</button>
            </div>
        </form>
    )
}

export default ExpenseForm;