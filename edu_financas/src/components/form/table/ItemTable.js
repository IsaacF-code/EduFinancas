import FormButton from '../FormButton.js';

function ItemTable ({ name, email, valor }){
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>R${valor}</td>
                <td><FormButton btnText="Editar" variant="warning" /> </td>
                <td><FormButton btnText="Excluir" variant="danger" /></td>
            </tr>
        </>
    )
}

export default ItemTable;