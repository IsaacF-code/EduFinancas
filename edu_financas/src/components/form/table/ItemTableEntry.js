import FormButton from '../button/FormButton.js';

function ItemTable ({ name, email, valor, onEdit, onDelete, data }){
    
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>R${valor}</td>
                <td><FormButton btnText="Editar" variant="warning" click={() => onEdit(data)}/> </td>
                <td><FormButton btnText="Excluir" variant="danger" click={() => onDelete(data)}/></td>
            </tr>
        </>
    )
}

export default ItemTable;