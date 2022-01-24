import styles from './Toggle.module.css';
import React, {useState} from 'react';

const Toggle = () => {
    const [filter, setFilter] = useState('');
    const [debitFilterClass, setDebitFilterClass] = useState('');
    const [creditFilterClass, setCreditFilterClass] = useState('');
    const [debitChecked, setDebitChecked] = useState(false);
    const [creditChecked, setCreditChecked] = useState(false);

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


    return(
        <div className={styles.toggleContainer}>
            <label htmlFor="debit-filter" className={styles.toggleLabel}>
                <input 
                    type="checkbox"
                    name="debit"
                    id="debit-filter"
                    value="Debit"
                    checked={debitChecked}
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
                    className={styles.filterDebitCredit}
                />
                <div className={`${styles.creditToggleButton} ${styles[creditFilterClass]}`} onClick={handleCreditFilter}>{filter === 'Credit' ? filter : ''}</div>
            </label>
        </div>
    );
}

export default Toggle;