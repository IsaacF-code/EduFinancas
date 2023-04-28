import styles from './FormButton.module.css';
import { Button } from 'react-bootstrap';

function Buttom({ btnText, variant, click }){
    return (
        <>
            <Button className={styles.btn} variant={variant} onClick={click}>{btnText}</Button>
        </>
    )
}

export default Buttom;