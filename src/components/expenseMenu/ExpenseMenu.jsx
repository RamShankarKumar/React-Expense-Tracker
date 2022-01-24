import styles from './ExpenseMenu.module.css';
import Toggle from '../toggle/Toggle';

const ExpenseMenu = () => {

    const handleAddExpenseClick = () => {
        
    }

    return(
        <div className={styles.expenseMenu}>
            <ul>
                {/* <li className={styles.expenseMenu_newExpense} onClick={handleAddExpenseClick}>New Expense</li>
                <li className={styles.expenseMenu_add}>Add Balance</li> */}
                <li className={styles.expenseMenu_DebitCredit}>{<Toggle />}</li>
                <li className={styles.expenseMenu_delete}>Clear</li>
            </ul>
        </div>
    );
}

export default ExpenseMenu;