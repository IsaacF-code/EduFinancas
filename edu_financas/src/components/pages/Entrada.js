import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { v4 as uuid } from 'uuid';
import FormModalConfirm from '../form/modal/FormModalConfirm.js';
import FormModalEditCategory from '../form/modal/FormModalEditCategory.js';
import FormTableEntry from '../form/table/FormTableEntry.js';
import FormModalEntry from '../form/modal/FormModalEntry.js';
import FormDropdown from '../form/FormDropdown.js';

function Entrada(){

    const [entrys, setEntrys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/entrys', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json()).then((data) => setEntrys(data))
        .catch((err) => console.log(err));
    }, []);

 // --------------------------------------------------------------------

 const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories_receita', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json()).then((data) => setCategories(data))
        .catch((err) => console.log(err));
    }, []);

 // --------------------------------------------------------------------

//  const [store, setStore] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/store', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//         .then((res) => res.json()).then((data) => setStore(data))
//         .catch((err) => console.log(err));
//     }, []);

 // --------------------------------------------------------------------

    const [entryName, setEntryName] = useState({ 
        name: '',
        valor: undefined, 
        tipo: '', 
        estabelecimento: '', 
        categoria: ''
    });
    const [aoClick, setAoClick] = useState(false); // variável para executar o useEffect quando clicar no botão salvar



    useEffect(() => { // useEffect para salvar no banco de dados
        if(aoClick){
            fetch('http://localhost:5000/categories_receita', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(entryName)
            })
            .then((res) => res.json()).then((data) => {
                setEntrys([...entrys, data]); // atualiza o estado com o novo dado
                setEntryName('');
                setAoClick(false);
            })
            .catch((err) => console.log(err));
        }   
    }, [entrys, aoClick, entryName])

    const handlerClick = (e) => {
        e.preventDefault();
            
        let camposComValores = entryName.name.length > 0 && entryName.valor.length > 0;
        if (camposComValores) {
            let novaCategoria = {
                id: uuid(), name: entryName.name // --------------------
            };
            setEntryName(novaCategoria);
            setAoClick(true); // seta a variável para true para executar o useEffect
        } else {
            alert('Preencha todos os campos!');
        } 
       
    }
    
    // ------------------------- Edit ------------------------------------
    
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [categoryEdit, setCategoryEdit] = useState(null);

    const handleCategoryEdit = (category) => {
        setCategoryEdit((prevState) => ({ ...prevState, ...category}));
        setShowModalEdit(true);
    }

    const handleEdit = () => {
        fetch(`http://localhost:5000/categories_receita/${categoryEdit.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryEdit)
          })
            .then((resp) => resp.json())
            .then((data) => {
                const pegaIdLista = entrys.map(item => {
                    if(item.id === categoryEdit.id){
                        return categoryEdit;
                    } else {
                        return item;
                    }
                })
                setEntrys(pegaIdLista)
            })
        setShowModalEdit(false);
    }


    // ------------------------- Delete ------------------------------------
    
    const [showModalConfirm, setShowModalConfirm] = useState(false);
    const [categoryDelete, setCategoryDelete] = useState(null)

    const handleCategoryDelete = (category) => {
        setCategoryDelete(category);
        setShowModalConfirm(true);
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/categories_receita/${categoryDelete.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((resp) => resp.json())
            .then((data) => {
                setEntrys(entrys.filter((category) => category.id !== categoryDelete.id))
            })
            setShowModalConfirm(false);
        }
   
    // ------------------------------------------------------------
    const [showModal, setShowModal] = useState(false);
    
    const handleEntry = () => {
        setShowModal(true);
    }

    return (
        <div className={styles.home_container}>
            <h1>Entradas</h1>
            <FormModalEntry
                title="Cadastrar entrada" 
                value={entryName}
                categoryOption={categories}
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                handleOnChange={handleEntry}
                clickSave={(e) => handlerClick(e)}
            />
            <FormDropdown 
                clickR={handleEntry}
            />
            <FormTableEntry
                bordered="bordered"
                striped="striped"
                hover="hover"
                data={entrys}
                onEdit={handleCategoryEdit}
                onDelete={handleCategoryDelete}
            />
            <FormModalEditCategory 
                title="Editar categoria"
                value={categoryEdit}
                handleOnEdit={handleCategoryEdit}
                showModal={showModalEdit}
                closeModal={() => setShowModalEdit(false)}
                clickSave={handleEdit}
            />
             <FormModalConfirm  
                title={`Deseja apagar ${categoryDelete?.name}?`}
                showModal={showModalConfirm}
                closeModal={() => setShowModalConfirm(false)}
                clickSave={handleDelete}
            />
        </div>
    )
}

export default Entrada;