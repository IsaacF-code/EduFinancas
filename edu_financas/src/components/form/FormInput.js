import { useId } from 'react';
import styles from './FormInput.module.css';
// import CurrencyInput from 'react-currency-input-field';

function Input({ label, type, name, placeholder, value, handleOnChange }){
    const id = useId();
    return (
       <>
       <div className={styles.form_control}>
        <label htmlFor={id}>{label}:</label>
        <input 
         id={id}
         type={type}
         name={name}
         placeholder={placeholder}
         value={value}
         onChange={handleOnChange}
        />
        
       </div>
       {/* <CurrencyInput /> */}
       </>
    )
}

export default Input;