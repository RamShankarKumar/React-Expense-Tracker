import { CardContainer, ExpenseForm, BalanceForm, TrackerContainer } from '../index';
import styles from './AppContainer.module.css';
import { useState } from 'react';
import { dbContext } from "../../contexts/dbContext";
import { filterContext } from "../../contexts/filterContext";

function AppContainer() {
    // value that will be given to the context consumer
    const [DBFlag, setDBFlag] = useState(false);
    const [filterType, setfilterType] = useState("");

    return (
        <div className={styles.appContainer}>
            <dbContext.Provider value={[DBFlag, setDBFlag]}>
                <CardContainer />
                <div className={styles.content}>
                        <filterContext.Provider value={[filterType, setfilterType]}>
                            <div className={styles.formContainer}>
                                <ExpenseForm />
                                <BalanceForm />
                            </div>
                            <TrackerContainer />
                        </filterContext.Provider>
                </div>
            </dbContext.Provider>
        </div>
    );
}

export default AppContainer;
