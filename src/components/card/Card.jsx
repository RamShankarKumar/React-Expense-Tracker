import styles from './Card.module.css';
// import cx from 'classnames';
import { FaRupeeSign } from "react-icons/fa";

const Card = (props) => {
    let headerName = ''
    if(props.type === 'current'){
        headerName = 'CURRENT AMOUNT';
    }else if(props.type === 'credited'){
        headerName = 'TOTAL CREDITED';
    }
    else{
        headerName = 'TOTAL DEBITED';
    }

    return(
        <div className={`${styles.card} ${styles[props.type]}`}>
            <div className={styles.cardHeader}>
                <p>{headerName}</p>
            </div>
            <div className={styles.cardData}>
                <div>
                    <FaRupeeSign size='1.5rem'/>
                </div>
                <div className={styles.cardAmount}>
                    <p>{props.amount}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;