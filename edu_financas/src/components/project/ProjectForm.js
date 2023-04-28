import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import FormButton from '../form/FormButton.js';
import FormInput from '../form/FormInput.js';
import styles from './ProjectForm.module.css';
import FormTable from '../form/FormTable.js';

function ProjectForm(){
    // const [valor, setValor] = useState('');
    
    // const numberFormated = (e) =>{
    //     const numeroFormatado = e.event.value !== '' ?
    //     new Intl.NumberFormat('pt-BR', {
    //         style: 'currency',
    //         currency: 'BRL',
    //     }).format(e.event.value) : '';
    //     setValor(numeroFormatado);
    // }

    const data = [
        { id: 0, name: 'Isaac', email: 'isaac@email.com' },
        { id: 1, name: 'Freires', email: 'freires@email.com' }, 
        { id: 2, name: 'Half', email: 'half@email.com' }
    ];


    const [entrada, setEntrada] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState({id: null, name: null, email: null})
    const [lista, setLista] = useState([...data])

    useEffect(() => {
        if(usuario.id === null){
            return
        }

        setLista(lista => {return [...lista, usuario]})
        setEntrada('');
        setEmail('');
    }, [usuario])

    const handlerClick = (e) => {
        e.preventDefault();
        
        let camposComValores = entrada.length > 0 && email.length > 0;
        if (camposComValores) {
            let novoUsuario = {
                id: uuid(), name: entrada, email
            };
            setUsuario(novoUsuario);
        }
    }
    
    return (
        <>
        <form className={styles.form}>
            <FormInput
                type="text"
                label="Entrada"
                name="entrada"
                placeholder="Digite a receita ou despesa"
                value={entrada}
                handleOnChange={e => setEntrada(e.target.value)}
            />
            <span>{entrada}</span>
            <FormInput 
                type="text"
                label="E-mail"
                name="email"
                placeholder="Digite o email"
                value={email}
                handleOnChange={e => setEmail(e.target.value)}
            />
            <span>{email}</span>

            {/* <FormInput 
                type="number"
                text="Valor"
                name="valor"
                placeholder="Digite o valor"
                value={valor}
                handleOnChange={numberFormated}
            /> */}

            <FormButton 
                btnText="Salvar"
                variant="success"
                click={e => handlerClick(e)}
            />    
        </form>
        <FormTable 
            bordered="bordered"
            striped="striped"
            hover="hover"
            data={lista}
        />
    </>
    )
}

export default ProjectForm;