import styles from './Buttons.module.css';
import { Button } from 'react-bootstrap';

function Buttons({ btnText, variant }){
    return (
        <div>
            <Button className={styles.btn} variant={variant}>{btnText}</Button>
        </div>
    )
}

export default Buttons;