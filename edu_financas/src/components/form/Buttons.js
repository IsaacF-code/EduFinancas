import styles from './Buttons.module.css';
import { Button } from 'react-bootstrap';

function Buttons({ btnText, variant }){
    return (
        <>
            <Button className={styles.btn} variant={variant}>{btnText}</Button>
        </>
    )
}

export default Buttons;