import FormButton from '../button/FormButton.js';

function ItemTableCategory ({ name, onEdit, onDelete, data }){
    
    return(
        <>
            <tr>
                <td>{name}</td>
                <td><FormButton btnText="Editar" variant="warning" click={() => onEdit(data)}/> </td>
                <td><FormButton btnText="Excluir" variant="danger" click={() => onDelete(data)}/></td>
            </tr>
        </>
    )
}

export default ItemTableCategory;