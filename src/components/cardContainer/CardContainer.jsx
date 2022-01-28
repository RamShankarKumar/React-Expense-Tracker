import styles from './CardContainer.module.css';
import Card from '../card/Card';
import React, { useState, useEffect, useContext } from 'react';
import { dbContext } from "../../contexts/dbContext";

const CardContainer = () => {
    const [amounts, setAmounts] = useState([]);

    const [totalAmounts] = amounts;

    // value that is coming from context provider
    const [DBFlag, setDBFlag] = useContext(dbContext);

    useEffect(() => {
        console.log('dbflag inside card container ', DBFlag );
        fetch('http://localhost:5000/amounts').then( response => {
            return response.json()
        }).then( data => {
            setAmounts(data.amounts); // spreading the list of objects data. seding only object inside of a list and not the list with objects.
        })
    }, [DBFlag]) // It will run at start of the application as well as whenever DBFlag variable changes.

    return(
        <div className={styles.cardContainer}>
            <Card type='current' amount={amounts.length ? totalAmounts.total : 0} />
            <Card type='credited' amount={amounts.length ? totalAmounts.credit : 0} />
            <Card type='debited' amount= {amounts.length ? totalAmounts.debit : 0} />
        </div>
    );
}

export default CardContainer;