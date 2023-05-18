import { useEffect, useState } from 'react';
import FormModalCategory from '../form/modal/FormModalCategory.js';
import styles from './Home.module.css';
import { v4 as uuid } from 'uuid';
import FormTableCategory from '../form/table/FormTableCategory.js';
import FormModalConfirm from '../form/modal/FormModalConfirm.js';
import FormModalEditCategory from '../form/modal/FormModalEditCategory.js';

function Categoria(){

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json()).then((data) => setCategories(data))
        .catch((err) => console.log(err));
    }, []);

 // --------------------------------------------------------------------

    const [categoryName, setCategoryName] = useState({ name: '' });
    const [aoClick, setAoClick] = useState(false); // variável para executar o useEffect quando clicar no botão salvar



    useEffect(() => { // useEffect para salvar no banco de dados
        if(aoClick){
            fetch('http://localhost:5000/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoryName)
            })
            .then((res) => res.json()).then((data) => {
                console.log(data);
                setCategories([...categories, data]); // atualiza o estado com o novo dado
                setCategoryName('');
                setAoClick(false);
            })
            .catch((err) => console.log(err));
        }   
    }, [categories, aoClick, categoryName])

    const handlerClick = (e) => {
        e.preventDefault();
            
        let camposComValores = categoryName.name.length > 0;
        if (camposComValores) {
            let novaCategoria = {
                id: uuid(), name: categoryName.name
            };
            setCategoryName(novaCategoria);
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
        fetch(`http://localhost:5000/categories/${categoryEdit.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryEdit)
          })
            .then((resp) => resp.json())
            .then((data) => {
                const pegaIdLista = categories.map(item => {
                    if(item.id === categoryEdit.id){
                        return categoryEdit;
                    } else {
                        return item;
                    }
                })
                setCategories(pegaIdLista)
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
        fetch(`http://localhost:5000/categories/${categoryDelete.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((resp) => resp.json())
            .then((data) => {
              setCategories(categories.filter((category) => category.id !== categoryDelete.id))
            })
            setShowModalConfirm(false);
        }
   

    return (
        <div className={styles.home_container}>
            <h1>Categorias</h1>
            <FormModalCategory
                title="Cadastrar categoria" 
                value={categoryName}
                handleOnChange={setCategoryName}
                clickSave={(e) => handlerClick(e)}
            />
            <FormTableCategory
                bordered="bordered"
                striped="striped"
                hover="hover"
                data={categories}
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

export default Categoria;