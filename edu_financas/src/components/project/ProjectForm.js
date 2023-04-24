import { useState } from 'react';
import Buttom from '../form/Buttom';
import Input from '../form/Input';
import styles from './ProjectForm.module.css';

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
            <Input
                type="text"
                text="Entrada"
                name="entrada"
                placeholder="Digite a receita ou despesa"
                value={entrada}
                handleOnChange={e => setEntrada(e.target.value)}
            />
            <span>{entrada}</span>
            <Input 
                type="number"
                text="Valor"
                name="valor"
                placeholder="Digite o valor"
                value={valor}
                handleOnChange={e => setValor(e.target.value)}
            />
            <span>{valor}</span>

            {/* <Input 
                type="number"
                text="Valor"
                name="valor"
                placeholder="Digite o valor"
                value={valor}
                handleOnChange={numberFormated}
            /> */}

            <Buttom 
                btnText={btnText}
                variant="success"
            />    
        </form>
    )
}

export default ProjectForm;