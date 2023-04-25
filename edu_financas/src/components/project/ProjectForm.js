import { useState } from 'react';
import FormButton from '../form/FormButton.js';
import FormInput from '../form/FormInput.js';
import styles from './ProjectForm.module.css';
// import ItemTable from '../form/ItemTable';
import FormTable from '../form/FormTable.js';

function ProjectForm({ btnText }){
    // const [valor, setValor] = useState('');
    
    // const numberFormated = (e) =>{
    //     const numeroFormatado = e.event.value !== '' ?
    //     new Intl.NumberFormat('pt-BR', {
    //         style: 'currency',
    //         currency: 'BRL',
    //     }).format(e.event.value) : '';
    //     setValor(numeroFormatado);
    // }

    const [entrada, setEntrada] = useState('');

    const [valor, setValor] = useState('');
    
    const submit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <FormInput
                type="text"
                text="Entrada"
                name="entrada"
                placeholder="Digite a receita ou despesa"
                value={entrada}
                handleOnChange={e => setEntrada(e.target.value)}
            />
            <span>{entrada}</span>
            <FormInput 
                type="number"
                text="Valor"
                name="valor"
                placeholder="Digite o valor"
                value={valor}
                handleOnChange={e => setValor(e.target.value)}
            />
            <span>{valor}</span>

            {/* <FormInput 
                type="number"
                text="Valor"
                name="valor"
                placeholder="Digite o valor"
                value={valor}
                handleOnChange={numberFormated}
            /> */}
            
            <FormTable 
                border="bordered"
                striped="striped"
                hover="hover"
            />

            {/* <ItemTable /> */}

            <FormButton 
                btnText={btnText}
                variant="success"
            />    
        </form>
    )
}

export default ProjectForm;