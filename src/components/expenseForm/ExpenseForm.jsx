import styles from './ExpenseForm.module.css';
import React, {useState, useContext} from 'react';
import { dbContext } from "../../contexts/dbContext";

const ExpenseForm = () => {
    const formInitialValues = {"item":"", "price":""};
    const [formData, setFormData] = useState(formInitialValues);

    // value that is coming from context provider
    const [DBFlag, setDBFlag] = useContext(dbContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData( oldFormData => ({...oldFormData, [name]: value}));
    }

    const saveFormData = async () => {
        console.log(JSON.stringify(formData));
        const response = await fetch('http://localhost:5000/add_expense', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(formData)
        });
        if(response.status === 201){
            console.log('data inserted!')
            alert("Data Inserted!");
            setDBFlag(!DBFlag);
        }
        else if (response.status !== 201) {
            throw new Error(`Request failed: ${response.status}`);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default submission
        try {
            await saveFormData();
            setFormData({"item":"", "price":""});
        } catch (e) {
            alert(`Registration failed! ${e.message}`);
        }
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
                        required
                    />
                </div>
                <div className={`${styles.field} ${styles.formItem}`}>
                    <label>Price</label>
                    <input 
                        type='number' 
                        name='price' 
                        placeholder='Price' 
                        value={formData.price} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className={`${styles.formButton} ${styles.formItem}`}>Add</button>
            </div>
        </form>
    )
}

export default ExpenseForm;