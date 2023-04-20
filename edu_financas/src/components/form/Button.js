import styles from './Button.module.css';

function Button({ btnText }){
    return (
        <div>
            <button className={styles.btn}>{btnText}</button>
        </div>
    )
}

export default Button;