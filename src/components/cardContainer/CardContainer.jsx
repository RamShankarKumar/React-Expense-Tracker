import styles from './CardContainer.module.css';
import Card from '../card/Card';

const CardContainer = () => {
    return(
        <div className={styles.cardContainer}>
            <Card type='current' amount={15360} />
            <Card type='credited' amount={15460} />
            <Card type='debited' amount= {100} />
        </div>
    );
}

export default CardContainer;