import styles from './TrackerContainer.module.css'
import ExpenseCard from '../expenseCard/ExpenseCard';
import ExpenseMenu from '../expenseMenu/ExpenseMenu';
import { useState, useEffect, useContext } from 'react';
import { dbContext } from "../../contexts/dbContext";
import { filterContext } from "../../contexts/filterContext";

const TrackerContainer = () => {
    let [expense, setExpense] = useState([]);
    
    // value that is coming from context provider
    const [DBFlag, setDBFlag] = useContext(dbContext);
    const [filterType, setfilterType] = useContext(filterContext);

    useEffect(() => {
        console.log('useEffect inside TrackerContainer');
        console.log(`DBFlag --> ${DBFlag}`);
        console.log(`filterType --> ${filterType}`);

        if(filterType === 'Debit'){
            fetch('http://localhost:5000/debit').then( response => {
                return response.json()
            }).then( data => {
                setExpense(data.expenses);
            })
        }
        else if(filterType === 'Credit'){
            fetch('http://localhost:5000/credit').then( response => {
                return response.json()
            }).then( data => {
                setExpense(data.expenses);
            })
        }
        else if(filterType === ''){
            fetch('http://localhost:5000/all_expenses').then( response => {
                return response.json()
            }).then( data => {
                setExpense(data.expenses);
            })
        }
    }, [DBFlag, filterType]) // It will run at start of the application as well as whenever DBFlag and filterType variable changes.

    const createExpenseCard = () => {
        return expense.map((exp) => (
            exp.type === 'Debit' ?
            <ExpenseCard 
                key={exp.serialNumber} 
                newExp={exp}/> :
            <ExpenseCard 
                key={exp.serialNumber} 
                newExp={exp}/>
        ))
    }

    return(
        <div className={styles.trackerContainer}>
            <ExpenseMenu />
            <div className={styles.expenseCardContainer}>
                {
                    createExpenseCard()
                }
            </div>
        </div>
    );
}

export default TrackerContainer;