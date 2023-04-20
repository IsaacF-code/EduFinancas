import Input from '../form/Input';
import styles from './ProjectForm.module.css';

function ProjectForm(){
    return (
        <div className={styles.form}>
            <Input
                type="text"
                text="Entrada"
                name="entrada"
                placeholder="Digite a receita ou despesa"
            />
            <Input 
                type="number"
                text="Valor"
                name="valor"
                placeholder="Digite o valor"
            />    
        </div>
    )
}

export default ProjectForm;