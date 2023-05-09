import { useEffect, useState } from 'react';
import FormModal from '../form/FormModal';
import FormTable from '../form/table/FormTable';
import styles from './Home.module.css';

function Home(){
    const teste = [
        {id: 0, name: "Isaac", email: "isaac@gmail.com", valor: 10}
    ]

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
    }, [])

    return (
        <div className={styles.home_container}>
            <h1>Categorias</h1>
            <FormModal 
                title="Cadastrar categoria"

            />
            {/* <FormTable 
                bordered="bordered"
                striped="striped"
                hover="hover"
                data={categories}
            /> */}
            
        </div>
    )
}

export default Home;