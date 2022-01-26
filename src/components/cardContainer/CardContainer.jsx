import styles from './CardContainer.module.css';
import Card from '../card/Card';
import { useState, useEffect, useContext } from 'react';
import { dbContext } from "../../contexts/dbContext";

const CardContainer = () => {
    const [amounts, setAmounts] = useState({});

    // value that is coming from context provider
    const [DBFlag, setDBFlag] = useContext(dbContext);

    useEffect(() => {
        fetch('http://localhost:5000/amounts').then( response => {
            return response.json()
        }).then( data => {
            setAmounts(data.amounts);
        })
    }, [DBFlag]) // It will run at start of the application as well as whenever DBFlag variable changes.

    return(
        <div className={styles.cardContainer}>
            <Card type='current' amount={15360} />
            <Card type='credited' amount={15460} />
            <Card type='debited' amount= {100} />
        </div>
    );
}

export default CardContainer;