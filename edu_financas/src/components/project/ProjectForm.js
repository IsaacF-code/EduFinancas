import Button from '../form/Button';
import Input from '../form/Input';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }){
    
    const submit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form onSubmit={submit} className={styles.form}>
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
            <Button 
                btnText={btnText}
            />    
        </form>
    )
}

export default ProjectForm;