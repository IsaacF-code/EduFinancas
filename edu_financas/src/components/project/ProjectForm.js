// import { useState } from 'react';
import Buttons from '../form/Buttons';
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
            />
            <Input 
                type="number"
                text="Valor"
                name="valor"
                placeholder="Digite o valor"
            />
            {/* <Input 
                type="number"
                text="Valor"
                name="valor"
                placeholder="Digite o valor"
                value={valor}
                onChange={numberFormated}
            /> */}
            <Buttons 
                btnText={btnText}
                variant="success"
            />    
        </form>
    )
}

export default ProjectForm;