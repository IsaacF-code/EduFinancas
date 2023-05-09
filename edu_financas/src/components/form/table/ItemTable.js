import FormButton from '../FormButton.js';

function ItemTable ({ name, email, valor }){
    const handleEdit = () => {
        console.log("Editando")
    }
    const handleDelete = () => {
        console.log("Deletando");
    }

    
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>R${valor}</td>
                <td><FormButton btnText="Editar" variant="warning" click={handleEdit}/> </td>
                <td><FormButton btnText="Excluir" variant="danger" click={handleDelete}/></td>
            </tr>
        </>
    )
}

export default ItemTable;