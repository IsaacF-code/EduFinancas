import { useEffect, useState } from 'react';
import FormModalCategory from '../form/modal/FormModalCategory.js';
import styles from './Home.module.css';
import { v4 as uuid } from 'uuid';
import FormTableCategory from '../form/table/FormTableCategory.js';
import FormModalConfirm from '../form/modal/FormModalConfirm.js';
import FormModalEditCategory from '../form/modal/FormModalEditCategory.js';

function Categoria(){
    // State para pegar as categorias

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

    const [categoriesDespesa, setCategoriesDespesa] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories_despesa', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json()).then((data) => setCategoriesDespesa(data))
        .catch((err) => console.log(err));
    }, [])

    // --------------------------------------------------------------------
    // State para pegar os tipos de categoria

    const [type, setType] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/type', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json()).then((data) => setType(data))
        .catch((err) => console.log(err));
    }, []);

 // --------------------------------------------------------------------

    const [categoryName, setCategoryName] = useState({ name: '', type: '' });
    const [aoClick, setAoClick] = useState(false); // variável para executar o useEffect quando clicar no botão salvar
    const [table, setTable] = useState('') // variável para mudar a tabela de categorias

    useEffect(() => { // useEffect para salvar no banco de dados
        if(aoClick){
            fetch(`http://localhost:5000/${table}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoryName)
            })
            .then((res) => res.json()).then((data) => {
                if(categoryName.type === 'Despesa'){
                    fetch('http://localhost:5000/categories_despesa')
                    .then((res) => res.json())
                    .then((categoriesDespesa) => {
                        setCategoriesDespesa(categoriesDespesa);
                        setCategoryName({ name: '', type: 'Selecione uma opção' });
                        setAoClick(false);
                    })
                    .catch((err) => console.log(err))
                } else {
                    setCategories([...categories, data]); // atualiza o estado com o novo dado
                    setCategoryName({ name: '', type: 'Selecione uma opção' });
                    setAoClick(false);
                }
            })
            .catch((err) => console.log(err));
        }   
    }, [categories, aoClick, categoryName, table]);

    const handlerClick = (e) => {
        e.preventDefault();
            
        let camposComValores = categoryName.name.length > 0 && categoryName.type.length > 0;
        if (camposComValores) {
            let novaCategoria = {
                id: uuid(), name: categoryName.name, type: categoryName.type
            };
            setCategoryName(novaCategoria);
            
            // Verifica se o tipo de categoria é receita ou despesa
            if(categoryName.type === 'Receita'){
                setTable('categories_receita');
            } else if (categoryName.type === 'Despesa') {
                setTable('categories_despesa');
            }
            
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

    // ------------------------- Edit Despesa ------------------------------------
    
    const [showModalEditD, setShowModalEditD] = useState(false);
    const [categoryEditD, setCategoryEditD] = useState(null);

    const handleCategoryEditD = (category) => {
        setCategoryEditD((prevState) => ({ ...prevState, ...category}));
        setShowModalEditD(true);
    }

    const handleEditD = () => {
        fetch(`http://localhost:5000/categories_despesa/${categoryEditD.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryEditD)
          })
            .then((resp) => resp.json())
            .then((data) => {
                const pegaIdLista = categoriesDespesa.map(item => {
                    if(item.id === categoryEditD.id){
                        return categoryEditD;
                    } else {
                        return item;
                    }
                })
                setCategoriesDespesa(pegaIdLista)
            })
        setShowModalEditD(false);
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
              setCategories(categories.filter((category) => category.id !== categoryDelete.id))
            })
            setShowModalConfirm(false);
        }
   
        // ------------------------- Delete Despesa ------------------------------------
    
    const [showModalConfirmD, setShowModalConfirmD] = useState(false);
    const [categoryDeleteD, setCategoryDeleteD] = useState(null)
    
    const handleCategoryDeleteD = (category) => {
        setCategoryDeleteD(category);
        setShowModalConfirmD(true);
    }
    
    const handleDeleteD = () => {
        fetch(`http://localhost:5000/categories_despesa/${categoryDeleteD.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setCategoriesDespesa(categoriesDespesa.filter((category) => category.id !== categoryDeleteD.id))
            })
            setShowModalConfirmD(false);
    }

    return (
        <div className={styles.home_container}>
            <h1>Categorias</h1>
            <FormModalCategory
                title="Cadastrar categoria" 
                options={type}
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
            <FormTableCategory 
                bordered="bordered"
                striped="striped"
                hover="hover"
                data={categoriesDespesa}
                onEdit={handleCategoryEditD}
                onDelete={handleCategoryDeleteD}
            />
            <FormModalEditCategory 
                title="Editar categoria"
                value={categoryEdit}
                options={type}
                handleOnEdit={handleCategoryEdit}
                showModal={showModalEdit}
                closeModal={() => setShowModalEdit(false)}
                clickSave={handleEdit}
            />
            <FormModalEditCategory 
                title="Editar categoria"
                value={categoryEditD}
                options={type}
                handleOnEdit={handleCategoryEditD}
                showModal={showModalEditD}
                closeModal={() => setShowModalEditD(false)}
                clickSave={handleEditD}
            />
            <FormModalConfirm  
                title={`Deseja apagar ${categoryDelete?.name}?`}
                showModal={showModalConfirm}
                closeModal={() => setShowModalConfirm(false)}
                clickSave={handleDelete}
            />
            <FormModalConfirm  
                title={`Deseja apagar ${categoryDeleteD?.name}?`}
                showModal={showModalConfirmD}
                closeModal={() => setShowModalConfirmD(false)}
                clickSave={handleDeleteD}
            />
        </div>
    )
}

export default Categoria;