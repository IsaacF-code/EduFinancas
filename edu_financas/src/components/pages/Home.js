import ProjectForm from '../project/ProjectForm';
import styles from './Home.module.css';

function Home(){
    return (
        <div className={styles.home_container}>
            <h1>Home</h1>
            <ProjectForm 
                btnText="Salvar"
            />
        </div>
    )
}

export default Home;