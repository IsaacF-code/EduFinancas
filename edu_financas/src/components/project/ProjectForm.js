import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import FormButton from '../form/FormButton.js';
import FormInput from '../form/inputs/FormInput.js';
import styles from './ProjectForm.module.css';
import FormTable from '../form/table/FormTable.js';
import FormInputCurrency from '../form/inputs/FormInputCurrency.js';

function ProjectForm(){

    const data = [
        { id: 0, name: 'Isaac', email: 'isaac@email.com', valor: 10 },
        { id: 1, name: 'Freires', email: 'freires@email.com', valor: 20 }, 
        { id: 2, name: 'Half', email: 'half@email.com', valor: 30 }
    ];


    const [entrada, setEntrada] = useState('');
    const [email, setEmail] = useState('');
    const [valor, setValor] = useState('');
    const [usuario, setUsuario] = useState({id: null, name: null, email: null, valor: null})
    const [lista, setLista] = useState([...data])

    useEffect(() => {
        if(usuario.id === null){
            return
        }

        setLista(lista => {return [...lista, usuario]})
        setEntrada('');
        setEmail('');
        setValor(0);
    }, [usuario])

    const handlerClick = (e) => {
        e.preventDefault();
            
        let camposComValores = entrada.length > 0 && email.length > 0 && valor.length > 0;
        if (camposComValores) {
            let novoUsuario = {
                id: uuid(), name: entrada, email, valor
            };
            //novoUsuario.valor = novoUsuario.valor.toFixed(2);
            novoUsuario.valor = novoUsuario.valor.replace("R$", "");
            setUsuario(novoUsuario);
            setValor('');
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

            <FormInputCurrency 
                label="Valor"
                value={valor}
                handleOnChange={e => setValor(e.target.value)}
            />
            <span>{valor}</span>
            
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