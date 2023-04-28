function ItemTable ({ name, email }){
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
            </tr>
        </>
    )
}

export default ItemTable;