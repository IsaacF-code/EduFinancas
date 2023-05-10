import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ProjectForm.module.css';
import FormTable from '../form/table/FormTable.js';
import FormModal from '../form/FormModal.js';
import FormModalConfirm from '../form/FormModalConfirm.js';
import FormSelect from '../form/FormSelect';

function ProjectForm(){

    // useEffect usando fetch para obter as entradas do arquivo .json
    const [entradas, setEntradas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/entrys', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json()).then((data) => setEntradas(data))
        .catch((err) => console.log(err));
    }, [])

    // ------

    const data = [
        { id: 0, entrada: 'Isaac', email: 'isaac@email.com', valor: 10.00 },
        { id: 1, entrada: 'Freires', email: 'freires@email.com', valor: 20 }, 
        { id: 2, entrada: 'Half', email: 'half@email.com', valor: 30 }
    ];
    
    const [formValue, setFormValue] = useState ({
        entrada: '',
        email: '',
        valor: ''
    });

   
    const [usuario, setUsuario] = useState({id: null, name: null, email: null, valor: null})
    const [lista, setLista] = useState([...data])

    useEffect(() => {
        if(usuario.id === null){
            return
        }

        setLista(lista => {return [...lista, usuario]})
        setFormValue({
            entrada: '',
            email: '',
            valor: 0
        }) 
    }, [usuario])

    const handlerClick = (e) => {
        e.preventDefault();
            
        let camposComValores = formValue.entrada.length > 0 && formValue.email.length > 0 && formValue.valor.length > 0;
        if (camposComValores) {
            let novoUsuario = {
                id: uuid(), entrada: formValue.entrada, email: formValue.email, valor: formValue.valor
            };
            novoUsuario.valor = novoUsuario.valor.replace("R$", "");
            setUsuario(novoUsuario);
        } 
       
    }
    
    return (
        <>
        <form className={styles.form}>
            
        <FormTable 
            bordered="bordered"
            striped="striped"
            hover="hover"
            data={lista}
        />
        <FormModal 
            title="Nova entrada"
            value={formValue}
            handleOnChange={setFormValue}
            clickSave={e => handlerClick(e)}
        />
        <FormModalConfirm 
            title="Deseja apagar {nome} ?"
            clickSave={() => console.log("Clicou")}
        />

        <FormSelect 
                name="entrada"
                label="Selecione uma entrada"
                options={entradas}
            />
        </form>
    </>
    )
}

export default ProjectForm;