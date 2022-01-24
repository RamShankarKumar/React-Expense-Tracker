import styles from './ExpenseCard.module.css';
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const ExpenseCard = ({newExp:{serialNumber, date, item, price, type}}) => {
    date = date.split(',')[1].trim().split(' ');
    const day = date[0];
    const month = date[1];
    const year = date[2];
    return(
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardNumber}>
                    <p>{serialNumber}</p>
                </div>
                <div className={styles.cardHeaderActions}>
                    <div className={styles.debitDataCard_action_edit}>
                        <MdModeEditOutline size={'1.5rem'}/>
                    </div>
                    <div className={styles.debitDataCard_action_delete}>
                        <MdDelete size={'1.5rem'}/>
                    </div>
                </div>
            </div>
            <div className={styles.cardData}>
                <div className={styles.cardData__DatePrice}>
                    <div className={styles.cardDataDate}>
                        <div className={styles.cardDataDateYear}><p>{year}</p></div>
                        <div className={styles.cardDataDateMonth}>{month}</div>
                        <div className={styles.cardDataDateDay}>{day}</div>
                    </div>
                    <div className={`${styles.cardDataPrice} ${styles[type]}`}><FaRupeeSign />{price}</div>
                </div>
                <div className={`${styles.cardDataItem} ${styles[type]}`}>{item}</div>
            </div>
        </div>
    )
}

export default ExpenseCard;