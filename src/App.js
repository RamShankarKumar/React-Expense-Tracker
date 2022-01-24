import {CardContainer, TrackerContainer} from './components';
import styles from './App.module.css';
import ExpenseForm from './components/expenseForm/ExpenseForm'
import BalanceForm from './components/balanceForm/BalanceForm'

function App() {
  return (
    <div className={styles.appContainer}>
      <CardContainer />
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <ExpenseForm />
          <BalanceForm />
        </div>
        <TrackerContainer />
      </div>
    </div>
  );
}

export default App;
