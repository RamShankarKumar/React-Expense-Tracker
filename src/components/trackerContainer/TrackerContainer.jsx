import styles from './TrackerContainer.module.css'
import ExpenseCard from '../expenseCard/ExpenseCard';
import ExpenseMenu from '../expenseMenu/ExpenseMenu';
import React, { useState, useEffect } from 'react';

const TrackerContainer = () => {
    let [expense, setExpense] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all_expenses').then( response => {
            return response.json()
        }).then( data => {
            setExpense(data.expenses);
        })
    }, []) // It will run only for once after first render of the component on app startup.

    return(
        <div className={styles.trackerContainer}>
            <ExpenseMenu />
            <div className={styles.expenseCardContainer}>
                {
                    expense.map((exp) => (
                        exp.type === 'Debit' ? 
                        <ExpenseCard key={exp.serialNumber} newExp={exp}/> :
                        <ExpenseCard key={exp.serialNumber} newExp={exp}/>
                    ))
                }
            </div>
        </div>
    );
}

export default TrackerContainer;