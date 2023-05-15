import styles from './FormInput.module.css';
import { useId } from 'react';
import InputMask from "react-input-mask";
import { MaskCurrency } from './MaskCurrency';


function FormInputCurrency({ label, name, value, defaultValue, handleOnChange }){
    const id = useId();
    return(
        <div className={styles.form_control}>
            <label htmlFor={id}>{label}:</label>
            <InputMask 
                id={id}
                mask="R$ 99999999999"
                name={name}
                alwaysShowMask={false}
                beforeMaskedStateChange={MaskCurrency}
                value={value}
                defaultValue={defaultValue}
                onChange={handleOnChange}
                
            />
        </div>
    )
}

export default FormInputCurrency;