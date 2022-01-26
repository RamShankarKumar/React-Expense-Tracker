import styles from './Toggle.module.css';
import {useState, useContext} from 'react';
import { filterContext } from "../../contexts/filterContext";

const Toggle = () => {
    const [filter, setFilter] = useState('');
    const [debitFilterClass, setDebitFilterClass] = useState('');
    const [creditFilterClass, setCreditFilterClass] = useState('');
    const [debitChecked, setDebitChecked] = useState(false);
    const [creditChecked, setCreditChecked] = useState(false);

    // value that is coming from context provider
    const [filterType, setfilterType] = useContext(filterContext);

    const handleDebitFilter = () => {
        if(debitFilterClass === ''){
            setDebitFilterClass('debitToggleButtonON');
            setFilter('Debit');
            if(creditFilterClass !== ''){
                setCreditFilterClass('');
            }
            setDebitChecked(true);
            setCreditChecked(false);
            console.log(`debitFilter inside if - ${filter}`);
        }
        else{
            setDebitFilterClass('');
            setFilter('');
            setDebitChecked(false);
            console.log(`debitFilter inside else - ${filter}`);
        }
    }

    const handleCreditFilter = () => {
        if(creditFilterClass === ''){
            setCreditFilterClass('creditToggleButtonON');
            setFilter('Credit');
            if(debitFilterClass !== ''){
                setDebitFilterClass('');
            }
            setCreditChecked(true);
            setDebitChecked(false);
            console.log(`creditFilter inside if - ${filter}`);
        }
        else{
            setCreditFilterClass('');
            setFilter('');
            setCreditChecked(false);
            console.log(`creditFilter inside else - ${filter}`);
        }
    }

    const debitChangeHandler = () => {
        if(debitChecked){
            setfilterType('Debit');
        }
        else{
            setfilterType('');
        }
    }

    const creditChangeHandler = () => {
        if(creditChecked){
            setfilterType('Credit');
        }
        else{
            setfilterType('');
        }
    }


    return(
        <div className={styles.toggleContainer}>
            <label htmlFor="debit-filter" className={styles.toggleLabel}>
                <input 
                    type="checkbox"
                    name="debit"
                    id="debit-filter"
                    value="Debit"
                    checked={debitChecked}
                    onChange={debitChangeHandler}
                    className={styles.filterDebitCredit}
                />
                <div className={`${styles.debitToggleButton} ${styles[debitFilterClass]}`} onClick={handleDebitFilter}>{filter === 'Debit' ? filter : ''}</div>
            </label>

            <label htmlFor="credit-filter" className={styles.toggleLabel}>
                <input
                    type="checkbox"
                    name="credit"
                    value="Credit"
                    id="credit-filter"
                    checked={creditChecked}
                    onChange={creditChangeHandler}
                    className={styles.filterDebitCredit}
                />
                <div className={`${styles.creditToggleButton} ${styles[creditFilterClass]}`} onClick={handleCreditFilter}>{filter === 'Credit' ? filter : ''}</div>
            </label>
        </div>
    );
}

export default Toggle;