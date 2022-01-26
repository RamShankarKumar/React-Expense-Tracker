import styles from './BalanceForm.module.css';
import {useState, useContext} from 'react';
import { dbContext } from "../../contexts/dbContext";

const BalanceForm = () => {
    const formInitialValues = {"balance":""};
    const [formData, setFormData] = useState(formInitialValues);

    // value that is coming from context provider
    const [DBFlag, setDBFlag] = useContext(dbContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData( oldFormData => ({...oldFormData, [name]: value}));
    }

    const saveFormData = async () => {
        console.log(JSON.stringify(formData));
        const response = await fetch('http://localhost:5000/add_balance', {
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
            setFormData({"balance":""});
        } catch (e) {
            alert(`Registration failed! ${e.message}`);
        }
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={`${styles.formheader} ${styles.formItem}`}>Add Balance</h2>
            <div className={styles.formfields}>
                <div className={`${styles.field} ${styles.formItem}`}>
                    <input 
                        type='number' 
                        name='balance' 
                        placeholder='Add balance' 
                        value={formData.balance}  
                        onChange={handleChange} 
                        required/>
                </div>
                <button className={`${styles.formButton} ${styles.formItem}`}>Add</button>
            </div>
        </form>
    )
}

export default BalanceForm;