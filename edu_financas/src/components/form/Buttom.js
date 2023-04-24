import styles from './Buttom.module.css';
import { Button } from 'react-bootstrap';

function Buttom({ btnText, variant }){
    return (
        <>
            <Button className={styles.btn} variant={variant}>{btnText}</Button>
        </>
    )
}

export default Buttom;