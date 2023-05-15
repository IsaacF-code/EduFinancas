import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ProjectForm.module.css';
import FormTable from '../form/table/FormTable.js';
import FormModal from '../form/FormModal.js';
import FormModalConfirm from '../form/FormModalConfirm.js';
import FormSelect from '../form/FormSelect';
import FormModalEdit from '../form/FormModalEdit';

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
        { id: 0, entrada: 'Isaac', email: 'isaac@email.com', valor: 10 },
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

    // ----------------- Edit -----------------
    
    const [showModalEdit, setShowModalEdit] = useState(false); // useState para abrir/fechar modal
    const [itemEdit, setItemEdit] = useState(null) // useState para pegar o item que será editado

    const handleItemEdit = (item) => {
        setItemEdit((prevItem) => ({ ...prevItem, ...item }));
        setShowModalEdit(true); 
    }

    const handleEdit = () => { 
        const pegaIdLista = lista.map(item => {
            if(item.id === itemEdit.id){
                return itemEdit;
            } else {
                return item;
            }
        })
        itemEdit.valor = itemEdit.valor.replace("R$", "");
        setLista(pegaIdLista);
        setShowModalEdit(false);
    }

    // ------------ Delete ------------
    
    const [showModalConfirm, setShowModalConfirm] = useState(false); // useState para abrir/fechar modal
    const [itemDelete, setItemDelete] = useState(null) // useState para pegar o item que será deletado

     const handleItemDelete = (item) => { // função para pegar o item que será deletado
        setItemDelete(item);
        setShowModalConfirm(true);
        console.log("setItemDelete: ", item);
    }

    const handleDelete = () =>{ // função para deletar o item
            const pegaIdLista = lista.filter((item) => item.id !== itemDelete.id);
            setLista(pegaIdLista);
        setShowModalConfirm(false);
    }

    return (
        <>
        <form className={styles.form}>
            
        <FormTable 
            bordered="bordered"
            striped="striped"
            hover="hover"
            data={lista}
            onEdit={handleItemEdit}
            onDelete={handleItemDelete}
        />
        <FormModal 
            title="Nova entrada"
            value={formValue}
            handleOnChange={setFormValue}
            clickSave={e => handlerClick(e)}
        />
        <FormModalEdit 
            title="Editar entrada"
            value={itemEdit}
            handleOnEdit={handleItemEdit}
            showModal={showModalEdit}
            closeModal={() => setShowModalEdit(false)}
            clickSave={() => {
                handleEdit()
                
            }}
        />
        <FormModalConfirm 
            title={`Deseja apagar ${itemDelete?.entrada}?`}
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