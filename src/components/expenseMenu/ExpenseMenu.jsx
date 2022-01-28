import styles from './ExpenseMenu.module.css';
import Toggle from '../toggle/Toggle';
import {useContext} from 'react';
import { dbContext } from "../../contexts/dbContext";

const ExpenseMenu = () => {

    // value that is coming from context provider
    const [DBFlag, setDBFlag] = useContext(dbContext);

    const clearData = async () => {
        const response = await fetch('http://localhost:5000/reset', {
            method: 'DELETE',
        });
        if(response.status === 200){
            console.log('All Data Cleared!')
            setDBFlag(!DBFlag);
        }
        else if (response.status !== 201) {
            throw new Error(`Request failed: ${response.status}`);
        }
    }

    return(
        <div className={styles.expenseMenu}>
            <ul>
                <li className={styles.expenseMenu_DebitCredit}>{<Toggle />}</li>
                <li className={styles.expenseMenu_delete} onClick={clearData}>Clear</li>
            </ul>
        </div>
    );
}

export default ExpenseMenu;