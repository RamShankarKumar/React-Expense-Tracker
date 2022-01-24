import styles from './BalanceForm.module.css';

const BalanceForm = () => {
    return(
        <form className={styles.form}>
            <h2 className={`${styles.formheader} ${styles.formItem}`}>Add Balance</h2>
            <div className={styles.formfields}>
                <div className={`${styles.field} ${styles.formItem}`}>
                    <input type='text' name='balance' placeholder='Add balance' />
                </div>
                <button className={`${styles.formButton} ${styles.formItem}`}>Add</button>
            </div>
        </form>
    )
}

export default BalanceForm;