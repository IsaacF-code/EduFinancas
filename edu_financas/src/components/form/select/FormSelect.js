import { Form } from "react-bootstrap";
import styles from './FormSelect.module.css';
import { useId } from "react";

function FormSelect({ name, label, options, value, defaultValue, handleOnChange }) {
    const id = useId()
    return(
        <>
            <div className={styles.form_control}>
                <label htmlFor={name} id={id}>{label}:</label>
                <Form.Select
                    value={value || undefined}
                    onChange={handleOnChange}
                    defaultValue={defaultValue}
                >
                    <option>Selecione uma opção</option>
                    {options?.map(option => (
                        <option key={option.id}>
                            {option.name}
                        </option>
                    ))}
                </Form.Select>            
           </div>
        </>
    )
}

export default FormSelect;