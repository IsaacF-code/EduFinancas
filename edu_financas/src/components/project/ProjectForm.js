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

    const handleEdit = (listaEdit) => {
        const pegaIdLista = lista.map(item => {
            if(item.id === listaEdit.id){
                return listaEdit;
            } else {
                return item;
            }
        })
        setLista(pegaIdLista);
    }

    const [showModalConfirm, setShowModalConfirm] = useState(false); // useState para abrir/fechar modal
    const [itemDelete, setItemDelete] = useState(null) // useState para pegar o item que será deletado

     const handleItemDelete = (item) => { // função para pegar o item que será deletado
        setItemDelete(item);
        setShowModalConfirm(true);
        console.log("setItemDelete: ", item);
    }

    const handleDelete = () =>{ // função para deletar o item
        const item = lista.find((item) => item.id === itemDelete);
        if(item){
            const pegaIdLista = lista.filter((item) => item.id !== itemDelete);
            setLista(pegaIdLista);
            //console.log("setLista: ", pegaIdLista)
        }
        setShowModalConfirm(false);
    }
    
    //console.log(handleDelete);

    return (
        <>
        <form className={styles.form}>
            
        <FormTable 
            bordered="bordered"
            striped="striped"
            hover="hover"
            data={lista}
            onEdit={handleEdit}
            onDelete={handleItemDelete}
        />
        <FormModal 
            title="Nova entrada"
            value={formValue}
            handleOnChange={setFormValue}
            clickSave={e => handlerClick(e)}
        />
        <FormModalConfirm 
            title={`Deseja apagar ${itemDelete}?`}
            showModal={showModalConfirm}
            closeModal={() => setShowModalConfirm(false)}
            clickSave={handleDelete}
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